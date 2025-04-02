/**
 * 零屿笔记 - 语音转文字组件
 * 提供现代化的语音识别界面，支持实时转写和多语言识别
 */

import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMicrophone, FaStop, FaSpinner, FaVolumeUp, FaCopy, FaDownload, FaTrash } from 'react-icons/fa';
import Paper from '../ui/Paper';

// 波纹动画
const ripple = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

// 脉冲动画
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// 旋转动画
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 容器样式
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

// 语音识别控制面板
const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-main) 100%);
  border-radius: var(--radius-lg);
  color: var(--white);
  position: relative;
  overflow: hidden;
`;

// 麦克风按钮容器
const MicButtonContainer = styled.div`
  position: relative;
  margin: var(--spacing-lg) 0;
`;

// 麦克风按钮
const MicButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.isRecording ? 'var(--error-main)' : 'var(--white)'};
  color: ${props => props.isRecording ? 'var(--white)' : 'var(--primary-main)'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: var(--shadow-main);
  transition: var(--transition-normal);
  z-index: 2;
  animation: ${props => props.isRecording ? pulse : 'none'} 1.5s infinite;
  
  &:hover {
    transform: ${props => props.isRecording ? 'none' : 'scale(1.05)'};
  }
  
  &:disabled {
    background-color: var(--medium-light);
    color: var(--medium);
    cursor: not-allowed;
    animation: none;
  }
`;

// 波纹效果
const Ripple = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  animation: ${ripple} 1.5s infinite;
  z-index: 1;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`;

// 状态文本
const StatusText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin: var(--spacing-md) 0;
`;

// 录音时间
const RecordingTime = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
`;

// 语言选择器
const LanguageSelector = styled.select`
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--white);
  font-size: 0.9rem;
  margin-top: var(--spacing-md);
  
  option {
    background-color: var(--primary-main);
    color: var(--white);
  }
`;

// 转写结果容器
const TranscriptionContainer = styled(Paper)`
  margin-top: var(--spacing-lg);
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
`;

// 转写结果标题
const TranscriptionTitle = styled.h3`
  margin: 0 0 var(--spacing-md) 0;
  font-size: 1.2rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 转写结果文本
const TranscriptionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-primary);
  white-space: pre-wrap;
`;

// 操作按钮容器
const ActionButtons = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
`;

// 操作按钮
const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  border: none;
  background-color: ${props => props.variant === 'primary' ? 'var(--primary-main)' : 
    props.variant === 'danger' ? 'var(--error-main)' : 'var(--background-alt)'};
  color: ${props => props.variant === 'primary' || props.variant === 'danger' ? 'var(--white)' : 'var(--text-primary)'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: ${props => props.variant === 'primary' ? 'var(--primary-dark)' : 
    props.variant === 'danger' ? 'var(--error-dark)' : 'var(--medium-light)'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// 加载中指示器
const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`;

// 语音转文字组件
const SpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [transcription, setTranscription] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('auto');
  const [status, setStatus] = useState('idle'); // idle, recording, processing, done, error
  const [error, setError] = useState(null);
  
  const timerRef = useRef(null);
  const audioRef = useRef(null);
  
  // 格式化录音时间
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // 开始录音
  const startRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
    setStatus('recording');
    setError(null);
    setRecordingTime(0);
    
    // 启动计时器
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    
    // 这里应该调用实际的录音API
    // 在实际应用中，这里会使用Web Audio API或其他录音库
    console.log('开始录音...');
  };
  
  // 停止录音
  const stopRecording = () => {
    setIsRecording(false);
    setStatus('processing');
    setIsProcessing(true);
    
    // 清除计时器
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    // 模拟处理延迟
    setTimeout(() => {
      // 模拟获取转写结果
      const mockResult = selectedLanguage === 'zh' ? 
        "这是一个中文语音识别的示例结果。零屿笔记的语音转文字功能可以识别多种语言并提供准确的转写。它支持实时转写和长音频处理，让您的笔记记录更加高效。" : 
        "This is a sample transcription result in English. The speech-to-text feature in ZeroIsle Notes can recognize multiple languages and provide accurate transcriptions. It supports real-time transcription and long audio processing, making your note-taking more efficient.";
      
      setTranscription(mockResult);
      setStatus('done');
      setIsProcessing(false);
    }, 2000);
  };
  
  // 暂停录音
  const pauseRecording = () => {
    setIsPaused(true);
    // 实际应用中暂停录音的逻辑
  };
  
  // 恢复录音
  const resumeRecording = () => {
    setIsPaused(false);
    // 实际应用中恢复录音的逻辑
  };
  
  // 复制转写文本
  const copyTranscription = () => {
    navigator.clipboard.writeText(transcription)
      .then(() => {
        alert('文本已复制到剪贴板');
      })
      .catch(err => {
        console.error('复制失败:', err);
      });
  };
  
  // 下载转写文本
  const downloadTranscription = () => {
    const element = document.createElement('a');
    const file = new Blob([transcription], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `transcription_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  // 清除转写文本
  const clearTranscription = () => {
    setTranscription('');
  };
  
  // 播放转写音频
  const playAudio = () => {
    // 实际应用中播放录制的音频
    console.log('播放音频...');
  };
  
  // 组件卸载时清理
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <ControlPanel>
        <StatusText>
          {status === 'idle' && '点击麦克风按钮开始录音'}
          {status === 'recording' && '正在录音...'}
          {status === 'processing' && '正在处理...'}
          {status === 'done' && '转写完成'}
          {status === 'error' && `错误: ${error}`}
        </StatusText>
        
        {isRecording && (
          <RecordingTime>{formatTime(recordingTime)}</RecordingTime>
        )}
        
        <MicButtonContainer>
          {isRecording && (
            <>
              <Ripple />
              <Ripple />
              <Ripple />
            </>
          )}
          
          <MicButton 
            isRecording={isRecording} 
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isProcessing}
          >
            {isRecording ? <FaStop /> : <FaMicrophone />}
          </MicButton>
        </MicButtonContainer>
        
        <LanguageSelector 
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          disabled={isRecording || isProcessing}
        >
          <option value="auto">自动检测语言</option>
          <option value="zh">中文</option>
          <option value="en">英文</option>
          <option value="ja">日语</option>
          <option value="ko">韩语</option>
          <option value="fr">法语</option>
          <option value="de">德语</option>
          <option value="es">西班牙语</option>
          <option value="ru">俄语</option>
        </LanguageSelector>
      </ControlPanel>
      
      <TranscriptionContainer elevation={2}>
        <TranscriptionTitle>
          转写结果
          {isProcessing && <Spinner />}
        </TranscriptionTitle>
        
        {transcription ? (
          <>
            <TranscriptionText>{transcription}</TranscriptionText>
            
            <ActionButtons>
              <ActionButton onClick={copyTranscription}>
                <FaCopy /> 复制
              </ActionButton>
              <ActionButton onClick={downloadTranscription}>
                <FaDownload /> 下载
              </ActionButton>
              <ActionButton onClick={playAudio} disabled={!audioRef.current}>
                <FaVolumeUp /> 播放
              </ActionButton>
              <ActionButton variant="danger" onClick={clearTranscription}>
                <FaTrash /> 清除
              </ActionButton>
            </ActionButtons>
          </>
        ) : (
          <TranscriptionText>
            {isProcessing ? '正在处理您的语音...' : '转写结果将显示在这里...'}
          </TranscriptionText>
        )}
      </TranscriptionContainer>
    </Container>
  );
};

export default SpeechToText;