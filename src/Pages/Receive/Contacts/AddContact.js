import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

class AddContact extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className="texttab-show ">
              <div className="tabs-2 row bg-gray position-relative">
                <div className="color-lay position-fixed" />
                <div className=" w-100  form-box px-3 pt-5">
                  <p className="px-2">Add new contact</p>
                  <form>
                    <div className="input-box position-relative">
                      <input
                        type="text"
                        className="inputText w-100 mb-3 px-4"
                        required
                      />
                      <span className="floating-label">Name</span>
                    </div>
                    <div className="input-box position-relative">
                      <input
                        type="Numbar"
                        className="inputText w-100 mb-3 px-4"
                        required
                      />
                      <span className="floating-label">Mobile Number</span>
                    </div>
                  </form>
                </div>
                <div className="tick-box px-3 w-100 fixed-bottom">
                  <Link
                    to="/Receive/EnterAmount"
                    className="tick-gray w-100 d-flex justify-content-center align-items-center"
                  >
                    <Image src="/assets/i/check_white.svg" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(AddContact);
