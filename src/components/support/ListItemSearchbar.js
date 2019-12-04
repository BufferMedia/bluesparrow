import React from "react";

export default function ListItemSearchBar(props){
    return (
        <div className="position-relative has-icon-right">
            <input type="text" className="form-control" placeholder="search mail"/>
            <div className="form-control-position">
                <i className="fa fa-search text-info"></i>
            </div>
        </div>
    );
}