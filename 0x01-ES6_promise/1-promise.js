export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => { // eslint-disable-next-line no-constant-condition
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

