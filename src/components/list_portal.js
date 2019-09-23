import React from "react";
import axios from "../axios";
import { MDBDataTable, Row, Cols, Card, CardBody } from "mdbreact";
import util from "../util";

class ListPortal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      portalList: [],
      loading: true
    };
  }

  componentDidMount() {
    this.loadPortals();
  }

  loadPortals = async => {
    try {
      axios
        .get("portals/paginate")
        .then(resp => {
          console.log(resp.data.data);
          this.setState({
            portalList: resp.data.data.portals.map(portal => {
              return {
                id: portal.id,
                name: portal.name,
                description: portal.description,
                content_type: util.serializeData(portal.content_types),
                Action: ""
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
          label: "Record ID",
          field: "id"
        },
        {
          label: "Portal Name",
          field: "name"
        },
        {
          label: "Description",
          field: "description"
        },
        {
          label: "Content Types",
          selector: "content_types"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: this.state.portalList
    };
    return (
      <div>
        {this.props.header}
        {/*<!-- begin::Body -->*/}
        <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
          {/*<!-- BEGIN: Left Aside -->
				
				<jsp:include page="common/sidebar.html"/>
				{/*<!-- END: Left Aside -->*/}
          {this.props.sidebar}
          <div className="m-grid__item m-grid__item--fluid m-wrapper">
            {/*<!-- BEGIN: Subheader -->*/}
            <div className="m-subheader ">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h3 className="m-subheader__title m-subheader__title--separator">
                    Portal
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
                        <span className="m-nav__link-text">List Portal</span>
                      </a>
                    </li>
                    <li className="m-nav__separator">-</li>
                  </ul>
                </div>

                {/*<jsp:include page="common/quick_actions.html"/>*/}
              </div>
            </div>

            {/*<!-- END: Subheader -->*/}
            <div className="m-content">
              <div className="m-portlet m-portlet--mobile">
                <div className="m-portlet__head">
                  <div className="m-portlet__head-caption">
                    <div className="m-portlet__head-title">
                      <h3 className="m-portlet__head-text">List Portal</h3>
                    </div>
                  </div>
                  <div className="m-portlet__head-tools">
                    <ul className="m-portlet__nav">
                      <li className="m-portlet__nav-item">
                        <div
                          className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push"
                          m-dropdown-toggle="hover"
                          aria-expanded="true"
                        >
                          <a
                            href="#"
                            className="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle"
                          >
                            <i className="la la-ellipsis-h m--font-brand"></i>
                          </a>
                          <div className="m-dropdown__wrapper">
                            <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                            <div className="m-dropdown__inner">
                              <div className="m-dropdown__body">
                                <div className="m-dropdown__content">
                                  <ul className="m-nav">
                                    <li className="m-nav__section m-nav__section--first">
                                      <span className="m-nav__section-text">
                                        Quick Actions
                                      </span>
                                    </li>
                                    <li className="m-nav__item">
                                      <a href="" className="m-nav__link">
                                        <i className="m-nav__link-icon flaticon-share"></i>
                                        <span className="m-nav__link-text">
                                          Create Post
                                        </span>
                                      </a>
                                    </li>
                                    <li className="m-nav__item">
                                      <a href="" className="m-nav__link">
                                        <i className="m-nav__link-icon flaticon-chat-1"></i>
                                        <span className="m-nav__link-text">
                                          Send Messages
                                        </span>
                                      </a>
                                    </li>
                                    <li className="m-nav__item">
                                      <a href="" className="m-nav__link">
                                        <i className="m-nav__link-icon flaticon-multimedia-2"></i>
                                        <span className="m-nav__link-text">
                                          Upload File
                                        </span>
                                      </a>
                                    </li>
                                    <li className="m-nav__section">
                                      <span className="m-nav__section-text">
                                        Useful Links
                                      </span>
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
                                    <li className="m-nav__separator m-nav__separator--fit m--hide"></li>
                                    <li className="m-nav__item m--hide">
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
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="m-portlet__body">
                  {/*<!--begin: Search Form -->*/}
                  <div className="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
                    <div className="row align-items-center">
                      <div className="col-xl-8 order-2 order-xl-1">
                        <div className="form-group m-form__group row align-items-center">
                          <div className="col-md-4">
                            <div className="m-form__group m-form__group--inline">
                              <div className="m-form__label">
                                <label>Status:</label>
                              </div>
                              <div className="m-form__control">
                                <select
                                  className="form-control m-bootstrap-select"
                                  id="m_form_status"
                                >
                                  <option value="">All</option>
                                  <option value="1">Disable</option>
                                  <option value="2">Enable</option>
                                </select>
                              </div>
                            </div>
                            <div className="d-md-none m--margin-bottom-10"></div>
                          </div>
                          <div className="col-md-4">
                            <div className="m-form__group m-form__group--inline">
                              <div className="m-form__label">
                                <label className="m-label m-label--single">
                                  Type:
                                </label>
                              </div>
                              <div className="m-form__control">
                                <select
                                  className="form-control m-bootstrap-select"
                                  id="m_form_type"
                                >
                                  <option value="">All</option>
                                  <option value="1">Online</option>
                                  <option value="2">Retail</option>
                                  <option value="3">Direct</option>
                                </select>
                              </div>
                            </div>
                            <div className="d-md-none m--margin-bottom-10"></div>
                          </div>
                          <div className="col-md-4">
                            <div className="m-input-icon m-input-icon--left">
                              <input
                                type="text"
                                className="form-control m-input"
                                placeholder="Search..."
                                id="generalSearch"
                              />
                              <span className="m-input-icon__icon m-input-icon__icon--left">
                                <span>
                                  <i className="la la-search"></i>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 order-1 order-xl-2 m--align-right">
                        <a
                          href="add_portal"
                          className="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill"
                        >
                          <span>
                            <i className="la la-user"></i>
                            <span>Add Portal</span>
                          </span>
                        </a>
                        <div className="m-separator m-separator--dashed d-xl-none"></div>
                      </div>
                    </div>
                  </div>

                  {/*<!--end: Search Form -->

								<!--begin: Datatable -->*/}

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

export default ListPortal;
