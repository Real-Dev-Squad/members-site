import React from "react";
import { render } from "@testing-library/react";

import NewMembersCard from "./../../../../../src/components/new-member/index";

describe("NewMembersCard", () => {
     it("renders the component", () => {
          const newMemberFirstName = "Sunny";
          const newMemberLastName = "Kumar";
          const newMemberImageSrc = "https://members.realdevsquad.com/images/Avatar.png";

          const { container } = render(
               <NewMembersCard
                    newMemberFirstName={newMemberFirstName}
                    newMemberLastName={newMemberLastName}
                    newMemberImageSrc={newMemberImageSrc}
               />
          );
          expect(container).toMatchSnapshot();
     });
});
