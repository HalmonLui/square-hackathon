import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './barber_logo.png';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/discover">
          <FormattedMessage {...messages.discover} />
        </HeaderLink>
        <HeaderLink to="/bookings">
          <FormattedMessage {...messages.bookings} />
        </HeaderLink>
        <HeaderLink to="/loyalty">
          <FormattedMessage {...messages.loyalty} />
        </HeaderLink>
        <HeaderLink to="/settings">
          <FormattedMessage {...messages.settings} />
        </HeaderLink>
        <HeaderLink to="/">
          <FormattedMessage {...messages.signout} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
