import React from 'react'
import axios from '../axios'


class Dashboard extends React.Component{
	constructor(props){
		super(props)
	}


    componentDidMount(){
        axios.get(`content-types`)
        .then(res =>{
			axios.setCookie('content_types', JSON.stringify(res.data.data.data))
        })
        .catch(err =>{
            console.log(err)
		})
		
		//getting and keeping all categories
		axios.get(`categories`)
        .then(res =>{
			axios.setCookie('content_category', JSON.stringify(res.data.data))
        }).catch(err =>{
            console.log(err)
		})
		
		//getting and keeping all portals
		axios.get(`portals/paginate`)
        .then(res =>{
			axios.setCookie('portals', JSON.stringify(res.data.data))
        }).catch(err =>{
            console.log(err)
		})

		//getting and keeping all portals
		axios.get(`metadata`)
        .then(res =>{
			axios.setCookie('metadata', JSON.stringify(res.data.data.metadatas))
        }).catch(err =>{
            console.log(err)
		})  

		//getting and keeping all features
		axios.get(`features`)
        .then(resp =>{
			axios.setCookie('features', JSON.stringify(resp.data.data.features))
        }).catch(err =>{
            console.log(err)
		})  
    }
npm 
	render(){
		return(
			<div>
			<div className="row">
				<div className="col-xl-4">

					{/*<!--begin:: Widgets/Blog-->*/}
					<div className="m-portlet m-portlet--head-overlay m-portlet--full-height  m-portlet--rounded-force">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text m--font-light">
										CP Income
										<div style={{"position":"absolute", "top":"60px", "textAlign":"right", "width":"100%", "left":"0", "padding": "20px"}}>
											<select className="form-control" style={{"background":"transparent", "color":"#fff"}}>
												<option>Select Content provider</option>
												<option>Oladejo Ayo</option>
												<option>Ewurum Augustine</option>
												<option>Adedayo</option>
											</select>
										</div>
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover">
										<a href="#" className="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill m-btn btn-outline-light m-btn--hover-light">
											2018
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__section m-nav__section--first">
																<span className="m-nav__section-text">Year</span>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<span className="m-nav__link-text">2019</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<span className="m-nav__link-text">2018</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<span className="m-nav__link-text">2017</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<span className="m-nav__link-text">2016</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						
						<div className="m-portlet__body">
							<div className="m-widget27 m-portlet-fit--sides">
								<div className="m-widget27__pic">
									<img src="assets/app/media/img//bg/bg-4.jpg" alt=""/>
									<h3 className="m-widget27__title m--font-light">
										<span><span>$</span>256,100</span>
									</h3>
									<div className="m-widget27__btn">
										<button type="button" className="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--bolder">Inclusive All Earnings</button>
									</div>
								</div>
								<div className="m-widget27__container">

									{/*<!-- begin::Nav pills -->*/}
									<ul className="m-widget27__nav-items nav nav-pills nav-fill" role="tablist">
										<li className="m-widget27__nav-item nav-item">
											<a className="nav-link active" data-toggle="pill" href="#m_personal_income_quater_1">Quater 1</a>
										</li>
										<li className="m-widget27__nav-item nav-item">
											<a className="nav-link" data-toggle="pill" href="#m_personal_income_quater_2">Quater 2</a>
										</li>
										<li className="m-widget27__nav-item nav-item">
											<a className="nav-link" data-toggle="pill" href="#m_personal_income_quater_3">Quater 3</a>
										</li>
										<li className="m-widget27__nav-item nav-item">
											<a className="nav-link" data-toggle="pill" href="#m_personal_income_quater_4">Quater 4</a>
										</li>
									</ul>

									{/*<!-- end::Nav pills -->

									<!-- begin::Tab Content -->*/}
									<div className="m-widget27__tab tab-content m-widget27--no-padding">
										<div id="m_personal_income_quater_1" className="tab-pane active">
											<div className="row  align-items-center">
												<div className="col">
													<div id="m_chart_personal_income_quater_1" className="m-widget27__chart" style={{"height": "160px"}}>
														<div className="m-widget27__stat">37</div>
													</div>
												</div>
												<div className="col">
													<div className="m-widget27__legends">
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-accent"></span>
															<span className="m-widget27__legend-text">37% Case</span>
														</div>
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-warning"></span>
															<span className="m-widget27__legend-text">42% Events</span>
														</div>
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-brand"></span>
															<span className="m-widget27__legend-text">19% Others</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="m_personal_income_quater_2" className="tab-pane fade">
											<div className="row  align-items-center">
												<div className="col">
													<div id="m_chart_personal_income_quater_2" className="m-widget27__chart" style={{"height":"160px"}}>
														<div className="m-widget27__stat">70</div>
													</div>
												</div>
												<div className="col">
													<div className="m-widget27__legends">
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-focus"></span>
															<span className="m-widget27__legend-text">57% Case</span>
														</div>
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-success"></span>
															<span className="m-widget27__legend-text">20% Events</span>
														</div>
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-danger"></span>
															<span className="m-widget27__legend-text">19% Others</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="m_personal_income_quater_3" className="tab-pane fade">
											<div className="row  align-items-center">
												<div className="col">
													<div id="m_chart_personal_income_quater_3" className="m-widget27__chart" style={{"height": "160px"}}>
														<div className="m-widget27__stat">67</div>
													</div>
												</div>
												<div className="col">
													<div className="m-widget27__legends">
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-info"></span>
															<span className="m-widget27__legend-text">47% Case</span>
														</div>
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-danger"></span>
															<span className="m-widget27__legend-text">55% Events</span>
														</div>
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-brand"></span>
															<span className="m-widget27__legend-text">27% Others</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="m_personal_income_quater_4" className="tab-pane fade">
											<div className="row  align-items-center">
												<div className="col">
													<div id="m_chart_personal_income_quater_4" className="m-widget27__chart" style={{"height": "160px"}}>
														<div className="m-widget27__stat">77</div>
													</div>
												</div>
												<div className="col">
													<div className="m-widget27__legends">
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-warning"></span>
															<span className="m-widget27__legend-text">37% Case</span>
														</div>
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-primary"></span>
															<span className="m-widget27__legend-text">65% Events</span>
														</div>
														<div className="m-widget27__legend">
															<span className="m-widget27__legend-bullet m--bg-danger"></span>
															<span className="m-widget27__legend-text">33% Others</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/*<!-- end::Tab Content -->*/}
								</div>
							</div>
						</div>
					</div>

					{/*<!--end:: Widgets/Blog-->*/}
				</div>
				<div className="col-xl-4">

					{/*<!--begin:: Widgets/Blog-->*/}
					<div className="m-portlet m-portlet--head-overlay m-portlet--full-height   m-portlet--rounded-force">
						<div className="m-portlet__head m-portlet__head--fit">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text m--font-light">
										Finance Stats
									</h3>
								</div>
							</div>
							
						</div>
						<div className="m-portlet__body">
							<div className="m-widget28">
								<div className="m-widget28__pic m-portlet-fit--sides"></div>
								<div className="m-widget28__container">

									{/*<!-- begin::Nav pills -->*/}
									<ul className="m-widget28__nav-items nav nav-pills nav-fill" role="tablist">
										<li className="m-widget28__nav-item nav-item">
											<a className="nav-link active" data-toggle="pill" href="#menu11"><span><i className="fa flaticon-pie-chart"></i></span><span>GMI Taxes</span></a>
										</li>
										<li className="m-widget28__nav-item nav-item">
											<a className="nav-link" data-toggle="pill" href="#menu21"><span><i className="fa flaticon-file-1"></i></span><span>IMT Invoice</span></a>
										</li>
										<li className="m-widget28__nav-item nav-item">
											<a className="nav-link" data-toggle="pill" href="#menu31"><span><i className="fa flaticon-clipboard"></i></span><span>Main Notes</span></a>
										</li>
									</ul>

									{/*<!-- end::Nav pills -->

									<!-- begin::Tab Content -->*/}
									<div className="m-widget28__tab tab-content">
										<div id="menu11" className="m-widget28__tab-container tab-pane active">
											<div className="m-widget28__tab-items">
												<div className="m-widget28__tab-item">
													<span>Company Name</span>
													<span>SLT Back-end Solutions</span>
												</div>
												<div className="m-widget28__tab-item">
													<span>INE Number</span>
													<span>D330-1234562546</span>
												</div>
												<div className="m-widget28__tab-item">
													<span>Total Charges</span>
													<span>USD 1,250.000</span>
												</div>
												<div className="m-widget28__tab-item">
													<span>Project Description</span>
													<span>Creating Back-end Components</span>
												</div>
											</div>
										</div>
										<div id="menu21" className="m-widget28__tab-container tab-pane fade">
											<div className="m-widget28__tab-items">
												<div className="m-widget28__tab-item">
													<span>Project Description</span>
													<span>Back-End Web Architecture</span>
												</div>
												<div className="m-widget28__tab-item">
													<span>Total Charges</span>
													<span>USD 2,170.000</span>
												</div>
												<div className="m-widget28__tab-item">
													<span>INE Number</span>
													<span>D110-1234562546</span>
												</div>
												<div className="m-widget28__tab-item">
													<span>Company Name</span>
													<span>SLT Back-end Solutions</span>
												</div>
											</div>
										</div>
										<div id="menu31" className="m-widget28__tab-container tab-pane fade">
											<div className="m-widget28__tab-items">
												<div className="m-widget28__tab-item">
													<span>Total Charges</span>
													<span>USD 3,450.000</span>
												</div>
												<div className="m-widget28__tab-item">
													<span>Project Description</span>
													<span>Creating Back-end Components</span>
												</div>
												<div className="m-widget28__tab-item">
													<span>Company Name</span>
													<span>SLT Back-end Solutions</span>
												</div>
												<div className="m-widget28__tab-item">
													<span>INE Number</span>
													<span>D510-7431562548</span>
												</div>
											</div>
										</div>
									</div>

									{/*<!-- end::Tab Content -->*/}
								</div>
							</div>
						</div>
					</div>

					{/*<!--end:: Widgets/Blog-->*/}
				</div>
				<div className="col-xl-4">

					{/*<!--begin:: Packages-->*/}
					<div className="m-portlet m--bg-warning m-portlet--bordered-semi m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text m--font-light">
										Packages
									</h3>
								</div>
							</div>
							
						</div>
						<div className="m-portlet__body">

							{/*<!--begin::Widget 29-->*/}
							<div className="m-widget29">
								<div className="m-widget_content">
									<h3 className="m-widget_content-title">Monthly Income</h3>
									<div className="m-widget_content-items">
										<div className="m-widget_content-item">
											<span>Total</span>
											<span className="m--font-accent">$680</span>
										</div>
										<div className="m-widget_content-item">
											<span>Change</span>
											<span className="m--font-brand">+15%</span>
										</div>
										<div className="m-widget_content-item">
											<span>Contents</span>
											<span>29</span>
										</div>
									</div>
								</div>
								<div className="m-widget_content">
									<h3 className="m-widget_content-title">Taxes info</h3>
									<div className="m-widget_content-items">
										<div className="m-widget_content-item">
											<span>Total</span>
											<span className="m--font-accent">22.50</span>
										</div>
										<div className="m-widget_content-item">
											<span>Change</span>
											<span className="m--font-brand">+15%</span>
										</div>
										<div className="m-widget_content-item">
											<span>Count</span>
											<span>701</span>
										</div>
									</div>
								</div>
								<div className="m-widget_content">
									<h3 className="m-widget_content-title">Partners Sale</h3>
									<div className="m-widget_content-items">
										<div className="m-widget_content-item">
											<span>Total</span>
											<span className="m--font-accent">$680</span>
										</div>
										<div className="m-widget_content-item">
											<span>Change</span>
											<span className="m--font-brand">+15%</span>
										</div>
										<div className="m-widget_content-item">
											<span>Contents</span>
											<span>29</span>
										</div>
									</div>
								</div>
							</div>

							{/*<!--end::Widget 29-->*/}
						</div>
					</div>

					{/*<!--end:: Packages-->*/}
				</div>
			</div>

			{/*<!--End::Section-->

			<!--Begin::Section-->*/}
			<div className="row">
				<div className="col-xl-6">

					{/*<!--begin:: Widgets/Tasks -->*/}
					<div className="m-portlet m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Tasks
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm" role="tablist">
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_widget2_tab1_content" role="tab">
											Today
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget2_tab2_content1" role="tab">
											Week
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget2_tab3_content1" role="tab">
											Month
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="tab-content">
								<div className="tab-pane active" id="m_widget2_tab1_content">
									<div className="m-widget2">
										<div className="m-widget2__item m-widget2__item--primary">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox"/>
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Make Metronic Great Again.Lorem Ipsum Amet
												</span><br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Bob
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">Activity</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">Messages</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">FAQ</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">Support</span>
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
										<div className="m-widget2__item m-widget2__item--warning">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox"/>
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Prepare Docs For Metting On Monday
												</span><br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Sean
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">Activity</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">Messages</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">FAQ</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">Support</span>
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
										<div className="m-widget2__item m-widget2__item--brand">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox"/>
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Make Widgets Great Again.Estudiat Communy Elit
												</span><br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Aziko
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">Activity</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">Messages</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">FAQ</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">Support</span>
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
										<div className="m-widget2__item m-widget2__item--success">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox"/>
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Make Metronic Great Again.Lorem Ipsum
												</span><br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By James
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">Activity</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">Messages</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">FAQ</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">Support</span>
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
										<div className="m-widget2__item m-widget2__item--danger">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox"/>
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Completa Financial Report For Emirates Airlines
												</span><br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Bob
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">Activity</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">Messages</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">FAQ</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">Support</span>
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
										<div className="m-widget2__item m-widget2__item--info">
											<div className="m-widget2__checkbox">
												<label className="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input type="checkbox"/>
													<span></span>
												</label>
											</div>
											<div className="m-widget2__desc">
												<span className="m-widget2__text">
													Completa Financial Report For Emirates Airlines
												</span><br/>
												<span className="m-widget2__user-name">
													<a href="#" className="m-widget2__link">
														By Sean
													</a>
												</span>
											</div>
											<div className="m-widget2__actions">
												<div className="m-widget2__actions-nav">
													<div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover">
														<a href="#" className="m-dropdown__toggle">
															<i className="la la-ellipsis-h"></i>
														</a>
														<div className="m-dropdown__wrapper">
															<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
															<div className="m-dropdown__inner">
																<div className="m-dropdown__body">
																	<div className="m-dropdown__content">
																		<ul className="m-nav">
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-share"></i>
																					<span className="m-nav__link-text">Activity</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-chat-1"></i>
																					<span className="m-nav__link-text">Messages</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-info"></i>
																					<span className="m-nav__link-text">FAQ</span>
																				</a>
																			</li>
																			<li className="m-nav__item">
																				<a href="" className="m-nav__link">
																					<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																					<span className="m-nav__link-text">Support</span>
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
									</div>
								</div>
								<div className="tab-pane" id="m_widget2_tab2_content">
								</div>
								<div className="tab-pane" id="m_widget2_tab3_content">
								</div>
							</div>
						</div>
					</div>

					{/*<!--end:: Widgets/Tasks -->*/}
				</div>
				<div className="col-xl-6">

					{/*<!--begin:: Widgets/Support Tickets -->*/}
					<div className="m-portlet m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Support Tickets
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
										<a href="#" className="m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle">
											<i className="la la-ellipsis-h m--font-brand"></i>
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">Activity</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">Messages</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">FAQ</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">Support</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="m-widget3">
								<div className="m-widget3__item">
									<div className="m-widget3__header">
										<div className="m-widget3__user-img">
											<img className="m-widget3__img" src="assets/app/media/img/users/user1.jpg" alt=""/>
										</div>
										<div className="m-widget3__info">
											<span className="m-widget3__username">
												Melania Trump
											</span><br/>
											<span className="m-widget3__time">
												2 day ago
											</span>
										</div>
										<span className="m-widget3__status m--font-info">
											Pending
										</span>
									</div>
									<div className="m-widget3__body">
										<p className="m-widget3__text">
											Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.
										</p>
									</div>
								</div>
								<div className="m-widget3__item">
									<div className="m-widget3__header">
										<div className="m-widget3__user-img">
											<img className="m-widget3__img" src="assets/app/media/img/users/user4.jpg" alt=""/>
										</div>
										<div className="m-widget3__info">
											<span className="m-widget3__username">
												Lebron King James
											</span><br/>
											<span className="m-widget3__time">
												1 day ago
											</span>
										</div>
										<span className="m-widget3__status m--font-brand">
											Open
										</span>
									</div>
									<div className="m-widget3__body">
										<p className="m-widget3__text">
											Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper.
										</p>
									</div>
								</div>
								<div className="m-widget3__item">
									<div className="m-widget3__header">
										<div className="m-widget3__user-img">
											<img className="m-widget3__img" src="assets/app/media/img/users/user5.jpg" alt=""/>
										</div>
										<div className="m-widget3__info">
											<span className="m-widget3__username">
												Deb Gibson
											</span><br/>
											<span className="m-widget3__time">
												3 weeks ago
											</span>
										</div>
										<span className="m-widget3__status m--font-success">
											Closed
										</span>
									</div>
									<div className="m-widget3__body">
										<p className="m-widget3__text">
											Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*<!--end:: Widgets/Support Tickets -->*/}
				</div>
			</div>

