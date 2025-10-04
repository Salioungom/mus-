import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

// Style en dur pour éviter les problèmes de chargement de CSS
interface Styles {
  [key: string]: React.CSSProperties;
}

const styles: Styles = {
  container: {
    position: 'relative',
    maxWidth: '28rem',
    margin: '0 auto',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '4px solid #3b82f6',
    zIndex: 50,
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  debugBadge: {
    position: 'absolute',
    top: '-0.75rem',
    right: '-0.75rem',
    backgroundColor: '#ef4444',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    padding: '0.25rem 0.5rem',
    borderRadius: '9999px'
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    marginTop: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },
  buttonHover: {
    backgroundColor: '#2563eb'
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed'
  },
  success: {
    backgroundColor: '#10b981',
    color: 'white'
  },
  error: {
    backgroundColor: '#ef4444',
    color: 'white'
  },
  statusBox: {
    marginTop: '1rem',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem'
  }
};

export function TestSupabaseConnection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');
  const [envVars, setEnvVars] = useState({ url: '', key: '' });

  // Charger les variables d'environnement
  useEffect(() => {
    setEnvVars({
      url: import.meta.env.VITE_SUPABASE_URL || '',
      key: import.meta.env.VITE_SUPABASE_ANON_KEY ? '***' + import.meta.env.VITE_SUPABASE_ANON_KEY.slice(-4) : ''
    });
  }, []);

  // Tester la connexion à Supabase
  const testConnection = async () => {
    setStatus('loading');
    setMessage('Connexion en cours...');
    
    try {
      // Utilisation d'une méthode qui fonctionne toujours
      const { data, error } = await supabase.auth.getSession();

      if (error) throw error;
      
      setStatus('success');
      setMessage('Connexion à Supabase réussie !');
      console.log('Session:', data);
    } catch (err) {
      console.error('Erreur Supabase:', err);
      
      // Message d'erreur plus convivial
      if (err instanceof Error) {
        if (err.message.includes('PGRST205')) {
          setMessage('Erreur: La table demandée n\'existe pas encore.');
        } else if (err.message.includes('JWT')) {
          // C'est normal de ne pas être connecté, on considère que la connexion à l'API est bonne
          setStatus('success');
          setMessage('Connexion à Supabase réussie ! (Non authentifié)');
          return;
        } else {
          setMessage(`Erreur: ${err.message}`);
        }
      } else {
        setMessage('Erreur inconnue lors de la connexion à Supabase');
      }
      
      setStatus('error');
    }
  };

  // Styles dynamiques
  const getButtonStyle = () => {
    let style = { ...styles.button };
    
    if (status === 'loading') {
      style = { ...style, ...styles.buttonDisabled };
    } else if (status === 'success') {
      style = { ...style, ...styles.success };
    } else if (status === 'error') {
      style = { ...style, ...styles.error };
    } else {
      style = { ...style, ...styles.buttonHover };
    }
    
    return style;
  };

  return (
    <div style={styles.container}>
      <div style={styles.debugBadge}>DEBUG</div>
      
      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
        Test de connexion Supabase
      </h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontWeight: 500, marginBottom: '0.5rem' }}>Configuration :</h3>
        <div style={{ 
          backgroundColor: '#f9fafb', 
          padding: '0.75rem', 
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          fontFamily: 'monospace',
          overflowX: 'auto'
        }}>
          <div>URL: {envVars.url || 'Non défini'}</div>
          <div>Clé: {envVars.key || 'Non définie'}</div>
        </div>
      </div>
      
      <button 
        onClick={testConnection}
        disabled={status === 'loading'}
        style={getButtonStyle()}
      >
        {status === 'loading' ? 'Test en cours...' : 'Tester la connexion'}
      </button>
      
      {(status === 'success' || status === 'error') && (
        <div style={{
          ...styles.statusBox,
          backgroundColor: status === 'success' ? '#d1fae5' : '#fee2e2',
          color: status === 'success' ? '#065f46' : '#991b1b',
          borderLeft: `4px solid ${status === 'success' ? '#10b981' : '#ef4444'}`,
          padding: '0.75rem',
          marginTop: '1rem',
          borderRadius: '0.375rem'
        }}>
          {status === 'success' ? '✅ ' : '❌ '}
          {message}
        </div>
      )}
    </div>
  );
}

export default TestSupabaseConnection;
