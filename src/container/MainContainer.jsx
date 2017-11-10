import React from 'react';
import {connect} from 'react-redux';
import {fetchStart, fetchCancel, popupShow} from '../actions/index';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let url;
        event.preventDefault();
        this.setState({value:""});
        if(this.state.value !== 'GOOD') {
            url = 'api/bad';
        } else {
            url = 'api/good';
        }
        this.props.fetchStart(url);
    }

    render() {
        const {fetching, time} = this.props.state;
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    <select name="cars"
                            value={this.state.value}
                            onChange={this.handleChange} >
                        <option></option>
                        <option value="GOOD">GOOD REQUEST</option>
                        <option value="BAD">BAD REQUEST</option>
                    </select>
                    <input type="Submit" value="SEND" />
                    {
                        fetching || time ?
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.popupShow()
                                }}>
                                SHOW POPUP
                            </button>
                            : null
                    }
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStart: (url) => (
            dispatch(fetchStart(url))
        ),
        fetchCancel: (url) => (
            dispatch(fetchCancel(url))
        ),
        popupShow: () => (
            dispatch(popupShow())
        )
    }
};
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
