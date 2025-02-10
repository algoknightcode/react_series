import logo from './logo.svg';
import './App.css';
import "../src/components/navbar/navbar"
import Navbar from '../src/components/navbar/navbar';
import Card from './components/card/card';
import countriesData from './countriesData';
import Countries_list from './components/countries_list';

function App() {
  return (
    <div>
      <Navbar/>
      <Countries_list/>
     
    </div>

  );
}

export default App;
