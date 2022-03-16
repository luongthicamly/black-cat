import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Detail from './components/Detail';
import List from './components/List';
import Header from './components/Header';
import { useState } from 'react';
import Search from './components/Search';

function App() {
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearch = () => {
    setActiveSearch(!activeSearch);
  }
  console.log(activeSearch)
  return (
    <div className="App">
      <BrowserRouter>
        <div className={`main ${activeSearch == true ? 'active' :''}`}>
        <Header OnHandleSearch={handleSearch}/>
        <Search/>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/list' element={<List/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
