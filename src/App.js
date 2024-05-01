import Keypad from './components/Keypad';
import Screen from './components/Screen';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Screen />
      <Keypad />
    </div>
  );
}

export default App;
