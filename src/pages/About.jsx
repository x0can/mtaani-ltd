import React from "react";
import { siteConfig } from "../siteConfig.js";

export default function About() {
  return (
    <div className="container section prose">
      <h2 className="h2">About {siteConfig.companyLegalName}</h2>
      <p>
        {siteConfig.companyLegalName} operates as a structured retail and technology enterprise. We build and manage
        digital systems that support retail access, customer engagement, operational coordination, and internal process
        efficiency.
      </p>

      <h3 className="h3">What we do</h3>
      <ul>
        <li>Provide digital tools that enable customers to browse products and view available offers.</li>
        <li>Support retail operations through structured workflows and operational reporting.</li>
        <li>Enable coordination across internal teams and approved partners/vendors where applicable.</li>
        <li>Maintain governance practices, policy transparency, and responsible handling of information.</li>
      </ul>

      <h3 className="h3">How we operate</h3>
      <p>
        We emphasize clarity, auditability, and continuous improvement. Our processes are designed to be practical and
        proportional to the nature of the services we provide, with defined responsibilities and documented policies.
      </p>
    </div>
  );
}
