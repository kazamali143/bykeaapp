import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { Modal, Image } from "react-bootstrap";

class IBAN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      twomodal: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  handleModalTwo() {
    this.setState({
      twomodal: !this.state.twomodal,
      show: false,
    });
  }

  render() {
    return (
      <div>
        <div className="mb-2">
          <p className="text-grey_two account_sub_title">Enter IBAN No</p>
          <form className="form-box">
            <div className="input-box position-relative">
              <input
                type="text"
                className="inputText w-100 mb-3 px-4"
                required
              />
              <span className="floating-label">
                PK--MBPL ---- ---- ---- ----
              </span>
            </div>
          </form>
          <p className="green-text font-size-12">
            Please enter a valid 24-digit alphanumeric IBAN
          </p>
        </div>
        <div className="mt-3">
          <Image src="/assets/i/cheque-img@2x.jpg" className="img-fluid" alt />
        </div>
        <div className="tick-box px-3 w-100 fixed-bottom">
          <Link
            onClick={() => {
              this.handleModal();
            }}
            className="tick-gray tick-green-text w-100 d-flex justify-content-center align-items-center"
          >
            <Image src="/assets/i/check.png" />
          </Link>
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
            <h4 className="text-center popup_heading">Confirm Bank Account</h4>
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
                  onClick={() => {
                    this.handleModalTwo();
                  }}
                  className="tick-gray tick-green-text d-flex justify-content-center align-items-center"
                >
                  Confirm
                </Link>
                <Link
                  to="/receive/AllBanks/BankSelected"
                  className="icon-dote tick-gray d-flex justify-content-center align-items-center ml-3"
                >
                  <Image src="/assets/i/pencil_two.svg" />
                </Link>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          animation={false}
          className="account_error"
          class=""
          show={this.state.twomodal}
          onHide={() => {
            this.handleModalTwo();
          }}
        >
          <Modal.Body>
            <div className="bg-white position-relative text-center">
              <Image
                src="/assets/i/account_title_error.svg"
                className="mb-3"
                alt
              />
              <h4 className="text-center popup_heading mb-3 text-black">
                <strong>Account Title Error</strong>
              </h4>
              <p className="mb-0 text-grey_two mb-3">
                Unable to fetch your account. Please try again later.
              </p>
              <div className="tick-box px-3 w-100">
                <Link
                  onClick={() => {
                    this.handleModalTwo();
                  }}
                  className="tick-gray tick-green-text w-100 d-flex justify-content-center align-items-center"
                >
                  Comfirm
                </Link>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default withRouter(IBAN);
