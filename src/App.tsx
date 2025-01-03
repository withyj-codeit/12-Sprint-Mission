import { Dropdown } from 'components/Dropdown'
import './App.css';
import { Button } from 'components/Button'
import { useState } from 'react'

const DropdownOptions = [
  { label: 'Apple', value: 'appleId' },
  { label: 'Banana', value: 'bananaId' },
  { label: 'Cherry', value: 'cherryId' },
]

const DropdownOptions2 = [
  { id: 'redId', name: 'Red' },
  { id: 'greenId', name: 'Green' },
  { id: 'blueId', name: 'Blue' },
]

const App = () => {
  const [selectedOption, setSelectedOption] = useState(DropdownOptions[0])
  const [selectedOption2, setSelectedOption2] = useState(DropdownOptions2[0])
  
  return (
    <div className="App">
      <h1>12주차 - 2</h1>
      <Button onClick={() => console.log('Hello')} borderStyle="dotted" type="submit">
        Hello
      </Button>
      <Dropdown
        options={DropdownOptions}
        labelKey="label"
        valueKey="value"
        selectedOption={selectedOption}
        onSelect={(option) => setSelectedOption(option)}
      />
      <Dropdown
        options={DropdownOptions2}
        labelKey="name"
        valueKey="id"
        selectedOption={selectedOption2}
        onSelect={(option) => setSelectedOption2(option)}
      />
    </div>
  );
}

export default App;
