import { Lacuna } from '../';

export const getLacuna = async () => {
  const lacuna = new Lacuna({ serverUrl: 'http://localhost:8080/' });
  await lacuna.authenticate('1vasari', '1234qwer');
  return lacuna;
};
