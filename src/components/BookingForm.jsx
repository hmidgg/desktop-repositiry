import { useState } from 'react'

const DOCTORS = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Médecine Générale', avatar: '👩‍⚕️' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Cardiologie', avatar: '👨‍⚕️' },
  { id: 3, name: 'Dr. Emily Davis', specialty: 'Pédiatrie', avatar: '👩‍⚕️' },
  { id: 4, name: 'Dr. James Wilson', specialty: 'Dermatologie', avatar: '👨‍⚕️' },
]

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
]

function BookingForm({ setCurrentView }) {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    doctorId: null,
    date: '',
    time: '',
    reason: ''
  })
  const [step, setStep] = useState(1)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDoctorSelect = (doctorId) => {
    setFormData(prev => ({ ...prev, doctorId }))
    setStep(2)
  }

  const handleTimeSelect = (time) => {
    setFormData(prev => ({ ...prev, time }))
    setStep(3)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsConfirmed(true)
  }

  const selectedDoctor = DOCTORS.find(d => d.id === formData.doctorId)
  const today = new Date().toISOString().split('T')[0]

  if (isConfirmed) {
    return (
      <div className="booking-container">
        <div className="confirmation">
          <div className="confirmation-icon">✅</div>
          <h2>Rendez-vous Confirmé !</h2>
          <div className="confirmation-details">
            <p><strong>Patient:</strong> {formData.patientName}</p>
            <p><strong>Médecin:</strong> {selectedDoctor?.name}</p>
            <p><strong>Spécialité:</strong> {selectedDoctor?.specialty}</p>
            <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('fr-FR')}</p>
            <p><strong>Heure:</strong> {formData.time}</p>
            <p><strong>Email:</strong> {formData.email}</p>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => {
              setIsConfirmed(false)
              setFormData({
                patientName: '',
                email: '',
                phone: '',
                doctorId: null,
                date: '',
                time: '',
                reason: ''
              })
              setStep(1)
            }}
          >
            Prendre un Autre Rendez-vous
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => setCurrentView('home')}
          >
            Retour à l'Accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button 
          className="back-btn"
          onClick={() => setCurrentView('home')}
        >
          ← Retour
        </button>
        <h2>Réserver un Rendez-vous</h2>
        <div className="progress-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className="step-line"></div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
        </div>
      </div>

      {step === 1 && (
        <div className="step-content">
          <h3>1. Sélectionnez un Médecin</h3>
          <div className="doctor-grid">
            {DOCTORS.map(doctor => (
              <div 
                key={doctor.id}
                className={`doctor-card ${formData.doctorId === doctor.id ? 'selected' : ''}`}
                onClick={() => handleDoctorSelect(doctor.id)}
              >
                <div className="doctor-avatar">{doctor.avatar}</div>
                <h4>{doctor.name}</h4>
                <p>{doctor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="step-content">
          <button className="back-step-btn" onClick={() => setStep(1)}>
            ← Retour
          </button>
          <h3>2. Choisissez une Date et une Heure</h3>
          <div className="date-time-selection">
            <div className="date-selector">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={today}
                required
              />
            </div>
            {formData.date && (
              <div className="time-slots">
                <label>Heure</label>
                <div className="time-grid">
                  {TIME_SLOTS.map(timeSlot => (
                    <button
                      key={timeSlot}
                      type="button"
                      className={`time-btn ${formData.time === timeSlot ? 'selected' : ''}`}
                      onClick={() => handleTimeSelect(timeSlot)}
                    >
                      {timeSlot}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {formData.date && formData.time && (
              <button 
                className="btn btn-primary"
                onClick={() => setStep(3)}
              >
                Continuer
              </button>
            )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step-content">
          <button className="back-step-btn" onClick={() => setStep(2)}>
            ← Retour
          </button>
          <h3>3. Vos Informations</h3>
          <form onSubmit={handleSubmit} className="patient-form">
            <div className="form-group">
              <label>Nom Complet *</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                required
                placeholder="Jean Dupont"
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="jean.dupont@email.com"
              />
            </div>
            <div className="form-group">
              <label>Téléphone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+33 6 12 34 56 78"
              />
            </div>
            <div className="form-group">
              <label>Raison de la Consultation</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows="4"
                placeholder="Décrivez brièvement la raison de votre visite..."
              />
            </div>
            <div className="booking-summary">
              <h4>Résumé du Rendez-vous</h4>
              <p><strong>Médecin:</strong> {selectedDoctor?.name} - {selectedDoctor?.specialty}</p>
              <p><strong>Date:</strong> {formData.date && new Date(formData.date).toLocaleDateString('fr-FR')}</p>
              <p><strong>Heure:</strong> {formData.time}</p>
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              Confirmer le Rendez-vous
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default BookingForm
