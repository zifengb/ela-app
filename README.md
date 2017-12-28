# ela-app

Build a Hybrid App with Cordova and Framework7-vue, support to compile to iOS &amp; Android

## Project prepare


![ANDROID_HOME](https://github.com/zifengb/ela-app/blob/master/snapshots/20-25-55.jpg)

![PATH](https://github.com/zifengb/ela-app/blob/master/snapshots/20-26-44.jpg)


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

## Build the App

- Configure you keystore file

![keystore](https://github.com/zifengb/ela-app/blob/master/snapshots/20-32-58.jpg)

**create a release-signing.properties file under the dir `platforms/android/`**

```properties
    storeFile=C:/Users/zifengb/android_keygen.jks（keystore密钥文件保存路径）
    keyAlias=key0（keystore密钥别名，不知道就没办法了……Android Studio构建的密钥的话，可以打开找到！）
    storeType=jks（keystore密钥类型，一般用Android Studio构建密钥可以选定）
    keyPassword=123456（建密钥时候的密码）
    storePassword=123456（存储密钥时的密码）
```


```shell
npm run build
```
