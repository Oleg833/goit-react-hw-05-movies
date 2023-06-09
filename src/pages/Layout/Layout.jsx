import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';
import { NavStyled, NavLinkStyled, Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </NavStyled>

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
