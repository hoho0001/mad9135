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

::: tip
- If you are animating a single element then you can just use `CSSTransition`
- If you have a collection of elements and want to animate the elements one at a time then  wrap them in a `TransitionGroup`
:::

```js
<CSSTransition
    in={true}
    appear={true}
    timeout={600}
    classNames="mykeyword" >
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
- [React Animation video](https://www.youtube.com/watch?v=dwIyD0xaN_0) tutorial by Steve


## Production Builds of React

- The development build for React has the service worker to keep updating the browser with every save. It also makes no attempt to minify anything.
- The production build, which is created from the CLI with:

```
npm run build
```

- or

```
yarn build
```

- [npm build Reference](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)
- [React build Reference](https://facebook.github.io/create-react-app/docs/deployment)
- Running the command `npm run build` will create a build folder, minimize your project and copy the files into this build folder. You can put the contents of this folder on the webserver as your website.

### GitHub Hosting Notes
- If you are hosting on GitHub then `BrowserRouter` will fail. GitHub doesn't support intercepting the routes. You will need to use `HashRouter` instead.
- This means that a path like `https://www.example.com/kids/123` would have to be written like `https://www.example.com/#kids/123` instead.
- [Hashrouter referece](https://reacttraining.com/react-router/web/api/HashRouter)

- To point to a subfolder as the base of your website, you would have to edit the `<BrowserRouter>` element to point to the new root. (Problems with this on gh-pages)

```js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```

- To host on Github pages you will need to:
    - add to your `package.json` file
    
    ```js
    "homepage": "https://username.github.io/repo-name",
    "scripts":{
        "predeploy":"npm run build",
        "deploy":"gh-pages -d build",
        "start":"react-scripts start",
        "build":"react-scripts build"
    }
    ```
    
    - install gh-pages with npm
    
    ```
    yarn add gh-pages
    ```
    
    - The predeploy script will be run automatically when you run `npm run deploy` or `yarn run deploy`
    - Follow the normal steps to set up your Github Repo locally and then push to the server.
    
    ```
    git init
    git add -A
    git commit -m "Add React project files"
    git remote add origin https://github.com/USER-NAME/REPO-NAME.git
    git push -u origin master
    ```
    - Go to your GitHub repo, AFTER pushing to the repo, and set the gh-pages branch as the source for the gh-pages website by adding a `gh-pages` branch.
    - When you run `yarn run deploy` you will see a cheatsheet with further instructions and information.
    - Visit `https://USER-NAME.github.io/REPO-NAME/` to see your React site working.
    
- To fix the routing replace any `<BrowserRouter>` with a `<HashRouter>` and add the basename as above.

```js
<HashRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="#/calendar/today">
```
- [HashRouter reference](https://reacttraining.com/react-router/web/api/HashRouter)
- [Deploying Production Build React App on gh-pages video](https://www.youtube.com/watch?v=517npPWIb8Q)



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
- Recent talk about PWAs by Simon MacDonald (from Ottawa) [Video Link](https://www.youtube.com/watch?v=2kv9tH_IYtQ)
- FREE Udacity course by Jake Archibald on [Creating Offline Apps](https://www.udacity.com/course/offline-web-applications--ud899)



## To Do Before Week 10

::: warning TODO
- Watch the videos on ReactStrap and React Animations and see if you can integrate them into your React Project
- Finish the Work on your React Project
- Watch the Introduction video for PWAs to prepare for Week 10
- Learn about Pair Programming with these videos
- [What is Pair Programming](https://www.youtube.com/watch?v=YhV4TaZaB84)
- [Bitbucket Pair Programming](https://www.youtube.com/watch?v=dYBjVTMUQY0) :D
- [Experienced Programmers demonstrating Pair Programming](https://www.youtube.com/watch?v=zFO1cRr5-qY)
- [Another intro to Pair Programming](https://www.youtube.com/watch?v=ET3Q6zNK3Io)
:::
