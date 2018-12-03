# Week 13: React Native

## More React Native Navigation

- To use React Navigation we must add it to our project

```
yarn add react-navigation
```
- OR

```
npm i react-navigation --save
```

- Then we will change our App.js file to be the container which creates the navigation stack controller.
- It will import `createStackNavigator` and `createAppContainer` from the `react-navigation` package.
- Our individual component screens for our app will become JavaScript files of their own.
- I recommend that you put them into a `components` folder to keep your code organized as the project grows.
- Here is a sample `App.js` file with the navigation container.

```js
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Home';
import OtherScreen from './Other';

const titleFunc = (props)=>{
    console.log(props);
    return (
        <View>
            <Text style={{fontWeight:'bold'}}>
                {props.children}
            </Text>
        </View>
    );
}

const App = createStackNavigator({
        Home: {
            screen: HomeScreen,
            params: {name: 'HOME'},
            navigationOptions: ({ navigation }) => ({
                title: `${navigation.state.params.name} Page`,
                headerTitle: titleFunc,
                headerStyle: {
                    backgroundColor: 'lightskyblue'
                }
            })
        },
        Other: {
            screen: OtherScreen
        }
    },
    {
        initialRouteName: 'Other',
        mode: 'modal',
        headerMode: 'screen'
    });

export default createAppContainer(App);

```

- The last two imports for the `App.js` file are the different component screens for this app.
- The `const App` is the Navigation stack, which is created with the imported `createStackNavigator` method. 
- As the user navigates through the application the App is creating a stack of screens. You can think of this like the History array in  a browser.
- Each new screen they visit will add one component to the stack.
- The export for the `App.js` file is the result of calling the imported `createAppContainer` method.
- The `createAppContainer` method accepts the stack navigator object as it's only parameter.

- The `createStackNavigator` method accepts two objects as parameters.
- The first object defines the different component screens. Each one needs to have at least a `screen` property. 
- There are additional properties that you can add to each component screen. 
- [Reference for StackNavigator](https://reactnavigation.org/docs/en/stack-navigator.html)
- Each screen that you define in the first object can also have its own navigation options.
- In these options you can define the title and style of the screen header, and even a function that will return a component that you can use as the content for the header.


- The second object passed to `createStackNavigator` is a config object.
- The config object lets you define things like how the screens animate between each other, which is the initial screen when the app launches, whether the header bar is attached to the screen when it animates, etc. Check the [reference link](https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig) for the full list.
- 

## Navigation

- Once you have the stack navigator in `App.js` then we can build our screen components.
- We can create the links to navigate between screens with buttons that use the built-in navigation functions.
- Here is a sample screen component with navigation.
- Because this component was loaded by the Stack Navigator it will have access to the navigation object through `props` object.
- You can also set the title inside the header using a `static navigationOptions` object with a title property. This is setting what you set in the first object of the `createStackNavigator` method in the `App.js` file.

```js
import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome'
    };
                                                   
    render() {
        const {navigate, push, replace} = this.props.navigation;
        
        return (
            <View style={styles.containerPurple}>
                <StatusBar 
                    hidden={false}
                    barStyle={'dark-content'}
                />
                <Text style={styles.txtW}>Some centered text on the HOME Screen.</Text>
                <Button title="See Other Feature"
                        color="#FFF"
                        onPress={() => navigate('Other', 
                                                { someProp: '123' })} />
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    containerPurple: {
        flex: 1,
        flexDirection:'column',
        padding: 20,
        backgroundColor: '#c3f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtW: {
        color:'#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    }
});
```
- Inside the `Button` component you can add an `onPress` attribute which can use an inline function or point to a function inside the `Component` or a function from `props`.
- Inside that function we are going to use the `this.props.navigation` object's methods. These include `push`, `replace`, or `navigate`.
- Remember the History array in the browser?  We are working with an equivalent to that. 
- The `push` method will add the next screen to the stack.
- The `replace` method will replace the current screen with the new one. So, nothing is added to the stack, just replaced.
- The `navigate` method will act like a smart version of `push`. It will determine if there is something in the stack and add a back button to the header, as required. If you are clicking a button to navigate to a screen which is also the previous item on the stack then it knows to move backwards in the stack instead of adding a new entry.
- There are other methods too. [Navigation Stack Actions reference](https://reactnavigation.org/docs/en/stack-actions.html)
- [React Native Navigation Video]() COMING SOON


## Custom Fonts with Expo

- [React Native Custom Fonts Video](https://www.youtube.com/watch?v=DX9vXjC7Dsw)
- [Custom Font Reference](https://docs.expo.io/versions/latest/guides/using-custom-fonts.html#using-custom-fonts)


## Icons from Expo

- You can use the set of fonts that are included with Expo in your React Native app.
- [Expo Icon Reference](https://docs.expo.io/versions/latest/guides/icons)
- [Expo List of icons](https://expo.github.io/vector-icons/)
- [Using Expo Icons Video]() COMING SOON


## Other Components with NativeBase

- [Native Base](https://docs.nativebase.io/) is a set of styled components that you can import and use in React Native, similar to ReactStrap for React.
- [Native Base Buttons and Icons video]() COMING SOON


## Spinner from NativeBase

- [Native Base Loading Spinner video](https://www.youtube.com/watch?v=caxTvR4QMIY) 
- 

## Fetch with React Native

- [React Native Fetch video](https://www.youtube.com/watch?v=1yJu_4RkaIc) 
- 

## Geolocation with React Native

- [React Native Geolocation video](https://www.youtube.com/watch?v=KytduDMW_7o)


## Resources

- Learn about Test Driven Design (TDD) in React
- [React TDD Part I](https://www.twitch.tv/videos/336693260)
- [React Native Video Playlist](https://www.youtube.com/watch?v=TesDIVA28rM&list=PLyuRouwmQCjnuUEYW4mnSp891sd3WL_zr)
- React Native Playlist Episodes
    - 1: Intro and Setup
    - 2: Android Emulators and IOS Simulators
    - 3: Basic Components
    - 4: Layout and Grids
    - 5: State
    - 6: Props
    - 7: Geolocation
    - 8: Custom Fonts
    - 9: Expo Icons
    - 10: NativeBase Buttons and Icons
    - 11: Fetch with React Native
    - 12: Navigation in React Native
    

## Inspiration

- [The Myth of the Real JS Developer](https://www.youtube.com/watch?v=Xt5qpbiqw2g)

