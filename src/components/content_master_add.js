import React from 'react';
import axios from '../axios'

class ContentMasterAdd extends React.Component {

  constructor(props) {
    super(props)
	
	const availableContentTypes = axios.getContentType()
	const availableCategory = axios.getCategories()
	const availableMetadata = axios.getMetadata()

	this.state={

		availableContentTypes,
		availableCategory,
		availableMetadata,

		title: '',
		description: '',
		content_type: '',
		category: '',
		fileupload:[],
		thumbnail: [],
		metadata: ''

	  }

    }

  render() {

	//console.log(this.state.availableMetadata)
	//console.log(this.state.availableContentTypes)
	//console.log(this.state.availableCategory)

    return (
      <div>
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
									Content
								</h3>
								<ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
									<li class="m-nav__item m-nav__item--home">
										<a href="#" class="m-nav__link m-nav__link--icon">
											<i class="m-nav__link-icon la la-home"></i>
										</a>
									</li>
									<li class="m-nav__separator">
										-
									</li>
									<li class="m-nav__item">
										<a href="" class="m-nav__link">
											<span class="m-nav__link-text">
												Add Content
											</span>
										</a>
									</li>
									<li class="m-nav__separator">
										-
									</li>
								</ul>
							</div>
							<div>
								<div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
									<a href="#" class="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle">
										<i class="la la-plus m--hide"></i>
										<i class="la la-ellipsis-h"></i>
									</a>
									<div class="m-dropdown__wrapper">
										<span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
										<div class="m-dropdown__inner">
											<div class="m-dropdown__body">
												<div class="m-dropdown__content">
													<ul class="m-nav">
														<li class="m-nav__section m-nav__section--first m--hide">
															<span class="m-nav__section-text">
																Quick Actions
															</span>
														</li>
														<li class="m-nav__item">
															<a href="" class="m-nav__link">
																<i class="m-nav__link-icon flaticon-share"></i>
																<span class="m-nav__link-text">
																	Activity
																</span>
															</a>
														</li>
														<li class="m-nav__item">
															<a href="" class="m-nav__link">
																<i class="m-nav__link-icon flaticon-chat-1"></i>
																<span class="m-nav__link-text">
																	Messages
																</span>
															</a>
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
														<li class="m-nav__separator m-nav__separator--fit"></li>
														<li class="m-nav__item">
															<a href="#" class="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">
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
					<div class="m-content">
						{/*<!--Begin::Main Portlet-->*/}
						<div class="m-portlet m-portlet--full-height">
							{/*<!--begin: Portlet Head-->*/}
							<div class="m-portlet__head">
								<div class="m-portlet__head-caption">
									<div class="m-portlet__head-title">
										<h3 class="m-portlet__head-text">
											Add Content
										</h3>
									</div>
								</div>
								<div class="m-portlet__head-tools">
									<ul class="m-portlet__nav">
										<li class="m-portlet__nav-item">
											<a href="#" data-toggle="m-tooltip" class="m-portlet__nav-link m-portlet__nav-link--icon" data-direction="left" data-width="auto" title="Get help with filling up this form">
												<i class="flaticon-info m--icon-font-size-lg3"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							{/*<!--end: Portlet Head-->*/}
              {/*<!--begin: Portlet Body-->*/}
							<div class="m-portlet__body m-portlet__body--no-padding">
								{/*<!--begin: Form Wizard-->*/}
								<div class="m-wizard m-wizard--3 m-wizard--success" id="m_wizard">
									{/*<!--begin: Message container -->*/}
									<div class="m-portlet__padding-x">
										{/*<!-- Here you can put a message or alert -->*/}
									</div>
									{/*<!--end: Message container -->*/}
									<div class="row m-row--no-padding">
										<div class="col-xl-3 col-lg-12">
											{/*<!--begin: Form Wizard Head -->*/}
											<div class="m-wizard__head">
												{/*<!--begin: Form Wizard Progress -->*/}
												<div class="m-wizard__progress">
													<div class="progress">
														<div class="progress-bar"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												{/*<!--end: Form Wizard Progress -->*/}
			                  {/*<!--begin: Form Wizard Nav -->*/}
												<div class="m-wizard__nav">
													<div class="m-wizard__steps">
														<div class="m-wizard__step m-wizard__step--current" m-wizard-target="m_wizard_form_step_1">
															<div class="m-wizard__step-info">
																<a href="#" class="m-wizard__step-number">
																	<span>
																		<span>
																			1
																		</span>
																	</span>
																</a>
																<div class="m-wizard__step-line">
																	<span></span>
																</div>
																<div class="m-wizard__step-label">
																	Add Details
																</div>
															</div>
														</div>
														<div class="m-wizard__step" m-wizard-target="m_wizard_form_step_2">
															<div class="m-wizard__step-info">
																<a href="#" class="m-wizard__step-number">
																	<span>
																		<span>
																			2
																		</span>
																	</span>
																</a>
																<div class="m-wizard__step-line">
																	<span></span>
																</div>
																<div class="m-wizard__step-label">
																	Upload Content File
																</div>
															</div>
														</div>
														<div class="m-wizard__step" m-wizard-target="m_wizard_form_step_3">
															<div class="m-wizard__step-info">
																<a href="#" class="m-wizard__step-number">
																	<span>
																		<span>
																			3
																		</span>
																	</span>
																</a>
																<div class="m-wizard__step-line">
																	<span></span>
																</div>
																<div class="m-wizard__step-label">
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
										<div class="col-xl-9 col-lg-12">
											{/*<!--begin: Form Wizard Form-->*/}
									<div class="m-wizard__form">
												{/*<!--
							1) Use m-form--label-align-left class to alight the form input lables to the right
							2) Use m-form--state class to highlight input control borders on form validation
                        -->*/}
								    <form class="m-form m-form--label-align-left- m-form--state-" id="m_form">
													{/*<!--begin: Form Body -->*/}
													<div class="m-portlet__body m-portlet__body--no-padding">
														{/*<!--begin: Form Wizard Step 1-->*/}
												<div class="m-wizard__form-step m-wizard__form-step--current" id="m_wizard_form_step_1">
												<div class="m-form__heading">
																	<h3 class="m-form__heading-title">Content Details</h3>
																</div>
																<div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">* Content Type:</label>
																	<div class="col-xl-9 col-lg-9">
																		<select name="content_type" class="form-control m-input" onChange={(e) =>
																		this.setState({selectedContentType: e.target.value})}>
																			<option disabled selected value="">Select Type*</option>
																			{this.availableContentTypes !== null && this.state.availableContentTypes.map(cont =>(
																				<option key={cont.id} value={cont.id}> {cont.name}</option>
																			))}
																		</select>
																	</div>
																</div>		
																<div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">
																		* Category:
																	</label>
																	<div class="col-xl-9 col-lg-9">
																		<select name="category" class="form-control m-input" onChange={ (e) => {
																		this.setState({selectedCategory: e.target.value})}}>
																			<option disabled selected value="">Select Category</option>
																			{this.state.availableCategory !== null && this.state.availableCategory.map(cat => (
																				<option key={cat.id} value={cat.id}>{cat.name}</option>
																			))}
																		</select>
																	</div>
																</div>
																								
																<div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">* Title:</label>
																	<div class="col-xl-9 col-lg-9">
																		<input type="text" name="title" class="form-control m-input" placeholder="Title" required/>
																		<span class="m-form__help">Please enter your content title</span>
																	</div>
																</div>
																
																<div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">* Description:</label>
																	<div class="col-xl-9 col-lg-9">
																		<textarea class="form-control m-input" name="description" placeholder="Brief Description" rows="3"></textarea>
																		<span class="m-form__help">Brief Description</span>
																	</div>
																</div>
																
																
																</div>
														{/*<!--end: Form Wizard Step 1-->*/}
						              	{/*<!--begin: Form Wizard Step 2-->*/}
														<div class="m-wizard__form-step" id="m_wizard_form_step_2">
																<div class="m-form__heading">
																	<h3 class="m-form__heading-title">Add Content File</h3>
																</div>


																<div class="col-lg-12">
																	<input type="text" name="" class="form-control m-input"  disabled value="<%=contentMasterDisplay[1]%>"/>
																	<input type="text" class="form-control m-input" disabled value="<%=contentMasterDisplay[1]%>" />				
																</div>


																<div class="form-group m-form__group row">
																	<div class="col-lg-12">
																		<label class="form-control-label">* Upload File:</label>
																		<input class="form-control m-input" id = "fileupload" type = "file" required  />
																		<span class="m-form__help">Please enter your preferred URL  to your dashboard</span>
																	</div>
																</div>
																<div class="form-group m-form__group row">
																	<div class="col-lg-6 m-form__group-sub">
																		<label class="form-control-label">* OS:</label>
																		<select name="OS" class="form-control m-input">
																			<option disabled selected value="">
																				Select OS
																			</option>
																			<option value="">
																				Android
																			</option>
																		</select>
																		<span class="m-form__help">Please enter your Operating System</span>
																	</div>
																	<div class="col-lg-6 m-form__group-sub">
																		<label class="form-control-label">* OS Version:</label>
																		<input type="text" name="os-version" class="form-control m-input" placeholder="e.g. 5.0"/>
																		<span class="m-form__help">Please enter your Operating System Version</span>
																	</div>
																</div>
														</div>
														{/*<!--end: Form Wizard Step 2-->*/}
							            	{/*<!--begin: Form Wizard Step 3-->*/}
														<div class="m-wizard__form-step" id="m_wizard_form_step_3">
															<div class="m-form__heading">
																	<h3 class="m-form__heading-title">Add Metadata</h3>
																</div>
																<div class="form-group m-form__group row">
																	<div class="col-lg-12">
																		<select name="MD" class="form-control m-input">
																			<option disabled selected value="">
																				* Select Metadata
																			</option>
																			{this.state.availableMetadata !==null && this.state.availableMetadata.map(meta =>(
																				<option key={meta.id} value={meta.id}>{meta.name}</option>
																			))}
																		</select>
																	</div>
																</div>
																<div class="form-group m-form__group row">
																	<div class="col-lg-12">
																		<label class="form-control-label">Value</label>
																		<input type="text" name="dimensions" class="form-control m-input" placeholder="Content Metadata"/>
																		<span class="m-form__help">Please enter your Metadata</span>
																	</div>
																</div>	
																<div class="form-group m-form__group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">* Storage Type:</label>
																	<div class="col-xl-9 col-lg-9">
																		<select name="storage-type" class="form-control m-input">
																			<option disabled selected value="">
																				Select Storage Type
																			</option>
																			<option value="">
																				Local
																			</option>
																			<option value="AX">
																				Remote
																			</option>
																		</select>

																		<span class="m-form__help">	</span>
																		<div>
																			<input class="form-control m-input" id = "fileupload" type = "file"  />
																			<span class="m-form__help">
																			Thumbnail Small
																			</span>
																		</div>
																		<div>
																			<input class="form-control m-input" id = "fileupload" type = "file"  />
																			<span class="m-form__help">
																			Thumbnail Middle 
																			</span>
																		</div>
																		<div>
																			<input class="form-control m-input" id = "fileupload" type = "file"  />
																			<span class="m-form__help">
																			Thumbnail Large
																			</span>
																		</div>
																	</div>
																</div>
																<div class="col-lg-12 m--align-center">
																	<a href="#" class="btn btn-primary m-btn m-btn--custom m-btn--icon" >
																		<span>
																			<i class="la la-check"></i>
																			<span>Add</span>
																		</span>
																	</a>
																</div>																
														</div>
												<div class="m-portlet__foot m-portlet__foot--fit m--margin-top-40">	</div>
											</div>
														{/*<!--end: Form Wizard Step 3-->*/}
                            
												
												
							        {/*<!--begin: Form Actions -->*/}
													<div class="m-portlet__foot m-portlet__foot--fit m--margin-top-40">
														<div class="m-form__actions">
															<div class="row">
																<div class="col-lg-6 m--align-left">
																	<a href="#" class="btn btn-secondary m-btn m-btn--custom m-btn--icon" data-wizard-action="prev">
																		<span>
																			<i class="la la-arrow-left"></i>
																			&nbsp;&nbsp;
																			<span>
																				Back
																			</span>
																		</span>
																	</a>
																</div>
																<div class="col-lg-6 m--align-right">
																	<a href="#" class="btn btn-primary m-btn m-btn--custom m-btn--icon" data-wizard-action="submit">
																		<span>
																			<i class="la la-check"></i>
																			&nbsp;&nbsp;
																			<span>
																				Submit
																			</span>
																		</span>
																	</a>
																	<a href="#" class="btn btn-success m-btn m-btn--custom m-btn--icon" data-wizard-action="next">
																		<span>
																			<span>
																				Save & Continue
																			</span>
																			&nbsp;&nbsp;
																			<i class="la la-arrow-right"></i>
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
        <div id="m_scroll_top" class="m-scroll-top">
          <i class="la la-arrow-up"></i>
        </div>
        <ul class="m-nav-sticky" style={{"marginTop": "30px"}}>
          <li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Documentation" data-placement="left">
            <a href="#" target="_blank"><i class="la la-code-fork"></i></a>
          </li>
          <li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Support" data-placement="left">
            <a href="#" target="_blank"><i class="la la-life-ring"></i></a>
          </li>
        </ul>

      </div>
    )
  }
}

export default ContentMasterAdd
