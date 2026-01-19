function Hero({ setCurrentView }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Prenez Rendez-vous avec Nos Spécialistes
          </h1>
          <p className="hero-subtitle">
            Service médical de qualité, rapide et accessible. Réservez votre consultation en quelques clics.
          </p>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => setCurrentView('booking')}
          >
            Réserver Maintenant
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
