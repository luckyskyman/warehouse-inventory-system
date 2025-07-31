<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>창고 물품 재고 관리시스템</title>
  <style>
    body {
      margin: 0;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segue UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      background: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      text-align: center;
      max-width: 500px;
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
    .status {
      padding: 15px;
      margin: 20px 0;
      border-radius: 5px;
      background: #e3f2fd;
      border-left: 4px solid #2196f3;
    }
    .btn {
      background: #667eea;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      display: inline-block;
      margin: 10px;
      cursor: pointer;
    }
    .btn:hover {
      background: #5a6fd8;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>창고 물품 재고 관리시스템</h1>
    <div class="status">
      <strong>배포 테스트 완료</strong><br>
      Vercel을 통한 정적 사이트 배포가 성공적으로 완료되었습니다.
    </div>
    
    <p>현재 두 가지 버전이 운영 중입니다:</p>
    
    <a href="https://warehouse-inventory-narae0008.replit.app" class="btn" target="_blank">
      🏠 Replit 메인 시스템 (전체 기능)
    </a>
    
    <a href="#" class="btn" onclick="alert('Vercel 버전은 현재 정적 페이지 테스트용입니다. 전체 기능은 Replit 버전을 사용해주세요.')">
      ☁️ Vercel 테스트 버전
    </a>
    
    <div style="margin-top: 30px; font-size: 14px; color: #666;">
      <p><strong>배포 성공 요약:</strong></p>
      <ul style="text-align: left; display: inline-block;">
        <li>GitHub 저장소 생성 및 코드 업로드 ✅</li>
        <li>Supabase PostgreSQL 데이터베이스 설정 ✅</li>
        <li>Vercel 정적 사이트 배포 ✅</li>
        <li>두 환경 병렬 운영 구축 ✅</li>
      </ul>
    </div>
  </div>
</body>
</html>
