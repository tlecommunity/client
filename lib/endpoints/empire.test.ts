import Lacuna from '../lacuna';

test('login with errors', async () => {
  const lacuna = new Lacuna({ serverUrl: 'http://localhost:8080/' });
  console.error = jest.fn();

  await lacuna.empire.login({
    name: 'non-existant-empire',
    password: 'incorrect-password',
    browser: 'todo',
    api_key: 'anonymous',
  });

  expect(console.error).toHaveBeenLastCalledWith('Empire does not exist.');
});

test('login', async () => {
  const lacuna = new Lacuna({ serverUrl: 'http://localhost:8080/' });
  const res = await lacuna.empire.login({
    name: '1vasari',
    password: '1234qwer',
    browser: 'todo',
    api_key: 'anonymous',
  });
  expect(res.session_id).toBeDefined();
});
