/**
 * 零屿笔记 - 手写OCR识别组件
 * 提供手写文字识别功能，支持图片上传和手写板
 */

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaUpload, FaEraser, FaPen, FaDownload, FaCopy, FaRedo, FaSpinner, FaImage } from 'react-icons/fa';
import Paper from '../ui/Paper';

// 容器样式
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  gap: var(--spacing-lg);
`;

// 标题
const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-primary);
  text-align: center;
`;

// 描述文本
const Description = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

// 主内容区域
const ContentArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// 左侧面板
const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// 右侧面板
const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// 工具栏
const Toolbar = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
`;

// 工具按钮
const ToolButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  border: none;
  background-color: ${props => props.active ? 'var(--primary-main)' : 'var(--background-alt)'};
  color: ${props => props.active ? 'var(--white)' : 'var(--text-primary)'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-dark)' : 'var(--medium-light)'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// 绘图区域容器
const DrawingAreaContainer = styled(Paper)`
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  position: relative;
  cursor: ${props => props.tool === 'pen' ? 'crosshair' : 'default'};
`;

// 绘图画布
const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

// 图片上传区域
const UploadArea = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  border: 2px dashed var(--border-main);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  cursor: pointer;
  transition: var(--transition-normal);
  background-color: var(--background-alt);
  
  &:hover {
    border-color: var(--primary-main);
    background-color: rgba(74, 111, 255, 0.05);
  }
`;

// 上传图标
const UploadIcon = styled(FaImage)`
  font-size: 3rem;
  color: var(--medium);
  margin-bottom: var(--spacing-md);
`;

// 上传文本
const UploadText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  text-align: center;
  margin: 0;
`;

// 上传提示
const UploadHint = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-align: center;
  margin-top: var(--spacing-sm);
`;

// 图片预览
const ImagePreview = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: var(--background-alt);
  }
`;

// 删除图片按钮
const DeleteImageButton = styled.button`
  position: absolute;
  top: var(--spacing-xs);
  right: var(--spacing-xs);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--error-main);
  color: var(--white);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--error-dark);
  }
`;

// 识别结果容器
const ResultContainer = styled(Paper)`
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
`;

// 识别结果标题
const ResultTitle = styled.h3`
  margin: 0 0 var(--spacing-md) 0;
  font-size: 1.2rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 识别结果文本
