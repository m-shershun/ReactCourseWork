import { Outlet, useNavigate } from 'react-router';
import { Category, RouterPaths } from '@/core/types';
import { useState } from 'react';
import { useReduxSelect } from "@/redux/hooks.ts";
import { selectCategories } from "@/redux/slices/categories";

const DefaultLayout = () => {
  const navigate = useNavigate();
  const priceList: Category[] = useReduxSelect(selectCategories);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" onClick={ () => navigate(`${ RouterPaths.ROOT }`) } id="logoLink">
              <img style={ { height: 50, width: 200 } } src="/images/logo.png" alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" onClick={() => setIsMenuActive(!isMenuActive)}>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Catalog
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    { priceList.map((category) => (
                      <a key={ category.id }
                         className="dropdown-item"
                         onClick={ () => navigate(`${ RouterPaths.ROOT }#${ category.id }`) }>
                        { category.name }
                      </a>
                    )) }
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link"
                     onClick={ () => navigate(`${ RouterPaths.ABOUT }`) }
                     id="aboutLink">
                    About us
                  </a>
                </li>
              </ul>
              <div className="menu-right">
                <div className="menu-contact">
                  <div className="first-number">
                    <a href="tel:+381111111111">
                      <img style={ { height: 20, width: 20 } } src="/images/phone.png" alt="phone"/>
                      <span>+38 (111) 111-11-11</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="mobile-menu" style = {{display: isMenuActive ? 'block' : 'none'}}>
          <nav className="nav" id="nav" onClick={() => setIsMenuActive(false)}>
            <a className="nav__link" onClick={ () => navigate(`${ RouterPaths.ROOT }`) }>Catalog</a>
            { priceList.map((category) => (
                <a key={ category.id }
                   className="nav__link nav__link--small"
                   onClick={ () => navigate(`${ RouterPaths.ROOT }#${ category.id }`) }>
                  { category.name }
                </a>
            )) }
            <a className="nav__link" onClick={ () => navigate(`${ RouterPaths.ABOUT }`) }>About us</a>
          </nav>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-left">
              <div className="phones">
                <div className="phone-item">
                  <span>Phone number</span>
                  <a href="tel:+381111111111">+38 (111) 111-11-11</a>
                </div>
                <div className="phone-item">
                  <span>Telegram</span>
                  <a href="tel:+381111111111">+38 (111) 111-11-11</a>
                </div>
              </div>
              <div className="work-email">
                <a href="mailto:someemail@gmail.co">Email: someemail@gmail.com</a>
              </div>
            </div>
            <div className="footer-right">
              <div className="work-time">
                24/7
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <span>&copy; ReactCourseWork</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;