/**
 * 零屿笔记 - 笔记列表组件
 * 提供笔记列表展示，支持分类、标签筛选和搜索功能
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch, FaFilter, FaPlus, FaThumbtack, FaArchive, 
         FaTrash, FaFolder, FaTag, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import Paper from '../ui/Paper';

// 列表容器
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 600px;
  background-color: var(--background-paper);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

// 列表头部
const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
`;

// 搜索栏
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  background-color: var(--background-alt);
  border-radius: var(--radius-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  
  svg {
    color: var(--text-secondary);
    margin-right: var(--spacing-xs);
  }
  
  input {
    flex: 1;
    border: none;
    background: transparent;
    color: var(--text-primary);
    outline: none;
    font-size: 0.9rem;
  }
`;

// 工具栏
const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

// 工具按钮
const ToolButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: none;
  background-color: var(--background-alt);
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }
`;

// 新建笔记按钮
const NewNoteButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  border: none;
  background-color: var(--primary-main);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

// 筛选面板
const FilterPanel = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
  background-color: var(--background-alt);
  gap: var(--spacing-md);
`;

// 筛选组
const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

// 筛选标题
const FilterTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

// 筛选选项容器
const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
`;

// 筛选选项
const FilterOption = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  border: 1px solid ${props => props.selected ? 'var(--primary-main)' : 'var(--border-light)'};
  background-color: ${props => props.selected ? 'var(--primary-light)' : 'var(--background-paper)'};
  color: ${props => props.selected ? 'var(--primary-dark)' : 'var(--text-primary)'};
  font-size: 0.85rem;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    border-color: var(--primary-main);
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }
`;

// 列表内容区域
const ListContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-sm);
`;

// 笔记列表
const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

// 笔记卡片
const NoteCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  background-color: ${props => props.color || 'var(--background-default)'};
  border-left: 4px solid ${props => props.color || 'var(--primary-main)'};
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: var(--transition-normal);
  position: relative;
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`;

// 笔记标题行
const NoteTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-xs);
`;

// 笔记标题
const NoteTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// 笔记操作
const NoteActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  opacity: 0;
  transition: var(--transition-normal);
  
  ${NoteCard}:hover & {
    opacity: 1;
  }
`;

// 笔记操作按钮
const NoteActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  border: none;
  background-color: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--background-alt);
    color: var(--primary-main);
  }
`;

// 笔记预览
const NotePreview = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// 笔记元信息
const NoteMetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--spacing-sm);
  font-size: 0.8rem;
  color: var(--text-tertiary);
`;

// 笔记标签
const NoteTags = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
`;

// 标签
const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  background-color: ${props => props.color || 'var(--background-alt)'};
  color: var(--text-secondary);
  font-size: 0.75rem;
`;

// 笔记时间
const NoteTime = styled.span`
  font-size: 0.75rem;
`;

// 置顶标记
const PinnedBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 24px 24px 0;
  border-color: transparent var(--primary-main) transparent transparent;
`;

// 空状态
const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: var(--spacing-xl);
  color: var(--text-secondary);
  text-align: center;
  
  svg {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    opacity: 0.5;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    font-size: 0.9rem;
    max-width: 400px;
  }
`;

const NoteList = ({ notes = [], categories = [], tags = [], onNoteSelect, onNewNote }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOrder] = useState('updated_desc'); // 'updated_desc', 'updated_asc', 'created_desc', 'created_asc', 'title_asc', 'title_desc'
  const [filteredNotes, setFilteredNotes] = useState([]);
  
  // 根据筛选条件过滤笔记
  useEffect(() => {
    let filtered = [...notes];
    
    // 搜索筛选
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(note => 
        note.title.toLowerCase().includes(term) || 
        (note.content && note.content.toLowerCase().includes(term))
      );
    }
    
    // 分类筛选
    if (selectedCategory) {
      filtered = filtered.filter(note => note.category === selectedCategory);
    }
    
    // 标签筛选
    if (selectedTags.length > 0) {
      filtered = filtered.filter(note => 
        selectedTags.every(tagId => 
          note.tags.some(tag => tag.id === tagId)
        )
      );
    }
    
    // 排序
    filtered.sort((a, b) => {
      // 置顶笔记始终排在前面
      if (a.is_pinned && !b.is_pinned) return -1;
      if (!a.is_pinned && b.is_pinned) return 1;
      
      switch (sortOrder) {
        case 'updated_desc':
          return new Date(b.updated_at) - new Date(a.updated_at);
        case 'updated_asc':
          return new Date(a.updated_at) - new Date(b.updated_at);
        case 'created_desc':
          return new Date(b.created_at) - new Date(a.created_at);
        case 'created_asc':
          return new Date(a.created_at) - new Date(b.created_at);
        case 'title_asc':
          return a.title.localeCompare(b.title);
        case 'title_desc':
          return b.title.localeCompare(a.title);
        default:
          return new Date(b.updated_at) - new Date(a.updated_at);
      }
    });
    
    setFilteredNotes(filtered);
  }, [notes, searchTerm, selectedCategory, selectedTags, sortOrder]);
  
  // 切换排序顺序
  const toggleSortOrder = () => {
    const orders = ['updated_desc', 'updated_asc', 'created_desc', 'created_asc', 'title_asc', 'title_desc'];
    const currentIndex = orders.indexOf(sortOrder);
    const nextIndex = (currentIndex + 1) % orders.length;
    setSortOrder(orders[nextIndex]);
  };
  
  // 切换标签选择
  const toggleTag = (tagId) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter(id => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };
  
  // 格式化日期
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  // 获取排序图标和提示文本
  const getSortIconAndText = () => {
    switch (sortOrder) {
      case 'updated_desc':
        return { icon: <FaSortAmountDown />, text: '最近更新' };
      case 'updated_asc':
        return { icon: <FaSortAmountUp />, text: '最早更新' };
      case 'created_desc':
        return { icon: <FaSortAmountDown />, text: '最近创建' };
      case 'created_asc':
        return { icon: <FaSortAmountUp />, text: '最早创建' };
      case 'title_asc':
        return { icon: <FaSortAmountUp />, text: '标题升序' };
      case 'title_desc':
        return { icon: <FaSortAmountDown />, text: '标题降序' };
      default:
        return { icon: <FaSortAmountDown />, text: '最近更新' };
    }
  };
  
  const { icon: sortIcon, text: sortText } = getSortIconAndText();
  
  return (
    <ListContainer>
      <ListHeader>
        <SearchBar>
          <FaSearch />
          <input 
            type="text" 
            placeholder="搜索笔记..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
        
        <Toolbar>
          <ToolButton title={sortText} onClick={toggleSortOrder}>
            {sortIcon}
          </ToolButton>
          <ToolButton 
            title="筛选选项" 
            onClick={() => setShowFilters(!showFilters)}
            style={{ backgroundColor: showFilters ? 'var(--primary-light)' : 'var(--background-alt)' }}
          >
            <FaFilter />
          </ToolButton>
          <NewNoteButton onClick={onNewNote}>
            <FaPlus /> 新建笔记
          </NewNoteButton>
        </Toolbar>
      </ListHeader>
      
      <FilterPanel visible={showFilters}>
        <FilterGroup>
          <FilterTitle>
            <FaFolder /> 分类
          </FilterTitle>
          <FilterOptions>
            <FilterOption 
              selected={selectedCategory === null}
              onClick={() => setSelectedCategory(null)}
            >
              全部
            </FilterOption>
            {categories.map(category => (
              <FilterOption 
                key={category.id}
                selected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{ 
                  borderColor: category.color || 'var(--border-light)',
                  backgroundColor: selectedCategory === category.id ? 
                    `${category.color}20` || 'var(--primary-light)' : 'var(--background-paper)'
                }}
              >
                {category.name}
              </FilterOption>
            ))}
          </FilterOptions>
        </FilterGroup>
        
        <FilterGroup>
          <FilterTitle>
            <FaTag /> 标签
          </FilterTitle>
          <FilterOptions>
            {tags.map(tag => (
              <FilterOption 
                key={tag.id}
                selected={selectedTags.includes(tag.id)}
                onClick={() => toggleTag(tag.id)}
                style={{ 
                  borderColor: tag.color || 'var(--border-light)',
                  backgroundColor: selectedTags.includes(tag.id) ? 
                    `${tag.color}20` || 'var(--primary-light)' : 'var(--background-paper)'
                }}
              >
                {tag.name}
              </FilterOption>
            ))}
          </FilterOptions>
        </FilterGroup>
      </FilterPanel>
      
      <ListContent>
        {filteredNotes.length > 0 ? (
          <NotesList>
            {filteredNotes.map(note => (
              <NoteCard 
                key={note.id} 
                color={note.color}
                onClick={() => onNoteSelect(note.id)}
              >
                {note.is_pinned && <PinnedBadge />}
                <NoteTitleRow>
                  <NoteTitle>{note.title}</NoteTitle>
                  <NoteActions>
                    <NoteActionButton title="置顶笔记">
                      <FaThumbtack />
                    </NoteActionButton>
                    <NoteActionButton title="归档笔记">
                      <FaArchive />
                    </NoteActionButton>
                    <NoteActionButton title="删除笔记">
                      <FaTrash />
                    </NoteActionButton>
                  </NoteActions>
                </NoteTitleRow>
                
                <NotePreview>
                  {note.content ? note.content.replace(/<[^>]*>/g, '') : '无内容'}
                </NotePreview>
                
                <NoteMetaInfo>
                  <NoteTags>
                    {note.category_name && (
                      <Tag color="var(--primary-light)">
                        <FaFolder size={10} /> {note.category_name}
                      </Tag>
                    )}
                    {note.tags && note.tags.slice(0, 3).map(tag => (
                      <Tag key={tag.id} color={tag.color || 'var(--background-alt)'}>
                        <FaTag size={10} /> {tag.name}
                      </Tag>
                    ))}
                    {note.tags && note.tags.length > 3 && (
                      <Tag>+{note.tags.length - 3}</Tag>
                    )}
                  </NoteTags>
                  <NoteTime>
                    {formatDate(note.updated_at)}
                  </NoteTime>
                </NoteMetaInfo>
              </NoteCard>
            ))}
          </NotesList>
        ) : (
          <EmptyState>
            <FaSearch />
            <h3>未找到笔记</h3>
            <p>
              {searchTerm || selectedCategory || selectedTags.length > 0 ? 
                '尝试使用不同的搜索词或筛选条件' : 
                '开始创建你的第一个笔记吧'}
            </p>
            {!searchTerm && !selectedCategory && selectedTags.length === 0 && (
              <NewNoteButton onClick={onNewNote} style={{ marginTop: 'var(--spacing-md)' }}>
                <FaPlus /> 新建笔记
              </NewNoteButton>
            )}
          </EmptyState>
        )}
      </ListContent>
    </ListContainer>
  );
};

export default NoteList;