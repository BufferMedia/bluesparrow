import React from 'react';
import {Redirect} from 'react-router-dom';
import * as jq from 'jquery';
import axios from '../axios'
import SideNavigation from './sidebar.js';
import Header from './header.js'
import Scripts from './script.js'
import Footer from './footer'
import Quicksidebar from './quicksidebar'
import Dashboard from './dashboard'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/nigeriaLow";
const Chart = require('chart.js');
const moment = require('moment');

class Home extends React.Component{
	constructor(props){
		super(props)
	}
	plotGraph(){
		
		(function(){
			let chart = am4core.create("portalChartDiv", am4charts.PieChart);

	        // Create pie series
	        let series = chart.series.push(new am4charts.PieSeries());
	        series.dataFields.value = "Sales";
	        series.dataFields.category = "Portal";

	        // Add data
	        chart.data = [{
	          "Portal": "Audebook",
	          "Sales": 501.9
	        }, {
	          "Portal": "PlayCode",
	          "Sales": 3019
	        }, {
	          "Portal": "BoxAfrica",
	          "Sales": 1470
	        },
	        {
	          "Portal": "Music365",
	          "Sales": 3510
	        }];

	        // And, for a good measure, let's add a legend
	        chart.legend = new am4charts.Legend();

		})()

        // Create map instance
		var chart = am4core.create("chartdiv", am4maps.MapChart);

		// Set map definition
		chart.geodata = am4geodata_worldLow;

		// Set projection
		chart.projection = new am4maps.projections.Miller();

		// Create map polygon series
		var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

		// Make map load polygon (like country names) data from GeoJSON
		polygonSeries.useGeodata = true;

		// Configure series
		var polygonTemplate = polygonSeries.mapPolygons.template;
		polygonTemplate.tooltipText = "{name}";
		polygonTemplate.fill = am4core.color("rgb(123, 100, 200)");

		// Create hover state and set alternative fill color
		var hs = polygonTemplate.states.create("hover");
		hs.properties.fill = am4core.color("#eee");
	}

