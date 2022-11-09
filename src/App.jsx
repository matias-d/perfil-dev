import { Header } from './components/Header'
import { Main } from './components/Main'
import { Sidebar } from './components/Sidebar'

function App () {
  return (
    <div className='grid lg:grid-cols-6 min-h-screen'>
      <Sidebar />
      <main className='lg:col-span-5 bg-gray-200 p-8 h-[100vh] overflow-y-scroll '>
        <Header />
        <Main />
      </main>
    </div>
  )
}

export default App
