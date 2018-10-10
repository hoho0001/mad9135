# Week 7: ReactStrap and AJAX

## Making AJAX calls from React

- When you want to load data from an external source into our React app, we need to be sure to be working in sync with the React LifeCycle.
- So, either inside the `componentDidMount` or `componentDidUpdate` methods, OR inside a custom method that you have called in response to a user action.
- [React AJAX video]()
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


