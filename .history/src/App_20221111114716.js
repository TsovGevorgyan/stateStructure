
import './App.css';
import Navigation from './navigation';
import AppRouter from './router';

function App() {
  return (
    <div className="test">
    <AppRouter>
      <Navigation />
    </AppRouter>
  </div>
  );
}

export default App;
