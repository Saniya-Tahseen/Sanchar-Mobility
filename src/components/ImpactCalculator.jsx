import React, { useState } from 'react';

export default function ImpactCalculator() {
  const [distance, setDistance] = useState(30);
  const [fuelCost, setFuelCost] = useState(105);
  const [mileage, setMileage] = useState(45);
  const [isActive, setIsActive] = useState(true);

  // Monthly calculations (30 days/month)
  const isValid = distance > 0 && fuelCost > 0 && mileage > 0;
  const monthlyKm = isValid ? distance * 30 : 0;
  const fuelSavedLitres = isValid ? monthlyKm / mileage : 0;
  const co2SavedKg = fuelSavedLitres * 2.31;

  // Net financial savings (petrol expenditure saved minus EV charging cost ~0.25/km)
  const petrolCost = fuelSavedLitres * fuelCost;
  const evChargingCost = monthlyKm * 0.25;
  const netMoneySaved = Math.max(0, petrolCost - evChargingCost);

  const displayCo2 = !isValid 
    ? 'Kg 0000' 
    : 'Kg ' + (co2SavedKg >= 100 ? Math.round(co2SavedKg).toLocaleString('en-IN') : co2SavedKg.toFixed(1));

  const displayFuel = !isValid 
    ? 'L 0000' 
    : 'L ' + (fuelSavedLitres >= 100 ? Math.round(fuelSavedLitres).toLocaleString('en-IN') : fuelSavedLitres.toFixed(1));

  const displayMoney = !isValid 
    ? '₹ 0000' 
    : '₹ ' + Math.round(netMoneySaved).toLocaleString('en-IN');

  const handleCalculate = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <div className="impact-grid">
          <div>
            <div className="eyebrow green">Calculator</div>
            <h2>Calculate your <span>Green Impact</span></h2>
            <p>Every kilometer with SancharSathi reduces urban carbon emissions while cutting your monthly commute spend.</p>
            <div className="impact-form" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="impact-distance" style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Daily Commute Distance (km): {distance} km</label>
                <input
                  type="range"
                  id="impact-distance"
                  min="5"
                  max="120"
                  value={distance}
                  onChange={(e) => setDistance(parseFloat(e.target.value) || 0)}
                  style={{ width: '100%' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label htmlFor="impact-fuel-cost" style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Petrol Price (₹/L):</label>
                  <input
                    type="number"
                    id="impact-fuel-cost"
                    value={fuelCost}
                    onChange={(e) => setFuelCost(parseFloat(e.target.value) || 0)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #c9d7cc' }}
                  />
                </div>
                <div>
                  <label htmlFor="impact-mileage" style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Current Bike Mileage (km/L):</label>
                  <input
                    type="number"
                    id="impact-mileage"
                    value={mileage}
                    onChange={(e) => setMileage(parseFloat(e.target.value) || 0)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #c9d7cc' }}
                  />
                </div>
              </div>
              <button 
                id="impact-calc-btn" 
                onClick={handleCalculate}
                className="button button-primary" 
                style={{ marginTop: '8px', width: 'fit-content' }}
              >
                Calculate Savings
              </button>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-card-top">
              <span>Monthly Environmental & Financial Savings</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </div>
            <div className="impact-results">
              <div>
                <strong id="impact-co2-val" className={isActive && isValid ? 'active' : ''}>{displayCo2}</strong>
                <small>CO2 Prevented</small>
                <span>Lower Carbon</span>
              </div>
              <div>
                <strong id="impact-fuel-val" className={isActive && isValid ? 'active' : ''}>{displayFuel}</strong>
                <small>Petrol Saved</small>
                <span>No Fuel Waste</span>
              </div>
              <div>
                <strong id="impact-money-val" className={isActive && isValid ? 'active' : ''}>{displayMoney}</strong>
                <small>Net Money Saved</small>
                <span>Direct Savings</span>
              </div>
            </div>
            <div className="impact-bar"><span style={{ width: Math.min(100, Math.max(10, (distance / 120) * 100)) + '%' }}></span></div>
            <p>Calculated based on 30 commute days/month comparing petrol expenditure against standard EV charging rates (~₹0.25/km).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
