# Week 10: Progressive Web Apps

## Service Workers

- Service workers are external scripts that can be registered to run on another thread (in the background) and that can communicate with your webpage through event listeners.
- The most common use of service workers is to be enabled through a `manifest.json` file and to cache files so a web app can run off-line or during times of poor connection.

### How to register a Service Worker

```js
if ('serviceWorker' in navigator) {
  // Use the window load event as a trigger to register your Service Worker
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}
```

- This script assumes that you called your file `sw.js` and that it is in the same folder.

### Create a manifest.json File

- In your HTML file, create a link that connects to the manifest file.
- Including this link can automatically prompt a user to add the website to their homescreen.

```html
<link rel="manifest" href="./manifest.json" />
```

- Sometimes we don't want to ask the user to install the website immediately on first load*.
- * Means we never want to do this.
- Here is a script that will intercept that event and store it so we can call the prompt later on.

```js
let installPromptEvent;
window.addEventListener('beforeinstallprompt', (ev) => {
    ev.preventDefault( ); //don't force the user to think `why would I ever do that?`
    installPromptEvent = ev;  //save it for later
})

const callInstallPrompt = (ev) => {
    //call this on a button click or after a delay from your web app
    if( installPromptEvent !=== undefined ){
        installPromptEvent.prompt();
    }
}
```

- In the mainfest.json file (similar to a package.json) we would have most of the following.
- This is a sample version of a manifest.json file

```js
{
    "short_name": "My App",
    "name": "Longer version of App Name",
    "icons": [
        {
            "src":"icon-48.png",
            "type": "image/png",
            "size": "48x48"
        },
        {
            "src":"icon-96.png",
            "type": "image/png",
            "size": "96x96"
        },
        {
            "src":"icon-192.png",
            "type": "image/png",
            "size": "192x192"
        },
        {
            "src":"icon-512.png",
            "type": "image/png",
            "size": "512x512"
        }
    ],
    "start_url": "index.html?launcher=true",
    "display": "standalone",
    "background_color": "#E4E4E4",
    "theme_color": "#BADA55",
    "description": "This is the description of my PWA"
}
```

- For `display` we can use `standalone`: URL bar disappears, `fullscreen`: URL bar and status bar disappear, `minimal-ui`: minor changes, `browser`: looks like every other webpage... so, why?
- `standalone` is the recommended choice for PWAs.
- If you want to have Javascript that does something if the app loads like an web app instead of a web page then you can use this:

```js
if( window.matchMedia("(display-mode: standalone)").matches ){
    //we loaded the page as a PWA, not a normal boring webpage
}else{
    //boring webpage
}
```


### Sample Service Worker Scripts

- Once you have your `<link>`, your `manifest.json` file, and you have registered your Service Worker script then it is time to add something to that file. 
- Every thing that you want to cache needs to be grouped together in a CacheStorage object, which needs a name and an array of filenames.
- Do this at the top of the `sw.js` file.

```js
const CACHE_VERSION = 'v1.7';
const CACHE_LIST = [
    'favicon.ico',
    'index.html',
    'main.js',
    'img/200.jpeg',
    'img/404.jpeg'
];
```

- Think of these as a pair that stays together.
- Then the Service Worker has various event listeners that run at different times.
- There is an install phase that happens when your main script registers the service worker file.
- This will trigger the `install` event.
- The second phase is the `activate` phase where the Service Worker starts to run and do its work.
- The third phase happens each time the browser tries to load a file. There is a `fetch` event that happens for every file. 
- The Service Worker will be intercepting these fetch calls and deciding where to get the file from the cache, or the network, or both.
- Here is a sample script showing a script running at each event.

**INSTALL PHASE**

```js
self.addEventListener('install', (ev)=>{
    //step one... initial install
    
    //get all the cacheStorage objects
    //try to open a specific version
    console.log('installing the cache');
    ev.waitUntil( 
        caches.open(CACHE_VERSION)
        .then( (cache)=>{
            //install all the files in that cache
            return cache.addAll(CACHE_LIST);
        })            
    )
});
```

**ACTIVATE PHASE**

```js
self.addEventListener('activate', (ev)=>{
    //step two... activate the service worker
    //make a list of which cache versions are ok
    //it is a list because you could have different caches for different file types, etc.
    const cacheWhiteList = ['v1.7']; 
    console.log('activating the cache');
    
    //get the list of all the cacheStorage keys
    ev.waitUntil(
        caches.keys().then( (keys) => {
            //run this function once you have a list of current cache version keys
            return Promise.all(keys.map( (key) => {
                //test all the keys in the array
                if(cacheWhiteList.indexOf(key) === -1){
                    //remove caches if they are not in the whitelist
                    console.log('remove cache', key)
                    return caches.delete(key);
                }else{
                    console.log('got cache', key);
                }
            }))
        })
    )
});
```

**FETCH PHASE**

```js
self.addEventListener('fetch', (ev)=>{
    //step three... handle all the requests from the browser
    console.log('handling fetch from browser for', ev.request.url);
    
    ev.respondWith(
        caches.match(ev.request)
        .then( (response)=>{
            if(response){
                console.log('Found', response, 'in cache');
                return response; //back to the browser from the cache
            }
            console.dir(ev.request);
            console.error('No response match found in cache. Go to the network for', ev.request.url);
            var fetchRequest = ev.request.clone();
            
            //go to the network
            return fetch(ev.request)
                    .then((resp)=>{
                        //if you want to save all fetched files to the cache
                        let responseStreamToCache = resp.clone();
                        caches.open(CACHE_VERSION)
                          .then(function(cache) {
                            //cache the response for the next visit
                            //cache.put(ev.request, responseStreamToCache);
                          });
                        //return what came back from the network
                        if(!resp || resp.status !== 200 || resp.type !== 'basic') {
                            return resp;
                        }else{
                            //failed to get from the network
                            if(ev.request.destination === 'image'){
                                //send back a cached image for non-cached images
                                return fetch('img/404.jpeg');
                            }
                        }
                    })
        })
        .catch(function() {
          // If both fail, show a generic fallback:
          return caches.match('/offline.html');
          // However, in reality you'd have many different
          // fallbacks, depending on URL & headers.
          // Eg, a fallback silhouette image for avatars.
        })
    )
});
```

- You can see that even this simple example has a LOT of boilerplate code to handle a few files and requests.
- There are also other events that can happen in the third phase after the service worker has been activated.
- These events are `sync`, `push`, `message`, and `statechange`.

::: danger iOS Warning
Apple has done a terrible job of staying up to date with PWA technology.

iOS 11 and iOS 12 both lack support for many of the features of PWAs.

iOS 11.3 still looks for a series of meta tags to let users add webpages to their home screen.

iOS 12.1 still fails to let PWAs access file inputs, the camera, or getUserMedia, no support for push notifications or background sync, plus it will remove any Service Workers and cached files after a couple weeks.
:::


### WorkBox Library

- Google has created a library that reduces the amount of boilerplate code you will need to create a Service Worker that handles the caching of files.
- [WorkBox](https://developers.google.com/web/tools/workbox/)
- [WorkBox Guide](https://developers.google.com/web/tools/workbox/guides/get-started)
- Your next assignment will be to research and use WorkBox to create a SIMPLE PWA.
- Don't worry, it will be tested on an Android device.


## What to do before Week 11

::: warning TODO
- Select your Pairs Programming partner (Someone you do not usually work with) and tell your professor who it is.
- Start to work on your Progressive Web App
:::
