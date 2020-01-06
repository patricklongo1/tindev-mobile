import React from 'react';
import { YellowBox } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket', 'Failed prop type']);

export default function App() {
  return <Routes />;
}
