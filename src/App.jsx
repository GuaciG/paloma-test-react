import './App.css'
import Logo from './components/Logo'
import Navigation from './components/Navigation'

function App() {
  return (
    <main className='bg-hero-pattern relative overflow-hidden h-screen w-screen bg-cover bg-[position:20%_0%] xl:bg-center'>
      <Logo />
      <Navigation />
    </main>
  )
}

export default App
