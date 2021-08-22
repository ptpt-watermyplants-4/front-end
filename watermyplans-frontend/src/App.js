import './App.css';
import Register from './components/register';
import Navbar from './components/navbar';
import WaterMyPlantsPage from './components/WaterMyPlantsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
      
      <div>
        <WaterMyPlantsPage />  
      </div>
          
    </div>
  );
}

export default App;
