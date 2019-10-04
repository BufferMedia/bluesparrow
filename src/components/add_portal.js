import React from "react";
import axios from "../axios";
import { withRouter } from "react-router-dom";

class AddPortal extends React.Component {
  constructor(props) {
    super(props);

    const availableContentTypes = axios.getContentType();

    console.log(availableContentTypes);

    this.state = {
      selectedContentType: "",
      availableContentTypes,

      name: "",
      description: "",
      content_types: []
    };
  }

  handleContentTypeChecked = e => {
    const checked = this.state.content_types;
    if (e.target.checked) {
      checked.push(e.target.value); // adding to array
    } else {
      checked.splice(this.state.content_types.indexOf(e.target.value), 1); // removing from array
    }
    this.setState({ content_types: checked });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, description, content_types } = { ...this.state };

    axios
      .post(`portals/create`, { name, description, content_types })
      .then(res => {
        if (res.data.status) {
          this.setState({
            name: "",
            description: "",
            content_types: []
          });
          alert("Portal created successfully!");
          this.props.history.push("/list_portal");
        }
      })
      .catch(err => {
        alert("Portal creation failed!");
        console.error(err);
      });
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
                <div class="m-portlet m-portlet--tab m-portlet--center">
                  <div class="m-portlet__head">
                    <div class="m-portlet__head-caption">
                      <div class="m-portlet__head-title">
                        <span class="m-portlet__head-icon m--hide">
                          <i class="la la-gear"></i>
                        </span>
                        <h3 class="m-portlet__head-text">Add Portal</h3>
                      </div>
                    </div>
                  </div>
                  {/*<!--begin::Form-->*/}
                  <form
                    class="m-form m-form--fit m-form--label-align-right"
                    onSubmit={this.handleSubmit}
                  >
                    <div class="m-portlet__body">
                      <div class="form-group m-form__group">
                        <div class="col-lg-12 m-form__group-sub">
                          <input
                            type="text"
                            name="name"
                            class="form-control m-input"
                            placeholder="Title"
                            value={this.state.name}
                            onChange={e => {
                              this.setState({ name: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                      <div class="form-group m-form__group">
                        <div class="col-lg-12">
                          <textarea
                            class="form-control m-input"
                            id="desc"
                            placeholder="Portal Description"
                            rows="3"
                            name="description"
                            onChange={e => {
                              this.setState({ description: e.target.value });
                            }}
                            value={this.state.description}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div class="form-group m-form__group">
                        <div className="col-sm-12">
                          <select
                            className="form-control m-input m-input--air"
                            onChange={e => {
                              this.setState({
                                selectedContentType: e.target.value
                              });
                            }}
                          >
                            <option value="">Select Content Types</option>
                            <option value="ZY_mapping">Content Type</option>
                          </select>
                        </div>
                      </div>
                      {this.state.selectedContentType !== "" && (
                        <div class="col-lg-12 col-md-12">
                          <div className="col-sm-11" id="ZY_mapping">
                            <div class="col-xl-12 col-lg-8 col-sm-12 col-md-12">
                              <div class="m-checkbox-inline">
                                {this.state.availableContentTypes !== null &&
                                  this.state.availableContentTypes.map(s => {
                                    return (
                                      <label class="m-checkbox" key={s.id}>
                                        <input
                                          type="checkbox"
                                          checked={this.state.content_types.includes(
                                            `${s.id}`
                                          )}
                                          value={`${s.id}`}
                                          onChange={
                                            this.handleContentTypeChecked
                                          }
                                        />
                                        {s.extension}
                                        <span></span>
                                      </label>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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
                  {/*<!--end::Form-->*/}
                </div>

                {/*<!--end::Portlet-->*/}
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

export default withRouter(AddPortal);
