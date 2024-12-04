import React, { useState } from 'react'
import List1 from './List1'
import List from './pages/List'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <List />
    </div>
  )
}

export default App
