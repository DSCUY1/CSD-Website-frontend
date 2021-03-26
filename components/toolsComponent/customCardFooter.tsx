import React from 'react';

function CustomCardFooter({ children, headerCard, footerCard }) {
  return (
    <div class=" border-0 card">
      <div class="card-body">
        <div class="card-title d-flex mb-3">
          { headerCard }
        </div>
        { children }
        <div class="border-0 mt-4">
          { footerCard }
        </div>
      </div>
    </div>
  );
}

export default CustomCardFooter;
