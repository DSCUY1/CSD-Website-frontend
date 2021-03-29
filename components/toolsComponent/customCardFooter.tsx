import React from 'react';

function CustomCardFooter({ children, headerCard, footerCard }) {
  return (
    <div className="border-0 card col-lg-4 col-md-6 col-sm-12 pl-0">
      <div className="card-body">
        <div className="card-title d-flex mb-3">
          { headerCard }
        </div>
        { children }
        <div className="border-0 mt-4">
          { footerCard }
        </div>
      </div>
    </div>
  );
}

export default CustomCardFooter;
