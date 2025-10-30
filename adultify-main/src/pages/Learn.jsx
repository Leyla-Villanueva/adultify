import React, { useState } from 'react';
import { FileText, DollarSign, CreditCard, Building, Briefcase, PiggyBank, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Learn = () => {
  const { ganarToken, completedModules } = useAppContext();
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const modules = [
    {
      id: 'rfc',
      icon: FileText,
      title: 'Mi Primer RFC',
      description: 'Aprende qué es el Registro Federal de Contribuyentes, cómo tramitarlo y su importancia en tu vida laboral.',
      duration: '15 min',
      tokens: 1
    },
    {
      id: 'nomina',
      icon: DollarSign,
      title: 'Entendiendo mi Nómina',
      description: 'Comprende todos los conceptos de tu recibo de nómina: percepciones, deducciones, ISR y más.',
      duration: '20 min',
      tokens: 1
    },
    {
      id: 'buro',
      icon: CreditCard,
      title: 'Introducción al Buró de Crédito',
      description: 'Descubre cómo funciona el historial crediticio y su impacto en tu vida financiera.',
      duration: '18 min',
      tokens: 1
    },
    {
      id: 'afore',
      icon: PiggyBank,
      title: 'Tu AFORE: Retiro e Inversión',
      description: 'Conoce cómo funcionan las AFORE y cómo maximizar tu ahorro para el retiro desde joven.',
      duration: '22 min',
      tokens: 2
    },
    {
      id: 'contratos',
      icon: Briefcase,
      title: 'Contratos Laborales',
      description: 'Aprende a identificar tipos de contratos, tus derechos laborales y qué revisar antes de firmar.',
      duration: '25 min',
      tokens: 2
    },
    {
      id: 'credito',
      icon: Building,
      title: 'Créditos y Préstamos',
      description: 'Entiende tasas de interés, CAT, plazos y cómo elegir el mejor crédito según tus necesidades.',
      duration: '30 min',
      tokens: 2
    }
  ];

  const handleComplete = (module) => {
    if (!completedModules.includes(module.id)) {
      ganarToken(module.tokens, module.title);
      setSuccessMessage(`Has completado "${module.title}" y ganado ${module.tokens} $ADLT`);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Módulos de Aprendizaje
          </h1>
          <p className="text-lg text-gray-600">
            Completa los módulos para ganar tokens $ADLT y construir tu conocimiento financiero.
          </p>
        </div>

        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-green-800 font-medium">Completado con éxito</p>
              <p className="text-green-700 text-sm">{successMessage}</p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            const isCompleted = completedModules.includes(module.id);

            return (
              <div
                key={module.id}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all border ${
                  isCompleted ? 'border-green-200 bg-green-50' : 'border-gray-200'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                      isCompleted ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      <Icon className={`h-7 w-7 ${
                        isCompleted ? 'text-green-600' : 'text-blue-600'
                      }`} />
                    </div>
                    {isCompleted && (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{module.duration}</span>
                    <span className="font-semibold text-blue-600">
                      +{module.tokens} $ADLT
                    </span>
                  </div>

                  <button
                    onClick={() => handleComplete(module)}
                    disabled={isCompleted}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      isCompleted
                        ? 'bg-green-100 text-green-700 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {isCompleted ? 'Completado' : 'Iniciar módulo'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Learn;
