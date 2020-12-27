import React, { Component } from "react";
import Layout from "../../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";

import { Modal, Row, Col, Image } from "react-bootstrap";

class BankInvoiceCreated extends Component {
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
        backto="/receive/Amount"
      >
        <Row>
          <Col>
            <div className="texttab-show ">
              <div className=" row bg-gray position-relative">
                <div className=" w-100 green-form px-3 pt-5">
                  <div className="amount-box Invoice-box py-4 px-3 m-0">
                    <li className=" list-unstyled d-flex justify-content-between align-items-center">
                      <p className="m-0 invoice1">Invoice#</p>
                      <span className="p-0 invoice1">Date </span>
                    </li>
                    <li className=" pb-3 list-unstyled d-flex justify-content-between align-items-center">
                      <p className="m-0 date-1">PMTLHQY7</p>
                      <span className="p-0  date-1">07 Jul ‘20, 12:20PM</span>
                    </li>
                    <div className="border-dotted row mb-4" />
                    <div className="bill-box d-flex justify-content-between align-items-center py-3 px-4 mb-4">
                      <div className="bill pr-3  w-100">
                        <p className="m-0">Bill To:</p>
                        <strong>Adnan Katchi</strong>
                        <p className="m-0">03008266587</p>
                      </div>
                      <div className="pay w-100 border-left pl-5 border-2">
                        <p className="m-0">Pay To:</p>
                        <strong>Moez Ansari</strong>
                        <p className="m-0">031282010212</p>
                      </div>
                    </div>
                    <div className="border-solid row mb-3" />
                    <div className="details-box">
                      <li className=" list-unstyled mb-2 d-flex justify-content-between align-items-center">
                        <p className="m-0 amount">Details</p>
                        <span className="p-0 amount">Amount </span>
                      </li>
                      <li className=" pb-3 list-unstyled d-flex justify-content-between align-items-end">
                        <p className="m-0 para">
                          Please pay for the plumbing <br /> services.
                        </p>
                        <span className="p-0 green-price">
                          <span>Rs</span> 1,500
                        </span>
                      </li>
                      <li className="list-unstyled mb-2">
                        <Link className="view-btn d-flex justify-content-center align-items-center">
                          View
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="color-lay position-fixed"></div>
                <div className="py-5 my-5"></div>
                <div className="tick-box px-3 w-100 fixed-bottom">
                  <Link
                    onClick={() => {
                      this.handleModal();
                    }}
                    className="w-100 tick-gray tick-green-text d-flex justify-content-center align-items-center"
                  >
                    Share
                  </Link>
                </div>
              </div>
            </div>

            <Modal
              animation={false}
              className="account_confirm_model shead_modal"
              class="modal-backdrop foo-modal-backdrop in kkkk"
              show={this.state.show}
              onHide={() => {
                this.handleModal();
              }}
            >
              <Modal.Body>
              
              <Image src="/assets/i/shear_demo.png" className="img-fluid" />
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default withRouter(BankInvoiceCreated);
