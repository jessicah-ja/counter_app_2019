import React from 'react';
import PropTypes from 'prop-types';

export default class Control extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

function createWaring(funcName) {
    return () => console.warn( funcName + ' is not defined');
}

const defaultProps = {
    onPlus: createWaring('onPlus'),
    onSubtract: createWaring('onSubtract'),
    onRandomizeColor: createWaring('onRandomizeColor')
};

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;