			{/*<!--End::Section-->

			<!--Begin::Section-->*/}
			<div className="row">
				<div className="col-xl-6 col-lg-12">

					{/*<!--Begin::Portlet-->*/}
					<div className="m-portlet  m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Recent Activities
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="m-portlet__nav">
									<li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
										<a href="#" className="m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle">
											<i className="la la-ellipsis-h m--font-brand"></i>
										</a>
										<div className="m-dropdown__wrapper">
											<span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
											<div className="m-dropdown__inner">
												<div className="m-dropdown__body">
													<div className="m-dropdown__content">
														<ul className="m-nav">
															<li className="m-nav__section m-nav__section--first">
																<span className="m-nav__section-text">Quick Actions</span>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-share"></i>
																	<span className="m-nav__link-text">Activity</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-chat-1"></i>
																	<span className="m-nav__link-text">Messages</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-info"></i>
																	<span className="m-nav__link-text">FAQ</span>
																</a>
															</li>
															<li className="m-nav__item">
																<a href="" className="m-nav__link">
																	<i className="m-nav__link-icon flaticon-lifebuoy"></i>
																	<span className="m-nav__link-text">Support</span>
																</a>
															</li>
															<li className="m-nav__separator m-nav__separator--fit">
															</li>
															<li className="m-nav__item">
																<a href="#" className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">Cancel</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="m-scrollable" data-scrollable="true" data-height="380" data-mobile-height="300">

