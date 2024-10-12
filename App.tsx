import { NativeBaseProvider } from 'native-base';
import Login from './src/screens/Login';
import { THEME } from './src/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Login />
    </NativeBaseProvider>
  )
}

