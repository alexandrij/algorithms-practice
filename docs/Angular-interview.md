# Angular

### Angular — это фреймворк JavaScript с открытым исходным кодом, разработанный Google, предназначенный для создания

динамических веб-приложений, особенно SPA (Single Page Applications).

### Ключевые особенности Angular

    * TypeScript — строгая типизация и расширения JavaScript.
    * MVVM-архитектура — разделение логики, представления и состояния.
    * Компонентный подход — интерфейс строится из переиспользуемых компонентов.
    * Инжекция зависимостей — встроенный механизм для управления зависимостями.
    * Роутинг — навигация между страницами без перезагрузки.
    * RxJS — реактивное программирование с Observables.
    * CLI — мощный Angular CLI для генерации кода, сборки и тестов.
    * Универсальный рендеринг — поддержка SSR (Angular Universal).

### Методы жизненного цикла компонента в Angular

Компоненты в Angular проходят через ряд этапов жизненного цикла — от создания до уничтожения. Angular предоставляет
специальные методы (хуки), которые позволяют «встраиваться» в эти этапы и выполнять нужную логику.

Основные хуки жизненного цикла

| Метод (хук)	            | Когда вызывается                                             |
                                             |-------------------------|--------------------------------------------------------------|
| ngOnChanges()	          | Когда изменяются входные @Input() свойства                   |
| ngOnInit()	             | Один раз после инициализации компонента                      |
| ngDoCheck()	            | На каждом цикле проверки изменений (custom change detection) |
| ngAfterContentInit()	   | После вставки контента в <ng-content>                        |
| ngAfterContentChecked() | 	После каждой проверки вставленного контента                 |
| ngAfterViewInit()	      | После инициализации представления (ViewChild)                |
| ngAfterViewChecked()	   | После каждой проверки представления компонента               |
| ngOnDestroy()	          | Перед удалением компонента из DOM                            |

ngOnChanges (при наличии @Input)  
→ ngOnInit  
→ ngDoCheck  
→ ngAfterContentInit  
→ ngAfterContentChecked  
→ ngAfterViewInit  
→ ngAfterViewChecked  
(далее — ngDoCheck → ngAfterContentChecked → ngAfterViewChecked — циклично)  
→ ngOnDestroy (при удалении компонента)

    ```typescript
    import {
      Component,
      OnInit,
      OnChanges,
      OnDestroy,
      Input
    } from '@angular/core';
    
    @Component({
      selector: 'app-example',
      template: `<p>Пример жизненного цикла</p>`
    })
    export class ExampleComponent implements OnInit, OnChanges, OnDestroy {
      @Input() data: string = '';
    
      constructor() {
        console.log('constructor');
      }
    
      ngOnChanges() {
        console.log('ngOnChanges: data изменилось');
      }
    
      ngOnInit() {
        console.log('ngOnInit: компонент инициализирован');
      }
    
      ngOnDestroy() {
        console.log('ngOnDestroy: компонент удалён');
      }
    }
    ```

Когда использовать?  
Хук Для чего использовать

* ngOnInit Инициализация данных, подписки, начальные действия
* ngOnChanges Реакция на изменение входных свойств (@Input)
* ngOnDestroy Очистка таймеров, отписка от потоков, WebSocket и т.д.
* ngAfterViewInit Работа с ViewChild (DOM) после отображения
* ngDoCheck Кастомная логика при обновлениях (редко используется)

Самыми часто используемыми являются ngOnInit, ngOnDestroy, и ngOnChanges. Остальные нужны для более тонкой настройки
и специфических случаев.

### Как работает Change Detection в Angular?

Что такое Change Detection?  
Change Detection — это механизм Angular, который следит за изменениями данных и обновляет шаблон (DOM), если нужно.

Когда в приложении что-то изменяется — Angular запускает процесс обнаружения изменений и сравнивает значения в
компоненте с тем, что уже отрисовано, чтобы определить, нужно ли перерендерить DOM.

    1. Angular запускает проверку с самого корневого компонента.
    2. Проходит по дереву компонентов вниз.
    3. Проверяет каждый биндинг ({{ value }}, [property], (event)) на изменения.
    4. Если значение изменилось — обновляется DOM.

Что запускает Change Detection?
Angular использует библиотеку zone.js, чтобы автоматически "захватывать" события, вызывающие изменения:

| Источник изменения	    | Пример                       |
                         |------------------------|------------------------------|
| События DOM	           | click, input, change, и т.д. |
| Таймеры	               | setTimeout, setInterval      |
| HTTP-запросы           | 	HttpClient                  |
| Promise и async/await	 | fetch().then(...), await     |
| Внутренние изменения	  | this.value = ...             |

Change Detection Strategies
Angular поддерживает две стратегии обнаружения изменений:

| Стратегия	 | Описание                                                                       |
                      |------------|--------------------------------------------------------------------------------|
