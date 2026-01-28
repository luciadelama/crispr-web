import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Orders from './components/Orders/Orders'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Orders />
      </div>
    </div>
  )
}

export default App
