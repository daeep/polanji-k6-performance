import http from 'k6/http';

export function logIn(config) {
  const loginRes = http.post(`${config.baseURL}/log_in`, {
    grant_type: 'password',
    username: config.credentials.username,
    password: config.credentials.password,
    scope: '',
    client_id: '',
    client_secret: ''
  }, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  if (loginRes.status !== 200) {
    throw new Error('Login failed');
  }

  return loginRes.json('access_token');
}