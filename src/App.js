import React from 'react';
import './App.css';

function App() {
  const researchers = [
    'biskuit', 'Maxime', '0xmagdy', 'ranjeetjagtap25', 'Moshe Mizrahi',
    'Gokuleshwaran', 'Muhammed Mekkawy', 'mqh4681', 'yaswanthch20030324',
    'Amit khandebharad', 'Akshay Parse', 'xspacex', 'deepanshu',
    'Jonas Dias Rebelo', 'security-(hxm)', 'Arun Joseph', 'kkrish987123',
    'SpiSec Team', 'Muhammed Azeem', 'Naveen', 'Aurelio Zescha Yudistira',
    'ProwlXploit', 'Thomas Keefer', 'Greejith', 'Khaja Masthan Shaik',
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="logo">🐞 BugBounty</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#terms">Terms</a>
          <a href="#scope">Scope</a>
          <a href="#bounty">Bounty Information</a>
          <a href="#halloffame">Hall of fame</a>
          <a href="#login">Researcher Login</a>
        </div>
      </nav>

      <div className="content-section">
        <h2>At Zoho, keeping customer information safe and secure is our number one priority</h2>
        <p>
          Zoho offers this Vulnerability Reward Program (VRP) to continuously improve the security of our products. 
          If you believe you have discovered a potential security vulnerability in any of Zoho's products or assets, let us know immediately, and we will make every effort to get the issues addressed as quickly as possible.
        </p>
        <p>
          Please ensure you understand the program rules before you report a vulnerability. By participating in this program, you agree to be bound by these rules. 
          Zoho provides monetary rewards to vulnerability reporters at its discretion and the reward may vary based upon metrics including (but not limited to) vulnerability severity, impact, and exploitability.
        </p>
        <p><b>You can share details of the suspected vulnerability with Zoho by clicking below:</b></p>
        <button className="submit-button">Submit Bug</button>

        <h3>Terms</h3>
        <p>
          These Bug Bounty Terms and Conditions ("Bug Bounty Terms") govern your participation in the Zoho Bug Bounty Program ("Bug Bounty Program") and are a legally binding contract between you or the company you represent and Zoho. 
          By submitting a vulnerability or participating in the program, you agree to be bound by the Terms.
        </p>

        <h3>Bug Bounty Program</h3>
        <p>
          The Bug Bounty Program enables you to submit security bugs or vulnerabilities discovered by you in eligible Zoho Services and earn rewards for your submissions.
        </p>

        <h3>SCOPE and EXCLUSIONS</h3>
        <p><b>In Scope:</b></p>
        <ul>
          <li>All Zoho branded products and applications listed at zoho.com</li>
          <li>All ManageEngine branded products and applications listed at manageengine.com</li>
          <li>Site24x7</li>
          <li>Qntrl</li>
          <li>TrainerCentral</li>
          <li>Vani</li>
          <li>Arattai</li>
          <li>Ulaa Browser</li>
          <li>Zakya</li>
          <li>Zoho Corporation owned assets</li>
        </ul>

        <p><b>Exclusions:</b></p>
        <ul>
          <li>Self XSS</li>
          <li>Email bombing</li>
          <li>Username or email enumeration</li>
          <li>Logout or unauthenticated CSRF</li>
          <li>Clickjacking on non-sensitive pages</li>
          <li>Social engineering</li>
          <li>Hosting malware/arbitrary content</li>
          <li>Presence of EXIF data in uploads</li>
          <li>Use of known vulnerable components without exploit</li>
          <li>...and others listed in the original document</li>
        </ul>

        <h3>Bounty Tiers</h3>
        <table className="bounty-table">
          <thead>
            <tr>
              <th>Severity</th>
              <th>Bounty (Up to)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Low</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>High</td>
              <td>$800</td>
            </tr>
            <tr>
              <td>Critical</td>
              <td>$3000</td>
            </tr>
          </tbody>
        </table>

        <h3>Note of Thanks</h3>
        <p>We would like to truly thank the people listed in the Hall of Fame for their participation in the program and for making a responsible disclosure of the vulnerabilities.</p>

        <h3>Hall Of Fame for</h3>
        <p>2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025</p>
      </div>

      <div className="researcher-section">
        {researchers.map((name, idx) => (
          <div key={idx} className="researcher-card">
            <div className="avatar"></div>
            <div className="researcher-name">{name}</div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="#home">Zoho Home</a>
          <a href="#security">Security</a>
          <a href="#ipr">IPR Complaints</a>
          <a href="#antispam">Anti-spam Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer-text">Zoho Corporation Pvt. Ltd. All Rights Reserved.</div>
        <div className="socials">
          <span>f</span>
          <span>X</span>
          <span>in</span>
        </div>
        <div className="zoho-logo">ZOHO</div>
      </footer>
    </div>
  );
}

export default App;
