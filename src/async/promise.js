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
        console.log(e);
        return 3;
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
    });
