# Building and running

## Web App

:::danger
CORS is not yet implemented for production configuration.
:::

### Building
```sh
flutter build web
```

For production:

```sh
flutter build web --release
```

### Running
```sh
flutter run -d chrome
```

Running in production only possible with `--web-browser-flag --disable-web-security`.

```sh
flutter run -d chrome --web-browser-flag --disable-web-security --release
```

## Android App
```sh
flutter build apk --split-per-abi //Build app with all architectures - Mostly used for test builds
flutter build appbundle //Build appbundle - Needed for Play Store
```

## iOS/MacOS App

For iOS or MacOS, open the project in Xcode and build & archive the project from there.
More information can be found [here][ios-build-guide]
More information about building MacOS app can be found [here][macos-build-guide]

An alternative is to run the following command in project home directory

```sh
flutter build ipa
```

or for MacOS

```sh
flutter build macos
```

And then open the project in Xcode and archive the project from there.
-- Or using an app like transporter to upload the ipa to App Store Connect

## Windows App

:::caution
Windows app is not tested yet.
:::

For more information, see [here][windows-build-guide]

```sh
flutter build windows //Build windows app 
```

## Linux App

:::caution
Linux app is not tested yet.
:::

For more information, see [here][linux-build-guide]

```sh
flutter build linux //Build linux app 
```


[android-build-guide]: <https://flutter.dev/docs/deployment/android>

[ios-build-guide]: <https://flutter.dev/docs/deployment/ios>

[macos-build-guide]: <https://docs.flutter.dev/deployment/macos>

[linux-build-guide]: <https://docs.flutter.dev/deployment/linux>

[windows-build-guide]: <https://flutter.dev/docs/deployment/windows>

[web-build-guide]: <https://docs.flutter.dev/deployment/web>
