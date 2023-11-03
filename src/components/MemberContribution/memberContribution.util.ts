const calculateTime = (cycle: number, interval: number) =>
  Math.floor(cycle / interval);

// function calculates the timestamp for all sorts of cases
// estimated completion, feature live date, estimated in and etc

export function calculateTimeStamp({
  completedDate = false,
  startedOn,
  endsOn = Date.now(),
}: {
  completedDate?: boolean;
  startedOn?: any;
  endsOn?: any;
}): string {
  // the below time is converted from milliseconds to  seconds
  const diff_time_secs = Math.floor(endsOn - startedOn) / 1000;

  if (completedDate) {
    const dateObject = new Date(startedOn);
    const month = dateObject.toLocaleString('default', { month: 'long' });
    return `${dateObject.getDate()} ${month}, ${dateObject.getFullYear()}`;
  }

  const mins = calculateTime(diff_time_secs, 60);
  const hours = calculateTime(mins, 60);
  const days = calculateTime(hours, 24);
  const weeks = calculateTime(days, 7);
  const months = calculateTime(days, 30);
  const year = calculateTime(months, 12);

  //reslts here mean by default
  let result = year;
  let cycle = 'year';

  // if time diff in seconds in less than a second ;) very unlikely case then we return 0 seconds

  if (diff_time_secs < 1) {
    return '0 seconds';
  }

  switch (true) {
    case year > 0:
      result = year;
      cycle = 'year';
      break;

    case months > 0:
      result = months;
      cycle = 'month';
      break;

    case weeks > 0:
      result = weeks;
      cycle = 'week';
      break;

    case days > 0:
      result = days;
      cycle = 'day';
      break;

    case hours > 0:
      result = hours;
      cycle = 'hour';
      break;

    case mins > 0:
      result = mins;
      cycle = 'minute';
      break;

    default:
      result = diff_time_secs;
      cycle = 'second';
      break;
  }

  return `${result} ${cycle}${result > 1 ? 's' : ''}`;
}

// checks if the status is verified or not for the current task
export function isStatusVerifiedOrNotVerified({ task }: { task: any }) {
  let completionDuration: any, displayFeatureLiveDate: string;
  
  displayFeatureLiveDate = calculateTimeStamp({
    startedOn: task?.endsOn * 1000,
    completedDate: true,
  });

  if(task?.startedOn && task?.endsOn) {
    completionDuration = calculateTimeStamp({
      startedOn: task?.startedOn * 1000,
      endsOn: task?.endsOn * 1000,
      completedDate: false,
    });
  } else {
    return { completionDuration: "N/A" }
  }

  return { completionDuration, displayFeatureLiveDate };
}

// executes if the the title in task is missing in other words data is present in prList
export function taskTitleMissing({
  createdAt,
  updatedAt,
}: {
  createdAt: number;
  updatedAt: number;
}) {
  let completionDuration: any, displayFeatureLiveDate: string;

  completionDuration = calculateTimeStamp({
    startedOn: createdAt,
    endsOn: updatedAt,
    completedDate: false,
  });

  displayFeatureLiveDate = calculateTimeStamp({
    startedOn: updatedAt,
    completedDate: true,
  });

  return { completionDuration, displayFeatureLiveDate };
}
