import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaWeixin, FaQq } from 'react-icons/fa';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const AboutSection = styled.section`
  padding: 100px 0;
  
  &:nth-child(odd) {
    background-color: var(--light-background);
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MissionSection = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const MissionContent = styled.div`
  flex: 1;
`;

const MissionImage = styled.div`
  flex: 1;
  
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: var(--shadow);
  }
`;

const MissionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const MissionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 1.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  box-shadow: var(--shadow);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const MemberRole = styled.p`
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #666;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const ContactTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const ContactInfo = styled.p`
  color: #666;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: var(--primary-color);
  font-size: 1.8rem;
  transition: var(--transition);
  
  &:hover {
    color: #2980b9;
    transform: translateY(-3px);
  }
`;

const AboutPage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>关于我们</HeroTitle>
          <HeroSubtitle>
            了解零屿笔记背后的团队和我们的使命，共同探索知识管理的未来。
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      <AboutSection>
        <AboutContainer>
          <h2 className="section-title">我们的使命</h2>
          <p className="section-subtitle">用AI技术重新定义笔记体验，让知识管理更智能、更高效</p>
          
          <MissionSection>
            <MissionContent>
              <MissionTitle>从零开始，构建知识岛屿</MissionTitle>
              <MissionText>
                零屿笔记诞生于对传统笔记应用的反思。我们发现，随着信息爆炸时代的到来，
                人们需要的不仅是简单的记录工具，更需要一个能够智能组织、关联和挖掘知识价值的平台。
              </MissionText>
              <MissionText>
                我们的使命是将先进的AI技术与笔记应用相结合，创造一个从"零"开始，
                帮助用户构建个人知识"岛屿"的工具。在这里，每一条笔记不再是孤立的信息，
                而是相互关联的知识节点，共同构成用户独特的知识体系。
              </MissionText>
              <MissionText>
                我们相信，通过手写识别、知识图谱、语音交互等技术的融合，
                可以让知识管理变得更加自然、高效，让学习和创造的过程更加愉悦。
              </MissionText>
            </MissionContent>
            
            <MissionImage>
              <img src="/images/about-mission.jpg" alt="零屿笔记的使命" />
            </MissionImage>
          </MissionSection>
        </AboutContainer>
      </AboutSection>
      
      <AboutSection id="team">
        <AboutContainer>
          <h2 className="section-title">我们的团队</h2>
          <p className="section-subtitle">一群热爱技术与教育的创新者，致力于改变人们的学习方式</p>
          
          <TeamGrid>
            <TeamMember>
              <MemberImage>
                <img src="/images/team-member1.jpg" alt="张明 - 创始人兼CEO" />
              </MemberImage>
              <MemberName>张明</MemberName>
              <MemberRole>创始人兼CEO</MemberRole>
              <MemberBio>
                前Google AI研究员，拥有10年AI和教育科技经验。
                致力于将最前沿的AI技术应用于教育领域，让学习变得更加个性化和高效。
              </MemberBio>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                <img src="/images/team-member2.jpg" alt="李华 - CTO" />
              </MemberImage>
              <MemberName>李华</MemberName>
              <MemberRole>CTO</MemberRole>
              <MemberBio>
                全栈开发专家，曾在多家知名科技公司担任技术负责人。
                专注于构建高性能、可扩展的软件架构，确保用户体验的流畅和稳定。
              </MemberBio>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                <img src="/images/team-member3.jpg" alt="王芳 - 产品设计总监" />
              </MemberImage>
              <MemberName>王芳</MemberName>
              <MemberRole>产品设计总监</MemberRole>
              <MemberBio>
                拥有丰富的用户体验设计经验，曾参与多个知名教育应用的设计工作。
                致力于创造简洁、直观且功能强大的产品界面，让复杂的技术变得易于使用。
              </MemberBio>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                <img src="/images/team-member4.jpg" alt="陈强 - AI研发负责人" />
              </MemberImage>
              <MemberName>陈强</MemberName>
              <MemberRole>AI研发负责人</MemberRole>
              <MemberBio>
                机器学习专家，专注于自然语言处理和计算机视觉领域。
                负责零屿笔记的核心AI引擎开发，包括手写识别、知识图谱构建等关键技术。
              </MemberBio>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                <img src="/images/team-member5.jpg" alt="赵琳 - 市场营销总监" />
              </MemberImage>
              <MemberName>赵琳</MemberName>
              <MemberRole>市场营销总监</MemberRole>
              <MemberBio>
                拥有丰富的科技产品营销经验，精通用户增长和品牌建设。
                负责零屿笔记的市场策略和用户社区建设，致力于打造活跃的学习社区。
              </MemberBio>
            </TeamMember>
            
            <TeamMember>
              <MemberImage>
                <img src="/images/team-member6.jpg" alt="刘伟 - 教育顾问" />
              </MemberImage>
              <MemberName>刘伟</MemberName>
              <MemberRole>教育顾问</MemberRole>
              <MemberBio>
                资深教育工作者，拥有20年教学和教育研究经验。
                为零屿笔记提供教育学理论支持，确保产品设计符合学习科学原理。
              </MemberBio>
            </TeamMember>
          </TeamGrid>
        </AboutContainer>
      </AboutSection>
      
      <AboutSection id="contact">
        <AboutContainer>
          <h2 className="section-title">联系我们</h2>
          <p className="section-subtitle">有任何问题或建议？我们期待听到您的声音</p>
          
          <ContactGrid>
            <ContactCard>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactTitle>电子邮件</ContactTitle>
              <ContactInfo>info@zeroislenotes.com</ContactInfo>
              <ContactInfo>support@zeroislenotes.com</ContactInfo>
            </ContactCard>
            
            <ContactCard>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactTitle>电话</ContactTitle>
              <ContactInfo>+86 400-123-4567</ContactInfo>
              <ContactInfo>周一至周五 9:00-18:00</ContactInfo>
            </ContactCard>
            
            <ContactCard>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactTitle>地址</ContactTitle>
              <ContactInfo>北京市海淀区中关村科技园</ContactInfo>
              <ContactInfo>创新大厦B座15层</ContactInfo>
            </ContactCard>
          </ContactGrid>
          
          <SocialLinks>
            <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="#" title="微信公众号：零屿笔记">
              <FaWeixin />
            </SocialIcon>
            <SocialIcon href="#" title="QQ群：123456789">
              <FaQq />
            </SocialIcon>
          </SocialLinks>
        </AboutContainer>
      </AboutSection>
    </PageContainer>
  );
};

export default AboutPage;