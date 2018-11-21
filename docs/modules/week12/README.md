# Week 12: React Native

## All the Parts

- Expo - tools for creating your project and testing it.
- [Expo documentation](https://docs.expo.io/versions/latest/)
- Expo Client - the App to install on your phone for testing once you go beyond the capabilities of the simulator/emulator
- `expo-cli` - the new version of `create-react-native-app`
- Expo XDE - a browser based development environment and testing area. Requires Expo account.
- React Native [Official Reference](https://facebook.github.io/react-native/)

## React Native Components

- List of [React Native Components](https://facebook.github.io/react-native/docs/components-and-apis)
- List of [Supported JavaScript Features](https://facebook.github.io/react-native/docs/javascript-environment)
- In the React Native Official Documentation the left hand menu provides a great list of all the things you can look up. The menu areas are:
    - The Basics
    - Guides
    - Guides (iOS)
    - Guides (Android)
    - Contributing
    - Components
    - APIs

## Platform Specific Code
- Creating Platform specific styles and components
- [Platform Specific Ref](https://facebook.github.io/react-native/docs/platform-specific-code)

```js
//Platform specific style example
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});
```

```js
//Platform specific Component rendering
import {Platform} from 'react-native';

const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid'),
})();

<Component />;
```

## Navigation

- I recommend using the [React-Navigation](https://reactnavigation.org/docs/en/getting-started.html)
- This requires adding it to the project with npm

```
npm i react-navigation --save
```

- Then you can create a top level wrapper like you do for React Router
- The new App.js would look like this:

```js
import react, {Component} from 'react';
import {Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const App = createStackNavigator(
    {
      Home: {screen: HomeScreen},
      Profile: {screen: ProfileScreen},
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(App);
```

- The home screen and profile screen could also exist inside App.js as the following.

```js
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    // We can use this.props.navigation directly inside the onPress too.
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}
```

- Or you could have it in it's own file and `import HomeScreen from './HomeScreen';` at the top of App.js
- Don't forget to `export default` on the HomeScreen class.


## Layout

- To understand layout in React Native, you really should understand CSS Flexbox.
- [React Native Flexbox Reference](https://facebook.github.io/react-native/docs/flexbox)
- [CSS Grid and Flexbox video playlist](https://www.youtube.com/watch?v=hYJvxsgnGMA&list=PLyuRouwmQCjkO1E7UjDHUiQboAAHh9Zjj)

## State and Props

- React Native uses `state` and `props` the same ways as React.
- Check out the Pizza Translator sample app on [this page](https://facebook.github.io/react-native/docs/handling-text-input). It shows how to use state, props, and text inputs.

## Scrolling and Lists

- There are multiple ways of creating scrollable areas and lists on pages.
- [ScrollViews](https://facebook.github.io/react-native/docs/using-a-scrollview) 
- [FlatLists and SectionLists](https://facebook.github.io/react-native/docs/using-a-listview)

## Images

- [Image reference](https://facebook.github.io/react-native/docs/images)
- The `<Image>` component needs to have a `source` attribute.
- The `source` typically has a require( ) method as it's value.
- Image source paths are relative urls. Usually you would save the images in the assets folder. The path would be relative to your current .js file.

```js
<Image source={require('./img/my-icon.png')} />
```

- To add a width and height, use a style attribute with a style object as the value.
- The values for width and height need to be integers without units. 

```js
<Image source={require('./img/my-icon.png')} style={{width:64, height:64}}/>
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />
```

- The numbers will be interpreted as device independent pixels. So, they will be the same size on any device.
- In the last image example above, the width and height were required because the image came from an external source and was not compiled with the app.
- Make sure to read more about the Images and other binary assets here: [Image reference](https://facebook.github.io/react-native/docs/images).



## AJAX and Fetch

- Fetch is natively supported in React Native.
- [Network Fetch Reference](https://facebook.github.io/react-native/docs/network)
- For iOS remember that all URLS for fetch should be over https.

## Permissions

- Since this is the native environment that we are dealing with, we need to add the permissions to the `AndroidManifest.xml` file for Android or the `Info.plist` file for iOS.
- [Android Permission Ref](https://facebook.github.io/react-native/docs/permissionsandroid.html)
- Example, if you want to use Geolocation then you will need to enable the Android permission for location.
- [Geolocation Ref](https://facebook.github.io/react-native/docs/geolocation#content)


## Gestures

- [GestureResponder Reference](https://facebook.github.io/react-native/docs/gesture-responder-system)
- Read for next week.


## JavaScript Debugging Notes for Expo

- [Expo docs on JS debugging](https://docs.expo.io/versions/v31.0.0/workflow/debugging)


## Node Errors

- When you are working with Expo and React Native, you are working with Node. That means NPM and Node Errors.
- Here is a reference for the [Common System Errors](https://nodejs.org/api/errors.html#errors_common_system_errors)


## What to do Before Week 13

::: tip TODO
- Find a NEW pairs programming partner for the Final Project
- Start wireframing and sketching your app for the Final Project
- Pick a platform for your final App - iOS or Android
- Think about which features you want to implement
:::

