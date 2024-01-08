import { Provider } from 'react-redux'
import { store } from '../../store/index'
import { act, renderHook } from '@testing-library/react-hooks'
import React, { PropsWithChildren } from 'react'
import { setupServer } from 'msw/node'
import { handlers } from '../../mocks/handlers'
import {
   useGetLevels,
   useGetLevelsQuery,
   useGetTagsQuery,
} from '../../services/serverApi'

const server = setupServer(...handlers)

beforeAll(() => {
   server.listen()
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

function Wrapper({
   children,
}: PropsWithChildren<Record<string, any>>): JSX.Element {
   return <Provider store={store}>{children}</Provider>
}

describe('useGetLevels', () => {
   test('returns tags with levels', async () => {
      const {
         result: tagsWithLevelResult,
         waitForNextUpdate: tagsWithLevelNextUpdate,
      } = renderHook(() => useGetLevels(), {
         wrapper: Wrapper,
      })

      const { result, waitForNextUpdate } = renderHook(
         () => {
            return {
               levelData: useGetLevelsQuery(null),
               tagsData: useGetTagsQuery(null),
            }
         },
         { wrapper: Wrapper },
      )

      const { levelData, tagsData } = result.current

      expect(levelData.data).toBeUndefined()
      expect(levelData.isLoading).toBe(true)
      expect(tagsData.data).toBeUndefined()
      expect(tagsData.isLoading).toBe(true)

      await waitForNextUpdate()

      const {
         levelData: levelDataNextResponse,
         tagsData: tagsDataNextResponse,
      } = result.current

      expect(levelDataNextResponse.isLoading).toBe(false)
      expect(levelDataNextResponse?.data?.levels).toHaveLength(8)
      expect(tagsDataNextResponse.isLoading).toBe(false)
      expect(tagsDataNextResponse?.data?.tags).toHaveLength(5)
   })
})
