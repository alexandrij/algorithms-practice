import fetch from 'node-fetch';

const tryRequest = (request, n) => {
  return request.catch((e) => (--n > 0 ? tryRequest(request, n) : Promise.reject(e)));
};

tryRequest(fetch('http://test.ru'), 3)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));

//
// /**
//  * Реализовать асинхронную функцию, которая выполняется не более n - раз, пока не получит успешный ответ.
//  * @param n - максимальное кол-во попыток
//  */
// const tryAuth = (n) => {
//
// }
//
// const auth = (() => {
//     let cur = 0;
//     return (callback) => {
//         setTimeout(() => {
//             if (cur++ === 3) {
//                 cur = 0;
//                 callback(null, { sessionId: 'sssss' });
//             } else {
//                 callback(new Error('auth is failed'));
//             }
//         }, 400);
//     }
// })();
