# Week 7: ReactStrap and AJAX

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


## React Render Props

- If you have two components that are siblings of each other and want to pass information from one to another `render` props is how we achieve this.
- 
- [React Render Props video](https://www.youtube.com/watch?v=Ow4ms1Qg_u4) 


## React Animations

- To do animations with our React components we can write our own CSS with: `transition`, `transform` and `animation`; OR we can use some of the animations that we can import with React.

```javascript
import {TransitionGroup, CSSTransition} from 'react-transition-group';
```

- Those imports will give us the needed code to add the animations.
- Then we can add them to our elements

```javascript

```

- [React Animations video]() ...pending


## What to do Before Week 8

- Watch all the videos listed on this page
- Start working on the React Project
- Continue your work on the Mocha Chai Hybrid
