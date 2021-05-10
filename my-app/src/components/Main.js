import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="slider-area hero-height2">
                        <div className="slider-active">
                            <div className="single-slider">
                                <div className="slider-cap-wrapper">
                                    <div className="hero-caption hero-caption2">
                                        <h2 data-animation="fadeInUp" data-delay=".2s">Food Menu</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Making a reservation at Délicious restaurant is easy and
              takes just a couple of minutes.</p>
                                    </div>
                                    <div className="hero-img hero-img2 position-relative">
                                        <img src="assets/img/hero/hero1.jpg" alt="" data-animation="fadeInRight" data-transition-duration="5s" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="our-client section-padding">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                    <div className="section-tittle  mb-30">
                                        <h2>Most Popular Dishes</h2>
                                        <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <a href="#" className="btn full-menu f-right">Full Menu</a>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12">
                                    <div className="nav-button nav-button2 mb-40">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a className="nav-link active" id="nav-one-tab" data-bs-toggle="tab" href="#nav-one" role="tab" aria-controls="nav-one" aria-selected="true">Breakfast</a>
                                                <a className="nav-link" id="nav-two-tab" data-bs-toggle="tab" href="#nav-two" role="tab" aria-controls="nav-two" aria-selected="false">Lunches</a>
                                                <a className="nav-link" id="nav-three-tab" data-bs-toggle="tab" href="#nav-three" role="tab" aria-controls="nav-three" aria-selected="false">Dinner</a>
                                                <a className="nav-link" id="nav-four-tab" data-bs-toggle="tab" href="#nav-four" role="tab" aria-controls="nav-four" aria-selected="false">Drinks</a>
                                                <a className="nav-link" id="nav-five-tab" data-bs-toggle="tab" href="#nav-five" role="tab" aria-controls="nav-five" aria-selected="false">Fastfood</a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-five" role="tabpanel" aria-labelledby="nav-five-tab">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items1.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Sandwich</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Tuna steak</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-cat single-cat2 text-center mb-40">
                                                <div className="cat-img">
                                                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                                                    <div className="numbering">$20</div>
                                                </div>
                                                <div className="cat-cap">
                                                    <h5><a href="#">Hamburger</a></h5>
                                                    <p>Making a reservation at Délicious restaurant is easy and</p>
                                                    <a href="#" className="browse-btn">Order Now</a>
                                                </div>
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
                                            <img src="assets/img/gallery/instra1.jpg" alt="" />
                                        </div>
                                        <div className="single-instagram">
                                            <img src="assets/img/gallery/instra2.jpg" alt="" />
                                        </div>
                                        <div className="single-instagram">
                                            <img src="assets/img/gallery/instra3.jpg" alt="" />
                                        </div>
                                        <div className="single-instagram">
                                            <img src="assets/img/gallery/instra4.jpg" alt="" />
                                        </div>
                                        <div className="single-instagram">
                                            <img src="assets/img/gallery/instra2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <a href="#" className="insta-btn"><i className="ti-instagram" />@restauco</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        )
    }
}
