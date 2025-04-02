/**
 * 零屿笔记 - 笔记页面
 * 提供笔记的浏览、编辑和管理功能
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlus, FaArrowLeft, FaEllipsisV } from 'react-icons/fa';
import NoteList from '../components/editor/NoteList';
import NoteEditor from '../components/editor/NoteEditor';

// 页面容器
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg) var(--spacing-md);
  }
`;

// 页面标题
const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
`;

// 内容区域
const ContentArea = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  flex: 1;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

// 侧边栏
const Sidebar = styled.div`
  width: 380px;
  flex-shrink: 0;
  display: ${props => props.visible ? 'block' : 'none'};
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

// 主内容区
const MainContent = styled.div`
  flex: 1;
  display: ${props => props.visible ? 'block' : 'none'};
`;

// 返回按钮
const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  border: none;
  background-color: var(--background-alt);
  color: var(--text-secondary);
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: var(--spacing-md);
  
  &:hover {
    background-color: var(--background-paper);
    color: var(--primary-main);
  }
`;

// 模拟数据
const mockCategories = [
  { id: '1', name: '工作', color: '#4A6FFF', icon: 'briefcase' },
  { id: '2', name: '学习', color: '#6C5CE7', icon: 'book' },
  { id: '3', name: '个人', color: '#00D2D3', icon: 'user' },
  { id: '4', name: '项目', color: '#2ECC71', icon: 'project' },
];

const mockTags = [
  { id: '1', name: '重要', color: '#E74C3C' },
  { id: '2', name: '待办', color: '#F39C12' },
  { id: '3', name: '灵感', color: '#8C7AE6' },
  { id: '4', name: '会议', color: '#3498DB' },
  { id: '5', name: '参考', color: '#1ABC9C' },
];

const mockNotes = [
  {
    id: '1',
    title: '项目计划书',
    content: '<p>这是一个项目计划书，包含以下内容：</p><ul><li>项目背景</li><li>目标与范围</li><li>时间线</li><li>资源需求</li><li>风险评估</li></ul>',
    content_type: 'rich_text',
    category: '1',
    category_name: '工作',
    tags: [{ id: '1', name: '重要', color: '#E74C3C' }, { id: '4', name: '会议', color: '#3498DB' }],
    is_pinned: true,
    is_archived: false,
    is_trashed: false,
    color: '#EBF3FF',
    created_at: '2023-11-15T10:30:00Z',
    updated_at: '2023-11-16T14:20:00Z',
  },
  {
    id: '2',
    title: '学习笔记：React Hooks',
    content: '<h2>React Hooks 基础</h2><p>React Hooks 是 React 16.8 引入的新特性，它可以让你在不编写 class 的情况下使用 state 和其他 React 特性。</p><h3>常用的 Hooks</h3><ul><li>useState</li><li>useEffect</li><li>useContext</li><li>useReducer</li><li>useCallback</li><li>useMemo</li><li>useRef</li></ul>',
    content_type: 'rich_text',
    category: '2',
    category_name: '学习',
    tags: [{ id: '5', name: '参考', color: '#1ABC9C' }],
    is_pinned: false,
    is_archived: false,
    is_trashed: false,
    color: '#F0ECFF',
    created_at: '2023-11-10T09:15:00Z',
    updated_at: '2023-11-12T16:45:00Z',
  },
  {
    id: '3',
    title: '周末计划',
    content: `- 周六上午：健身
- 周六下午：读书
- 周六晚上：电影
- 周日：家庭聚餐`,
    content_type: 'markdown',
    category: '3',
    category_name: '个人',
    tags: [{ id: '2', name: '待办', color: '#F39C12' }],
    is_pinned: true,
    is_archived: false,
    is_trashed: false,
    color: '#E6FFF9',
    created_at: '2023-11-17T18:30:00Z',
    updated_at: '2023-11-17T18:45:00Z',
  },
  {
    id: '4',
    title: '产品创意',
    content: '<p>新产品创意：智能家居控制系统</p><p>核心功能：</p><ol><li>语音控制</li><li>远程监控</li><li>能源管理</li><li>自动化场景</li><li>安全警报</li></ol><p>目标用户：年轻家庭、科技爱好者</p>',
    content_type: 'rich_text',
    category: '4',
    category_name: '项目',
    tags: [{ id: '3', name: '灵感', color: '#8C7AE6' }],
    is_pinned: false,
    is_archived: false,
    is_trashed: false,
    color: '#E8F8EF',
    created_at: '2023-11-05T11:20:00Z',
    updated_at: '2023-11-08T09:30:00Z',
  },
];

const NotesPage = () => {
  const [view, setView] = useState('list'); // 'list' or 'editor'
  const [notes, setNotes] = useState(mockNotes);
  const [categories, setCategories] = useState(mockCategories);
  const [tags, setTags] = useState(mockTags);
  const [currentNote, setCurrentNote] = useState(null);
  
  // 处理笔记选择
  const handleNoteSelect = (noteId) => {
    const selectedNote = notes.find(note => note.id === noteId);
    setCurrentNote(selectedNote);
    setView('editor');
  };
  
  // 处理新建笔记
  const handleNewNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: '',
      content: '',
      content_type: 'rich_text',
      category: null,
      tags: [],
      is_pinned: false,
      is_archived: false,
      is_trashed: false,
      color: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    setCurrentNote(newNote);
    setView('editor');
  };
  
  // 处理返回列表
  const handleBackToList = () => {
    setView('list');
    setCurrentNote(null);
  };
  
  // 处理保存笔记
  const handleSaveNote = (updatedNote) => {
    // 检查是新建还是更新
    const isNewNote = !notes.some(note => note.id === updatedNote.id);
    
    if (isNewNote) {
      // 新建笔记
      setNotes([updatedNote, ...notes]);
    } else {
      // 更新笔记
      setNotes(notes.map(note => 
        note.id === updatedNote.id ? updatedNote : note
      ));
    }
    
    // 保存成功后可以返回列表或保持编辑状态
    // setView('list');
  };
  
  return (
    <PageContainer>
      <PageTitle>我的笔记</PageTitle>
      
      <ContentArea>
        <Sidebar visible={view === 'list'}>
          <NoteList 
            notes={notes}
            categories={categories}
            tags={tags}
            onNoteSelect={handleNoteSelect}
            onNewNote={handleNewNote}
          />
        </Sidebar>
        
        <MainContent visible={view === 'editor'}>
          <BackButton onClick={handleBackToList}>
            <FaArrowLeft /> 返回笔记列表
          </BackButton>
          
          {currentNote && (
            <NoteEditor 
              initialNote={currentNote}
              onSave={handleSaveNote}
            />
          )}
        </MainContent>
      </ContentArea>
    </PageContainer>
  );
};

export default NotesPage;