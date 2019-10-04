import React from "react";

class ContentPortalMapping extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="m-grid m-grid--hor m-grid--root m-page">
          {/*<!-- BEGIN: Header -->*/}
          {this.props.header}
          {/*<!-- END: Header -->

			<!-- begin::Body -->*/}
          <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
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
                      Publisher
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
                          <span class="m-nav__link-text">Content Mapping</span>
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
                <div class="m-portlet m-portlet--tab m-portlet--center">
                  <div class="m-portlet__head">
                    <div class="m-portlet__head-caption">
                      <div class="m-portlet__head-title">
                        <span class="m-portlet__head-icon m--hide">
                          <i class="la la-gear"></i>
                        </span>
                        <h3 class="m-portlet__head-text">Select Portal</h3>
                      </div>
                    </div>
                  </div>
                  {/*<!--begin::Form-->*/}
                  <form class="m-form m-form--fit m-form--label-align-right">
                    <div class="m-portlet__body">
                      <div class="form-group m-form__group">
                        <label class="form-control-label">Content Portal</label>
                        <select
                          class="form-control m-input m-input--square col-lg-12"
                          id=""
                        >
                          <option disabled selected value="">
                            Select Content Portal*
                          </option>
                          <option value="">Audebook</option>
                          <option value="">Playcode</option>
                          <option value="">Unilag E-book</option>
                          <option value="">Uniben e-library</option>
                          <option value="">Muzik365</option>
                        </select>
                      </div>
                    </div>
                    <div class="m-portlet__body">
                      <div class="form-group m-form__group">
                        <label class="form-control-label">
                          Content Partner
                        </label>
                        <select
                          class="form-control m-input m-input--square col-lg-12"
                          id=""
                        >
                          <option disabled selected value="">
                            Select Content Partner*
                          </option>
                          <option value="">Unilag e-lib</option>
                          <option value="">Yemkem & co</option>
                          <option value="">Jesuite Limited</option>
                          <option value="">Justholla</option>
                        </select>
                      </div>
                    </div>
                    <div class="m-portlet__body">
                      <div class="form-group m-form__group">
                        <label class="form-control-label">Content Type</label>
                        <select
                          class="form-control m-input m-input--square col-lg-12"
                          id=""
                        >
                          <option disabled selected value="">
                            Select Sub Content Category*
                          </option>
                          <option value="">
                            Education Non-Fiction EBook/Audiobook
                          </option>
                          <option value="">Art Fiction EBook/Audiobook</option>
                          <option value="">
                            Literature Fiction EBook/AudiobookBook
                          </option>
                          <option value="">
                            Whitepaper Non-Fiction Audiobook
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="m-portlet__body">
                      <div class="form-group m-form__group">
                        <label class="form-control-label">
                          Content Category
                        </label>
                        <select
                          class="form-control m-input m-input--square col-lg-12"
                          id=""
                        >
                          <option disabled selected value="">
                            Select Content Category*
                          </option>
                          <option value="">Category1</option>
                          <option value="">Category2</option>
                          <option value="">Category3</option>
                          <option value="">Category4</option>
                        </select>
                      </div>
                    </div>

                    <div class="m-portlet__foot m-portlet__foot--fit">
                      <div class="m-form__actions">
                        <div class="row">
                          <div class="col-lg-5"></div>
                          <div class="col-lg-6">
                            <button type="reset" class="btn btn-primary">
                              MAP
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/*<!--end::Form-->*/}
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

export default ContentPortalMapping;
