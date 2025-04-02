import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaWeixin, FaQq } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 3rem 0 1.5rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--primary-color);
  }
`;

const FooterLink = styled(Link)`
  color: #bdc3c7;
  margin-bottom: 0.8rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    transform: translateX(5px);
  }
`;

const FooterText = styled.p`
  color: #bdc3c7;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #bdc3c7;
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #34495e;
  color: #bdc3c7;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>零屿笔记</FooterTitle>
          <FooterText>
            AI驱动，从零开始构建您的知识岛屿。我们致力于提供最智能、最便捷的笔记应用，帮助您高效管理知识。
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="#" title="微信公众号：零屿笔记">
              <FaWeixin />
            </SocialIcon>
            <SocialIcon href="#" title="QQ群：123456789">
              <FaQq />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>功能</FooterTitle>
          <FooterLink to="/features#handwriting">手写体识别</FooterLink>
          <FooterLink to="/features#knowledge-graph">知识图谱</FooterLink>
          <FooterLink to="/features#speech">语音功能</FooterLink>
          <FooterLink to="/features#community">社群功能</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>下载</FooterTitle>
          <FooterLink to="/download#windows">Windows版</FooterLink>
          <FooterLink to="/download#macos">macOS版</FooterLink>
          <FooterLink to="/download#android">Android版</FooterLink>
          <FooterLink to="/download#ios">iOS版</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>关于我们</FooterTitle>
          <FooterLink to="/about#team">团队介绍</FooterLink>
          <FooterLink to="/about#contact">联系我们</FooterLink>
          <FooterLink to="/about#privacy">隐私政策</FooterLink>
          <FooterLink to="/about#terms">使用条款</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} 零屿笔记. 保留所有权利。</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;