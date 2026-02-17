import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../siteConfig.js";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerCol">
          <div className="footerBrandRow">
            <img
              src={logo}
              alt={`${siteConfig.companyLegalName} logo`}
              className="footerLogo"
              loading="lazy"
            />
            <div>
              <div className="footerTitle">{siteConfig.companyLegalName}</div>
              <div className="muted">
                Structured retail and technology operations supporting a digital retail ecosystem.
              </div>
            </div>
          </div>
        </div>

        <div className="footerCol">
          <div className="footerTitle">Compliance</div>
          <div className="footerLinks">
            <Link to="/privacy" className="footerLink">Privacy Policy</Link>
            <Link to="/terms" className="footerLink">Terms & Conditions</Link>
            <Link to="/governance" className="footerLink">Governance & Compliance</Link>
          </div>
        </div>

        <div className="footerCol">
          <div className="footerTitle">Support</div>
          <div className="muted">
            Email: <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
          </div>
        </div>
      </div>

      <div className="container footerBottom">
        <div className="muted">
          © {new Date().getFullYear()} {siteConfig.companyLegalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
