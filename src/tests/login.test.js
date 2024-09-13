global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    statusText: 'OK',
    json: () => Promise.resolve({ token: '12345' }),
  })
);

import { login } from '../js/api/auth/login';
import { logout } from '../js/api/auth/logout';

test('should store a token when provided with valid credentials', async () => {
  const result = await login('username', 'password');
  expect(result.token).toBe('12345');
});

test('should clear the token from localStorage on logout', () => {
  localStorage.setItem('token', 'dummy-token');

  logout();

  expect(localStorage.getItem('token')).toBeNull();
});
