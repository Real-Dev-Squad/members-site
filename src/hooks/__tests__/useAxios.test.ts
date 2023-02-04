/**Third Part Dependencies */
import { AxiosError } from "axios";
import { rest } from "msw";
import { renderHook, waitFor } from "@testing-library/react";

/**Component Dependecies */

import { useAxios } from "../useAxios";

/**Utilities */
import { server } from "../../mocks/server";

/**Constants */

import {
  MOCK_DATA,
  MOCK_GET_URL,
  MOCK_PATCH_DATA,
  MOCK_PATCH_URL,
  MOCK_REJECT_URL,
} from "./useAxios.constants";

describe("useAxios ", () => {
  it("should make an HTTP GET request and return the response data", async () => {
    // Action
    const { result } = renderHook(() => useAxios(MOCK_GET_URL));

    //Assert
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => expect(result.current.loading).toBe(false));
    await waitFor(() =>
      expect(result.current.data).toStrictEqual({
        data: MOCK_DATA,
      })
    );
    await waitFor(() => expect(result.current.error).toBe(null));
  });

  // Arrange (Patch Request)
  it("should make an HTTP PATCH request and return the response data", async () => {
    server.use(
      rest.patch(MOCK_PATCH_URL, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            patch: MOCK_PATCH_DATA,
          })
        );
      })
    );

    // Action
    const { result } = renderHook(() =>
      useAxios(MOCK_PATCH_URL, "patch", {
        data: {
          patch: MOCK_PATCH_DATA,
        },
        withCredentials: true,
      })
    );

    // Assert
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => expect(result.current.loading).toBe(false));
    await waitFor(() =>
      expect(result.current.data).toStrictEqual({
        patch: ["members-site", "real-dev", "real-dev-squad", "patch"],
      })
    );
    await waitFor(() => expect(result.current.error).toBe(null));
  });

  it("should make an HTTP GET request and return the error", async () => {
    //Arrange (Error Handling)
    server.use(
      rest.get(MOCK_REJECT_URL, (req, res, ctx) => {
        return res(ctx.status(401));
      })
    );

    // Action
    const { result } = renderHook(() => useAxios(MOCK_REJECT_URL));

    //Assert
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => expect(result.current.loading).toBe(false));
    await waitFor(() => expect(result.current.data).toStrictEqual(null));
    await waitFor(() =>
      expect(result.current.error).toStrictEqual(
        new AxiosError("Request failed with status code 401")
      )
    );
  });
});
