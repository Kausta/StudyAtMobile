package com.studyatmobile;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;

import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.fabric.crashlytics.RNFirebaseCrashlyticsPackage;
import io.invertase.firebase.instanceid.RNFirebaseInstanceIdPackage;
import io.invertase.firebase.crash.RNFirebaseCrashPackage;
import io.invertase.firebase.storage.RNFirebaseStoragePackage; // <-- Add this line

import com.dylanvann.fastimage.FastImageViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.airbnb.android.react.maps.MapsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFirebasePackage(),
            new LottiePackage(),
            new ReactMaterialKitPackage(),
            new RNFirebasePackage(),
            new RNFirebaseAuthPackage(),
            new RNFirebaseAnalyticsPackage(),
            new RNFirebaseFirestorePackage(),
            new RNFirebaseCrashlyticsPackage(),
            new RNFirebaseInstanceIdPackage(),
            new RNFirebaseCrashPackage(),
            new RNFirebaseStoragePackage() // <-- Add this line
            new FastImageViewPackage(),
            new VectorIconsPackage(),
            new MapsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
