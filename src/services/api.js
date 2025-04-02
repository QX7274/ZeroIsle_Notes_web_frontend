/**
 * 零屿笔记 - API服务
 * 提供与后端API的交互功能
 */

import axios from 'axios';

// 创建axios实例
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 请求拦截器 - 添加认证信息
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器 - 统一错误处理
api.interceptors.response.use(
  response => response.data,
  error => {
    // 处理401未授权错误
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

// 认证相关API
const authAPI = {
  // 用户登录
  login: (credentials) => api.post('/auth/login/', credentials),
  
  // 用户注册
  register: (userData) => api.post('/auth/register/', userData),
  
  // 获取当前用户信息
  getCurrentUser: () => api.get('/auth/user/'),
  
  // 刷新token
  refreshToken: (refresh) => api.post('/auth/token/refresh/', { refresh }),
};

// 笔记相关API
const notesAPI = {
  // 获取笔记列表
  getNotes: (params) => api.get('/notes/', { params }),
  
  // 获取笔记详情
  getNote: (id) => api.get(`/notes/${id}/`),
  
  // 创建笔记
  createNote: (noteData) => api.post('/notes/', noteData),
  
  // 更新笔记
  updateNote: (id, noteData) => api.put(`/notes/${id}/`, noteData),
  
  // 删除笔记
  deleteNote: (id) => api.delete(`/notes/${id}/`),
  
  // 获取分类列表
  getCategories: () => api.get('/categories/'),
  
  // 创建分类
  createCategory: (categoryData) => api.post('/categories/', categoryData),
  
  // 获取标签列表
  getTags: () => api.get('/tags/'),
  
  // 创建标签
  createTag: (tagData) => api.post('/tags/', tagData),
};

// AI助手相关API
const aiAPI = {
  // 发送消息给AI助手
  sendMessage: (message) => api.post('/ai-assistant/chat/', { message }),
  
  // 获取对话历史
  getChatHistory: () => api.get('/ai-assistant/history/'),
  
  // 手写OCR识别
  recognizeHandwriting: (imageData) => {
    const formData = new FormData();
    formData.append('image', imageData);
    return api.post('/handwriting-ocr/recognize/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  // 语音转文字
  speechToText: (audioData) => {
    const formData = new FormData();
    formData.append('audio', audioData);
    return api.post('/speech-to-text/transcribe/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  // 获取知识图谱
  getKnowledgeGraph: (params) => api.get('/knowledge-graph/', { params }),
};

// 导出API服务
export {
  api as default,
  authAPI,
  notesAPI,
  aiAPI,
};