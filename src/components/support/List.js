import React from "react";

export default function List(props){
    return (
        <div className="support-message-list">
            <table className="table table-striped table-hover" style={{ width: '100%'}}> {/* condensed */}
                <tbody>
                    {
                        [1,23,4,5,6,6,1,23,4,5,6,6,1,23,4,5,6,6,1,23,4,5,6,6].map((index)=>(
                            <tr>
                                {/*<td><input type="checkbox"/> <a href="#"><i className="icon-star-empty"></i></a> </td>*/}
                                <td><strong>John Doe</strong></td>
                                <td><span className="label pull-right">Notifications</span></td>
                                <td><strong>Message body goes here</strong></td>
                                <td><strong>11:23 PM</strong></td>
                                <td>

                                    <div className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" type="button"
                                                id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="true">
                                            Action
                                            <span className="caret"></span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                            <li><a href="#"><i className='text-info fa fa-eye'/> View</a></li>
                                            <li><a href="#"><i className='text-danger fa fa-trash'/> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}


