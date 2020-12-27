import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Image } from "react-bootstrap";

class CardNumber extends Component {
  render() {
    return (
      <div>
         <Image src="/assets/i/comming_soon.png" className="img_coming" />
         <p className="text-center coming_so">C O M I N G   S O O N</p>
      </div>
    );
  }
}
export default withRouter(CardNumber);
