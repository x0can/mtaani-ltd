import React from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../siteConfig.js";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/business-functions", label: "Business Functions" },
  { to: "/our-app", label: "Our App" },
  { to: "/governance", label: "Governance & Compliance" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="header">
      <div className="container headerInner">
        <div className="brand">
          <img
            src={logo}
            alt={`${siteConfig.companyLegalName} logo`}
            className="brandLogo"
            loading="eager"
          />
          <div className="brandText">
            <div className="brandName">{siteConfig.companyLegalName}</div>
            <div className="brandTag">Retail & Technology Enterprise</div>
          </div>
        </div>

        <nav className="nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
