import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
import OtherLayout from '../layouts/other';
import Page404 from '../pages/404';
import Blog from '../pages/blog';
import DashboardPage from '../pages/dashboardPage';
import Login from '../pages/login';
import Products from '../pages/products';
import User from '../pages/user';

//pages

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="dashboardPage" element={<DashboardPage />} />
        <Route path="user" element={<User />} />
        <Route path="products" element={<Products />} />
        <Route path="blog" element={<Blog />} />
      </Route>

      <Route element={<OtherLayout />}>
        <Route path="404" element={<Page404 />} />
      </Route>

      <Route
        path="/"
        element={<Navigate to="dashboard/dashboardPage" />}
        index={true}
      />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
