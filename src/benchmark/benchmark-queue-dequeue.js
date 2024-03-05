import { Queue } from '../data-structures/queue.js';

const streams = [
  '/prediction/visualization/text_view_facing',
  '/visualizations/taget-path-vel/path',
  '/visualizations/trajectory_vel/path',
  '/visualizations/wheel_direction/path',
  '/perception/cloud_obstacles/visualization/cloud_clusters_visualization/path',
  '/planning/visualization/maneuvers/path',
  '/prediction/visualization/distance_circles/path',
  '/prediction/visualization/path',
  '/planning/visualization/turn_signals/mesh',
  '/prediction/visualization/mesh',
  '/prediction/visualization/following/path',
  '/planning/visualization/stop_line/path',
  '/visualizations/tracked_3d_objects/B/text_view_facing',
  '/visualizations/tracked_3d_objects/Bc/text_view_facing',
  '/visualizations/tracked_3d_objects/P/text_view_facing',
  '/visualizations/tracked_3d_objects/V/text_view_facing',
  '/visualizations/tracked_3d_objects/Tr/text_view_facing',
  '/chassis/power_train/state',
  '/diagnostics/localization/localization',
  '/diagnostics/control/input_monitor',
  '/visualizations/tracked_3d_objects/Bc/mesh',
  '/visualizations/tracked_3d_objects/V/mesh',
  '/visualizations/tracked_3d_objects/Tr/mesh',
  '/visualizations/tracked_3d_objects/P/mesh',
  '/visualizations/tracked_3d_objects/Cn/mesh',
  '/visualizations/tracked_3d_objects/B/mesh',
  '/pose/covariance',
  '/pose/trail',
  '/visualizations/tracked_3d_objects/Cn/text_view_facing',
  '/hdmap/visualization/traffic_lights_lens/mesh',
  '/diagnostics/odometry_velocity',
  '/diagnostics/cloud_builder',
  '/diagnostics/cpu',
  '/diagnostics/chassis',
  '/chassis/control_path/state',
  '/hdmap/visualization/crossroads/path',
  '/hdmap/visualization/ways/dashed_to_solid/path',
  '/hdmap/visualization/ways/solid/path',
  '/hdmap/visualization/ways/virtual/path',
  '/hdmap/visualization/ways/solid_dashed/path',
  '/hdmap/visualization/ways/double_solid/path',
  '/hdmap/visualization/ways/dashed_cross/path',
  '/hdmap/visualization/crosswalks/path',
  '/hdmap/visualization/traffic_lights/mesh',
  '/hdmap/visualization/ways/border/path',
  '/hdmap/visualization/ways/crosswalk_part/path',
  '/hdmap/visualization/ways/dashed/path',
  '/hdmap/visualization/stop_lines/path',
  '/map_topic',
  '/diagnostics/ram',
  '/diagnostics/planning',
];

function benchmarkQueueArray(len) {
  const queue = new Array(len);
  for (let i = 0; i < len; i++) {
    queue[i] = [...streams];
  }

  const t1 = performance.now();
  let el;
  while (typeof (el = queue.shift()) !== 'undefined') {
    // console.info(el);
  }
  return performance.now() - t1;
}

function benchmarkQueue(len) {
  const queue = new Queue();
  for (let i = 0; i < len; i++) {
    queue.enqueue([...streams]);
  }

  const t1 = performance.now();
  let el;
  while (typeof (el = queue.dequeue()) !== 'undefined') {
    // console.info(el);
  }
  return performance.now() - t1;
}

function benchmarkQueueMap(len) {
  const queue = new Map();
  for (let i = 0; i < len; i++) {
    queue.set(i, [...streams]);
  }

  const t1 = performance.now();
  let el;

  const iterator = queue[Symbol.iterator]();
  while (!(el = iterator.next()).done) {
    // console.info(el.value);
    const [key] = el.value;
    queue.delete(key);
  }
  return performance.now() - t1;
}

for (let i = 0; i < 5; i++) {
  console.group(`benchmark queue: ${i}`);
  for (const n of [1000, 10000, 15000, 20000, 50000, 100000]) {
    console.group(`*** benchmark ${n} ***`);
    console.info(`Очередь на основе массива: array.shift(): ${benchmarkQueueArray(n).toFixed(2)}мс.`);
    console.info(`Очередь на основе LinkedList: queue.dequeue(): ${benchmarkQueue(n).toFixed(2)}мс.`);
    console.info(`Очередь на основе Map: iterator.next(): ${benchmarkQueueMap(n).toFixed(2)}мс.`);
    console.groupEnd();
    console.info('\n');
  }
  console.groupEnd();
}
