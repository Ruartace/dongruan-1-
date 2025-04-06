const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// 模拟用户数据
const users = [
    { username: 'user1', password: 'password1', email: 'user1@example.com' },
    { username: 'user2', password: 'password2', email: 'user2@example.com' },
];

app.post('/api/login', (req, res) => {
    const { username, password, email, emailCode } = req.body;

    // 简单的验证逻辑
    const user = users.find(u => u.username === username && u.password === password && u.email === email);

    if (user) {
        res.status(200).json({ message: '登录成功' });
    } else {
        res.status(401).json({ message: '用户名、密码或邮箱不正确' });
    }
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});