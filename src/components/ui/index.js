/**
 * 零屿笔记 - UI组件库
 * 提供统一的UI组件，确保整个应用的风格一致性
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// 按钮组件
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? 'var(--spacing-md) var(--spacing-xl)' : 
    props.size === 'small' ? 'var(--spacing-xs) var(--spacing-sm)' : 
    'var(--spacing-sm) var(--spacing-lg)'};
  font-size: ${props => props.size === 'large' ? 'var(--font-size-lg)' : 
    props.size === 'small' ? 'var(--font-size-sm)' : 
    'var(--font-size-md)'};
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: var(--transition-normal);
  gap: var(--spacing-xs);
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: none;
  
  ${props => props.variant === 'primary' && css`
    background: var(--primary-gradient);
    color: var(--white);
    
    &:hover, &:focus {
      box-shadow: 0 4px 12px rgba(74, 111, 255, 0.4);
      transform: translateY(-2px);
      color: var(--white);
    }
  `}
  
  ${props => props.variant === 'secondary' && css`
    background: var(--secondary-gradient);
    color: var(--white);
    
    &:hover, &:focus {
      box-shadow: 0 4px 12px rgba(108, 92, 231, 0.4);
      transform: translateY(-2px);
      color: var(--white);
    }
  `}
  
  ${props => props.variant === 'outline' && css`
    background: transparent;
    border: 2px solid var(--primary-main);
    color: var(--primary-main);
    
    &:hover, &:focus {
      background: var(--primary-main);
      color: var(--white);
    }
  `}
  
  ${props => props.variant === 'text' && css`
    background: transparent;
    color: var(--primary-main);
    padding: var(--spacing-xs) var(--spacing-sm);
    
    &:hover, &:focus {
      background: rgba(74, 111, 255, 0.1);
    }
  `}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

// 链接按钮
export const LinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? 'var(--spacing-md) var(--spacing-xl)' : 
    props.size === 'small' ? 'var(--spacing-xs) var(--spacing-sm)' : 
    'var(--spacing-sm) var(--spacing-lg)'};
  font-size: ${props => props.size === 'large' ? 'var(--font-size-lg)' : 
    props.size === 'small' ? 'var(--font-size-sm)' : 
    'var(--font-size-md)'};
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: var(--transition-normal);
  gap: var(--spacing-xs);
  cursor: pointer;
  text-decoration: none;
  
  ${props => props.variant === 'primary' && css`
    background: var(--primary-gradient);
    color: var(--white);
    
    &:hover, &:focus {
      box-shadow: 0 4px 12px rgba(74, 111, 255, 0.4);
      transform: translateY(-2px);
      color: var(--white);
    }
  `}
  
  ${props => props.variant === 'secondary' && css`
    background: var(--secondary-gradient);
    color: var(--white);
    
    &:hover, &:focus {
      box-shadow: 0 4px 12px rgba(108, 92, 231, 0.4);
      transform: translateY(-2px);
      color: var(--white);
    }
  `}
  
  ${props => props.variant === 'outline' && css`
    background: transparent;
    border: 2px solid var(--primary-main);
    color: var(--primary-main);
    
    &:hover, &:focus {
      background: var(--primary-main);
      color: var(--white);
    }
  `}
  
  ${props => props.variant === 'text' && css`
    background: transparent;
    color: var(--primary-main);
    padding: var(--spacing-xs) var(--spacing-sm);
    
    &:hover, &:focus {
      background: rgba(74, 111, 255, 0.1);
    }
  `}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
`;

// 卡片组件
export const Card = styled.div`
  background-color: var(--background-paper);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-main);
  overflow: hidden;
  transition: var(--transition-normal);
  
  ${props => props.hoverable && css`
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-dark);
    }
  `}
`;

export const CardHeader = styled.div`
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-light);
  
  ${props => props.background && css`
    background: ${props.background};
    color: var(--white);
  `}
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const CardContent = styled.div`
  padding: var(--spacing-lg);
`;

export const CardFooter = styled.div`
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: ${props => props.align || 'flex-end'};
  gap: var(--spacing-sm);
`;

// 输入框组件
export const Input = styled.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-main);
  border-radius: var(--radius-md);
  font-family: var(--font-family-base);
  font-size: var(--font-size-md);
  color: var(--text-primary);
  background-color: var(--background);
  transition: var(--transition-normal);
  
  &:focus {
    outline: none;
    border-color: var(--primary-main);
    box-shadow: 0 0 0 3px rgba(74, 111, 255, 0.2);
  }
  
  &::placeholder {
    color: var(--text-disabled);
  }
  
  ${props => props.error && css`
    border-color: var(--error-main);
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
    }
  `}
  
  ${props => props.disabled && css`
    background-color: var(--background-alt);
    cursor: not-allowed;
    opacity: 0.7;
  `}
`;

// 表单组件
export const FormGroup = styled.div`
  margin-bottom: var(--spacing-md);
`;

export const Label = styled.label`
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  color: var(--text-primary);
`;

export const ErrorText = styled.p`
  color: var(--error-main);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-xs);
  margin-bottom: 0;
`;

// 徽章组件
export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 0.75em;
  font-size: ${props => props.size === 'large' ? 'var(--font-size-md)' : 
    props.size === 'small' ? 'var(--font-size-xs)' : 
    'var(--font-size-sm)'};
  font-weight: 600;
  border-radius: var(--radius-full);
  
  ${props => props.variant === 'primary' && css`
    background-color: var(--primary-light);
    color: var(--primary-dark);
  `}
  
  ${props => props.variant === 'secondary' && css`
    background-color: var(--secondary-light);
    color: var(--secondary-dark);
  `}
  
  ${props => props.variant === 'success' && css`
    background-color: var(--success-light);
    color: var(--success-dark);
  `}
  
  ${props => props.variant === 'warning' && css`
    background-color: var(--warning-light);
    color: var(--warning-dark);
  `}
  
  ${props => props.variant === 'error' && css`
    background-color: var(--error-light);
    color: var(--error-dark);
  `}
  
  ${props => props.variant === 'info' && css`
    background-color: var(--info-light);
    color: var(--info-dark);
  `}
`;

// 分割线组件
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--border-light);
  margin: var(--spacing-md) 0;
  
  ${props => props.vertical && css`
    width: 1px;
    height: auto;
    margin: 0 var(--spacing-md);
  `}
`;

// 头像组件
export const Avatar = styled.div`
  width: ${props => props.size === 'large' ? '48px' : 
    props.size === 'small' ? '24px' : 
    '36px'};
  height: ${props => props.size === 'large' ? '48px' : 
    props.size === 'small' ? '24px' : 
    '36px'};
  border-radius: var(--radius-full);
  background-color: var(--primary-main);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${props => props.size === 'large' ? 'var(--font-size-lg)' : 
    props.size === 'small' ? 'var(--font-size-xs)' : 
    'var(--font-size-md)'};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 警告框组件
export const Alert = styled.div`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  ${props => props.severity === 'success' && css`
    background-color: var(--success-light);
    color: var(--success-dark);
    border-left: 4px solid var(--success-main);
  `}
  
  ${props => props.severity === 'warning' && css`
    background-color: var(--warning-light);
    color: var(--warning-dark);
    border-left: 4px solid var(--warning-main);
  `}
  
  ${props => props.severity === 'error' && css`
    background-color: var(--error-light);
    color: var(--error-dark);
    border-left: 4px solid var(--error-main);
  `}
  
  ${props => props.severity === 'info' && css`
    background-color: var(--info-light);
    color: var(--info-dark);
    border-left: 4px solid var(--info-main);
  `}
`;

// 加载中组件
export const Spinner = styled.div`
  width: ${props => props.size === 'large' ? '40px' : 
    props.size === 'small' ? '16px' : 
    '24px'};
  height: ${props => props.size === 'large' ? '40px' : 
    props.size === 'small' ? '16px' : 
    '24px'};
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--primary-main);
  animation: spin 1s linear infinite;
  display: inline-block;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// 容器组件
export const Container = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

// 网格布局组件
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 12}, 1fr);
  gap: ${props => props.gap || 'var(--spacing-md)'};
`;

export const GridItem = styled.div`
  grid-column: span ${props => props.span || 12};
  
  @media (max-width: 992px) {
    grid-column: span ${props => props.tabletSpan || props.span || 12};
  }
  
  @media (max-width: 768px) {
    grid-column: span ${props => props.mobileSpan || props.tabletSpan || props.span || 12};
  }
`;

// 弹性布局组件
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
`;

// 文本组件
export const Typography = styled.p`
  margin: 0;
  
  ${props => props.variant === 'h1' && css`
    font-size: var(--font-size-h1);
    font-weight: 700;
    line-height: 1.2;
  `}
  
  ${props => props.variant === 'h2' && css`
    font-size: var(--font-size-h2);
    font-weight: 700;
    line-height: 1.2;
  `}
  
  ${props => props.variant === 'h3' && css`
    font-size: var(--font-size-h3);
    font-weight: 600;
    line-height: 1.3;
  `}
  
  ${props => props.variant === 'h4' && css`
    font-size: var(--font-size-xl);
    font-weight: 600;
    line-height: 1.4;
  `}
  
  ${props => props.variant === 'h5' && css`
    font-size: var(--font-size-lg);
    font-weight: 600;
    line-height: 1.4;
  `}
  
  ${props => props.variant === 'h6' && css`
    font-size: var(--font-size-md);
    font-weight: 600;
    line-height: 1.4;
  `}
  
  ${props => props.variant === 'body1' && css`
    font-size: var(--font-size-md);
    line-height: 1.6;
  `}
  
  ${props => props.variant === 'body2' && css`
    font-size: var(--font-size-sm);
    line-height: 1.6;
  `}
  
  ${props => props.variant === 'caption' && css`
    font-size: var(--font-size-xs);
    line-height: 1.4;
    color: var(--text-secondary);
  `}
  
  ${props => props.color === 'primary' && css`
    color: var(--primary-main);
  `}
  
  ${props => props.color === 'secondary' && css`
    color: var(--secondary-main);
  `}
  
  ${props => props.color === 'textPrimary' && css`
    color: var(--text-primary);
  `}
  
  ${props => props.color === 'textSecondary' && css`
    color: var(--text-secondary);
  `}
  
  ${props => props.align && css`
    text-align: ${props.align};
  `}
  
  ${props => props.gutterBottom && css`
    margin-bottom: var(--spacing-md);
  `}
  
  ${props => props.noWrap && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

// 纸张组件（类似卡片但更轻量）
export const Paper = styled.div`
  background-color: var(--background-paper);
  border-radius: var(--radius-md);
  padding: ${props => props.padding || 'var(--spacing-md)'};
  
  ${props => props.elevation === 0 && css`
    box-shadow: none;
  `}
  
  ${props => props.elevation === 1 && css`
    box-shadow: var(--shadow-sm);
  `}
  
  ${props => props.elevation === 2 && css`
    box-shadow: var(--shadow-md);
  `}
  
  ${props => props.elevation === 3 && css`
    box-shadow: var(--shadow-lg);
  `}
  
  ${props => props.elevation === 4 && css`
    box-shadow: var(--shadow-xl);
  `}
  
  ${props => props.square && css`
    border-radius: 0;
  `}
  
  ${props => props.outlined && css`
    border: 1px solid var(--border-main);
    box-shadow: none;
  `}
`;

// 工具提示组件
export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  
  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipContent = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 1000;
  background-color: var(--background-paper);
  color: var(--text-primary);
  text-align: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  font-size: var(--font-size-sm);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
  
  ${props => props.placement === 'top' && css`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: var(--spacing-xs);
  `}
  
  ${props => props.placement === 'bottom' && css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: var(--spacing-xs);
  `}
  
  ${props => props.placement === 'left' && css`
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: var(--spacing-xs);
  `}
  
  ${props => props.placement === 'right' && css`
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: var(--spacing-xs);
  `}
`;

// 模态框组件
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: var(--background-paper);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-lg);
  max-width: ${props => props.maxWidth || '500px'};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modalFadeIn 0.3s;
  
  @keyframes modalFadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: 600;
`;

export const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  transition: var(--transition-normal);
  
  &:hover {
    color: var(--text-primary);
  }
`;

export const ModalBody = styled.div`
  margin-bottom: var(--spacing-lg);
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-sm);
`;

// 标签页组件
export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-light);
  margin-bottom: var(--spacing-md);
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.button`
  padding: var(--spacing-sm) var(--spacing-lg);
  background: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.active ? 'var(--primary-main)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-main)' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: var(--transition-normal);
  white-space: nowrap;
  
  &:hover {
    color: var(--primary-main);
  }
`;

export const TabPanel = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  padding: var(--spacing-sm) 0;
`;

// 进度条组件
export const Progress = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--background-alt);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin: var(--spacing-sm) 0;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background: ${props => props.color === 'secondary' ? 'var(--secondary-gradient)' : 'var(--primary-gradient)'};
  width: ${props => props.value || 0}%;
  transition: width 0.3s ease;
`;

// 开关组件
export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.checked ? 'var(--primary-main)' : 'var(--background-alt)'};
    transition: var(--transition-normal);
    border-radius: var(--radius-full);
    
    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: var(--white);
      transition: var(--transition-normal);
      border-radius: 50%;
      transform: ${props => props.checked ? 'translateX(24px)' : 'translateX(0)'};
    }
  }
  
  input:focus + span {
    box-shadow: 0 0 1px var(--primary-main);
  }
  
  input:disabled + span {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;