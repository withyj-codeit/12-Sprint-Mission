import './App.css'
import { Accordion } from './components/Accordion/Accordion'

const App = () => {
  return (
    <div className="container">
      <h1>8주차</h1>
      <Accordion>
        <Accordion.OpenAllButton />
        <Accordion.CloseAllButton />
        <Accordion.Item id="item1">
          <Accordion.Header>Header 1</Accordion.Header>
          <Accordion.Body><h1>Body 1 Content</h1></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id="item2">
          <Accordion.Header>Header 2</Accordion.Header>
          <Accordion.Body>
            <div>
              <h2>Body 2 Content</h2>
              <p>blah blah blah</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default App;