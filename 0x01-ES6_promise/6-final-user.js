/* eslint-disable import/named */
// eslint-disable-next-line import/named
import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(results => {
      const [userResult, photoResult] = results;
      if (userResult.status === 'fulfilled' && photoResult.status === 'fulfilled') {
        return [{ success: true }, { url: photoResult.value }];
      } else {
        throw new Error('One or more promises rejected');
      }
    });
}

