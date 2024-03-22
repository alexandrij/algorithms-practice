import { asyncRequests } from './pool-request.js';

const urls = [
  'http://example-app/async/data/1.json',
  'http://example-app/async/data/2.json',
  'http://example-app/async/data/3.json',
  'http://example-app/async/data/4.json',
  'http://example-app/async/data/5.json',
  'http://example-app/async/data/6.json',
  'http://example-app/async/data/7.json',
  'http://example-app/async/data/8.json',
  'http://example-app/async/data/9.json',
  'http://example-app/async/data/10.json',
];

describe('async: pool-request', () => {
  it(`кол-во промежуточных ответов совпадает с лимитом`, () => {
    let len = urls.length;
    return asyncRequests(
      urls,
      (results) => {
        expect(results).toHaveLength(len < 3 ? len : 3);
        len = len - 3;
      },
      3,
    ).then((results) => {
      expect(results).toHaveLength(urls.length);
    });
  });
});
