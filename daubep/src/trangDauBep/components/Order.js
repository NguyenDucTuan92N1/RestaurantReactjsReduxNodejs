import React, { useState , Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showMenu,
  showOrder,
  selectShow
} from '.././features/cook/cookSlice';
// function showTrangMenu (e){
//     const dispatch = useDispatch();
//     e.preventDefault();
//     dispatch(showMenu());
// }



export default function  Order () {
    const show = useSelector(selectShow);
    const [count, setCount] = useState('0');
    const dispatch = useDispatch();

    return (
        <main>
        <section className="our-client section-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="section-tittle">
                  <h2>Khu vực bếp - Order</h2>
                  {/* <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <button className="btn full-menu f-right" onClick={() => {dispatch(showMenu());setCount(show)}}>Full Menu</button>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12">
                <div className="nav-button nav-button2 ">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-link active" id="nav-one-tab" data-bs-toggle="tab" href="#nav-one" role="tab" aria-controls="nav-one" aria-selected="true">Tất cả</a>
                      <a className="nav-link" id="nav-two-tab" data-bs-toggle="tab" href="#nav-two" role="tab" aria-controls="nav-two" aria-selected="false">Cơm</a>
                      <a className="nav-link" id="nav-three-tab" data-bs-toggle="tab" href="#nav-three" role="tab" aria-controls="nav-three" aria-selected="false">Canh</a>
                      <a className="nav-link" id="nav-four-tab" data-bs-toggle="tab" href="#nav-four" role="tab" aria-controls="nav-four" aria-selected="false">Hải sản</a>
                      <a className="nav-link" id="nav-five-tab" data-bs-toggle="tab" href="#nav-five" role="tab" aria-controls="nav-five" aria-selected="false">Đồ nướng</a>
                      <a className="nav-link" id="nav-five-tab" data-bs-toggle="tab" href="#nav-five" role="tab" aria-controls="nav-five" aria-selected="false">Đồ uống</a>
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
                    <div className="single-cat single-cat2 text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                        <div className="numbering">$20</div>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="#">Tuna steak</a></h5>
                        {/* <p>Making a reservation at Délicious restaurant is easy and</p> */}
                        {/* <a name="" id="" class="btn btn-primary" href="#" role="button">Sẵn sàng</a> */}
                        {/* <a href="#" class="text-success browse-btn">Sẵn sàng</a>
                    <br>
                    <a href="#" class="browse-btn ">Hoàn tất</a>
                    <br>
                    <a href="#" class="browse-btn ">Hủy món</a>
                    <br>
                    <a name="" id="" class="btn btn-primary" href="#" role="button">aa</a> */}
                        <div className="list-group">
                          <a href="#" className="list-group-item list-group-item-action list-group-item-success text-success">Sẵn sàng</a>
                          <a href="#" className="list-group-item list-group-item-action list-group-item-primary text-primary disabled">Hoàn tất</a>
                          <a href="#" className="list-group-item list-group-item-action list-group-item-danger text-danger ">Hủy</a>
                        </div>
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
                        {/* <p>Making a reservation at Délicious restaurant is easy and</p> */}
                        {/* <a name="" id="" class="btn btn-primary" href="#" role="button">Sẵn sàng</a> */}
                        {/* <a href="#" class="text-success browse-btn">Sẵn sàng</a>
                    <br>
                    <a href="#" class="browse-btn ">Hoàn tất</a>
                    <br>
                    <a href="#" class="browse-btn ">Hủy món</a>
                    <br>
                    <a name="" id="" class="btn btn-primary" href="#" role="button">aa</a> */}
                        <div className="list-group">
                          <a href="#" className="list-group-item list-group-item-action list-group-item-success text-success">Sẵn sàng</a>
                          <a href="#" className="list-group-item list-group-item-action list-group-item-primary text-primary disabled">Hoàn tất</a>
                          <a href="#" className="list-group-item list-group-item-action list-group-item-danger text-danger ">Hủy</a>
                        </div>
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
                        {/* <p>Making a reservation at Délicious restaurant is easy and</p> */}
                        {/* <a name="" id="" class="btn btn-primary" href="#" role="button">Sẵn sàng</a> */}
                        {/* <a href="#" class="text-success browse-btn">Sẵn sàng</a>
                    <br>
                    <a href="#" class="browse-btn ">Hoàn tất</a>
                    <br>
                    <a href="#" class="browse-btn ">Hủy món</a>
                    <br>
                    <a name="" id="" class="btn btn-primary" href="#" role="button">aa</a> */}
                        <div className="list-group">
                          <a href="#" className="list-group-item list-group-item-action list-group-item-success text-success">Sẵn sàng</a>
                          <a href="#" className="list-group-item list-group-item-action list-group-item-primary text-primary disabled">Hoàn tất</a>
                          <a href="#" className="list-group-item list-group-item-action list-group-item-danger text-danger ">Hủy</a>
                        </div>
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
                        {/* <p>Making a reservation at Délicious restaurant is easy and</p> */}
                        {/* <a name="" id="" class="btn btn-primary" href="#" role="button">Sẵn sàng</a> */}
                        {/* <a href="#" class="text-success browse-btn">Sẵn sàng</a>
                    <br>
                    <a href="#" class="browse-btn ">Hoàn tất</a>
                    <br>
                    <a href="#" class="browse-btn ">Hủy món</a>
                    <br>
                    <a name="" id="" class="btn btn-primary" href="#" role="button">aa</a> */}
                        <div className="list-group">
                          <a href="#" className="list-group-item list-group-item-action list-group-item-success text-success">Sẵn sàng</a>
                          <a href="#" className="list-group-item list-group-item-action list-group-item-primary text-primary disabled">Hoàn tất</a>
                          <a href="#" className="list-group-item list-group-item-action list-group-item-danger text-danger ">Hủy</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab">
      
      
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items1.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Sandwich</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items2.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Tuna steak</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items3.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Hamburger</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items1.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Sandwich</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items2.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Tuna steak</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items3.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Hamburger</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
              {/* <div class="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab">
      
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items1.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Sandwich</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items2.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Tuna steak</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items3.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Hamburger</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items1.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Sandwich</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items2.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Tuna steak</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items3.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Hamburger</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
              {/* <div class="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
      
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items1.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Sandwich</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items2.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Tuna steak</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items3.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Hamburger</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items1.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Sandwich</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items2.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Tuna steak</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items3.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Hamburger</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
              {/* <div class="tab-pane fade" id="nav-five" role="tabpanel" aria-labelledby="nav-five-tab">
      
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items1.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Sandwich</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items2.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Tuna steak</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items3.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Hamburger</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items1.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Sandwich</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items2.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Tuna steak</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat single-cat2 text-center mb-40">
                  <div class="cat-img">
                    <img src="assets/img/gallery/pro-items3.jpg" alt="">
                    <div class="numbering">$20</div>
                  </div>
                  <div class="cat-cap">
                    <h5><a href="#">Hamburger</a></h5>
                    <p>Making a reservation at Délicious restaurant is easy and</p>
                    <a href="#" class="browse-btn">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
            
          </div> */}
            </div>
          </div>
        </section>
        {/* <div class="location-house fix">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-xl-12">
            <div class="instagram-active owl-carousel">
              <div class="single-instagram">
                <img src="assets/img/gallery/instra1.jpg" alt="">
              </div>
              <div class="single-instagram">
                <img src="assets/img/gallery/instra2.jpg" alt="">
              </div>
              <div class="single-instagram">
                <img src="assets/img/gallery/instra3.jpg" alt="">
              </div>
              <div class="single-instagram">
                <img src="assets/img/gallery/instra4.jpg" alt="">
              </div>
              <div class="single-instagram">
                <img src="assets/img/gallery/instra2.jpg" alt="">
              </div>
            </div>
      
            <a href="#" class="insta-btn"><i class="ti-instagram"></i>@restauco</a>
          </div>
        </div>
      </div>
          </div> */}
      </main>
      

    )
  }

