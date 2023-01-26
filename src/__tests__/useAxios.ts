import { AxiosError } from "axios";
import { rest } from "msw";
import { renderHook, waitFor } from "@testing-library/react";
import { useAxios } from "../hooks/useAxios";
import { server } from "../mocks/server";

describe("useAxios ", () => {
  it("should make an HTTP GET request and return the response data", async () => {
    const { result } = renderHook(() => useAxios("https://real-dev-squad.com"));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => expect(result.current.loading).toBe(false));
    await waitFor(() =>
      expect(result.current.data).toStrictEqual({
        data: ["members-site", "real-dev", "real-dev-squad"],
      })
    );
    await waitFor(() => expect(result.current.error).toBe(null));
  });

  it("should make an HTTP PATCH request and return the response data", async () => {
    const patchUrl = "https://real-dev-squad.com/endpoint";
    server.use(
      rest.patch(patchUrl, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            patch: ["members-site", "real-dev", "real-dev-squad", "patch"],
          })
        );
      })
    );

    const { result } = renderHook(() =>
      useAxios(patchUrl, "patch", {
        data: {
          patch: ["members-site", "real-dev", "real-dev-squad", "patch"],
        },
        withCredentials: true,
      })
    );

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
    const rejectUrl = "https://api/reject";
    server.use(
      rest.get(rejectUrl, (req, res, ctx) => {
        return res(ctx.status(401));
      })
    );

    const { result } = renderHook(() => useAxios(rejectUrl));
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
