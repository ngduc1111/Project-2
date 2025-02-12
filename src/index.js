import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './doan/Clients/pages/Home';
import Details from './doan/Clients/pages/Details';
import Categories from './doan/Clients/pages/Categories';
import Admin from './Admin';
import HomeAdmin from './doan/admin/pages/HomeAdmin';
import Login from './doan/Clients/pages/Login';
import Blog from './doan/Clients/pages/Blog';
import Infor from './doan/Clients/pages/Infor';
import SanPhamThem from './doan/admin/pages/SanPhamThem';
import SanPhamList from './doan/admin/pages/SanPhamList';
import SanPhamSua from './doan/admin/pages/SanPhamSua';
import Register from './doan/Clients/pages/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='details/:id' element={<Details />} />
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/search" element={<Home />} />
          <Route path='categories/:id_loai' element={<Categories />} />
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/infor' element={<Infor></Infor>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Route>
        <Route path='/admin' element={<Admin />}>
           <Route index element={<HomeAdmin/>} />
           <Route path='/admin/themSp' element={<SanPhamThem></SanPhamThem>}/>
           <Route path='/admin/sp' element={<SanPhamList></SanPhamList>}/>
           <Route path="/admin/spsua/:id" element={<SanPhamSua/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
