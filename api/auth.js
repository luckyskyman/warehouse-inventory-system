import bcrypt from 'bcryptjs';

// 테스트용 사용자 (실제로는 데이터베이스 사용)
const users = [
  { 
    id: 1, 
    username: 'admin', 
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password: password
    role: 'admin' 
  },
  { 
    id: 2, 
    username: 'viewer', 
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password: password
    role: 'viewer' 
  }
];

export default async function handler(req, res) {
  // CORS 헤더
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { username, password } = req.body;
    
    // 간단한 인증 (테스트용)
    const user = users.find(u => u.username === username);
    if (user && password === 'password') {
      res.status(200).json({ 
        success: true, 
        user: { id: user.id, username: user.username, role: user.role }
      });
    } else {
      res.status(401).json({ success: false, message: '로그인 실패' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
