
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './navigation';
import AppRouter from './router';
import Dashboard from './views/dashboard';
import Home from './views/Home/Home';
import TestPage from './views/testPage';


function App() {
  return (
    <div className="test">
      <AppRouter />
  </div>
  );
}

export default App;
