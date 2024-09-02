import React from "react";

// renderizaão condicional a partir do hide
export default props => (
    // forma 1
    // if(props.hide) {
    //     return null
    // } else {
    //     return (
    //         <button 
    //             className={'btn btn-' + props.style} 
    //             onClick={props.onClick}
    //         ><i className={'fa fa-' + props.icon}></i>
    //         </button>
    //     )
    // }

    // forma 2

    <If test={!props.hide}> 
        <button 
            className={'btn btn-' + props.style} 
            onClick={props.onClick}
        ><i className={'fa fa-' + props.icon}></i>
       </button>
    </If>

)