import React, { useState } from 'react';

export default function ImpactCalculator() {
  const [inputs, setInputs] = useState({
    distance: '',
    fuelCost: '',
    mileage: '',
  });

  const [results, setResults] = useState({
    co2: 0,
    fuel: 0,
    money: 0,
  });

  const [isCalculated, setIsCalculated] = useState(false);
  const [errors, setErrors] = useState({ distance: false, fuelCost: false, mileage: false });

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleCalculate = (e) => {
    if (e) e.preventDefault();

    const l = parseFloat(inputs.distance) || 0;
    const u = parseFloat(inputs.fuelCost) || 0;
    const h = parseFloat(inputs.mileage) || 0;

    const newErrors = {
      distance: l <= 0,
      fuelCost: u <= 0,
      mileage: h <= 0,
    };

    setErrors(newErrors);

    if (l <= 0 || u <= 0 || h <= 0) {
      setIsCalculated(false);
      return;
    }

    // Exact Bijliride calculation formulas:
    // f = (distance / mileage) * 30 (monthly fuel saved in litres)
    // p = f * fuelCost (monthly money saved in ₹)
    // g = f * 2.3 (monthly CO2 saved in kg)
    const f = (l / h) * 30;
    const p = f * u;
    const g = f * 2.3;

    setResults({
      co2: Math.round(g),
      fuel: Math.round(f * 10) / 10,
      money: Math.round(p),
    });

    setIsCalculated(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCalculate(e);
    }
  };

  return (
    <section id="impact" className="impact-section" data-testid="impact-section">
      <div className="container">
        {/* Header Section */}
        <div className="impact-header">
          <h2 className="impact-title">Calculate Your Green Impact</h2>
          <p className="impact-subtitle">
            Estimate how much CO₂, fuel, and money you can save by switching to electric vehicles.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="impact-grid-cards">
          {/* Left Card: Input Form */}
          <div className="impact-form-card">
            <form onSubmit={handleCalculate} noValidate>
              <div className="impact-field">
                <label htmlFor="impact-distance">Distance you commute daily (km) ?</label>
                <input
                  type="number"
                  id="impact-distance"
                  name="distance"
                  className={`impact-input ${errors.distance ? 'is-invalid' : ''}`}
                  placeholder="Enter distance"
                  value={inputs.distance}
                  onChange={(e) => handleInputChange('distance', e.target.value)}
                  onKeyDown={handleKeyDown}
                  min="0"
                  step="any"
                />
              </div>

              <div className="impact-field">
                <label htmlFor="impact-fuel-cost">Cost of fuel per litre ?</label>
                <input
                  type="number"
                  id="impact-fuel-cost"
                  name="fuelCost"
                  className={`impact-input ${errors.fuelCost ? 'is-invalid' : ''}`}
                  placeholder="Enter cost"
                  value={inputs.fuelCost}
                  onChange={(e) => handleInputChange('fuelCost', e.target.value)}
                  onKeyDown={handleKeyDown}
                  min="0"
                  step="any"
                />
              </div>

              <div className="impact-field">
                <label htmlFor="impact-mileage">Mileage of your vehicle ?</label>
                <input
                  type="number"
                  id="impact-mileage"
                  name="mileage"
                  className={`impact-input ${errors.mileage ? 'is-invalid' : ''}`}
                  placeholder="Enter mileage"
                  value={inputs.mileage}
                  onChange={(e) => handleInputChange('mileage', e.target.value)}
                  onKeyDown={handleKeyDown}
                  min="0"
                  step="any"
                />
              </div>

              <button
                type="submit"
                id="impact-calc-btn"
                className="impact-calc-btn"
                aria-label="Calculate Savings"
              >
                Calculate Savings
              </button>
            </form>
          </div>

          {/* Right Card: Output Displays */}
          <div className="impact-results-card">
            <div className="impact-res-group">
              <label>Savings on CO₂ Per Month</label>
              <div className="impact-res-box">
                <span
                  id="impact-co2-val"
                  className={`impact-res-value ${isCalculated ? 'active' : ''}`}
                >
                  {isCalculated ? `${results.co2} Kg` : 'Kg 0000'}
                </span>
              </div>
            </div>

            <div className="impact-res-group">
              <label>Savings on Fuel Per Month</label>
              <div className="impact-res-box">
                <span
                  id="impact-fuel-val"
                  className={`impact-res-value ${isCalculated ? 'active' : ''}`}
                >
                  {isCalculated ? `${results.fuel} L` : 'L 0000'}
                </span>
              </div>
            </div>

            <div className="impact-res-group">
              <label>Savings on Money Per Month</label>
              <div className="impact-res-box">
                <span
                  id="impact-money-val"
                  className={`impact-res-value ${isCalculated ? 'active' : ''}`}
                >
                  {isCalculated ? `₹ ${results.money.toLocaleString('en-IN')}` : '₹ 0000'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
