# Week 7: ReactStrap and AJAX

## Making AJAX calls from React

- When you want to load data from an external source into our React app, we need to be sure to be working in sync with the React LifeCycle.
- So, either inside the `componentDidMount` or `componentDidUpdate` methods, OR inside a custom method that you have called in response to a user action.
- 


## Styling your Pages with ReactStrap

- ReactStrap is a tool that will let you add BootStrap 4 styling to your React web apps.
- [ReactStrap](https://reactstrap.github.io/)
- To use it you need to install it in your project
```
npm i reactstrap
```
- OR
```
yarn add reactstrap
```
- Then you can start to add the ReactStrap components in your Components.
- Include them just like you would include one of your own.

```javascript
import React, {Component} from 'react';
import { Button } from 'reactstrap';

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


## React Render Props


## React Animations

- 


## What to do Before Week 8


