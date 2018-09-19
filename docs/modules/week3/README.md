# Week 3: More ES6 and Intro to React

## Classrep Elections <Badge text="10 mins" />

- Select a Level 3 Class Rep Today
- There will be a single class rep to represent all the level 3 students this year.

## Git and CLI <Badge text="30 mins" />

- Turning a Project into a Repo
- `git init`
- `git add -A`
- `git rm --cached [FILENAME]`
- `git commit -m 'Initial commit'`
- .gitignore files why and how
- Setting the remote address `git remote add origin [URL]`
- `git remote -v`
- Pushing to the remote address `git push origin master`
- `git help`
- OSX `touch .gitignore` and then edit in terminal `nano .gitignore`
- Win 10 `nul > .gitignore` 
- Command line open current folder in brackets `brackets .`
- Command line open current folder in VSCode `code .`
- Command line open file in brackets `brackets main.js`
- Command line open file in VSCode `code main.js`
- See Notes in Week 4 Module for how to add brackets or VS Code to the PATH

## ES6 Features <Badge text="90 mins" />

- Questions from Week 2 topics or videos
- `this` in functions and arrow functions

```javascript
    function Person(nm){
        //called with new so `this` will be returned
        this.name = nm;
    }

    let bob = new Person('Bob');

    let obj = {
        mthd1(){
            console.log(this); // obj
        },
        mthd2: function(){
            console.log(this); // obj
        }
        mthd3: () =>{
            console.log(this); // lexical... window
        }
    }

    obj.mthd1();
    obj.mthd2();
    obj.mthd3();
```

- `__proto__` (objects) vs `prototype` (function objects)
- Iterable vs Enumerable
- JavaScript "Classes"

```javascript
class Dog extends Animal{
    
    constructor(){
        super();
        
    }
    
    bark(){
        
    }
    
    static howl(){
            
    }
} 

let woofy = new Dog();
woofy.bark();
Dog.howl(); 
```

- `import` and `export` in ES6

```javascript
//main.js
import diffKEY from './other.js';
//-------------------
import someFunc from './other.js';
//-------------------
import {funcA, KEY} from './other.js';


//other.js
const KEY = '123456';
export default KEY;
//-------------------

export default function(){
    console.log('something');
}
//-------------------
const KEY = 654321;
function funcA(){
    //will be exported
}
function funcB(){
    //will NOT be exported
    //can only be called from this page
}

export {funcA, KEY};
```

- Iterators and Generators

```javascript
//generator functions
let names = ['archer', 'carol', 'mallory', 'lana'];

function* gen(){
    yield names[0];
    yield names[2];
    yield names[1];
    yield names[3];
}

let iter = gen();
console.log(iter.next() );
console.log(iter.next() );
console.log(iter.next() );
console.log(iter.next() );
console.log(iter.next() );

```

```javascript
//custom iterators
//Objects do NOT have iterators
let obj = {
    propA: 123,
    propB: 'abc',
    propC: true
}

obj[Symbol.iterator] = function(){
    let counter = 0;
    return {
        next: function(){
            counter++;
            switch(counter){
                case 1:
                    return {value: obj.propA, done: false}
                    break;
                case 2:
                    return {value: obj.propC, done: false};
                    break;
                case 3:
                    return {value: obj.propB, done: false};
                    break;
                default:
                    return {value: undefined, done: true};
            }
        }
    }
}

for(let val of obj){
    console.log( prop );
}
```

## Intro to React <Badge text="30 mins" />

- VERSION 16: Watch out for old tutorials.
- Adding React Dev tools to Chrome
- Adding React with script tags
```html
 <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
 ```

- Installing HomeBrew and Yarn
- [HomeBrew](https://brew.sh/)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
- [Yarn Package Manager](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
- create-react-app installation with npm or npx
- Adding React with npm
```
npm i -g create-react-app
create-react-app my-sample-app
```
- Adding React with npx
```
npx create-react-app my-sample-app
```
- Alternate tools for creating React Apps
- [React Docs for other tools](https://reactjs.org/docs/create-a-new-react-app.html)



## What to do Before Week 4 <Badge text="90 mins" />

- [Week 2/3 Youtube Tutorial Playlist](https://www.youtube.com/watch?v=QtGbcvZ6774&list=PLyuRouwmQCjnc5Fr3alMwdMZWdWWH_m6p)
- Same list as last week.
- [Continue first Hybrid Assignment](../../assignments/)
- 