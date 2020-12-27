import React from "react";
import Layout from "../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { images } from "../../Components/ImportImages/ImportImage";

class Amount extends React.Component {
  render() {
    return (
      <Layout title="Bykea Cash" backto="/">
        <div className="d-flex justify-content-between flex-column h-100">
          <div className="px-4 receive_main">
            <Row className="text-center mt-5 pb-3 border-bottom border-2 border-grey mb-4">
              <Col>
                <Link to="./Contacts">
                  <div className="imgbox d-flex align-items-center justify-content-center">
                    <Image src={images() + "/i/receive.svg"} />
                  </div>
                  <p>Receive</p>
                </Link>
              </Col>

              <Col>
                <Link to="./Contacts">
                  <div className="imgbox  d-flex align-items-center justify-content-center">
                    <Image src={images() + "/i/send-icon.svg"} />
                  </div>
                  <p>Send</p>
                </Link>
              </Col>
            </Row>

            <Row className="text-center pt-3">
              <Col>
                <Link to="./Contacts">
                  <div className="imgbox d-flex align-items-center justify-content-center">
                    <Image src={images() + "/i/atm-icon.svg"} />
                  </div>
                  <p>ATM</p>
                </Link>
              </Col>

              <Col>
                <Link to="./Bills">
                  <div className="imgbox d-flex align-items-center justify-content-center">
                    <Image src={images() + "/i/bills-icons.svg"} />
                  </div>
                  <p>Bills</p>
                </Link>
              </Col>
            </Row>
          </div>

          <div className="fixed-bottom border-top  bottomtab text-center p-2">
            <Row>
              <Col>
                <div className="bottomtab_img"><Image src={images() + "/i/history-icon.svg"} /></div>
                <p>History</p>
              </Col>
              <Col>
              <div className="bottomtab_img"><Image src={images() + "/i/qr-code-icon.svg"} /></div>
                <p>QR-Code</p>
              </Col>
              <Col>
              <div className="bottomtab_img"><Image src={images() + "/i/shear-icon.svg"} /></div>
                <p>Shear</p>
              </Col>
              <Col>
              <div className="bottomtab_img"><Image src={images() + "/i/setting-icon.svg"} /></div>
                <p>Settings</p>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}
export default withRouter(Amount);
