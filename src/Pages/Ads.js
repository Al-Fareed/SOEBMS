import React, { useRef } from "react";
import "./Ads.css";
const Ads = () => {
  const automatedMeterReadingRef = useRef(null);
  const tradingRef = useRef(null);
  const enhancedSecurityRef = useRef(null);
  const InsightRef = useRef(null);

  const scrollToAutomatedMeterReading = () => {
    automatedMeterReadingRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTrading = () => {
    tradingRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToEnhancedSecurity = () => {
    enhancedSecurityRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToInsight = () => {
    InsightRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <React.Fragment>
      <div className="about main">
        <div className="about-description">
          <h2>About SOEBMS</h2>
          The Smart Online Electricity Billing Management System (SOEBMS) <br />{" "}
          is a cutting-edge solution to automate electricity billing, provide
          insight to track power consumption of each consumers.
        </div>
      </div>
      <div className="objectives main">
        <div className="obj-desc ">
          <h1>Why SOEBMS</h1>
          <ul>
            <li onClick={scrollToAutomatedMeterReading}>
              Automated meter reading and accurate billing
            </li>
            <li onClick={scrollToTrading}>Electricity trading</li>
            <li onClick={scrollToInsight}>
              Insight on Electricity consumption
            </li>
            <li onClick={scrollToEnhancedSecurity}>Enhanced security</li>
          </ul>
        </div>
      </div>
      <div
        ref={automatedMeterReadingRef}
        className="automated-meter-reading main"
      >
        <div className="auto-mtr-read-desc">
          <h1>Automated meter reading</h1>
          To overcome traditional approach of reading and billing of consumption
          of electricity, which takes labour work. This system will integrate
          smart metering technology to enable real-time monitoring and
          generation of bill.
        </div>
      </div>
      <div ref={tradingRef} className="trading main">
        <div className="trading-desc">
          <h1>Electricity Trading</h1>A consumer who has more than sufficient
          electricity can sell electricity as well as other user in this
          application can buy the listed users willing to sell their un consumed
          electricity.
        </div>
      </div>
      <div ref={InsightRef} className="insight main">
        <div className="insight-desc">
          <h1>Insight on electricity consumption</h1>
          Real-time display of power consumption for customers to track their
          energy usage. Historical data storage and visualization to allow users
          to analyze their energy consumption patterns.
        </div>
      </div>

      <div ref={enhancedSecurityRef} className="enhanced-security main">
        <div className="security-desc">
          <h1>Enhanced Security</h1>
          Main key feature of this application is enhanced security. The system
          employs blockchain technology to enhance security, ensuring secure
          transactions, protecting data integrity, and providing reliable user
          authentication.
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ads;
