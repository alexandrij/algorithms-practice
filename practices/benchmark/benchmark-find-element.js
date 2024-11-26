/**
 * Стоит ли для поиск в небольшом массиве превращать во множество
 */

const roles = ['r1', 'r2', 'r3', 'r4', 'r5', 'logist', 'expeditor', 'admin'];
const permissionArrayRoles = {
  create: ['rrrrr1', 'logist', 'expeditor'],
  edit: ['rrrrr1', 'logist', 'expeditor'],
  view: ['rrrrr1', 'client', 'expeditor', 'logist'],
};

const permissionSetRoles = {};
for (const role in permissionArrayRoles) {
  permissionSetRoles[role] = permissionArrayRoles[role].reduce((acc, role) => {
    return acc.add(role);
  }, new Set());
}

function hasRealmRole(role) {
  return roles.indexOf(role) >= 0;
}

function hasInArray(permission) {
  return permissionArrayRoles[permission].some((role) => hasRealmRole(role));
}

function hasInSet(permission) {
  return roles.some((role) => permissionSetRoles[permission].has(role));
}

for (const n of [1000, 10000, 15000, 20000, 50000, 100000]) {
  console.group(`*** benchmark кол-во повторений ${n} ***`);
  {
    const t1 = performance.now();
    for (let i = 0; i < n; i++) {
      hasInArray('view', 'logist');
    }
    console.info(`Поиск в массиве: Время: ${(performance.now() - t1).toFixed(2)}мс.`);
  }
  {
    const t1 = performance.now();
    for (let i = 0; i < n; i++) {
      hasInSet('view', roles);
    }
    console.info(`Поиск во множестве: Время: ${(performance.now() - t1).toFixed(2)}мс.`);
  }
  console.groupEnd();
  console.info('\n');
}
