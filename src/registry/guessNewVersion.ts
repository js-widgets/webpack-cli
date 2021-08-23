import gtSemver from 'semver/functions/gt';
import increaseSemver from 'semver/functions/inc';

import { WidgetRegistry } from 'WidgetRegistry';

const guessNewVersion = (registry: WidgetRegistry): string | null =>
  `v${increaseSemver(
    registry.reduce(
      (carry: string, item) =>
        gtSemver(item.version, carry) ? item.version : carry,
      '0.0.0',
    ),
    'minor',
  )}`;

export default guessNewVersion;
