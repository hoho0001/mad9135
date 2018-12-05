# Week 14: React Native

## Final Project Work

- Most of this week is for working on your final app and getting it installed on a device.

## Linked In

- We have a private LinkedIn Group for graduates of the program
- Everyone who makes it to the MAD9145 Applied Project course will be invited to join this group.
- This is where we post contracts and jobs for graduates.
- It is also a place where you can post jobs or look for partners for ventures of your own.
- You can use it to connect with your classmates or with former Alumni of the program.
- If you do NOT have a Linked In profile yet, please create one today.
- Send a connection request to Steve on Linked In.
- As he accepts the invitations he will invite you to the group.

## React Native Production Builds

- Expo is a great tool for developing and testing your React Native Apps
- Expo CLI lets you quickly and easily create a project and also test things on an iOS simulator or Android Emulator.
- The Expo client app lets you test your app in live devices that are on the same wifi network.
- However, eventually you want to be able to test the app on real devices that are not on the same network.
- That is where the Expo website comes into play.
- Expo [Native Build documentation](https://docs.expo.io/versions/latest/distribution/building-standalone-apps)


### Expo Account

- You will need to go to [Expo.io](https://expo.io/)
- SIGN UP for an account. Use your @algonquinlive.com address for now. You can create another account with your personal email address later, for work that you do after graduation.
- Once you have this account created and are logged in you will be able to visit the builds for your projects.
- We will use the Expo CLI to upload the project.
- The URL for your project will be something like: 

```
https://expo.io/@yourUserName/your-slug/builds
```

- Replace the `@yourUserName` with your own Expo username
- Replace the `/your-slug/` with the `slug name` for your project. 
- You can find the `slug name` inside your `app.json` file with the rest of the settings for your React Native project.
- This page will show a list of the different builds that you have done for your project as well as the status of each build. ie. Pending, In Progress, Complete...
- When you upload your project it will sit in a queue with all the projects that other people have uploaded to the server too.
- The program that does the build is called Turtle.
- You can see the **status** for the server and all the current builds taking place [here](https://expo.io/turtle-status)


### Sharing with clients

- If you want a friend or a client to see your app using the Expo client app as the loader then you can give them this version of the URL.

```
https://expo.io/@yourUserName/slug-name/
```

- If you send someone to that URL they will see the QR code, which can be scanned with the Expo client to install and run your App.
- You **WILL** have to get your client to install the Expo client app.
- In your `app.json` file you can set the `"privacy"` setting to `"unlisted"` or `"public"`. 
- If the project is set to public then people can search for your app.
- If it is unlisted then they need to know the URL.
- There is a link to use the browser to see the code but this requires the purchase of another supporting program - `Appetize`.


### App.json File

- There are lots of options that you can put in your `app.json` file
- [App.json Reference](https://docs.expo.io/versions/latest/workflow/configuration.html)
- Make sure that the sdkVersions match in both the app.json and package.json files. Note that the build process wants the versions to be things like "31.0.0". No patch versions.


### The Actual Build

- To send your project to the server you need to run one of the following commands

```
expo build:ios
expo build:android
```

- See below for details about the config for these commands
- Running the command will upload your files and start the build process, as well as create the QR Code for the Expo Client version.
- The build process can take a while because you are waiting in a queue for other people.
- Once complete you will be able to download the actual `.ipa` or `.apk` file.
- There is a page with a unique URL for each build.
- Every OS has its own build page.
- Eg: `https://expo.io/builds/1ec60f96-09be-4a95-9ab5-13c30029e37a`
- On this page you will be able to see the details and progress of the build and, when complete, download the actual file to install on a device or submit to Google Play or the App Store.
- Here is the [Expo Reference for Standalone Apps](https://docs.expo.io/versions/v31.0.0/distribution/building-standalone-apps)
- That reference talks about all the things we are doing on this page.


### Android Builds

- In your `app.json` file you will see an entry like `"platforms": ["android", "ios"],`
- You can change this to contain only `"android"` or only `"ios"`.
- When doing an Android build you must have this in your `app.json`.

```js
    "android": {
      "package": "ca.edumedia.abcd0001.yourappname"
    }
```

- Change the package to something unique for your company and your app, just like we did for Cordova.
- Once you have everything you need in the `app.json` then we can run the build command for android.

```
expo build:android
```

- You will be prompted for your Expo username and password. 
- These are the ones that you created when you were on the expo.io website.
- You will then be asked if you want to upload an Android keystore or have Expo take care of that for you.
- Select the option to let them take care of it.
- When you are ready for your final build before releasing the project, run this command instead:

```
expo fetch:android:keystore
```

- This will let you download and save the keystore in some place safe.
- You will need this in the future when you want to upload new versions of the app to Google Play.

### Android Installs

- Once you have the `.apk` file downloaded from Expo.io you can install it on a device.
- Make sure that the device has the developer options enabled.
- Connect the Android device to your Macbook via USB.
- Grant permissions for the Macbook to install things on the device.
- You will need to use the `adb` command to install the `.apk`
- Open the Terminal on OSX or Command Prompt on Windows
- Navigate to the folder where you have downloaded the `.apk`.
- Run the following command

```
adb install someuniquenameforyourappfile.apk
```

- If you didn't change `someuniquenameforyourappfile.apk` to the actual file name of your APK, then hang your head in shame.



### iOS Builds

- In your `app.json` file you will see an entry like `"platforms": ["android", "ios"],`
- You can change this to contain only `"android"` or only `"ios"`.

```js
    "ios": {
      "bundleIdentifier": "ca.edumedia.abcd0001.yourappname"
    },
```

- Change the package to something unique for your company and your app, just like we did for Cordova.
- Next we need to create a `.p12` file and set up a bunch of options for iOS.
- Like everything else with Apple development there are ALOT more hoops that you have to jump through to get things working.

- Here is the [Expo Reference for Standalone Apps](https://docs.expo.io/versions/v31.0.0/distribution/building-standalone-apps)
- The link above has more info on creating your `.p12` files.
- Since I have not had time to create a video on how to create the `.p12` file, here is a [video reference](https://www.youtube.com/watch?v=OehjNFXj1fg) that you can use in conjunction with [this written tutorial](https://calvium.com/how-to-make-a-p12-file/)
- Both are slightly out of date so be careful when following along.
- Note that in Keychain Access you will need to Hold down CMD to select BOTH your certificate that you downloaded from the Apple Developer website and your Private key. Then you will right-click to EXPORT.
- Recommend that you create a folder inside your ~/Documents/code/ folder to store your certificates, keys, p12 files, etc. REMEMBER WHERE THIS IS.
- ADD the following to your .bash_profile as Environmental variables
    - EXPO_USERNAME
    - EXPO_PASSWORD
    - EXPO_IOS_DIST_P12_PASSWORD
    - EXPO_IOS_PUSH_P12_PASSWORD
- Make sure that you reopen the Terminal after you add the new Environmental variables.
- Expo CLI will look for those specific variables when doing the build.
- Once you have everything you need in the `app.json` as well as all the PATH variables, AND your .p12 file, then we can run the build command for ios.

```
expo build:ios -team-id V94L67MHG8 --dist-p12-path <path to p12 file> --push-p12-path <path to p12 file> --provisioning-profile-path <path to your .mobileprovisioning file>
```

- Failure to provide all this info could result in an error like this:

```
ERROR: Failed to build standalone app: Please provide all required credentials - Apple Team ID, Distribution Certificate P12 (with password), Push Notification Certificate P12 (with password) and Provisioning Profile
```

- Or an Error about not having permissions... which is what you will get with our iOS Apple University account.
- If you see an error about `bundleIdentifier` being missing, then check to see if you have TWO "ios" settings in your app.json file. Merge them.

- The team-id you will see in the URL when you are logged in to the Apple Developer Website.
- You will be prompted for your Expo username and password. 
- These are the ones that you created when you were on the expo.io website.
- And at the end of this process after logging in with your Apple Id and credentials and answering all their questions you will get something like this:

```
Error: Reason: Unexpected response, raw: {
  "responseId": "b5f64ae1-e7d3-40cb-87ff-1ebef4afa4a7",
  "resultCode": 4100,
  "resultString": "The selected team does not have a program membership that is eligible for this feature.  If you need assistance, please contact Apple Developer Program Support. https://developer.apple.com/support",
  "userString": "The selected team does not have a program membership that is eligible for this feature.  If you need assistance, please contact Apple Developer Program Support. https://developer.apple.com/support",
  "creationTimestamp": "2018-12-05T16:01:21Z",
  "protocolVersion": "QH65B2",
  "userLocale": "en_US",
  "requestUrl": "https://developer.apple.com/services-account/QH65B2/account/ios/certificate/submitCertificateRequest.action",
  "httpCode": 200
}
[11:01:21] Reason: Unexpected response, raw: {
  "responseId": "b5f64ae1-e7d3-40cb-87ff-1ebef4afa4a7",
  "resultCode": 4100,
  "resultString": "The selected team does not have a program membership that is eligible for this feature.  If you need assistance, please contact Apple Developer Program Support. https://developer.apple.com/support",
  "userString": "The selected team does not have a program membership that is eligible for this feature.  If you need assistance, please contact Apple Developer Program Support. https://developer.apple.com/support",
  "creationTimestamp": "2018-12-05T16:01:21Z",
  "protocolVersion": "QH65B2",
  "userLocale": "en_US",
  "requestUrl": "https://developer.apple.com/services-account/QH65B2/account/ios/certificate/submitCertificateRequest.action",
  "httpCode": 200
}

```

- Which all means that you cannot create an .ipa file through our Apple account which is marked for distribution because only the admin person can do that for Algonquin College.



### React Native Eject

- You may have noticed that there is no xcodeproj or android project folder or files inside your React Native project.
- If you want to get to these then go to [this page](https://facebook.github.io/react-native/docs/getting-started)
- And click on the tab called `Building Projects with Native Code`
- This will give you instructions on how to work with the native projects.
- You can install Turtle and the other tools on your own computer and build the project yourself.
- Here is the [Expo Reference for Building Apps on CLI](https://docs.expo.io/versions/v31.0.0/distribution/turtle-cli)
- [Eject Reference]()

### ExpoKit

- There is also a tool called [ExpoKit](https://docs.expo.io/versions/v31.0.0/expokit/index.html)
- This tool allows you to take a React Native project and make it part of an existing native Android Java project or iOS Swift project.


## Redux

- Recommended future independent study on Redux
- **Free** Redux course from Wes Bos [Redux Course](https://learnredux.com/)
- 
