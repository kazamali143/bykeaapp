import React, { Component } from "react";
import Layout from "../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";

import { Button, Row, Col, Image } from "react-bootstrap";

class SelectDeposit extends Component {
  render() {
    return (
      <Layout title="Receive Money" backto="/receive/EnterAmount">
        <Row className="">
          <Col>
            <div className="texttab-show ">
              <div className=" row bg-white position-relative">
                <div className=" w-100 green-form px-3 pt-5">
                  <form>
                    <div className="input-box position-relative">
                      <input
                        type="text"
                        className="inputText w-100 mb-2 px-4"
                        value="Muhammad Moez"
                        required=""
                      ></input>
                      <span className="pancal position-absolute">
                        <Link to="/">
                          <Image src="/assets/i/pancal.svg" />
                        </Link>
                      </span>
                    </div>
                    <div className="input-box position-relative">
                      <input
                        type="text"
                        className="inputText w-100 mb-3 px-4"
                        value="Rs 1,500"
                        required=""
                      ></input>
                      <span className="pancal position-absolute">
                        <Link to="/">
                          <Image src="/assets/i/pancal.svg" />
                        </Link>
                      </span>
                    </div>
                  </form>
                  <p className="mt-2 select-para">Select Deposit Account</p>
                  <Link
                    to="/Receive/SelectAccount"
                    className="text-decoration-none add-account text-center d-flex justify-content-center align-items-center"
                  >
                    +Add an account
                  </Link>
                </div>
                <div className="tick-box px-3 w-100 fixed-bottom">
                  <Button className="tick-gray w-100 d-flex justify-content-center align-items-center">
                    <Image src="/assets/i/check_white.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default withRouter(SelectDeposit);
