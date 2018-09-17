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


## What to do Before Week 5

- [YouTube Week 4 Playlist]()
- 