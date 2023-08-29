import { useGetUsers, useGetMembersQuery } from "../../services/serverApi";
import { Provider } from "react-redux";
import { store } from "../../store/index";

import React, { PropsWithChildren } from "react";
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
}: PropsWithChildren<Record<string, any>>): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

describe("useGetUsers", () => {
  test("it should returns members", async () => {
    const { result } = renderHook(() => useGetUsers(), {
      wrapper: Wrapper,
    });

    const { result: membesResult, waitForNextUpdate } = renderHook(
      () => useGetMembersQuery(),
      {
        wrapper: Wrapper,
      }
    );

    const inititalResponse = result.current;
    expect(inititalResponse.data).toBeUndefined();
    expect(inititalResponse.isLoading).toBe(true);

    const membersInitialResponse = membesResult.current;
    expect(membersInitialResponse.data).toBeUndefined();
    expect(membersInitialResponse.isLoading).toBe(true);

    await act(() => waitForNextUpdate());

    const membersNextResponse = membesResult.current;
    expect(membersNextResponse.data).not.toBeUndefined();
    expect(membersNextResponse.isLoading).toBe(false);

    const nextResponse = result.current;
    expect(nextResponse.data).not.toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.error).toBeUndefined();
  });
});
