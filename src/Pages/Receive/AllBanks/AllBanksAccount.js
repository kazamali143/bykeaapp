import React from "react";
import Layout from "../../../Layout/Layout";
import { withRouter, Link } from "react-router-dom";
import IBAN from "./IBAN";
import AccountNumber from "./AccountNumber";
import CardNumber from "./CardNumber";

import { Container, Row, Col, Image, Tabs, Tab } from "react-bootstrap";

class AllBanksAccount extends React.Component {
  render() {
    return (
      <Layout title="Add Account Number" backto="/receive/SelectAccount">
        <Container className="p-0">
          <Row>
            <Col className="bg-white pt-4">
              <div className="texttab-show ">
                <div className="color-lay position-fixed" />
                <div className=" row bg-gray position-relative">
                  <div className="w-100 px-3">
                    <div className="botal green-form mb-3 position-relative px-4 d-flex justify-content-between align-items-center mt-3">
                      <Image src="/assets/i/botal.png" />
                      <p className="m-0 position-absolute">
                        Habib Metropolitan Bank
                      </p>
                      <span className="pancal position-absolute">
                        <Link>
                          <Image src="/assets/i/pancal.png" />
                        </Link>
                      </span>
                    </div>
                    <div className="bg-white account_tab_full p-3 pb-2 mb-2">
                      <p className="text-grey_two account_sub_title">
                        Select Bank Details
                      </p>
{/* Im using here bootstrap tabs, thre components coming 
from thre page name: IBAN, AccountNumber, CardNumber */}
                      <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="add_account_tab"
                      >
                        <Tab
                          eventKey="home"
                          title="IBAN"
                          className="mx-3 text-left text-grey_two"
                          Selected
                        >
                          <IBAN />
                        </Tab>
                        <Tab
                          eventKey="profile"
                          title="Account Number"
                          className="account_btn mx-3 text-left text-grey_two"
                        >
                          <AccountNumber />
                        </Tab>
                        <Tab
                          eventKey="contact"
                          title="Card Number"
                          className="account_btn mx-3 text-left text-grey_two"
                        >
                          <CardNumber />
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div></div>
      </Layout>
    );
  }
}
export default withRouter(AllBanksAccount);
