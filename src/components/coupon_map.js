import React from 'react'


class CouponMap extends React.Component{
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
            <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body" style={{paddingBottom: '10em'}}>

            {/*<!-- BEGIN: Left Aside -->
                
                <jsp:include page="common/sidebar.html"/>
                <!-- END: Left Aside -->*/}
                {this.props.sidebar}
                <div class="m-grid__item m-grid__item--fluid m-wrapper">

                    {/*<!-- BEGIN: Subheader -->*/}
                    <div class="m-subheader ">
                        <div class="d-flex align-items-center">
                            <div class="mr-auto">
                                <h3 class="m-subheader__title m-subheader__title--separator">Billing</h3>
                                <ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
                                    <li class="m-nav__item m-nav__item--home">
                                        <a href="#" class="m-nav__link m-nav__link--icon">
                                            <i class="m-nav__link-icon la la-home"></i>
                                        </a>
                                    </li>
                                    <li class="m-nav__separator">-</li>
                                    <li class="m-nav__item">
                                        <a href="" class="m-nav__link">
                                            <span class="m-nav__link-text">Map Coupon</span>
                                        </a>
                                    </li>
                                    <li class="m-nav__separator">-</li>
                                </ul>
                            </div>
                            <div>
                                <span class="m-subheader__daterange" id="m_dashboard_daterangepicker">
                                    <span class="m-subheader__daterange-label">
                                        <span class="m-subheader__daterange-title"></span>
                                        <span class="m-subheader__daterange-date m--font-brand"></span>
                                    </span>
                                    <a href="#" class="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
                                        <i class="la la-angle-down"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*<!-- END: Subheader -->*/}
                    <div class="m-content">


<div class="m-portlet m-portlet--full-height">
    <form class="m-form m-form--label-align-left- m-form--state-" id="m_form">
     {/*    <!--begin: Form Body --> */}
        <div class="m-portlet__body m-portlet__body--no-padding">
            
           {/*  <!--begin: Form Wizard Step 2--> */}
            <div class="m-wizard__form-step" id="m_wizard_form_step_2">
                                
                <div class="m-form__section m-form__section--first">
                    <div class="m-form__heading" style={{"padding": "30px", "padding-bottom": "0px", "padding-left": "60px"}}>
                        <h3 class="m-form__heading-title">
                            Coupon Mapping
                        </h3>
                    </div><hr/>
                </div>
                                
                <div class="m-demo" style={{"width": "90%", "margin": "30px auto", "clear": "both;"}}>
            
                    <div class="m-demo__preview">
            
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <label for="example-text-input" >
                            * Coupon
                            </label>
                
                            <input type="text" name="" class="form-control m-input m-input--air"/>
                            <span class="m-form__help">
                                Coupon
                            </span>
                        </div>
                <br/>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <label for="example-text-input" >
                            * Select Portal
                            </label>
                
                            <select class="form-control m-input m-input--air" id="currencySelector">
                                <option>
                                    Select Coupon
                                </option>
                                <option>
                                    AudeBook
                                </option>
                                <option>
                                    PlayCode
                                </option>
                                <option>
                                    BoxAfrica
                                </option>
                                <option>
                                    Musik365
                                </option>
                                
                                
                                
                            </select>
                            <span class="m-form__help">
                                Select portal you want the coupon to appear
                            </span>
                        </div><br/>
                        
            
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <label for="example-text-input" >
                                    * Mapping Type
                            </label>
                            <select class="form-control m-input m-input--air" id="couponMapp">
                                
                                <option value="ZY_null">
                                    Select mapping type
                                </option>
                                <option value="ZY_mapping">
                                    Products Category
                                </option>
                                <option value="YY_mapping">
                                    Subscription Plans
                                </option>
                                <option value="MM_mapping">
                                    Products
                                </option>

                            </select>
                            <span class="m-form__help">
                                Select mapping category
                            </span>
                                
                        </div>
            
                        <div class="col-lg-12 col-md-12">
                               <div class="col-sm-11 hideMe" id="ZY_mapping">
                                <div class="col-xl-12 col-lg-8 col-sm-12 col-md-12">
                                    <div class="m-checkbox-inline">
                                        <label class="m-checkbox">
                                            <input type="checkbox"/>
                                            Game
                                            <span></span>
                                        </label>
                                        <label class="m-checkbox">
                                            <input type="checkbox"/>
                                            Movie
                                            <span></span>
                                        </label>
                                        <label class="m-checkbox">
                                            <input type="checkbox"/>
                                            Ebook
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                               <div class="col-sm-11 hideMe" id="YY_mapping">
                                <div class="col-xl-12 col-lg-8 col-sm-12 col-md-12">
                                    <div class="m-checkbox-inline">
                                        <label class="m-checkbox">
                                            <input type="checkbox"/>
                                            Basic Plan
                                            <span></span>
                                        </label>
                                        <label class="m-checkbox">
                                            <input type="checkbox"/>
                                            Standard Plan
                                            <span></span>
                                        </label>
                                        <label class="m-checkbox">
                                            <input type="checkbox"/>
                                            Advance Plan
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-11 hideMe" id="MM_mapping">
                                <div class="col-xl-12 col-lg-8 col-sm-12 col-md-12">
                                    <div class="m-checkbox-inline">
                                        <label class="m-checkbox">
                                            <input type="checkbox"/>
                                            Avenger Endgame(movie)
                                            <span></span>
                                        </label>
                                        <label class="m-checkbox">
                                            <input type="checkbox"/>
                                            Things Fall Apart(ebook)
                                            <span></span>
                                        </label>
                                        <label class="m-checkbox">
                                            <input type="checkbox"/>
                                            Super Mario(game)
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                          </div>
                        
                    </div>
                </div>	
            </div>                                        
    </div>
     
       <div class="m-portlet__foot m-portlet__foot--fit">
                    <div class="m-form__actions">
                    <div class="row">
                        <div class="col-lg-5"></div>
                        <div class="col-lg-6">
                            <button class="btn btn-primary">Map Coupon</button>
                        </div>
                    </div>
                    </div>
			</div>
   
         </form>
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
export default CouponMap