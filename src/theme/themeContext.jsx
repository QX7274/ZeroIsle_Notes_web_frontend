/**
 * 零屿笔记 - 主题上下文
 * 提供主题切换功能
 */

import React, { createContext, useState, useEffect, useContext } from 'react';

// 创建主题上下文
export const ThemeContext = createContext(null);

// 主题类型
const THEME_TYPES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// CSS变量映射
const themeVariables = {
  [THEME_TYPES.LIGHT]: {
    '--background-color': '#ffffff',
    '--light-background': '#f8f9fa',
    '--text-color': '#2d3436',
    '--primary-color': '#3498db',
    '--secondary-color': '#6c5ce7',
    '--border-color': '#dfe6e9',
    '--shadow': '0 2px 10px rgba(0, 0, 0, 0.05)',
    '--transition': 'all 0.3s ease'
  },
  [THEME_TYPES.DARK]: {
    '--background-color': '#1e1e1e',
    '--light-background': '#2d3436',
    '--text-color': '#f1f2f6',
    '--primary-color': '#74b9ff',
    '--secondary-color': '#a29bfe',
    '--border-color': '#636e72',
    '--shadow': '0 2px 10px rgba(0, 0, 0, 0.2)',
    '--transition': 'all 0.3s ease'
  }
};

// 主题提供者组件
export const ThemeProvider = ({ children }) => {
  // 从本地存储获取主题设置，默认为亮色主题
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || THEME_TYPES.LIGHT;
  });

  // 切换主题
  const toggleTheme = () => {
    const newTheme = theme === THEME_TYPES.LIGHT ? THEME_TYPES.DARK : THEME_TYPES.LIGHT;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // 应用主题变量到文档根元素
  useEffect(() => {
    const root = document.documentElement;
    const variables = themeVariables[theme];

    Object.entries(variables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // 设置data-theme属性，方便CSS选择器使用
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // 提供的上下文值
  const value = {
    theme,
    toggleTheme,
    isDarkMode: theme === THEME_TYPES.DARK
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// 自定义Hook，方便在组件中使用主题上下文
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme必须在ThemeProvider内部使用');
  }
  return context;
};