								{/*<!--Begin::Timeline 2 -->*/}
								<div className="m-timeline-2">
									<div className="m-timeline-2__items  m--padding-top-25 m--padding-bottom-30">
										<div className="m-timeline-2__item">
											<span className="m-timeline-2__item-time">10:00</span>
											<div className="m-timeline-2__item-cricle">
												<i className="fa fa-genderless m--font-danger"></i>
											</div>
											<div className="m-timeline-2__item-text  m--padding-top-5">
												Lorem ipsum dolor sit amit,consectetur eiusmdd tempor<br/>
												incididunt ut labore et dolore magna
											</div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
											<span className="m-timeline-2__item-time">12:45</span>
											<div className="m-timeline-2__item-cricle">
												<i className="fa fa-genderless m--font-success"></i>
											</div>
											<div className="m-timeline-2__item-text m-timeline-2__item-text--bold">
												AEOL Meeting With
											</div>
											<div className="m-list-pics m-list-pics--sm m--padding-left-20">
												<a href="#"><img src="assets/app/media/img/users/100_4.jpg" title=""/></a>
												<a href="#"><img src="assets/app/media/img/users/100_13.jpg" title=""/></a>
												<a href="#"><img src="assets/app/media/img/users/100_11.jpg" title=""/></a>
												<a href="#"><img src="assets/app/media/img/users/100_14.jpg" title=""/></a>
											</div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
											<span className="m-timeline-2__item-time">14:00</span>
											<div className="m-timeline-2__item-cricle">
												<i className="fa fa-genderless m--font-brand"></i>
											</div>
											<div className="m-timeline-2__item-text m--padding-top-5">
												Make Deposit <a href="#" className="m-link m-link--brand m--font-bolder">USD 700</a> To ESL.
											</div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
											<span className="m-timeline-2__item-time">16:00</span>
											<div className="m-timeline-2__item-cricle">
												<i className="fa fa-genderless m--font-warning"></i>
											</div>
											<div className="m-timeline-2__item-text m--padding-top-5">
												Lorem ipsum dolor sit amit,consectetur eiusmdd tempor<br/>
												incididunt ut labore et dolore magna elit enim at minim<br/>
												veniam quis nostrud
											</div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
											<span className="m-timeline-2__item-time">17:00</span>
											<div className="m-timeline-2__item-cricle">
												<i className="fa fa-genderless m--font-info"></i>
											</div>
											<div className="m-timeline-2__item-text m--padding-top-5">
												Placed a new order in <a href="#" className="m-link m-link--brand m--font-bolder">SIGNATURE MOBILE</a> marketplace.
											</div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
											<span className="m-timeline-2__item-time">16:00</span>
											<div className="m-timeline-2__item-cricle">
												<i className="fa fa-genderless m--font-brand"></i>
											</div>
											<div className="m-timeline-2__item-text m--padding-top-5">
												Lorem ipsum dolor sit amit,consectetur eiusmdd tempor<br/>
												incididunt ut labore et dolore magna elit enim at minim<br/>
												veniam quis nostrud
											</div>
										</div>
										<div className="m-timeline-2__item m--margin-top-30">
											<span className="m-timeline-2__item-time">17:00</span>
											<div className="m-timeline-2__item-cricle">
												<i className="fa fa-genderless m--font-danger"></i>
											</div>
											<div className="m-timeline-2__item-text m--padding-top-5">
												Received a new feedback on <a href="#" className="m-link m-link--brand m--font-bolder">FinancePro App</a> product.
											</div>
										</div>
									</div>
								</div>

