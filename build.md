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
# for development
eas build --profile development --platform android

# for preview
eas build --profile preview --platform android

#=================================================================================
# login to aws
ssh -i "key.pem" ec2-user@ec2-54-152-125-86.compute-1.amazonaws.com

# scp a local file to aws ec2
scp -i "key.pem" leling-tech.apk ec2-user@ec2-54-152-125-86.compute-1.amazonaws.com:~/.
```