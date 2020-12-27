import React, { Component } from "react";
import Layout from "../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";

import { Button, Row, Col, Image } from "react-bootstrap";

class SelectAccount extends Component {
  render() {
    return (
      <Layout title="Select your account" backto="/receive/SelectDeposit">
        <Row className="">
          <Col>
           
            <div className="tabs-main">
              <div className="color-lay position-fixed" />
              <div className="search-box position-relative py-4 px-3 row">
              <Link className="w-100" to="/Receive/AllBanks/AllBanksAccount">
                <form className="w-100">
                  <div className="form-group has-search w-100 m-0">
                    <span className=" form-control-feedback position-absolute">
                      <Image src="/assets/i/search.png" className="img-fluid" />
                    </span>
                    <input
                      className="border-0 w-100 pl-5"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </form>
                </Link>
              </div>
              <div className="popular-box py-3 px-3 mb-3 bg-white">
                <p>Popular Microfinance bank</p>
                <div className="jazz-main d-flex align-items-center">
                  <div className="box mr-3">
                    <Image className="micro_img" src="/assets/i/jazz.jpg" />
                  </div>
                  <div className="box">
                    <Link to="/Receive/MicrofinanceBank/MicrofinanceBank">
                      <Image
                        className="micro_img"
                        src="/assets/i/easypaisa@2x.png"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="texttab-show account-main py-3 px-3 bg-white">
                <div className="tabs-1 w-100">
                  <div className="text mt-3 mb-2">
                    <span className="p-0">Account</span>
                  </div>
                  <div className="text py-2">
                    <Link to="/" className=" d-flex align-items-center">
                      <Image src="/assets/i/hazz_cash.png" />
                      <p className="m-0 ml-4">JaazCash</p>
                    </Link>
                  </div>
                  <div className="text py-2">
                    <Link className=" d-flex align-items-center">
                      <Image src="/assets/i/habibi_bank.png" />
                      <p className="m-0 ml-4">Habib Meteropolitan</p>
                    </Link>
                  </div>
                  <div className="text py-2">
                    <Link className=" d-flex align-items-center">
                      <Image src="/assets/i/allien-bank.png" />
                      <p className="m-0 ml-4">Allied Bank</p>
                    </Link>
                  </div>
                  <div className="text py-2">
                    <Link className=" d-flex align-items-center">
                      <Image src="/assets/i/askari-bank.png" />
                      <p className="m-0 ml-4">Askari Bank</p>
                    </Link>
                  </div>
                  <div className="text py-2">
                    <Link className=" d-flex align-items-center">
                      <Image src="/assets/i/hbl-bank.png" />
                      <p className="m-0 ml-4">HBL</p>
                    </Link>
                  </div>
                  <div className="text py-2">
                    <Link className=" d-flex align-items-center">
                      <Image src="/assets/i/habib-metro.png" />
                      <p className="m-0 ml-4">Habib Meteropolitan Bank</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tick-box px-3 w-100 fixed-bottom">
                <Button className="tick-gray w-100 d-flex justify-content-center align-items-center">
                  <Image src="/assets/i/check.png" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default withRouter(SelectAccount);
