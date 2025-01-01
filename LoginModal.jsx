import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Code, User } from 'lucide-react';

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  buttonContainer: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    display: 'flex',
    gap: '10px',
    zIndex: 100,
  },
  loginButton: {
    padding: '8px 16px',
    backgroundColor: '#00e5ff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  },
  signupButton: {
    padding: '8px 16px',
    backgroundColor: 'white',
    color: '#00e5ff',
    border: '1px solid #00e5ff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  },
  logo: {
    position: 'fixed',
    top: '20px',
    left: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    zIndex: 100,
  },
  logoIcon: {
    color: '#00e5ff',
  },
  logoText: {
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '24px',
    color: '#333',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: '16px',
  },
  input: {
    width: '88%',
    padding: '12px',
    paddingLeft: '40px',
    border: '1px solid #eee',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
  },
  icon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#999',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00e5ff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '20px',
    marginBottom: '20px',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '16px',
    marginBottom: '16px',
  },
  forgotPassword: {
    color: '#00e5ff',
    textAlign: 'right',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'block',
    marginTop: '8px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: '#eee',
  },
  orText: {
    margin: '0 10px',
    color: '#666',
    fontSize: '14px',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '20px',
  },
  socialButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
  },
  signupText: {
    textAlign: 'center',
    marginTop: '16px',
    fontSize: '14px',
    color: '#666',
  },
  signupLink: {
    color: '#00e5ff',
    cursor: 'pointer',
    textDecoration: 'none',
  }
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const LoginModal = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleHome = () => {
    window.location.href = '/';
  };

  const LoginContent = () => (
    <>
      <h1 style={styles.title}>로그인</h1>
      <form>
        <div style={styles.inputWrapper}>
          <Mail style={styles.icon} size={20} />
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            style={styles.input}
          />
        </div>
        <div style={styles.inputWrapper}>
          <Lock style={styles.icon} size={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력하세요"
            style={styles.input}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            style={{...styles.icon, left: 'auto', right: '12px', cursor: 'pointer'}}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>
        <div style={styles.rememberMe}>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">REMEMBER ME</label>
        </div>
        <button type="submit" style={styles.submitButton}>로그인</button>
        <div style={styles.signupText}>
          계정이 없으신가요? <span style={styles.signupLink} onClick={() => {
            setLoginModalOpen(false);
            setSignupModalOpen(true);
          }}>회원가입</span>
        </div>
        <a href="#" style={styles.forgotPassword}>비밀번호를 잃어버리셨나요?</a>
        <div style={styles.divider}>
          <div style={styles.line}></div>
          <span style={styles.orText}>또는</span>
          <div style={styles.line}></div>
        </div>
        <div style={styles.socialButtons}>
          <button style={{...styles.socialButton, backgroundColor: '#DB4437'}}>G</button>
          <button style={{...styles.socialButton, backgroundColor: '#4267B2'}}>f</button>
          <button style={{...styles.socialButton, backgroundColor: '#333'}}>G</button>
        </div>
      </form>
    </>
  );

  const SignUpContent = () => (
    <>
      <h1 style={styles.title}>회원가입</h1>
      <form>
        <div style={styles.inputWrapper}>
          <User style={styles.icon} size={20} />
          <input
            type="text"
            placeholder="이름을 입력하세요"
            style={styles.input}
          />
        </div>
        <div style={styles.inputWrapper}>
          <Mail style={styles.icon} size={20} />
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            style={styles.input}
          />
        </div>
        <div style={styles.inputWrapper}>
          <Lock style={styles.icon} size={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력하세요"
            style={styles.input}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            style={{...styles.icon, left: 'auto', right: '12px', cursor: 'pointer'}}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>
        <div style={styles.inputWrapper}>
          <Lock style={styles.icon} size={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 다시 입력하세요"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>회원가입</button>
        <div style={styles.signupText}>
          이미 계정이 있으신가요? <span style={styles.signupLink} onClick={() => {
            setSignupModalOpen(false);
            setLoginModalOpen(true);
          }}>로그인</span>
        </div>
        <div style={styles.divider}>
          <div style={styles.line}></div>
          <span style={styles.orText}>또는</span>
          <div style={styles.line}></div>
        </div>
        <div style={styles.socialButtons}>
          <button style={{...styles.socialButton, backgroundColor: '#DB4437'}}>G</button>
          <button style={{...styles.socialButton, backgroundColor: '#4267B2'}}>f</button>
          <button style={{...styles.socialButton, backgroundColor: '#333'}}>G</button>
        </div>
      </form>
    </>
  );

  return (
    <div>
      {/* 로고 */}
      <a onClick={handleHome} style={styles.logo}>
        <Code size={24} style={styles.logoIcon} />
        <span style={styles.logoText}>CodeSchooler</span>
      </a>

      {/* 버튼 */}
      <div style={styles.buttonContainer}>
        <button
          onClick={() => setLoginModalOpen(true)}
          style={styles.loginButton}
        >
          로그인
        </button>
        <button
          onClick={() => setSignupModalOpen(true)}
          style={styles.signupButton}
        >
          회원가입
        </button>
      </div>

      {/* 모달 */}
      <Modal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      >
        <LoginContent />
      </Modal>

      <Modal
        isOpen={signupModalOpen}
        onClose={() => setSignupModalOpen(false)}
      >
        <SignUpContent />
      </Modal>
    </div>
  );
};

export default LoginModal;