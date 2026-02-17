import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../siteConfig.js";

export default function Governance() {
  return (
    <div className="container section prose">
      <h2 className="h2">Governance & Compliance</h2>
      <p>
        {siteConfig.companyLegalName} maintains governance practices intended to support accountability, policy
        transparency, and responsible operation of our digital services.
      </p>

      <h3 className="h3">Governance approach</h3>
      <ul>
        <li>Defined ownership for products, operations, and support processes</li>
        <li>Documented policies and review processes for material changes</li>
        <li>Issue handling and escalation paths for operational or user concerns</li>
      </ul>

      <h3 className="h3">Data protection principles</h3>
      <ul>
        <li>Purpose limitation: data is processed for defined, legitimate purposes</li>
        <li>Data minimization: we avoid collecting data that is not needed</li>
        <li>Access controls: access is restricted to authorized personnel and systems</li>
        <li>Retention limits: we keep data only as long as necessary for stated purposes</li>
      </ul>

      <h3 className="h3">Security controls (proportional safeguards)</h3>
      <ul>
        <li>Access management and authentication controls for internal systems</li>
        <li>Monitoring and logging to support reliability and incident review</li>
        <li>Vendor due diligence where third-party processors are used</li>
      </ul>

      <h3 className="h3">Policy documents</h3>
      <p>Our core compliance documents are publicly available:</p>
      <ul>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms & Conditions</Link></li>
      </ul>

      <h3 className="h3">Support & regulatory contact</h3>
      <p>
        For questions, concerns, or formal notices, contact:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </div>
  );
}
