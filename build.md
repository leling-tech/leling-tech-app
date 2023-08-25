## Public an APK bundle
```bash
# 1. install and login with eas
npm install -g eas-cli

# install expo-dev-client
npx expo install expo-dev-client

# login
eas login

# 2. add a eas.json file
{
  "cli": {
    "version": ">= 3.15.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}

# 3. configure your app.json
"android": {
  "package": "com.leling-tech.mobileapp"
},

# 4. create a build for the device
eas build --profile development --platform android
```