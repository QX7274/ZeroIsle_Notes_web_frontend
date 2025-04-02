/**
 * 零屿笔记 - 知识图谱组件
 * 提供交互式知识图谱可视化，支持节点拖拽、缩放和关系展示
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus, FaExpand, FaCompress, FaDownload, FaSearch, FaFilter } from 'react-icons/fa';
import Paper from '../ui/Paper';

// 容器样式
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 600px;
`;

// 工具栏
const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  background-color: var(--background-paper);
  border-bottom: 1px solid var(--border-light);
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
`;

// 工具栏组
const ToolGroup = styled.div`
  display: flex;
  gap: var(--spacing-xs);
`;

// 工具按钮
const ToolButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: none;
  background-color: var(--background-alt);
  color: var(--text-primary);
  cursor: pointer;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--primary-light);
    color: var(--primary-dark);
  }
  
  &.active {
    background-color: var(--primary-main);
    color: var(--white);
  }
`;

// 搜索框
const SearchInput = styled.input`
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-main);
  font-size: 0.9rem;
  width: 200px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-main);
    box-shadow: 0 0 0 2px rgba(74, 111, 255, 0.2);
  }
`;

// 图谱容器
const GraphContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: var(--background-alt);
  overflow: hidden;
  border-bottom-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
`;

// 图谱画布
const GraphCanvas = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: center;
  transition: transform 0.3s ease;
`;

// 节点样式
const Node = styled.div`
  position: absolute;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-full);
  background: ${props => {
    switch(props.nodeType) {
      case 'concept': return 'var(--primary-gradient)';
      case 'entity': return 'var(--secondary-gradient)';
      case 'event': return 'var(--warning-gradient)';
      case 'process': return 'var(--info-gradient)';
      case 'attribute': return 'var(--success-gradient)';
      default: return 'var(--primary-gradient)';
    }
  }};
  color: var(--white);
  font-weight: 500;
  box-shadow: var(--shadow-main);
  cursor: grab;
  user-select: none;
  z-index: 10;
  min-width: 100px;
  text-align: center;
  
  &:active {
    cursor: grabbing;
  }
  
  &.selected {
    box-shadow: 0 0 0 3px var(--primary-main), var(--shadow-main);
  }
`;

// 关系线
const Relationship = styled.div`
  position: absolute;
  height: 2px;
  background-color: var(--medium);
  transform-origin: left center;
  z-index: 5;
  
  &::after {
    content: '';
    position: absolute;
    right: -6px;
    top: -4px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid var(--medium);
  }
  
  &.highlighted {
    background-color: var(--primary-main);
    
    &::after {
      border-left-color: var(--primary-main);
    }
  }
`;

// 关系标签
const RelationshipLabel = styled.div`
  position: absolute;
  background-color: var(--background-paper);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  white-space: nowrap;
  z-index: 6;
  transform: translate(-50%, -50%);
  box-shadow: var(--shadow-light);
`;

// 详情面板
const DetailsPanel = styled(Paper)`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  width: 300px;
  max-height: calc(100% - var(--spacing-md) * 2);
  overflow-y: auto;
  z-index: 20;
  padding: var(--spacing-md);
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(110%)'};
  transition: transform 0.3s ease;
`;

// 详情标题
const DetailsTitle = styled.h3`
  margin: 0 0 var(--spacing-sm) 0;
  font-size: 1.2rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 详情内容
const DetailsContent = styled.div`
  font-size: 0.9rem;
`;

// 详情项
const DetailsItem = styled.div`
  margin-bottom: var(--spacing-sm);
`;

// 详情标签
const DetailsLabel = styled.div`
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xxs);
`;

// 详情值
const DetailsValue = styled.div`
  color: var(--text-primary);
`;

// 节点类型徽章
const NodeTypeBadge = styled.span`
  display: inline-block;
  padding: var(--spacing-xxs) var(--spacing-xs);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  
  background-color: ${props => {
    switch(props.nodeType) {
      case 'concept': return 'var(--primary-light)';
      case 'entity': return 'var(--secondary-light)';
      case 'event': return 'var(--warning-light)';
      case 'process': return 'var(--info-light)';
      case 'attribute': return 'var(--success-light)';
      default: return 'var(--primary-light)';
    }
  }};
  
  color: ${props => {
    switch(props.nodeType) {
      case 'concept': return 'var(--primary-dark)';
      case 'entity': return 'var(--secondary-dark)';
      case 'event': return 'var(--warning-dark)';
      case 'process': return 'var(--info-dark)';
      case 'attribute': return 'var(--success-dark)';
      default: return 'var(--primary-dark)';
    }
  }};
`;

// 关系类型映射
const relationshipTypeMap = {
  'contains': '包含',
  'is_part_of': '属于',
  'causes': '导致',
  'results_in': '产生',
  'depends_on': '依赖于',
  'similar_to': '相似于',
  'opposes': '对立于',
  'defines': '定义',
  'uses': '使用',
  'influences': '影响'
};

// 节点类型映射
const nodeTypeMap = {
  'concept': '概念',
  'entity': '实体',
  'event': '事件',
  'process': '过程',
  'attribute': '属性'
};

// 示例数据
const sampleData = {
  nodes: [
    {
      id: '1',
      label: '人工智能',
      nodeType: 'concept',
      properties: {
        definition: '计算机科学的一个分支，致力于创造能够模拟人类智能的系统',
        importance: 'high',
        domain: '计算机科学',
        examples: 'GPT-4, 自动驾驶汽车, 智能助手'
      },
      x: 400,
      y: 200
    },
    {
      id: '2',
      label: '机器学习',
      nodeType: 'concept',
      properties: {
        definition: 'AI的一个子领域，专注于让计算机系统从数据中学习',
        importance: 'high',
        domain: '人工智能',
        examples: '神经网络, 决策树, 支持向量机'
      },
      x: 600,
      y: 300
    },
    {
      id: '3',
      label: '深度学习',
      nodeType: 'concept',
      properties: {
        definition: '机器学习的一个分支，使用多层神经网络处理复杂数据',
        importance: 'high',
        domain: '机器学习',
        examples: 'CNN, RNN, Transformer'
      },
      x: 700,
      y: 400
    },
    {
      id: '4',
      label: '神经网络',
      nodeType: 'process',
      properties: {
        definition: '受人脑结构启发的计算模型，由多层神经元组成',
        importance: 'medium',
        domain: '深度学习',
        examples: '前馈神经网络, 卷积神经网络'
      },
      x: 800,
      y: 500
    },
    {
      id: '5',
      label: '大语言模型',
      nodeType: 'entity',
      properties: {
        definition: '能够理解和生成人类语言的AI模型',
        importance: 'high',
        domain: '自然语言处理',
        examples: 'GPT-4, LLaMA, Claude'
      },
      x: 500,
      y: 400
    },
    {
      id: '6',
      label: '自然语言处理',
      nodeType: 'concept',
      properties: {
        definition: 'AI的一个分支，专注于让计算机理解和处理人类语言',
        importance: 'high',
        domain: '人工智能',
        examples: '机器翻译, 情感分析, 文本摘要'
      },
      x: 300,
      y: 350
    },
    {
      id: '7',
      label: '计算机视觉',
      nodeType: 'concept',
      properties: {
        definition: 'AI的一个分支，专注于让计算机理解和处理图像和视频',
        importance: 'medium',
        domain: '人工智能',
        examples: '图像识别, 物体检测, 人脸识别'
      },
      x: 250,
      y: 150
    }
  ],
  relationships: [
    {
      source: '1',
      target: '2',
      label: 'contains',
      properties: {
        strength: 'strong',
        bidirectional: false,
        context: '人工智能包含机器学习作为其主要分支'
      }
    },
    {
      source: '2',
      target: '3',
      label: 'contains',
      properties: {
        strength: 'strong',
        bidirectional: false,
        context: '机器学习包含深度学习作为其主要分支'
      }
    },
    {
      source: '3',
      target: '4',
      label: 'uses',
      properties: {
        strength: 'strong',
        bidirectional: false,
        context: '深度学习使用神经网络作为其核心技术'
      }
    },
    {
      source: '6',
      target: '5',
      label: 'results_in',
      properties: {
        strength: 'medium',
        bidirectional: false,
        context: '自然语言处理研究产生了大语言模型'
      }
    },
    {
      source: '1',
      target: '6',
      label: 'contains',
      properties: {
        strength: 'strong',
        bidirectional: false,
        context: '人工智能包含自然语言处理作为其主要分支'
      }
    },
    {
      source: '1',
      target: '7',
      label: 'contains',
      properties: {
        strength: 'strong',
        bidirectional: false,
        context: '人工智能包含计算机视觉作为其主要分支'
      }
    },
    {
      source: '5',
      target: '3',
      label: 'depends_on',
      properties: {
        strength: 'strong',
        bidirectional: false,
        context: '大语言模型依赖于深度学习技术'
      }
    }
  ]
};

// 知识图谱组件
const KnowledgeGraph = ({ data = sampleData }) => {
  const [nodes, setNodes] = useState(data.nodes);
  const [relationships, setRelationships] = useState(data.relationships);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedRelationship, setSelectedRelationship] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [searchTerm, setSearchTerm] = useState('');
  
  const canvasRef = useRef(null);
  
  // 处理节点拖拽
  const handleNodeMouseDown = (e, nodeId) => {
    e.stopPropagation();
    
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;
    
    setSelectedNode(node);
    setShowDetails(true);
    
    const startX = e.clientX;
    const startY = e.clientY;
    const nodeX = node.x;
    const nodeY = node.y;
    
    const handleMouseMove = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      
      setNodes(prevNodes => prevNodes.map(n => {
        if (n.id === nodeId) {
          return { ...n, x: nodeX + dx, y: nodeY + dy };
        }
        return n;
      }));
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  // 处理画布拖拽
  const handleCanvasMouseDown = (e) => {
    if (e.target !== canvasRef.current) return;
    
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };
  
  const handleCanvasMouseMove = (e) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };
  
  const handleCanvasMouseUp = () => {
    setIsDragging(false);
  };
  
  // 缩放控制
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 2));
  };
  
  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };
  
  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };
  
  // 计算关系线的位置和角度
  const calculateRelationshipPosition = (source, target) => {
    const sourceNode = nodes.find(n => n.id === source);
    const targetNode = nodes.find(n => n.id === target);
    
    if (!sourceNode || !targetNode) return null;
    
    const dx = targetNode.x - sourceNode.x;
    const dy = targetNode.y - sourceNode.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    return {
      left: sourceNode.x,
      top: sourceNode.y,
      width: distance,
      transform: `rotate(${angle}deg)`
    };
  };
  
  // 计算关系标签的位置
  const calculateLabelPosition = (source, target) => {
    const sourceNode = nodes.find(n => n.id === source);
    const targetNode = nodes.find(n => n.id === target);
    
    if (!sourceNode || !targetNode) return null;
    
    return {
      left: (sourceNode.x + targetNode.x) / 2,
      top: (sourceNode.y + targetNode.y) / 2
    };
  };
  
  // 处理关系点击
  const handleRelationshipClick = (relationship) => {
    setSelectedRelationship(relationship);
    setSelectedNode(null);
    setShowDetails(true);
  };
  
  // 关闭详情面板
  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedNode(null);
    setSelectedRelationship(null);
  };
  
  // 搜索节点
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // 过滤节点
  const filteredNodes = searchTerm
    ? nodes.filter(node => 
        node.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (node.properties.definition && node.properties.definition.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : nodes;
  
  // 导出图谱为图片
  const handleExportImage = () => {
    // 实际应用中应使用html2canvas或类似库
    alert('导出图片功能将在实际应用中实现');
  };
  
  return (
    <Container>
      <Toolbar>
        <ToolGroup>
          <ToolButton onClick={handleZoomIn} title="放大">
            <FaPlus />
          </ToolButton>
          <ToolButton onClick={handleZoomOut} title="缩小">
            <FaMinus />
          </ToolButton>
          <ToolButton onClick={handleResetZoom} title="重置视图">
            <FaExpand />
          </ToolButton>
        </ToolGroup>
        
        <SearchInput 
          placeholder="搜索节点..."
          value={searchTerm}
          onChange={handleSearch}
        />
        
        <ToolGroup>
          <ToolButton onClick={handleExportImage} title="导出图片">
            <FaDownload />
          </ToolButton>
        </ToolGroup>
      </Toolbar>
      
      <GraphContainer>
        <GraphCanvas 
          ref={canvasRef}
          style={{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          onMouseLeave={handleCanvasMouseUp}
        >
          {/* 渲染关系线 */}
          {relationships.map((rel, index) => {
            const position = calculateRelationshipPosition(rel.source, rel.target);
            const labelPosition = calculateLabelPosition(rel.source, rel.target);
            
            if (!position || !labelPosition) return null;
            
            const isHighlighted = selectedNode && 
              (selectedNode.id === rel.source || selectedNode.id === rel.target);
            
            return (
              <React.Fragment key={`rel-${index}`}>
                <Relationship 
                  style={{
                    left: `${position.left}px`,
                    top: `${position.top}px`,
                    width: `${position.width}px`,
                    transform: position.transform
                  }}
                  className={isHighlighted ? 'highlighted' : ''}
                  onClick={() => handleRelationshipClick(rel)}
                />
                <RelationshipLabel
                  style={{
                    left: `${labelPosition.left}px`,
                    top: `${labelPosition.top}px`
                  }}
                >
                  {relationshipTypeMap[rel.label] || rel.label}
                </RelationshipLabel>
              </React.Fragment>
            );
          })}
          
          {/* 渲染节点 */}
          {filteredNodes.map(node => (
            <Node
              key={node.id}
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`
              }}
              nodeType={node.nodeType}
              className={selectedNode && selectedNode.id === node.id ? 'selected' : ''}
              onMouseDown={(e) => handleNodeMouseDown(e, node.id)}
            >
              {node.label}
            </Node>
          ))}
        </GraphCanvas>
        
        {/* 详情面板 */}
        <DetailsPanel elevation={3} isVisible={showDetails}>
          {selectedNode && (
            <>
              <DetailsTitle>
                {selectedNode.label}
                <ToolButton onClick={handleCloseDetails}>
                  ×
                </ToolButton>
              </DetailsTitle>
              
              <DetailsContent>
                <NodeTypeBadge nodeType={selectedNode.nodeType}>
                  {nodeTypeMap[selectedNode.nodeType] || selectedNode.nodeType}
                </NodeTypeBadge>
                
                {selectedNode.properties && Object.entries(selectedNode.properties).map(([key, value]) => (
                  <DetailsItem key={key}>
                    <DetailsLabel>
                      {key === 'definition' ? '定义' :
                       key === 'importance' ? '重要性' :
                       key === 'domain' ? '领域' :
                       key === 'examples' ? '示例' : key}
                    </DetailsLabel>
                    <DetailsValue>
                      {key === 'importance' ? 
                        (value === 'high' ? '高' : 
                         value === 'medium' ? '中' : 
                         value === 'low' ? '低' : value) : 
                        value}
                    </DetailsValue>
                  </DetailsItem>
                ))}
                
                <DetailsItem>
                  <DetailsLabel>相关节点</DetailsLabel>
                  <DetailsValue>
                    {relationships
                      .filter(rel => rel.source === selectedNode.id || rel.target === selectedNode.id)
                      .map((rel, index) => {
                        const relatedNodeId = rel.source === selectedNode.id ? rel.target : rel.source;
                        const relatedNode = nodes.find(n => n.id === relatedNodeId);
                        const relationType = rel.source === selectedNode.id ? 
                          relationshipTypeMap[rel.label] || rel.label : 
                          `被${relationshipTypeMap[rel.label] || rel.label}`;
                        
                        return relatedNode ? (
                          <div key={index} style={{ marginBottom: 'var(--spacing-xxs)' }}>
                            {relationType}: {relatedNode.label}
                          </div>
                        ) : null;
                      })}
                  </DetailsValue>
                </DetailsItem>
              </DetailsContent>
            </>
          )}
          
          {selectedRelationship && !selectedNode && (
            <>
              <DetailsTitle>
                关系详情
                <ToolButton onClick={handleCloseDetails}>
                  ×
                </ToolButton>
              </DetailsTitle>
              
              <DetailsContent>
                <DetailsItem>
                  <DetailsLabel>关系类型</DetailsLabel>
                  <DetailsValue>
                    {relationshipTypeMap[selectedRelationship.label] || selectedRelationship.label}
                  </DetailsValue>
                </DetailsItem>
                
                <DetailsItem>
                  <DetailsLabel>源节点</DetailsLabel>
                  <DetailsValue>
                    {nodes.find(n => n.id === selectedRelationship.source)?.label}
                  </DetailsValue>
                </DetailsItem>
                
                <DetailsItem>
                  <DetailsLabel>目标节点</DetailsLabel>
                  <DetailsValue>
                    {nodes.find(n => n.id === selectedRelationship.target)?.label}
                  </DetailsValue>
                </DetailsItem>
                
                {selectedRelationship.properties && Object.entries(selectedRelationship.properties).map(([key, value]) => (
                  <DetailsItem key={key}>
                    <DetailsLabel>
                      {key === 'strength' ? '关系强度' :
                       key === 'bidirectional' ? '是否双向' :
                       key === 'context' ? '上下文' : key}
                    </DetailsLabel>
                    <DetailsValue>
                      {key === 'strength' ? 
                        (value === 'strong' ? '强' : 
                         value === 'medium' ? '中' : 
                         value === 'weak' ? '弱' : value) : 
                       key === 'bidirectional' ?
                        (value ? '是' : '否') :
                        value}
                    </DetailsValue>
                  </DetailsItem>
                ))}
              </DetailsContent>
            </>
          )}
        </DetailsPanel>
      </GraphContainer>
    </Container>
  );
};

export default KnowledgeGraph;