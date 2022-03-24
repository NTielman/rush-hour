import './App.css';
import Grid from './components/Grid';
import GameOverModal from './components/GameOverModal';

function App() {
  return (
    <div className="App">
      <h1 className="game-title">Rush Hour</h1>
      <Grid />
      <GameOverModal />
    </div>
  );
}

export default App;
