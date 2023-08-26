# Preparation

To build or run the application, we must first prepare the project. We do this by running the
following commands:

```sh
cd laguna-frontend
flutter clean
flutter pub get
dart run build_runner build --delete-conflicting-outputs
cd ios //required only for iOS/MacOS
rm -rf Pods/ Podfile.lock //required only for iOS/MacOS
pod install //required only for iOS/MacOS
```

If you want to run backend server locally,
clone [laguna-backend](https://github.com/SloveniaEngineering/laguna-backend) repository and follow
instructions in [Backend guide](../backend/02-setup_and_run.md).

TLDR;
To run backend server, `git checkout dev` branch and execute `scripts/dev.sh` script from laguna-backend repository.