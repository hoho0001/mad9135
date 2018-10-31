# Week 7: Routing, AJAX, and ReactStrap

## React Routing

- Need to add the `react-router-dom` module
- [React Routing Intro video](https://www.youtube.com/watch?v=y2aOOU8GMwA)

```
yarn add react-router-dom
```

- Then you need to import the different parts on different pages.

```javascript
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//to set up the Paths and routing at the top level

...

render(){
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/other" component={Other} />
            <Route exact path="/things" component={Things} />
            <Route path="/things/:thingID" component={Things} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    );
}
```

```javascript
import {NavLink} from 'react-router-dom';
//to add navigational links to a page

...

render(){
    return (
        <div>
            <NavLink to="/">Go Home</NavLink>
        </div>
    )
}
```

- [Beyond the Basics of Routing video](https://www.youtube.com/watch?v=uBLRO5eUmQw)
- Here are the main properties that we get passed through `props` from a `<Route>` component to it's child component.

```javascript
myMethod = (ev) = >{
    console.log( this.props.match.params ); //object full of url parts
    console.log( this.props.location.path ); //full url 
    
    this.props.history.push('/new/url/');  //add a new entry in the browser history and cause a pageload
    this.props.history.replace('/new/url/'); //replace the current entry with a new one and reload
}
```

- use the React dev tools to see the props and all the possibilities.


## React Router NavLink vs Link

- There are two ways we can add Links in React Router - `<NavLink>` and `<Link>`.
- `<NavLink>` is a wrapper around `<Link>`.
- It has all the capabilities of `<Link>` plus some style capabilities.
- `activeClassName` lets you add a CSS class if the `to` value matches the current URL.
```javascript
<NavLink to="/" activeClassName="selected">Link Text</NavLink>
```
- `activeStyle` is an object that you can use to add style properties to the element if it matches the current URL. Basically a hack version of activeClassName
- You can also add a function to run if the link matches the current URL

```javascript
class MyComponent extends React.Component{
    
    oddEvent = (match, location) => {
      if (!match) {
        return false
      }
      const eventID = parseInt(match.params.eventID)
      return !isNaN(eventID) && eventID % 2 === 1
    }

    render(){
        return (
            <NavLink
              to="/events/123"
              isActive={this.oddEvent}
            >Event 123</NavLink>
        )
    }
}
```
- [NavLink vs Link Video](https://www.youtube.com/watch?v=UjAmXiNE68E)


## Making AJAX calls from React

- When you want to load data from an external source into our React app, we need to be sure to be working in sync with the React LifeCycle.
- So, either inside the `componentDidMount` or `componentDidUpdate` methods, OR inside a custom method that you have called in response to a user action.
- [React AJAX video](https://www.youtube.com/watch?v=xg7NRRdBWzg) 
- Here is the Home Component code from the video

```javascript
export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            list: [],
            error: null
        }
    }
    
    buildList =(data)=>{
        console.log(JSON.stringify(data), null, '\t');
        this.setState({
            list: data,
            error: null
        })
    }
    
    componentDidMount(){
        let url = 'https://prof3ssorst3v3.github.io/media-sample-files/products.json';
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(err => {
            this.setState({error:err})
        })
    }
    
    render(){
        return (
            <div>
                <h1>This is HOME</h1>
                <Header />
                <ul>{ this.state.list.length &&
                this.state.list.map((item)=> (
                    <li key={item.id}>{item.title}</li>
                ) ) }</ul>
                {this.state.error &&
                    <h3>{this.state.error}</h3>
                }
            </div>
        )
    }
}
```


## Styling your Pages with ReactStrap

- ReactStrap is a tool that will let you add BootStrap style Components as well as Bootstrap 4 styling to your React web apps.
- [ReactStrap docs](https://reactstrap.github.io/)
- [Bootstrap docs](http://getbootstrap.com/docs/4.1/getting-started/introduction/)
- To use it you need to install it in your project
```
npm i --save reactstrap bootstrap@4.1.3
```
- OR
```
yarn add reactstrap bootstrap@4.1.3
```
- Then you can start to add the ReactStrap components in your Components.
- Include them just like you would include one of your own.

```javascript
import React, {Component} from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class MyComponent extends Component{
    render(){
        return (
            <Button color="danger">Click Me!</Button>
        )
    }
}
```

- Most of the elements that were available in Bootstrap 4 are available here.
- [Component Reference](https://reactstrap.github.io/components/alerts/)
- [Text Colour Reference](https://reactstrap.github.io/utilities/colors/)
- [ReactStrap video](https://www.youtube.com/watch?v=JwJfR0mtnCE)




## What to do Before Week 8

- Watch all the videos listed on this page
- Start working on the React Project
- Finish Mocha Chai Hybrid
- Start Webpack Hybrid
- [MAD9135 Week 7 Playlist](https://www.youtube.com/watch?v=JwJfR0mtnCE&list=PLyuRouwmQCjnq8aIslSyBxrOJPUAD4dxO)

