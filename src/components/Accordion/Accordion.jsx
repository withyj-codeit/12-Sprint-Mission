import './Accordion.css';
import React, { createContext, useContext, useMemo, useRef, useState, Children, cloneElement } from 'react';

const AccordionContext = createContext(null);

export const Accordion = ({ children }) => {
  const [activeItems, setActiveItems] = useState([]);
  const accordionItems = children.filter((child) => child.type.name === 'Item');

  const value = useMemo(() => ({
    activeItems,
    toggleItem: (id) => {
      setActiveItems((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
    },
    openAll: () => {
      setActiveItems(accordionItems.map((child) => child.props.id));
    },
    closeAll: () => {
      setActiveItems([]);
    },
  }), [activeItems, accordionItems]);

  return (
    <AccordionContext.Provider value={value}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion.');
  }
  return context;
};

const Item = ({ id, children }) => {
  return (
    <div className="accordion-item">
      {Children.map(children, (child) => cloneElement(child, { id }))}
    </div>
  );
};

const Header = ({ id, children }) => {
  const { activeItems, toggleItem } = useAccordion();
  const isActive = activeItems.includes(id);

  return (
    <div
      className={`accordion-header ${isActive ? 'active' : ''}`}
      onClick={() => toggleItem(id)}
    >
      {children}
    </div>
  );
};

const Body = ({ id, children }) => {
  const ref = useRef(null);
  const { activeItems } = useAccordion();
  const isActive = activeItems.includes(id);

  return (
    <div
      ref={ref}
      className="accordion-body"
      style={{
        height: isActive ? ref?.current?.scrollHeight : 0,
      }}
    >
      {children}
    </div>
  );
};

const OpenAllButton = () => {
  const { openAll } = useAccordion();

  return (
    <button
      onClick={openAll}
    >
      Open All
    </button>
  );
};

const CloseAllButton = () => {
  const { closeAll } = useAccordion();

  return (
    <button
      onClick={closeAll}
    >
      Close All
    </button>
  );
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;
Accordion.OpenAllButton = OpenAllButton;
Accordion.CloseAllButton = CloseAllButton;
