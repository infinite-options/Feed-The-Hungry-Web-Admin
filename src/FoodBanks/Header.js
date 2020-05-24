import React from 'react';
 // import bulma stylesheet
// import 'bulma/css/bulma.css';

// import './styles.css';
// import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart }  from "@fortawesome/free-solid-svg-icons";

const avatar = 'https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg';
const Header = () => {
  return (
    <header>
      <nav class="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            Feed The Hungry
          </a>
          {/* navbar-burger: toggles the navbar menu on touch devices */}
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="mainNavbar" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item no-left-padding">
              <div class="field is-grouped">
                <p class="control is-expanded no-bottom-margin">
                  <input class="input" type="text" placeholder="Find a food bank"></input>
                </p>
                <p class="control no-bottom-margin">
                  <a class="button is-info">
                    Search
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item ">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
              <div class="navbar-dropdown is-right">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider"></hr>
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;