import './App.css'
import Button from '../../../packages/webawesome/src/react/button'
import Select from '../../../packages/webawesome/src/react/select'
import Option from '../../../packages/webawesome/src/react/option'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Select>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </div>
  )
}

export default App