								{/*<!--End::Timeline 2 -->*/}
							</div>
						</div>
					</div>

					{/*<!--End::Portlet-->*/}
				</div>
				<div className="col-xl-6 col-lg-12">

					{/*<!--Begin::Portlet-->*/}
					<div className="m-portlet m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Recent Notifications
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm" role="tablist">
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_widget2_tab1_content" role="tab">
											Today
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget2_tab2_content" role="tab">
											Month
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="tab-content">
								<div className="tab-pane active" id="m_widget2_tab1_content">

									{/*<!--Begin::Timeline 3 -->*/}
									<div className="m-timeline-3">
										<div className="m-timeline-3__items">
											<div className="m-timeline-3__item m-timeline-3__item--info">
												<span className="m-timeline-3__item-time">09:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Bob
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--warning">
												<span className="m-timeline-3__item-time">10:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Lorem ipsum dolor sit amit
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Sean
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--brand">
												<span className="m-timeline-3__item-time">11:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Lorem ipsum dolor sit amit eiusmdd tempor
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By James
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--success">
												<span className="m-timeline-3__item-time">12:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Lorem ipsum dolor
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By James
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--danger">
												<span className="m-timeline-3__item-time">14:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Lorem ipsum dolor sit amit,consectetur eiusmdd
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Derrick
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--info">
												<span className="m-timeline-3__item-time">15:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Lorem ipsum dolor sit amit,consectetur
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Iman
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--brand">
												<span className="m-timeline-3__item-time">17:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Lorem ipsum dolor sit consectetur eiusmdd tempor
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Aziko
														</a>
													</span>
												</div>
											</div>
										</div>
									</div>

