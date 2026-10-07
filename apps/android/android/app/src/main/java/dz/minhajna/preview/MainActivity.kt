// SPDX-FileCopyrightText: Meta Platforms, Inc. and affiliates
// SPDX-License-Identifier: MIT

package dz.minhajna.preview

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /** The main component registered from JavaScript, in index.js. */
  override fun getMainComponentName(): String = "Minhajna"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
