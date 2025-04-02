import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaLock, FaMobileAlt, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

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

const AuthSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-background);
`;

const AuthContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
`;

const AuthCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--shadow);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
`;

const Tab = styled.button`
  flex: 1;
  background: none;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  color: ${({ active }) => (active ? 'var(--primary-color)' : 'var(--text-color)')};
  border-bottom: ${({ active }) => (active ? '2px solid var(--primary-color)' : 'none')};
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`;

const PasswordToggle = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: #2980b9;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const VerificationCodeContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const VerificationCodeInput = styled(Input)`
  flex: 1;
`;

const VerificationCodeButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : 'var(--primary-color)')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0 1rem;
  font-size: 0.9rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: var(--transition);
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#2980b9')};
  }
`;

const SwitchText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const SwitchLink = styled.span`
  color: var(--primary-color);
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: var(--border-color);
  }
  
  span {
    padding: 0 1rem;
    color: #666;
    font-size: 0.9rem;
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialButton = styled.button`
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginType, setLoginType] = useState('phone'); // 'phone' or 'password'
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState('');
  
  const startCountdown = () => {
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };
  
  const sendVerificationCode = () => {
    if (!phone) {
      setError('请输入手机号');
      return;
    }
    
    // 这里应该调用发送验证码的API
    // 模拟发送验证码
    startCountdown();
    setError('');
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (loginType === 'phone') {
      if (!phone || !verificationCode) {
        setError('请填写手机号和验证码');
        return;
      }
      
      // 这里应该调用手机号登录的API
      console.log('手机号登录', { phone, verificationCode });
    } else {
      if (!username || !password) {
        setError('请填写用户名和密码');
        return;
      }
      
      // 这里应该调用密码登录的API
      console.log('密码登录', { username, password });
    }
    
    // 清除错误信息
    setError('');
  };
  
  const handleRegister = (e) => {
    e.preventDefault();
    
    if (!username || !phone || !password || !confirmPassword || !verificationCode) {
      setError('请填写所有必填字段');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('两次输入的密码不一致');
      return;
    }
    
    // 这里应该调用注册的API
    console.log('注册', { username, phone, password, verificationCode });
    
    // 清除错误信息
    setError('');
  };
  
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>用户中心</HeroTitle>
          <HeroSubtitle>
            登录或注册零屿笔记，开始您的知识管理之旅
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      <AuthSection>
        <AuthContainer>
          <AuthCard>
            <TabContainer>
              <Tab 
                active={activeTab === 'login'} 
                onClick={() => setActiveTab('login')}
              >
                登录
              </Tab>
              <Tab 
                active={activeTab === 'register'} 
                onClick={() => setActiveTab('register')}
              >
                注册
              </Tab>
            </TabContainer>
            
            {activeTab === 'login' ? (
              <>
                <TabContainer>
                  <Tab 
                    active={loginType === 'phone'} 
                    onClick={() => setLoginType('phone')}
                  >
                    手机验证码登录
                  </Tab>
                  <Tab 
                    active={loginType === 'password'} 
                    onClick={() => setLoginType('password')}
                  >
                    账号密码登录
                  </Tab>
                </TabContainer>
                
                <Form onSubmit={handleLogin}>
                  {loginType === 'phone' ? (
                    <>
                      <FormGroup>
                        <InputIcon>
                          <FaMobileAlt />
                        </InputIcon>
                        <Input 
                          type="tel" 
                          placeholder="请输入手机号" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <VerificationCodeContainer>
                          <VerificationCodeInput 
                            type="text" 
                            placeholder="请输入验证码" 
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                          />
                          <VerificationCodeButton 
                            type="button"
                            disabled={countdown > 0}
                            onClick={sendVerificationCode}
                          >
                            {countdown > 0 ? `${countdown}秒后重新获取` : '获取验证码'}
                          </VerificationCodeButton>
                        </VerificationCodeContainer>
                      </FormGroup>
                    </>
                  ) : (
                    <>
                      <FormGroup>
                        <InputIcon>
                          <FaUser />
                        </InputIcon>
                        <Input 
                          type="text" 
                          placeholder="请输入用户名/手机号/邮箱" 
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </FormGroup>
                      
                      <FormGroup>
                        <InputIcon>
                          <FaLock />
                        </InputIcon>
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="请输入密码" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </PasswordToggle>
                      </FormGroup>
                    </>
                  )}
                  
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                  
                  <Button type="submit">登录</Button>
                </Form>
                
                <OrDivider>
                  <span>或</span>
                </OrDivider>
                
                <SocialLoginContainer>
                  <SocialButton title="微信登录">
                    <svg t="1701234567890" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                      <path d="M692.677 347.793c4.049 0 8.064 0.097 12.065 0.257-31.009-144.835-185.701-252.26-362.061-252.26-197.184 0-359.488 134.513-359.488 306.529 0 99.074 54.113 180.655 144.513 243.793l-36.129 108.705 126.337-63.281c45.201 8.929 81.457 18.177 126.721 18.177 11.361 0 22.625-0.545 33.793-1.409-7.073-24.225-11.169-49.633-11.169-75.969 0.001-158.065 135.681-284.545 325.425-284.545zM497.025 249.345c27.201 0 45.249 17.889 45.249 45.057 0 27.073-18.048 45.249-45.249 45.249-27.073 0-54.241-18.177-54.241-45.249 0-27.169 27.169-45.057 54.241-45.057zM244.657 339.651c-27.073 0-54.433-18.177-54.433-45.249 0-27.169 27.361-45.057 54.433-45.057 27.201 0 45.249 17.889 45.249 45.057 0 27.073-18.048 45.249-45.249 45.249zM1010.607 630.065c0-144.833-144.513-262.865-306.913-262.865-171.873 0-307.073 118.033-307.073 262.865 0 145.121 135.201 262.865 307.073 262.865 35.937 0 72.257-9.025 108.513-18.177l99.073 54.241-27.169-90.241c72.545-54.529 126.497-126.721 126.497-208.689zM616.707 584.817c-18.048 0-36.129-17.889-36.129-36.129 0-18.049 18.081-36.129 36.129-36.129 27.361 0 45.249 18.081 45.249 36.129 0 18.241-17.889 36.129-45.249 36.129zM815.539 584.817c-17.889 0-36.033-17.889-36.033-36.129 0-18.049 18.145-36.129 36.033-36.129 27.073 0 45.249 18.081 45.249 36.129 0 18.241-18.177 36.129-45.249 36.129z" fill="#09BB07"></path>
                    </svg>
                  </SocialButton>
                  <SocialButton title="QQ登录">
                    <svg t="1701234567890" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                      <path d="M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z" fill="#FAAD08"></path>
                      <path d="M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z" fill="#FAAD08"></path>
                      <path d="M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z" fill="#000000"></path>
                      <path d="M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698c-3.262-0.963-9.717-0.148-9.717-0.148-11.222 29.214-22.307 59.634-30.427 85.72-38.36 123.76-43.378 245.832-26.494 283.93 16.887 38.099 53.07 36.523 53.07 36.523 22.756-8.609 86.029-76.086 121.346-141.952 0 0 1.333-2.576 2.42-3.646 3.532-2.532 11.27-0.315 11.27-0.315 86.04 20.31 185.274 32.17 289.736 32.17 105.982 0 209.414-12.028 297.766-32.915 0 0 7.453-1.745 10.646 0.147 1.985 1.2 2.423 3.648 2.423 3.648 35.318 65.866 98.59 133.343 121.347 141.952 0 0 36.183 1.576 53.069-36.523 16.883-38.098 11.871-160.17-26.492-283.93z" fill="#000000"></path>
                      <path d="M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.236-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453" fill="#FFFFFF"></path>
                      <path d="M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498" fill="#FAAD08"></path>
                      <path d="M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135" fill="#000000"></path>
                      <path d="M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927" fill="#FFFFFF"></path>
                      <path d="M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574" fill="#EB1C26"></path>
                      <path d="M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z" fill="#EB1C26"></path>
                    </svg>
                  </SocialButton>
                </SocialLoginContainer>
                
                <SwitchText>
                  还没有账号？ <SwitchLink onClick={() => setActiveTab('register')}>立即注册</SwitchLink>
                </SwitchText>
              </>
            ) : (
              <Form onSubmit={handleRegister}>
                <FormGroup>
                  <InputIcon>
                    <FaUser />
                  </InputIcon>
                  <Input 
                    type="text" 
                    placeholder="请输入用户名" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
                
                <FormGroup>
                  <InputIcon>
                    <FaMobileAlt />
                  </InputIcon>
                  <Input 
                    type="tel" 
                    placeholder="请输入手机号" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormGroup>
                
                <FormGroup>
                  <VerificationCodeContainer>
                    <VerificationCodeInput 
                      type="text" 
                      placeholder="请输入验证码" 
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                    />
                    <VerificationCodeButton 
                      type="button"
                      disabled={countdown > 0}
                      onClick={sendVerificationCode}
                    >
                      {countdown > 0 ? `${countdown}秒后重新获取` : '获取验证码'}
                    </VerificationCodeButton>
                  </VerificationCodeContainer>
                </FormGroup>
                
                <FormGroup>
                  <InputIcon>
                    <FaLock />
                  </InputIcon>
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="请设置密码" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </PasswordToggle>
                </FormGroup>
                
                <FormGroup>
                  <InputIcon>
                    <FaLock />
                  </InputIcon>
                  <Input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="请确认密码" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <PasswordToggle onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </PasswordToggle>
                </FormGroup>
                
                {error && <ErrorMessage>{error}</ErrorMessage>}
                
                <Button type="submit">注册</Button>
                
                <SwitchText>
                  已有账号？ <SwitchLink onClick={() => setActiveTab('login')}>立即登录</SwitchLink>
                </SwitchText>
              </Form>
            )}
          </AuthCard>
        </AuthContainer>
      </AuthSection>
    </PageContainer>
  );
};

export default AuthPage;