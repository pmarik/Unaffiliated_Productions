import React from 'react'
import { Link } from 'gatsby'
import './footer.styles.scss';
//import logo from '../../img/logo.svg'
import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'
import newschoolers from '../../img/social/newschoolers.svg'
import vimeo from '../../img/social/vimeo.svg'
import youtube from '../../img/social/youtube.svg';
import LogoBlock from '../../img/unaffiliated-block.inline.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer aria-labelledby="footer-navigation" >
        <div className="footer">

          <div className="logo-follow">
            <div className="footer-logo">
              <LogoBlock/>
            </div>

            <div className="social">
                <h3 className="social-title">Follow us</h3>
                <div className="social-list">
                <a title="instagram" href="https://instagram.com">
                      <img
                        src={instagram}
                        alt="Instagram"
                        className="social-icon"
                      />
                    </a>
                    <a title="facebook" href="https://facebook.com">
                      <img
                        src={facebook}
                        alt="Facebook"
                        className="social-icon"
                      />
                    </a>
                    <a title="newschoolers" href="https://twitter.com">
                      <img
                        src={newschoolers}
                        alt="Newschoolers"
                        className="social-icon"
                      />
                    </a>
                    <a title="vimeo" href="https://vimeo.com">
                      <img
                        src={vimeo}
                        alt="Vimeo"
                        className="social-icon"
                      />
                    </a>
                    <a title="youtube" href="https://vimeo.com">
                      <img
                        src={youtube}
                        alt="Youtube"
                        className="social-icon"
                        style={{marginRight: '0'}}
                      />
                    </a>
                </div>  
            </div>       
          </div>
           
           <div className="menu-terms">
              <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link to="/" className="navbar-item">
                          Edits
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/about">
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/products">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact/examples">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Contact
                        </Link>
                      </li>
                      
                    </ul>
                  </section>  

                  <div className="terms">
                    <p>
                    <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Service</Link>
                    <br/>
                    © Unaffiliated Productions 2020
                    </p>
                  </div>
           </div>

                
        </div>
      </footer>
    )
  }
}

export default Footer
