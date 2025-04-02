/**
 * 零屿笔记 - 笔记编辑器组件
 * 提供富文本编辑功能，支持Markdown、富文本和纯文本模式
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaTable, 
         FaCode, FaQuoteRight, FaImage, FaLink, FaUndo, FaRedo, 
         FaSave, FaMarkdown, FaFont, FaAlignLeft, FaAlignCenter, 
         FaAlignRight, FaAlignJustify, FaHeading } from 'react-icons/fa';
import Paper from '../ui/Paper';

// 编辑器容器
const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-color: var(--background-paper);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

// 编辑器头部
const EditorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
`;

// 标题输入框
const TitleInput = styled.input`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  padding: var(--spacing-sm);
  
  &:focus {
    border-bottom: 2px solid var(--primary-main);
  }
`;

// 工具栏
const Toolbar = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
  flex-wrap: wrap;
  gap: var(--spacing-xs);
`;

// 工具栏分组
const ToolGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding-right: var(--spacing-sm);
  margin-right: var(--spacing-sm);
  border-right: 1px solid var(--border-light);
  
  &:last-child {
    border-right: none;
  }
`;

// 工具按钮
const ToolButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  border: none;
  background-color: ${props => props.active ? 'var(--primary-light)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-dark)' : 'var(--text-secondary)'};
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--background-alt);
    color: var(--primary-main);
  }
  
  &:active {
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }
`;

// 编辑区域
const EditArea = styled.div`
  flex: 1;
  padding: var(--spacing-md);
  overflow-y: auto;
`;

// 编辑器内容区域
const ContentEditable = styled.div`
  width: 100%;
  min-height: 400px;
  padding: var(--spacing-md);
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.6;
  outline: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: var(--background-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
`;

// Markdown编辑区域
const MarkdownEditor = styled.textarea`
  width: 100%;
  min-height: 400px;
  padding: var(--spacing-md);
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Courier New', monospace;
  outline: none;
  resize: none;
  border: none;
  background-color: var(--background-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
`;

// 编辑器底部
const EditorFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) var(--spacing-md);
  border-top: 1px solid var(--border-light);
  color: var(--text-secondary);
  font-size: 0.875rem;
`;

// 状态信息
const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

// 保存按钮
const SaveButton = styled.button`
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
  
  &:disabled {
    background-color: var(--background-alt);
    color: var(--text-disabled);
    cursor: not-allowed;
  }
`;

// 模式切换按钮
const ModeToggle = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--background-alt);
  border-radius: var(--radius-md);
  overflow: hidden;
`;

const ModeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border: none;
  background-color: ${props => props.active ? 'var(--primary-main)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '500' : 'normal'};
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-main)' : 'var(--background-paper)'};
  }
`;

const NoteEditor = ({ initialNote, onSave }) => {
  // 编辑模式：'rich_text', 'markdown', 'plain_text'
  const [editMode, setEditMode] = useState('rich_text');
  const [note, setNote] = useState(initialNote || {
    title: '',
    content: '',
    content_type: 'rich_text',
    tags: [],
    category: null,
    is_pinned: false,
    color: ''
  });
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [isModified, setIsModified] = useState(false);
  
  const contentEditableRef = useRef(null);
  const markdownEditorRef = useRef(null);
  
  // 计算字数和字符数
  useEffect(() => {
    if (note.content) {
      const text = note.content.replace(/<[^>]*>/g, ''); // 移除HTML标签
      setCharCount(text.length);
      setWordCount(text.trim().split(/\s+/).length);
    } else {
      setCharCount(0);
      setWordCount(0);
    }
  }, [note.content]);
  
  // 根据初始笔记设置编辑模式
  useEffect(() => {
    if (initialNote && initialNote.content_type) {
      setEditMode(initialNote.content_type);
    }
  }, [initialNote]);
  
  // 处理标题变更
  const handleTitleChange = (e) => {
    setNote(prev => ({ ...prev, title: e.target.value }));
    setIsModified(true);
  };
  
  // 处理内容变更
  const handleContentChange = () => {
    if (editMode === 'rich_text' || editMode === 'plain_text') {
      setNote(prev => ({ 
        ...prev, 
        content: contentEditableRef.current.innerHTML,
        content_type: editMode
      }));
    } else if (editMode === 'markdown') {
      setNote(prev => ({ 
        ...prev, 
        content: markdownEditorRef.current.value,
        content_type: 'markdown'
      }));
    }
    setIsModified(true);
  };
  
  // 切换编辑模式
  const switchEditMode = (mode) => {
    setEditMode(mode);
    setNote(prev => ({ ...prev, content_type: mode }));
  };
  
  // 执行格式化命令
  const execCommand = (command, value = null) => {
    if (editMode !== 'rich_text') return;
    document.execCommand(command, false, value);
    handleContentChange();
  };
  
  // 保存笔记
  const saveNote = async () => {
    if (!note.title.trim()) {
      alert('请输入笔记标题');
      return;
    }
    
    setIsSaving(true);
    try {
      await onSave(note);
      setIsModified(false);
    } catch (error) {
      console.error('保存笔记失败:', error);
      alert('保存失败，请重试');
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <EditorContainer>
      <EditorHeader>
        <TitleInput 
          type="text" 
          placeholder="输入笔记标题..."
          value={note.title}
          onChange={handleTitleChange}
        />
        <ModeToggle>
          <ModeButton 
            active={editMode === 'rich_text'}
            onClick={() => switchEditMode('rich_text')}
          >
            <FaFont /> 富文本
          </ModeButton>
          <ModeButton 
            active={editMode === 'markdown'}
            onClick={() => switchEditMode('markdown')}
          >
            <FaMarkdown /> Markdown
          </ModeButton>
          <ModeButton 
            active={editMode === 'plain_text'}
            onClick={() => switchEditMode('plain_text')}
          >
            <FaAlignLeft /> 纯文本
          </ModeButton>
        </ModeToggle>
      </EditorHeader>
      
      {editMode === 'rich_text' && (
        <Toolbar>
          <ToolGroup>
            <ToolButton onClick={() => execCommand('bold')}>
              <FaBold />
            </ToolButton>
            <ToolButton onClick={() => execCommand('italic')}>
              <FaItalic />
            </ToolButton>
            <ToolButton onClick={() => execCommand('underline')}>
              <FaUnderline />
            </ToolButton>
          </ToolGroup>
          
          <ToolGroup>
            <ToolButton onClick={() => execCommand('formatBlock', '<h1>')}>
              <FaHeading />
            </ToolButton>
            <ToolButton onClick={() => execCommand('formatBlock', '<blockquote>')}>
              <FaQuoteRight />
            </ToolButton>
            <ToolButton onClick={() => execCommand('formatBlock', '<pre>')}>
              <FaCode />
            </ToolButton>
          </ToolGroup>
          
          <ToolGroup>
            <ToolButton onClick={() => execCommand('insertUnorderedList')}>
              <FaListUl />
            </ToolButton>
            <ToolButton onClick={() => execCommand('insertOrderedList')}>
              <FaListOl />
            </ToolButton>
          </ToolGroup>
          
          <ToolGroup>
            <ToolButton onClick={() => execCommand('justifyLeft')}>
              <FaAlignLeft />
            </ToolButton>
            <ToolButton onClick={() => execCommand('justifyCenter')}>
              <FaAlignCenter />
            </ToolButton>
            <ToolButton onClick={() => execCommand('justifyRight')}>
              <FaAlignRight />
            </ToolButton>
            <ToolButton onClick={() => execCommand('justifyFull')}>
              <FaAlignJustify />
            </ToolButton>
          </ToolGroup>
          
          <ToolGroup>
            <ToolButton onClick={() => {
              const url = prompt('请输入图片URL:');
              if (url) execCommand('insertImage', url);
            }}>
              <FaImage />
            </ToolButton>
            <ToolButton onClick={() => {
              const url = prompt('请输入链接URL:');
              if (url) execCommand('createLink', url);
            }}>
              <FaLink />
            </ToolButton>
          </ToolGroup>
          
          <ToolGroup>
            <ToolButton onClick={() => execCommand('undo')}>
              <FaUndo />
            </ToolButton>
            <ToolButton onClick={() => execCommand('redo')}>
              <FaRedo />
            </ToolButton>
          </ToolGroup>
        </Toolbar>
      )}
      
      <EditArea>
        {(editMode === 'rich_text' || editMode === 'plain_text') && (
          <ContentEditable
            ref={contentEditableRef}
            contentEditable
            dangerouslySetInnerHTML={{ __html: note.content }}
            onInput={handleContentChange}
            style={{ fontFamily: editMode === 'plain_text' ? '"Courier New", monospace' : 'inherit' }}
          />
        )}
        
        {editMode === 'markdown' && (
          <MarkdownEditor
            ref={markdownEditorRef}
            value={note.content}
            onChange={handleContentChange}
            placeholder="使用Markdown格式编写笔记..."
          />
        )}
      </EditArea>
      
      <EditorFooter>
        <StatusInfo>
          <span>{wordCount} 词</span>
          <span>{charCount} 字符</span>
          <span>{isModified ? '已修改' : '已保存'}</span>
        </StatusInfo>
        
        <SaveButton 
          onClick={saveNote} 
          disabled={isSaving || !isModified}
        >
          <FaSave />
          {isSaving ? '保存中...' : '保存笔记'}
        </SaveButton>
      </EditorFooter>
    </EditorContainer>
  );
};

export default NoteEditor;