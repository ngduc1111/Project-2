import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from './doan/admin/component/HeaderAdmin';
import FooterAdmin from './doan/admin/component/FooterAdmin';

function Admin() {
  return (
    <div className="Admin">
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </div>
  );
}

export default Admin;
