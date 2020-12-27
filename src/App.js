import React from 'react';
import {BrowserRouter as Router, Switch, Redirect,Route} from 'react-router-dom'
import Contacts from './Pages/Receive/Contacts';
import Amount from './Pages/Receive/Amount';
import Bills from './Pages/Receive/Bills';
import EnterAmount from './Pages/Receive/EnterAmount';
import SelectDeposit from './Pages/Receive/SelectDeposit';
import SelectAccount from './Pages/Receive/SelectAccount';
import MicrofinanceBank from './Pages/Receive/MicrofinanceBank/MicrofinanceBank';
import MicroBankSelected from './Pages/Receive/MicrofinanceBank/MicroBankSelected';
import CreateInvoice from './Pages/Receive/MicrofinanceBank/CreateInvoice';
import AllBanksAccount from './Pages/Receive/AllBanks/AllBanksAccount';
import BankSelected from './Pages/Receive/AllBanks/BankSelected';
import BankCreateInvoice from './Pages/Receive/AllBanks/BankCreateInvoice';
import BankInvoiceCreated from './Pages/Receive/AllBanks/BankInvoiceCreated';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './main.css';







class App extends React.Component {

  
    render() {

        return (
          <Container>
            <Row>
              <Col>
            <Router>
            <Switch>
              <Route  path="/receive/contacts" component={Contacts}/>
              <Route  path="/receive/Bills" component={Bills}/>
              <Route  path="/receive/EnterAmount" component={EnterAmount}/>
              <Route  path="/receive/SelectDeposit" component={SelectDeposit}/>
              <Route  path="/receive/SelectAccount" component={SelectAccount}/>
              <Route  path="/receive/MicrofinanceBank/MicrofinanceBank" component={MicrofinanceBank}/>
              <Route  path="/receive/MicrofinanceBank/MicroBankSelected" component={MicroBankSelected}/>
              <Route  path="/receive/MicrofinanceBank/CreateInvoice" component={CreateInvoice}/>
              <Route  path="/receive/AllBanks/AllBanksAccount" component={AllBanksAccount}/>
              <Route  path="/receive/AllBanks/BankSelected" component={BankSelected}/>
              <Route  path="/receive/AllBanks/BankCreateInvoice" component={BankCreateInvoice}/>
              <Route  path="/receive/AllBanks/BankInvoiceCreated" component={BankInvoiceCreated}/>
              <Route exact path="/receive/amount" component={Amount}/>
              

              <Route exact path="*">
                <Redirect to="/receive/amount" />
              </Route>
            </Switch>
          </Router>
          </Col>
          </Row>
          </Container>
        );
    }
}

export default App;