import React from 'react';
import { User, Award, Calendar, ExternalLink, TrendingUp } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Profile = () => {
  const { userBalance, achievements, completedModules } = useAppContext();

  const userInfo = {
    name: 'Usuario AdultiFy',
    memberSince: 'Octubre 2025',
    level: Math.floor(completedModules.length / 2) + 1
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {userInfo.name}
              </h1>
              <p className="text-gray-600 mb-4">
                Miembro desde {userInfo.memberSince}
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-600">Nivel</span>
                  <p className="text-xl font-bold text-blue-600">{userInfo.level}</p>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-600">Balance</span>
                  <p className="text-xl font-bold text-green-600">{userBalance} $ADLT</p>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-600">Completados</span>
                  <p className="text-xl font-bold text-purple-600">{completedModules.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Historial Financiero Descentralizado (DFID)
            </h2>
          </div>

          <p className="text-gray-600 mb-8">
            Tu currículum de vida adulta: un registro verificable de tus logros y conocimientos adquiridos.
          </p>

          {achievements.length === 0 ? (
            <div className="text-center py-12">
              <TrendingUp className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Aún no tienes logros registrados
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Completa módulos de aprendizaje para comenzar a construir tu historial
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          {achievement.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{achievement.date}</span>
                        </div>
                        <span className="font-semibold text-green-600">
                          +{achievement.tokens} $ADLT
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end space-y-2">
                      <div className="bg-gray-100 px-3 py-1 rounded text-xs font-mono text-gray-600">
                        {achievement.txHash}
                      </div>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        <span>Ver en Blockchain</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
