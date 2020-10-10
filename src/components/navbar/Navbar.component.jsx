import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import logo from '../../../static/img/logo.svg';
import './Navbar.styles.scss';


const Navbar = () => {

    const { file } = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "../../../static/img/logo.png" }) {
                    childImageSharp {
                        fixed(width: 386, height: 75) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return(
        <header className="main-header">
        <nav>
          <Link to="/">
            {/* <Img fixed={file.childImageSharp.fixed} /> */}
            <img src={logo} className="logo" alt="Unaffiliated Productions" />
          </Link>
  
          <div className="outer-menu">
              <input className="checkbox-toggle" type="checkbox" />
  
              <div className="hamburger">
                <div></div>
              </div>
  
              <div className="menu">
                <div className="wrap-div-nav">
                  <div>
                    <ul className="nav-links">
                      <li>
                        <Link to="/" className="nav-size" activeClassName="active-nav">Home</Link>
                      </li>
                      <li>
                        <Link to="/videos" className="nav-size" activeClassName="active-nav" partiallyActive>Videos</Link>
                      </li>
                      <li>
                        <Link to="/projects" className="nav-size" activeClassName="active-nav">Projects</Link>
                      </li>
                      <li>
                        <Link to="/blog" className="nav-size" activeClassName="active-nav">Blog</Link>
                      </li>
                      <li>
                        <Link to="/about" className="nav-size" activeClassName="active-nav">About</Link>
                      </li>
                      <li>
                        <Link to="/contact" className="nav-size" activeClassName="active-nav">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;