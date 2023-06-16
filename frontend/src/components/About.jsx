import React from 'react'
import logo from '../images/logo.svg'
const About = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet felis vitae massa tincidunt,
                vel convallis elit tempus. Quisque elementum ligula eu purus euismod, nec congue est venenatis.</p>
              <p>Phasellus vitae purus eget dolor ullamcorper gravida. Morbi aliquam, massa ac faucibus sagittis, purus
                metus volutpat magna, in posuere mi mi et turpis.</p>
            </div>
            <div className="col-lg-6">
              <img src={logo} alt="about" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About