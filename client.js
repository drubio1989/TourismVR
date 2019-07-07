// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  const greetingPanel = new Surface(
    1000, /* width */
    600, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('SurfaceProject', { /* initial props */ }),
    greetingPanel
  );

  museumPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  museumPanel.setAngle(
    Math.PI / 2, /* yaw angle */
    0 /* pitch angle */
  );

  restaurantPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  restaurantPanel.setAngle(
    -Math.PI / 2, /* yaw angle */
    0 /* pitch angle */
  );

  shoppingPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  shoppingPanel.setAngle(
    60, /* yaw angle */
    0 /* pitch angle */
  );

  r360.renderToSurface(
    r360.createRoot('InfoPanel', { id: 'museum' }),
    museumPanel,
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('InfoPanel', { id: 'restaurant' }),
    restaurantPanel,
  );

  r360.renderToSurface(
    r360.createRoot('InfoPanel', { id: 'shopping' }),
    shoppingPanel,
  );


  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('gdansk.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  resizeSurface(width, height, id) {
    if (id === 'museum') {
      museumPanel.resize(width, height);
    } else if (id === 'restaurant') {
      restaurantPanel.resize(width, height);
    } else if (id === 'shopping') {
      shoppingPanel.resize(width, height);
    }
  }
}


window.React360 = {init};