									{/*<!--End::Timeline 3 -->*/}
								</div>
								<div className="tab-pane" id="m_widget2_tab2_content">

									{/*<!--Begin::Timeline 3 -->*/}
									<div className="m-timeline-3">
										<div className="m-timeline-3__items">
											<div className="m-timeline-3__item m-timeline-3__item--info">
												<span className="m-timeline-3__item-time m--font-focus">09:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Contrary to popular belief, Lorem Ipsum is not simply random text.
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Bob
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--warning">
												<span className="m-timeline-3__item-time m--font-warning">10:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														There are many variations of passages of Lorem Ipsum available.
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Sean
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--brand">
												<span className="m-timeline-3__item-time m--font-primary">11:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Contrary to popular belief, Lorem Ipsum is not simply random text.
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By James
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--success">
												<span className="m-timeline-3__item-time m--font-success">12:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														The standard chunk of Lorem Ipsum used since the 1500s is reproduced.
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By James
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--danger">
												<span className="m-timeline-3__item-time m--font-warning">14:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Latin words, combined with a handful of model sentence structures.
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Derrick
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--info">
												<span className="m-timeline-3__item-time m--font-info">15:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Contrary to popular belief, Lorem Ipsum is not simply random text.
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Iman
														</a>
													</span>
												</div>
											</div>
											<div className="m-timeline-3__item m-timeline-3__item--brand">
												<span className="m-timeline-3__item-time m--font-danger">17:00</span>
												<div className="m-timeline-3__item-desc">
													<span className="m-timeline-3__item-text">
														Lorem Ipsum is therefore always free from repetition, injected humour.
													</span><br/>
													<span className="m-timeline-3__item-user-name">
														<a href="#" className="m-link m-link--metal m-timeline-3__item-link">
															By Aziko
														</a>
													</span>
												</div>
											</div>
										</div>
									</div>

