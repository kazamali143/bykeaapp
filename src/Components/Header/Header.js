import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Header({ title, backto }) {
  return (
    <Navbar className="text-center border-primary top-header row px-4">
      <div className="d-flex w-100 justify-content-between">
        <div className="header_title">
          <Link to={backto}>
            <Image src="/assets/i/arrow-back.svg" />
          </Link>
          {title}
        </div>

        <div>
          <span>
          <Image src="/assets/i/mdi_volume_up.svg" />
          </span>
          <span className="ml-3">
            <Image src="/assets/i/youtube-icon.svg" />
          </span>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
