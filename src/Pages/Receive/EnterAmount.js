import React, { Component } from "react";
import Layout from "../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";

import { Button, Row, Col, Image } from "react-bootstrap";

class EnterAmount extends Component {
  state = {
    disableButton: false,
    data: {
      price: "",
      contact: "",
    },
    pricebox:"price-box grey_price text-center border"
  };

  handleOnChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      data,
      pricebox:"price-box green_box text-center border"
    });
  };

  render() {
    const { data } = this.state;
    const isButtonDisable =
       data.contact.length > 0 && data.contact.length <= 1000 ? false : true;

    return (
      <Layout title="Receive Amount" backto="/receive/Contacts">
        <Row className="">
          <Col>
            <div className="texttab-show ">
              <div className="row bg-gray position-relative">
                <div className=" w-100 green-form px-3 pt-5">
                  <form>
                    <div className="input-box position-relative">
                      <input
                        type="text"
                        className="inputText w-100 mb-3 px-4"
                        placeholder="Muhammad Moez"
                        max="2"
                        name="price"
                      ></input>
                      <span className="pancal position-absolute">
                        <Link>
                          <Image src="/assets/i/pancal.svg" />
                        </Link>
                      </span>
                    </div>
                  </form>

                  <div className={this.state.pricebox}>
                    <p className="mb-3">Enter Amount</p>
                    <span className="d-flex justify-content-center green-text align-items-center text-center">
                      <span className="m-0 rs_left">Rs.</span>
                      <span className="m-0 rs_right">
                        <input
                          type="Number"
                          placeholder="0"
                          className="form-control"
                          name="contact"
                          onChange={this.handleOnChange}
                        />
                      </span>
                    </span>
                    <div className="tick-box px-3 w-100">
                      <Link to="/Receive/SelectDeposit">
                        <Button
                          disabled={isButtonDisable}
                          className="tick-gray enter_btn w-100 d-flex justify-content-center align-items-center"
                        >
                          <Image src="/assets/i/check_white.svg" />
                        </Button>
                      </Link>
                    </div>
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
export default withRouter(EnterAmount);