									{/*<!--End::Timeline 3 -->*/}
								</div>
							</div>
						</div>
					</div>

					{/*<!--End::Portlet-->*/}
				</div>
			</div>

			{/*<!--End::Section-->

			<!--Begin::Section-->*/}
			<div className="row">
				<div className="col-xl-8">

					{/*<!--begin:: Widgets/Best Sellers-->*/}
					<div className="m-portlet m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Best Sellers
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								<ul className="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm" role="tablist">
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_widget5_tab1_content" role="tab">
											Last Month
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget5_tab2_content" role="tab">
											last Year
										</a>
									</li>
									<li className="nav-item m-tabs__item">
										<a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget5_tab3_content" role="tab">
											All time
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="m-portlet__body">

							{/*<!--begin::Content-->*/}
							<div className="tab-content">
								<div className="tab-pane active" id="m_widget5_tab1_content" aria-expanded="true">

									{/*<!--begin::m-widget5-->*/}
									<div className="m-widget5">
										<div className="m-widget5__item">
											<div className="m-widget5__content">
												<div className="m-widget5__pic">
													<img className="m-widget7__img" src="assets/app/media/img//products/product6.jpg" alt=""/>
												</div>
												<div className="m-widget5__section">
													<h4 className="m-widget5__title">
														Great Logo Designn
													</h4>
													<span className="m-widget5__desc">
														Make Metronic Great Again.Lorem Ipsum Amet
													</span>
													<div className="m-widget5__info">
														<span className="m-widget5__author">
															Author:
														</span>
														<span className="m-widget5__info-label">
															author:
														</span>
														<span className="m-widget5__info-author-name">
															Fly themes
														</span>
														<span className="m-widget5__info-label">
															Released:
														</span>
														<span className="m-widget5__info-date m--font-info">
															23.08.17
														</span>
													</div>
												</div>
											</div>
											<div className="m-widget5__content">
												<div className="m-widget5__stats1">
													<span className="m-widget5__number">19,200</span><br/>
													<span className="m-widget5__sales">sales</span>
												</div>
												<div className="m-widget5__stats2">
													<span className="m-widget5__number">1046</span><br/>
													<span className="m-widget5__votes">votes</span>
												</div>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__content">
												<div className="m-widget5__pic">
													<img className="m-widget7__img" src="assets/app/media/img//products/product10.jpg" alt=""/>
												</div>
												<div className="m-widget5__section">
													<h4 className="m-widget5__title">
														Branding Mockup
													</h4>
													<span className="m-widget5__desc">
														Make Metronic Great Again.Lorem Ipsum Amet
													</span>
													<div className="m-widget5__info">
														<span className="m-widget5__author">
															Author:
														</span>
														<span className="m-widget5__info-author m--font-info">
															Fly themes
														</span>
														<span className="m-widget5__info-label">
															Released:
														</span>
														<span className="m-widget5__info-date m--font-info">
															23.08.17
														</span>
													</div>
												</div>
											</div>
											<div className="m-widget5__content">
												<div className="m-widget5__stats1">
													<span className="m-widget5__number">24,583</span><br/>
													<span className="m-widget5__sales">sales</span>
												</div>
												<div className="m-widget5__stats2">
													<span className="m-widget5__number">3809</span><br/>
													<span className="m-widget5__votes">votes</span>
												</div>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__content">
												<div className="m-widget5__pic">
													<img className="m-widget7__img" src="assets/app/media/img//products/product11.jpg" alt=""/>
												</div>
												<div className="m-widget5__section">
													<h4 className="m-widget5__title">
														Awesome Mobile App
													</h4>
													<span className="m-widget5__desc">
														Make Metronic Great Again.Lorem Ipsum Amet
													</span>
													<div className="m-widget5__info">
														<span className="m-widget5__author">
															Author:
														</span>
														<span className="m-widget5__info-author m--font-info">
															Fly themes
														</span>
														<span className="m-widget5__info-label">
															Released:
														</span>
														<span className="m-widget5__info-date m--font-info">
															23.08.17
														</span>
													</div>
												</div>
											</div>
											<div className="m-widget5__content">
												<div className="m-widget5__stats1">
													<span className="m-widget5__number">10,054</span><br/>
													<span className="m-widget5__sales">sales</span>
												</div>
												<div className="m-widget5__stats2">
													<span className="m-widget5__number">1103</span><br/>
													<span className="m-widget5__votes">votes</span>
												</div>
											</div>
										</div>
									</div>

