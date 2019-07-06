import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import {Surface} from 'react-360-web';
const surfaceModule = NativeModules.surfaceModule;

class ShoppingPanel extends React.Component {
  state ={
    panel: {
      width: 100,
      height: 100
    },
    image: {
      name: 'info.png',
      width: 100,
      height: 100
    }
  }

  changeSurfaceDimensions(width, height, info) {
    surfaceModule.resizeSurface(width, height, info);
    if (info === 'shopping') {
      this.setState({ panel: {
                        width: width,
                        height: height
                      },
                      image: {
                        name: 'shopping.jpg',
                        width: width,
                        height: height
                      }
                    });
    } else {
      this.setState({ panel: {
                        width: width,
                        height: height
                      },
                      image: {
                        name: 'info.png',
                        width: width,
                        height: height
                      }
                    });
    }
  }

  render() {
    return (
      // When I on Enter, I want to change the size and information of panel
      <View onEnter={() => this.changeSurfaceDimensions(400, 400, 'shopping')}
            onExit={() => this.changeSurfaceDimensions(100, 100, 'info')}
            style={[styles.museumPanel, {width: this.state.panel.width, height: this.state.panel.height}]}>
        <Image source={asset(`${this.state.image.name}`)} style={{width: this.state.image.width, height: this.state.image.height}} />
        <View>
          <Text>
            Shop until you drop! Enjoy our wide selection of various retail outlets
          </Text>
        </View>
      </View>
    );
  }
};

class RestaurantPanel extends React.Component {
  state ={
    panel: {
      width: 100,
      height: 100
    },
    image: {
      name: 'info.png',
      width: 100,
      height: 100
    }
  }

  changeSurfaceDimensions(width, height, info) {
    surfaceModule.resizeSurface(width, height, info);
    if (info === 'restaurant') {
      this.setState({ panel: {
                        width: width,
                        height: height
                      },
                      image: {
                        name: 'beer.jpg',
                        width: width,
                        height: height
                      }
                    });
    } else {
      this.setState({ panel: {
                        width: width,
                        height: height
                      },
                      image: {
                        name: 'info.png',
                        width: width,
                        height: height
                      }
                    });
    }
  }

  render() {
    return (
      // When I on Enter, I want to change the size and information of panel
      <View onEnter={() => this.changeSurfaceDimensions(400, 400, 'restaurant')}
            onExit={() => this.changeSurfaceDimensions(100, 100, 'info')}
            style={[styles.museumPanel, {width: this.state.panel.width, height: this.state.panel.height}]}>
        <Image source={asset(`${this.state.image.name}`)} style={{width: this.state.image.width, height: this.state.image.height}} />
        <View>
          <Text>
            Enjoy a fresh piwo at the square.
          </Text>
        </View>
      </View>
    );
  }
};

class MuseumPanel extends React.Component {
  state ={
    panel: {
      width: 100,
      height: 100
    },
    image: {
      name: 'info.png',
      width: 100,
      height: 100
    }
  }

  changeSurfaceDimensions(width, height, info) {
    surfaceModule.resizeSurface(width, height, info);
    if (info === 'museum') {
      this.setState({ panel: {
                        width: width,
                        height: height
                      },
                      image: {
                        name: 'museum.jpg',
                        width: width,
                        height: height
                      }
                    });
    } else {
      this.setState({ panel: {
                        width: width,
                        height: height
                      },
                      image: {
                        name: 'info.png',
                        width: width,
                        height: height
                      }
                    });
    }
  }

  render() {
    return (
      // When I on Enter, I want to change the size and information of panel
      <View onEnter={() => this.changeSurfaceDimensions(400, 400, 'museum')}
            onExit={() => this.changeSurfaceDimensions(100, 100, 'info')}
            style={[styles.museumPanel, {width: this.state.panel.width, height: this.state.panel.height}]}>
        <Image source={asset(`${this.state.image.name}`)} style={{width: this.state.image.width, height: this.state.image.height}} />
        <View>
          <Text>
            Pablo Picasso: The Blue Period. This week only!
          </Text>
        </View>
      </View>
    );
  }
};

export default class SurfaceProject extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Image source={asset('poland.png')} style={styles.img} />
        <View style={styles.greetingBox}>
          <VrButton>
            <Text style={styles.greeting}>Welcome to Beautiful Gdansk, Poland! Click Here!</Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  museumPanel: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  infoIcon: {
    width: 100,
    height: 100
  },
  img: {
    width: 600,
    height: 400
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    borderColor: '#C4002F',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
    color: '#C4002F'
  },
});

AppRegistry.registerComponent('SurfaceProject', () => SurfaceProject);
AppRegistry.registerComponent('MuseumPanel', () => MuseumPanel);
AppRegistry.registerComponent('RestaurantPanel', () => RestaurantPanel);
AppRegistry.registerComponent('ShoppingPanel', () => ShoppingPanel);
