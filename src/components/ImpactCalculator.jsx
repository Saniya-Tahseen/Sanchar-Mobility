import React, { useState } from 'react';

export default function ImpactCalculator() {
  const [distance, setDistance] = useState('');
  const [fuelCost, setFuelCost] = useState('');
  const [mileage, setMileage] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);
  const [errors, setErrors] = useState({ distance: false, fuelCost: false, mileage: false });

  // Handle calculate action
  const handleCalculate = (e) => {
    if (e) e.preventDefault();

    const dNum = parseFloat(distance);
    const fNum = parseFloat(fuelCost);
    const mNum = parseFloat(mileage);

    const newErrors = {
      distance: !distance || isNaN(dNum) || dNum <= 0,
      fuelCost: !fuelCost || isNaN(fNum) || fNum <= 0,
      mileage: !mileage || isNaN(mNum) || mNum <= 0,
    };

    setErrors(newErrors);

    if (newErrors.distance || newErrors.fuelCost || newErrors.mileage) {
      setIsCalculated(false);
      return;
    }

    setIsCalculated(true);
  };

  const handleInputChange = (field, value) => {
    if (field === 'distance') setDistance(value);
    if (field === 'fuelCost') setFuelCost(value);
    if (field === 'mileage') setMileage(value);

    // Clear error on edit
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCalculate(e);
    }
  };

  // Live parsed numbers
  const dVal = parseFloat(distance) || 0;
  const fVal = parseFloat(fuelCost) || 0;
  const mVal = parseFloat(mileage) || 0;

  const isValid = isCalculated && dVal > 0 && fVal > 0 && mVal > 0;

  // Monthly calculations (30 days/month)
  const monthlyKm = isValid ? dVal * 30 : 0;
  const fuelSavedLitres = isValid ? monthlyKm / mVal : 0;
  const co2SavedKg = isValid ? fuelSavedLitres * 2.31 : 0;

  // Net financial savings (petrol saved minus EV charging cost ~0.25/km)
  const petrolCost = isValid ? fuelSavedLitres * fVal : 0;
  const evChargingCost = isValid ? monthlyKm * 0.25 : 0;
  const netMoneySaved = isValid ? Math.max(0, petrolCost - evChargingCost) : 0;

  // Formatted output strings
  const displayCo2 = !isValid
    ? 'Kg 0000'
    : 'Kg ' + (co2SavedKg >= 100
        ? Math.round(co2SavedKg).toLocaleString('en-IN')
        : (co2SavedKg % 1 === 0 ? co2SavedKg : co2SavedKg.toFixed(1)));

  const displayFuel = !isValid
    ? 'L 0000'
    : 'L ' + (fuelSavedLitres >= 100
        ? Math.round(fuelSavedLitres).toLocaleString('en-IN')
        : (fuelSavedLitres % 1 === 0 ? fuelSavedLitres : fuelSavedLitres.toFixed(1)));

  const displayMoney = !isValid
    ? '₹ 0000'
    : '₹ ' + Math.round(netMoneySaved).toLocaleString('en-IN');

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
                  className={`impact-input ${errors.distance ? 'is-invalid' : ''}`}
                  placeholder="Enter distance"
                  value={distance}
                  onChange={(e) => handleInputChange('distance', e.target.value)}
                  onKeyDown={handleKeyDown}
                  min="1"
                  step="any"
                />
              </div>

              <div className="impact-field">
                <label htmlFor="impact-fuel-cost">Cost of fuel per litre ?</label>
                <input
                  type="number"
                  id="impact-fuel-cost"
                  className={`impact-input ${errors.fuelCost ? 'is-invalid' : ''}`}
                  placeholder="Enter cost"
                  value={fuelCost}
                  onChange={(e) => handleInputChange('fuelCost', e.target.value)}
                  onKeyDown={handleKeyDown}
                  min="1"
                  step="any"
                />
              </div>

              <div className="impact-field">
                <label htmlFor="impact-mileage">Mileage of your vehicle ?</label>
                <input
                  type="number"
                  id="impact-mileage"
                  className={`impact-input ${errors.mileage ? 'is-invalid' : ''}`}
                  placeholder="Enter mileage"
                  value={mileage}
                  onChange={(e) => handleInputChange('mileage', e.target.value)}
                  onKeyDown={handleKeyDown}
                  min="1"
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
                  className={`impact-res-value ${isValid ? 'active' : ''}`}
                >
                  {displayCo2}
                </span>
              </div>
            </div>

            <div className="impact-res-group">
              <label>Savings on Fuel Per Month</label>
              <div className="impact-res-box">
                <span
                  id="impact-fuel-val"
                  className={`impact-res-value ${isValid ? 'active' : ''}`}
                >
                  {displayFuel}
                </span>
              </div>
            </div>

            <div className="impact-res-group">
              <label>Savings on Money Per Month</label>
              <div className="impact-res-box">
                <span
                  id="impact-money-val"
                  className={`impact-res-value ${isValid ? 'active' : ''}`}
                >
                  {displayMoney}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
