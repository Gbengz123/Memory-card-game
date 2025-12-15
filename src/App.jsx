import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  return (
    <div className="flex min-h-screen w-screen min-w-sm flex-col px-6 sm:px-10">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
