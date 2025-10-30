import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [userBalance, setUserBalance] = useState(() => {
    const saved = localStorage.getItem('adultify_balance');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem('adultify_achievements');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedModules, setCompletedModules] = useState(() => {
    const saved = localStorage.getItem('adultify_completed');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('adultify_balance', userBalance.toString());
  }, [userBalance]);

  useEffect(() => {
    localStorage.setItem('adultify_achievements', JSON.stringify(achievements));
  }, [achievements]);

  useEffect(() => {
    localStorage.setItem('adultify_completed', JSON.stringify(completedModules));
  }, [completedModules]);

  const ganarToken = (amount = 1, moduleName) => {
    setUserBalance(prev => prev + amount);
    if (moduleName && !completedModules.includes(moduleName)) {
      setCompletedModules(prev => [...prev, moduleName]);
      agregarLogro({
        title: `Módulo completado: ${moduleName}`,
        date: new Date().toLocaleDateString(),
        tokens: amount,
        type: 'module'
      });
    }
  };

  const canjearToken = (amount) => {
    if (userBalance >= amount) {
      setUserBalance(prev => prev - amount);
      return true;
    }
    return false;
  };

  const agregarLogro = (logro) => {
    setAchievements(prev => [
      {
        ...logro,
        id: Date.now(),
        txHash: `0x${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`
      },
      ...prev
    ]);
  };

  const value = {
    userBalance,
    achievements,
    completedModules,
    ganarToken,
    canjearToken,
    agregarLogro
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
