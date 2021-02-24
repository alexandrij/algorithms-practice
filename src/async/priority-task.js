let a = 5;

setTimeout(() => {
    console.log(`from setTimeout ${a}`);
    a = 6;
}, 0);

const promise = new Promise((resolve) => {
    console.log(`from Promise ${a}`);
    a = 7;
    resolve();
});

promise.then(() => {
    console.log(`from Promise then ${a}`);
    a = 8;
});

console.log(`from ${a}`);
