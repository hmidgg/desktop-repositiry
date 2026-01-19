const DOCTORS = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Médecine Générale', experience: '15 ans', avatar: '👩‍⚕️' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Cardiologie', experience: '12 ans', avatar: '👨‍⚕️' },
  { id: 3, name: 'Dr. Emily Davis', specialty: 'Pédiatrie', experience: '10 ans', avatar: '👩‍⚕️' },
  { id: 4, name: 'Dr. James Wilson', specialty: 'Dermatologie', experience: '18 ans', avatar: '👨‍⚕️' },
]

function DoctorList() {
  return (
    <section className="doctors-section">
      <div className="container">
        <h2 className="section-title">Nos Médecins</h2>
        <p className="section-subtitle">Une équipe de professionnels expérimentés à votre service</p>
        <div className="doctors-grid">
          {DOCTORS.map(doctor => (
            <div key={doctor.id} className="doctor-card-large">
              <div className="doctor-avatar-large">{doctor.avatar}</div>
              <h3>{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <p className="doctor-experience">Expérience: {doctor.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorList
