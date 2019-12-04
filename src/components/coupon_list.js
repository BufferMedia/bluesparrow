import React from "react";
import axios from "../axios";
import util from "../util";
import {MDBBtn, MDBDataTable, MDBTableBody, MDBTableHead, Row, Cols, Card, CardBody } from "mdbreact";

class CouponList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      couponList: []
    }
  }

  componentDidMount() {
    this.loadCoupon();
  }



  loadCoupon = async => {
    try {
      axios
        .get("coupon")
        .then(resp => {
          console.log(resp.data.data);
          this.setState({couponList: resp.data.data.map(coup => {
              return {
                id: coup.id,
                title: coup.title,
                code: coup.code,
                description: coup.description,
                amount: coup.amount,
                country: coup.country,
                currency: coup.currency,
                portal: util.serializeData(coup.portal),
                category: util.serializeData(coup.category),
                map_type: coup.map_type,
                subscription: coup.subscription,
                //MAP: <MDBBtn color="purple" outline size="">Button</MDBBtn>
                
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
          field: "id",
          width: 50
        },
        {
          label: "Title",
          field: "title",
          width: 100
        },
        {
          label: "Code",
          field: "code",
          width: 100
        },
        {
          label: "Amount",
          field: "amount",
          width: 100
        },
        {
          label: "Description",
          selector: "description",
          width: 200
        },
        {
          label: "Country",
          selector: "country",
          width: 100
        },
       
        {
          label: "Currency",
          selector: " currency",
          width: 100
        },
        {
          label: "Portal",
          selector: "portal",
          width: 100
        },
        {
          label: "Category",
          selector: "category",
          width: 270
        },
        {
          label: "Map Type",
          selector: "map_type",
          width: 100
        },
        {
          label: "Subscription",
          selector: "subscription",
          width: 100
        },
        
        {
          label: "Map",
          MAP: <MDBBtn color="purple" outline size="sm">Button</MDBBtn>
        }
      ],
      rows: this.state.couponList
    };
    return (
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
                          <span className="m-nav__link-text">Coupon list</span>
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
                        <h3 className="m-portlet__head-text">Coupon list</h3>
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
                                  <label>Portal:</label>
                                </div>
                                <div className="m-form__control">
                                  <select
                                    className="form-control m-bootstrap-select"
                                    id="m_form_status"
                                  >
                                    <option value="">All</option>
                                    <option value="1">Audebook</option>
                                    <option value="2">PlayCode</option>
                                    <option value="3">Muzik365</option>
                                  </select>
                                </div>
                              </div>
                              <div className="d-md-none m--margin-bottom-10"></div>
                            </div>
                            <div className="col-md-4">
                              <div className="m-form__group m-form__group--inline">
                                <div className="m-form__label">
                                  <label className="m-label m-label--single">
                                    Currency:
                                  </label>
                                </div>
                                <div className="m-form__control">
                                  <select
                                    className="form-control m-bootstrap-select"
                                    id="m_form_type"
                                  >
                                    <option value="">All</option>
                                    <option value="1">NGN</option>
                                    <option value="2">GHS</option>
                                    {/* <option value="3">OTHERS</option> */}
                                    
                                  </select>
                                </div>
                              </div>
                              <div className="d-md-none m--margin-bottom-10"></div>
                            </div>
                           {/*  <div className="col-md-4">
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
                            </div> */}
                          </div>
                        </div>
                        <div className="col-xl-4 order-1 order-xl-2 m--align-right">
                          <a
                            href="coupon_add"
                            className="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill"
                          >
                            <span>
                              <i className="la la-user"></i>
                              <span>Create Coupon</span>
                            </span>
                          </a>
                          <div className="m-separator m-separator--dashed d-xl-none"></div>
                        </div>
                      </div>
                    </div>

                    {/*<!--end: Search Form -->
                              
                            <!--begin: Datatable -->*/}
                    <div>
                          <MDBDataTable 
                                  scrollX
                                  striped
                                  bordered
                                  hover
                                  data={data}
                                    /> 
                                    
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
export default CouponList;
