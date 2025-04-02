/**
 * 零屿笔记 - 下拉菜单组件
 * 提供可复用的下拉菜单功能，支持自定义触发器和菜单项
 */

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

// 下拉菜单容器
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// 下拉菜单触发器
const DropdownTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: ${props => props.variant === 'contained' ? 'var(--background-alt)' : 'transparent'};
  border: ${props => props.variant === 'outlined' ? '1px solid var(--border-main)' : 'none'};
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: var(--font-size-md);
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: ${props => props.variant === 'text' ? 'var(--background-alt)' : 'var(--background-paper)'};
  }
  
  svg {
    transition: transform 0.2s;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

// 下拉菜单内容
const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 180px;
  background-color: var(--background-paper);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-xs) 0;
  margin-top: var(--spacing-xs);
  display: ${props => props.isOpen ? 'block' : 'none'};
  animation: dropdownFadeIn 0.2s;
  
  ${props => props.position === 'right' && `
    left: auto;
    right: 0;
  `}
  
  @keyframes dropdownFadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// 下拉菜单项
const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: var(--spacing-xs) var(--spacing-md);
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: var(--font-size-md);
  cursor: pointer;
  transition: var(--transition-normal);
  gap: var(--spacing-sm);
  
  &:hover {
    background-color: var(--background-alt);
  }
  
  ${props => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background-color: transparent;
    }
  `}
  
  ${props => props.active && `
    background-color: var(--primary-light);
    color: var(--primary-dark);
    
    &:hover {
      background-color: var(--primary-light);
    }
  `}
`;

// 下拉菜单分割线
const DropdownDivider = styled.div`
  height: 1px;
  background-color: var(--border-light);
  margin: var(--spacing-xs) 0;
`;

/**
 * 下拉菜单组件
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.trigger - 自定义触发器
 * @param {string} props.label - 触发器文本
 * @param {string} props.variant - 触发器样式变体 ('text', 'contained', 'outlined')
 * @param {string} props.position - 下拉菜单位置 ('left', 'right')
 * @param {Array} props.items - 菜单项数组
 * @param {Function} props.onChange - 选择变更回调
 */
const Dropdown = ({
  trigger,
  label,
  variant = 'text',
  position = 'left',
  items = [],
  onChange,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // 处理点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // 切换下拉菜单状态
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // 处理菜单项点击
  const handleItemClick = (item) => {
    if (item.disabled) return;
    
    if (onChange) {
      onChange(item);
    }
    
    if (!item.keepOpen) {
      setIsOpen(false);
    }
  };
  
  return (
    <DropdownContainer ref={dropdownRef}>
      {trigger ? (
        <div onClick={toggleDropdown}>{trigger}</div>
      ) : (
        <DropdownTrigger onClick={toggleDropdown} variant={variant} isOpen={isOpen}>
          {label}
          <FaChevronDown size={12} />
        </DropdownTrigger>
      )}
      
      <DropdownContent isOpen={isOpen} position={position}>
        {items.map((item, index) => (
          item.divider ? (
            <DropdownDivider key={`divider-${index}`} />
          ) : (
            <DropdownItem
              key={item.id || index}
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
              active={item.active}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </DropdownItem>
          )
        ))}
        {children}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;