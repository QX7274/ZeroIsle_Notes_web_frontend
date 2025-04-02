import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPen, FaBrain, FaMicrophone, FaUsers } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  
  @media (max-width: 768px) {
    height: auto;
    padding: 120px 0 80px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin-bottom: 3rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: white;
  color: var(--primary-color);
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: #f8f9fa;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid white;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-background);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 80px 0;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  background-color: white;
  color: var(--primary-color);
  padding: 1rem 2.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
  display: inline-block;
  
  &:hover {
    background-color: #f8f9fa;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const HomePage = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle>AI驱动，从零开始构建您的知识岛屿</HeroTitle>
            <HeroSubtitle>
              零屿笔记是一款智能笔记应用，集成手写识别、知识图谱、语音功能和社群分享，
              让您的笔记更智能、更有条理、更易于分享。
            </HeroSubtitle>
            <ButtonGroup>
              <PrimaryButton to="/download">立即下载</PrimaryButton>
              <SecondaryButton to="/features">了解更多</SecondaryButton>
            </ButtonGroup>
          </HeroText>
          <HeroImage>
            <img src="/images/hero-app.png" alt="零屿笔记应用界面" />
          </HeroImage>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <div className="container">
          <h2 className="section-title">强大功能，智能体验</h2>
          <p className="section-subtitle">探索零屿笔记的核心功能，体验AI驱动的笔记新方式</p>
          
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <FaPen />
              </FeatureIcon>
              <FeatureTitle>手写体识别</FeatureTitle>
              <FeatureDescription>
                基于百度飞桨OCR模型，实现高精度的中英文手写识别，将您的手写内容实时转换为可编辑的数字文本。
                支持多种书写风格和语言，让记录更自然、更高效。
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaBrain />
              </FeatureIcon>
              <FeatureTitle>知识图谱构建</FeatureTitle>
              <FeatureDescription>
                分析笔记内容之间的关联，自动构建个人知识图谱，帮助您理解知识结构，发现知识间的联系，
                让学习和复习更有效率。
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaMicrophone />
              </FeatureIcon>
              <FeatureTitle>语音功能</FeatureTitle>
              <FeatureDescription>
                基于Whisper框架实现高精度的语音识别，支持语音检索、语音输入和语音提醒功能，
                实现免手动操作的便捷体验，让记录和查找更加轻松。
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaUsers />
              </FeatureIcon>
              <FeatureTitle>社群功能</FeatureTitle>
              <FeatureDescription>
                提供笔记分享、社交互动功能，建立用户社区，促进知识交流和分享。
                您可以选择性地分享笔记内容，与志同道合的朋友一起学习和成长。
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </div>
      </FeaturesSection>
      
      <CTASection>
        <CTAContent>
          <CTATitle>开始您的智能笔记之旅</CTATitle>
          <CTADescription>
            立即下载零屿笔记，体验AI驱动的全新笔记方式，让知识管理更高效、更智能。
          </CTADescription>
          <CTAButton to="/download">免费下载</CTAButton>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default HomePage;