import React from 'react';
import { TreatProvider } from 'react-treat';

import { themeDefault } from '../../theme/themes.treat';

const treatTheme = themeDefault;

export class Provider extends React.Component {
  render() {
    const { children } = this.props;

    return <TreatProvider theme={treatTheme}>{children}</TreatProvider>;
  }
}
