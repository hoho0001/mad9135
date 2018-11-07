# Week 12: React Native

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

## Permissions

- Since this is the native environment that we are dealing with, we need to add the permissions to the `AndroidManifest.xml` file for Android or the `Info.plist` file for iOS.
- [Android Permission Ref](https://facebook.github.io/react-native/docs/permissionsandroid.html)
- Example, if you want to use Geolocation then you will need to enable the Android permission for location.
- [Geolocation Ref](https://facebook.github.io/react-native/docs/geolocation#content)
- 

## Gestures

- [GestureResponder Ref](https://facebook.github.io/react-native/docs/gesture-responder-system)


## What to do Before Week 13

::: tip TODO
- Find a NEW pairs programming partner for the Final Project
- Start wireframing and sketching your app for the Final Project
- Pick a platform for your final App - iOS or Android
- Think about which features you want to implement
:::

