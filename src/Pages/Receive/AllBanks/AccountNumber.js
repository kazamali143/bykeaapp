import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { Image } from "react-bootstrap";

class AccountNumber extends Component {
  render() {
    return (
        <div>
        <div className="mb-2">
          <p className="text-grey_two account_sub_title">Enter Account No</p>
          <form className="form-box">
            <div className="input-box position-relative">
              <input
                type="text"
                className="inputText w-100 mb-3 px-4 pt-0"
                placeholder="0000 0011 2345 6702"
                required
              />
             
            </div>
          </form>
          <p className="green-text font-size-12 mb-0">
          Please enter [Insert]-digita account number
          </p>
        </div>
        
        <div className="tick-box px-3 w-100 fixed-bottom">
          <Link
            className="tick-gray w-100 d-flex justify-content-center align-items-center"
          >
            <Image src="/assets/i/check.png" />
          </Link>
        </div>
      </div>
   
    );
  }
}
export default withRouter(AccountNumber);
