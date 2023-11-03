import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test__utils/renderWithProvides";
import {
  noteworthyTasks,
  allContributions,
} from "../../../../mocks/db/tasksData";
import ContributionAccordianItem from "../../../../components/MemberContribution/ContributionAccordianItem";

describe("ContributionAccordianItem", () => {
  test("should render correctly if all details are present", () => {
    const openTaskStatusUpdateModal = jest.fn();

    renderWithProviders(
      <ContributionAccordianItem
        task={noteworthyTasks[0].task}
        key={0}
        title={true}
        openTaskStatusUpdateModal={openTaskStatusUpdateModal}
      />
    );

    const contributionHeading = screen.getByRole("heading", { level: 3 });
    expect(contributionHeading).toBeInTheDocument();

    const completeDate = screen.getByText(/11 months/i);
    expect(completeDate).toBeInTheDocument();

    const featureUrl = screen.getByText("Check out this feature in action");
    expect(featureUrl).toBeInTheDocument();
  });

  test("should not render featureUrl if url or featureUrl is not present", () => {
    const openTaskStatusUpdateModal = jest.fn();

    const task = allContributions.all[2].task;

    renderWithProviders(
      <ContributionAccordianItem
        task={task}
        key={0}
        title={false}
        openTaskStatusUpdateModal={openTaskStatusUpdateModal}
      />
    );

    const contributionHeading = screen.getByRole("heading", { level: 3 });
    expect(contributionHeading).toBeInTheDocument();
  });

  test("should render N/A if startedOn or endsOn date is not present", () => {
    const openTaskStatusUpdateModal = jest.fn();

    const task = allContributions.all[3].task;

    renderWithProviders(
      <ContributionAccordianItem
        task={task}
        key={0}
        title={true}
        openTaskStatusUpdateModal={openTaskStatusUpdateModal}
      />
    );

    const contributionHeading = screen.getByRole("heading", { level: 3 });
    expect(contributionHeading).toBeInTheDocument();

    const completeDate = screen.getByText("N/A");
    expect(completeDate).toBeInTheDocument();
  });
});
