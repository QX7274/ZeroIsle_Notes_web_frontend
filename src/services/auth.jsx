/**
 * 零屿笔记 - 认证服务
 * 提供用户认证相关功能
 */

import { createContext, useState, useEffect, useContext } from 'react';
import api from './api';

// 创建认证上下文
export const AuthContext = createContext(null);

// 认证提供者组件
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 检查用户是否已登录
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const userData = await api.authAPI.getCurrentUser();
        setCurrentUser(userData);
        setError(null);
      } catch (err) {
        console.error('获取用户信息失败:', err);
        setError('获取用户信息失败');
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // 用户登录
  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await api.authAPI.login(credentials);
      localStorage.setItem('token', response.access);
      localStorage.setItem('refreshToken', response.refresh);
      
      const userData = await api.authAPI.getCurrentUser();
      setCurrentUser(userData);
      setError(null);
      return userData;
    } catch (err) {
      console.error('登录失败:', err);
      setError(err.response?.data?.detail || '登录失败，请检查用户名和密码');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 用户注册
  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await api.authAPI.register(userData);
      localStorage.setItem('token', response.access);
      localStorage.setItem('refreshToken', response.refresh);
      
      const userInfo = await api.authAPI.getCurrentUser();
      setCurrentUser(userInfo);
      setError(null);
      return userInfo;
    } catch (err) {
      console.error('注册失败:', err);
      setError(err.response?.data?.detail || '注册失败，请稍后再试');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 用户登出
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setCurrentUser(null);
  };

  // 提供的上下文值
  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 自定义Hook，方便在组件中使用认证上下文
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth必须在AuthProvider内部使用');
  }
  return context;
};