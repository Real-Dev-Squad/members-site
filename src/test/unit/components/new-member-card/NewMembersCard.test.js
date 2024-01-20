import { renderWithProviders } from "../../../../test__utils/renderWithProvides";
import React from "react";
import NewMembersCard from "../../../../components/NewMemberSection/NewMemberCard/index";
import { userData } from "../../../../mocks/db/user";

jest.mock("next/router", () => ({
     useRouter() {
         return {
             route: "/",
             pathname: "",
             query: "",
             asPath: "",
         };
     },
 }));

describe("NewMembersCard", () => {
     it("renders the component", () => {
          const user = userData;

          const { container } = renderWithProviders(
               <NewMembersCard
                    user={user}
               />
          );
          expect(container).toMatchSnapshot();
     });
});
