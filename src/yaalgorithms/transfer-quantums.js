/**
 * Квантовый ускоритель
 *
 * Вам необходимо помочь ученому починить квантовый ускоритель, но для этого
 * нужно разобраться с перемещением квантов. Ученый смог найти схему устройства
 * и проанализировать логику его работы.
 *
 * Оказалось, что при перемещении кванта в заданную точку пространства,
 * он может разделиться на несколько квантов, которые также нужно переместить.
 * Причем делать это нужно в определенном порядке во избежание появления
 * пространственно-временных аномалий. Так же учтите, что не должно происходить
 * одновременного переноса более N квантов, так как это приведет к поломке ядра ускорителя.
 *
 * interface Quantum {
 *   id: string;
 *   priority: number;
 *   transfer: () => Promise<Quantum[]>; // асинхроннвя функция, которая перемещает квант и возвращает список квантов, на которые разделился исходный код, либо null
 * }
 */

async function transferSortedQuantums(quantums, limit, start) {
  if (quantums.length < 1) {
    return [];
  }
  if (start >= quantums.length) {
    return [];
  }

  start = typeof start === 'number' ? start : 0;
  const end = typeof limit === 'number' ? Math.min(start + limit, quantums.length) : quantums.length;

  const tasks = [];
  for (let i = start; i < end; i++) {
    const quantum = quantums[i];
    tasks.push(
      quantum.transfer().then((data) => {
        return !data ? [quantum.id] : transferQuantums(data, limit);
      }),
    );
  }
  const results = await Promise.all(tasks).then((res) => res.flat());
  return results.concat(await transferSortedQuantums(quantums, limit, start + limit));
}

async function transferQuantums(quantums, limit, start) {
  if (quantums.length < 1) {
    return [];
  }
  return transferSortedQuantums(
    quantums.sort((a, b) => b.priority - a.priority),
    limit,
    start,
  );
}

// module.exports = transferQuantums;
export default transferQuantums;

transferQuantums(
  [
    {
      id: '1',
      priority: 1,
      async transfer() {
        return [
          {
            id: '1.2',
            priority: 2,
            async transfer() {
              return null;
            },
          },
          {
            id: '1.3',
            priority: 1,
            async transfer() {
              return null;
            },
          },
          {
            id: '1.4',
            priority: 4,
            async transfer() {
              return null;
            },
          },
        ];
      },
    },
    {
      id: '2',
      priority: 2,
      async transfer() {
        return null;
      },
    },
    {
      id: '5',
      priority: 5,
      async transfer() {
        return null;
      },
    },
    {
      id: '3',
      priority: 3,
      async transfer() {
        return null;
      },
    },
    {
      id: '4',
      priority: 4,
      async transfer() {
        return null;
      },
    },
  ],
  2,
).then((res) => {
  console.log(res);
});
