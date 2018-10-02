# Week 6: React Fragments, Forms, Refs, and Routing

## React Fragments

- Every return value from a `render()` method needs one root element
- In the DOM we have documentFragments to allow us to contain a peice of HTML that we want to render.
- DocumentFragments do not show up in the DOM after they have been added to the page.
- React has their own Component to create these.
- [React Fragments video]()

```javascript
render(){
    return (
        <React.Fragment>
            <p>React must be imported on the page to use these</p>
        </React.Fragment
    );
}
```

## React Form Elements

- 
- [React Form video]()

## React Refs

- 
- [React Refs video]()

```javascript

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

## What to do Before Week 7

- Watch the React Videos listed on this page
- 