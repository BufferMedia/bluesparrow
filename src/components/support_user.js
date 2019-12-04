import React from 'react'
import ListItemSearchBar from "./support/ListItemSearchbar.js";
import UserInfo from "./support/UserInfo";
import ListItem from "./support/ListItem";
import List from "./support/List";
import SupportAdminInfo from "./support/SupportAdmin";


class SupportUser extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (

            <div>
                <div className="m-grid m-grid--hor m-grid--root m-page">
                    { this.props.header }
                    <div style={{width: '100%'}}>
                        <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body" style={{paddingBottom: "10em"}}>
                            {this.props.sidebar}
                            <div className="m-grid__item m-grid__item--fluid m-wrapper" style={{minHeight:'65vh'}}>


                                <div className="container mt-3">
                                    <div className="card">
                                        <div className="card-body p-5">

                                            <div className="row">

                                                <div className="col-md-3">
                                                    <a href="mail-compose.html" className="btn btn-danger waves-effect waves-light btn-block">New Ticket</a>
                                                    <div className="card shadow-none mt-3">
                                                        <a href="#" className="list-group-item active"><i className="fa fa-inbox mr-2"/>Your Recent Tickets</a>
                                                        <div className="list-group shadow-none" style={{maxHeight: 400, overflow: 'auto' }}>
                                                            {
                                                                [1,2,3,4,4,5,5,5,5,5,5,6,5,].map(()=>(
                                                                    <a href="#" className="list-group-item">
                                                                        <strong>#232 - I want a some car and...</strong> <br/>
                                                                        <span className='pull-left text-dark'>Answered</span>
                                                                        <span className='pull-right text-muted'>2 month ago</span>
                                                                    </a>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="col-md-9">
                                                    <h3 className='text-info'>Message</h3>
                                                    <SupportAdminInfo />
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                    {this.props.footer}
                </div>
            </div>


        )
    }

}


export default SupportUser;
