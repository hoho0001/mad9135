# Week 9: React and Progressive Web Apps


## React Animations

- To do animations with our React components we can write our own CSS with: `transition`, `transform` and `animation`; OR we can use some of the animations that we can import with React.

```js
//Use this import (version 2.x)
import {TransitionGroup, CSSTransition, Transition} from 'react-transition-group';

//NOT the following (version 1.x)
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
//This second one is from an OLD 1.x version
```

- Those imports will give us the needed code to add the animations.
- `CSSTransition` extends `Transition`. We don't usually need `Transition`
- Then we can add them to our elements.
- If you are animating a single element then you can just use `CSSTransition`

```js
<CSSTransition
    in={true}
    appear={true}
    timeout={600}
    classNames={mykeyword} >
        <ThingToAnimate />
</CSSTransition>
```
- It will take the keyword used in the `classNames` (yes it is plural) attribute and append `-appear`, `-appear-active`, `-enter`, `-enter-active`, `-enter-done`, `-exit`, `-exist-active`, and `-exit-done` to the name specified as the keyword.
- You can create all those CSS classes in your own CSS file to define what those states look like. 
- `CSSTransition` takes care of all the work of adding and removing the class names at the correct times.
- The value of the timeout needs to be the total amount of time for all the transitions, in one of the three stages, to take place.
- By default, `appear` is set to false. This means that you don't get an animation on the first load.
- The `enter` state is while a component is being added to a page. The `exit` is while it is being removed.
- If you want to define the times for all the different stages then you can use an object as the value of the `timeout`.

```js
<CSSTransition 
    in={true}
    timeout={ {
             appear: 500,
             enter: 400,
             exit: 300
            }} >
```

- If you are animating a bunch of elements, example one animating off the page while another animates on, then you need to use TransitionGroup around the CSSTransition.
- We can also add event handlers for each one of the change in states.

```js
<CSSTransition 
    in={true}
    onEnter={ (node, isAppearing) => { }}
    onExit={ (node) => { }} >
```

- There are listeners - onEnter, onEntering, onEntered, onExit, onExiting, onExited.
- The Entering ones all get passed the node being animated plus a boolean to say if it is the `appearing` or `entering` stage.
- When animating multiple elements we need to wrap the `CSSTransition` with a `TransitionGroup`. Then each of the `CSSTransition`s need to have a `key` property so it can be targetted by React and the animation can be applied.
- [React NEW animation reference version 2.x](https://reactcommunity.org/react-transition-group/)
- [React OLD transition group github reference for version 1.x](https://github.com/reactjs/react-transition-group/tree/v1-stable)
- [React Animations video](https://www.youtube.com/watch?v=BZRyIOrWfHU) tutorial by iHateTomatoes.


## Intro to PWA

- What is a PWA?
- [Google Official PWA Training site](https://developers.google.com/web/ilt/pwa/)
- **Progressive Enhancement** means that it works on any browser. The features just improve with the newer browsers.
- **Responsive** works on desktop, tablets and mobile.
- **Service Workers ** mean it works online, offline, or with poor connectivity
- **HTTPS** always used
- **Discoverable** means that search engines recognize it as an application due to W3C manifest and service worker registration.
- Support for **push notifications** means better user engagement.
- **Installable** on the home screen of mobile devices
- **Shareable** via URL instead of through app stores.
- Great introduction to PWAs by Jake Archibald from Google [Video Link](https://www.youtube.com/watch?v=cmGr0RszHc8)

## To Do Before Week 10

- Watch the videos on ReactStrap and React Animations and see if you can integrate them into your React Project
- Finish the Work on your React Project
- Watch the Introduction video for PWAs to prepare for Week 10
