import React, { Component } from 'react'


export default class Search extends Component {
    render() {
        return (
            <form className="form-inline">
                <div className="mx-auto mb-3">
                    <input className="form-control" onChange={this.props.methods.inputChangeHandler} type="text" name="search" value={this.props.search} />
                    <button className="btn btn-primary">Search</button>
                </div>
            </form>
        )
    }
}
