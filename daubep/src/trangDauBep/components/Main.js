import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import DropDownMenu from './DropdownMenu';
import React, { useState , Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  showMenu,
  showOrder,
  selectShow
} from '.././features/cook/cookSlice';

export default function Main() {
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
                  <h2>Khu vực bếp - Menu</h2>
                  {/* <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <button  className="btn full-menu f-right" onClick={() => {dispatch(showOrder())}}>Full Order</button>
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
                        <div className="numbering">20k</div>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="#">Tuna steak</a></h5>
                        <div className="container-fluid">
                          <div className="row">
                            <DropDownMenu></DropDownMenu>
                          </div>

                          <div className="row mt-2">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus">
                                  <span className="fa fa-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" disabled defaultValue={3} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="fa fa-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat single-cat2 text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                        <div className="numbering">20k</div>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="#">Tuna steak</a></h5>
                        <div className="container-fluid">
                          <div className="row">
                            <DropDownMenu></DropDownMenu>
                          </div>

                          <div className="row mt-2">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus">
                                  <span className="fa fa-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" disabled defaultValue={3} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="fa fa-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat single-cat2 text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                        <div className="numbering">20k</div>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="#">Tuna steak</a></h5>
                        <div className="container-fluid">
                          <div className="row">
                            <DropDownMenu></DropDownMenu>
                          </div>

                          <div className="row mt-2">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus">
                                  <span className="fa fa-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" disabled defaultValue={3} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="fa fa-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat single-cat2 text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                        <div className="numbering">20k</div>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="#">Tuna steak</a></h5>
                        <div className="container-fluid">
                          <div className="row">
                            <DropDownMenu></DropDownMenu>
                          </div>

                          <div className="row mt-2">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus">
                                  <span className="fa fa-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" disabled defaultValue={3} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="fa fa-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat single-cat2 text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                        <div className="numbering">20k</div>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="#">Tuna steak</a></h5>
                        <div className="container-fluid">
                          <div className="row">
                            <DropDownMenu></DropDownMenu>
                          </div>

                          <div className="row mt-2">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus">
                                  <span className="fa fa-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" disabled defaultValue={3} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="fa fa-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat single-cat2 text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                        <div className="numbering">20k</div>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="#">Tuna steak</a></h5>
                        <div className="container-fluid">
                          <div className="row">
                            <DropDownMenu></DropDownMenu>
                          </div>

                          <div className="row mt-2">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus">
                                  <span className="fa fa-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" disabled defaultValue={3} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="fa fa-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat single-cat2 text-center mb-40">
                      <div className="cat-img">
                        <img src="assets/img/gallery/pro-items2.jpg" alt="" />
                        <div className="numbering">20k</div>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="#">Tuna steak</a></h5>
                        <div className="container-fluid">
                          <div className="row">
                            <DropDownMenu></DropDownMenu>
                          </div>

                          <div className="row mt-2">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus">
                                  <span className="fa fa-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" disabled defaultValue={3} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="fa fa-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    )
  }

