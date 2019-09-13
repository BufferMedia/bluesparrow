import React from 'react';
import {Redirect} from 'react-router-dom';
import * as jq from 'jquery';

class SideNavigation extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				<button className="m-aside-left-close m-aside-left-close--skin-dark" id="m_aside_left_close_btn"><i className="la la-close"></i>
				</button>
				<div id="m_aside_left" className="m-grid__item m-aside-left m-aside-left--skin-dark">

					{/*<!-- BEGIN: Aside Menu -->*/}
					<div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="1" m-menu-dropdown-timeout="500" style={{"position": "relative"}}>
						<ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
							<li className="m-menu__item  m-menu__item--active" aria-haspopup="true"><a href="#" className="m-menu__link "><i className="m-menu__link-icon flaticon-line-graph"></i><span className="m-menu__link-title"> <span className="m-menu__link-wrap"> <span className="m-menu__link-text">Dashboard</span>
								<span className="m-menu__link-badge"></span> </span></span></a></li>
							<li className="m-menu__section ">
								<h4 className="m-menu__section-text">MAIN</h4>
								<i className="m-menu__section-icon flaticon-more-v2"></i>
							</li>
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-layers"></i><span className="m-menu__link-text">Services</span><i
									 className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">Products</span></span></li>
										<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
												 className="m-menu__link-text">Product List</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
											<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
												<ul className="m-menu__subnav">
													<li className="m-menu__item " aria-haspopup="true"><a href="products_list.html" className="m-menu__link"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">EBook/Audiobook</span></a></li>
													<li className="m-menu__item " aria-haspopup="true"><a href="products_list.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Videos</span></a></li>
													<li className="m-menu__item " aria-haspopup="true"><a href="products_list.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Games</span></a></li>
													<li className="m-menu__item " aria-haspopup="true"><a href="products_list.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">HTML5</span></a></li>
													<li className="m-menu__item " aria-haspopup="true"><a href="products_list.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Applications</span></a></li>
												</ul>
											</div>
										</li>
										<li className="m-menu__item " aria-haspopup="true"><a href="add_service.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add New Product</span></a></li>
									</ul>
								</div>
							</li>
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-share"></i><span className="m-menu__link-text">Content</span><i
									 className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item " aria-haspopup="true"><a href="content_master_add" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add Content</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="content_category_add" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add Category</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="content_master_list" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">List Content</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="review_content" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Review</span></a></li>
										<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
												 className="m-menu__link-text">Banner</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
											<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
												<ul className="m-menu__subnav">
													<li className="m-menu__item" aria-haspopup="true"><a href="add_banner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add Banner</span></a></li>
													<li className="m-menu__item" aria-haspopup="true"><a href="list_banner.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">List Banner</span></a></li>
												</ul>
											</div>
										</li>	
									</ul>
								</div>
							</li>
							<li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" class="m-menu__link m-menu__toggle"><i class="m-menu__link-icon flaticon-layers"></i><span class="m-menu__link-text">Publisher</span><i
									 class="m-menu__ver-arrow la la-angle-right"></i></a>
								<div class="m-menu__submenu "><span class="m-menu__arrow"></span>
									<ul class="m-menu__subnav">
										<li class="m-menu__item " aria-haspopup="true"><a href="add_portal" class="m-menu__link "><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span class="m-menu__link-text">Create Portal</span></a></li>
										<li class="m-menu__item " aria-haspopup="true"><a href="list_portal" class="m-menu__link "><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span class="m-menu__link-text">List Portal</span></a></li>
										<li class="m-menu__item " aria-haspopup="true"><a href="content_portal_mapping" class="m-menu__link "><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span class="m-menu__link-text">Content Portal Mapping</span></a></li>
                                                                                
									</ul>
								</div>
							</li>
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-web"></i><span className="m-menu__link-text">Campaigns</span><i
									 className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item " aria-haspopup="true"><a href="campaign_add.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Create Campaign</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="campaign_list.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">View Campaigns</span></a></li>
									</ul>
								</div>
							</li>
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-interface-1"></i><span className="m-menu__link-text">Subscriber</span><i
									 className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item" aria-haspopup="true"><a href="subscriber_manage.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Manage Subcriber</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="subscriber_blacklist.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Blacklist</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="notification.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Notification</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="notification_add.html" className="m-menu__link "></a></li>
									</ul>
								</div>
							</li>
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-interface-6"></i><span className="m-menu__link-text">Billing</span><i
									 className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item " aria-haspopup="true"><a href="report.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Reports</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="orders.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Orders</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="coupon_list.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Coupons</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="account_privacy.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Account & Privacy</span></a></li>
										
										<li className="m-menu__item " aria-haspopup="true"><a href="subscription_plan.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Subscription Plans</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="subscription_plan_detail.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Subscription Details</span></a></li>
									</ul>
								</div>
							</li>
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-users"></i><span className="m-menu__link-text">User</span><i
									 className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item  m-menu__item--parent" aria-haspopup="true"><span className="m-menu__link"><span className="m-menu__link-text">User</span></span></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="add_user" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add User</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="list_user" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">List User</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="user_access" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">User Access</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="profile" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Profile</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="add_user_menu_mapping" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Privileges</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="#" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">View User Activity</span></a></li>
									</ul>
								</div>
							</li>
							<li className="m-menu__section ">
								<h4 className="m-menu__section-text">SETTINGS</h4>
								<i className="m-menu__section-icon flaticon-more-v2"></i>
							</li>
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-interface-7"></i><span className="m-menu__link-text">Customize </span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
								<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
												 className="m-menu__link-text">Menu</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
											<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
												<ul className="m-menu__subnav">
													<li className="m-menu__item " aria-haspopup="true"><a href="list_menu.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Menu Master</span></a></li>
													<li className="m-menu__item " aria-haspopup="true"><a href="add_menu.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add Menu Master</span></a></li>
													<li className="m-menu__item " aria-haspopup="true"><a href="list_menu_child.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Menu Child</span></a></li>
													<li className="m-menu__item " aria-haspopup="true"><a href="add_menu_child.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add Menu Child</span></a></li>
												</ul>
											</div>
										</li>
										<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
												 className="m-menu__link-text">Portals</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
											<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
												<ul className="m-menu__subnav">
													<li className="m-menu__item " aria-haspopup="true"><a href="add_list_content_portal.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add Content Portal</span></a></li>
													<li className="m-menu__item " aria-haspopup="true"><a href="portal_category_mapp.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">View Content Portal</span></a></li>
												</ul>
											</div>
										</li>
										<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" className="m-menu__link m-menu__toggle"><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
												 className="m-menu__link-text">Handset Profile</span><i className="m-menu__ver-arrow la la-angle-right"></i></a> 		<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
												<ul className="m-menu__subnav">
													<li className="m-menu__item " aria-haspopup="true"><a href="list_handset_profile.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Profile List</span></a></li>
													<li className="m-menu__item " aria-haspopup="true"><a href="add_handset.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add New Profile</span></a></li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
							<li className="m-menu__section ">
								<h4 className="m-menu__section-text">SUPPORT & HELP</h4>
								<i className="m-menu__section-icon flaticon-more-v2"></i>
							</li>
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="#" className="m-menu__link m-menu__toggle"><i className="m-menu__link-icon flaticon-interface-9"></i><span className="m-menu__link-text">FAQ</span><i className="m-menu__ver-arrow la la-angle-right"></i></a>
                                      <div className="m-menu__submenu "><span className="m-menu__arrow"></span>
												<ul className="m-menu__subnav">
													<li className="m-menu__item " aria-haspopup="true"><a href="faq_list.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Faq</span></a></li>
													 <li className="m-menu__item " aria-haspopup="true"><a href="faq_add.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Add Faq</span></a></li>
												</ul>
											</div>							
							            </li>
							    
							<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
								<a href="#" className="m-menu__link m-menu__toggle">
									<i className="m-menu__link-icon flaticon-piggy-bank"></i><span className="m-menu__link-text">Support</span><i className="m-menu__ver-arrow la la-angle-right"></i>
								</a>
							 	<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item " aria-haspopup="true"><a href="new_support.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Inbox</span></a></li>
										<li className="m-menu__item " aria-haspopup="true"><a href="user_support.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">help</span></a></li>
										 {/*<!--<li className="m-menu__item " aria-haspopup="true"><a href="mail_compose.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">New Email</span></a></li>
										 <li className="m-menu__item " aria-haspopup="true"><a href="mail_sent.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">History</span></a></li>
                                         <li className="m-menu__item " aria-haspopup="true"><a href="quick_support.html" className="m-menu__link "><i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Help</span></a></li>-->	*/}												 
									</ul>
								</div>	
				            </li>-->

				            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
								<a href="#" className="m-menu__link m-menu__toggle">
									<i className="m-menu__link-icon flaticon-piggy-bank"></i><span className="m-menu__link-text">Feedback Forum</span><i className="m-menu__ver-arrow la la-angle-right"></i>
								</a>
							 	<div className="m-menu__submenu "><span className="m-menu__arrow"></span>
									<ul className="m-menu__subnav">
										<li className="m-menu__item " aria-haspopup="true">
											<a href="#" className="m-menu__link ">
												<i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">Forums</span>
											</a>
										</li>
										<li className="m-menu__item " aria-haspopup="true">
											<a href="#" className="m-menu__link ">
												<i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span className="m-menu__link-text">New Forum</span>
											</a>
										</li>									 
									</ul>
								</div>	
				            </li>
						</ul>
					</div>

					{/*<!-- END: Aside Menu -->*/}
				</div>
			</div>
		)
	}
}

export default SideNavigation;