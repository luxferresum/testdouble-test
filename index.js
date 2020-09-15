import { replaceEsm, reset } from 'testdouble';

// uncommenting this line fixes the problem:
// import express from 'express';

(async () => {
  await replaceEsm('./dummy.js', null, () => 'stubbed value');
  const target = await import('./subject.js');
  console.log('stubbed the dummy.js file: ', target.default.dummyValue === 'stubbed value');
  console.log('can still access express: ', target.default.express !== undefined);
})();