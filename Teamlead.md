# Тимлид / Техлид

## Процессы

* Квартальный план
* Планирование спринта
* Спринты 2 - х недельные
* Дейли команды
* Демо спринта
* Код -> Код ревью -> Unit - тесты -> логирование, мониторниг, алерты -> prod
* A/B тесты, регресс тестирование (cypress)
* Прод монторинг

## Технологии

* TypeScript
* React, Redux, Redux Toolkit
* Jest - unit - тесты
* Webpack - сборщик
* Cypress - автотесты
* Sentry - Мониторинг ошибок
* Grafana - Визуализация данных логов

## Доставка ошибок до Sentry
ErrorBoundary -> fetch -> sentry - сервис

## Доставка performance
useLayoutEffect -> sendBeacon -> grafana - сервис