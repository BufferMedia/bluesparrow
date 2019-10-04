import React from "react";

class SubscriptionAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //availableFeatures,
      //availablePortals,

      subscription_name: "",
      price: "",
      currency: "",
      portals: [],
      features: []
    };
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
                      Portal
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
                          <span class="m-nav__link-text">Add Portal</span>
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
                <div class="m-portlet">
                  <form class="m-form m-form--fit m-form--label-align-right">
                    <div class="m-portlet__body">
                      <div class="m-portlet__head">
                        <div class="m-portlet__head-caption">
                          <div class="m-portlet__head-title">
                            <h3 class="m-portlet__head-text">
                              Create Subscription Plan
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div class="form-group m-form__group row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                          <label for="example-text-input">
                            * Select Country
                          </label>
                          <select
                            class="form-control m-input m-input--air"
                            id="currencySelector1"
                          >
                            <option value="ngn">Nigeria - NGN</option>
                            <option value="ghs">Ghana - GHS</option>
                            <option value="usd">Other - USD</option>
                          </select>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                          <label for="exampleInputEmail1">Subscription</label>
                          <input
                            type="text"
                            class="form-control m-input m-input--square m-input--air"
                            id="exampleInputEmail1"
                            placeholder="Subscription Name"
                          />
                        </div>

                        <div class="col-form-label col-lg-3 col-sm-12">
                          <div
                            class="alert alert-primary m--margin-top-10"
                            role="alert"
                          >
                            Price
                          </div>

                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control m-input m-input--air"
                              id="price"
                              placeholder="Enter Price"
                            />

                            <div class="input-group-append border">
                              <div
                                class="currency1 m--margin-top-10"
                                style={{ padding: "0 4px" }}
                                data-currencyName="ngn"
                              >
                                <span>
                                  <h5>NGN</h5>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="alert alert-primary m--margin-top-10">
                            Select Package
                          </div>
                          <select class="form-control m-input--air">
                            <option value="1">Daily</option>
                            <option value="2">Weekly</option>
                            <option value="3">Monthly</option>
                            <option value="4">Yearly</option>
                            <option value="5">One-Off</option>
                          </select>

                          <div class="alert alert-primary m--margin-top-10">
                            Apply Coupon
                          </div>
                          <select class="form-control m-input--air">
                            <option value="1">Coupon 1</option>
                            <option value="2">Coupon 2</option>
                            <option value="3">Coupon 3</option>
                            <option value="4">Coupon 4</option>
                            <option value="5">Coupon 5</option>
                            <option value="6">Coupon 6</option>
                            <option value="7">Coupon 7</option>
                          </select>
                        </div>
                        <div class="col-form-label col-lg-3 col-sm-12">
                          <div class="alert alert-info m--margin-top-10">
                            Subscription Portal
                          </div>
                          <div class="m-form__group form-group">
                            <div class="m-radio-list">
                              <label class="m-radio">
                                <input
                                  type="radio"
                                  name="example_1"
                                  value="1"
                                />
                                AudeBook
                                <span></span>
                              </label>
                              <hr />
                              <label class="m-radio">
                                <input
                                  type="radio"
                                  name="example_1"
                                  value="1"
                                />
                                PlayCode
                                <span></span>
                              </label>
                              <hr />
                              <label class="m-radio">
                                <input
                                  type="radio"
                                  name="example_1"
                                  value="1"
                                />
                                BoxAfrica
                                <span></span>
                              </label>
                              <hr />
                              <label class="m-radio">
                                <input
                                  type="radio"
                                  name="example_1"
                                  value="1"
                                />
                                Musik365
                                <span></span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="col-form-label col-lg-6 col-sm-12">
                          <div class="alert alert-info m--margin-top-10">
                            Select Features
                          </div>

                          <div class="col-12">
                            <label Audebook>AudeBook</label>
                            <div class="m-checkbox-inline">
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Odddddddddd
                                <span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option ssddfffsfff
                                <span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option 3<span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option 2<span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option 3<span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option 3<span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option 2<span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option 3<span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option 3<span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option 2<span></span>
                              </label>
                              <label class="m-checkbox">
                                <input type="checkbox" />
                                Option 3<span></span>
                              </label>
                            </div>
                          </div>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div class="m-form__actions m-form__actions">
                      <div class="row">
                        <div style={{ margin: "auto" }}>
                          <button class="btn btn-brand">Create</button>
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

export default SubscriptionAdd;
