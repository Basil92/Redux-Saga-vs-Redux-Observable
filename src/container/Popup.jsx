import React from 'react';
import {connect} from 'react-redux';
import {popupHide, fetchCancel, fetchRetry} from '../actions/index';

class Popup extends React.Component {
    render() {
        let popup = this.props.state.popup;
        return (
            popup
                ?<div className="Popup">
                    <div className="PopupBlock">
                        <div>I AM POPUP</div>
                        {
                            this.props.state.time?
                                this.props.state.time
                                :null
                        }
                        <br/>
                        {
                            this.props.state.response?
                                JSON.stringify(this.props.state.response)
                                :null
                        }
                        <button value="HIDE"
                                onClick={()=>this.props.fetchHide()}>
                            HIDE
                        </button>
                        <button value="CANCEL"
                                onClick={()=> {
                                    this.props.fetchCancel();
                                }}>
                            CANCEL
                        </button>
                        {
                            this.props.state.retry?
                                <button value="RETRY"
                                        onClick={()=> {
                                            this.props.fetchRetry(this.props.state.url);
                                        }}>
                                    RETRY
                                </button>
                                :null
                        }
                    </div>
                </div>
                :null
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCancel: (url) => (
            dispatch(fetchCancel(url))
        ),
        fetchHide: (url) => (
            dispatch(popupHide(url))
        ),
        fetchRetry: (url) => (
            dispatch(fetchRetry(url))
        ),
    }
};
const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
