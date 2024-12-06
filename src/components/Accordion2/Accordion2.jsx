import { useRef, useState } from "react"

export const Accordion2 = () => {
  const [activeItems, setActiveItems] = useState([]);
  const ref1 = useRef();
  const ref2 = useRef();

  return (
    <div className='accordion'>
      <button onClick={() => setActiveItems([1, 2])}>Open All</button>
      <button onClick={() => setActiveItems([])}>Close All</button>
      <div className="accordion-item">
        <div
          className={`accordion-header ${activeItems.includes(1) ? 'active' : ''}`}
          onClick={() => setActiveItems(
            (prev) => prev.includes(1) ? prev.filter((id) => id !== 1) : [...prev, 1]
          )}
        >
          Header 1
        </div>
        <div
          ref={ref1}
          className="accordion-body"
          style={{
            height: activeItems.includes(1) ? ref1?.current?.scrollHeight : 0,
          }}
        >
          <h1>Body 1 Content</h1>
        </div>
      </div>
      <div className="accordion-item">
        <div
          className={`accordion-header ${activeItems.includes(2) ? 'active' : ''}`}
          onClick={() => setActiveItems(
            (prev) => prev.includes(2) ? prev.filter((id) => id !== 2) : [...prev, 2]
          )}
        >
          Header 2
        </div>
        <div
          ref={ref2}
          className="accordion-body"
          style={{
            height: activeItems.includes(2) ? ref2?.current?.scrollHeight : 0,
          }}
        >
          <div>
            <h2>Body 2 Content</h2>
            <p>blah blah blah</p>
          </div>
        </div>
      </div>
    </div>
  )
}
