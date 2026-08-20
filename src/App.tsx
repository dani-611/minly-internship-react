import './App.css';
import { MoviesScreen } from './screens/MoviesScreen';
import { WatchlistProvider } from './context/WatchlistContext';

function App() {
  return (
    <WatchlistProvider>
      <MoviesScreen />
    </WatchlistProvider>
  );
}

export default App;
