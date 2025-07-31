// 테스트용 사용자 계정
const users = [
  { 
    id: 1, 
    username: 'admin', 
    password: 'password',
    role: 'admin' 
  },
  { 
    id: 2, 
    username: 'viewer', 
    password: 'password',
    role: 'viewer' 
  }
];

export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { username, password } = req.body;
      
      console.log('로그인 시도:', { username, password });
      
      // 사용자 찾기
      const user = users.find(u => u.username === username);
      
      // 인증 확인 (단순 텍스트 비교)
      if (user && user.password === password) {
        console.log('로그인 성공:', user.username);
        res.status(200).json({ 
          success: true, 
          user: { id: user.id, username: user.username, role: user.role }
        });
      } else {
        console.log('로그인 실패 - 잘못된 인증정보');
        res.status(401).json({ 
          success: false, 
          message: '아이디 또는 비밀번호가 틀렸습니다.' 
        });
      }
    } catch (error) {
      console.error('로그인 처리 오류:', error);
      res.status(500).json({ 
        success: false, 
        message: '서버 오류가 발생했습니다.' 
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
