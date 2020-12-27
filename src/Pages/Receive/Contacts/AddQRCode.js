import React, { Component } from "react";

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default class AddQRCode extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div class="texttab-show ">
              <div class="tabs-3 row bg-gray position-relative">
                <div class="color-lay position-fixed"></div>
                <div class=" w-100 qr-scan px-3 text-center">
                  <Image src="/assets/i/qr-code-export.jpg" />
                  <p>
                    Ask your friend or customer to <br></br> scan your code to
                    pay
                  </p>
                </div>

                <div class="tick-box px-3 w-100 fixed-bottom d-flex justify-content-between">
                  <Link to="/"
                    class="tick-gray tick-green-text d-flex justify-content-center align-items-center"
                  >
                    Save a photo of your code
                  </Link>
                  <Link
                  to="/"
                    class="icon-dote tick-gray d-flex justify-content-center align-items-center"
                  >
                    <Image src="/assets/i/shear-icon2.svg" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
