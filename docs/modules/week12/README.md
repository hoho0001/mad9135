# Week 12: React Native

## React Native Components

- List of [React Native Components](https://facebook.github.io/react-native/docs/components-and-apis)
- List of [Supported JavaScript Features](https://facebook.github.io/react-native/docs/javascript-environment)
- 

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

## What to do Before Week 13

::: tip TODO
- start wireframing and sketching your app for the Final Project
- 
:::

