import React, { Component } from "react";
import Layout from "../../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";

import { Modal, Button, Row, Col, Image } from "react-bootstrap";

class MicroBankSelected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Layout
        title="Receive Money"
        backto="/receive/MicrofinanceBank/MicrofinanceBank"
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
                      src="/assets/i/easy-small@2x.png"
                    />
                    <p className="m-0 position-absolute pl-3">Easypaisa</p>
                    <form action="#">
                      <p className="m-0">
                        <input type="radio" id="test1" name="radio-group" checked/>
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
                  <Button
                    onClick={() => {
                      this.handleModal();
                    }}
                    className="tick-gray tick-green-text w-100 d-flex justify-content-center align-items-center"
                  >
                    <Image src="/assets/i/check.png" />
                  </Button>
                </div>
              </div>
            </div>

            <Modal 
            animation={false}
              className="account_confirm_model"
              class="modal-backdrop foo-modal-backdrop in kkkk"
              show={this.state.show}
              onHide={() => {
                this.handleModal();
              }}
            >
              <Modal.Header closeButton className="text-center">
                <h4 className="text-center popup_heading">
                  Confirm Bank Account
                </h4>
              </Modal.Header>
              <Modal.Body>
                <div className="bg-white p-2 position-relative">
                  <div className="border-bottom mb-4">
                    <p className="mb-0 text-grey_two">Account Name</p>
                    <p className="text-black">
                      <strong>Habib Metropolitan Bank</strong>
                    </p>
                  </div>
                  <div className="border-bottom mb-4">
                    <p className="mb-0 text-grey_two">Account Number</p>
                    <p className="text-black">
                      <strong>PK22 MBPL 0022 3322 1112 2213</strong>
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="mb-0 text-grey_two">Title</p>
                    <p className="text-black">
                      <strong>Moez Ansari</strong>
                    </p>
                  </div>
                  <div className="tick-box w-100 d-flex justify-content-between">
                    <Link
                      to="/Receive/MicrofinanceBank/CreateInvoice"
                      className="tick-gray tick-green-text d-flex justify-content-center align-items-center"
                    >
                      Confirm
                    </Link>
                    <Button className="icon-dote tick-gray d-flex justify-content-center align-items-center ml-3">
                      <Image src="/assets/i/pencil_two.svg" />
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default withRouter(MicroBankSelected);
