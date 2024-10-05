import { server } from './src/mocks/server';
import { beforeAll, afterEach, afterAll } from '@jest/globals';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
