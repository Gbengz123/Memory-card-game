import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  return (
    <div className="w-screen min-h-screen px-6 min-w-sm flex flex-col sm:px-10">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
