// import { LogoIcon } from './LogoIcon';
// import useWindowWidth from '../../../hooks/useWindowWidth';
import logoImg from '../../../assets/images/logo/logo.svg';

const { NavLink } = require('react-router-dom');

const Logo = () => {
  // const windowWidth = useWindowWidth();

  // const isMobile = windowWidth < 768;

  return (
    <NavLink to="/">
      {/* <LogoIcon></LogoIcon> */}
      <img src={logoImg} alt="logo" />
      {/* {isMobile ? (
        <img
          srcSet={`${logoSmall} 1x, ${logoSmall2x} 2x`}
          src={logoSmall}
          alt="LOGO"
          type="image/png"
        ></img>
      ) : (
        <img
          srcSet={`${logoBig}, ${logoBig2x} 2x`}
          src={logoBig}
          alt="LOGO"
          type="image/png"
        ></img>
      )} */}
    </NavLink>
  );
};
export default Logo;
