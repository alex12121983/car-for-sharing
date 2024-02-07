import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
