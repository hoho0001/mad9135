# Week 8: React Miscellaneous


## React Passing Functions to Components

- Sometimes you will have `state` values stored in a parent Component that you want to change when a user interacts with a child Component.
The function to change the `state` must be in the same Component as the `state` values to be changed.
- We can use `props` to pass the function down to the child Component.
- Then a function in the child component can trigger the function which was passed through `props`.
- [Passing Functions video](https://www.youtube.com/watch?v=c05OL7XbwXU)


## React Render Props

- If you have two components that are siblings of each other and want to pass information from one to another `render` props is how we achieve this.
- You need to have a parent component. It will have the prop, typically but not necessarily called `render`. This prop will be a function.
- The function gets called from inside the parent component to render one or more other components.
- The child components can have access to anything you want to pass from the parent to the child components.
- Passing the State of the parent is a typical action.
- [React Render Props video](https://www.youtube.com/watch?v=Ow4ms1Qg_u4) 



## React and Google Maps

- Extra material learning about how to integrate Google Maps API with React.
- [React + Google Maps Tutorial](https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react)


## React and LocalStorage

- localStorage works in much the same way as making AJAX calls.
- We wait for the `componentDidMount` event to check localstorage and then decide if we want to update `state` or make an AJAX call.
- We need to check and see if the localStorage key exists and if it does then we can update a value inside our our local `state`.

```javascript
class Item extends Component
    constructor(){
        super();
        this.state = {
            thing: 'some value'
        }
    }

    componentDidMount(){
        let thingLS = localStorage.getItem('MyKEY');
        if(thingLS){
            thingVal = JSON.parse(thingLS);
            this.setState({thing: thingVal});
        }
    }   
}
```

- [React LocalStorage video](https://www.youtube.com/watch?v=NGobLfCPxa8) 


## What to do Before Week 9

::: warning TODO
- Watch all the video links on this page
- Read the tutorial links provided on this page
- Start Webpack Hybrid
- Work on React Project
:::
