import Lacuna from './lacuna';

test('authenticate', async () => {
  console.info = jest.fn();
  const lacuna = new Lacuna({ serverUrl: 'http://localhost:8080' });

  await lacuna.authenticate('1vasari', '1234qwer');

  expect(lacuna.session.get()).not.toEqual('');
});
