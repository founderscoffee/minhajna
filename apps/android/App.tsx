// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import text from './src/text/ar.json';

// One screen in Arabic, right to left: enough to prove the build (#18). The
// interface language and its catalogue come with #21, and the design's
// tokens, fonts and components with #20.
export default function App() {
  return (
    // The insets known when the app starts, so the first frame is drawn at once.
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle="light-content" />
      <Welcome />
    </SafeAreaProvider>
  );
}

function Welcome() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.screen,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={styles.name} accessibilityRole="header">
        {text.name}
      </Text>
      <Text style={styles.tagline}>{text.tagline}</Text>
    </View>
  );
}

// The logo's board and chalk colours (docs/design/system).
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2E29',
  },
  name: { color: '#F6F3EA', fontSize: 40, fontWeight: '700' },
  tagline: { color: '#F6F3EA', fontSize: 18, marginTop: 12 },
});
