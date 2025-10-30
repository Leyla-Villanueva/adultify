import React, { useState } from 'react';
import { Gift, Tag, CheckCircle, AlertCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Rewards = () => {
  const { userBalance, canjearToken, agregarLogro } = useAppContext();
  const [notification, setNotification] = useState(null);

  const rewards = [
    {
      id: 1,
      title: 'Consulta gratuita con contador',
      description: 'Sesión de 30 minutos con un contador certificado para resolver tus dudas fiscales.',
      price: 5,
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Curso online: Inversiones para principiantes',
      description: 'Curso completo de 4 horas sobre cómo comenzar a invertir tu dinero de manera inteligente.',
      price: 8,
      image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: '15% descuento en asesoría legal',
      description: 'Cupón para servicios de asesoría legal en temas laborales y contratos.',
      price: 3,
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Plantilla de presupuesto personal',
      description: 'Plantilla profesional en Excel para gestionar tus finanzas personales de forma efectiva.',
      price: 2,
      image: 'https://images.pexels.com/photos/7681831/pexels-photo-7681831.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'E-book: Guía completa del RFC',
      description: 'Manual digital con todo lo que necesitas saber sobre el RFC y obligaciones fiscales.',
      price: 4,
      image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Webinar: Planificación de retiro',
      description: 'Acceso a webinar exclusivo sobre estrategias de ahorro y planificación para el retiro.',
      price: 6,
      image: 'https://images.pexels.com/photos/7414045/pexels-photo-7414045.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const handleRedeem = (reward) => {
    if (canjearToken(reward.price)) {
      agregarLogro({
        title: `Recompensa canjeada: ${reward.title}`,
        date: new Date().toLocaleDateString(),
        tokens: -reward.price,
        type: 'reward'
      });
      setNotification({
        type: 'success',
        message: `Has canjeado "${reward.title}" exitosamente`
      });
    } else {
      setNotification({
        type: 'error',
        message: `No tienes suficientes tokens. Necesitas ${reward.price} $ADLT`
      });
    }
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Marketplace de Recompensas
          </h1>
          <p className="text-lg text-gray-600">
            Canjea tus tokens $ADLT por beneficios reales que impulsan tu desarrollo profesional.
          </p>
        </div>

        {notification && (
          <div className={`mb-6 rounded-lg p-4 flex items-center space-x-3 ${
            notification.type === 'success'
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            {notification.type === 'success' ? (
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
            )}
            <p className={`font-medium ${
              notification.type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {notification.message}
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => {
            const canAfford = userBalance >= reward.price;

            return (
              <div
                key={reward.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 flex-1">
                      {reward.title}
                    </h3>
                    <Gift className="h-5 w-5 text-blue-600 flex-shrink-0 ml-2" />
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {reward.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-5 w-5 text-blue-600" />
                      <span className="text-xl font-bold text-blue-600">
                        {reward.price} $ADLT
                      </span>
                    </div>

                    <button
                      onClick={() => handleRedeem(reward)}
                      disabled={!canAfford}
                      className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                        canAfford
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Canjear
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
