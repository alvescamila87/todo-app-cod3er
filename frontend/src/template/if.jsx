import React from "react";

export default props => {
    if(props.test) {
        // retorne o objeto dentro da tag if
        return props.children
    } else {
        return false
    }
}