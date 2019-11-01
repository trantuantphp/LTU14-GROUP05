import React, { Component } from 'react';
import { Select, Input } from 'antd';

const InputGroup = Input.Group;
const { Option } = Select;
const { Search } = Input;

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='search-bar'>
                <InputGroup style={{ display: 'flex' }} compact>
                    <Search
                        onChange={this.props.onChangeInput}
                        className='text-input'
                        placeholder='Tìm kiếm'
                        // enterButton
                    />
                </InputGroup>
            </div>
        );
    }
}

export default SearchBar;
