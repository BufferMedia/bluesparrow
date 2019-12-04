import React from "react";
import ListItemSearchBar from "./ListItemSearchbar";
import List from "./List";
import UserInfo from "./UserInfo";

export default function old(props){
    return (

        <div>
            <div className="m-grid m-grid--hor m-grid--root m-page">
                {/*<!-- BEGIN: Header -->*/}
                {this.props.header}
                {/*<!-- END: Header -->

                <!-- begin::Body -->*/}
                <div
                    className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body"
                    style={{paddingBottom: "10em"}}>
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
                                        Support
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
                                                <span className="m-nav__link-text">Request Support</span>
                                            </a>
                                        </li>
                                        <li className="m-nav__separator">-</li>
                                    </ul>
                                </div>
                                <div>
										<span
                                            className="m-subheader__daterange"
                                            id="m_dashboard_daterangepicker">
											<span className="m-subheader__daterange-label">
												<span className="m-subheader__daterange-title"></span>
												<span className="m-subheader__daterange-date m--font-brand"></span>
											</span>
											<a
                                                href="#"
                                                className="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
												<i className="la la-angle-down"></i>
											</a>
										</span>
                                </div>
                            </div>
                        </div>

                        {/*<!-- END: Subheader -->*/}
                        <div className="m-content">

                            {/*<!--begin::Portlet-->*/}
                            <div className="m-portlet m-portlet--mobile">
                                <div className="m-portlet__body">
                                    {/*<!--Read Mail start--> */}

                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">







                                                <div className="row">
                                                    {/*<!-- Left sidebar -->*/}
                                                    <div className="col-lg-3 col-md-4">
                                                        <a href="mail-compose.html"
                                                           className="btn btn-danger waves-effect waves-light btn-block">New
                                                            Mail</a>
                                                        <div className="card shadow-none mt-3">
                                                            <div className="list-group shadow-none">
                                                                <a href="javascript:void(0);"
                                                                   className="list-group-item active"><i
                                                                    className="fa fa-inbox mr-2"></i>Inbox <b>(12)</b></a>
                                                                <a href="javascript:void(0);"
                                                                   className="list-group-item"><i
                                                                    className="fa fa-star-o mr-2"></i>Starred</a>
                                                                <a href="javascript:void(0);"
                                                                   className="list-group-item"><i
                                                                    className="fa fa-file-text-o mr-2"></i>Draft <b>(10)</b></a>
                                                                <a href="javascript:void(0);"
                                                                   className="list-group-item"><i
                                                                    className="fa fa-paper-plane-o mr-2"></i>Sent
                                                                    Mail</a>
                                                                <a href="javascript:void(0);"
                                                                   className="list-group-item"><i
                                                                    className="fa fa-trash-o mr-2"></i>Trash <b>(320)</b></a>
                                                                <a href="javascript:void(0);"
                                                                   className="list-group-item"><i
                                                                    className="fa fa-bookmark mr-2"></i>Important <b>(5)</b></a>
                                                            </div>
                                                        </div>
                                                        <div className="card shadow-none mt-3">
                                                            <div className="list-group shadow-none">
                                                                <ul className="buddyOnline">
                                                                    <li><h4>Buddy online</h4></li>
                                                                    <li><a href="#"> <i
                                                                        className=" fa fa-circle text-success"></i> Jhone
                                                                        Doe <p>I do not think</p></a></li>
                                                                    <li><a href="#"> <i
                                                                        className=" fa fa-circle text-danger"></i> Sumon <p>Busy
                                                                        with coding</p></a></li>
                                                                    <li><a href="#"> <i
                                                                        className=" fa fa-circle text-muted "></i> Anjelina
                                                                        Joli <p>I out of control</p></a>
                                                                    </li>
                                                                    <li><a href="#"> <i
                                                                        className=" fa fa-circle text-muted "></i> Jonathan
                                                                        Smith <p>I am not here</p></a>
                                                                    </li>
                                                                    <li><a href="#"> <i
                                                                        className=" fa fa-circle text-muted "></i> Tawseef <p>I
                                                                        do not think</p></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*<!-- End Left sidebar -->*/}

                                                    {/*<!-- Right Sidebar -->*/}
                                                    <div className="col-lg-9 col-md-8">
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="btn-toolbar" role="toolbar">
                                                                    <div className="btn-group mr-1">
                                                                        <button type="button"
                                                                                className="btn btn-outline-primary waves-effect waves-light">
                                                                            <i className="fa fa-inbox"></i></button>
                                                                        <button type="button"
                                                                                className="btn btn-outline-primary waves-effect waves-light">
                                                                            <i className="fa fa-refresh"></i>
                                                                        </button>
                                                                        <button type="button"
                                                                                className="btn btn-outline-primary waves-effect waves-light">
                                                                            <i className="fa fa-trash-o"></i>
                                                                        </button>
                                                                    </div>
                                                                    <div className="btn-group mr-1">
                                                                        <button type="button"
                                                                                className="btn btn-outline-primary dropdown-toggle"
                                                                                data-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                            <i className="fa fa-folder"></i>
                                                                            <b className="caret"></b>
                                                                        </button>
                                                                        <div className="dropdown-menu">

                                                                        </div>
                                                                    </div>
                                                                    <div className="btn-group mr-1">
                                                                        <button type="button"
                                                                                className="btn btn-outline-primary waves-effect waves-light dropdown-toggle"
                                                                                data-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                            <i className="fa fa-tag"></i>
                                                                            <b className="caret"></b>
                                                                        </button>
                                                                        <div className="dropdown-menu">

                                                                        </div>
                                                                    </div>

                                                                    <div className="btn-group">
                                                                        <button type="button"
                                                                                className="btn btn-outline-primary waves-effect waves-light dropdown-toggle"
                                                                                data-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                            More
                                                                            <span className="caret"></span>
                                                                        </button>
                                                                        <div className="dropdown-menu">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">

                                                                <ListItemSearchBar />
                                                                <List />
                                                                <UserInfo />

                                                            </div>
                                                            {this.props.footer}
                                                        </div>

                                                    </div>
                                                </div>

















                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}