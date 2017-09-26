import React from 'react';
import createReactClass  from 'create-react-class';

var ButtonScrollComponent = createReactClass({
    
    getInitialState() {
        return {
            intervalId: 0
        };
    },
    
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    },
    
    handleClick() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    },
    
    render () {
        return (
            <button title='Back to top' className='scroll' onClick={ this.handleClick }>
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </button>
        )
    }
});

export default ButtonScrollComponent;