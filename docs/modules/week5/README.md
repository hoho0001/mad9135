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

## PropTypes

- `static propTypes = { }`
- `static defaultProps = { }`
- `yarn add prop-types`
- [React PropTypes video](#)

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

## What to do Before Week 6

- [YouTube Week 5 Playlist](https://www.youtube.com/playlist?list=PLyuRouwmQCjkUjgXkd-GHwsZdqtJYsahS)
- 
