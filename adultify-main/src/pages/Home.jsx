import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Coins, Shield, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Educación Gamificada',
      description: 'Aprende sobre trámites, finanzas personales e independencia económica a través de módulos interactivos diseñados para tu desarrollo profesional.'
    },
    {
      icon: Coins,
      title: 'Tokens $ADLT',
      description: 'Gana tokens por cada módulo completado y canjéalos por recompensas reales. Tu progreso tiene valor tangible.'
    },
    {
      icon: Shield,
      title: 'Historial Descentralizado (DFID)',
      description: 'Construye tu currículum de vida adulta con un registro verificable de tus logros y conocimientos adquiridos.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Domina tu vida adulta con
            <span className="text-blue-600"> AdultiFy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Plataforma integral para jóvenes profesionales que buscan desarrollar habilidades financieras
            y administrativas esenciales para su independencia económica.
          </p>
          <Link
            to="/learn"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <span>Comienza a aprender</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-blue-600 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para tomar el control de tu futuro financiero?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de jóvenes que están construyendo su independencia económica
            con conocimientos prácticos y aplicables.
          </p>
          <Link
            to="/learn"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Explorar módulos</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
