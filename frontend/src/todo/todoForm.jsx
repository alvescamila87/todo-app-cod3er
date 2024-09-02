import React from "react";
import Grid from "../template/grid";
import iconButton from "../template/iconButton";
import IconButton from "../template/iconButton";

export default props => (
    // forma 1
    // <div role="form" className="todoForm">
    //     <div className="col-xs-12 col-sm-9 col-md-10">
    //         <input id="description" className="form-control" placeholder="Add a new task"></input>
    //     </div>

    //     <div className="col-xs-12 col-sm-3 col-md-2">
    //         <button className="btn btn-primary">
    //             <i className="fa fa-plus"></i>
    //         </button>
    //     </div>
    // </div>

    // forma 2: usando componente
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input id="description" className="form-control" placeholder="Add a new task"></input>
        </Grid>

        <Grid cols="12 3 2">
            <IconButton style="primary" icon="plus"></IconButton>
        </Grid>
    </div>
)