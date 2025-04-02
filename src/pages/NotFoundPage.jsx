import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: var(--light-background);
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0 2rem;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HomeButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: #2980b9;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>页面未找到</ErrorTitle>
      <ErrorMessage>
        很抱歉，您尝试访问的页面不存在或已被移除。
        请检查URL是否正确，或返回首页继续浏览。
      </ErrorMessage>
      <HomeButton to="/">返回首页</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFoundPage;