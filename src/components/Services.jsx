const SERVICES = [
  {
    icon: '🩺',
    title: 'Consultation Générale',
    description: 'Consultation médicale complète pour tous vos besoins de santé quotidiens'
  },
  {
    icon: '❤️',
    title: 'Cardiologie',
    description: 'Prise en charge spécialisée pour votre santé cardiovasculaire'
  },
  {
    icon: '👶',
    title: 'Pédiatrie',
    description: 'Soins médicaux dédiés aux enfants et adolescents'
  },
  {
    icon: '🔬',
    title: 'Analyses Médicales',
    description: 'Tests et analyses de laboratoire pour un diagnostic précis'
  },
  {
    icon: '💉',
    title: 'Vaccinations',
    description: 'Vaccinations et rappels pour vous protéger'
  },
  {
    icon: '📋',
    title: 'Suivi Médical',
    description: 'Suivi régulier et gestion de vos dossiers médicaux'
  }
]

function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Nos Services</h2>
        <p className="section-subtitle">Des soins médicaux complets et de qualité</p>
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