									{/*<!--end::m-widget5-->*/}
								</div>
								<div className="tab-pane" id="m_widget5_tab2_content" aria-expanded="false">

									{/*<!--begin::m-widget5-->*/}
									<div className="m-widget5">
										<div className="m-widget5__item">
											<div className="m-widget5__content">
												<div className="m-widget5__pic">
													<img className="m-widget7__img" src="assets/app/media/img//products/product11.jpg" alt=""/>
												</div>
												<div className="m-widget5__section">
													<h4 className="m-widget5__title">
														Branding Mockup
													</h4>
													<span className="m-widget5__desc">
														Make Metronic Great Again.Lorem Ipsum Amet
													</span>
													<div className="m-widget5__info">
														<span className="m-widget5__author">
															Author:
														</span>
														<span className="m-widget5__info-author m--font-info">
															Fly themes
														</span>
														<span className="m-widget5__info-label">
															Released:
														</span>
														<span className="m-widget5__info-date m--font-info">
															23.08.17
														</span>
													</div>
												</div>
											</div>
											<div className="m-widget5__content">
												<div className="m-widget5__stats1">
													<span className="m-widget5__number">24,583</span><br/>
													<span className="m-widget5__sales">sales</span>
												</div>
												<div className="m-widget5__stats2">
													<span className="m-widget5__number">3809</span><br/>
													<span className="m-widget5__votes">votes</span>
												</div>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__content">
												<div className="m-widget5__pic">
													<img className="m-widget7__img" src="assets/app/media/img//products/product6.jpg" alt=""/>
												</div>
												<div className="m-widget5__section">
													<h4 className="m-widget5__title">
														Great Logo Designn
													</h4>
													<span className="m-widget5__desc">
														Make Metronic Great Again.Lorem Ipsum Amet
													</span>
													<div className="m-widget5__info">
														<span className="m-widget5__author">
															Author:
														</span>
														<span className="m-widget5__info-author m--font-info">
															Fly themes
														</span>
														<span className="m-widget5__info-label">
															Released:
														</span>
														<span className="m-widget5__info-date m--font-info">
															23.08.17
														</span>
													</div>
												</div>
											</div>
											<div className="m-widget5__content">
												<div className="m-widget5__stats1">
													<span className="m-widget5__number">19,200</span><br/>
													<span className="m-widget5__sales">sales</span>
												</div>
												<div className="m-widget5__stats2">
													<span className="m-widget5__number">1046</span><br/>
													<span className="m-widget5__votes">votes</span>
												</div>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__content">
												<div className="m-widget5__pic">
													<img className="m-widget7__img" src="assets/app/media/img//products/product10.jpg" alt=""/>
												</div>
												<div className="m-widget5__section">
													<h4 className="m-widget5__title">
														Awesome Mobile App
													</h4>
													<span className="m-widget5__desc">
														Make Metronic Great Again.Lorem Ipsum Amet
													</span>
													<div className="m-widget5__info">
														<span className="m-widget5__author">
															Author:
														</span>
														<span className="m-widget5__info-author m--font-info">
															Fly themes
														</span>
														<span className="m-widget5__info-label">
															Released:
														</span>
														<span className="m-widget5__info-date m--font-info">
															23.08.17
														</span>
													</div>
												</div>
											</div>
											<div className="m-widget5__content">
												<div className="m-widget5__stats1">
													<span className="m-widget5__number">10,054</span><br/>
													<span className="m-widget5__sales">sales</span>
												</div>
												<div className="m-widget5__stats2">
													<span className="m-widget5__number">1103</span><br/>
													<span className="m-widget5__votes">votes</span>
												</div>
											</div>
										</div>
									</div>

									{/*<!--end::m-widget5-->*/}
								</div>
								<div className="tab-pane" id="m_widget5_tab3_content" aria-expanded="false">

