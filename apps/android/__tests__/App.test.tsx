// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

import ReactTestRenderer from 'react-test-renderer';
import { Text } from 'react-native';
import App from '../App';
import text from '../src/text/ar.json';

// Jest has no native side: the library's own mock gives fixed insets.
jest.mock(
  'react-native-safe-area-context',
  () => jest.requireActual<{ default: unknown }>('react-native-safe-area-context/jest/mock').default,
);

test('shows the name and the tagline in Arabic', async () => {
  let tree: ReactTestRenderer.ReactTestRenderer | undefined;
  await ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<App />);
  });
  const shown = tree!.root.findAllByType(Text).map((node): unknown => node.props.children);
  expect(shown).toEqual([text.name, text.tagline]);
});
