import React from 'react';
import styled from 'styled-components';
import { FaPen, FaFileAlt, FaBrain, FaMicrophone, FaUsers, FaSync, FaShieldAlt, FaDatabase, FaWifi } from 'react-icons/fa';

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

const FeatureSection = styled.section`
  padding: 100px 0;
  
  &:nth-child(odd) {
    background-color: var(--light-background);
  }
`;

const FeatureContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 992px) {
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
    gap: 2rem;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureImage = styled.div`
  flex: 1;
  
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: var(--shadow);
  }
`;

const FeatureTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-right: 1rem;
    margin-top: 0.2rem;
  }
`;

const FeatureItemContent = styled.div`
  flex: 1;
`;

const FeatureItemTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FeatureItemDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const FeaturesPage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>强大功能，智能体验</HeroTitle>
          <HeroSubtitle>
            探索零屿笔记的核心功能，体验AI驱动的笔记新方式，让知识管理更高效、更智能。
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      {/* 手写体识别模块 */}
      <FeatureSection id="handwriting">
        <FeatureContainer>
          <FeatureContent>
            <FeatureTitle>手写体识别</FeatureTitle>
            <FeatureDescription>
              零屿笔记的手写体识别模块能够将用户的手写内容实时转换为可编辑的数字文本，支持多种书写风格和语言。
              基于百度飞桨OCR模型，实现高精度的中英文手写识别，并支持在PDF、Word等文档上进行手写标记和识别。
            </FeatureDescription>
            
            <FeatureList>
              <FeatureItem>
                <FaPen />
                <FeatureItemContent>
                  <FeatureItemTitle>多样化输入支持</FeatureItemTitle>
                  <FeatureItemDescription>
                    支持手写笔、触控笔、手指触控等多种输入方式，适配平板、手机和电子纸设备。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaPen />
                <FeatureItemContent>
                  <FeatureItemTitle>高精度识别</FeatureItemTitle>
                  <FeatureItemDescription>
                    常见汉字识别准确率&gt;95%，英文和数字&gt;98%，支持中英文混合识别。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaPen />
                <FeatureItemContent>
                  <FeatureItemTitle>离线识别能力</FeatureItemTitle>
                  <FeatureItemDescription>
                    支持最常用3000汉字、基本英文字母和数字的离线识别，无网络环境下也能正常使用。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
            </FeatureList>
          </FeatureContent>
          
          <FeatureImage>
            <img src="/images/handwriting-recognition.png" alt="手写体识别功能" />
          </FeatureImage>
        </FeatureContainer>
      </FeatureSection>
      
      {/* 文件处理与转换模块 */}
      <FeatureSection id="file-processing">
        <FeatureContainer reverse>
          <FeatureImage>
            <img src="/images/file-processing.png" alt="文件处理与转换功能" />
          </FeatureImage>
          
          <FeatureContent>
            <FeatureTitle>文件处理与转换</FeatureTitle>
            <FeatureDescription>
              零屿笔记支持用户上传、预览和编辑PDF、Word等多种格式文件，并提供拍照扫描功能，
              将图片转换为标准文档和可编辑文本，让文档管理更加便捷。
            </FeatureDescription>
            
            <FeatureList>
              <FeatureItem>
                <FaFileAlt />
                <FeatureItemContent>
                  <FeatureItemTitle>多格式支持</FeatureItemTitle>
                  <FeatureItemDescription>
                    支持PDF、Word、TXT、Markdown等文档格式，以及JPG、PNG等图片格式。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaFileAlt />
                <FeatureItemContent>
                  <FeatureItemTitle>拍照扫描</FeatureItemTitle>
                  <FeatureItemDescription>
                    支持拍照扫描文档，自动进行透视校正、增强处理和OCR文本识别。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaFileAlt />
                <FeatureItemContent>
                  <FeatureItemTitle>文档标记与编辑</FeatureItemTitle>
                  <FeatureItemDescription>
                    提供手写笔、荧光笔、文本注释等多种标记工具，支持在文档上直接进行批注。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
            </FeatureList>
          </FeatureContent>
        </FeatureContainer>
      </FeatureSection>
      
      {/* 知识图谱构建模块 */}
      <FeatureSection id="knowledge-graph">
        <FeatureContainer>
          <FeatureContent>
            <FeatureTitle>知识图谱构建</FeatureTitle>
            <FeatureDescription>
              零屿笔记能够分析笔记内容之间的关联，构建个人知识图谱，帮助用户理解知识结构，
              发现知识间的联系，让学习和复习更有效率。
            </FeatureDescription>
            
            <FeatureList>
              <FeatureItem>
                <FaBrain />
                <FeatureItemContent>
                  <FeatureItemTitle>自动知识点提取</FeatureItemTitle>
                  <FeatureItemDescription>
                    自动从笔记中提取概念、关系和事实，构建结构化的知识表示。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaBrain />
                <FeatureItemContent>
                  <FeatureItemTitle>可视化知识网络</FeatureItemTitle>
                  <FeatureItemDescription>
                    以直观的图形方式展示知识点之间的关联，支持缩放、平移和节点展开/折叠。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaBrain />
                <FeatureItemContent>
                  <FeatureItemTitle>学习路径规划</FeatureItemTitle>
                  <FeatureItemDescription>
                    基于知识依赖关系，提供个性化的学习路径建议，识别知识体系中的空白。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
            </FeatureList>
          </FeatureContent>
          
          <FeatureImage>
            <img src="/images/knowledge-graph.png" alt="知识图谱构建功能" />
          </FeatureImage>
        </FeatureContainer>
      </FeatureSection>
      
      {/* 语音功能模块 */}
      <FeatureSection id="speech">
        <FeatureContainer reverse>
          <FeatureImage>
            <img src="/images/speech-features.png" alt="语音功能" />
          </FeatureImage>
          
          <FeatureContent>
            <FeatureTitle>语音功能</FeatureTitle>
            <FeatureDescription>
              零屿笔记提供语音检索、语音输入和语音提醒功能，实现免手动操作的便捷体验。
              基于OpenAI Whisper模型，支持高精度的语音识别和转写。
            </FeatureDescription>
            
            <FeatureList>
              <FeatureItem>
                <FaMicrophone />
                <FeatureItemContent>
                  <FeatureItemTitle>语音转文字</FeatureItemTitle>
                  <FeatureItemDescription>
                    支持实时语音转写和长时间录音识别，适用于会议记录、讲座笔记等场景。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaMicrophone />
                <FeatureItemContent>
                  <FeatureItemTitle>语音检索</FeatureItemTitle>
                  <FeatureItemDescription>
                    通过语音命令快速查找笔记内容，支持多轮对话和上下文理解。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaMicrophone />
                <FeatureItemContent>
                  <FeatureItemTitle>语音提醒</FeatureItemTitle>
                  <FeatureItemDescription>
                    支持通过语音设置提醒，智能解析自然语言时间表达，定期播报重要事项。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
            </FeatureList>
          </FeatureContent>
        </FeatureContainer>
      </FeatureSection>
      
      {/* 社群功能模块 */}
      <FeatureSection id="community">
        <FeatureContainer>
          <FeatureContent>
            <FeatureTitle>社群功能</FeatureTitle>
            <FeatureDescription>
              零屿笔记提供笔记分享、社交互动功能，建立用户社区，促进知识交流和分享，
              让学习变得更加社交化和有趣。
            </FeatureDescription>
            
            <FeatureList>
              <FeatureItem>
                <FaUsers />
                <FeatureItemContent>
                  <FeatureItemTitle>内容分享</FeatureItemTitle>
                  <FeatureItemDescription>
                    支持选择性分享笔记内容，设置不同的权限级别，通过链接或二维码分享。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaUsers />
                <FeatureItemContent>
                  <FeatureItemTitle>社交互动</FeatureItemTitle>
                  <FeatureItemDescription>
                    提供点赞、收藏、评论等互动功能，支持关注感兴趣的创作者。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
              
              <FeatureItem>
                <FaUsers />
                <FeatureItemContent>
                  <FeatureItemTitle>协作笔记</FeatureItemTitle>
                  <FeatureItemDescription>
                    支持多人编辑同一份笔记，实时同步变更，适合团队协作和学习小组使用。
                  </FeatureItemDescription>
                </FeatureItemContent>
              </FeatureItem>
            </FeatureList>
          </FeatureContent>
          
          <FeatureImage>
            <img src="/images/community-features.png" alt="社群功能" />
          </FeatureImage>
        </FeatureContainer>
      </FeatureSection>
      
      {/* 其他功能模块 */}
      <FeatureSection id="other-features">
        <div className="container">
          <h2 className="section-title">更多强大功能</h2>
          <p className="section-subtitle">零屿笔记还提供多种实用功能，满足您的各种需求</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            <FeatureItem>
              <FaSync />
              <FeatureItemContent>
                <FeatureItemTitle>第三方平台集成</FeatureItemTitle>
                <FeatureItemDescription>
                  与印象笔记、Muses-缪思记等第三方笔记平台集成，实现数据同步和无缝迁移。
                </FeatureItemDescription>
              </FeatureItemContent>
            </FeatureItem>
            
            <FeatureItem>
              <FaShieldAlt />
              <FeatureItemContent>
                <FeatureItemTitle>用户认证系统</FeatureItemTitle>
                <FeatureItemDescription>
                  提供手机验证码、密码登录以及微信、QQ等第三方登录，确保安全便捷的用户认证。
                </FeatureItemDescription>
              </FeatureItemContent>
            </FeatureItem>
            
            <FeatureItem>
              <FaDatabase />
              <FeatureItemContent>
                <FeatureItemTitle>数据同步与备份</FeatureItemTitle>
                <FeatureItemDescription>
                  确保用户数据在多设备间同步，并提供可靠的备份恢复机制，保障数据安全。
                </FeatureItemDescription>
              </FeatureItemContent>
            </FeatureItem>
            
            <FeatureItem>
              <FaWifi />
              <FeatureItemContent>
                <FeatureItemTitle>离线功能支持</FeatureItemTitle>
                <FeatureItemDescription>
                  在无网络环境下保证应用的基本功能可用，并在网络恢复后自动同步数据。
                </FeatureItemDescription>
              </FeatureItemContent>
            </FeatureItem>
          </div>
        </div>
      </FeatureSection>
    </PageContainer>
  );
};

export default FeaturesPage;