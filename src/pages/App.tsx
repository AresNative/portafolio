import Card from '../components/card'
import './App.css'
import Nav from '../components/nav'
import Avatar from '../components/avatar'
function App() {

  return (
    <div className="container-main">
      <Nav />

      <h2 className='mi'>Hola! 👋 soy Juan José y ...</h2>
      <Avatar
        url='https://media.licdn.com/dms/image/D5635AQE7FORDdkyzSQ/profile-framedphoto-shrink_200_200/0/1686712320701?e=1688407200&v=beta&t=Or5U667sOoLO05TLtdidLwrY44S9skgl1VNc5q75I-4'
        alt="test"
      />
      <Card />
    </div>
  )
}

export default App

