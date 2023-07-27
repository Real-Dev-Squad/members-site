import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../../test__utils/renderWithProvides";
import { filteredTags } from "../../../../mocks/db/filteredTags";

import Tags from "../../../../components/Modals/MembersSkillUpdateModal/components/TagsModal/Tags";

const payload = {
  itemId: `KTkF4vAd6tsuBw84oZXt`,
  itemType: "USER",
  tagId: "4qvOozqaWIiHT4fBlVjk",
  levelId: "1dOI6j3YNW4XQR5rwQsm",
  tagType: "SKILL",
  levelName: "7",
  tagName: "EMBER",
  levelValue: 7,
};

describe("Tags", () => {
  test.only("renders correctly", async () => {
    const setSearchTags = jest.fn();
    const setIsTagsOpen = jest.fn();

    renderWithProviders(
      <Tags
        filteredTags={filteredTags}
        username="anish"
        inputRef={HTMLInputElement}
        setIsTagsOpen={setIsTagsOpen}
        setSearchTags={setSearchTags}
      />
    );

    await waitFor(() => {
      const buttonElement = screen.getAllByRole("button");
      fireEvent.click(buttonElement[0]);
      expect(buttonElement).toHaveLength(filteredTags.length);
    });
  });
});
