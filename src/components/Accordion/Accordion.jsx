import './Accordion.css';
import React, { createContext, useContext, useMemo, useRef, useState, Children, cloneElement } from 'react';

const AccordionContextValue = createContext(null);
const AccordionContextAction = createContext(null);

const useAccordionValue = () => {
  const context = useContext(AccordionContextValue);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion.');
  }
  return context;
};
const useAccordionAction = () => {
  const context = useContext(AccordionContextAction);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion.');
  }
  return context;
};

export const Accordion = ({ children }) => {
  const [activeItems, setActiveItems] = useState([]);
  const accordionItems = children.filter((child) => child.type.name === 'Item');

  const actions = useMemo(() => ({
    toggleItem: (id) => {
      setActiveItems((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
    },
    openAll: () => {
      setActiveItems(accordionItems.map((child) => child.props.id));
    },
    closeAll: () => {
      setActiveItems([]);
    },
  }), []);

  return (
    <AccordionContextAction.Provider value={actions}>
      <AccordionContextValue.Provider value={{ activeItems }}>
        <div className="accordion">{children}</div>
      </AccordionContextValue.Provider>
    </AccordionContextAction.Provider>
  );
};

const Item = ({ id, children }) => {
  return (
    <div className="accordion-item">
      {Children.map(children, (child) => cloneElement(child, { id }))}
    </div>
  );
};

const Header = ({ id, children }) => {
  const { activeItems } = useAccordionValue();
  const { toggleItem } = useAccordionAction();
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
  const { activeItems } = useAccordionValue();
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
  const { openAll } = useAccordionAction();

  return (
    <button
      onClick={openAll}
    >
      Open All
    </button>
  );
};

const CloseAllButton = () => {
  const { closeAll } = useAccordionAction();

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