| Default    | 	Angular проверяет все компоненты при любом изменении                          |
| OnPush	    | Angular проверяет компонент только при изменении Input-параметров или событиях |

Использование OnPush:

```typescript

@Component({
  selector: 'app-optimized',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>{{ user.name }}</p>`
})
export class OptimizedComponent {
  @Input() user!: { name: string };
}
```

Это уменьшает количество проверок, повышая производительность, особенно в больших приложениях.

Как оптимизировать Change Detection?

1. Используйте ChangeDetectionStrategy.OnPush везде, где это возможно.
2. Избегайте частых мутаций объектов/массивов (используйте иммутабельность).
3. Используйте trackBy в *ngFor, чтобы избежать лишних перерендеров.
4. Работайте с ChangeDetectorRef и NgZone для ручного управления:

### Что такое директивы в Angular?

Директивы — это специальные классы в Angular, которые расширяют поведение HTML-элементов. Они позволяют изменять
структуру DOM, добавлять стили или динамически управлять логикой компонента.

Виды директив в Angular
Angular делит директивы на три основные категории:

| Тип              | Назначение                                                | Примеры                           |
|------------------|-----------------------------------------------------------|-----------------------------------|
| Атрибутные       | Изменяют внешний вид или поведение элемента	              | ngClass, ngStyle, customHighlight |
| Структурные	     | Изменяют структуру DOM (добавляют/удаляют элементы)       | ngIf, ngFor, ngSwitch             |
| Пользовательские | Директивы, созданные вами для добавления повторной логики | appTooltip, appValidate           |

### Что такое модули в Angular?

В Angular модули — это основной способ структурировать и организовать код приложения.

Каждое Angular-приложение — это набор NgModule-ов, где один из них — корневой (AppModule), а остальные могут быть
фиче-модулями, общими модулями, лениво загружаемыми (lazy) и т.д.

Модуль:

1. объединяет компоненты, директивы, пайпы, сервисы
2. позволяет управлять зависимостями и повторным использованием
3. помогает внедрять lazy loading и деление на фичи

Основы NgModule
Модуль — это обычный класс, помеченный декоратором @NgModule:

Основные поля @NgModule

| Поле         | Описание                                                       |
|--------------|----------------------------------------------------------------|
| declarations | Компоненты, директивы и пайпы, принадлежащие модулю            |
| imports      | Модули, которые нужны для работы текущего модуля               |
| exports      | То, что будет доступно другим модулям                          |
| providers    | Сервисы и зависимости                                          |
| bootstrap    | Главный компонент, запускаемый при старте (только в AppModule) |

### Что такое NgZone в Angular?

NgZone — это сервис в Angular, который используется для управления зонами выполнения (execution context) и запуска
change detection (обнаружения изменений). Он основан на библиотеке zone.js и позволяет Angular отслеживать все
асинхронные операции, такие как setTimeout, Promise, XHR и т.д.

Зачем нужен NgZone?  
Angular использует NgZone, чтобы:

1. автоматически запускать детектирование изменений после завершения асинхронных операций;
2. отслеживать внешние события (например, click, HTTP, setTimeout);
3. позволить оптимизировать производительность, управляя вручную запуском change detection.

Как работает NgZone  
Когда происходит асинхронное событие (например, setTimeout, fetch, input), Angular автоматически:

1. Заходит в NgZone;
2. Выполняет асинхронную задачу;
3. После завершения — вызывает Change Detection для обновления UI.

# RxJS

RxJS (Reactive Extensions for JavaScript) — это библиотека для реактивного программирования, основанная на потоках
данных (streams) и наблюдаемых значениях (Observables).

**Реактивное программирование (Reactive Programming)** — это парадигма программирования, ориентированная на работу с
потоками данных и распространение изменений. Вместо того чтобы ждать и проверять результаты, программа автоматически
реагирует на происходящие события.

### Основные принципы:

* Асинхронность. Обработка данных происходит без блокировки основного потока выполнения.
* Потоки данных (Streams). Данные обрабатываются как последовательность событий или изменений, которые могут
  происходить в любой момент времени.
* Наблюдатели (Observers). Компоненты системы подписываются на потоки данных и реагируют на изменения, выполняя
  определённые действия.
* Реактивные операторы. Это функции, которые применяются к потокам данных для выполнения различных манипуляций:
  фильтрации, преобразования, комбинирования.

### RxJS предоставляет мощные инструменты для работы с:

    * асинхронными событиями,
    * потоками данных (например, HTTP-запросы, WebSocket, DOM-события),
    * таймерами, вводом с клавиатуры, изменениями формы и т.д.

### Как работает RxJS?

В основе RxJS лежит Observable — объект, который эмиттит данные во времени, на которые можно подписаться (subscribe)
и обработать с помощью операторов (pipe).

    ```typescript
    import { Observable } from 'rxjs';
    
    const obs$ = new Observable(observer => {
      observer.next('Hello');
      observer.next('RxJS');
      observer.complete();
    });
    
    obs$.subscribe(value => console.log(value));
    ```

### Как RxJS интегрирован в Angular?

В Angular RxJS встроен по умолчанию, и используется почти в каждом важном элементе фреймворка:

Где используется RxJS в Angular Как именно:

* HttpClient Возвращает Observable вместо Promise
* Reactive Forms Поддержка реактивных изменений (valueChanges)
* Router Прослушивание навигации (router.events)
* Services & State Использование Subject, BehaviorSubject и др.
* Async Pipe Автоматическая подписка и отписка от Observable

### Что такое Subject и какие виды Subject’ов существуют в RxJS?

Что такое Subject в RxJS?
Subject — это особый тип Observable, который может мультикастить данные: т.е. отправлять значения сразу нескольким
подписчикам.

Он объединяет свойства Observable (выдаёт значения) и Observer (можно передавать значения с помощью .next()).

Особенности

1. Вы сами инициируете передачу значений через .next()
2. Подписчики получают одинаковые данные
3. Позволяет централизованно управлять потоком событий
4. Пример использования обычного Subject

```typescript
import { Subject } from 'rxjs';

