/**
 * throttle.
 *
 * Напишите функцию throttle(fn, delay, ctx) – «тормозилку», которая возвращает обёртку,
 * вызывающую fn не чаще, чем раз в delay миллисекунд.
 * В качестве контекста исполнения используется ctx.
 * Если игнорируемый вызов оказался последним, то он должен выполниться.
 */

var f = function (a) {
    console.log(a + this.b)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000, { b: ' call' });
f1000(1); // выведет 1 call
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
f1000(4); // (тормозим, не прошло 1000 мс)
f1000(5); // (тормозим, не прошло 1000 мс)

// sleep(2000);
// f1000(4);

// когда пройдёт 1000 мс...
// выведет 3 call, промежуточное значение 2 call игнорируется

function throttle(fn, delay, ctx) {
    let lastCtx;
    let lastArgs;
    let trottled = false;

    return (...args) => {
        if (trottled) {
            lastCtx = ctx;
            lastArgs = args;
            return;
        }

        fn.call(ctx, ...args);
        trottled = true;

        setTimeout(() => {
            trottled = false;
            if (lastArgs) {
                fn.call(lastCtx, ...lastArgs);
                lastArgs = null;
                lastCtx = null;
            }
        }, delay);
    }
}
