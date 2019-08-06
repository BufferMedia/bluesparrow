import React, {Redirect} from 'react'

class Header extends React.Component{
	constructor(props){
		super(props)
	}

	logout(){
		window.localStorage.removeItem("Bearer")
        window.localStorage.removeItem("refresh")
        window.localStorage.removeItem("token_type")
        window.localStorage.removeItem("time_expires")
	}

	render(){
		return(
			<header id="m_header" className="m-grid__item m-header" m-minimize-offset="200" m-minimize-mobile-offset="200">
				<div className="m-container m-container--fluid m-container--full-height">
					<div className="m-stack m-stack--ver m-stack--desktop">

						{/*<!-- BEGIN: Brand -->*/}
						<div className="m-stack__item m-brand  m-brand--skin-dark ">
							<div className="m-stack m-stack--ver m-stack--general">
								<div className="m-stack__item m-stack__item--middle m-brand__logo">
									<a href="index.html" className="m-brand__logo-wrapper">
										<img alt="" src="assets/default/media/img/logo/logo-bs-2.png" />
									</a>
								</div>
								<div className="m-stack__item m-stack__item--middle m-brand__tools">

									{/*<!-- BEGIN: Left Aside Minimize Toggle -->*/}
									<a href="javascript:;" id="m_aside_left_minimize_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block  ">
										<span></span>
									</a>

									{/*<!-- END -->*/}

									{/*<!-- BEGIN: Responsive Aside Left Menu Toggler -->*/}
									<a href="javascript:;" id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
										<span></span>
									</a>

									{/*<!-- END -->*/}

									{/*<!-- BEGIN: Responsive Header Menu Toggler -->*/}
									<a id="m_aside_header_menu_mobile_toggle" href="javascript:;" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
										<span></span>
									</a>

									{/*<!-- END -->*/}

									{/*<!-- BEGIN: Topbar Toggler -->*/}
									<a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
										<i className="flaticon-more"> </i>
									</a>

									{/*<!-- BEGIN: Topbar Toggler -->*/}
								</div>
							</div>
						</div>

						{/*<!-- END: Brand -->*/}
						<div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">

							{/*<!-- BEGIN: Horizontal Menu -->*/}
							<button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn"><i className="la la-close"></i></button>
							<div id="m_header_menu" className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
								<ul className="m-menu__nav  m-menu__nav--submenu-arrow ">
									<li className="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="m-menu__link m-menu__toggle" title="Non functional dummy link"><i
											 className="m-menu__link-icon flaticon-add"></i><span className="m-menu__link-text">Actions</span><i className="m-menu__hor-arrow la la-angle-down"></i><i className="m-menu__ver-arrow la la-angle-right"></i></a>
										<div className="m-menu__submenu m-menu__submenu--classNameic m-menu__submenu--left"><span className="m-menu__arrow m-menu__arrow--adjust"></span>
											<ul className="m-menu__subnav">
												<li className="m-menu__item " aria-haspopup="true"><a href="content_master_add.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-file"></i><span className="m-menu__link-text">Add Content</span></a>
												</li>
												<li className="m-menu__item" aria-haspopup="true"><a href="#" className="m-menu__link "><i className="m-menu__link-icon flaticon-file"></i><span className="m-menu__link-text">Create Campaign</span></a>
												</li>
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="#" className="m-menu__link "><i className="m-menu__link-icon flaticon-users"></i><span className="m-menu__link-text">Add User</span></a>
												</li>
											</ul>
										</div>
									</li>
									<li className="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="m-menu__link m-menu__toggle" title="Non functional dummy link"><i
											 className="m-menu__link-icon flaticon-line-graph"></i><span className="m-menu__link-text">Reports</span><i className="m-menu__hor-arrow la la-angle-down"></i><i className="m-menu__ver-arrow la la-angle-right"></i></a>
																			<div className="m-menu__submenu m-menu__submenu--classNameic m-menu__submenu--left"><span className="m-menu__arrow m-menu__arrow--adjust"></span>
											<ul className="m-menu__subnav">
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="header/actions.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-business"></i><span className="m-menu__link-text">Subscription Report</span></a></li>
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="header/actions.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-map"></i><span className="m-menu__link-text">Service Revenue Report</span></a></li>
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="header/actions.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-map"></i><span className="m-menu__link-text">Variable Billing Report</span></a></li>
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="header/actions.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-signs-1"></i><span className="m-menu__link-text">Content Delivery Report</span></a></li>
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="header/actions.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-folder"></i><span className="m-menu__link-text">Service Summary Report</span></a></li>
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="header/actions.html" className="m-menu__link "><i className="m-menu__link-icon flaticon-cogwheel-2"></i><span className="m-menu__link-text">Service Detail Report</span></a>
												</li>
											</ul>
										</div>
									</li>
									<li className="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect="1" aria-haspopup="true"><a href="javascript:;" className="m-menu__link m-menu__toggle" title="Non functional dummy link"><i
											 className="m-menu__link-icon flaticon-paper-plane"></i><span className="m-menu__link-title"> <span className="m-menu__link-wrap"> <span className="m-menu__link-text">Apps</span> <span className="m-menu__link-badge"></span>
												</span></span><i className="m-menu__hor-arrow la la-angle-down"></i><i className="m-menu__ver-arrow la la-angle-right"></i></a>
										<div className="m-menu__submenu m-menu__submenu--classNameic m-menu__submenu--left"><span className="m-menu__arrow m-menu__arrow--adjust"></span>
											<ul className="m-menu__subnav">
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="#" className="m-menu__link "><i className="m-menu__link-icon flaticon-business"></i><span className="m-menu__link-text">Application1</span></a></li>
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="#" className="m-menu__link "><i className="m-menu__link-icon flaticon-map"></i><span className="m-menu__link-text">Application2</span></a></li>
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="#" className="m-menu__link "><i className="m-menu__link-icon flaticon-map"></i><span className="m-menu__link-text">Application3</span></a></li>
												<li className="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="#" className="m-menu__link "><i className="m-menu__link-icon flaticon-map"></i><span className="m-menu__link-text">Application4</span></a></li>

											</ul>
										</div>
									</li>
								</ul>
							</div>

							{/*<!-- END: Horizontal Menu -->*/}

							{/*<!-- BEGIN: Topbar -->*/}
							<div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general m-stack--fluid">
								<div className="m-stack__item m-topbar__nav-wrapper">
									<ul className="m-topbar__nav m-nav m-nav--inline">
										<li className="m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light	m-list-search m-list-search--skin-light" m-dropdown-toggle="click" id="m_quicksearch"
										 m-quicksearch-mode="dropdown" m-dropdown-persistent="1">
											<a href="#" className="m-nav__link m-dropdown__toggle">
												<span className="m-nav__link-icon"><i className="flaticon-search-1"></i></span>
											</a>
											<div className="m-dropdown__wrapper">
												<span className="m-dropdown__arrow m-dropdown__arrow--center"></span>
												<div className="m-dropdown__inner ">
													<div className="m-dropdown__header">
														<form className="m-list-search__form">
															<div className="m-list-search__form-wrapper">
																<span className="m-list-search__form-input-wrapper">
																	<input id="m_quicksearch_input" autoComplete="off" type="text" name="q" className="m-list-search__form-input" placeholder="Search..." />
																</span>
																<span className="m-list-search__form-icon-close" id="m_quicksearch_close">
																	<i className="la la-remove"></i>
																</span>
															</div>
														</form>
													</div>
													<div className="m-dropdown__body">
														<div className="m-dropdown__scrollable m-scrollable" data-scrollable="true" data-height="300" data-mobile-height="200">
															<div className="m-dropdown__content">
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width" m-dropdown-toggle="click"
										 m-dropdown-persistent="1">
											<a href="#" className="m-nav__link m-dropdown__toggle" id="m_topbar_notification_icon">
												<span className="m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger"></span>
												<span className="m-nav__link-icon"><i className="flaticon-alarm"></i></span>
											</a>
											<div className="m-dropdown__wrapper">
												<span className="m-dropdown__arrow m-dropdown__arrow--center"></span>
												<div className="m-dropdown__inner">
													<div className="m-dropdown__header m--align-center" style={{"background": `url(assets/app/media/img/misc/notification_bg.jpg)`, "backgroundSize":"cover"}}>
														<span className="m-dropdown__header-title">9 New</span>
														<span className="m-dropdown__header-subtitle">User Notifications</span>
													</div>
													<div className="m-dropdown__body">
														<div className="m-dropdown__content">
															<ul className="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
																<li className="nav-item m-tabs__item">
																	<a className="nav-link m-tabs__link active" data-toggle="tab" href="#topbar_notifications_notifications" role="tab">
																		Alerts
																	</a>
																</li>
																<li className="nav-item m-tabs__item">
																	<a className="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_events" role="tab">Events</a>
																</li>
																<li className="nav-item m-tabs__item">
																	<a className="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_logs" role="tab">Logs</a>
																</li>
															</ul>
															<div className="tab-content">
																<div className="tab-pane active" id="topbar_notifications_notifications" role="tabpanel">
																	<div className="m-scrollable" data-scrollable="true" data-height="250" data-mobile-height="200">
																		<div className="m-list-timeline m-list-timeline--skin-light">
																			<div className="m-list-timeline__items">
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge -m-list-timeline__badge--state-success"></span>
																					<span className="m-list-timeline__text">12 new users registered</span>
																					<span className="m-list-timeline__time">Just now</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge"></span>
																					<span className="m-list-timeline__text">System shutdown <span className="m-badge m-badge--success m-badge--wide">pending</span></span>
																					<span className="m-list-timeline__time">14 mins</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge"></span>
																					<span className="m-list-timeline__text">New invoice received</span>
																					<span className="m-list-timeline__time">20 mins</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge"></span>
																					<span className="m-list-timeline__text">DB overloaded 80% <span className="m-badge m-badge--info m-badge--wide">settled</span></span>
																					<span className="m-list-timeline__time">1 hr</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge"></span>
																					<span className="m-list-timeline__text">System error - <a href="#" className="m-link">Check</a></span>
																					<span className="m-list-timeline__time">2 hrs</span>
																				</div>
																				<div className="m-list-timeline__item m-list-timeline__item--read">
																					<span className="m-list-timeline__badge"></span>
																					<span href="" className="m-list-timeline__text">New order received <span className="m-badge m-badge--danger m-badge--wide">urgent</span></span>
																					<span className="m-list-timeline__time">7 hrs</span>
																				</div>
																				<div className="m-list-timeline__item m-list-timeline__item--read">
																					<span className="m-list-timeline__badge"></span>
																					<span className="m-list-timeline__text">Production server down</span>
																					<span className="m-list-timeline__time">3 hrs</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge"></span>
																					<span className="m-list-timeline__text">Production server up</span>
																					<span className="m-list-timeline__time">5 hrs</span>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
																	<div className="m-scrollable" data-scrollable="true" data-height="250" data-mobile-height="200">
																		<div className="m-list-timeline m-list-timeline--skin-light">
																			<div className="m-list-timeline__items">
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge m-list-timeline__badge--state1-success"></span>
																					<a href="" className="m-list-timeline__text">New order received</a>
																					<span className="m-list-timeline__time">Just now</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge m-list-timeline__badge--state1-danger"></span>
																					<a href="" className="m-list-timeline__text">New invoice received</a>
																					<span className="m-list-timeline__time">20 mins</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge m-list-timeline__badge--state1-success"></span>
																					<a href="" className="m-list-timeline__text">Production server up</a>
																					<span className="m-list-timeline__time">5 hrs</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge m-list-timeline__badge--state1-info"></span>
																					<a href="" className="m-list-timeline__text">New order received</a>
																					<span className="m-list-timeline__time">7 hrs</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge m-list-timeline__badge--state1-info"></span>
																					<a href="" className="m-list-timeline__text">System shutdown</a>
																					<span className="m-list-timeline__time">11 mins</span>
																				</div>
																				<div className="m-list-timeline__item">
																					<span className="m-list-timeline__badge m-list-timeline__badge--state1-info"></span>
																					<a href="" className="m-list-timeline__text">Production server down</a>
																					<span className="m-list-timeline__time">3 hrs</span>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
																	<div className="m-stack m-stack--ver m-stack--general" style={{"minHeight":"180px"}}>
																		<div className="m-stack__item m-stack__item--center m-stack__item--middle">
																			<span className="">All caught up!<br/>No new logs.</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light"
										 m-dropdown-toggle="click">
											<a href="#" className="m-nav__link m-dropdown__toggle">
												<span className="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
												<span className="m-nav__link-icon"><i className="flaticon-share"></i></span>
											</a>
											<div className="m-dropdown__wrapper">
												<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
												<div className="m-dropdown__inner">
													<div className="m-dropdown__header m--align-center" style={{"backgroundImage":`url(assets/app/media/img/misc/quick_actions_bg.jpg)`,"backgroundSize":"cover"}}>
														<span className="m-dropdown__header-title">Quick Actions</span>
														<span className="m-dropdown__header-subtitle">Shortcuts</span>
													</div>
													<div className="m-dropdown__body m-dropdown__body--paddingless">
														<div className="m-dropdown__content">
															<div className="data" data="false" data-height="380" data-mobile-height="200">
																<div className="m-nav-grid m-nav-grid--skin-light">
																	<div className="m-nav-grid__row">
																		<a href="#" className="m-nav-grid__item">
																			<i className="m-nav-grid__icon flaticon-file"></i>
																			<span className="m-nav-grid__text">Generate Report</span>
																		</a>
																		<a href="#" className="m-nav-grid__item">
																			<i className="m-nav-grid__icon flaticon-time"></i>
																			<span className="m-nav-grid__text">Add New Event</span>
																		</a>
																	</div>
																	<div className="m-nav-grid__row">
																		<a href="#" className="m-nav-grid__item">
																			<i className="m-nav-grid__icon flaticon-folder"></i>
																			<span className="m-nav-grid__text">Create New Task</span>
																		</a>
																		<a href="#" className="m-nav-grid__item">
																			<i className="m-nav-grid__icon flaticon-clipboard"></i>
																			<span className="m-nav-grid__text">Completed Tasks</span>
																		</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="m-nav__item m-topbar__languages m-dropdown m-dropdown--small m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--mobile-full-width" m-dropdown-toggle="click">
											<a href="#" className="m-nav__link m-dropdown__toggle">
												<span className="m-nav__link-text">
													<img className="m-topbar__language-selected-img" src="assets/app/media/img/flags/020-flag.svg"/>
												</span>
											</a>
											<div className="m-dropdown__wrapper">
												<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
												<div className="m-dropdown__inner">
													<div className="m-dropdown__header m--align-center" style={{"background":`url('assets/app/media/img/misc/quick_actions_bg.jpg')`,"backgroundSize":"cover"}}>
														<span className="m-dropdown__header-subtitle">Select your language</span>
													</div>
													<div className="m-dropdown__body">
														<div className="m-dropdown__content">
															<ul className="m-nav m-nav--skin-light">
																<li className="m-nav__item m-nav__item--active">
																	<a href="#" className="m-nav__link m-nav__link--active">
																		<span className="m-nav__link-icon"><img className="m-topbar__language-img" src="assets/app/media/img/flags/020-flag.svg"/></span>
																		<span className="m-nav__link-title m-topbar__language-text m-nav__link-text">USA</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="#" className="m-nav__link">
																		<span className="m-nav__link-icon">
																		<img className="m-topbar__language-img" src="assets/app/media/img/flags/015-china.svg"/></span>
																		<span className="m-nav__link-title m-topbar__language-text m-nav__link-text">China</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="#" className="m-nav__link">
																		<span className="m-nav__link-icon">
																		<img className="m-topbar__language-img" src="assets/app/media/img/flags/016-spain.svg"/></span>
																		<span className="m-nav__link-title m-topbar__language-text m-nav__link-text">Spain</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="#" className="m-nav__link">
																		<span className="m-nav__link-icon">
																		<img className="m-topbar__language-img" src="assets/app/media/img/flags/014-japan.svg"/></span>
																		<span className="m-nav__link-title m-topbar__language-text m-nav__link-text">Japan</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="#" className="m-nav__link">
																		<span className="m-nav__link-icon"><img className="m-topbar__language-img" src="assets/app/media/img/flags/017-germany.svg"/></span>
																		<span className="m-nav__link-title m-topbar__language-text m-nav__link-text">Germany</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light"
										 m-dropdown-toggle="click">
											<a href="#" className="m-nav__link m-dropdown__toggle">
												<span className="m-topbar__userpic">
													<img src="assets/app/media/img/users/user4.jpg" className="m--img-rounded m--marginless" alt="" />
												</span>
												<span className="m-topbar__username m--hide">Nick</span>
											</a>
											<div className="m-dropdown__wrapper">
												<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
												<div className="m-dropdown__inner">
													<div className="m-dropdown__header m--align-center" style={{"background": `url(assets/app/media/img/misc/user_profile_bg.jpg)`, "backgroundSize":"cover"}}>
														<div className="m-card-user m-card-user--skin-dark">
															<div className="m-card-user__pic">
																<img src="assets/app/media/img/users/user4.jpg" className="m--img-rounded m--marginless" alt="" />

																{/*<!--
						<span className="m-type m-type--lg m--bg-danger"><span className="m--font-light">S<span><span>
						-->*/}
															</div>
															<div className="m-card-user__details">
																<span className="m-card-user__name m--font-weight-500">Mark Andre</span>
																<a href="" className="m-card-user__email m--font-weight-300 m-link">mark.andre@gmail.com</a>
															</div>
														</div>
													</div>
													<div className="m-dropdown__body">
														<div className="m-dropdown__content">
															<ul className="m-nav m-nav--skin-light">
																<li className="m-nav__section m--hide">
																	<span className="m-nav__section-text">Section</span>
																</li>
																<li className="m-nav__item">
																	<a href="profile.html" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-profile-1"></i>
																		<span className="m-nav__link-title">
																			<span className="m-nav__link-wrap">
																				<span className="m-nav__link-text">My Profile</span>
																				<span className="m-nav__link-badge"><span className="m-badge m-badge--success">2</span></span>
																			</span>
																		</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="profile.html" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-share"></i>
																		<span className="m-nav__link-text">Activity</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="profile.html" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-chat-1"></i>
																		<span className="m-nav__link-text">Messages</span>
																	</a>
																</li>
																<li className="m-nav__separator m-nav__separator--fit">
																</li>
																<li className="m-nav__item">
																	<a href="profile.html" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-info"></i>
																		<span className="m-nav__link-text">FAQ</span>
																	</a>
																</li>
																<li className="m-nav__item">
																	<a href="profile.html" className="m-nav__link">
																		<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																		<span className="m-nav__link-text">Support</span>
																	</a>
																</li>
																<li className="m-nav__separator m-nav__separator--fit">
																</li>
																<li className="m-nav__item">
																	<a href="#" className="btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder" onClick={()=>{
																		this.logout();
																		return window.location.href = "/"
																	}}>Logout</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li id="m_quick_sidebar_toggle" className="m-nav__item">
											<a href="#" className="m-nav__link m-dropdown__toggle">
												<span className="m-nav__link-icon"><i className="flaticon-grid-menu"></i></span>
											</a>
										</li>
									</ul>
								</div>
							</div>

							{/*<!-- END: Topbar -->*/}
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;