	componentDidMount(){
		const isLoggedIn = axios.isLoggedIn();
		if(!isLoggedIn)return false;
		const $ = jq;
		let locations = [];
	    $.get("https://restcountries.eu/rest/v2/all", function(data, status){
	        for(var x in data){
	          var r = Math.ceil(Math.random()*120);
	          var htm = "<div class=\"countries\">\
	                  <div class=\"countries-img\" style=\"background-image: url('"+data[x].flag+"');\"></div>\
	                  <div class=\"countries-text\">\
	                    <span class=\"help-block\">"+data[x].name+"</span><br/>\
	                    <strong style='color:#444'>"+r+"</strong>\
	                  </div>\
	                </div><hr/>";
	          	locations.push({lat:data[x].latlng[0], lng:data[x].latlng[1]});
	          	$("#allCountries").append(htm);
	        }
	    })

	    //Dougnut Chart
		let doug1 = function(){
			var data1 = {
			    datasets: [{
			        data: [39, 120],
			        backgroundColor: [
			            'rgb(75, 99, 132)',
			            'rgba(51, 120,19, 0.3)'
			        ]
			    }],
			    // These labels appear in the legend and in the tooltips when hovering different arcs
			    labels: [
			        'New Users',
			        'Returning Users'					    ]
			};


			var data2 = {
			    datasets: [{
			        data: [39, 29, 30, 120],
			        backgroundColor: [
			            'rgb(255, 99, 132)',
			            'rgb(54, 162, 235)',
			            'rgb(255, 206, 86)',
			            'rgb(210, 20,190)'
			        ]
			    }],

			    // These labels appear in the legend and in the tooltips when hovering different arcs
			    labels: [
			        'Organic',
			        'Referral',
			        'Direct',
			        'Others'					    ]
			};

			var myDoughnutChart = new Chart(document.getElementById("doughnutArea").getContext("2d"), {
			    type: 'doughnut',
			    data: data2,
			    
			});

			var myPieChart = new Chart(document.getElementById("uniqueDoughnut").getContext("2d"), {
			    type: 'pie',
			    data: data1,
			    
			});
		}
		//Line Chart
		let lineChart = ($month)=>{

			let $j = 0;
			let $data = [];
			while($j < 1000){
				let p = ($j%50 < 30)? 20: Math.ceil(Math.random()*100);

				$data.push([$j, p]);
				$j++;
			}
//
			let lineData = {
		        labels: [],

		        datasets: [{
		            label: 'Sales',
		            data: [],
		            borderWidth: 1,
		            backgroundColor: "rgba(90, 127, 240, 0.5)"
		        }]
		    };

		    let $a = 1;
		    let $year = "2019";
		    
		    let $total = (new Date($year,$month, "0")).getDate();

		    while($a <= $total){
		    	var d = new Date($year+"/"+$month+"/"+$a);
		    	var label = moment({y:d.getFullYear(), M:$month-1, d:$a}).format("Do MMM");
		    	var rand = Math.ceil(Math.random()*100);
		    	lineData.labels.push(label);
		    	lineData.datasets[0].data.push({x:d.getTime(), y:rand});
		    	$a++;
		    }


			let ctx3 = document.getElementById('timeSeries').getContext('2d');
			let lineChart2 = new Chart(ctx3, {
				    type: 'line',
				    data: lineData,
				    options: {
				        scales: {
				            yAxes: [{
				                stacked: true,
				                label:"chuks"
				            }]
				        },
				        fill:true,
				        backgroundColor: "rgb(80, 117, 230)"
				    }
				});

			document.getElementById('lineChart2').height = "400px";

			let ctx4 = document.getElementById('lineChart2').getContext('2d');
			let lineChart4 = new Chart(ctx4, {
				    type: 'line',
				    data: lineData,
				    options: {
				        scales: {
				            yAxes: [{
				                stacked: true
				            }]
				        },
				        fill:true,
				        
				        backgroundColor: "rgb(160, 160, 160)"
				    }
				});
			return [lineChart2, lineChart4];
		}

		function Init(){
			doug1();
			var l = lineChart(1);
			$("#monthSelect").change(function(){
				
				let lineData = {
			        labels: [],

			        datasets: [{
			            label: 'Sales',
			            data: [],
			            borderWidth: 1,
			            backgroundColor: "rgba(90, 127, 240, 0.5)"
			        }]
			    };

			    let $a = 1;
			    let $year = "2019";
			    let $month = this.value;
			    let $total = (new Date($year,$month, "0")).getDate();

			    while($a <= $total){
			    	var d = new Date($year+"/"+$month+"/"+$a);
			    	var label = moment({y:d.getFullYear(), M:$month-1, d:$a}).format("Do MMM");
			    	var rand = Math.ceil(Math.random()*100);
			    	lineData.labels.push(label);
			    	lineData.datasets[0].data.push({x:d.getTime(), y:rand});
			    	$a++;
			    }
			    l[1].data.labels = lineData.labels;
			    l[1].data.datasets = lineData.datasets;
				l[1].update();
			})
		}

		Init();

		//End of Dougnut
		this.plotGraph()
  	}

