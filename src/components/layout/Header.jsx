import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes, FaStickyNote, FaUser, FaMoon, FaSun, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { useAuth } from '../../services/auth';
import { useTheme } from '../../theme/themeContext';

const HeaderContainer = styled.header`
  background-color: var(--background-color);
  box-shadow: var(--shadow);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: var(--transition);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 40px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: var(--background-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    box-shadow: ${({ isOpen }) => (isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none')};
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  font-weight: ${({ active }) => (active ? '600' : '400')};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const DownloadButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: #2980b9;
    color: white;
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const AuthButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: #2980b9;
    color: white;
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    text-align: center;
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    margin: 1rem auto 0;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:hover {
    opacity: 0.9;
  }
`;

const UserDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: var(--background-color);
  border-radius: 5px;
  box-shadow: var(--shadow);
  width: 200px;
  z-index: 1001;
  overflow: hidden;
  transition: var(--transition);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: 1rem;
    box-shadow: none;
    border: 1px solid var(--border-color);
  }
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  color: var(--text-color);
  transition: var(--transition);
  
  svg {
    margin-right: 0.8rem;
    font-size: 1rem;
  }
  
  &:hover {
    background-color: var(--light-background);
    color: var(--primary-color);
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 0.8rem 1rem;
  color: var(--text-color);
  background: none;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  
  svg {
    margin-right: 0.8rem;
    font-size: 1rem;
  }
  
  &:hover {
    background-color: var(--light-background);
    color: var(--primary-color);
  }
`;

const UserName = styled.span`
  margin-left: 0.5rem;
  font-weight: 500;
  display: none;
  
  @media (min-width: 992px) {
    display: inline;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();
  const { currentUser, isAuthenticated, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const userDropdownRef = useRef(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };
  
  // 关闭菜单的函数
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  // 处理登出
  const handleLogout = () => {
    logout();
    setUserDropdownOpen(false);
    // 如果在移动端，同时关闭菜单
    closeMenu();
  };
  
  // 点击页面其他地方关闭用户下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // 监听路由变化，关闭菜单
  useEffect(() => {
    closeMenu();
  }, [location]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 获取用户头像或默认图标
  const getUserAvatar = () => {
    if (currentUser?.avatar) {
      return <img src={currentUser.avatar} alt={currentUser.username} />;
    }
    return <FaUser />;
  };
  
  return (
    <HeaderContainer style={{ backgroundColor: scrolled ? 'var(--background-color)' : 'transparent', boxShadow: scrolled ? 'var(--shadow)' : 'none' }}>
      <NavContainer>
        <Logo to="/">
          <img src="/favicon.png" alt="零屿笔记" />
          零屿笔记
        </Logo>
        
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" active={location.pathname === '/'} onClick={closeMenu}>
            首页
          </NavLink>
          <NavLink to="/features" active={location.pathname === '/features'} onClick={closeMenu}>
            功能
          </NavLink>
          <NavLink to="/notes" active={location.pathname === '/notes'} onClick={closeMenu}>
            <FaStickyNote style={{ marginRight: '5px' }} />
            笔记
          </NavLink>
          <NavLink to="/download" active={location.pathname === '/download'} onClick={closeMenu}>
            下载
          </NavLink>
          <NavLink to="/about" active={location.pathname === '/about'} onClick={closeMenu}>
            关于
          </NavLink>
          
          {isAuthenticated ? (
            <UserSection ref={userDropdownRef}>
              <UserAvatar onClick={toggleUserDropdown}>
                {getUserAvatar()}
              </UserAvatar>
              <UserName>{currentUser?.username}</UserName>
              
              <UserDropdown isOpen={userDropdownOpen}>
                <DropdownItem to="/profile" onClick={() => setUserDropdownOpen(false)}>
                  <FaUser />
                  个人中心
                </DropdownItem>
                <DropdownItem to="/notes" onClick={() => setUserDropdownOpen(false)}>
                  <FaStickyNote />
                  我的笔记
                </DropdownItem>
                <DropdownItem to="/settings" onClick={() => setUserDropdownOpen(false)}>
                  <FaCog />
                  设置
                </DropdownItem>
                <DropdownButton onClick={handleLogout}>
                  <FaSignOutAlt />
                  退出登录
                </DropdownButton>
              </UserDropdown>
            </UserSection>
          ) : (
            <AuthButton to="/auth" onClick={closeMenu}>
              登录/注册
            </AuthButton>
          )}
          
          <ThemeToggleButton onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggleButton>
        </NavLinks>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!isOpen && (
            <ThemeToggleButton onClick={toggleTheme} style={{ marginRight: '1rem' }}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </ThemeToggleButton>
          )}
          
          <MobileMenuButton onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </div>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;