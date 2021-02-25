const auth = (() => {
    let cur = 0;
    return (callback) => {
        setTimeout(() => {
            if (cur++ === 3) {
                cur = 0;
                callback(null, { sessionId: 'sssss' });
            } else {
                callback(new Error('auth is failed'));
            }
        }, 1000);
    }
})();

const asyncAuth = () => {
    return new Promise((resolve, reject) => {
        auth((error, data) => {
            error ? reject(error) : resolve(data);
        });
    })
}

const tryAuth = (n) => {
    return asyncAuth().catch((err) => {
        return (n < 1) ? Promise.reject(err) : tryAuth(n - 1);
    });
}

// const sss = tryAuth(4)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
