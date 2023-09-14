import React from 'react';

const WorksDecor = () => {
  const squareDecor = [];
  for (let i = 1; i < 11; i += 1) {
    squareDecor.push(`s${i}`);
  }

  return (
    <div className="work__square--decor--container">
      <div className="work__square--decor">
        {squareDecor.map((square) => (
          <div
            className={`work__square--decor-s work__square--decor-${square}`}
            key={square}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksDecor;
