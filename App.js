import React from 'react';
import { Sidebar } from './Sidebar';
import  LoginModal  from './LoginModal';

function App() {
  return (
    <div>
      <Sidebar />
      <div style={{ 
        marginLeft: '60px',
        padding: '20px'
      }}>
        <LoginModal />
        <main>
          {/* 여기에 페이지 컨텐츠가 들어갑니다 */}
        </main>
      </div>
    </div>
  );
}

export default App;