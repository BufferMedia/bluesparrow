import React from 'react'


class Support extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
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
                                            id="m_dashboard_daterangepicker"
                                        >
											<span className="m-subheader__daterange-label">
												<span className="m-subheader__daterange-title"></span>
												<span className="m-subheader__daterange-date m--font-brand"></span>
											</span>
											<a
                                                href="#"
                                                className="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill"
                                            >
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
                                                                    <div className="position-relative has-icon-right">
                                                                        <input type="text" className="form-control"
                                                                               placeholder="search mail"/>
                                                                        <div className="form-control-position">
                                                                            <i className="fa fa-search text-info"></i>
                                                                        </div>

                                                                    </div>

                                                                    {/*<!-- End row -->*/}
                                                                    <div
                                                                        className="card shadow-none mt-3 border border-light">
                                                                        <div className="card-body">
                                                                            <div className="media mb-3">
                                                                                <img
                                                                                    src="http://bootdey.com/img/Content/avatar/avatar1.png"
                                                                                    className="rounded-circle mr-3 mail-img shadow"
                                                                                    alt="media image" width="100"
                                                                                    height="100"/>
                                                                                <div className="media-body">
                                                                                        <span
                                                                                            className="media-meta float-right">08:22 AM</span>
                                                                                    <h4 className="text-primary m-0">Jhon
                                                                                        Deo</h4>
                                                                                    <small className="text-muted">From :
                                                                                        info@example.com</small>
                                                                                </div>
                                                                            </div>
                                                                            {/*<!-- media -->*/}

                                                                            <p><b>Hi Sir...</b></p>
                                                                            <p>Lorem ipsum dolor sit amet, consectetuer
                                                                                adipiscing elit. Aenean commodo ligula
                                                                                eget dolor. Aenean massa. Cum sociis
                                                                                natoque penatibus et magnis dis
                                                                                parturient montes, nascetur ridiculus
                                                                                mus. Donec quam felis, ultricies nec,
                                                                                pellentesque eu, pretium quis, sem.</p>
                                                                            <p>Aenean vulputate eleifend tellus. Aenean
                                                                                leo ligula, porttitor eu, consequat
                                                                                vitae, eleifend ac, enim. Aliquam lorem
                                                                                ante, dapibus in, viverra quis, feugiat
                                                                                a, tellus. Phasellus viverra nulla ut
                                                                                metus varius laoreet. Quisque rutrum.
                                                                                Aenean imperdiet. Etiam ultricies nisi
                                                                                vel augue. Curabitur ullamcorper
                                                                                ultricies nisi. Nam eget dui. Etiam
                                                                                rhoncus. Maecenas tempus, tellus eget
                                                                                condimentum rhoncus, sem quam semper
                                                                                libero, sit amet adipiscing sem neque
                                                                                sed ipsum. Nam quam nunc, blandit vel,
                                                                                luctus pulvinar,</p>
                                                                            <p>Nulla consequat massa quis enim. Donec
                                                                                pede justo, fringilla vel, aliquet nec,
                                                                                vulputate eget, arcu. In enim justo,
                                                                                rhoncus ut, imperdiet a, venenatis
                                                                                vitae, justo. Nullam dictum felis eu
                                                                                pede mollis pretium. Integer tincidunt.
                                                                                Cras dapibus. Vivamus elementum semper
                                                                                nisi.</p>

                                                                            <hr/>
                                                                            <h4><i
                                                                                className="fa fa-paperclip mr-2"></i> Attachments <span>(3)</span>
                                                                            </h4>
                                                                            <div className="row">
                                                                                <div className="col-sm-4 col-md-3">
                                                                                    <a href="javascript:void(0);">
                                                                                        <img
                                                                                            src="http://bootdey.com/img/Content/avatar/avatar6.png"
                                                                                            alt="attachment"
                                                                                            className="img-thumbnail"/>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="col-sm-4 col-md-3">
                                                                                    <a href="javascript:void(0);">
                                                                                        <img
                                                                                            src="http://bootdey.com/img/Content/avatar/avatar2.png"
                                                                                            alt="attachment"
                                                                                            className="img-thumbnail"/>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="col-sm-4 col-md-3">
                                                                                    <a href="javascript:void(0);">
                                                                                        <img
                                                                                            src="http://bootdey.com/img/Content/avatar/avatar3.png"
                                                                                            alt="attachment"
                                                                                            className="img-thumbnail"/>
                                                                                    </a>
                                                                                </div>
                                                                            </div>

                                                                            <div className="media mt-3">
                                                                                <a href="javascript:void(0);"
                                                                                   className="media-left">
                                                                                    <img alt=""
                                                                                         src="http://bootdey.com/img/Content/avatar/avatar1.png"
                                                                                         width="50" height="50"/>
                                                                                </a>
                                                                                <div className="media-body">
                                                                                        <textarea
                                                                                            className="wysihtml5 form-control"
                                                                                            rows="9"
                                                                                            placeholder="Reply here..."></textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div className="text-right">
                                                                                <button type="button"
                                                                                        className="btn btn-primary waves-effect waves-light mt-3">
                                                                                    <i className="fa fa-send mr-1"></i> Send
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/*<!-- card -->*/}
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


        )
    }

}


export default Support;
