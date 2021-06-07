// 1. Приоритет выполнения асинхронных вызовов
let a = 8;

setTimeout(() => {
  console.log(`from setTimeout ${a}`);
  a = 9;
}, 0);

const promise = new Promise((resolve) => {
  console.log(`from Promise ${a}`);
  a = 3;
  resolve();
});

promise.then(() => {
  console.log(`from Promise then ${a}`);
  a = 1;
});

console.log(`from ${a}`);


// 2. Реализовать функцию unique, которая возвращает массив уникальные элементов
const unique = (arr) => {

}
console.log([1, 4, 1, 4, 2, 9, 3, 4, 3, 7, 8]) // [1,4,2,9,3,7,8]

// 3. Реализовать n попыток авторизации в случае неудачного ответа.
const auth = (() => {
  let cur = 0;
  return (callback) => {
    setTimeout(() => {
      if (cur++ === 3) {
        cur = 0;
        callback(null, { sessionId: 'sssss' });
      } else {
        callback(new Error('auth is failed'));
      }
    }, 400);
  }
})();

const tryAuth = (n) => {

}
// tryAuth(1).then(data => console.log(data)).catch(error => console.log(error));
// tryAuth(3).then(data => console.log(data)).catch(error => console.log(error));
// tryAuth(5).then(data => console.log(data)).catch(error => console.log(error));

const auth = (() => {
  let cur = 0;
  return (callback) => {
    setTimeout(() => {
      if (cur++ === 3) {
        cur = 0;
        callback(null, { sessionId: 'sssss' });
      } else {
        callback(new Error('auth is failed'));
      }
    }, 1000);
  }
})();

// Написать функцию
const urls = [
  "http://example-app/async/data/1.json",
  "http://example-app/async/data/2.json",
  "http://example-app/async/data/3.json",
  "http://example-app/async/data/4.json",
  "http://example-app/async/data/5.json",
  "http://example-app/async/data/6.json",
  "http://example-app/async/data/7.json",
  "http://example-app/async/data/8.json",
  "http://example-app/async/data/9.json",
  "http://example-app/async/data/10.json",
];
const MAX_IN_POOL = 3
const poolRequest = async (urls, callback) => {
  if (!urls || !urls.length) {
    return
  }

  const executedPromises = []


  for (let url of urls) {
    if (executedPromises.length < MAX_IN_POOL) {
      executedPromises.push(fetch(url))
    }
  }

  const data = await Promise.allSettled(executedPromises)
  callback(data)
  poolRequest(urls.slice(MAX_IN_POOL))
};


// 4.
import { useEffect, useState } from "react";
import "./styles.css";

// header width: 100%, height: 70px;
// main width: 100%, height: оставшее пространство;

const environment = {
  center: [0, 0],
  zoom: 5
}

const MapContainer = ({ center, zoom }) => {
  return (
    <div>
      center: {center}
      <br />
      zoom: {zoom}
    </div>);
}

export default function App() {
  return (
    <div className="App">
      <header>Hello</header>
      <main>
        // MapContainer
      </main>
    </div>
  );
}


export default function App() {
  const [center] = useState(environment.center);
  const [zoom] = useState(environment.zoom);

  return (
    <div className="App">
      <header>Hello</header>
      <main>
        <MapContainer center={center} zoom={zoom} />
      </main>
    </div>
  );
}


//

const features = [
  {
    id: 1,
    layer: 'build',
    geometry: { type: "Polygon", coordinates: [] }
  },
  {
    id: 2,
    layer: 'build',
    geometry: { type: "Polygon", coordinates: [] }
  },
  {
    id: 3,
    layer: 'build',
    geometry: { type: "Polygon", coordinates: [] }
  },
  {
    id: 4,
    layer: 'build',
    geometry: { type: "Polygon", coordinates: [] }
  },
];

const store = {
  build: {
    1: {},
    2: {}
  },
  selectedBuild: 1
}