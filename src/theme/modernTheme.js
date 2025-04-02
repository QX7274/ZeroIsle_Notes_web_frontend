/**
 * 零屿笔记 - 现代主题配置
 * 提供更丰富的颜色、动画和UI元素样式
 */

// 品牌色彩系统 - 使用渐变色增强视觉效果
const brandColors = {
  // 主色调 - 蓝色系列
  primary: {
    light: '#6AB7FF',
    main: '#4A6FFF',
    dark: '#3451B2',
    gradient: 'linear-gradient(135deg, #4A6FFF 0%, #6AB7FF 100%)',
  },
  // 次要色调 - 紫色系列
  secondary: {
    light: '#8C7AE6',
    main: '#6C5CE7',
    dark: '#5641E5',
    gradient: 'linear-gradient(135deg, #6C5CE7 0%, #8C7AE6 100%)',
  },
  // 强调色 - 青色系列
  accent: {
    light: '#18DCFF',
    main: '#00D2D3',
    dark: '#01A3A4',
    gradient: 'linear-gradient(135deg, #00D2D3 0%, #18DCFF 100%)',
  },
  // 成功色 - 绿色系列
  success: {
    light: '#7BED9F',
    main: '#2ECC71',
    dark: '#27AE60',
    gradient: 'linear-gradient(135deg, #2ECC71 0%, #7BED9F 100%)',
  },
  // 警告色 - 橙色系列
  warning: {
    light: '#FFBE76',
    main: '#F39C12',
    dark: '#E67E22',
    gradient: 'linear-gradient(135deg, #F39C12 0%, #FFBE76 100%)',
  },
  // 错误色 - 红色系列
  error: {
    light: '#FF7675',
    main: '#E74C3C',
    dark: '#C0392B',
    gradient: 'linear-gradient(135deg, #E74C3C 0%, #FF7675 100%)',
  },
  // 信息色 - 浅蓝色系列
  info: {
    light: '#74B9FF',
    main: '#3498DB',
    dark: '#2980B9',
    gradient: 'linear-gradient(135deg, #3498DB 0%, #74B9FF 100%)',
  },
};

// 中性色系统 - 提供更丰富的灰度层次
const neutralColors = {
  black: '#000000',
  darkest: '#121212',
  darker: '#1E1E1E',
  dark: '#2D3436',
  mediumDark: '#636E72',
  medium: '#B2BEC3',
  mediumLight: '#DFE6E9',
  light: '#F1F2F6',
  lighter: '#F5F6FA',
  lightest: '#FDFDFD',
  white: '#FFFFFF',
};

// 功能色系统 - 为不同UI元素提供专门的颜色
const functionalColors = {
  // 背景色系列
  background: {
    default: neutralColors.white,
    paper: neutralColors.lightest,
    alt: neutralColors.lighter,
    dark: neutralColors.darkest,
  },
  // 文本色系列
  text: {
    primary: neutralColors.dark,
    secondary: neutralColors.mediumDark,
    disabled: neutralColors.medium,
    hint: neutralColors.mediumDark,
    light: neutralColors.white,
  },
  // 边框和分隔线
  border: {
    light: neutralColors.mediumLight,
    main: neutralColors.medium,
    dark: neutralColors.mediumDark,
  },
  // 阴影系统
  shadow: {
    light: '0 2px 8px rgba(0, 0, 0, 0.05)',
    main: '0 4px 16px rgba(0, 0, 0, 0.1)',
    dark: '0 8px 24px rgba(0, 0, 0, 0.15)',
    intense: '0 12px 32px rgba(0, 0, 0, 0.2)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  },
};

// AI功能相关颜色
const aiColors = {
  assistant: '#9B59B6',
  knowledgeGraph: '#3498DB',
  speechToText: '#1ABC9C',
  handwritingOcr: '#E67E22',
  translation: '#F1C40F',
};

// 字体系统
const typography = {
  fontFamily: {
    base: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
    heading: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
    monospace: '"Cascadia Code", "Source Code Pro", monospace',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    xxl: '1.5rem',    // 24px
    h3: '1.75rem',    // 28px
    h2: '2rem',       // 32px
    h1: '2.5rem',     // 40px
    display: '3rem',  // 48px
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
};

// 间距系统
const spacing = {
  xxs: '0.25rem',  // 4px
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  xxl: '3rem',     // 48px
  xxxl: '4rem',    // 64px
};

// 圆角系统
const borderRadius = {
  none: '0',
  xs: '0.125rem',  // 2px
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  xxl: '1.5rem',   // 24px
  full: '9999px',  // 圆形
};

// 动画系统
const animation = {
  transition: {
    fast: 'all 0.2s ease',
    normal: 'all 0.3s ease',
    slow: 'all 0.5s ease',
    bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },
  keyframes: {
    fadeIn: `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,
    slideUp: `
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `,
    pulse: `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `,
    spin: `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `,
  },
  duration: {
    fast: '0.3s',
    normal: '0.5s',
    slow: '0.8s',
  },
};

// 导出主题对象
const modernTheme = {
  brandColors,
  neutralColors,
  functionalColors,
  aiColors,
  typography,
  spacing,
  borderRadius,
  animation,
};

export default modernTheme;