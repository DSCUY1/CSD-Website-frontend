import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';

function NavbarCollapse({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{ height: "45px" }}
      >
        click
      </Button>
      <Collapse in={open}>
        { children }
      </Collapse>
    </>
  );
}

export default NavbarCollapse;
