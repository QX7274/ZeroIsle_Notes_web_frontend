/**
 * 零屿笔记 - AI助手对话组件
 * 提供与AI助手的对话交互功能，支持文本输入和响应显示
 */

import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPaperPlane, FaMicrophone, FaRobot, FaUser, FaImage, 
         FaRegLightbulb, FaRegClock, FaEllipsisH, FaRegCopy, 
         FaSpinner, FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import Paper from '../ui/Paper';

// 打字动画
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// 思考动画
const thinking = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

// 脉冲动画
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// 容器样式
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 600px;
  background-color: var(--background-paper);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

// 对话头部
const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
  background-color: var(--background-alt);
`;

// 助手信息
const AssistantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

// 助手图标
const AssistantIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-gradient);
  color: white;
  font-size: 1.2rem;
`;

// 助手详情
const AssistantDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

// 助手名称
const AssistantName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary);
`;

// 助手状态
const AssistantStatus = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

// 对话内容区域
const ChatContent = styled.div`
  flex: 1;
  padding: var(--spacing-md);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  background-color: var(--background-default);
`;

// 消息容器
const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isUser ? 'row-reverse' : 'row'};
  align-items: flex-start;
  gap: var(--spacing-md);
  max-width: 85%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  
  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

// 头像
const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isUser ? 'var(--primary-main)' : 'var(--secondary-main)'};
  color: white;
  flex-shrink: 0;
`;

// 消息气泡
const MessageBubble = styled.div`
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  background-color: ${props => props.isUser ? 'var(--primary-light)' : 'var(--background-paper)'};
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    ${props => props.isUser ? 'right: -8px' : 'left: -8px'};
    width: 0;
    height: 0;
    border-style: solid;
    ${props => props.isUser 
      ? 'border-width: 8px 0 8px 8px; border-color: transparent transparent transparent var(--primary-light);'
      : 'border-width: 8px 8px 8px 0; border-color: transparent var(--background-paper) transparent transparent;'}
  }
`;

// 消息文本
const MessageText = styled.div`
  font-size: 0.95rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  
  p, ul, ol {
    margin: 0 0 var(--spacing-sm) 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  a {
    color: var(--primary-main);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  code {
    font-family: 'Courier New', monospace;
    background-color: var(--background-alt);
    padding: 2px 4px;
    border-radius: var(--radius-sm);
    font-size: 0.9em;
  }
  
  pre {
    background-color: var(--background-alt);
    padding: var(--spacing-sm);
    border-radius: var(--radius-md);
    overflow-x: auto;
    margin: var(--spacing-sm) 0;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
`;

// 正在输入指示器
const TypingIndicator = styled.div`
  display: flex;
  gap: 4px;
  padding: var(--spacing-xs) var(--spacing-sm);
  
  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--text-secondary);
    display: inline-block;
    animation: ${thinking} 1.4s infinite ease-in-out;
    
    &:nth-child(1) {
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

// 消息时间
const MessageTime = styled.div`
  font-size: 0.75rem;
  color: var(--text-tertiary);
  margin-top: var(--spacing-xs);
  text-align: ${props => props.isUser ? 'right' : 'left'};
`;

// 消息操作
const MessageActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-xs);
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

// 操作按钮
const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  border: none;
  background-color: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--background-alt);
    color: var(--primary-main);
  }
`;

// 建议提示
const SuggestionChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
`;

// 提示芯片
const SuggestionChip = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  border: 1px solid var(--border-light);
  background-color: var(--background-paper);
  color: var(--text-secondary);
  font-size: 0.85rem;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    border-color: var(--primary-main);
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }
  
  svg {
    font-size: 0.75rem;
  }
`;

// 输入区域
const InputArea = styled.div`
  padding: var(--spacing-md);
  border-top: 1px solid var(--border-light);
  background-color: var(--background-paper);
`;

// 输入容器
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  border-radius: var(--radius-lg);
  background-color: var(--background-default);
  box-shadow: var(--shadow-sm);
