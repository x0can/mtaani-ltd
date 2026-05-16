import React from "react";
import { siteConfig } from "../siteConfig.js";

export default function Contact() {
  return (
    <div className="container section prose">
      <h2 className="h2">Contact</h2>
      <p>
        For customer support, compliance inquiries, or formal notices, contact us using the email below.
      </p>

      <div className="card">
        <div className="cardTitle">Support Email</div>
        <p className="muted">
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        </p>
      </div>

      <p className="muted">
        Note: If you are contacting us about privacy, include “Privacy” in the subject line to help us route your request.
      </p>
    </div>
  );
}
