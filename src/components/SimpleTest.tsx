import { useState } from 'react';

export function SimpleTest() {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '0.5rem',
      boxShadow: '0 0 0 4px red',
      zIndex: 9999,
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '1rem', color: '#1a202c' }}>Test d'affichage</h2>
      <button
        onClick={() => {
          setClicked(true);
          alert('Bouton cliqué avec succès !');
        }}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 500
        }}
      >
        {clicked ? '✅ Fonctionne !' : 'Cliquez-moi'}
      </button>
      {clicked && (
        <p style={{ marginTop: '1rem', color: '#4a5568' }}>
          Super ! Le bouton fonctionne correctement.
        </p>
      )}
    </div>
  );
}

export default SimpleTest;
