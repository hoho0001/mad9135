# Week 4: React and Components

## Some Best Practices for Coding

- Air B-n-B JavaScript Style Guide
- [AirBNB Style Guide](https://github.com/airbnb/javascript)
- Use it to set up your ES Lint - include the react option.
- [ESLint](https://eslint.org/)

## Building Components with React

- The basic scaffolding for a React project
- Website starts in `/src/index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

- <App /> is the main component
- It is imported from `./App`
- `/src/App.js`

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

## Running your React App

### The Development Version

- From the terminal / command prompt
- `npm start` will start hosting the development version
- You can see it in your browser @ http://localhost:3000


### The Production Version

- From the terminal / command prompt
- `npm run build` will compile the project into the `build` folder
- `cd build` to switch to that folder
- start a production web server using npx.
- `npx server`
- Production build can be seen in your browser @ http://localhost:5000


## Adding Brackets to Launch from CLI

- To enable Brackets to launch from the Terminal in OS X
- `sudo ln -s /Applications/Brackets.app/Contents/Resources/brackets.sh /usr/local/bin/Brackets`
- Relaunch the Terminal

## Adding VS Code to Launch from CLI

- Edit your `.bash_profile` to update the `$PATH` variable
- Add the following line
- `export PATH="${PATH}:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"`
- save the file and relaunch the Terminal.

## Introduction to JSX

- JSX is an XML like syntax used by React to extend JS.
- The `render()` method must return ONE root element
- Wrap what you are returning in parentheses.
- Writing comments in JSX
- Injecting JS in the returned content with curly braces around expressions.
- No quotes around the attribute values if you are using curly braces.
- No if statements. Use conditional ternary statements.
- Attribute names - class => className, for => htmlFor
- Styles can be added as objects. Use the JS version of style props.

```javascript
class App extends React.Component {
    render () {
        let myStyle = {
            fontSize: '2rem',
            color: 'cornflowerblue'
        }
    
        return (
            <div title={ 5+1 } id="bob">
                <span style={myStyle}>Hello World.</span>
                {/*
                Comments must be wrapper in curly braces
                */}
            </div>
        )
    }
}
```

## Why Use JSX

-  React comes with a method called `createElement()`, which is used to create elements within your web app.
- JSX is like a shortcut to calling `createElement()`

```javascript
React.createElement(
         "p",
         { title: "This is a paragraph" },
         "Lorem Ipsum dolor sit amet. Ad Astra!"
      )
```

- The `createElement()` method takes three arguments - the element to create, an object which defines the attributes for that element, and then the content / children of the element (a list of createElement calls).
- If the child of the element being created is another element then you would replace the third argument with another `createElement()` call.

```javascript
var nav = React.createElement(
   "ul",
   { id: "nav" },
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#home" },
         "First Link"
      )
   ),
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#other" },
         "Second Link"
      )
   )
);
```

- The above syntax would create a <ul> with two <li> elements that each contained an anchor tag.
- See how redundant this could get?
- Alternatively, here is the JSX for the same output.

```javascript
return (
    <ul>
        <li><a href="#home">First Link</a></li>
        <li><a href="#other">Second Link</a></li>
    </ul>
)
```

- Which would you prefer to write?
- Here are some [JSX Gotchas](https://reactjs.org/docs/jsx-in-depth.html)


## What to do Before Week 5

- [YouTube Week 4 Playlist]()
- 