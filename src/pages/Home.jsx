import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../siteConfig.js";

export default function Home() {
  return (
    <div className="container section">
      <div className="hero">
        <div className="heroText">
          <h1 className="h1">
            {siteConfig.companyLegalName} — Digital Retail & Technology Operations
          </h1>
          <p className="lead">
            We operate a structured digital retail ecosystem focused on customer access, operational efficiency,
            and responsible data-driven processes. Our systems support retail operations, engagement, and coordination
            across internal teams and partners.
          </p>

          <div className="ctaRow">
            <Link className="btn" to="/our-app">Explore Our App</Link>
            <Link className="btnSecondary" to="/governance">Governance & Compliance</Link>
          </div>

          <div className="callout">
            <div className="calloutTitle">Public Support Contact (for users & regulators)</div>
            <div className="calloutBody">
              Email: <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
            </div>
          </div>
        </div>

        <div className="heroMedia">
          <img
            src="/images/hero.png"
            alt="Digital retail operations and technology-enabled customer access"
            className="heroImg"
          />
          <div className="heroMediaCaption">
            Secure, structured digital retail operations designed for reliability and transparency.
          </div>
        </div>
      </div>

      <div className="grid3">
        <div className="card">
          <div className="cardTitle">Customer Access</div>
          <p className="muted">
            We design digital experiences that help customers discover products, understand offers, and access
            services with clarity and consistency.
          </p>
        </div>
        <div className="card">
          <div className="cardTitle">Operational Efficiency</div>
          <p className="muted">
            Our workflows support reliable retail operations through structured processes, controlled changes,
            and measurable performance indicators.
          </p>
        </div>
        <div className="card">
          <div className="cardTitle">Governance & Trust</div>
          <p className="muted">
            We maintain transparent policies, defined responsibilities, and reasonable safeguards aligned to
            the nature of our services.
          </p>
        </div>
      </div>

      <div className="split sectionTight">
        <div className="card">
          <div className="cardTitle">Policy Transparency</div>
          <p className="muted">
            We publish and maintain clear terms and privacy disclosures to support responsible platform use.
          </p>
          <div className="inlineLinks">
            <Link to="/privacy">Read Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/terms">Read Terms</Link>
          </div>
        </div>

        <div className="card">
          <div className="cardTitle">Organization Verification Readiness</div>
          <p className="muted">
            This website provides business identity, contact information, and compliance pages for platform and
            regulatory verification processes.
          </p>
          <div className="inlineLinks">
            <Link to="/contact">Contact</Link>
            <span className="dot">•</span>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
