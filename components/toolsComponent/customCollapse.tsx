import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';

function NavbarCollapse({ children, trigger }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {trigger}
      </div>
      <Collapse in={open}>
        <div className="menu-mobile-content">
          { children }
        </div>
      </Collapse>
    </>
  );
}

export default NavbarCollapse;
