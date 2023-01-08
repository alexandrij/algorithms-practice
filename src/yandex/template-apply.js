const apply = (str, obj) => {
  return str.replace(/{([A-Za-z.]+)}/g, (substring, path) => {
    return path.split('.').reduce((cur, item) => {
      return cur[item];
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
