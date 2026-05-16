import React from "react";
import { siteConfig } from "../siteConfig.js";

export default function PrivacyPolicy() {
  return (
    <div className="container section prose">
      <h2 className="h2">Privacy Policy</h2>
      <p className="muted">
        Last updated: {siteConfig.lastUpdated} • Controller: {siteConfig.companyLegalName}
      </p>

      <p>
        This Privacy Policy explains how {siteConfig.companyLegalName} (“we”, “us”, “our”) collects, uses, discloses,
        and protects information when you use our website ({siteConfig.websiteDomain}) and our mobile application
        (“{siteConfig.appName}”) and related services (collectively, the “Services”).
      </p>

      <h3 className="h3">1. Scope</h3>
      <p>
        This Policy applies to information processed through the Services. It does not apply to third-party websites,
        services, or applications that may be linked from our Services.
      </p>

      <h3 className="h3">2. Information we collect</h3>
      <p>We collect information in the following categories:</p>
      <ul>
        <li>
          <strong>Contact and account information:</strong> such as your name, email address, or other identifiers you
          provide when contacting support or creating/using an account (where applicable).
        </li>
        <li>
          <strong>Usage information:</strong> such as interactions with features, pages viewed, basic event logs, and
          diagnostic signals used to operate and improve the Services.
        </li>
        <li>
          <strong>Device and technical information:</strong> such as device type, operating system version, app version,
          and identifiers necessary for security, diagnostics, and functionality.
        </li>
        <li>
          <strong>Communications:</strong> content you send to us (e.g., support requests) and our responses.
        </li>
      </ul>

      <h3 className="h3">3. How we use information</h3>
      <p>We use information to:</p>
      <ul>
        <li>Provide, maintain, and operate the Services.</li>
        <li>Enable core functionality such as product browsing, offer visibility, and service communications.</li>
        <li>Respond to support requests and communicate about service-related matters.</li>
        <li>Monitor reliability, prevent abuse, protect security, and troubleshoot issues.</li>
        <li>Comply with legal obligations and enforce our Terms & Conditions.</li>
      </ul>

      <h3 className="h3">4. Legal basis (where applicable)</h3>
      <p>
        Depending on your jurisdiction and how you use the Services, we may process information based on one or more of
        the following: performance of a contract (providing the Services), legitimate interests (operating and securing
        the Services), compliance with legal obligations, and/or your consent (where required for specific activities).
      </p>

      <h3 className="h3">5. Sharing and disclosure</h3>
      <p>We may share information in limited circumstances:</p>
      <ul>
        <li>
          <strong>Service providers (processors):</strong> vendors that help us host, operate, secure, or support the
          Services. They are permitted to process information only for the services they provide to us.
        </li>
        <li>
          <strong>Legal and compliance:</strong> if required by law, regulation, legal process, or to protect rights,
          safety, and security.
        </li>
        <li>
          <strong>Business transfers:</strong> in connection with a merger, acquisition, restructuring, or sale of
          assets, subject to appropriate protections.
        </li>
      </ul>

      <h3 className="h3">6. Data retention</h3>
      <p>
        We retain information only as long as necessary for the purposes described in this Policy, unless a longer
        retention period is required or permitted by law (for example, to resolve disputes, enforce agreements, or meet
        regulatory requirements).
      </p>

      <h3 className="h3">7. Security</h3>
      <p>
        We implement reasonable administrative, technical, and organizational measures designed to protect information
        against unauthorized access, loss, misuse, or alteration. No method of transmission or storage is completely
        secure; therefore, we cannot guarantee absolute security.
      </p>

      <h3 className="h3">8. Your rights and choices</h3>
      <p>
        Depending on applicable law, you may have rights to request access, correction, deletion, or restriction of
        certain processing, and to object to certain uses. You may also withdraw consent where processing is based on
        consent. To exercise rights, contact us using the details below.
      </p>

      <h3 className="h3">9. Children’s privacy</h3>
      <p>
        The Services are not intended for children under the age where parental consent is required by applicable law.
        If you believe a child has provided personal information, contact us so we can take appropriate action.
      </p>

      <h3 className="h3">10. International transfers</h3>
      <p>
        Where we use service providers in other countries, information may be processed outside your country of
        residence. When we do so, we apply appropriate safeguards consistent with applicable requirements.
      </p>

      <h3 className="h3">11. Changes to this Policy</h3>
      <p>
        We may update this Policy from time to time. We will post the updated version on this page and revise the “Last
        updated” date above.
      </p>

      <h3 className="h3">12. Contact</h3>
      <p>
        For privacy questions or requests, contact:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </div>
  );
}