const subject = new Subject<string>();

subject.subscribe(val => console.log('Подписчик A:', val));
subject.subscribe(val => console.log('Подписчик B:', val));

subject.next('Привет');
// → Подписчик A: Привет
// → Подписчик B: Привет
```

### Виды Subject’ов

RxJS предоставляет несколько видов Subject’ов, которые отличаются по поведению и способу хранения значений:

| Тип             | Сохраняет значение?   | Что получает новый подписчик                |
|-----------------|-----------------------|---------------------------------------------|
| Subject         | Нет                   | Только новые значения после подписки        
| BehaviorSubject | Да (только последнее) | Сразу получает последнее значение           |
| ReplaySubject   | Да (все или часть)    | Получает все/несколько прошлых значений     |
| AsyncSubject    | Да (только финальное) | Получает только последнее, когда complete() |

1. BehaviorSubject  
   Используется, когда нужно, чтобы подписчики получали текущее значение сразу при подписке.
   Идеально для хранения состояния (например, текущий пользователь, тема приложения и т.д.)

    ```typescript
    import { BehaviorSubject } from 'rxjs';
    
    const behavior$ = new BehaviorSubject<number>(0);
    
    behavior$.subscribe(val => console.log('A:', val)); // A: 0
    behavior$.next(1); // A: 1
    behavior$.subscribe(val => console.log('B:', val)); // B: 1
    
    ```
2. ReplaySubject  
   Используется, когда нужно, чтобы подписчики получали несколько последних значений.
   Идеально для отслеживания изменений (например, история изменений, лог действий и т.д.)

    ```typescript
    import { ReplaySubject } from 'rxjs';

    const replay$ = new ReplaySubject<number>(2); // хранит 2 последних значения
    
    replay$.next(1);
    replay$.next(2);
    replay$.next(3);
    
    replay$.subscribe(val => console.log('Подписчик:', val));
    // → Подписчик: 2
    // → Подписчик: 3
    ```

3. AsyncSubject  
   Используется, когда нужно, чтобы подписчики получали только последнее значение.
   Используется для отложенных значений, например, при однократном запросе данных.
   Идеально для отслеживания финального состояния (например, статус загрузки данных, статус ошибки и т.д.).

    ```typescript
    import { AsyncSubject } from 'rxjs';
    
    const async$ = new AsyncSubject<number>();
    
    async$.next(1);
    async$.next(2);
    async$.next(3);
    async$.complete();
    
    async$.subscribe(val => console.log('Подписчик:', val));
    // → Подписчик: 3
    ```

Совет:  
В Angular чаще всего используют BehaviorSubject для управления состоянием компонентов и сервисов, так как он гарантирует
актуальное значение при подписке.

# Паттерны

```typescript

// 1. Абстрактные интерфейсы продуктов
interface Button {
  render(): void;
}

interface Checkbox {
  toggle(): void;
}

// 2. Конкретные продукты
class MacButton implements Button {
  render(): void {
    console.log("Mac button rendered");
  }
}

class WinButton implements Button {
  render(): void {
    console.log("Windows button rendered");
  }
}

class MacCheckbox implements Checkbox {
  toggle(): void {
    console.log("Mac checkbox toggled");
  }
}

class WinCheckbox implements Checkbox {
  toggle(): void {
    console.log("Windows checkbox toggled");
  }
}

// 3. Абстрактная фабрика
interface GUIFactory {
  createButton(): Button;

  createCheckbox(): Checkbox;
}

// 4. Конкретные фабрики
class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

// 5. Клиентский код
function runApp(factory: GUIFactory) {
  const button = factory.createButton();
  button.render();

  const checkbox = factory.createCheckbox();
  checkbox.toggle();
}

// Можно легко подменять фабрику
// Mac UI
runApp(new MacFactory());

// Windows UI
runApp(new WinFactory());
```
