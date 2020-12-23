Promise.resolve(0)
    .then((r) => {
        console.log(r);
        return 1
    })
    .then((r) => {
        console.log(r);
        return 2
    })
    .then((r) => {
        console.log(r);
        throw "err-1"
    })
    .catch((e) => {
        console.log('Error1:', e);
    })
    .catch((e) => {
        console.log('Error2:', e);
    })
    .then((r) => {
        console.log(r);
        return Promise.reject("err-2");
    })
    .then((r) => {
        console.log(r);
        return 5
    })
    .catch((e) => {
        console.log(e);
    })
    .then((r) => {
        console.log(r);
        return 6;
    });