const ResultText = styled.p`
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

// 加载中指示器
const Spinner = styled(FaSpinner)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// 手写OCR组件
const HandwritingOCR = () => {
  const [activeTab, setActiveTab] = useState('draw'); // 'draw' or 'upload'
  const [tool, setTool] = useState('pen'); // 'pen' or 'eraser'
  const [isDrawing, setIsDrawing] = useState(false);
  const [image, setImage] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const fileInputRef = useRef(null);
  
  // 初始化画布
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    
    // 设置画布大小
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width * 2; // 提高分辨率
    canvas.height = height * 2;
    
    // 设置绘图样式
    context.scale(2, 2); // 缩放以匹配分辨率
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = 3;
    context.strokeStyle = '#000000';
    
    // 填充白色背景
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    contextRef.current = context;
  };
  
  // 开始绘制
  const startDrawing = ({ nativeEvent }) => {
    if (tool !== 'pen' && tool !== 'eraser') return;
    
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    
    // 设置绘制样式
    if (tool === 'pen') {
      contextRef.current.globalCompositeOperation = 'source-over';
      contextRef.current.strokeStyle = '#000000';
    } else {
      contextRef.current.globalCompositeOperation = 'destination-out';
      contextRef.current.strokeStyle = 'rgba(0,0,0,1)';
    }
  };
  
  // 绘制中
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  
  // 结束绘制
  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  
  // 清除画布
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
  
  // 处理图片上传
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // 检查文件类型
    if (!file.type.match('image.*')) {
      setError('请上传图片文件');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
      setError(null);
    };
    reader.readAsDataURL(file);
  };
  
  // 打开文件选择器
  const openFileSelector = () => {
    fileInputRef.current.click();
  };
  
  // 删除上传的图片
  const deleteImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  // 识别文字
  const recognizeText = () => {
    setIsProcessing(true);
    setError(null);
    
    // 获取图像数据
    let imageData;
    if (activeTab === 'draw') {
      imageData = canvasRef.current.toDataURL('image/png');
    } else {
      imageData = image;
    }
    
    if (!imageData) {
      setError('请先绘制或上传图片');
      setIsProcessing(false);
      return;
    }
    
    // 模拟API调用延迟
    setTimeout(() => {
      // 模拟识别结果
      const mockResult = "这是手写OCR识别的示例结果。\n\n零屿笔记的手写识别功能可以准确识别各种手写文字，支持中英文混合识别，让您的笔记数字化更加便捷。\n\n您可以通过手写板直接书写，也可以上传已有的手写图片进行识别。";
      
      setRecognizedText(mockResult);
      setIsProcessing(false);
    }, 2000);
    
    // 实际应用中，这里应该调用后端API
    // const formData = new FormData();
    // formData.append('image', imageData);
    // 
    // fetch('/api/ocr/recognize', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setRecognizedText(data.text);
    //   setIsProcessing(false);
    // })
    // .catch(error => {
    //   setError('识别失败，请重试');
    //   setIsProcessing(false);
    // });
  };
  
  // 复制识别文本
  const copyText = () => {
    navigator.clipboard.writeText(recognizedText)
      .then(() => {
        alert('文本已复制到剪贴板');
      })
      .catch(err => {
        console.error('复制失败:', err);
      });
  };
  
  // 下载识别文本
  const downloadText = () => {
    const element = document.createElement('a');
    const file = new Blob([recognizedText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `ocr_result_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  // 组件挂载后初始化画布
  React.useEffect(() => {
    if (activeTab === 'draw') {
      initCanvas();
    }
  }, [activeTab]);

  return (
    <Container>
      <div>
        <Title>手写文字识别</Title>
        <Description>
          通过AI技术识别手写文字，支持手写板直接书写或上传手写图片，快速将您的手写内容转换为数字文本。
        </Description>
      </div>
      
      <Toolbar>
        <ToolButton 
          active={activeTab === 'draw'} 
          onClick={() => setActiveTab('draw')}
        >
          <FaPen /> 手写板
        </ToolButton>
        <ToolButton 
          active={activeTab === 'upload'} 
          onClick={() => setActiveTab('upload')}
        >
          <FaUpload /> 上传图片
        </ToolButton>
      </Toolbar>
      
      <ContentArea>
        <LeftPanel>
          {activeTab === 'draw' && (
            <>
              <Toolbar>
                <ToolButton 
                  active={tool === 'pen'} 
                  onClick={() => setTool('pen')}
                >
                  <FaPen /> 画笔
                </ToolButton>
                <ToolButton 
                  active={tool === 'eraser'} 
                  onClick={() => setTool('eraser')}
                >
                  <FaEraser /> 橡皮擦
                </ToolButton>
                <ToolButton onClick={clearCanvas}>
                  清空
                </ToolButton>
              </Toolbar>
              
              <DrawingAreaContainer elevation={2} tool={tool}>
                <Canvas 
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                />
              </DrawingAreaContainer>
            </>
          )}
          
          {activeTab === 'upload' && (
            <>
              <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                accept="image/*" 
                onChange={handleImageUpload} 
              />
              
              {!image ? (
                <UploadArea onClick={openFileSelector}>
                  <UploadIcon />
                  <UploadText>点击上传手写图片</UploadText>
                  <UploadHint>支持JPG、PNG、GIF等常见图片格式</UploadHint>
                </UploadArea>
              ) : (
                <ImagePreview>
                  <img src={image} alt="预览" />
                  <DeleteImageButton onClick={deleteImage}>
                    ×
                  </DeleteImageButton>
                </ImagePreview>
              )}
            </>
          )}
          
          <ActionButtons>
            <ToolButton 
              variant="primary" 
              onClick={recognizeText} 
              disabled={isProcessing || (activeTab === 'upload' && !image)}
              style={{ marginTop: 'var(--spacing-md)' }}
            >
              {isProcessing ? <Spinner /> : '识别文字'}
            </ToolButton>
          </ActionButtons>
        </LeftPanel>
        
        <RightPanel>
          <ResultContainer elevation={2}>
            <ResultTitle>
              识别结果
              {isProcessing && <Spinner />}
            </ResultTitle>
            
            {error && (
              <ResultText style={{ color: 'var(--error-main)' }}>
                {error}
              </ResultText>
            )}
            
            {!error && (
              <>
                <ResultText>
                  {recognizedText || '识别结果将显示在这里...'}
                </ResultText>
                
                {recognizedText && (
                  <ActionButtons>
                    <ToolButton onClick={copyText}>
                      <FaCopy /> 复制
                    </ToolButton>
                    <ToolButton onClick={downloadText}>
                      <FaDownload /> 下载
                    </ToolButton>
                  </ActionButtons>
                )}
              </>
            )}
          </ResultContainer>
        </RightPanel>
      </ContentArea>
    </Container>
  );
};

export default HandwritingOCR;