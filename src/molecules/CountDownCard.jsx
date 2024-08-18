import React from 'react';

const CountDownSquare = ({ label, number, cardRef }) => {
  return (
    <div className="countdown__card">
      <div className="countdown__card__bg" ref={cardRef}>
        <div className="countdown__card__content">
          <div className="countdown__card__number">
            {number}
          </div>
          <div className="countdown__card__label">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownSquare;
