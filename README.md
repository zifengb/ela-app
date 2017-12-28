# ela-app

Build a Hybrid App with Cordova and Framework7-vue, support to compile to iOS &amp; Android

## Project Start


- install Cordova


```shell
npm i -g cordova
yarn add -g cordova
```

- Platform add

```shell
# you can custom the version with `android@version`
cordova platform add android browser
```

- Run the project with live-load

```shell
# browser platform
npm run dev
# Android platform
npm run device-dev
```

- Build the App

```shell
npm run build
```