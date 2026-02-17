import React from "react";
import { siteConfig } from "../siteConfig.js";

export default function Terms() {
  return (
    <div className="container section prose">
      <h2 className="h2">Terms & Conditions</h2>
      <p className="muted">Last updated: {siteConfig.lastUpdated}</p>

      <p>
        These Terms & Conditions (“Terms”) govern your access to and use of the website ({siteConfig.websiteDomain}) and
        the mobile application (“{siteConfig.appName}”) and related services (collectively, the “Services”) provided by{" "}
        {siteConfig.companyLegalName} (“we”, “us”, “our”). By using the Services, you agree to these Terms.
      </p>

      <h3 className="h3">1. Eligibility and acceptance</h3>
      <p>
        You must use the Services in accordance with applicable laws and these Terms. If you do not agree, do not use
        the Services.
      </p>

      <h3 className="h3">2. Use of the Services</h3>
      <ul>
        <li>You may use the Services only for lawful purposes and in a manner consistent with these Terms.</li>
        <li>You agree not to misuse the Services, attempt unauthorized access, or interfere with security or operation.</li>
        <li>We may update, modify, or discontinue parts of the Services to maintain quality and security.</li>
      </ul>

      <h3 className="h3">3. Accounts and communications (where applicable)</h3>
      <p>
        If the Services support account features, you are responsible for maintaining the confidentiality of account
        credentials and for activities under your account. You agree to provide accurate information where required.
      </p>

      <h3 className="h3">4. Intellectual property</h3>
      <p>
        The Services, including content, branding, and software, are owned by or licensed to {siteConfig.companyLegalName}
        and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create
        derivative works except as allowed by law or with our written permission.
      </p>

      <h3 className="h3">5. Third-party services</h3>
      <p>
        The Services may reference or link to third-party services. We are not responsible for third-party content,
        policies, or practices. Your use of third-party services is governed by their terms.
      </p>

      <h3 className="h3">6. Disclaimers</h3>
      <p>
        The Services are provided on an “as is” and “as available” basis. To the extent permitted by law, we disclaim
        warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that
        the Services will be uninterrupted or error-free.
      </p>

      <h3 className="h3">7. Limitation of liability</h3>
      <p>
        To the extent permitted by law, {siteConfig.companyLegalName} will not be liable for indirect, incidental,
        consequential, special, or punitive damages, or for loss of profits or data, arising from or related to your use
        of the Services.
      </p>

      <h3 className="h3">8. Termination</h3>
      <p>
        We may suspend or terminate access to the Services if necessary to protect the Services, users, or to comply with
        law, or if you materially violate these Terms.
      </p>

      <h3 className="h3">9. Governing law</h3>
      <p>
        These Terms are governed by the laws of {siteConfig.jurisdiction}, without regard to conflict-of-law principles,
        to the extent applicable.
      </p>

      <h3 className="h3">10. Contact</h3>
      <p>
        Questions about these Terms:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </div>
  );
}
