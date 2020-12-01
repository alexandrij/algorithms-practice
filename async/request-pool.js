const fetch = require('node-fetch');

const requestPool = async (urls, callback, limit = 5) => {
    urls = [...urls];

    if (urls.length === 0)
        return;

    while (urls.length > 0) {
        callback(await Promise.all(urls.splice(0, limit).map(url => fetch(url))));
    }
};

const urls = [
    "http://example-app/async/data/1.json",
    "http://example-app/async/data/2.json",
    "http://example-app/async/data/3.json",
    "http://example-app/async/data/4.json",
    "http://example-app/async/data/5.json",
    "http://example-app/async/data/6.json",
    "http://example-app/async/data/7.json",
    "http://example-app/async/data/8.json",
    "http://example-app/async/data/9.json",
    "http://example-app/async/data/10.json",
];

requestPool([...urls,...urls], (results) => {
    console.log('----');
    console.log(...results);
}, 3)
