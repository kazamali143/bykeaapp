import React from "react";
import Layout from "../../Layout/Layout";
import { withRouter } from "react-router-dom";
import ContactList from "./Contacts/ContactList";
import AddContact from "./Contacts/AddContact";
import AddQRCode from "./Contacts/AddQRCode";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class Contacts extends React.Component {
  render() {
    return (
      <Layout title="Receive Form" backto="/receive/amount">
        <Container className="contact_tabs p-0">
          <Row>
            <Col className="bg-white pt-4">
              <Tabs defaultActiveKey="home" transition={false} id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Contact list" className="border-0" Selected>
                  <ContactList />
                </Tab>
                <Tab eventKey="profile" title="Add Contact Maunally">
                  <AddContact />
                </Tab>
                <Tab eventKey="contact" title="Scan QR Code">
                  <AddQRCode />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
        <div>
          
        </div>
      </Layout>
    );
  }
}
export default withRouter(Contacts);
