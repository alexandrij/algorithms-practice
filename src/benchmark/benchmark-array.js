const len = 10000;

{
  const arr = new Array(len);
  const t1 = performance.now();
  for (let i = 0; i < len; i++) {
    arr[i] = i;
  }
  console.info('Память под массив выделен заранее:', performance.now() - t1);
}

{
  const arr = [];
  const t1 = performance.now();
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  console.info('Добавление элементов массива с помощью push:', performance.now() - t1);
}

{
  let arr = [];
  const t1 = performance.now();
  for (let i = 0; i < len; i++) {
    arr = [...arr, i];
  }
  console.info('Пересоздание массива с spread оператором:', performance.now() - t1);
}
