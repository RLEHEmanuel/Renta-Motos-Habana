import { useState } from 'react';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías añadir la lógica real de autenticación
    console.log('Login submitted', { email, password });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up font-sans">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
          <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Correo</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="tu@correo.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-between items-center gap-4">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
