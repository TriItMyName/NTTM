const express = require('express');
const path = require('path'); // Module có sẵn của Node.js để xử lý đường dẫn
const app = express();
const port = 3000;

// 1. Cấu hình View Engine là EJS
app.set('view engine', 'ejs');
// Chỉ định rõ thư mục chứa file .ejs trong view
app.set('views', path.join(__dirname, 'view'));

// 2. Cấu hình thư mục chứa file tĩnh (CSS, Images, JS)
// Express sẽ lấy thư mục 'public' làm gốc.
app.use(express.static(path.join(__dirname, 'public')));

// 3. Route chính
app.get('/', (req, res) => {
    res.render('index'); // Render file view/index.ejs
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});