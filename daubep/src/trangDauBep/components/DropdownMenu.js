import React, { Component } from 'react'
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import '../css/index.css';

export default class DropDownMenu extends Component {
    render() {
        const options = [{ id: 'custom-id', value: '1', label: <span class = "dropMenu" >Ẩn</span>, view: <span>Ẩn</span> },
                                { id: 'custom-id', value: "2", label: <span>Hiện</span>, view: <span>Hiện</span> }];
        return (
            
            <Dropdown
                // disabled="True"
                options={options}
                value="1"

                onChange={(value) => console.log('change!', value)}
                onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                onOpen={() => console.log('open!')}
            />
        )
    }
}
