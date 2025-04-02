import React from 'react';
import styled from 'styled-components';
import { FaWindows, FaApple, FaAndroid, FaMobile } from 'react-icons/fa';

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

const DownloadSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-background);
`;

const DownloadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const DownloadCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 3rem;
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const PlatformIcon = styled.div`
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const PlatformTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const PlatformDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const DownloadButton = styled.a`
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

const SystemRequirements = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const RequirementsTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const RequirementsList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: #666;
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const InstructionsSection = styled.section`
  padding: 100px 0;
`;

const InstructionsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const InstructionStep = styled.div`
  display: flex;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-right: 2rem;
  min-width: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const FAQSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-background);
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FAQItem = styled.div`
  margin-bottom: 2rem;
`;

const FAQQuestion = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const FAQAnswer = styled.p`
  color: #666;
  line-height: 1.6;
`;

const DownloadPage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>下载零屿笔记</HeroTitle>
          <HeroSubtitle>
            选择适合您设备的版本，开始智能笔记之旅。所有平台均提供免费下载，支持云端同步。
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      <DownloadSection>
        <div className="container">
          <h2 className="section-title">选择您的平台</h2>
          <p className="section-subtitle">零屿笔记支持多种设备，随时随地记录灵感</p>
          
          <DownloadGrid>
            {/* Windows版本 */}
            <DownloadCard id="windows">
              <PlatformIcon>
                <FaWindows />
              </PlatformIcon>
              <PlatformTitle>Windows版</PlatformTitle>
              <PlatformDescription>
                适用于Windows 10/11系统，提供完整的桌面体验，支持手写笔输入和全功能编辑。
              </PlatformDescription>
              <DownloadButton href="#">
                下载Windows版 v1.0.0
              </DownloadButton>
              
              <SystemRequirements>
                <RequirementsTitle>系统要求</RequirementsTitle>
                <RequirementsList>
                  <li>Windows 10/11 64位操作系统</li>
                  <li>4GB RAM以上</li>
                  <li>500MB可用存储空间</li>
                  <li>支持触控的设备（推荐）</li>
                </RequirementsList>
              </SystemRequirements>
            </DownloadCard>
            
            {/* macOS版本 */}
            <DownloadCard id="macos">
              <PlatformIcon>
                <FaApple />
              </PlatformIcon>
              <PlatformTitle>macOS版</PlatformTitle>
              <PlatformDescription>
                适用于macOS 11.0及以上系统，针对Mac优化，支持触控板和Apple Pencil输入。
              </PlatformDescription>
              <DownloadButton href="#">
                下载macOS版 v1.0.0
              </DownloadButton>
              
              <SystemRequirements>
                <RequirementsTitle>系统要求</RequirementsTitle>
                <RequirementsList>
                  <li>macOS 11.0 Big Sur及以上版本</li>
                  <li>4GB RAM以上</li>
                  <li>500MB可用存储空间</li>
                  <li>支持Apple Silicon和Intel处理器</li>
                </RequirementsList>
              </SystemRequirements>
            </DownloadCard>
            
            {/* Android版本 */}
            <DownloadCard id="android">
              <PlatformIcon>
                <FaAndroid />
              </PlatformIcon>
              <PlatformTitle>Android版</PlatformTitle>
              <PlatformDescription>
                适用于Android 8.0及以上系统，针对平板和手机优化，支持手写笔和触控输入。
              </PlatformDescription>
              <DownloadButton href="#">
                下载Android版 v1.0.0
              </DownloadButton>
              
              <SystemRequirements>
                <RequirementsTitle>系统要求</RequirementsTitle>
                <RequirementsList>
                  <li>Android 8.0及以上版本</li>
                  <li>3GB RAM以上</li>
                  <li>200MB可用存储空间</li>
                  <li>支持手写笔的设备（推荐）</li>
                </RequirementsList>
              </SystemRequirements>
            </DownloadCard>
            
            {/* iOS版本 */}
            <DownloadCard id="ios">
              <PlatformIcon>
                <FaMobile />
              </PlatformIcon>
              <PlatformTitle>iOS/iPadOS版</PlatformTitle>
              <PlatformDescription>
                适用于iOS 14及以上系统，针对iPad和iPhone优化，完美支持Apple Pencil。
              </PlatformDescription>
              <DownloadButton href="#">
                App Store下载
              </DownloadButton>
              
              <SystemRequirements>
                <RequirementsTitle>系统要求</RequirementsTitle>
                <RequirementsList>
                  <li>iOS/iPadOS 14及以上版本</li>
                  <li>iPhone 8及以上机型</li>
                  <li>iPad 6代及以上机型</li>
                  <li>200MB可用存储空间</li>
                </RequirementsList>
              </SystemRequirements>
            </DownloadCard>
          </DownloadGrid>
        </div>
      </DownloadSection>
      
      <InstructionsSection>
        <InstructionsContainer>
          <h2 className="section-title">安装指南</h2>
          <p className="section-subtitle">简单几步，开始使用零屿笔记</p>
          
          <InstructionStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepTitle>下载安装包</StepTitle>
              <StepDescription>
                选择适合您设备的版本，点击下载按钮获取最新版本的安装包。
                移动设备可以直接从应用商店下载，桌面设备请保存安装文件到本地。
              </StepDescription>
            </StepContent>
          </InstructionStep>
          
          <InstructionStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepTitle>安装应用</StepTitle>
              <StepDescription>
                Windows用户：双击安装包，按照向导完成安装。
                macOS用户：打开dmg文件，将应用拖到Applications文件夹。
                Android用户：打开APK文件，允许来自未知来源的应用安装。
                iOS用户：通过App Store安装，无需额外步骤。
              </StepDescription>
            </StepContent>
          </InstructionStep>
          
          <InstructionStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepTitle>创建账号或登录</StepTitle>
              <StepDescription>
                首次使用时，您需要创建一个账号或使用第三方账号登录。
                这将启用云同步功能，让您的笔记在多设备间无缝同步。
              </StepDescription>
            </StepContent>
          </InstructionStep>
          
          <InstructionStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepTitle>开始使用</StepTitle>
              <StepDescription>
                完成登录后，您可以立即开始创建笔记、导入文档或尝试手写识别功能。
                查看应用内的教程了解更多高级功能的使用方法。
              </StepDescription>
            </StepContent>
          </InstructionStep>
        </InstructionsContainer>
      </InstructionsSection>
      
      <FAQSection>
        <FAQContainer>
          <h2 className="section-title">常见问题</h2>
          <p className="section-subtitle">关于下载和安装的常见疑问解答</p>
          
          <FAQItem>
            <FAQQuestion>零屿笔记是免费软件吗？</FAQQuestion>
            <FAQAnswer>
              零屿笔记提供基础版和专业版两种选择。基础版完全免费，提供核心功能；
              专业版需要订阅，提供更多高级功能，如高级AI分析、无限云存储等。
              目前处于推广阶段，所有功能均可免费试用。
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>我的数据安全吗？</FAQQuestion>
            <FAQAnswer>
              零屿笔记非常重视用户数据安全。所有数据传输采用TLS/SSL加密，
              存储采用AES-256加密。您可以选择仅本地存储或启用云同步，
              我们不会未经您的许可访问或分析您的笔记内容。
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>如何在多设备间同步笔记？</FAQQuestion>
            <FAQAnswer>
              只需在所有设备上使用相同的账号登录零屿笔记，您的笔记将自动同步。
              支持实时同步和离线编辑，当网络恢复时自动上传更改。
              您也可以选择特定笔记本进行同步，保持其他内容仅在本地存储。
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>遇到安装问题怎么办？</FAQQuestion>
            <FAQAnswer>
              如果您在安装过程中遇到问题，请尝试以下步骤：
              1. 确保您的设备满足系统要求
              2. 下载最新版本的安装包
              3. 暂时关闭杀毒软件
              4. 以管理员身份运行安装程序
              如果问题仍然存在，请联系我们的技术支持团队获取帮助。
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>
      </FAQSection>
    </PageContainer>
  );
};

export default DownloadPage;