import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import Airpods from './components/Airpods';
import Watch from './components/Watch';
import Ipad from './components/Ipad';
import Mac from './components/Mac';
import Iphone from './components/Iphone';
import Storedata from './components/Storedata';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/store" element={<Store/>}></Route>
        <Route path="/store/*" element={<Store/>}>
          <Route path=":id" element={<Storedata/>}></Route>
        </Route>
        <Route path="/mac" element={<Mac/>}></Route>
        <Route path="/ipad" element={<Ipad/>}></Route>
        <Route path="/iphone" element={<Iphone/>}></Route>
        <Route path="/watch" element={<Watch/>}></Route>
        <Route path="/airpods" element={<Airpods/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
