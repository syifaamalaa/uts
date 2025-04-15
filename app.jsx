import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123456789' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      name: newName,
      number: newNumber
    }
    setPersons([...persons, newContact])
    setNewName('')
    setNewNumber('')
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Phonebook</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">Add</button>
        </div>
      </form>
      <h2 className="text-xl font-semibold mb-2">Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} : {person.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App