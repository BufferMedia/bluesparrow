import React from "react";
import axios from "../axios";
import { getCookie } from "../request";
import { MDBDataTable, Row, Cols, Card, CardBody } from "mdbreact";

class ContentCategoryAdd extends React.Component {
  constructor(props) {
    super(props);

    const availableContentTypes = axios.getContentType();

    this.state = {
      selectedCategory: "",
      availableContentTypes,

      name: "",
      local_name: "",
      content_types: [],

      categoryList: []
    };
  }

  componentDidMount() {
    this.loadCategory();
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
    const { name, local_name, content_types } = { ...this.state };

    axios
      .post(`category/store`, { name, local_name, content_types })
      .then(res => {
        if (res.data.status) {
          this.setState({
            name: "",
            local_name: "",
            content_types: []
          });
          alert("Content category created succesfully");
        }
      })
      .catch(err => {
        alert("content category creation failed!");
        console.log(err);
      });
  };

  //listing the created category
  loadCategory = async () => {
    try {
      axios
        .get(`categories`)
        .then(res => {
          console.log(res.data.data);
          this.setState({
            categoryList: res.data.data.map(category => {
              return {
                id: category.id,
                name: category.name,
                local_name: category.local_name
                //content_types: category.content_types
              };
            })
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({ loading: false });
        });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id"
        },
        {
          label: "Category Name",
          filed: "name"
        },
        {
          label: "Local Name",
          field: "local_name"
        }
        /* {
			label: 'Content Types',
			field: 'content_types',
			
		  } */
      ],
      rows: this.state.categoryList
    };

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
                      Content Category
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
                          <span class="m-nav__link-text">
                            Add Content Category
                          </span>
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
                        <h3 class="m-portlet__head-text">
                          Add Content Category
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/*<!--begin::Form-->*/}
                  <form
                    class="m-form m-form--fit m-form--label-align-right"
                    onSubmit={this.handleSubmit}
                  >
                    <div class="m-portlet__body">
                      <div class="form-group m-form__group row">
                        <div class="col-lg-12">
                          <select
                            name="portal"
                            className="form-control m-input m-input--air"
                            onChange={e => {
                              this.setState({
                                selectedCategory: e.target.value
                              });
                            }}
                          >
                            <option value="">Select Content Types</option>
                            <option value="ZY_mapping">Content Type</option>
                          </select>
                        </div>
                        {this.state.selectedCategory != "" && (
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
                      <div class="form-group m-form__group row">
                        <div class="col-lg-6 m-form__group-sub">
                          <label class="form-control-label">
                            Category Title
                          </label>
                          <input
                            type="text"
                            name="name"
                            class="form-control m-input"
                            placeholder="Enter Title"
                            onChange={e => {
                              this.setState({ name: e.target.value });
                            }}
                            value={this.state.name}
                          />
                          <span class="m-form__help">
                            Please enter your Category title
                          </span>
                        </div>
                        <div class="col-lg-6 m-form__group-sub">
                          <label class="form-control-label">
                            Category Local Title
                          </label>
                          <input
                            type="text"
                            name="local_name"
                            class="form-control m-input"
                            placeholder="Local Title"
                            onChange={e => {
                              this.setState({ local_name: e.target.value });
                            }}
                            value={this.state.local_name}
                          />
                          <span class="m-form__help">
                            Please enter your local Category title
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="m-portlet__foot m-portlet__foot--fit">
                      <div class="m-form__actions">
                        <div class="row">
                          <div class="col-lg-5"></div>
                          <div class="col-lg-6">
                            <button class="btn btn-primary">
                              ADD CATEGORY
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/*<!--end::Form-->*/}
                </div>
                {/*<!--end::Portlet-->*/}

                <div class="m-portlet m-portlet--mobile">
                  <div class="m-portlet__head">
                    <div class="m-portlet__head-caption">
                      <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">Category List</h3>
                      </div>
                    </div>
                    <div class="m-portlet__head-tools">
                      <ul class="m-portlet__nav">
                        <li class="m-portlet__nav-item">
                          <div
                            class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push"
                            m-dropdown-toggle="hover"
                            aria-expanded="true"
                          >
                            <a
                              href="#"
                              class="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle"
                            >
                              <i class="la la-ellipsis-h m--font-brand"></i>
                            </a>
                            <div class="m-dropdown__wrapper">
                              <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                              <div class="m-dropdown__inner">
                                <div class="m-dropdown__body">
                                  <div class="m-dropdown__content">
                                    <ul class="m-nav">
                                      <li class="m-nav__section m-nav__section--first">
                                        <span class="m-nav__section-text">
                                          Quick Actions
                                        </span>
                                      </li>
                                      <li class="m-nav__item">
                                        <a href="" class="m-nav__link">
                                          <i class="m-nav__link-icon flaticon-share"></i>
                                          <span class="m-nav__link-text">
                                            Create Post
                                          </span>
                                        </a>
                                      </li>
                                      <li class="m-nav__item">
                                        <a href="" class="m-nav__link">
                                          <i class="m-nav__link-icon flaticon-chat-1"></i>
                                          <span class="m-nav__link-text">
                                            Send Messages
                                          </span>
                                        </a>
                                      </li>
                                      <li class="m-nav__item">
                                        <a href="" class="m-nav__link">
                                          <i class="m-nav__link-icon flaticon-multimedia-2"></i>
                                          <span class="m-nav__link-text">
                                            Upload File
                                          </span>
                                        </a>
                                      </li>
                                      <li class="m-nav__section">
                                        <span class="m-nav__section-text">
                                          Useful Links
                                        </span>
                                      </li>
                                      <li class="m-nav__item">
                                        <a href="" class="m-nav__link">
                                          <i class="m-nav__link-icon flaticon-info"></i>
                                          <span class="m-nav__link-text">
                                            FAQ
                                          </span>
                                        </a>
                                      </li>
                                      <li class="m-nav__item">
                                        <a href="" class="m-nav__link">
                                          <i class="m-nav__link-icon flaticon-lifebuoy"></i>
                                          <span class="m-nav__link-text">
                                            Support
                                          </span>
                                        </a>
                                      </li>
                                      <li class="m-nav__separator m-nav__separator--fit m--hide"></li>
                                      <li class="m-nav__item m--hide">
                                        <a
                                          href="#"
                                          class="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm"
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
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="m-portlet__body">
                    {/*<!--begin: Search Form -->*/}
                    <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
                      <div class="row align-items-center">
                        <div class="col-xl-8 order-2 order-xl-1">
                          <div class="form-group m-form__group row align-items-center">
                            <div class="col-md-4">
                              <div class="m-form__group m-form__group--inline">
                                <div class="m-form__label">
                                  <label>Status:</label>
                                </div>
                                <div class="m-form__control">
                                  <select
                                    class="form-control m-bootstrap-select"
                                    id="m_form_status"
                                  >
                                    <option value="">All</option>
                                    <option value="1">Pending</option>
                                    <option value="2">Delivered</option>
                                    <option value="3">Canceled</option>
                                  </select>
                                </div>
                              </div>
                              <div class="d-md-none m--margin-bottom-10"></div>
                            </div>
                            <div class="col-md-4">
                              <div class="m-form__group m-form__group--inline">
                                <div class="m-form__label">
                                  <label class="m-label m-label--single">
                                    Type:
                                  </label>
                                </div>
                                <div class="m-form__control">
                                  <select
                                    class="form-control m-bootstrap-select"
                                    id="m_form_type"
                                  >
                                    <option value="">All</option>
                                    <option value="1">Online</option>
                                    <option value="2">Retail</option>
                                    <option value="3">Direct</option>
                                  </select>
                                </div>
                              </div>
                              <div class="d-md-none m--margin-bottom-10"></div>
                            </div>
                            <div class="col-md-4">
                              <div class="m-input-icon m-input-icon--left">
                                <input
                                  type="text"
                                  class="form-control m-input"
                                  placeholder="Search..."
                                  id="generalSearch"
                                />
                                <span class="m-input-icon__icon m-input-icon__icon--left">
                                  <span>
                                    <i class="la la-search"></i>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*<!--end: Search Form -->*/}

                    {/*<!--begin: Datatable -->*/}
                    <div>
                      <MDBDataTable striped bordered hover data={data} />
                    </div>

                    {/*<!--end: Datatable -->*/}
                  </div>
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

export default ContentCategoryAdd;
