import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './doan/Clients/component/Menu';
import Footer from './doan/Clients/component/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