`;

// 文本输入
const TextInput = styled.textarea`
  flex: 1;
  border: none;
  background: transparent;
  resize: none;
  padding: var(--spacing-xs);
  height: 24px;
  max-height: 120px;
  font-size: 0.95rem;
  color: var(--text-primary);
  font-family: inherit;
  outline: none;
  
  &::placeholder {
    color: var(--text-tertiary);
  }
`;

// 输入按钮
const InputButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.primary ? 'var(--primary-main)' : 'var(--background-alt)'};
  color: ${props => props.primary ? 'white' : 'var(--text-secondary)'};
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--primary-dark)' : 'var(--background-paper)'};
  }
  
  &:disabled {
    background-color: var(--background-alt);
    color: var(--text-disabled);
    cursor: not-allowed;
  }
`;

// 加载动画
const LoadingSpinner = styled(FaSpinner)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// 示例提示
const examplePrompts = [
  { icon: <FaRegLightbulb />, text: "帮我总结这篇笔记的要点" },
  { icon: <FaRegLightbulb />, text: "将这段文字翻译成英文" },
  { icon: <FaRegLightbulb />, text: "帮我优化这段代码" },
  { icon: <FaRegLightbulb />, text: "生成一个学习计划" },
];

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [feedbackStatus, setFeedbackStatus] = useState({});
  
  const chatContentRef = useRef(null);
  const textInputRef = useRef(null);
  
  // 自动滚动到最新消息
  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);
  
  // 自动调整输入框高度
  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.style.height = 'auto';
      textInputRef.current.style.height = `${Math.min(textInputRef.current.scrollHeight, 120)}px`;
    }
  }, [inputText]);
  
  // 加载历史消息
  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        // 从localStorage获取当前会话ID
        const savedConversationId = localStorage.getItem('currentConversationId');
        
        if (savedConversationId) {
          setConversationId(savedConversationId);
          
          // 从API获取历史消息
          const response = await fetch(`http://localhost:8000/api/ai-assistant/conversations/${savedConversationId}/messages/`);
          if (response.ok) {
            const data = await response.json();
            
            // 转换消息格式
            const formattedMessages = data.map(msg => ({
              id: msg.id,
              text: msg.content,
              isUser: msg.role === 'user',
              timestamp: new Date(msg.created_at),
            }));
            
            setMessages(formattedMessages);
          }
        } else {
          // 创建新会话
          const response = await fetch('http://localhost:8000/api/ai-assistant/conversations/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: '新对话' }),
          });
          
          if (response.ok) {
            const data = await response.json();
            setConversationId(data.id);
            localStorage.setItem('currentConversationId', data.id);
          }
        }
      } catch (error) {
        console.error('加载聊天历史失败:', error);
      }
    };
    
    loadChatHistory();
  }, []);
  
  // 发送消息
  const sendMessage = async () => {
    if (!inputText.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsSending(true);
    
    try {
      // 调用后端API发送消息
      const response = await fetch('http://localhost:8000/api/ai-assistant/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversation_id: conversationId,
          message: userMessage.text,
        }),
      });
      
      if (response.ok) {
        setIsTyping(true);
        
        const data = await response.json();
        
        // 短暂延迟，模拟思考时间
        setTimeout(() => {
          setIsTyping(false);
          
          // 添加AI响应
          const aiResponse = {
            id: data.id || Date.now() + 1,
            text: data.response || generateResponse(userMessage.text),
            isUser: false,
            timestamp: new Date(),
          };
          
          setMessages(prev => [...prev, aiResponse]);
          setIsSending(false);
        }, 1000);
      } else {
        // API调用失败，使用本地模拟响应
        setTimeout(() => {
          setIsTyping(true);
          
          setTimeout(() => {
            setIsTyping(false);
            
            const aiResponse = {
              id: Date.now() + 1,
              text: generateResponse(userMessage.text),
              isUser: false,
              timestamp: new Date(),
            };
            
            setMessages(prev => [...prev, aiResponse]);
            setIsSending(false);
          }, 1500);
        }, 500);
      }
    } catch (error) {
      console.error('发送消息失败:', error);
      
      // 出错时使用本地模拟响应
      setTimeout(() => {
        setIsTyping(false);
        
        const aiResponse = {
          id: Date.now() + 1,
          text: generateResponse(userMessage.text),
          isUser: false,
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, aiResponse]);
        setIsSending(false);
      }, 1000);
    }
  };
  
  // 处理点赞/踩操作
  const handleFeedback = async (messageId, isPositive) => {
    // 更新本地状态
    setFeedbackStatus(prev => ({
      ...prev,
      [messageId]: isPositive ? 'positive' : 'negative'
    }));
    
    try {
      // 调用后端API记录反馈
      await fetch(`http://localhost:8000/api/ai-assistant/messages/${messageId}/feedback/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_positive: isPositive,
        }),
      });
    } catch (error) {
      console.error('提交反馈失败:', error);
    }
  };
  
  // 处理输入变化
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  
  // 处理按键事件
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isSending) sendMessage();
    }
  };
  
  // 使用提示
  const usePrompt = (promptText) => {
    setInputText(promptText);
    textInputRef.current.focus();
  };
  
  // 复制消息
  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
    // 可以添加一个复制成功的提示
  };
  
  // 格式化时间
  const formatTime = (date) => {
    return date.toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };
  
  // 模拟生成响应（实际应用中应调用AI API）
  const generateResponse = (input) => {
    const responses = [
      "我理解你的问题，让我来帮你解答。根据我的分析，这个问题的关键在于...",
      "这是一个很好的问题！从专业角度来看，我建议你考虑以下几点...",
      "根据最新的研究和数据，我可以告诉你...",
      "让我为你分析一下这个情况。首先，我们需要考虑...",
      "这个问题有几个不同的角度可以思考。一方面...",
      "我可以提供一些相关的信息和建议。首先...",
      "这是一个很有深度的问题。从历史发展来看...",
      "我认为解决这个问题的关键是找到平衡点。具体来说...",
      "根据我的理解，这个问题的核心在于...",
      "这个问题涉及多个方面，让我们逐一分析..."
    ];
    
    // 根据输入内容生成更有针对性的响应
    if (input.includes('笔记') || input.includes('记录')) {
      return "关于笔记和记录，我建议你可以尝试零屿笔记的多种功能，比如语音转文字、手写识别或者AI辅助写作，这些都能帮助你更高效地记录和整理信息。";
    } else if (input.includes('学习') || input.includes('知识')) {
      return "对于学习和知识管理，我推荐你使用零屿笔记的知识图谱功能，它可以帮助你建立知识间的联系，形成网状结构，便于回顾和强化记忆。同时，定期使用AI助手来提问和讨论也能加深理解。";
    } else if (input.includes('效率') || input.includes('提高')) {
      return "提高效率的关键是建立一个适合自己的工作流。零屿笔记提供了多种工具如快捷键、模板、AI辅助等功能，你可以根据自己的需求组合使用。此外，定期整理和回顾笔记也是提高效率的重要环节。";
    } else if (input.includes('创意') || input.includes('灵感')) {
      return "捕捉创意和灵感，我建议你随时使用零屿笔记的快速记录功能，可以是文字、语音或图片。之后再利用AI助手帮你扩展和完善这些想法，形成更系统的创意库。定期回顾这些灵感，往往能激发出新的创意火花。";
    } else if (input.includes('写作') || input.includes('文章')) {
      return "关于写作，零屿笔记的AI助手可以帮助你进行头脑风暴、提供写作建议、优化文章结构和润色语言表达。你也可以使用知识图谱功能来组织你的写作素材，形成更有逻辑性的内容框架。";
    } else if (input.includes('合作') || input.includes('团队')) {
      return "团队协作方面，零屿笔记支持笔记共享和协同编辑，你可以邀请团队成员一起编辑和评论笔记。结合版本历史功能，可以清晰地追踪每个人的贡献和笔记的演变过程。";
    } else if (input.includes('隐私') || input.includes('安全')) {
      return "关于隐私和安全，零屿笔记采用了端到端加密技术，确保你的笔记内容只有你自己能够访问。同时，我们提供了多因素认证和定期备份功能，进一步保障你的数据安全。";
    }
    
    // 如果没有特定匹配，随机返回一个通用响应
    return responses[Math.floor(Math.random() * responses.length)] + 
      "\n\n如果你有更具体的问题或需求，请告诉我，我会提供更有针对性的帮助。";
  };
  
  // 渲染组件
  return (
    <Container>
      <ChatHeader>
        <AssistantInfo>
          <AssistantIcon>
            <FaRobot />
          </AssistantIcon>
          <AssistantDetails>
            <AssistantName>零屿AI助手</AssistantName>
            <AssistantStatus>
              {isTyping ? (
                <>
                  <span>正在输入</span>
                  <TypingIndicator>
                    <span></span>
                    <span></span>
                    <span></span>
                  </TypingIndicator>
                </>
              ) : (
                <span>在线</span>
              )}
            </AssistantStatus>
          </AssistantDetails>
        </AssistantInfo>
      </ChatHeader>
      
      <ChatContent ref={chatContentRef}>
        {messages.length === 0 ? (
          <div style={{ textAlign: 'center', margin: 'auto', color: 'var(--text-secondary)' }}>
            <FaRobot style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)', opacity: 0.7 }} />
            <p>你好！我是零屿AI助手，有什么可以帮助你的吗？</p>
            <SuggestionChips>
              {examplePrompts.map((prompt, index) => (
                <SuggestionChip key={index} onClick={() => usePrompt(prompt.text)}>
                  {prompt.icon}
                  {prompt.text}
                </SuggestionChip>
              ))}
            </SuggestionChips>
          </div>
        ) : (
          messages.map(message => (
            <MessageContainer key={message.id} isUser={message.isUser}>
              <Avatar isUser={message.isUser}>
                {message.isUser ? <FaUser /> : <FaRobot />}
              </Avatar>
              <div>
                <MessageBubble isUser={message.isUser}>
                  <MessageText>{message.text}</MessageText>
                </MessageBubble>
                <MessageTime isUser={message.isUser}>
                  {formatTime(message.timestamp)}
                </MessageTime>
                <MessageActions isUser={message.isUser}>
                  <ActionButton onClick={() => copyMessage(message.text)}>
                    <FaRegCopy />
                  </ActionButton>
                  
                  {!message.isUser && (
                    <>
                      <ActionButton 
                        onClick={() => handleFeedback(message.id, true)}
                        style={{ color: feedbackStatus[message.id] === 'positive' ? 'var(--success-main)' : 'inherit' }}
                      >
                        <FaRegThumbsUp />
                      </ActionButton>
                      <ActionButton 
                        onClick={() => handleFeedback(message.id, false)}
                        style={{ color: feedbackStatus[message.id] === 'negative' ? 'var(--error-main)' : 'inherit' }}
                      >
                        <FaRegThumbsDown />
                      </ActionButton>
                    </>
                  )}
                </MessageActions>
              </div>
            </MessageContainer>
          ))
        )}
        
        {isTyping && (
          <MessageContainer isUser={false}>
            <Avatar isUser={false}>
              <FaRobot />
            </Avatar>
            <MessageBubble isUser={false}>
              <TypingIndicator>
                <span></span>
                <span></span>
                <span></span>
              </TypingIndicator>
            </MessageBubble>
          </MessageContainer>
        )}
      </ChatContent>
      
      <InputArea>
        <InputContainer>
          <TextInput
            ref={textInputRef}
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="输入消息..." 
            rows={1}
          />
          <InputButton>
            <FaMicrophone />
          </InputButton>
          <InputButton>
            <FaImage />
          </InputButton>
          <InputButton primary disabled={isSending || !inputText.trim()} onClick={sendMessage}>
            {isSending ? <LoadingSpinner /> : <FaPaperPlane />}
          </InputButton>
        </InputContainer>
      </InputArea>
    </Container>
  );
};