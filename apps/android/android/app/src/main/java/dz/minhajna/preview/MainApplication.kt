// SPDX-FileCopyrightText: Meta Platforms, Inc. and affiliates
// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: MIT

package dz.minhajna.preview

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.modules.i18nmanager.I18nUtil

class MainApplication : Application(), ReactApplication {

  override val reactHost: ReactHost by lazy {
    getDefaultReactHost(
      context = applicationContext,
      packageList = PackageList(this).packages,
    )
  }

  override fun onCreate() {
    super.onCreate()
    // The interface is Arabic, right to left, whatever the phone's language,
    // and before React Native starts, so the first launch is right to left too.
    // The direction will follow the language the teacher chooses (#21).
    I18nUtil.instance.allowRTL(this, true)
    I18nUtil.instance.forceRTL(this, true)
    loadReactNative(this)
  }
}
