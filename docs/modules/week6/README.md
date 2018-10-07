# Week 6: React Fragments, Forms, Refs, and Routing

## React Props and State

- props are for passing information from a parent component to a child
- state is for maintaining local data inside any component.
- There are places where you can't `setState()`. Like, the `render()`, `componentDidUpdate()`, `componentWillUpdate()`, `componentDidMount()`, or `shouldComponentUpdate()` method. Basically, set the initial value inside the `constructor()` and then only change it inside the methods that you build.
- Remember that the `constructor()` doesn't run on re-rendering of a component.
- Props can't be changed after they are passed.
- [React Props and State video](https://www.youtube.com/watch?v=2Ha_aAOfB4A)


## React Fragments

- Every return value from a `render()` method needs one root element
- In the DOM we have documentFragments to allow us to contain a peice of HTML that we want to render.
- DocumentFragments do not show up in the DOM after they have been added to the page.
- React has their own Component to create these.
- [React Fragments video](https://www.youtube.com/watch?v=_FwfdS568bY)

```javascript
render(){
    return (
        <React.Fragment>
            <p>React must be imported on the page to use these</p>
        </React.Fragment>
    );
}
```

## React Refs

- Refs are a way that you can reference an element inside your component.
- They exist because in React, you are not supposed to do anything to the DOM.
- Don't use `querySelector`, `querySelectorAll`, `getElementById`, etc.
- If you don't have an event listener on the element, and the content or properties of the element are not being driven by props or state, but you still need to access it, then REFS are the way to go.
- [React Refs video](https://www.youtube.com/watch?v=tsIZj0q1FlY)

```javascript
constructor(){
    super();
    this.myThing = React.createRef();
}

render(){
    return (
        <p><input type="text" ref={this.myThing} /></p>
    )
}
```

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
            <Route  path="/other" component={Other} />
            <Route  path="/things/:thingID" component={Things} />
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
- [NavLink vs Link Video]()


## React Form Elements

- Best practice with Forms is to use the `onSubmit` event.
- When your user is updating values inside your form elements, be reactive and use the `onChange` event to save what they are doing as they are doing it.
- [React Form video]()


## What to do Before Week 7

- Watch the React Videos listed on this page
- [Week 6 Playlist](https://www.youtube.com/watch?v=2Ha_aAOfB4A&list=PLyuRouwmQCjkTsUOb3z_ZWsWuWeBmv2jH)