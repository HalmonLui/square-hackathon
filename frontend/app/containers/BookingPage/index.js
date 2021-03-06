/*
 * BookingPage
 *
 * List all the booking
 */
import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import './BusinessPage.css';
import ServiceItem from './ServiceItem';
import StaffItem from './StaffItem';
import ReviewItem from './ReviewItem';
import SmallCard from './SmallCard';
import BarberImg from './barberbg.png';
import HairSalonImg from './hairsalonbg.png';
import NailSalonImg from './nailsalonbg.png';
import PiercingImg from './piercingbg.png';
import SpaImg from './spabg.png';
import heartIcon from './heart-icon.png';
import star from './star.png';
import lightning from './lightning.png';
import money from './cash.png';

export default class BookingPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {businesses:
  //     {
  //       'trending': [],
  //       'recommendations': [],
  //       'hot': []
  //     }
  //   };
  // }

  // componentDidMount() {
  //   // fetch("http://localhost:5000/businesses")
  //   //   .then(res => res.json())
  //   //   .then(
  //   //     (result) => {
  //   //       this.setState({
  //   //         isLoaded: true,
  //   //         businesses: result
  //   //       });
  //   //     },
  //   //     // Note: it's important to handle errors here
  //   //     // instead of a catch() block so that we don't swallow
  //   //     // exceptions from actual bugs in components.
  //   //     (error) => {
  //   //       this.setState({
  //   //         isLoaded: true,
  //   //         error
  //   //       });
  //   //     }
  //   //   )
  // }

  render(){
    return (
      <div id="businesspage">
        <Helmet>
          <title>Business Page</title>
          <meta
            name="description"
            content="Business Profile"
          />
        </Helmet>
        <Link to="/schedule" id="back-button">
          <div id="business-back-button">&#12296; Back</div>
        </Link>

        <div id="booking-section">
          <h2 id="booking-section-title">Booking Summary</h2>
          <h3 id="book-salon-title"><b>Nicole Salon B</b></h3>
          <p id="book-top-time">Mon, Aug 3, 2020 at 2:45 pm</p>
        </div>

        <div id="booking-section">
          <h2 id="booking-section-title">Staff Preference</h2>
          <div className="business-section-card">
              <div id="business-staff-item-container">
                  <StaffItem
                    imageurl="https://www.saloniris.com/wp-content/uploads/2018/09/hair-stylist.jpg"
                    name="Sally Smith"
                    role="Lead stylist"
                  />
                  <StaffItem
                    imageurl="https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/efkxkwlshpek1sxrv782.jpg"
                    name="Bobby Heck"
                    role="Stylist"
                  />
                  <StaffItem
                    imageurl="https://thekinkteam.com/wp-content/uploads/2017/01/woman-hair-stylist-1.jpg"
                    name="Bobber Hak"
                    role="Stylist"
                  />
                  <StaffItem
                    imageurl="https://ibcces.org/wp-content/uploads/2019/03/blank-profile-picture.jpg"
                    name="No Preference"
                    role=""
                  />
              </div>
          </div>
        </div>

        <div id="booking-section">
          <h2 id="booking-section-title">Summary</h2>
          <div className="business-section-card" id="business-section-service-card">
              <div id="business-service-item-container">
                <ServiceItem
                  service="Men's Haircut"
                  duration="30 mins"
                  price="80"
                />
              </div>
          </div>
        </div>

        <div id="payment-preference-container">
          <h2>Payment Preference</h2>
          <p id="payment-preference-text">This business accepts Square payment! Pay immediately upon booking</p>
          <Link to="/confirmation" id="book-now-link">
            <p id="book-now-button">Book Now</p>
          </Link>
        </div>


        <Footer activepage="discover"/>
      </div>
    );
  }
}
