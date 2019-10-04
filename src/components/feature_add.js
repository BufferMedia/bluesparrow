import React from "react";
import axios from "../axios";
import { withRouter } from "react-router-dom";

class FeatureAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name } = { ...this.state };

    axios
      .post("feature/store", { name })
      .then(res => {
        this.props.history.push("/feature_list");
      })
      .catch(err => console.warn(err));
  };

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
                          <span class="m-nav__link-text">Add Feature</span>
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
                  <form
                    class="m-form m-form--fit m-form--label-align-right"
                    onSubmit={this.handleSubmit}
                  >
                    <div class="m-portlet__body">
                      <div class="form-group m-form__group row">
                        {/* <label class="col-form-label col-lg-3 col-sm-12 offset-1">
										
											<div class="alert alert-info m--margin-top-10">
																 Portal
																</div>
											<div class="m-form__group form-group">
												
																
																<div class="m-radio-list">
																		<label class="m-radio">
																		<input type="radio" name="example_1" value="1"/>
																		AudeBook
																		<span></span>
																	</label>
																		
																		<label class="m-radio">
																		<input type="radio" name="example_1" value="1"/>
																		PlayCode
																		<span></span>
																	</label>
																		
																		<label class="m-radio">
																		<input type="radio" name="example_1" value="1"/>
																		BoxAfrica
																		<span></span>
																	</label>
																		
																		<label class="m-radio">
																		<input type="radio" name="example_1" value="1"/>
																		Musik365
																		<span></span>
																	</label>
																</div>
												</div>
															<div class="m-portlet__foot m-portlet__foot--fit">	
								         </div>
											
										</label> */}

                        <div class="col-form-label col-lg-8 col-sm-12 m--margin-top-10 offset-2 ">
                          <input
                            type="text"
                            class="form-control m-input m-input--square"
                            id="price"
                            name="name"
                            placeholder="Input Feature name"
                            value={this.state.name}
                            onChange={e => {
                              this.setState({ name: e.target.value });
                            }}
                            required
                          />

                          <div class="m-form__actions m-form__actions">
                            <div class="row">
                              <div class="col-lg-9 ml-lg-auto">
                                <button className="btn btn-primary">
                                  Create
                                </button>
                              </div>
                            </div>
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

export default withRouter(FeatureAdd);
