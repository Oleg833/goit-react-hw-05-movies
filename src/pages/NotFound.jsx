import Text from 'components/Text/Text.styled';
import { NavLinkStyled } from './Layout/Layout.styled';

const NotFound = () => {
  return (
    <>
      <Text textAlign="center">Oops... nothing found...</Text>
      <NavLinkStyled to="/">Back to home</NavLinkStyled>
    </>
  );
};
export default NotFound;
