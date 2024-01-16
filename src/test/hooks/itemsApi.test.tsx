import {
  useAddNewSkillMutation,
  useRemoveSkillsMutation,
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

describe('useRemoveSkillsMutation', () => {
  test('add skill', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useAddNewSkillMutation(),
      { wrapper: Wrapper },
    );

    const [addNewSkill, initialResponse] = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(false);

    act(() => {
      void addNewSkill({
        itemId: 'KTkF4vAd6tsuBw84oZXt',
        itemType: 'USER',
        tagPayload: [
          {
            tagId: '4qvOozqaWIiHT4fBlVjk',
            levelId: '1dOI6j3YNW4XQR5rwQsm',
          },
        ],
      });
    });

    const loadingResponse = result.current[1];
    expect(loadingResponse.data).toBeUndefined();
    expect(loadingResponse.isLoading).toBe(true);

    await waitForNextUpdate();

    const loadedResponse = result.current[1];
    expect(loadedResponse.data).not.toBeUndefined();
    expect(loadedResponse.isLoading).toBe(false);
    expect(loadedResponse.isSuccess).toBe(true);
  });

  test('removes a skill', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useRemoveSkillsMutation(),
      { wrapper: Wrapper },
    );

    const [removeSkills, initialResponse] = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(false);

    act(() => {
      void removeSkills({
        tagId: '4qvOozqaWIiHT4fBlVjk',
        itemId: 'KTkF4vAd6tsuBw84oZXt',
      });
    });

    const loadingResponse = result.current[1];
    expect(loadingResponse.data).toBeUndefined();
    expect(loadingResponse.isLoading).toBe(true);

    await waitForNextUpdate();

    const loadedResponse = result.current[1];
    expect(loadedResponse.data).not.toBeUndefined();
    expect(loadedResponse.isLoading).toBe(false);
    expect(loadedResponse.isSuccess).toBe(true);
  });
});
