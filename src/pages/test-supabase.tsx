import { TestSupabaseConnection } from '@/components/TestSupabaseConnection';

export default function TestSupabasePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Test de Connexion Supabase</h1>
          <p className="mt-2 text-sm text-gray-600">
            Cette page permet de tester la connexion à votre base de données Supabase
          </p>
        </div>
        
        <TestSupabaseConnection />
        
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
            <li>Vérifiez que les variables d'environnement sont correctement définies</li>
            <li>Cliquez sur le bouton "Tester la connexion"</li>
            <li>Si vous voyez une erreur, vérifiez :
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Vos identifiants Supabase dans le fichier <code className="bg-gray-100 px-1 rounded">.env</code></li>
                <li>Que votre projet Supabase est bien démarré</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
