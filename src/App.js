import React, { useState } from 'react'


const App = () => {
  const [name, setName] = useState('Felipe')

  return (
    <div className="hello">
      Hello {name}
    </div>
  )
}

export default App
