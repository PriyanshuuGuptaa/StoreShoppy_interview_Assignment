import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="bg-header-bg flex h-screen font-inter">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
