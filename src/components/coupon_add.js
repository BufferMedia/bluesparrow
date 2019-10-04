import React from "react";
import axios from '../axios'
import { withRouter } from "react-router-dom";

class CouponAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state={
       
      title: '',
      description: '',
      amount: '',
      code: '', 
      country: '',
      currency: '',
      start_date: '',
      expiry_date: '',
      min_amount: '',
      max_amount: '',
      create_date: '',
      portal_id: '',
      map_type: '',  
      status: '',
    }

  }

  handleSubmit = e => {
		e.preventDefault();
		const { title, description, amount, code, country, currency, start_date, expiry_date,  min_amount, max_amount, create_date, portal_id, map_type } = { ...this.state };
	
		axios.post(`coupon/store`, { title, description, amount, code, country, currency, start_date, expiry_date,  min_amount, max_amount, create_date, portal_id, map_type })
		    .then(res => {

			  alert("Coupon created successfully!");
			  this.props.history.push("/coupon_plans");
		  })
		  .catch(err => {
			alert("Coupon creation failed!");
			console.error(err);
		  })
    }
  


  render() {
    return (
      <div>
        <div class="m-grid m-grid--hor m-grid--root m-page">
          {/*<!-- BEGIN: Header -->*/}
          {this.props.header}
          {/*<!-- END: Header -->

                <!-- begin::Body -->*/}
          <div
            class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body"
            style={{ paddingBottom: "10em" }}
          >
            {/*<!-- BEGIN: Left Aside -->
                    
                    <jsp:include page="common/sidebar.html"/>
                    <!-- END: Left Aside -->*/}
            {this.props.sidebar}
            <div class="m-grid__item m-grid__item--fluid m-wrapper">
              {/*<!-- BEGIN: Subheader -->*/}
              <div class="m-subheader ">
                <div class="d-flex align-items-center">
                  <div class="mr-auto">
                    <h3 class="m-subheader__title m-subheader__title--separator">
                      Billing
                    </h3>
                    <ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
                      <li class="m-nav__item m-nav__item--home">
                        <a href="#" class="m-nav__link m-nav__link--icon">
                          <i class="m-nav__link-icon la la-home"></i>
                        </a>
                      </li>
                      <li class="m-nav__separator">-</li>
                      <li class="m-nav__item">
                        <a href="" class="m-nav__link">
                          <span class="m-nav__link-text">Add Coupon</span>
                        </a>
                      </li>
                      <li class="m-nav__separator">-</li>
                    </ul>
                  </div>
                  <div>
                    <span
                      class="m-subheader__daterange"
                      id="m_dashboard_daterangepicker"
                    >
                      <span class="m-subheader__daterange-label">
                        <span class="m-subheader__daterange-title"></span>
                        <span class="m-subheader__daterange-date m--font-brand"></span>
                      </span>
                      <a
                        href="#"
                        class="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill"
                      >
                        <i class="la la-angle-down"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/*<!-- END: Subheader -->*/}
              <div class="m-content">
                {/* <!--begin::Portlet--> */}
                <div class="m-portlet m-portlet--full-height">
                  <form
                    class="m-form m-form--label-align-left- m-form--state-"
                    id="m_form"
                  >
                    <div class="m-portlet__body m-portlet__body--no-padding">
                      <div
                        class="m-wizard__form-step m-wizard__form-step--current"
                        id="m_wizard_form_step_1"
                      >
                        <div
                          class="m-form__heading"
                          style={{
                            padding: "30px",
                            "padding-bottom": "0px",
                            "padding-left": "60px"
                          }}
                        >
                          <h3 class="m-form__heading-title">
                            {" "}
                            Coupon Details{" "}
                          </h3>
                        </div>
                        <hr />
                        <div
                          class="m-demo"
                          style={{
                            width: "90%",
                            margin: "30px auto; clear: both;"
                          }}
                        >
                          <div class="m-demo__preview">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                              <label for="example-text-input">
                                * Select Coupon Country
                              </label>
                              <select
                                class="form-control m-input m-input--air"
                                id="currencySelector"
                              >
                                <option value="ngn">Nigeria - NGN</option>
                                <option value="ghs">Ghana - GHS</option>
                                <option value="usd">Other - USD</option>
                              </select>
                              <span class="m-form__help">
                                Please select country you want to apply coupon
                              </span>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 m--margin-bottom-10">
                              <label for="example-text-input">
                                * Coupon Title
                              </label>

                              <input
                                type="text"
                                class="form-control m-input m-input--air"
                                placeholder="Coupon Title"
                                onChange={ e => {this.setState({ code: e.target.value })
                                    }} 
                                value={this.state.code}
                              />
                              <span class="m-form__help">
                                Please enter your preferred coupon title
                              </span>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12">
                              <label for="example-text-input">
                                * Coupon Code
                              </label>
                              <input
                                type="text"
                                class="form-control m-input m-input--air"
                                placeholder="Coupon Code"
                              />
                              <span class="m-form__help">
                                Please enter your coupon code
                              </span>
                            </div>
                            <div class="col-lg-12 col-md-12 m--margin-top-10">
                              <label for="example-text-input">
                                * Coupon Description
                              </label>
                              <textarea
                                class="form-control m-input m-input--air"
                                id="exampleTextarea"
                                rows="4"
                                placeholder="Coupon Description"
                              ></textarea>
                              <span class="m-form__help">
                                Type your coupon description
                              </span>
                            </div>

                            <div class="m-separator m-separator--dashed m-separator--lg"></div>

                            <div class="col-lg-12 col-md-12 col-sm-12">
                              <label for="example-text-input">
                                * Coupon Discount Type
                              </label>
                              <select
                                class="form-control m-input m-input--air"
                                id="discountSelector"
                              >
                                <option>Select Coupon Discount type</option>
                                <option value="percent">
                                  Percentage Discount
                                </option>
                                <option value="flat">Flat Rate Discount</option>
                              </select>
                              <span class="m-form__help">
                                Select your coupon discount type
                              </span>
                            </div>

                            <div
                              style={{
                                margin: "10px 15px 10px 15px",
                                overflow: "auto"
                              }}
                            >
                              <div style={{ width: "50%", float: "left" }}>
                                <div style={{ "margin-right": "10px" }}>
                                  <label for="example-text-input">
                                    * Coupon Amount
                                  </label>

                                  <input
                                    type="text"
                                    class="form-control m-input--air"
                                    id="priceorpercent"
                                    placeholder="Price"
                                  />
                                </div>
                              </div>
                              <div style={{ width: "50%", float: "left" }}>
                                <label
                                  for="example-text-input"
                                  id="currency-label"
                                >
                                  Coupon Currency
                                </label>
                                <div class="m--margin-top-10">
                                  <div class="currency" data-currencyName="ngn">
                                    <span>
                                      <h4>NGN</h4>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                margin: "10px 15px 10px 15px",
                                overflow: "auto"
                              }}
                            >
                              <div style={{ width: "50%", float: "left" }}>
                                <div style={{ "margin-right": "10px" }}>
                                  <label for="example-text-input">
                                    * Minimum Purchase Amount
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control m-input--air"
                                    placeholder="Price"
                                  />
                                </div>
                              </div>
                              <div style={{ width: "50%", float: "left" }}>
                                <label for="example-text-input">
                                  * Maximum Discount Amount
                                </label>
                                <div>
                                  <input
                                    type="text"
                                    class="form-control m-input--air"
                                    placeholder="Price"
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              style={{
                                margin: "10px 15px 20px 15px",
                                overflow: "auto"
                              }}
                            >
                              <div
                                style={{
                                  width: "50%",
                                  float: "left",
                                  margin: "10px 0 10px 0",
                                  "padding-right": "10px"
                                }}
                              >
                                <label for="example-text-input">
                                  * Starting Date/Time
                                </label>
                                <div class="input-group date">
                                  <input
                                    type="date"
                                    class="form-control m-input m-input--air"
                                    placeholder="2017-11-29 00:30"
                                    id="m_datetimepicker_3"
                                  />
                                  <div class="input-group-append">
                                    <span class="input-group-text">
                                      <i class="la la-calendar glyphicon-th"></i>
                                    </span>
                                  </div>
                                </div>
                                <span class="m-form__help">
                                  Please enter your preferred start date
                                </span>
                              </div>
                              <div
                                style={{
                                  width: "50%",
                                  float: "left",
                                  margin: "10px 0 10px 0"
                                }}
                              >
                                <label for="example-text-input">
                                  * Expire Date/Time
                                </label>
                                <div class="input-group date">
                                  <input
                                    type="date"
                                    class="form-control m-input m-input--air"
                                    placeholder="2018-11-29 00:30"
                                    id="m_datetimepicker_2"
                                  />
                                  <div class="input-group-append">
                                    <span class="input-group-text">
                                      <i class="la la-calendar glyphicon-th"></i>
                                    </span>
                                  </div>
                                </div>
                                <span class="m-form__help">
                                  Please enter your preferred end date
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="m-portlet__foot m-portlet__foot--fit">
                      <div class="m-form__actions">
                        <div class="row">
                          <div class="col-lg-5"></div>
                          <div class="col-lg-6">
                            <button class="btn btn-primary">ADD PORTAL</button>
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
        <div id="m_scroll_top" class="m-scroll-top">
          <i class="la la-arrow-up"></i>
        </div>

        {/*<!-- end::Scroll Top -->

                    <!-- begin::Quick Nav -->*/}
        <ul class="m-nav-sticky" style={{ marginTop: "30px" }}>
          <li
            class="m-nav-sticky__item"
            data-toggle="m-tooltip"
            title="Documentation"
            data-placement="left"
          >
            <a href="#" target="_blank">
              <i class="la la-code-fork"></i>
            </a>
          </li>
          <li
            class="m-nav-sticky__item"
            data-toggle="m-tooltip"
            title="Support"
            data-placement="left"
          >
            <a href="#" target="_blank">
              <i class="la la-life-ring"></i>
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

export default withRouter(CouponAdd)
