
import { init } from '@paralleldrive/cuid2';

export const createId = init({
  length: 25,
  fingerprint: 'trip-mate-mock-fingerpring'
});
