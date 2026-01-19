function Header({ setCurrentView }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">US Medical</span>
          </div>
          <nav className="nav">
            <button 
              className="nav-link" 
              onClick={() => setCurrentView('home')}
            >
              Accueil
            </button>
            <button 
              className="nav-link nav-link-primary" 
              onClick={() => setCurrentView('booking')}
            >
              Prendre Rendez-vous
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
