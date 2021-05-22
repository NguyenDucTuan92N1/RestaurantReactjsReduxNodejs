import React, { Component } from 'react';


class Body extends Component {
    render() {
        return (
            <div>
         <main>
        <div className="slider-area slider-height">
          <div className="slider-active">
            <div className="single-slider">
              <div className="slider-cap-wrapper">
                <div className="hero-caption">
                  <h1 data-animation="fadeInUp" data-delay=".2s">
                    Search food 
                    {/* &amp; Enjoy the true test */}
                  </h1>
                  <p data-animation="fadeInUp" data-delay=".6s">
                    Making a reservation at Délicious restaurant is easy and
                    takes just a couple of minutes.
                  </p>
                  <div className="slider-btns">
                    <a
                      data-animation="fadeInLeft"
                      data-delay="1.0s"
                      href="#"
                      className="btn hero-btn mr-15"
                    >
                      Our Menu
                    </a>
                    <a
                      data-animation="fadeInRight"
                      data-delay="1.0s"
                      className="popup-video video-btn"
                      href="https://www.youtube.com/watch?v=Wxdj970RM7M"
                    >
                      <img src="assets/img/icon/play-button.svg" alt />
                      Watch Video
                    </a>
                  </div>
                </div>
                <div className="hero-img position-relative">
                  <img
                    src="assets/img/hero/h1_hero1.jpg"
                    alt
                    data-animation="fadeInRight"
                    data-transition-duration="5s"
                  />
                  <div
                    className="ratting-point"
                    data-animation="bounceIn"
                    data-delay="1s"
                  >
                    <div className="features-ratting">
                      <img src="assets/img/gallery/user.jpg" alt />
                    </div>
                    <div className="features-caption">
                      <h3>
                        "Délicious restaurant is easy and takes just a couple.
                      </h3>
                      <div className="rating">
                        <ul>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <p>- Robert</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-services section-padding position-relative">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-xl-7 col-lg-8 col-md-11">
                <div className="section-tittle text-center mb-70">
                  <h2>Best way to eat healthy food</h2>
                  <p>
                    Making a reservation at Délicious restaurant is easy and
                    takes just a<br /> couple of minutes.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" col-lg-4 col-md-6 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-icon">
                    <img src="assets/img/icon/services1.svg" alt />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="#">Healthy Meal</a>
                    </h5>
                    <p>
                      Making a reservation at Délicious restaurant is easy and
                      takes just a couple of minutes.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-icon">
                    <img src="assets/img/icon/services2.svg" alt />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="#">Fast Food</a>
                    </h5>
                    <p>
                      Making a reservation at Délicious restaurant is easy and
                      takes just a couple of minutes.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-icon">
                    <img src="assets/img/icon/services3.svg" alt />
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a href="#">Delicious Coffee</a>
                    </h5>
                    <p>
                      Making a reservation at Délicious restaurant is easy and
                      takes just a couple of minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="our-client section-padding section-img-bg2"
          data-background="assets/img/gallery/section-bg1.jpg"
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="section-tittle section-tittle2  mb-30">
                  <h2>Most Popular Dishes</h2>
                  <p>
                    Making a reservation at Délicious restaurant is easy and
                    takes just a couple of minutes.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <a href="#" className="btn full-menu f-right">
                  Full Menu
                </a>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12">
                <div className="nav-button mb-40">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-link active"
                        id="nav-one-tab"
                        data-bs-toggle="tab"
                        href="#nav-one"
                        role="tab"
                        aria-controls="nav-one"
                        aria-selected="true"
                      >
                        Breakfast
                      </a>
                      <a
                        className="nav-link"
                        id="nav-two-tab"
                        data-bs-toggle="tab"
                        href="#nav-two"
                        role="tab"
                        aria-controls="nav-two"
                        aria-selected="false"
                      >
                        Lunches
                      </a>
                      <a
                        className="nav-link"
                        id="nav-three-tab"
                        data-bs-toggle="tab"
                        href="#nav-three"
                        role="tab"
                        aria-controls="nav-three"
                        aria-selected="false"
                      >
                        Dinner
                      </a>
                      <a
                        className="nav-link"
                        id="nav-four-tab"
                        data-bs-toggle="tab"
                        href="#nav-four"
                        role="tab"
                        aria-controls="nav-four"
                        aria-selected="false"
                      >
                        Drinks
                      </a>
                      <a
                        className="nav-link"
                        id="nav-five-tab"
                        data-bs-toggle="tab"
                        href="#nav-five"
                        role="tab"
                        aria-controls="nav-five"
                        aria-selected="false"
                      >
                        Fastfood
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-one"
                role="tabpanel"
                aria-labelledby="nav-one-tab"
              >
                <div className="items-active">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items1.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Sandwich</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Tuna steak</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items3.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-two"
                role="tabpanel"
                aria-labelledby="nav-two-tab"
              >
                <div className="items-active">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items1.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Sandwich</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Tuna steak</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items3.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-three"
                role="tabpanel"
                aria-labelledby="nav-three-tab"
              >
                <div className="items-active">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items1.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Sandwich</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Tuna steak</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items3.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-four"
                role="tabpanel"
                aria-labelledby="nav-four-tab"
              >
                <div className="items-active">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items1.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Sandwich</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Tuna steak</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items3.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-five"
                role="tabpanel"
                aria-labelledby="nav-five-tab"
              >
                <div className="items-active">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items1.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Sandwich</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Tuna steak</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items3.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5>
                          <a href="#">Hamburger</a>
                        </h5>
                        <p>
                          Making a reservation at Délicious restaurant is easy
                          and
                        </p>
                        <a href="#" className="browse-btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="three-area top-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-7 col-lg-7 col-md-10">
                <div className="three-honer">
                  <div className="honer-area">
                    <img src="assets/img/gallery/woner.jpg" alt />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-10">
                <div className="form-wrapper">
                  <div className="form-tittle mb-30">
                    <h2>Book a table</h2>
                    <p>
                      Making a reservation at Délicious restaurant is easy and
                      takes just a couple of minutes.
                    </p>
                  </div>
                  <form id="three-form" action="#" method="POST">
                    <div className="row">
                      <div className="col-lg-12 col-md-6">
                        <div className="form-box mb-15">
                          <input
                            type="text"
                            name="name"
                            placeholder="Number of guest"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-select-box mb-15">
                          <div className="boking-datepicker">
                            <input id="datepicker1" placeholder="Date" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-form">
                          <div className="select-option">
                            <select name="select" id="select1">
                              <option value>Dinner</option>
                              <option value>Brack-fast</option>
                              <option value>Dinner</option>
                              <option value>Dinner</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="form-box mb-15">
                          <input
                            type="text"
                            name="email"
                            placeholder="Phone no."
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-box mb-15">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="submit-info">
                          <button className="submit-btn" type="submit">
                            Sent Request
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="customer-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-7 ">
                <div className="section-tittle  text-center mb-15">
                  <h2>What our customer sayes</h2>
                  <p>
                    Making a reservation at Délicious restaurant is easy and
                    takes just a couple of minutes.
                  </p>
                </div>
              </div>
            </div>
            <div className="customer-active">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-cat text-center mb-30">
                  <div className="cat-img">
                    <img src="assets/img/gallery/customer1.jpg" alt />
                  </div>
                  <div className="cat-cap">
                    <p>
                      "Making a reservation at Délicious restaurant is easy and
                      takes just a couple of minutes midst tree form seas.
                    </p>
                    <div className="rating">
                      <ul>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <p>- Robert</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-cat text-center mb-30">
                  <div className="cat-img">
                    <img src="assets/img/gallery/customer2.jpg" alt />
                  </div>
                  <div className="cat-cap">
                    <p>
                      "Making a reservation at Délicious restaurant is easy and
                      takes just a couple of minutes midst tree form seas.
                    </p>
                    <div className="rating">
                      <ul>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <p>- Robert</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-cat text-center mb-30">
                  <div className="cat-img">
                    <img src="assets/img/gallery/customer3.jpg" alt />
                  </div>
                  <div className="cat-cap">
                    <p>
                      "Making a reservation at Délicious restaurant is easy and
                      takes just a couple of minutes midst tree form seas.
                    </p>
                    <div className="rating">
                      <ul>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <p>- Robert</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-cat text-center mb-30">
                  <div className="cat-img">
                    <img src="assets/img/gallery/customer2.jpg" alt />
                  </div>
                  <div className="cat-cap">
                    <p>
                      "Making a reservation at Délicious restaurant is easy and
                      takes just a couple of minutes midst tree form seas.
                    </p>
                    <div className="rating">
                      <ul>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <p>- Robert</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="location-house fix">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-xl-12">
                <div className="instagram-active owl-carousel">
                  <div className="single-instagram">
                    <img src="assets/img/gallery/instra1.jpg" alt />
                  </div>
                  <div className="single-instagram">
                    <img src="assets/img/gallery/instra2.jpg" alt />
                  </div>
                  <div className="single-instagram">
                    <img src="assets/img/gallery/instra3.jpg" alt />
                  </div>
                  <div className="single-instagram">
                    <img src="assets/img/gallery/instra4.jpg" alt />
                  </div>
                  <div className="single-instagram">
                    <img src="assets/img/gallery/instra2.jpg" alt />
                  </div>
                </div>
                <a href="#" className="insta-btn">
                  <i className="ti-instagram" />
                  @restauco
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

</div>
        );
    }
}



export default Body;