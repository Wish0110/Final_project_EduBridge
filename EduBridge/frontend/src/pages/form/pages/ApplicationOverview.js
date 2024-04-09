import React from 'react';
import Sidebar from '../components/Sidebar';
import './ApplicationOverview.css';

const ApplicationOverview = () => {
  return (
    <Sidebar>
    <div className="card-container">
        <div className="card-row">
          <div className="card">
            <div className="card-content">
              <h3>Card 1</h3>
              <p>This is card 1.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Card 2</h3>
              <p>This is card 2.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Card 3</h3>
              <p>This is card 3.</p>
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <div className="card-content">
              <h3>Card 4</h3>
              <p>This is card 4.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Card 5</h3>
              <p>This is card 5.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Card 6</h3>
              <p>This is card 6.</p>
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <div className="card-content">
              <h3>Card 7</h3>
              <p>This is card 7.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Card 8</h3>
              <p>This is card 8.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Card 9</h3>
              <p>This is card 9.</p>
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="card wide-card">
            <div className="card-content">
              <h3>Card 10</h3>
              <p>This is card 10.</p>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default ApplicationOverview;