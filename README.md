# insta-downloader
Download instagram post seamlessly.
# initialize new expo project with expo router
1. Create expo app with typescript template
``` shell
    npx create-expo-app inst_downloader -t expo-template-blank-typescript
```
2. Install and setup expo router [visit for more info](https://expo.github.io/router/docs/)
- - Install expo router and related packages
```	shell
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
```
- - Then delete the entry point in your package.json, or replace it with index.js to be explicit:
``` json
	{
	  "main": "index.js"
	}
```
- - Create a new file index.js in the root of your project. If it exists already, replace it with the following
``` ts
import "expo-router/entry";
```
- - Add a deep linking scheme and enable metro web in your app.json (or app.config.js)
``` json
{
  "expo": {
    "scheme": "myapp",

    "web": {
      "bundler": "metro"
    }
  }
}
```
- - If you use npm, this requires npm 8.3.0 or higher. You can install this with npm i -g npm@^8.3.0. After that, configure overrides in package.json
``` json
{
  "overrides": {
    "metro": "0.76.0",
    "metro-resolver": "0.76.0"
  }
}
```
- - Configure the Babel plugin [babel](babel.config.js)
``` js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [require.resolve("expo-router/babel")],
  };
};
```

# also check expo prebuilt