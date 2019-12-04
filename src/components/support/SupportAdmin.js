import React from "react";

export default function SupportAdminInfo(props){
    return (
        <div
            className="card shadow-none mt-3 border border-light">
            <div className="card-body">
                <div>
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <h3>Department</h3>
                                <p>Technical Support</p>
                            </div>
                            <div className="col-md-4">
                                <h3>Submitted</h3>
                                <p>Saturday, June 22nd, 2019 (18:05)</p>
                            </div>
                            <div className="col-md-4">
                                <h3>Priority</h3>
                                <p>High</p>
                            </div>
                        </div>
                    </div>
                </div>


                <hr/>
                <div style={{height: '500px', overflow:'scroll'}}>
                    <div className="clearfix"></div>
                    <ChatWidget isAdmin={true} title="Dear Admin" body="blablablabla...."  />
                    <ChatWidget isAdmin={false} title="Dear Admin" body="blablablabla...."  />
                    <ChatWidget isAdmin={false} title="Dear Admin" body="blablablabla...."  />
                    <ChatWidget isAdmin={true} title="Dear Admin" body="blablablabla...."  />
                    <ChatWidget isAdmin={true} title="Dear Admin" body="blablablabla...."  />
                    <ChatWidget isAdmin={true} title="Dear Admin" body="blablablabla...."  />
                    <ChatWidget isAdmin={false} title="Dear Admin" body="blablablabla...."  />
                    <ChatWidget isAdmin={false} title="Dear Admin" body="blablablabla...."  />
                    <ChatWidget isAdmin={true} title="Dear Admin" body="blablablabla...."  />
                    <ChatWidget isAdmin={true} title="Dear Admin" body="blablablabla...."  />
                    <div className="clearfix"></div>
                </div>
                <hr/>


                {/*<div className="row">
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
                </div>*/}

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
                            placeholder="Reply here...">
                        </textarea>
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
    );
}



class ChatWidget extends React.Component{

    constructor(props){
        super(props);

    }

    render() {
        const {isAdmin, subject, body} = this.props;
        return (
            <div>
                <div style={{backgroundColor:isAdmin? '#65aa8b': '#abe0ee', width: '80%', borderRadius:'10px', float: isAdmin? 'right': 'left', padding:'15px', margin: '15px' }}>
                    <p><b>Hi Sir...</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean commodo ligula
                        eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem.</p>
                </div>
            </div>
        );
    }
}