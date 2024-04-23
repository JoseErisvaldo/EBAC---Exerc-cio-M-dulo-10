import React from 'react'
import './App.css'

function App() {
  const animais = [
    {
      raca: 'Labrador Retriever',
      tipoDeAlimento: 'Ração para cães',
      sexo: 'Macho',
      idade: 3
    },
    {
      raca: 'Persa',
      tipoDeAlimento: 'Ração para gatos',
      sexo: 'Fêmea',
      idade: 5
    },
    {
      raca: 'Dálmata',
      tipoDeAlimento: 'Ração para cães',
      sexo: 'Macho',
      idade: 2
    },
    {
      raca: 'Siamese',
      tipoDeAlimento: 'Ração para gatos',
      sexo: 'Fêmea',
      idade: 4
    },
    {
      raca: 'Golden Retriever',
      tipoDeAlimento: 'Ração para cães',
      sexo: 'Fêmea',
      idade: 6
    }
  ]

  // Função para criar o card de cada animal
  const criarCardAnimal = animal => {
    return (
      <div className="card" key={animal.raca}>
        <h2>Raça: {animal.raca}</h2>
        <p>Tipo de Alimento: {animal.tipoDeAlimento}</p>
        <p>Sexo: {animal.sexo}</p>
        <p>Idade: {animal.idade}</p>
      </div>
    )
  }

  // Usando a função map para criar os cards de todos os animais
  const cardsAnimais = animais.map(criarCardAnimal)

  // Usando reduce para contar o total de cães machos
  const totalCaesMachos = animais.reduce((total, animal) => {
    return animal.sexo === 'Macho' &&
      animal.tipoDeAlimento === 'Ração para cães'
      ? total + 1
      : total
  }, 0)

  // Usando filter para obter apenas animais fêmeas
  const animaisFemeas = animais.filter(animal => animal.sexo === 'Fêmea')

  // Usando forEach para imprimir os detalhes de cada animal no console
  animais.forEach(animal => {
    console.log(
      `Raça: ${animal.raca}, Tipo de Alimento: ${animal.tipoDeAlimento}, Sexo: ${animal.sexo}, Idade: ${animal.idade}`
    )
  })

  return (
    <div className="App">
      {cardsAnimais}
      <hr></hr>
      <strong>Total de cães machos: {totalCaesMachos}</strong>
      <hr></hr>
      <strong>Animais fêmeas:</strong>
      <ul>
        {animaisFemeas.map(animal => (
          <li key={animal.raca}>{animal.raca}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
