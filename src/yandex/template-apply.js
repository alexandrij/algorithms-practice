const apply = (str, obj) => {
  return str.replace(/\{[A-Za-z0-9.]+\}/g, (s) => {
    return s
      .substring(1, s.length - 1)
      .split('.')
      .reduce((obj, k) => {
        return obj && k in obj ? obj[k] : '';
      }, obj);
  });
};
const obj = {
  user: {
    name: 'Vasya',
  },
  group: {
    mac: '0:0',
  },
};
console.log(apply('Hello, {user.name}', obj));
console.log(apply('Mac label for {user.name} is {group.mac}', obj));
