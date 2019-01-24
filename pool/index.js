const pool  = (() => {
    const request = (() => {
        const cache = new Map();
        return (url) => {
            let cached = cache.get(url);
            if (cached) {
                console.log('from cache', cached);
                return Promise.resolve(cached);
            }
            return fetch(url)
                .then((response) => {
                    cache.set(url, response);
                    return Promise.resolve(response);
                });
        }
    })();

    return (urls = [], limit = 5, callback) => {
        let urlsChunk = urls.slice(0, limit);
        
        if (urlsChunk.length === 0) {
            return Promise.resolve([]);
        }
        else {
            return Promise.all(
                urlsChunk.map((url) => {
                    return request(url);
                })
            ).then((responses) => {
                callback(responses);
                pool(urls.slice(limit), limit, callback);
                // return pool(urls.slice(limit), limit, callback).then((nextResponses) => {
                //     return Promise.resolve(responses.concat(nextResponses));
                // })
            })
        }
    }
})();

const urls = [
    "http://example-app/pool/data/1.json",
    "http://example-app/pool/data/2.json",
    "http://example-app/pool/data/3.json",
    "http://example-app/pool/data/4.json",
    "http://example-app/pool/data/5.json",
    "http://example-app/pool/data/6.json",
    "http://example-app/pool/data/7.json",
    "http://example-app/pool/data/8.json",
    "http://example-app/pool/data/9.json",
    "http://example-app/pool/data/10.json",
];

setTimeout(
    pool([...urls,...urls,...urls,...urls,...urls,...urls,...urls,...urls,...urls,...urls,...urls], 5, (results) => { 
        console.log(...results) 
    }), 
    1000
);
