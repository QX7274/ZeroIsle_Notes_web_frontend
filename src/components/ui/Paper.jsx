/**
 * 零屿笔记 - Paper组件
 * 轻量级容器组件，用于内容分组和视觉区分
 */

import React from 'react';
import styled, { css } from 'styled-components';

// 纸张组件（类似卡片但更轻量）
const PaperWrapper = styled.div`
  background-color: var(--background-paper);
  border-radius: var(--radius-md);
  padding: ${props => props.padding || 'var(--spacing-md)'};
  
  ${props => props.elevation === 0 && css`
    box-shadow: none;
  `}
  
  ${props => props.elevation === 1 && css`
    box-shadow: var(--shadow-light);
  `}
  
  ${props => props.elevation === 2 && css`
    box-shadow: var(--shadow-main);
  `}
  
  ${props => props.elevation === 3 && css`
    box-shadow: var(--shadow-dark);
  `}
  
  ${props => props.elevation === 4 && css`
    box-shadow: var(--shadow-intense);
  `}
  
  ${props => props.square && css`
    border-radius: 0;
  `}
  
  ${props => props.hoverable && css`
    transition: var(--transition-normal);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-dark);
    }
  `}
`;

const Paper = ({ children, elevation = 1, square = false, padding, hoverable = false, ...props }) => {
  return (
    <PaperWrapper 
      className={className}
      elevation={elevation}
      square={square}
      onClick={onClick}
    >
      {children}
    </PaperWrapper>
  );
};

export default Paper;