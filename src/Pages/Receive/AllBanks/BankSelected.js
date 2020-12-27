import React, { Component } from "react";
import Layout from "../../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

class BankSelected extends Component {

  render() {
    return (
      <Layout
        title="Receive Money"
        backto="/receive/AllBanks/AllBanksAccount"
      >
        <Row>
          <Col>
            <div className="texttab-show">
              <div className="row bg-white position-relative">
                <div className="w-100 green-form px-3 pt-5">
                  <form>
                    <div className="input-box position-relative">
                      <input
                        type="text"
                        className="inputText w-100 mb-3 px-4"
                        defaultValue="Muhammad Moez"
                        required
                      />
                      <span className="pancal position-absolute">
                        <Link To="/">
                          <Image src="/assets/i/pancal.png" />
                        </Link>
                      </span>
                    </div>
                    <div className="input-box position-relative">
                      <input
                        type="text"
                        className="inputText w-100 mb-3 px-4"
                        defaultValue="Rs 1,500"
                        required
                      />
                      <span className="pancal position-absolute">
                        <Link>
                          <Image src="/assets/i/pancal.png" />
                        </Link>
                      </span>
                    </div>
                  </form>
                  <p className="mt-2 select-para">Select Deposit Account</p>
                  <div className="botal mb-3 px-3 d-flex justify-content-between align-items-center">
                    <Image
                      className="easy_small"
                      src="/assets/i/habib-metro.png"
                    />
                    <p className="m-0 position-absolute pl-3">Habib Metropolitan Bank</p>
                    <form action="#">
                      <p className="m-0">
                        <input type="radio" id="test1" name="radio-group" checked />
                        <label htmlFor="test1" className="m-0">
                          Apple
                        </label>
                      </p>
                    </form>
                  </div>
                  <Link className="text-decoration-none add-account text-center d-flex justify-content-center align-items-center">
                    +Add an account
                  </Link>
                </div>
                <div className="tick-box px-3 w-100 fixed-bottom">
                  <Link
                   to="/receive/AllBanks/BankCreateInvoice"
                    className="tick-gray tick-green-text w-100 d-flex justify-content-center align-items-center"
                  >
                    <Image src="/assets/i/check.png" />
                  </Link>
                </div>
              </div>
            </div>

           </Col>
        </Row>
      </Layout>
    );
  }
}

export default withRouter(BankSelected);
