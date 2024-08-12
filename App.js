import { AppContext } from './Context';
import StackNavigator from './StackNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <AppContext>
        <StatusBar style="light" backgroundColor='#000' />
        <StackNavigator />
    </AppContext>
    </>
  );
}
