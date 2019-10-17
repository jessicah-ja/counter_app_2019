import React from 'react';
import Value from './Value';
import Control from './Control';


export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <Value/>
                <Control/>
            </div>
        );
    }
}

