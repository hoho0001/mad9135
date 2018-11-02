# Week 5: React Components and Props

## Creating Components for your Website

- `React.Component`
- [React components video](https://www.youtube.com/watch?v=W08trP5ZkmY)
- [React components from Arrays video](https://www.youtube.com/watch?v=Nzy5Qv-XQQQ)

```javascript
render() {
    let names = ['Han', 'Luke', 'Leia'];
    return (
        <div>
            {names.map( (name, index)=>{
               <p key={index}>{name}</p>
            })}
        </div>
    )
}
```

::: tip
Everything in your React website is a Component.

To be effective at using React you need to think about your page in terms of Components.
:::


## Passing Data between Components

- `this.props`
- [React props video](https://www.youtube.com/watch?v=-yRDaVFsvvQ)
- Passing data from one Component to another
- The data is not intended to be changed in the receiving component.

```javascript
render() {
    return (
        <div>
            <SomeThing info="A static bit of data" other={'a' + ' javascript ' + 'expression'} />
        </div>
    );
}
```

```javascript
class SomeThing extends React.Component {
    render() {
        return (
        <p>
            <span>{this.props.info}</span>
            <span>{this.props.other}</span>
        </p>
        );
    }
}
```

::: tip
Props are how we pass everything from one Component to another.

Props can be Strings, Numbers, Booleans, Arrays, Objects, or even functions.
:::


## Stateless Functional Components

- When all you need is a render method in your Component Class
- Make it a function instead.
- We can still use props in the component
- Can't use `state` though.
- [Stateless Functional Components video](https://www.youtube.com/watch?v=o6i48RUmCvo)

```javascript
function MyComponent(props) {
    return (
        <p>{props.someProperty}</p>
    );
}
```

::: tip
Stateless Functional Components are an alternative to classes when creating Components.

The functions cannot use state or any of the LifeCycle methods.
:::


## PropTypes

- A way to test your code during development by making sure that your props are of the correct type and are not missing.
- To use PropTypes you need to first add the prop-types module to your project
```
yarn add prop-types
//OR
npm i prop-types
```
- then you can use it in your page.
- At the bottom of the page, below your Component code:

```javascript
MyComponent.propTypes = { 
    name: PropType.string,
    age: PropType.number.isRequired
}

MyComponent.defaultProps = { 
    name: 'default value for this.props.name'
}
```

- [React PropTypes video](https://www.youtube.com/watch?v=rMDzV07ylTg)


## React Event Handling

- React has a collection of "Synthetic Events" which are wrappers around the JavaScript native browser events.
- [React Event video](https://www.youtube.com/watch?v=kdxB1JfTaZ4)

```javascript
class Thing extends Component{
    
    someMethod = (ev) => {
        //using an arrow function will bind the method to this.
        ev.preventDefault();
        //we can access state or props from here
        //we can update state from here
    }

    render(){
        return (
            <div>
                <button onClick={this.someMethod}>Click Me</button>
            </div>
        )
    }
}
```
::: tip
React has many Synthetic Events that you can use in your components.

[Synthetic Event Reference](https://reactjs.org/docs/events.html)
:::


## React State

- React Props are for passing data from one Component to another.
- React State is intended to belong to a Component.
- State has an initial value and then can be updated
- State values can be displayed inside your Component `render()` method.
- When state is updated the Component will be re-rendered.
- initial state values should be set in the constructor
- [React State video](https://www.youtube.com/watch?v=V8nfBvDiEA4)

```javascript
class Thing extends Component{
    constructor(props){
        super(props);
        //initial values for state can come from props
        this.state = {
            name: props.name
        }
    }
    
    someMethod(){
        let someValue = Date.now().toString();
        setState({
            name: someValue
        })
    }
    
    render(){
        //do NOT set State here
    }
}
```


## React LifeCycle

- When creating a Component there are LifeCycle events that you can hook into
- On the inital load they are `constructor()` `componentWillMount()` `render()` and `componentDidMount()`
- When a component is re-rendering you get `shouldComponentUpdate()`, `componentWillUpdate()`, `render()`, and `componentDidUpdate()`
- `this` is available inside all these methods WITHOUT having to bind anything.
- [React LifeCycle Video](https://www.youtube.com/watch?v=JYQdJWB8u5I)

```javascript
class Thing extends Component{
    constructor(props){
        super(props);
        //set initial state values here
    }
    componentWillMount(){ }
                              
    componentDidMount(){ 
        //call fetch() here
    }
                              
    shouldComponentUpdate(){ 
        return true; //or false to continue with the re-render
    }
                              
    componentWillUpdate(){ }
                              
    componentDidUpdate(){ 
        //call fetch here
    }
                              
    render(){
        //do NOT update state here
        return (
            <div>
            {/* JSX goes here */}
            </div>
        )
    }
}
```



## What to do Before Week 6

::: warning TODO
- [YouTube Week 5 Playlist](https://www.youtube.com/playlist?list=PLyuRouwmQCjkUjgXkd-GHwsZdqtJYsahS)
- Start Assignment 1
:::