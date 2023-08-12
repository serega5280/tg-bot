import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [tg])

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
     lol
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
