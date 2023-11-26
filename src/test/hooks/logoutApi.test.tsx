import {
    useLogoutUserMutation,
  } from "../../services/logoutApi";
  import { Provider } from "react-redux";
  import { store } from "../../store/index";

import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/handlers";

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function Wrapper({
  children,
}: { children: React.ReactNode }): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

describe("useLogoutUserMutation", () => {
    test("should logout user",async () => {
        const { result, waitForNextUpdate } = renderHook(
            () => useLogoutUserMutation(),
            { wrapper: Wrapper }
        )

        const [ logoutUser, initialResponse ] = result.current;
        expect(initialResponse.data).toBeUndefined();
        expect(initialResponse.isLoading).toBe(false);

        act(() => void logoutUser());

        const loadingResponse = result.current[1];
        expect(loadingResponse.data).toBeUndefined();
        expect(loadingResponse.isLoading).toBe(true);

        await waitForNextUpdate();

        const loadedResponse = result.current[1];
        expect(loadedResponse.data).not.toBeUndefined();
        expect(loadedResponse.isLoading).toBe(false);
        expect(loadedResponse.isSuccess).toBe(true);
    });
})
