function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>US Medical</h4>
            <p>Votre santé, notre priorité</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📞 +33 1 23 45 67 89</p>
            <p>📧 contact@usmedical.fr</p>
            <p>📍 123 Rue de la Santé, Paris</p>
          </div>
          <div className="footer-section">
            <h4>Horaires</h4>
            <p>Lun - Ven: 9h - 18h</p>
            <p>Samedi: 9h - 13h</p>
            <p>Dimanche: Fermé</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 US Medical. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
