import React from "react";
import { siteConfig } from "../siteConfig.js";

export default function OurApp() {
  return (
    <div className="container section prose">
      <h2 className="h2">Our App — {siteConfig.appName}</h2>
      <p>
        {siteConfig.appName} is a digital retail platform designed to improve convenience and access by enabling users
        to browse available products, view promotions, and engage with retail services through a streamlined mobile
        experience.
      </p>

      <h3 className="h3">Core capabilities</h3>
      <ul>
        <li>Product browsing and discovery experience</li>
        <li>Promotion and offer visibility (where applicable)</li>
        <li>Engagement features that support customer convenience</li>
        <li>Operational workflows that improve efficiency and consistency</li>
      </ul>

      <h3 className="h3">Responsible positioning</h3>
      <p>
        We describe the app based on its functionality and intended use. We do not publish inflated claims, fabricated
        metrics, or unverified partnerships. Where services differ by availability or operational constraints, the app
        experience and communications are designed to be clear and accurate.
      </p>

      <h3 className="h3">Privacy and permissions (high-level)</h3>
      <p>
        The app may process information required to deliver its features, support the user experience, maintain security,
        and comply with legal obligations. Details are provided in our Privacy Policy.
      </p>
    </div>
  );
}
