import React from 'react'
import ListItemSearchBar from "./support/ListItemSearchbar.js";
import UserInfo from "./support/UserInfo";
import ListItem from "./support/ListItem";
import List from "./support/List";


class Support extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (

            <div>
                <div className="m-grid m-grid--hor m-grid--root m-page">
                    {this.props.header}

                    <div style={{width: '100%'}}>


                        <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body" style={{paddingBottom: "10em"}}>
                            {this.props.sidebar}
                            <div className="m-grid__item m-grid__item--fluid m-wrapper" style={{minHeight:'65vh'}}>

                                <div className="container mt-3">
                                    <div className="card">
                                        <div className="card-body p-5">


                                            <div className="row">
                                                <div className="col">
                                                    <h3 className='text-info'>Support Messages</h3>
                                                    <List />
                                                </div>
                                                <div className="col-md-5">
                                                    <h3 className='text-info'>Message</h3>
                                                    <UserInfo />
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


export default Support;
