import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.56.1' })
    .useReactNative()
    .connect();

  // eslint-disable-next-line no-console
  console.tron = tron;

  tron.clear();
}
