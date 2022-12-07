import React, { useState } from 'react';
import { Dropdown, DropdownProps, NavDropdown, NavDropdownProps } from 'react-bootstrap';

type HoverDropdownProps = {
  children?: React.ReactNode;
  title?: React.ReactNode | string;
  autoShow?: boolean;
} & Omit<DropdownProps, 'title'>;

const HoverDropdown: React.FC<HoverDropdownProps> = ({
  children,
  title,
  autoShow,
  ...dropdownProps
}) => {
  const [show, setShow] = useState<boolean>(autoShow ?? false);

  const showDropdown = () => {
    if (!autoShow) {
      setShow(true);
    }
  };

  const hideDropdown = () => {
    if (!autoShow) {
      setShow(false);
    }
  };

  return (
    <>
      <Dropdown
        show={show}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        drop={dropdownProps.drop || 'end'}
        {...dropdownProps}
      >
        <Dropdown.Toggle as="span">{title}</Dropdown.Toggle>
        <Dropdown.Menu>{children}</Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default React.memo(HoverDropdown);
