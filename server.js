const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// CORS 설정 - "정확하게" 작성한 버전.
app.use(cors({
  origin: ["http://localhost:3000", "http://여러분들IPv4개방주소"],  // 예: http://3.37.194.186
  methods: ["GET", "POST"],
  credentials: true
}));

// 메모리에 저장하는 카운터 값
let count = 1;

// 현재 상태 조회
app.get("/", (req, res) => {
  res.json({ count });
});

// 증가 API
app.post("/increment", (req, res) => {
  count++;
  res.json({ count });
});

// 감소 API
app.post("/decrement", (req, res) => {
  count--;
  res.json({ count });
});

// 서버 실행
app.listen(3001, () => {
  console.log("Counter API Server Running : 3001");
});