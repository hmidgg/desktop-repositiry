import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import BookingForm from './components/BookingForm'
import DoctorList from './components/DoctorList'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  const [currentView, setCurrentView] = useState('home')

  return (
    <div className="app">
      <Header setCurrentView={setCurrentView} />
      <main>
        {currentView === 'home' && (
          <>
            <Hero setCurrentView={setCurrentView} />
            <Services />
            <DoctorList />
          </>
        )}
        {currentView === 'booking' && (
          <BookingForm setCurrentView={setCurrentView} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App