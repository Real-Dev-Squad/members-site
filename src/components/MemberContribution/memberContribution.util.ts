const calculateTime = (cycle:number,interval:number)=>Math.floor(cycle/interval);

export function calculateTimeStamp(startedOn:number,endsOn = Date.now(),completedDate=false){

  // this is done cause startedOn & endsOn is unix timestamp converting it to milliseconds
  const startOn_time_millisecds = startedOn*1000
  const endsOn_time_millisecs = endsOn*1000


    // the below time is converted from milliseconds to  seconds
    const diff_time_secs = Math.floor(endsOn_time_millisecs-startOn_time_millisecds)/1000;

    if(completedDate){
        const dateObject = new Date(startedOn);
        const month = dateObject.toLocaleString('default',{month:'long'})
        return `${dateObject.getDate()} ${month}, ${dateObject.getFullYear()}`
    }
    
    const mins = calculateTime(diff_time_secs, 60);
    const hours = calculateTime(mins,60);
    const days  = calculateTime(hours,24);
    const weeks = calculateTime(days,7);
    const months = calculateTime(days,30);
    const year = calculateTime(months,12);

    //reslts here mean by default 
    let result = year;
    let cycle = 'year';
    
    // if time diff in seconds in less than a second ;) very unlikely case then we return 0 seconds

    if(diff_time_secs < 1){
        return '0 seconds';
    }

    if (year > 0) {
        result = year;
        cycle = 'year';
      } else if (months > 0) {
        result = months;
        cycle = 'month';
      } else if (weeks > 0) {
        result = weeks;
        cycle = 'week';
      } else if (days > 0) {
        result = days;
        cycle = 'day';
      } else if (hours > 0) {
        result = hours;
        cycle = 'hour';
      } else if (mins > 0) {
        result = mins;
        cycle = 'minute';
      } else {
        result = diff_time_secs;
        cycle = 'second';
      }
    
      return `${result} ${cycle}${result > 1 ? 's' : ''}`;
    }
