import React from "react";
import axios from "../axios";

class AddUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      company: "",
      designation: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      display_name: "Admin"
    };

    //this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    axios.post("users/create", this.state);
    axios
      .post()
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      firstname,
      lastname,
      company,
      designation,
      email,
      phone,
      username,
      password,
      display_name
    } = this.state;
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
                      User
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
                          <span class="m-nav__link-text">Add User</span>
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
                        <h3 class="m-portlet__head-text">Add User</h3>
                      </div>
                    </div>
                  </div>
                  {/*<!--begin::Form-->*/}
                  <form
                    onSubmit={this.handleSubmit}
                    class="m-form m-form--fit m-form--label-align-right"
                  >
                    <div class="m-portlet__body">
                      <div class="form-group m-form__group row">
                        <div class="col-lg-6 m-form__group-sub">
                          <input
                            type="text"
                            name="firstname"
                            class="form-control m-input"
                            placeholder="First Name*"
                            value={firstname}
                            onChange={this.handleChange}
                          />
                          <span class="m-form__help"></span>
                        </div>
                        <div class="col-lg-6 m-form__group-sub">
                          <input
                            type="text"
                            name="lastname"
                            class="form-control m-input"
                            placeholder="Last Name*"
                            value={lastname}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div class="form-group m-form__group row">
                        <div class="col-lg-6 m-form__group-sub">
                          <input
                            type="text"
                            name="company"
                            class="form-control m-input"
                            placeholder="Company*"
                            value={company}
                            onChange={this.handleChange}
                          />
                          <span class="m-form__help"></span>
                        </div>
                        <div class="col-lg-6 m-form__group-sub">
                          <input
                            type="text"
                            name="designation"
                            class="form-control m-input"
                            placeholder="Designation*"
                            value={designation}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div class="form-group m-form__group row">
                        <div class="col-lg-6 m-form__group-sub">
                          <input
                            type="email"
                            name="email"
                            class="form-control m-input"
                            placeholder="Email*"
                            value={email}
                            onChange={this.handleChange}
                          />
                          <span class="m-form__help"></span>
                        </div>
                        <div class="col-lg-6 m-form__group-sub">
                          <input
                            type="tel"
                            id="hp"
                            name="phone"
                            class="form-control m-input"
                            placeholder="Mobile Number*"
                            value={phone}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group m-form__group row">
                      <div class="col-lg-12 m-form__group-sub">
                        <input
                          type="text"
                          name="username"
                          class="form-control m-input"
                          placeholder="UserName"
                          value={username}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div class="form-group m-form__group row">
                      <div class="col-lg-12 m-form__group-sub">
                        <input
                          type="password"
                          name="password"
                          class="form-control m-input"
                          placeholder="Password"
                          value={password}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div class="m-portlet__body">
                      <div class="form-group m-form__group row">
                        <label class="col-lg-12">
                          <select
                            value={this.state.display_name}
                            class="form-control m-input m-input--square"
                            id=""
                          >
                            <option disabled selected value="">
                              Select Type*
                            </option>
                            <option value="Content Provider">
                              Content Provider
                            </option>
                            <option value="Reviewer">Reviewer</option>
                            <option value="Publisher">Publisher</option>
                            <option value="Admin">Admin</option>
                          </select>
                        </label>
                      </div>
                    </div>

                    <div class="m-portlet__foot m-portlet__foot--fit">
                      <div class="m-form__actions">
                        <div class="row">
                          <div class="col-lg-5"></div>
                          <div class="col-lg-6">
                            <button type="submit" class="btn btn-primary">
                              ADD USER
                            </button>
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

export default AddUsers;
