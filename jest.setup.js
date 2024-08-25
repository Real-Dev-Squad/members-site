import '@testing-library/jest-dom';
// import './setupTests';
import 'whatwg-fetch';

// jest.config.js
module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
};
