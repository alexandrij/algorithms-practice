import playwright from 'playwright';
import tracealyzer from 'tracealyzer';
import chalk from 'chalk';
import prettyjson from 'prettyjson';

const TRACE_FILE = 'trace.zip';

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  await context.tracing.start({ snapshots: true, screenshots: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:4200');
  await context.tracing.stop({ path: TRACE_FILE });

  let performance = JSON.parse(
    await page.evaluate(() => {
      let total = window.performance;
      let entries = total.getEntries();
      return JSON.stringify({ total, entries });
    }),
  );

  await context.close();
  await browser.close();


  // const tracealyzerMetrics = tracealyzer(TRACE_FILE);

  console.log(chalk.yellow.underline.bold('Total page time from start to load\n'));
  const totalTime = performance.total.timing.loadEventEnd - performance.total.timing.fetchStart;
  console.log(chalk.cyan.bold(`${totalTime}ms\n`));

  console.log(chalk.yellow.underline.bold('Time spent constructing the DOM tree\n'));
  const domConstructionTime = performance.total.timing.domComplete - performance.total.timing.domInteractive;
  console.log(chalk.cyan.bold(`${domConstructionTime}ms\n`));

  console.log(chalk.yellow.underline.bold('Time spent rendering\n'));
  const renderingTime = performance.total.timing.domComplete - performance.total.timing.domLoading;
  console.log(chalk.cyan.bold(`${renderingTime}ms\n`));

  console.log(chalk.yellow.underline.bold('window.performance total and entries\n'));
  console.log(
    chalk.yellow.italic(
      'window.performance timing values are in millisecond timestamps\nwindow.performance entries values are in millisecond\n\n',
    ),
  );
  console.log(
    chalk.yellow.italic(
      'More info:\n* https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API\n* https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp\n',
    ),
  );
  console.log(prettyjson.render(performance, { numberColor: 'cyan' }));

  console.log(chalk.yellow.underline.bold('\n\npuppeteer page metrics\n'));
  console.log(
    chalk.yellow.italic(
      'More info:\n* https://github.com/GoogleChrome/puppeteer/blob/v1.11.0/docs/api.md#pagemetrics\n',
    ),
  );
  // console.log(prettyjson.render(pageMetrics, { numberColor: 'cyan' }));

  console.log(chalk.yellow.underline.bold('\n\ntracealyzer metrics\n'));
  console.log(chalk.yellow.italic('More info:\n* https://www.npmjs.com/package/tracealyzer\n'));
  // console.log(prettyjson.render(tracealyzerMetrics, { numberColor: 'cyan' }));
})();
