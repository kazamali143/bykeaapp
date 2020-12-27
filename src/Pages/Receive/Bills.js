import React from "react";
import Layout from "../../Layout/Layout";
import { withRouter } from "react-router";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class Bills extends React.Component {
  render() {
    return (
      <Layout title="Bills" backto="/receive/amount">
        <Row>
          <Col className="text-center">
          <div class="color-lay position-fixed"></div>
          <div className="py-5 my-2"></div>
            <Image src="/assets/i/bills-image.svg" />
            <p className="feature_no mt-5 mb-1">This Features is</p>
            <p className="feature_no_sub">C O M I N G S O O N</p>
          </Col>
        </Row>
      </Layout>
    );
  }
}
export default withRouter(Bills);
