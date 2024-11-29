import {
  useGetAllUsersQuery,
  useUpdateMemberRoleMutation,
  useArchiveMemberMutation,
} from '../../services/serverApi';
import { Provider } from 'react-redux';
import { store } from '../../store/index';

import React, { PropsWithChildren } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
import { handlers } from '../../mocks/handlers';

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

describe('it shoud test all the users RTK query hooks', () => {
  test('it should return all users', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetAllUsersQuery(),
      { wrapper: Wrapper },
    );

    const initialResponse = result.current;
    console.log(initialResponse, 'response');
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await act(() => waitForNextUpdate());
    const nextResponse = result.current;
    console.log(nextResponse, 'next response', handlers);
    expect(nextResponse?.data).not.toBeUndefined();
    expect(nextResponse?.data?.message).toBe('Users returned successfully!');
    expect(nextResponse?.data?.users).toHaveLength(4);
  });

  test('it should promote user to member', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useUpdateMemberRoleMutation(),
      {
        wrapper: Wrapper,
      },
    );

    const [updateMemberRole, initialResponse] = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(false);

    act(() => {
      void updateMemberRole({
        username: 'vinayak',
      });
    });

    const loadingResponse = result.current[1];
    expect(loadingResponse.data).toBeUndefined();
    expect(loadingResponse.isLoading).toBe(true);

    await waitForNextUpdate();

    const loadedResponse = result.current[1];
    expect(loadedResponse.isLoading).toBe(false);
    expect(loadedResponse.isSuccess).toBe(true);
  });

  test('it should archive user', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useArchiveMemberMutation(),
      {
        wrapper: Wrapper,
      },
    );

    const [archieveMemberMutation, initialResponse] = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(false);

    act(() => {
      void archieveMemberMutation({
        username: 'vinayak',
      });
    });

    const loadingResponse = result.current[1];
    expect(loadingResponse.data).toBeUndefined();
    expect(loadingResponse.isLoading).toBe(true);

    await waitForNextUpdate();

    const loadedResponse = result.current[1];
    expect(loadedResponse.isLoading).toBe(false);
    expect(loadedResponse.isSuccess).toBe(true);
  });
});