	render(){

		const isLoggedIn = axios.isLoggedIn();
		if(!isLoggedIn)
			return window.location.href = "/"
		return (
			<div>
			<div className="m-grid m-grid--hor m-grid--root m-page">
			{/*<!-- BEGIN: Header -->*/}
			<Header/>
			{/*<!-- END: Header -->*/}

			{/*<!-- begin::Body -->*/}
			<div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

				{/*<!-- BEGIN: Left Aside -->*/}
				
        		<SideNavigation />

				{/*<!-- END: Left Aside -->*/}
				<div className="m-grid__item m-grid__item--fluid m-wrapper">

					{/*<!-- BEGIN: Subheader -->*/}
					<div className="m-subheader ">
						<div className="d-flex align-items-center">
							<div className="mr-auto">
								<h3 className="m-subheader__title"><i className="flaticon-analytics"></i>Dashboard</h3>
								
							</div>
						
							{/*<?php include("common/quick_actions.html"); ?>	*/}
											
						</div>
					</div>

					{/*<!-- END: Subheader -->*/}
					<div className="m-content">

						
						<div className="m-portlet m-portlet--full-height" style={{"borderRadius":"5px"}}>
							<div className="m-portlet__body" style={{"color":"#888"}}>
								<div className="row">
									<div className="col-sm-6">
										<strong>Portal Perfomance</strong>
									</div>
									<div className="col-sm-6 text-right">
										<strong>select portal</strong>
										<select type="text" style={{"borderRadius":"10px"}}>
											<option>All</option>
											<option>Audebook</option>
											<option>BoxAfrica</option>
											<option>Musik365</option>
											<option>PlayCode</option>
										</select>
									</div>
								</div><hr/>
								<div className="row">
									<div className="col-md-4" style={{"padding":"30px", "borderRight":"1px solid #eee"}}>
										<div className="row">
											<div className="col-sm-12">
												<span className="help-block">Total Invoice</span>
											</div>
										</div>
										<div className="row">
											<div className="col-xs-6">
												<h1 style={{"fontSize":"50px","paddingLeft":"15px", "color":"#444"}}>1,500</h1>
											</div>
											<div className="col-xs-6 text-right">
												<i className="fa fa-4x flaticon-list-2"></i>
											</div>
										</div>
									</div>
									<div className="col-md-4" style={{"padding":"30px", "borderRight":"1px solid #eee"}}>
										<div className="row">
											<div className="col-sm-12">
												<span className="help-block">Total Product</span>
											</div>
										</div>
										<div className="row">
											<div className="col-xs-6">
												<h1 style={{"fontSize":"50px", "paddingLeft":"15px","color":"#444"}}>1,000</h1>
											</div>
											<div className="col-xs-6 text-right">
												<i className="fa fa-4x flaticon-coins"></i>
											</div>
										</div>
									</div>
									<div className="col-md-4" style={{"padding":"30px"}}>
										<div className="row">
											<div className="col-sm-12">
												<span className="help-block">Total Subscribers</span>
											</div>
										</div>
										<div className="row">
											<div className="col-xs-6">
												<h1 style={{"fontSize":"50px", "paddingLeft":"15px","color":"#444"}}>1,400</h1>
											</div>
											<div className="col-xs-6 text-right">
												<i className="fa fa-4x flaticon-users"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="m-portlet m-portlet--full-height" style={{"borderRadius":"5px"}}>
							<div className="m-portlet__body" style={{"color":"#888", "border":"5px solid #dfdfdf", "borderTopLeftRadius":"5px", "borderTopRightRadius":"5px"}}>
								<div className="row">
									<div className="col-sm-4">
										<span id="hoverText"></span>
									</div>
									<div className="col-sm-8">
										<div className="text-center" style={{"display":"flex", "overflowX":"scroll"}}>
											<div style={{"padding":"5px"}}>
												<span style={{"color":"#b1b1b1"}}>Total Sold</span><br/>
												<strong>20</strong>
											</div>

											<div style={{"padding":"5px"}}>
												<span style={{"color":"#b1b1b1"}}>New Invoice</span><br/>
												<strong>15</strong>
											</div>

											<div style={{"padding":"5px"}}>
												<span style={{"color":"#b1b1b1"}}>Total Revenue</span><br/>
												<strong>&#8358;40,300</strong>
											</div>

											<div style={{"padding":"5px"}}>
												<span style={{"color":"#b1b1b1"}}>Total Profit</span><br/>
												<strong>&#8358;204,300</strong>
											</div>

											<div>
												<strong></strong>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="m-portlet__body" style={{"color":"#888", border:"5px solid #dfdfdf"}}>
								
								<div className="row">
									<div className="col-sm-12">
										<div>
											<select id="monthSelect">
												<option value="1">Jan</option>
												<option value="2">Feb</option>
												<option value="3">Mar</option>
												<option value="4">April</option>
												<option value="5">May</option>
												<option value="6">June</option>
												<option value="7">July</option>
												<option value="8">Aug</option>
												<option value="9">Sept</option>
												<option value="10">Oct</option>
												<option value="11">Nov</option>
												<option value="12">Dec</option>
											</select>
										</div>
										<div>
											<canvas  style={{"height":"200px"}} id="lineChart2"></canvas>
										</div>
										
									</div>
								</div>
							</div>
							<div className="m-portlet__body" style={{"color":"#888","border":"5px solid #dfdfdf"}}>
								<h5>SALES BREAKDOWN</h5>
								<div className="row">
									<div className="col-sm-12" style={{"overflowX":"auto"}}>
										<table className="table m-datatable1">
											<thead>
												<tr>
													<th>Product Category</th>
													<th>Content Type</th>
													<th>Total Sales</th>
													<th>Total Coupon</th>
													<th>Visitor</th>
													<th>Total Revenue</th>
													<th>Net Profit</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Drama</td>

													<td>Ebook</td>
													<td>12</td>
													<td>15</td>
													<td>11</td>
													<td>&#8358;34,090</td>
													<td>&#8358;12,200</td>
												</tr>
												<tr>
													<td>Romance</td>
													<td>Audiobook</td>
													<td>1</td>
													<td>15</td>
													<td>5</td>
													<td>&#8358;4,090</td>
													<td>&#8358;3,200</td>
												</tr>
												<tr>
													<td>Poetry</td>
													<td>EPub</td>
													<td>12</td>
													<td>11</td>
													<td>15</td>
													<td>&#8358;34,090</td>
													<td>&#8358;12,200</td>
												</tr>
												<tr>
													<td>Business</td>
													<td>pdf</td>
													<td>9</td>
													<td>15</td>
													<td>15</td>
													<td>&#8358;12,090</td>
													<td>&#8358;29,200</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>

						<div className="m-portlet m-portlet--full-height" style={{"borderRadius":"5px"}}>
							<div className="m-portlet__body" style={{"color":"#888","border":"5px solid #dfdfdf","borderTopLeftRadius":"5px","borderTopRightRadius":"5px"}}>
								<div className="row">
									<div className="col-sm-6">
										<div className="row">
											<div className="col-sm-6">
												<div style={{"borderRadius":"10px","boxShadow":"3px 4px 10px #ccc"}}>
													<div style={{"padding":"10px","borderBottom":"1px solid #efefef"}}>Page Views by traffic Type</div>
													<div style={{"padding": "10px"}}>
														<canvas id="doughnutArea" height="100" width="100%"></canvas>
													</div>
												</div><br/>
												<div style={{"borderRadius":"10px", "boxShadow":"3px 4px 10px #ccc"}}>
													<div style={{"padding":"10px", "borderBottom":"1px solid #efefef"}}>Page Views By Day of week <span className="pull-right"><i className="flaticon-graph"></i></span></div>
													
													<div className="allviewsDashboard">
														<div className="view-single" style={{"padding":"15px","borderBottom":"1px solid #efefef"}}>
															<div className="views-head" style={{"color":"#444"}}><strong>Week 1</strong></div>
															<div style={{"overflowY":"hidden"}}>
																<span>Page Views (410)</span>
																<span className="pull-right"><i className="flaticon-visible"></i> 25</span>
															</div>
														</div>

														<div className="view-single" style={{"padding":"15px","borderBottom":"1px solid #efefef"}}>
															<div className="views-head" style={{"color":"#444"}}><strong>Week 2</strong></div>
															<div style={{"overflowY":"hidden"}}>
																<span>Page Views (120)</span>
																<span className="pull-right"><i className="flaticon-visible"></i> 35</span>
															</div>
														</div>

														<div className="view-single" style={{"padding":"15px", "borderBottom":"1px solid #efefef"}}>
															<div className="views-head" style={{"color":"#444"}}><strong>Week 3</strong></div>
															<div style={{"overflowY":"hidden"}}>
																<span>Page Views (110)</span>
																<span className="pull-right"><i className="flaticon-visible"></i> 5</span>
															</div>
														</div>

														<div className="view-single" style={{"padding":"15px"}}>
															<div className="views-head" style={{"color":"#444"}}><strong>Week 4</strong></div>
															<div style={{"overflowY":"hidden"}}>
																<span>Page Views (12)</span>
																<span className="pull-right"><i className="flaticon-visible"></i> 3</span>
															</div>
														</div>
													</div>
												</div><br/>
											</div>
											<div className="col-sm-6">
												<div style={{"borderRadius":"10px", "boxShadow":"3px 4px 10px #ccc"}}>
													<div style={{"padding":"10px","borderBottom":"1px solid #efefef"}}>Total time on site</div>
													
													<div style={{"padding":"10px"}}>
														<strong style={{"color":"#444"}}>201:15:19</strong>
													</div>
												</div><br/>

												<div style={{"borderRadius":"10px","boxShadow":"3px 4px 10px #ccc"}}>
													<div style={{"padding":"10px","borderBottom":"1px solid #efefef"}}>Unique Visitors By Visitors' type</div>
													
													<div style={{"padding":"10px","height":"150"}}>
														<canvas height="100" id="uniqueDoughnut" width="100%"></canvas>
													</div>
												</div>
											</div>
										</div>
									</div><br/>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-sm-6">
												<div style={{"borderRadius":"10px","boxShadow":"3px 4px 10px #ccc"}}>
													<div style={{"padding":"10px", "borderBottom":"1px solid #efefef"}}>Unique Visitors</div>
													
													<div style={{"padding":"10px"}}>
														<strong style={{"color":"#444"}}>78,900</strong>
														<div>
															<span className="help-block">% of total 100.00 (78.00)</span>
														</div>
													</div>
												</div><br/>
											</div>
											<div className="col-sm-6">
												<div style={{"borderRadius":"10px", "boxShadow":"3px 4px 10px #ccc"}}>
													<div style={{"padding":"10px", "borderBottom":"1px solid #efefef"}}>Total Visits</div>
													
													<div style={{"padding":"10px"}}>
														<strong style={{"color":"#444"}}>21,310</strong>
														<div>
															<span className="help-block">% of total 100.00 (48.00)</span>
														</div>
													</div>
												</div><br/>
											</div><br/>

											<div className="col-sm-12">
												<div style={{"borderRadius":"10px", "boxShadow":"3px 4px 10px #ccc"}}>
													<div style={{"padding":"10px", "borderBottom":"1px solid #efefef"}}>Unique Visitors and visits</div>
													
													<div style={{"padding":"10px"}}>
														<div>
															<canvas id="timeSeries" style={{"height":"200px"}}></canvas>
														</div>
													</div>
												</div><br/>

												<div style={{"borderRadius":"10px","boxShadow":"3px 4px 10px #ccc"}}>
													<div style={{"padding":"10px", "borderBottom":"1px solid #efefef"}}>Top 10 Content Providers</div>
													
													<div style={{"padding":"10px","overflowX":"auto"}}>
														<table className="table m-datatable1">
															<thead>
																<tr>
																	<th>S/N</th>
																	<th>Name</th>
																	<th>Total Content</th>
																	<th>Total Opens</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>1</td>
																	<td>Ewurum Augustine</td>
																	<td>2500</td>
																	<td>100</td>
																</tr>
																<tr>
																	<td>2</td>
																	<td>Oladejo Ayomikun</td>
																	<td>500</td>
																	<td>230</td>
																</tr>
																<tr>
																	<td>3</td>
																	<td>Anifanu Adedayo</td>
																	<td>1200</td>
																	<td>360</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div><br/>
											</div>


										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="m-portlet m-portlet--full-height" style={{"borderRadius":"5px"}}>
							<div className="m-portlet__body" style={{"color":"#888", "border":"5px solid #dfdfdf", "borderTopLeftRadius":"5px", "borderTopRightRadius":"5px"}}>
								<div style={{"padding":"10px", "borderBottom":"1px solid #eee"}}>
									<h3><strong>General Report</strong></h3>
								</div><br/>
								<div className="row">
									<div className="col-sm-6">
										<div className="text-center">
											<strong>Top Selling Portal</strong>
										</div>
										<div id="portalChartDiv" style={{"width":"100%","height":"450px"}}>
											
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row" style={{"border":"5px solid #eee"}}>

											
											<div className="col-sm-4">
												<div style={{"borderRadius":"10px"}}>
													<div style={{"padding":"10px", "borderBottom": "1px solid #efefef"}}><strong>Views By Country</strong></div>
													
													<div id="allCountries">
														
													</div>
												</div><br/>
											</div>
											<div className="col-sm-8">
												<div id="chartdiv" style={{"width": "100%","height":"450px"}}>
											
												</div>
											</div>


										</div>
											
									</div>
								</div>
							</div>
						</div>


						<Dashboard/>

					</div>
				</div>
			</div>
			<Scripts/>
			{/*<!-- end:: Body -->*/}

			{/*<!-- begin::Footer -->*/}
			<Footer/>
			{/*<!-- end::Footer -->*/}
		</div>
		<Quicksidebar/>
		</div>
		)
	}
}

export default Home