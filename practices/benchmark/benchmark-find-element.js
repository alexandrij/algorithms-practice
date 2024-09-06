/**
 * Стоит ли для поиск в небольшом массиве превращать во множество
 */

const roles = ['client', 'logist', 'expeditor', 'admin'];
const permissionArrayRoles = {
  create: ['test1', 'test2', 'test3', 'logist', 'expeditor'],
  edit: ['test1', 'test2', 'test3', 'logist', 'expeditor'],
  view: ['test1', 'test2', 'test3', 'client', 'expeditor', 'logist'],
};

const permissionSetRoles = {};
for (const role in permissionArrayRoles) {
  permissionSetRoles[role] = permissionArrayRoles[role].reduce((acc, role) => {
    return acc.add(role);
  }, new Set());
}

function hasInArray(permission, needRole) {
  return permissionArrayRoles[permission].some((role) => role === needRole);
}

function hasInSet(permission, needRole) {
  return permissionSetRoles[permission].has(needRole);
}

for (const n of [1000, 10000, 15000, 20000, 50000, 100000]) {
  console.group(`*** benchmark ${n} ***`);

  {
    const t1 = performance.now();
    for (let i = 0; i < n; i++) {
      hasInArray('view', 'logist');
    }
    console.info(`Поиск в массиве. Кол-во ${n}: Время: ${(performance.now() - t1).toFixed(2)}мс.`);
  }
  {
    const t1 = performance.now();
    for (let i = 0; i < n; i++) {
      hasInSet('view', 'logist');
    }
    console.info(`Поиск во множестве. Кол-во ${n}: Время: ${(performance.now() - t1).toFixed(2)}мс.`);
  }
  console.groupEnd();
  console.info('\n');
}
