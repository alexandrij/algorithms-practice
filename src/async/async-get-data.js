const getAuth = () => Promise.resolve('aaaaa');
const getUser = (token) =>
  token ? Promise.resolve(1) : Promise.reject(new Error('token is undefined'));
const getOrder = (token, userId) =>
  token && userId
    ? Promise.resolve('order for user')
    : Promise.reject(new Error('token or user is undefined'));
const getPromo = (token) =>
  token
    ? Promise.resolve('promo')
    : Promise.reject(new Error('token is undefined'));

async function getData() {
  const token = await getAuth();

  return Promise.all([
    getUser(token)
      .then((userId) => {
        return getOrder(token, userId);
      })
      .catch((e) => {
        console.log(e);
      }),
    getPromo(token),
  ]).then((results) => {
    return {
      auth: token,
      order: results[0],
      promo: results[1],
    };
  });
}

getData()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
