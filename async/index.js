const asyncSumm = async (a, b) => {
    const promises = [
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(a);
            }, 1000);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(b);
            }, 500);
        })
    ];

    const results = [];

    for (let i in promises) {
        results.push(await promises[i]);
    }
    return results;
};

const requestsPool = async (urls, callback, limit = 5) => {
    if (urls.length === 0)
        return;

    const chunkUrls = urls.slice(0, limit);
    let responses;

    responses = await Promise.all(chunkUrls.map((url) => {
        return fetch(url);
    }));
    callback(responses);

    requestsPool(urls.slice(limit), callback, limit);
};


