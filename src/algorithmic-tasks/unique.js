class Holder {
    unique(arr) {
        return arr.reduce((uniqueArr, item) => {
            if (uniqueArr.indexOf(item) === -1) {
                uniqueArr.push(item);
            }
            return uniqueArr;
        }, []);
    }
    
    uniqueWithCached(arr) {
        const cachedUniqueItems = new Map();
        return arr.reduce((uniqueArr, item) => {
            if (!cachedUniqueItems.has(item)) {
                cachedUniqueItems.set(item, true);
                uniqueArr.push(item);
            }
            return uniqueArr;
        }, []);
    }
    
    uniqueWithSet(arr) {
        return Array.from(new Set(arr));
    }
}

const MAGIC_ARRAY_LENGTH = 1304209;
const arr = new Array(MAGIC_ARRAY_LENGTH);
for (let i = 0; i < MAGIC_ARRAY_LENGTH; i++) {
    arr[i] = Math.floor(Math.random() * 1000000);
}

const holder = new Holder();

let beginTime;
let endTime;

// beginTime = Date.now();
// unique(arr);
// endTime = Date.now();
// console.log('unique', endTime - beginTime);

beginTime = Date.now();
const unique1 = holder.uniqueWithCached(arr);
endTime = Date.now();
console.log('uniqueWithCached', endTime - beginTime);

beginTime = Date.now();
const unique2 = holder.uniqueWithSet(arr);
endTime = Date.now();
console.log('uniqueWithSet', endTime - beginTime);
