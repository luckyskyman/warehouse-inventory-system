// 테스트용 재고 데이터
let inventory = [
  {
    id: 1,
    code: 'ITEM001',
    name: '테스트 제품 1',
    category: '전자제품',
    quantity: 50,
    min_quantity: 10,
    location: 'A-1-1'
  },
  {
    id: 2,
    code: 'ITEM002',
    name: '테스트 제품 2',
    category: '부품',
    quantity: 5,
    min_quantity: 20,
    location: 'B-2-1'
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

  if (req.method === 'GET') {
    res.status(200).json(inventory);
  } else if (req.method === 'POST') {
    const { code, name, category, quantity, minQuantity, location } = req.body;
    const newItem = {
      id: inventory.length + 1,
      code,
      name,
      category,
      quantity: parseInt(quantity),
      min_quantity: parseInt(minQuantity),
      location
    };
    inventory.push(newItem);
    res.status(201).json(newItem);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
