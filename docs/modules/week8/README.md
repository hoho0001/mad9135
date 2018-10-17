# Week 8: React Miscellaneous

## React Animations

- To do animations with our React components we can write our own CSS with: `transition`, `transform` and `animation`; OR we can use some of the animations that we can import with React.

```javascript
import {TransitionGroup, CSSTransition} from 'react-transition-group';
```

- Those imports will give us the needed code to add the animations.
- Then we can add them to our elements

```javascript

```

- [React animation reference](https://reactjs.org/docs/animation.html)
- [React transition group github reference](https://github.com/reactjs/react-transition-group/tree/v1-stable)
- [React Animations video]() ...pending


## React Render Props

- If you have two components that are siblings of each other and want to pass information from one to another `render` props is how we achieve this.
- You need to have a parent component. It will have the prop, typically but not necessarily called `render`. This prop will be a function.
- The function gets called from inside the parent component to render one or more other components.
- The child components can have access to anything you want to pass from the parent to the child components.
- Passing the State of the parent is a typical action.
- [React Render Props video](https://www.youtube.com/watch?v=Ow4ms1Qg_u4) 



## React and Google Maps
- [React + Google Maps Tutorial](https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react)
- 


## React and LocalStorage
- localstorage
- [React LocalStorage video]() ...pending


## What to do Before Week 9

- Watch all the video links on this page
- Read the tutorial links provided on this page
- Start Webpack Hybrid
- Work on React Project
