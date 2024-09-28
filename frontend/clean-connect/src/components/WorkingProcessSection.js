import React from "react";
import "../styles/workingProcessSection.css";

const WorkingProcessSection = () => {
  return (
    <section className="working-process">
      <h2 className="section-title">Our Working Process</h2>
      <div className="process-grid">
        <div className="process-step">
          <div className="process-icon">📅</div>
          <h3>Book a Service</h3>
          <p>Schedule your laundry pick-up at your convenience.</p>
        </div>
        <div className="process-step">
          <div className="process-icon">🚚</div>
          <h3>Pick Up</h3>
          <p>We come to your doorstep to collect your laundry.</p>
        </div>
        <div className="process-step">
          <div className="process-icon">🏠</div>
          <h3>Delivery</h3>
          <p>Your clean and fresh laundry is delivered to your doorstep.</p>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
