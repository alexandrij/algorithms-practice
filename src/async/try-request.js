const fetch = require('node-fetch');

const tryRequest = (request, n) => {
    return request.catch(e => (--n > 0) ? tryRequest(request, n) : Promise.reject(e));
}

tryRequest(fetch('http://test.ru'), 3)
    .then(r => console.log(r))
    .catch(e => console.log(e));
