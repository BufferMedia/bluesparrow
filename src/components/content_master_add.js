import React from "react";
import axios from "../axios";
import FileUploader from "../widget/FileUploader";
import { withRouter } from "react-router-dom";

class ContentMasterAdd extends React.Component {
  constructor(props) {
    super(props);

    const availableContentTypes = axios.getContentType();
    const availableCategory = axios.getCategories();
    const availableMetadata = axios.getMetadata();

    this.state = {
      availableContentTypes,
      availableCategory,
      availableMetadata,
      selectedCategory: "",
      selectedContentType: "",
      selectedCategoryName: "",
      selectedContentTypeName: "",
      storageType: 0,
      page: 1,

      title: "",
      description: "",
      content_type: null,
      category: null,
      file: null,
      thumbnail: { small: "", medium: "", large: "" },
      metadata: null,
      metadata_value: ""
    };
  }

  submit = () => {
    //console.log(this.state)
    if (this.state.page === 1) {
      if (
        this.state.content_type === null ||
        this.state.category === null ||
        this.state.title === "" ||
        this.state.description === ""
      ) {
        alert("All fields are all required");
      } else {
        this.setState({ page: 2 });
      }
    } else if (this.state.page === 2) {
      if (this.state.file === null) {
        alert("Upload a valid content to continue");
      } else {
        this.setState({ page: 3 });
      }
    } else {
      if (this.state.metadata === null || this.state.metadata_value === "") {
        alert("Please complete metadata details");
      } else if (
        this.state.thumbnail.small === "" ||
        this.state.thumbnail.medium === "" ||
        this.state.thumbnail.large === ""
      ) {
        alert("Upload all thumbnails");
      } else {
        const thumbnails = [
          this.state.thumbnail.small,
          this.state.thumbnail.medium,
          this.state.thumbnail.large
        ];
        const {
          title,
          description,
          content_type,
          category,
          file,
          metadata,
          metadata_value
        } = this.state;
  
        axios
          .post("content/store", axios.getHeaders(), {
            title,
            description,
            content_type,
            category,
            file,
            metadata,
            metadata_value,
            thumbnails
          })
          .then(res => {
            console.log(res)
            if (res.data.status) {
              this.props.history.push("/content_master_list");
            } else {
              alert(res.data.message)
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };

  renderPage = () => {
    if (this.state.page === 1) {
      return (
        <div
          className="m-wizard__form-step m-wizard__form-step--current"
          id="m_wizard_form_step_1"
        >
          <div className="m-form__heading">
            <h3 className="m-form__heading-title">Content Details</h3>
          </div>
          <div className="form-group m-form__group row">
            <label className="col-xl-3 col-lg-3 col-form-label">
              * Content Type:
            </label>
            <div className="col-xl-9 col-lg-9">
              <select
                name="content_type"
                className="form-control m-input"
                onChange={e =>
                  this.setState({
                    content_type: e.target.value,
                    selectedContentTypeName:
                      e.target.options[e.target.selectedIndex].text
                  })
                }
                defaultValue={this.state.content_type}
              >
                <option value="">Select Type*</option>
                {this.availableContentTypes !== null &&
                  this.state.availableContentTypes.map(cont => (
                    <option key={cont.id} value={cont.id} data-name={cont.name}>
                      {cont.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="form-group m-form__group row">
            <label className="col-xl-3 col-lg-3 col-form-label">
              * Category:
            </label>
            <div className="col-xl-9 col-lg-9">
              <select
                name="category"
                className="form-control m-input"
                onChange={e => {
                  this.setState({
                    category: e.target.value,
                    selectedCategoryName:
                      e.target.options[e.target.selectedIndex].text
                  });
                }}
                defaultValue={this.state.category}
              >
                <option value="">Select Category</option>
                {this.state.availableCategory !== null &&
                  this.state.availableCategory.map(cat => (
                    <option key={cat.id} value={cat.id} data-name={cat.name}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="form-group m-form__group row">
            <label className="col-xl-3 col-lg-3 col-form-label">* Title:</label>
            <div className="col-xl-9 col-lg-9">
              <input
                type="text"
                name="title"
                className="form-control m-input"
                placeholder="Title"
                value={this.state.title}
                onChange={e => {
                  this.setState({
                    title: e.target.value
                  });
                }}
                required
              />
              <span className="m-form__help">
                Please enter your content title
              </span>
            </div>
          </div>

          <div className="form-group m-form__group row">
            <label className="col-xl-3 col-lg-3 col-form-label">
              * Description:
            </label>
            <div className="col-xl-9 col-lg-9">
              <textarea
                className="form-control m-input"
                name="description"
                placeholder="Brief Description"
                rows="3"
                value={this.state.description}
                onChange={e => {
                  this.setState({
                    description: e.target.value
                  });
                }}
              />
              <span className="m-form__help">Brief Description</span>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 2) {
      return (
        <div
          className="m-wizard__form-step m-wizard__form-step--current"
          id="m_wizard_form_step_2"
        >
          <div className="m-form__heading">
            <h3 className="m-form__heading-title">Add Content File</h3>
          </div>

          <div className="col-lg-12 p-0">
            <input
              className="form-control m-input"
              disabled
              value={`Content Type: ${this.state.selectedContentTypeName}`}
            />
            <input
              className="form-control m-input"
              disabled
              value={`Category: ${this.state.selectedCategoryName}`}
            />
            <input
              className="form-control m-input"
              disabled
              value={`Title: ${this.state.title || null}`}
            />
            <textarea
              className="form-control"
              disabled
              value={`Description: ${this.state.description}`}
            />
          </div>

          <div className="form-group m-form__group row p-3">
            <FileUploader
              maxFiles={1}
              onSuccess={res =>
                this.setState({
                  file: res.file
                })
              }
              onError={err => alert(err)}
            />
          </div>
          <div className="form-group m-form__group row p-0">
            <div className="col-lg-6 m-form__group-sub">
              <label className="form-control-label">* OS:</label>
              <select
                name="OS"
                className="form-control m-input"
                defaultValue=""
              >
                <option selected disabled>
                  Select OS
                </option>
                <option value="">Android</option>
              </select>
              <span className="m-form__help">
                Please enter your Operating System
              </span>
            </div>
            <div className="col-lg-6 m-form__group-sub">
              <label className="form-control-label">* OS Version:</label>
              <input
                type="text"
                name="os-version"
                className="form-control m-input"
                placeholder="e.g. 5.0"
              />
              <span className="m-form__help">
                Please enter your Operating System Version
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="m-wizard__form-step m-wizard__form-step--current"
          id="m_wizard_form_step_3"
        >
          <div className="m-form__heading">
            <h3 className="m-form__heading-title">Add Metadata</h3>
          </div>
          <div className="form-group m-form__group row">
            <div className="col-lg-12">
              <select
                name="MD"
                className="form-control m-input"
                defaultValue=""
                onChange={e => {
                  this.setState({
                    metadata: e.target.value
                  });
                }}
              >
                <option disabled value="">
                  * Select Metadata
                </option>
                {this.state.availableMetadata !== null &&
                  this.state.availableMetadata.map(meta => (
                    <option key={meta.id} value={meta.id}>
                      {meta.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="form-group m-form__group row">
            <div className="col-lg-12">
              <label className="form-control-label">Value</label>
              <input
                type="text"
                name="dimensions"
                className="form-control m-input"
                placeholder="Content Metadata"
                value={this.state.metadata_value}
                onChange={e =>
                  this.setState({
                    metadata_value: e.target.value
                  })
                }
              />
              <span className="m-form__help">Please enter your Metadata</span>
            </div>
          </div>
          <div className="form-group m-form__group row">
            <label className="col-xl-3 col-lg-3 col-form-label">
              * Storage Type:
            </label>
            <div className="col-xl-9 col-lg-9">
              <select
                name="storage-type"
                className="form-control m-input"
                onChange={e =>
                  this.setState({
                    storageType: e.target.value
                  })
                }
                defaultValue=""
              >
                <option disabled value="">
                  Select Storage Type
                </option>
                <option value={0}>Local</option>
                <option value={1}>Remote</option>
              </select>

              <span className="m-form__help"> </span>
              <div>
                <span className="m-form__help">Thumbnail Small</span>
                <FileUploader
                  maxFiles={1}
                  accept="image/*"
                  maxSize={5}
                  onSuccess={res => {
                    const thumbnail = {
                      ...this.state.thumbnail,
                      small: res.file
                    };
                    this.setState(prevState => ({
                      thumbnail
                    }));
                  }}
                  onError={err => alert(err)}
                />
              </div>
              <div>
                <span className="m-form__help">Thumbnail Middle</span>
                <FileUploader
                  maxFiles={1}
                  accept="image/*"
                  maxSize={5}
                  onSuccess={res => {
                    const thumbnail = {
                      ...this.state.thumbnail,
                      medium: res.file
                    };
                    this.setState(prevState => ({
                      thumbnail
                    }));
                  }}
                  onError={err => alert(err)}
                />
              </div>
              <div>
                <span className="m-form__help">Thumbnail Large</span>
                <FileUploader
                  maxFiles={1}
                  accept="image/*"
                  maxSize={5}
                  onSuccess={res => {
                    const thumbnail = {
                      ...this.state.thumbnail,
                      large: res.file
                    };
                    this.setState(prevState => ({
                      thumbnail
                    }));
                  }}
                  onError={err => alert(err)}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    const PAGE_DATA = this.renderPage();
    return (
      <div>
        <div>
          <div className="m-grid m-grid--hor m-grid--root m-page">
            {/*<!-- BEGIN: Header -->*/}
            {this.props.header}
            {/*<!-- END: Header -->

			<!-- begin::Body -->*/}
            <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
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
                        Content
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
                            <span className="m-nav__link-text">
                              Add Content
                            </span>
                          </a>
                        </li>
                        <li className="m-nav__separator">-</li>
                      </ul>
                    </div>
                    <div>
                      <div
                        className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push"
                        m-dropdown-toggle="hover"
                        aria-expanded="true"
                      >
                        <a
                          href="#"
                          className="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle"
                        >
                          <i className="la la-plus m--hide"></i>
                          <i className="la la-ellipsis-h"></i>
                        </a>
                        <div className="m-dropdown__wrapper">
                          <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                          <div className="m-dropdown__inner">
                            <div className="m-dropdown__body">
                              <div className="m-dropdown__content">
                                <ul className="m-nav">
                                  <li className="m-nav__section m-nav__section--first m--hide">
                                    <span className="m-nav__section-text">
                                      Quick Actions
                                    </span>
                                  </li>
                                  <li className="m-nav__item">
                                    <a href="" className="m-nav__link">
                                      <i className="m-nav__link-icon flaticon-share"></i>
                                      <span className="m-nav__link-text">
                                        Activity
                                      </span>
                                    </a>
                                  </li>
                                  <li className="m-nav__item">
                                    <a href="" className="m-nav__link">
                                      <i className="m-nav__link-icon flaticon-chat-1"></i>
                                      <span className="m-nav__link-text">
                                        Messages
                                      </span>
                                    </a>
                                  </li>
                                  <li className="m-nav__item">
                                    <a href="" className="m-nav__link">
                                      <i className="m-nav__link-icon flaticon-info"></i>
                                      <span className="m-nav__link-text">
                                        FAQ
                                      </span>
                                    </a>
                                  </li>
                                  <li className="m-nav__item">
                                    <a href="" className="m-nav__link">
                                      <i className="m-nav__link-icon flaticon-lifebuoy"></i>
                                      <span className="m-nav__link-text">
                                        Support
                                      </span>
                                    </a>
                                  </li>
                                  <li className="m-nav__separator m-nav__separator--fit"></li>
                                  <li className="m-nav__item">
                                    <a
                                      href="#"
                                      className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm"
                                    >
                                      Submit
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- END: Subheader -->*/}
                <div className="m-content">
                  {/*<!--Begin::Main Portlet-->*/}
                  <div className="m-portlet m-portlet--full-height">
                    {/*<!--begin: Portlet Head-->*/}
                    <div className="m-portlet__head">
                      <div className="m-portlet__head-caption">
                        <div className="m-portlet__head-title">
                          <h3 className="m-portlet__head-text">Add Content</h3>
                        </div>
                      </div>
                      <div className="m-portlet__head-tools">
                        <ul className="m-portlet__nav">
                          <li className="m-portlet__nav-item">
                            <a
                              href="#"
                              data-toggle="m-tooltip"
                              className="m-portlet__nav-link m-portlet__nav-link--icon"
                              data-direction="left"
                              data-width="auto"
                              title="Get help with filling up this form"
                            >
                              <i className="flaticon-info m--icon-font-size-lg3"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*<!--end: Portlet Head-->*/}
                    {/*<!--begin: Portlet Body-->*/}
                    <div className="m-portlet__body m-portlet__body--no-padding">
                      {/*<!--begin: Form Wizard-->*/}
                      <div
                        className="m-wizard m-wizard--3 m-wizard--success"
                        id="m_wizard"
                      >
                        {/*<!--begin: Message container -->*/}
                        <div className="m-portlet__padding-x">
                          {/*<!-- Here you can put a message or alert -->*/}
                        </div>
                        {/*<!--end: Message container -->*/}
                        <div className="row m-row--no-padding">
                          <div className="col-xl-3 col-lg-12">
                            {/*<!--begin: Form Wizard Head -->*/}
                            <div className="m-wizard__head">
                              {/*<!--begin: Form Wizard Progress -->*/}
                              <div className="m-wizard__progress">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              {/*<!--end: Form Wizard Progress -->*/}
                              {/*<!--begin: Form Wizard Nav -->*/}
                              <div className="m-wizard__nav">
                                <div className="m-wizard__steps">
                                  <div
                                    className={
                                      `m-wizard__step` +
                                      (this.state.page === 1
                                        ? ` m-wizard__step--current`
                                        : "")
                                    }
                                    m-wizard-target="m_wizard_form_step_1"
                                  >
                                    <div className="m-wizard__step-info">
                                      <a
                                        href="#"
                                        className="m-wizard__step-number"
                                      >
                                        <span>
                                          <span>1</span>
                                        </span>
                                      </a>
                                      <div className="m-wizard__step-line">
                                        <span></span>
                                      </div>
                                      <div className="m-wizard__step-label">
                                        Add Details
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      `m-wizard__step` +
                                      (this.state.page === 2
                                        ? ` m-wizard__step--current`
                                        : "")
                                    }
                                    m-wizard-target="m_wizard_form_step_2"
                                  >
                                    <div className="m-wizard__step-info">
                                      <a
                                        href="#"
                                        className="m-wizard__step-number"
                                      >
                                        <span>
                                          <span>2</span>
                                        </span>
                                      </a>
                                      <div className="m-wizard__step-line">
                                        <span></span>
                                      </div>
                                      <div className="m-wizard__step-label">
                                        Upload Content File
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      `m-wizard__step` +
                                      (this.state.page === 3
                                        ? ` m-wizard__step--current`
                                        : "")
                                    }
                                    m-wizard-target="m_wizard_form_step_3"
                                  >
                                    <div className="m-wizard__step-info">
                                      <a
                                        href="#"
                                        className="m-wizard__step-number"
                                      >
                                        <span>
                                          <span>3</span>
                                        </span>
                                      </a>
                                      <div className="m-wizard__step-line">
                                        <span></span>
                                      </div>
                                      <div className="m-wizard__step-label">
                                        Add Metadata
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/*<!--end: Form Wizard Nav -->*/}
                            </div>
                            {/*<!--end: Form Wizard Head -->*/}
                          </div>
                          <div className="col-xl-9 col-lg-12">
                            {/*<!--begin: Form Wizard Form-->*/}
                            <div className="m-wizard__form">
                              {/*<!--
							1) Use m-form--label-align-left class to alight the form input lables to the right
							2) Use m-form--state class to highlight input control borders on form validation
                        -->*/}
                              <form
                                className="m-form m-form--label-align-left- m-form--state-"
                                id="m_form"
                              >
                                {/*<!--begin: Form Body -->*/}
                                <div className="m-portlet__body m-portlet__body--no-padding">
                                  {/*<!--begin: Form Wizard Step 1-->*/}

                                  {/*<!--end: Form Wizard Step 1-->*/}
                                  {/*<!--begin: Form Wizard Step 2-->*/}
                                  {/*<!--end: Form Wizard Step 2-->*/}
                                  {/*<!--begin: Form Wizard Step 3-->*/}

                                  {/* <div className="m-portlet__foot m-portlet__foot--fit m--margin-top-40">
                                    {" "}
                                  </div> */}
                                </div>
                                {/*<!--end: Form Wizard Step 3-->*/}

                                {PAGE_DATA}

                                {/*<!--begin: Form Actions -->*/}
                                <div className="m-portlet__foot m-portlet__foot--fit m--margin-top-40">
                                  <div className="m-form__actions">
                                    <div className="row">
                                      {this.state.page > 1 && (
                                        <div className="col-lg-6 m--align-left">
                                          <a
                                            href="#"
                                            className="btn btn-secondary m-btn m-btn--custom m-btn--icon"
                                            onClick={() =>
                                              this.setState({
                                                page: this.state.page - 1
                                              })
                                            }
                                          >
                                            <span>
                                              <i className="la la-arrow-left"></i>
                                              &nbsp;&nbsp;
                                              <span>Back</span>
                                            </span>
                                          </a>
                                        </div>
                                      )}
                                      <div className="col-lg-6 m--align-right">
                                        <a
                                          href="#"
                                          className="btn btn-primary m-btn m-btn--custom m-btn--icon"
                                          data-wizard-action="submit"
                                        >
                                          <span>
                                            <i className="la la-check"></i>
                                            &nbsp;&nbsp;
                                            <span>Submit</span>
                                          </span>
                                        </a>
                                        <a
                                          className="btn btn-success m-btn m-btn--custom m-btn--icon"
                                          onClick={() => this.submit()}
                                        >
                                          <span>
                                            <span>Save & Continue</span>
                                            &nbsp;&nbsp;
                                            <i className="la la-arrow-right"></i>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*	<!--end: Form Actions -->*/}
                              </form>
                            </div>
                            {/*<!--end: Form Wizard Form-->*/}
                          </div>
                        </div>
                      </div>
                      {/*<!--end: Form Wizard-->*/}
                    </div>
                    {/*<!--end: Portlet Body-->*/}
                  </div>
                  {/*<!--End::Main Portlet-->*/}
                </div>
              </div>

              {/*<!-- BEGIN: Subheader -->*/}

              {/*<!-- END: Subheader -->*/}

              {/*<!--End::Main Portlet-->*/}
            </div>
          </div>
        </div>

        {this.props.footer}
        <div id="m_scroll_top" className="m-scroll-top">
          <i className="la la-arrow-up"></i>
        </div>
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
      </div>
    );
  }
}

export default withRouter(ContentMasterAdd);
