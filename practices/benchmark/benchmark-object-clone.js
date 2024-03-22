const streams = {
  '/prediction/visualization/text_view_facing': {
    stream: '/prediction/visualization',
    substream: '/text_view_facing',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/taget-path-vel/path': {
    stream: '/visualizations/taget-path-vel',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/trajectory_vel/path': {
    stream: '/visualizations/trajectory_vel',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/wheel_direction/path': {
    stream: '/visualizations/wheel_direction',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/perception/cloud_obstacles/visualization/cloud_clusters_visualization/path': {
    stream: '/perception/cloud_obstacles/visualization/cloud_clusters_visualization',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/planning/visualization/maneuvers/path': {
    stream: '/planning/visualization/maneuvers',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/prediction/visualization/distance_circles/path': {
    stream: '/prediction/visualization/distance_circles',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/prediction/visualization/path': {
    stream: '/prediction/visualization',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/planning/visualization/turn_signals/mesh': {
    stream: '/planning/visualization/turn_signals',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/prediction/visualization/mesh': {
    stream: '/prediction/visualization',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/prediction/visualization/following/path': {
    stream: '/prediction/visualization/following',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/planning/visualization/stop_line/path': {
    stream: '/planning/visualization/stop_line',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/B/text_view_facing': {
    stream: '/visualizations/tracked_3d_objects/B',
    substream: '/text_view_facing',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/Bc/text_view_facing': {
    stream: '/visualizations/tracked_3d_objects/Bc',
    substream: '/text_view_facing',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/P/text_view_facing': {
    stream: '/visualizations/tracked_3d_objects/P',
    substream: '/text_view_facing',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/V/text_view_facing': {
    stream: '/visualizations/tracked_3d_objects/V',
    substream: '/text_view_facing',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/Tr/text_view_facing': {
    stream: '/visualizations/tracked_3d_objects/Tr',
    substream: '/text_view_facing',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/chassis/power_train/state': {
    stream: '/chassis/power_train',
    substream: '/state',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/diagnostics/localization/localization': {
    stream: '/diagnostics/localization',
    substream: '/localization',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/diagnostics/control/input_monitor': {
    stream: '/diagnostics/control',
    substream: '/input_monitor',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/Bc/mesh': {
    stream: '/visualizations/tracked_3d_objects/Bc',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/V/mesh': {
    stream: '/visualizations/tracked_3d_objects/V',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/Tr/mesh': {
    stream: '/visualizations/tracked_3d_objects/Tr',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/P/mesh': {
    stream: '/visualizations/tracked_3d_objects/P',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/Cn/mesh': {
    stream: '/visualizations/tracked_3d_objects/Cn',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/B/mesh': {
    stream: '/visualizations/tracked_3d_objects/B',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/pose/covariance': {
    stream: '/pose',
    substream: '/covariance',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/pose/trail': {
    stream: '/pose',
    substream: '/trail',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/visualizations/tracked_3d_objects/Cn/text_view_facing': {
    stream: '/visualizations/tracked_3d_objects/Cn',
    substream: '/text_view_facing',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/traffic_lights_lens/mesh': {
    stream: '/hdmap/visualization/traffic_lights_lens',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/diagnostics/odometry_velocity': {
    stream: '/diagnostics',
    substream: '/odometry_velocity',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/diagnostics/cloud_builder': {
    stream: '/diagnostics',
    substream: '/cloud_builder',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/diagnostics/cpu': {
    stream: '/diagnostics',
    substream: '/cpu',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/diagnostics/chassis': {
    stream: '/diagnostics',
    substream: '/chassis',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/chassis/control_path/state': {
    stream: '/chassis/control_path',
    substream: '/state',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/crossroads/path': {
    stream: '/hdmap/visualization/crossroads',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/ways/dashed_to_solid/path': {
    stream: '/hdmap/visualization/ways/dashed_to_solid',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/ways/solid/path': {
    stream: '/hdmap/visualization/ways/solid',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/ways/virtual/path': {
    stream: '/hdmap/visualization/ways/virtual',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/ways/solid_dashed/path': {
    stream: '/hdmap/visualization/ways/solid_dashed',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/ways/double_solid/path': {
    stream: '/hdmap/visualization/ways/double_solid',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/ways/dashed_cross/path': {
    stream: '/hdmap/visualization/ways/dashed_cross',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/crosswalks/path': {
    stream: '/hdmap/visualization/crosswalks',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/traffic_lights/mesh': {
    stream: '/hdmap/visualization/traffic_lights',
    substream: '/mesh',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/ways/border/path': {
    stream: '/hdmap/visualization/ways/border',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/ways/crosswalk_part/path': {
    stream: '/hdmap/visualization/ways/crosswalk_part',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/ways/dashed/path': {
    stream: '/hdmap/visualization/ways/dashed',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/hdmap/visualization/stop_lines/path': {
    stream: '/hdmap/visualization/stop_lines',
    substream: '/path',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/map_topic': {
    stream: '/map_topic',
    substream: '',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/diagnostics/ram': {
    stream: '/diagnostics',
    substream: '/ram',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
  '/diagnostics/planning': {
    stream: '/diagnostics',
    substream: '/planning',
    timestamp: 'Tue Mar 05 2024 09:05:48 GMT+0300 (Moscow Standard Time)',
  },
};

function objectAssign() {
  const t1 = performance.now();
  const cloned = Object.assign({}, streams);
  for (const key in streams) {
    if (typeof streams[key] === 'object') {
      cloned[key] = Object.assign({}, streams[key]);
    }
  }
  return performance.now() - t1;
}

function objectSpread() {
  const t1 = performance.now();
  const cloned = { ...streams };
  for (const key in streams) {
    if (typeof streams[key] === 'object') {
      cloned[key] = { ...streams[key] };
    }
  }
  return performance.now() - t1;
}

function objectStructuredClone() {
  const t1 = performance.now();
  const cloned = structuredClone(streams);
  return performance.now() - t1;
}

function objectJsonStringify() {
  const t1 = performance.now();
  const cloned = JSON.parse(JSON.stringify(streams));
  return performance.now() - t1;
}

for (let i = 0; i < 5; i++) {
  console.group(`benchmark queue: ${i}`);
  for (const len of [1000, 10000, 15000, 20000, 50000, 100000]) {
    console.group(`*** benchmark ${len} ***`);
    console.info(`Spread [...obj]: ${objectSpread().toFixed(4)}мс.`);
    console.info(`Object.assign({}, obj): ${objectAssign().toFixed(4)}мс.`);
    console.info(`structuredClone(obj): ${objectStructuredClone().toFixed(4)}мс.`);
    console.info(`JSON.perse(JSON.stringify(obj)): ${objectJsonStringify().toFixed(4)}мс.`);
    console.groupEnd();
    console.info('\n');
  }
  console.groupEnd();
}
