import React, { Component } from "react";
import Layout from "../../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

class MicrofinanceBank extends Component {
  render() {
    return (
      <Layout title="Add Acount Number" backto="/receive/SelectAccount">
        <Row className="">
          <Col>
            <div className="texttab-show ">
              <div className="color-lay position-fixed" />
              <div className=" row bg-gray position-relative">
                <div className="w-100 px-3">
                  <div className="botal green-form mb-3 position-relative px-3 d-flex justify-content-between align-items-center mt-3">
                    <Image className="easy_small" src="/assets/i/easy-small@2x.png" />
                    <p className="m-0 position-absolute">
                      Habib Metropolitan Bank
                    </p>
                    <span className="pancal position-absolute">
                      <Link to="">
                        <Image src="/assets/i/pancal.png" />
                      </Link>
                    </span>{" "}
                  </div>
                  <div className="bg-white p-3 mb-2">
                    <p className="text-grey_two account_sub_title">
                      Enter Mobile No
                    </p>
                    <form className="form-box">
                      <div className="input-box position-relative">
                        <input
                          type="text"
                          className="inputText w-100 mb-3 px-4 pt-0"
                          placeholder="03451234567"
                          required
                        />
                       
                      </div>
                    </form>
                    <p className="green-text font-size-12">
                      Please enter the mobile number registered with this
                      account
                    </p>
                  </div>
                  <div className="bg-white p-3 mb-2">
                    <p className="text-grey_two account_sub_title">
                      Enter CNIC No
                    </p>
                    <form className="form-box">
                      <div className="input-box position-relative">
                        <input
                          type="text"
                          className="inputText w-100 mb-3 px-4 pt-0"
                          placeholder="xxxxx-xxxxxxx-x"
                          required
                        />
                      </div>
                    </form>
                    <p className="green-text font-size-12">
                      Enter your CNIC number
                    </p>
                  </div>
                  <div className="tick-box px-3 w-100 fixed-bottom">
                    {" "}
                    <Link
                      to="/Receive/MicrofinanceBank/MicroBankSelected"
                      className="tick-gray w-100 d-flex justify-content-center align-items-center"
                    >
                      <Image src="/assets/i/check.png" />
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default withRouter(MicrofinanceBank);
