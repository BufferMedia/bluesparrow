import React from "react";
import axios from '../axios'
import { withRouter } from "react-router-dom";

class CouponMap extends React.Component {
  constructor(props) {
    super(props);
  

  this.state={
    create_date: '',
    portal_id: '',
    map_type: '', 
    }
}
  

handleSubmit = e => {
  e.preventDefault();
  const { create_date, portal_id, map_type } = { ...this.state };

  axios.post(`coupon/store`, { create_date, portal_id, map_type })
      .then(res => {

      alert("Coupon Mapped successfully!");
      this.props.history.push("/coupon_list");
    })
    .catch(err => {
    alert("Coupon Mapping failed!");
    console.error(err);
    })
  }



  render() {
    return (
      <div>
        <div className="m-grid m-grid--hor m-grid--root m-page">
          {/*<!-- BEGIN: Header -->*/}
          {this.props.header}
          {/*<!-- END: Header -->

            <!-- begin::Body -->*/}
          <div
            className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body"
            style={{ paddingBottom: "10em" }}
          >
            {/*<!-- BEGIN: Left Aside -->
                
                <jsp:include page="common/sidebar.html"/>
                <!-- END: Left Aside -->*/}
            {this.props.sidebar}
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
              {/*<!-- BEGIN: Subheader -->*/}
              <div className="m-subheader ">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <h3 className="m-subheader__title m-subheader__title--separator">
                      Billing
                    </h3>
                    <ul className="m-subheader__breadcrumbs m-nav m-nav--inline">
                      <li className="m-nav__item m-nav__item--home">
                        <a href="#" className="m-nav__link m-nav__link--icon">
                          <i className="m-nav__link-icon la la-home"></i>
                        </a>
                      </li>
                      <li className="m-nav__separator">-</li>
                      <li className="m-nav__item">
                        <a href="" className="m-nav__link">
                          <span className="m-nav__link-text">Map Coupon</span>
                        </a>
                      </li>
                      <li className="m-nav__separator">-</li>
                    </ul>
                  </div>
                  <div>
                    <span
                      className="m-subheader__daterange"
                      id="m_dashboard_daterangepicker"
                    >
                      <span className="m-subheader__daterange-label">
                        <span className="m-subheader__daterange-title"></span>
                        <span className="m-subheader__daterange-date m--font-brand"></span>
                      </span>
                      <a
                        href="#"
                        className="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill"
                      >
                        <i className="la la-angle-down"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/*<!-- END: Subheader -->*/}
              <div className="m-content">
                <div className="m-portlet m-portlet--full-height">
                  <form
                    className="m-form m-form--label-align-left- m-form--state-"
                    id="m_form" onSubmit={this.handleSubmit}
                  >
                    {/*    <!--begin: Form Body --> */}
                    <div className="m-portlet__body m-portlet__body--no-padding">
                      {/*  <!--begin: Form Wizard Step 2--> */}
                      <div
                        className="m-wizard__form-step"
                        id="m_wizard_form_step_2"
                      >
                        <div className="m-form__section m-form__section--first">
                          <div
                            className="m-form__heading"
                            style={{
                              padding: "30px",
                              "paddingBottom": "0px",
                              "paddingLeft": "60px"
                            }}
                          >
                            <h3 className="m-form__heading-title">
                              Coupon Mapping
                            </h3>
                          </div>
                          <hr />
                        </div>

                        <div
                          className="m-demo"
                          style={{
                            width: "90%",
                            margin: "30px auto",
                            clear: "both"
                          }}
                        >
                          <div className="m-demo__preview">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <label htmlFor="example-text-input">* Coupon</label>

                              <input
                                type="text"
                                name=""
                                className="form-control m-input m-input--air"
                              />
                              <span className="m-form__help">Coupon</span>
                            </div>
                            <br />
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <label htmlFor="example-text-input">
                                * Select Portal
                              </label>

                              <select
                                className="form-control m-input m-input--air"
                                id="currencySelector"
                              >
                                <option>Select Coupon</option>
                                <option value="1">AudeBook</option>
                                <option value="2">PlayCode</option>
                                <option value="3">BoxAfrica</option>
                                <option value="4">Musik365</option>
                              </select>
                              <span className="m-form__help">
                                Select portal you want the coupon to appear
                              </span>
                            </div>
                            <br />

                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <label htmlFor="example-text-input">
                                * Mapping Type
                              </label>
                              <select
                                className="form-control m-input m-input--air"
                                id="couponMapp"
                                onChange={(e)=>{
                                  if(e.target.value==="ZY_mapping") {
                                    document.getElementById("ZY_mapping").style.display = "block";
                                    document.getElementById("YY_mapping").style.display = "none";
                                  }
                                  else if(e.target.value==="YY_mapping")  {
                                    document.getElementById("ZY_mapping").style.display = "none";
                                    document.getElementById("YY_mapping").style.display = "block";
                                  }
                                }}
                              >
                                <option value="ZY_null">Select mapping type</option>
                                <option value="ZY_mapping">
                                  Product Category
                                </option>
                                <option value="YY_mapping">
                                  Subscription Plans
                                </option>
                              </select>
                              <span className="m-form__help">
                                Select mapping category
                              </span>
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <div className="col-sm-11 hideMe" id="ZY_mapping">
                                <div className="col-xl-12 col-lg-8 col-sm-12 col-md-12">
                                  <div className="m-checkbox-inline">
                                    <label className="m-checkbox">
                                      <input type="checkbox" />
                                      Game
                                      <span></span>
                                    </label>
                                    <label className="m-checkbox">
                                      <input type="checkbox" />
                                      Movie
                                      <span></span>
                                    </label>
                                    <label className="m-checkbox">
                                      <input type="checkbox" />
                                      Ebook
                                      <span></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-11 hideMe" id="YY_mapping">
                                <div className="col-xl-12 col-lg-8 col-sm-12 col-md-12">
                                  <div className="m-checkbox-inline">
                                    <label className="m-checkbox">
                                      <input type="checkbox" />
                                      Basic Plan
                                      <span></span>
                                    </label>
                                    <label className="m-checkbox">
                                      <input type="checkbox" />
                                      Standard Plan
                                      <span></span>
                                    </label>
                                    <label className="m-checkbox">
                                      <input type="checkbox" />
                                      Advance Plan
                                      <span></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="m-portlet__foot m-portlet__foot--fit">
                      <div className="m-form__actions">
                        <div className="row">
                          <div className="col-lg-5"></div>
                          <div className="col-lg-6">
                            <button className="btn btn-primary">Map Coupon</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/*<!-- end:: Body -->

                <!-- begin::Footer -->*/}
          {this.props.footer}
          {/*<!-- end::Footer -->*/}
        </div>

        {/*<!-- end:: Page -->

                <!-- begin::Quick Sidebar -->
                <jsp:include page="common/quicksidebar.html"/>

                {/*<!-- end::Quick Sidebar -->

                <!-- begin::Scroll Top -->*/}
        <div id="m_scroll_top" className="m-scroll-top">
          <i className="la la-arrow-up"></i>
        </div>

        {/*<!-- end::Scroll Top -->

                <!-- begin::Quick Nav -->*/}
        <ul className="m-nav-sticky" style={{ marginTop: "30px" }}>
          <li
            className="m-nav-sticky__item"
            data-toggle="m-tooltip"
            title="Documentation"
            data-placement="left"
          >
            <a href="#" target="_blank">
              <i className="la la-code-fork"></i>
            </a>
          </li>
          <li
            className="m-nav-sticky__item"
            data-toggle="m-tooltip"
            title="Support"
            data-placement="left"
          >
            <a href="#" target="_blank">
              <i className="la la-life-ring"></i>
            </a>
          </li>
        </ul>

        {/*<!-- begin::Quick Nav -->

                <!--begin::Global Theme Bundle -->
                <jsp:include page="common/scripts.html"/>*/}
      </div>
    );
  }
}
export default withRouter(CouponMap);
