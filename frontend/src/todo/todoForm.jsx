import React, { Component } from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"; 
import { add, changeDescription, search, clear } from "./todoActions";

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    //método do ciclo de vida
    componentWillMount() {
        this.props.search() 
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props
        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if(e.key === 'Escape') {
            clear()
        }
    }

    render() {

        const { add, search, description } = this.props

        // template do componente que estava como function
        return (
            <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input 
                    id="description" 
                    className="form-control" 
                    placeholder="Add a new task"
                    //onChange={props.handleChange}
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHandler}
                    value={this.props.description}
                ></input>
            </Grid>

            <Grid cols="12 3 2">
                <IconButton 
                    style="primary" 
                    icon="plus"
                    onClick={() => add(description)}
                />
                <IconButton 
                    style='info'
                    icon='search'
                    onClick={() => search()}
                />
                <IconButton
                    style="default"
                    icon="close"
                    //onClick={this.props.handleClear}
                    onClick={this.props.clear}
                />
            </Grid>
        </div>
        )
    }
}

// function TodoForm(props) {
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

    // adicionar teclas de atalho do teclado
    // const keyHandler = (e) => {
        // if(e.key === 'Enter') {
        //     e.shiftKey ? props.handleSearch() : props.handleAdd()
        // } else if(e.key === 'Escape') {
        //     props.handleClear()
        // }
    // }
    // return (
        // <div role="form" className="todoForm">
        //     <Grid cols="12 9 10">
        //         <input 
        //             id="description" 
        //             className="form-control" 
        //             placeholder="Add a new task"
        //             //onChange={props.handleChange}
        //             onChange={props.changeDescription}
        //             onKeyUp={keyHandler}
        //             value={props.description}
        //         ></input>
        //     </Grid>

        //     <Grid cols="12 3 2">
        //         <IconButton 
        //             style="primary" 
        //             icon="plus"
        //             onClick={props.handleAdd}
        //         />
        //         <IconButton 
        //             style='info'
        //             icon='search'
        //             onClick={props.handleSearch}
        //         />
        //         <IconButton
        //             style="default"
        //             icon="close"
        //             onClick={props.handleClear}
        //         />
        //     </Grid>
        // </div>
//     )
// }

function mapStateToProps(state){
    return {
        description: state.todo.description
    }
}
/* forma nova
const mapStateToProps = state => 
    ({ description: state.todo.description })
*/

const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

