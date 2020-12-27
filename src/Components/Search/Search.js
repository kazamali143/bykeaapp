import React from 'react';
import {Form ,InputGroup, Image} from "react-bootstrap";


function Search(){

    return(
        <div className="search-box position-relative py-4 px-3 row">
        <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>
                <Image  src="/assets/i/search.png" />
            </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
            type="text"
            placeholder="Search here.."
        />
    </InputGroup>
    </div>
    );
}

export default Search;