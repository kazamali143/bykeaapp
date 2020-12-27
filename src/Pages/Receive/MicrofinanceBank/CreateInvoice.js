import React, { Component } from "react";
import Layout from "../../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";

import { Modal, Button, Row, Col, Image } from "react-bootstrap";

class CreateInvoice extends Component {
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
        backto="/receive/MicrofinanceBank/MicroBankSelected"
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
                        className="inputText w-100 mb-2 px-4"
                        defaultValue="Muhammad Moez"
                        required
                      />
                      <span className="pancal position-absolute">
                        <Link to="/">
                          <Image src="/assets/i/pancal.png" />
                        </Link>
                      </span>
                    </div>
                    <div className="input-box position-relative">
                      <input
                        type="text"
                        className="inputText w-100 mb-2 px-4"
                        defaultValue="Rs 1,500"
                        required
                      />
                      <span className="pancal position-absolute">
                        <Link to="/">
                          <Image src="/assets/i/pancal.png" />
                        </Link>
                      </span>
                    </div>
                  </form>
                  <div className="botal mb-2 px-3 d-flex justify-content-between align-items-center position-relative">
                    <Image
                      src="/assets/i/easy-small@2x.png"
                      className="easy_small"
                    />
                    <p className="m-0 position-absolute">Easypaisa</p>
                    <span className="pancal position-absolute">
                      <Link to="/">
                        <Image src="/assets/i/pancal.png" />
                      </Link>
                    </span>
                  </div>
                  <div className="botal left_zero mb-5 px-3 d-flex justify-content-between align-items-center position-relative">
                    <p className="m-0 position-absolute">Invoice Details</p>
                    <span className="pancal position-absolute">
                      <Link to="/">
                        <Image src="/assets/i/pancal.png" />
                      </Link>
                    </span>
                  </div>

                  <Link
                    onClick={() => {
                      this.handleModal();
                    }}
                    className="text-decoration-none add-account text-center d-flex justify-content-center align-items-center"
                  >
                    +Add more details to invoice
                  </Link>
                  <div className="amount-box border py-3 px-3 pt-4">
                    <li className="pb-2 list-unstyled d-flex justify-content-between align-items-center">
                      <p className="m-0 amount">Amount</p>
                      <span className="p-0 bold-price">Rs. 1,500</span>
                    </li>
                    <li className="border-bottom pb-2 mb-2 list-unstyled d-flex justify-content-between align-items-center">
                      <p className="m-0 cash normal">Cash Handling Fees</p>
                      <span className="p-0 cash">RS.70</span>
                    </li>
                    <li className="pb-2 list-unstyled d-flex justify-content-between align-items-center">
                      <p className="m-0 bold-price">Total</p>
                      <span className="p-0 bold-price">Rs. 1,430</span>
                    </li>
                  </div>
                </div>

                <div className="p-5 m-4" />
                <div className="tick-box px-3 w-100 fixed-bottom">
                  <Link
                    to="/receive/AllBanks/BankInvoiceCreated"
                    className="w-100 tick-gray tick-green-text d-flex justify-content-center align-items-center"
                  >
                    Create Invoice
                  </Link>
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
                  Details to show on invoice
                </h4>
              </Modal.Header>
              <Modal.Body>
                <div className="bg-white p-2 position-relative">
                  <div className="detai-main w-100 px-0">
                    <form>
                      <textarea
                        placeholder="Notes"
                        className="textarea-style border py-3 px-3 w-100 mb-2"
                        defaultValue={""}
                      />
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <input
                          type="text"
                          name="Reference"
                          placeholder="Reference #"
                          className="input-style border py-3 px-3 w-100 mr-3"
                        />
                        <input
                          type="text"
                          name="Business"
                          placeholder="Business Name"
                          className="input-style border py-3 px-3 w-100"
                        />
                      </div>
                      <div className="record-box position-relative mb-2">
                        <input
                          type="text"
                          name="Business"
                          placeholder="Record a voice note...."
                          className="input-style border py-3 px-3 mb-2 w-100"
                        />
                        <span className="record-btn position-absolute">
                          <link />
                          <Image src="/assets/i/mic_icon.svg" />
                        </span>
                      </div>
                      <div className="upload-box text-center py-5 mb-4">
                        <span className="d-block">Attach an invoice</span>
                        <button className="upload-btn border-0">Upload</button>
                      </div>
                    </form>
                  </div>

                  <div className="tick-box w-100 d-flex justify-content-between">
                    <Link
                      to="/Receive/MicrofinanceBank/CreateInvoice"
                      className="tick-gray tick-green-text d-flex justify-content-center align-items-center"
                    >
                      <Image src="/assets/i/check.png" />
                    </Link>
                    <Button className="icon-dote tick-gray d-flex justify-content-center align-items-center ml-3">
                      <Image
                        src="/assets/i/crose_icon.svg"
                        className="cross-btn"
                      />
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

export default withRouter(CreateInvoice);
