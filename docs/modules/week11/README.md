# Week 11: React Native

## React Native

- If you have done any web app development with React then this will feel very familiar.
- Unlike Cordova or ionic, React Native uses JavaScript that compiles to Native Code.

::: tip
React Native creates native applications, not hybrid applications
:::

- **REFERENCES**
- [React Native official Docs](https://facebook.github.io/react-native/)
- [React Native Running on a Device](https://facebook.github.io/react-native/docs/running-on-device.html)
- [React Native Debugging Ref](https://facebook.github.io/react-native/docs/debugging.html)

## Getting Started

- On the command line we will use an NPM module called `create-react-native-app`. Sound familiar?
- Type the following to create a sample starter app and launch it to be run on your phone.

```js
npx create-react-native-app myapp
cd myapp
yarn start
```

## Expo

- Download the Expo app on to your phone to be able to test your app.
- [Expo website](https://expo.io)
- Once installed and started you can either scan the QR Code shown in your terminal when you ran the yarn start command, or enter the ip address shown. Eg: `exp://192.168.10.10:19000`
- With the Expo app we can test our app on our devices.
- Note the commands listed in the Terminal for controlling and restarting the app.
- 

## React Native Syntax

- With React Native we will be creating apps with JSX but we CANNOT use HTML tags. We have to use the Components provided by React Native.
- Sample starter `App.js` page:

```js
import React, {Component} from 'react'
import {Stylesheet, Text, View} from 'react-native'

export default class App extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>This is just some text. No paragraph tags here.</Text>
                <Text>Think about your Android and iOS apps and the way to create interfaces</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CF3',
        color: '#333'
    }
})
```

- The Styles are added through JavaScript. The Style properties are NOT CSS. They are a special set of CSS-like properties available through the imported StyleSheet object.
- [StyleSheet property reference](https://github.com/vhpoet/react-native-styling-cheat-sheet)


## What to do Before Week 12

::: warning TODO
- Finish working on the PWA app with your partner
- Work on your final Hybrid Exercise
- Review the notes on React Native
:::