									{/*<!--begin::m-widget5-->*/}
									<div className="m-widget5">
										<div className="m-widget5__item">
											<div className="m-widget5__content">
												<div className="m-widget5__pic">
													<img className="m-widget7__img" src="assets/app/media/img//products/product10.jpg" alt=""/>
												</div>
												<div className="m-widget5__section">
													<h4 className="m-widget5__title">
														Branding Mockup
													</h4>
													<span className="m-widget5__desc">
														Make Metronic Great Again.Lorem Ipsum Amet
													</span>
													<div className="m-widget5__info">
														<span className="m-widget5__author">
															Author:
														</span>
														<span className="m-widget5__info-author m--font-info">
															Fly themes
														</span>
														<span className="m-widget5__info-label">
															Released:
														</span>
														<span className="m-widget5__info-date m--font-info">
															23.08.17
														</span>
													</div>
												</div>
											</div>
											<div className="m-widget5__content">
												<div className="m-widget5__stats1">
													<span className="m-widget5__number">10.054</span><br/>
													<span className="m-widget5__sales">sales</span>
												</div>
												<div className="m-widget5__stats2">
													<span className="m-widget5__number">1103</span><br/>
													<span className="m-widget5__votes">votes</span>
												</div>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__content">
												<div className="m-widget5__pic">
													<img className="m-widget7__img" src="assets/app/media/img//products/product11.jpg" alt=""/>
												</div>
												<div className="m-widget5__section">
													<h4 className="m-widget5__title">
														Great Logo Designn
													</h4>
													<span className="m-widget5__desc">
														Make Metronic Great Again.Lorem Ipsum Amet
													</span>
													<div className="m-widget5__info">
														<span className="m-widget5__author">
															Author:
														</span>
														<span className="m-widget5__info-author m--font-info">
															Fly themes
														</span>
														<span className="m-widget5__info-label">
															Released:
														</span>
														<span className="m-widget5__info-date m--font-info">
															23.08.17
														</span>
													</div>
												</div>
											</div>
											<div className="m-widget5__content">
												<div className="m-widget5__stats1">
													<span className="m-widget5__number">24,583</span><br/>
													<span className="m-widget5__sales">sales</span>
												</div>
												<div className="m-widget5__stats2">
													<span className="m-widget5__number">3809</span><br/>
													<span className="m-widget5__votes">votes</span>
												</div>
											</div>
										</div>
										<div className="m-widget5__item">
											<div className="m-widget5__content">
												<div className="m-widget5__pic">
													<img className="m-widget7__img" src="assets/app/media/img//products/product6.jpg" alt=""/>
												</div>
												<div className="m-widget5__section">
													<h4 className="m-widget5__title">
														Awesome Mobile App
													</h4>
													<span className="m-widget5__desc">
														Make Metronic Great Again.Lorem Ipsum Amet
													</span>
													<div className="m-widget5__info">
														<span className="m-widget5__author">
															Author:
														</span>
														<span className="m-widget5__info-author m--font-info">
															Fly themes
														</span>
														<span className="m-widget5__info-label">
															Released:
														</span>
														<span className="m-widget5__info-date m--font-info">
															23.08.17
														</span>
													</div>
												</div>
											</div>
											<div className="m-widget5__content">
												<div className="m-widget5__stats1">
													<span className="m-widget5__number">19,200</span><br/>
													<span className="m-widget5__sales">1046</span>
												</div>
												<div className="m-widget5__stats2">
													<span className="m-widget5__number">1046</span><br/>
													<span className="m-widget5__votes">votes</span>
												</div>
											</div>
										</div>
									</div>

									{/*<!--end::m-widget5-->*/}
								</div>
							</div>

							{/*<!--end::Content-->*/}
						</div>
					</div>

					{/*<!--end:: Widgets/Best Sellers-->*/}
				</div>
				<div className="col-xl-4">

					{/*<!--begin:: Widgets/Authors Profit-->*/}
					<div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
						<div className="m-portlet__head">
							<div className="m-portlet__head-caption">
								<div className="m-portlet__head-title">
									<h3 className="m-portlet__head-text">
										Content Provider's Revenue
									</h3>
								</div>
							</div>
							<div className="m-portlet__head-tools">
								
							</div>
						</div>
						<div className="m-portlet__body">
							<div className="m-widget4">
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo5.png" alt=""/>
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											Trump Themes
										</span><br/>
										<span className="m-widget4__sub">
											Make Metronic Great Again
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">+$2500</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo4.png" alt=""/>
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											StarBucks
										</span><br/>
										<span className="m-widget4__sub">
											Good Coffee & Snacks
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">-$290</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo3.png" alt=""/>
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											Phyton
										</span><br/>
										<span className="m-widget4__sub">
											A Programming Language
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">+$17</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo2.png" alt=""/>
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											GreenMakers
										</span><br/>
										<span className="m-widget4__sub">
											Make Green Great Again
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">-$2.50</span>
									</span>
								</div>
								<div className="m-widget4__item">
									<div className="m-widget4__img m-widget4__img--logo">
										<img src="assets/app/media/img/client-logos/logo1.png" alt=""/>
									</div>
									<div className="m-widget4__info">
										<span className="m-widget4__title">
											FlyThemes
										</span><br/>
										<span className="m-widget4__sub">
											A Let's Fly Fast Again Language
										</span>
									</div>
									<span className="m-widget4__ext">
										<span className="m-widget4__number m--font-brand">+$200</span>
									</span>
								</div>
							</div>
						</div>
					</div>

					{/*<!--end:: Widgets/Authors Profit-->*/}
				</div>
			</div>

			{/*<!--End::Section-->*/}
			</div>
		)
	}
}

export default Dashboard;