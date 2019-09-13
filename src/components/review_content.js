import React from 'react'

class ReviewContent extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
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
								<h3 class="m-subheader__title m-subheader__title--separator">Review</h3>
								<ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
									<li class="m-nav__item m-nav__item--home">
										<a href="#" class="m-nav__link m-nav__link--icon">
											<i class="m-nav__link-icon la la-home"></i>
										</a>
									</li>
									<li className="m-nav__separator">-</li>
									<li class="m-nav__item">
										<a href="" class="m-nav__link">
											<span class="m-nav__link-text">Review Content</span>
										</a>
									</li>
									<li class="m-nav__separator">-</li>
								</ul>
							</div>
						
							{/*<jsp:include page="common/quick_actions.html"/>*/}	
											
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
													Search Content
												</h3>
											</div>
										</div>
									</div>
									{/*<!--begin::Form-->*/}
									<form class="m-form m-form--fit m-form--label-align-right">
										<div class="m-portlet__body">
											<div class="form-group m-form__group">
												<label class="col-lg-12">
												<select class="form-control m-input m-input--square" id="">
													<option disabled selected value="">Search By*</option>
													<option value="">Title</option>
													<option value="">Type</option>
													<option value="">Status</option>
												</select>
                                                </label>
											</div>
										</div>
										<div class="m-portlet__foot m-portlet__foot--fit">
											<div class="m-form__actions">
											<div class="row">
												<div class="col-lg-5"></div>
												<div class="col-lg-6">
													<button type="reset" class="btn btn-primary">FIND</button>
												</div>
											</div>
											</div>
                                            </div>
										
									</form>
									{/*<!--end::Form-->*/}
								</div>
                    <div class="m-portlet m-portlet--mobile">
							<div class="m-portlet__head">
								<div class="m-portlet__head-caption">
									<div class="m-portlet__head-title">
										<h3 class="m-portlet__head-text">
											Review Content
										</h3>
									</div>
								</div>
								<div class="m-portlet__head-tools">
									<ul class="m-portlet__nav">
										<li class="m-portlet__nav-item">
											<div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
												<a href="#" class="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle">
													<i class="la la-ellipsis-h m--font-brand"></i>
												</a>
												<div class="m-dropdown__wrapper">
													<span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
													<div class="m-dropdown__inner">
														<div class="m-dropdown__body">
															<div class="m-dropdown__content">
																<ul class="m-nav">
																	<li class="m-nav__section m-nav__section--first">
																		<span class="m-nav__section-text">Quick Actions</span>
																	</li>
																	<li class="m-nav__item">
																		<a href="" class="m-nav__link">
																			<i class="m-nav__link-icon flaticon-share"></i>
																			<span class="m-nav__link-text">Create Post</span>
																		</a>
																	</li>
																	<li class="m-nav__item">
																		<a href="" class="m-nav__link">
																			<i class="m-nav__link-icon flaticon-chat-1"></i>
																			<span class="m-nav__link-text">Send Messages</span>
																		</a>
																	</li>
																	<li class="m-nav__item">
																		<a href="" class="m-nav__link">
																			<i class="m-nav__link-icon flaticon-multimedia-2"></i>
																			<span class="m-nav__link-text">Upload File</span>
																		</a>
																	</li>
																	<li class="m-nav__section">
																		<span class="m-nav__section-text">Useful Links</span>
																	</li>
																	<li class="m-nav__item">
																		<a href="" class="m-nav__link">
																			<i class="m-nav__link-icon flaticon-info"></i>
																			<span class="m-nav__link-text">FAQ</span>
																		</a>
																	</li>
																	<li class="m-nav__item">
																		<a href="" class="m-nav__link">
																			<i class="m-nav__link-icon flaticon-lifebuoy"></i>
																			<span class="m-nav__link-text">Support</span>
																		</a>
																	</li>
																	<li class="m-nav__separator m-nav__separator--fit m--hide">
																	</li>
																	<li class="m-nav__item m--hide">
																		<a href="#" class="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">Submit</a>
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
															<select class="form-control m-bootstrap-select" id="m_form_status">
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
															<label class="m-label m-label--single">Type:</label>
														</div>
														<div class="m-form__control">
															<select class="form-control m-bootstrap-select" id="m_form_type">
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
														<input type="text" class="form-control m-input" placeholder="Search..." id="generalSearch"/>
														<span class="m-input-icon__icon m-input-icon__icon--left">
															<span><i class="la la-search"></i></span>
														</span>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>

								{/*<!--end: Search Form -->

								<!--begin: Datatable -->*/}
								
																				
                                        <table class="m-datatable" id="html_table" width="100%">
									     <thead>
									    	<tr>
											<th title="Field #1" data-field="nos">S/N</th>
											<th title="Field #2" data-field="title">Title</th>
											<th title="Field #3" data-field="desc">Desc</th>
											<th title="Field #4" data-field="type">Type</th>
											<th title="Field #5" data-field="user_rating">User Ratings</th>
											<th title="Field #6" data-field="user_rated">User Rated</th>
											<th title="Field #7" data-field="thumbnail_small">Thumbnail Small</th>
											<th title="Field #8" data-field="thumbnail_mid">Thumbnail Mid</th>
											<th title="Field #9" data-field="thumbnail_large">Thumbnail Large</th>
											<th title="Field #10" data-field="storage_type">Storage Type</th>
											<th title="Field #11" data-field="status">Status</th>
											<th title="Field #12" data-field="content_category">Content Category</th>
											<th title="Field #13" data-field="action">Take Action</th>
											<th title="Field #14" data-field="remark">Remark</th>											
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Usagi Yojimbo: Way of the Roni</td>
											<td>Fight for the truth ..</td>
											<td>GAME</td>
											<td>4</td>
											<td>4</td>
											<td>/content/20180515/Usagi_Yojimbo_200x200.jpg</td>
											<td>/content/20180515/Usagi_Yojimbo_400x400.jpg</td>
											<td>/content/20180515/Usagi_Yojimbo_600x600.jpg</td>
											<td>LOCAL</td>
											<td><button type="button" class="btn-status btn-success">Success</button></td>
											<td>Action</td>
											<td>Not Available Remarks</td>
											<td>Add</td>
										</tr>
									</tbody>
								</table>

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
		<ul class="m-nav-sticky" style={{"marginTop": "30px"}}>
			<li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Documentation" data-placement="left">
				<a href="#" target="_blank"><i class="la la-code-fork"></i></a>
			</li>
			<li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Support" data-placement="left">
				<a href="#" target="_blank"><i class="la la-life-ring"></i></a>
			</li>
		</ul>

		{/*<!-- begin::Quick Nav -->

		<!--begin::Global Theme Bundle -->
		<jsp:include page="common/scripts.html"/>*/}

			</div>
		)
	}
}


export default ReviewContent