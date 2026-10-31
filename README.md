# 📒 个人记账本（微信小程序）

一款基于微信小程序原生框架开发的个人收支管理应用，支持记账、分类统计、数据持久化等功能。

## ✨ 核心功能

- 📋 **账单明细**：按时间倒序展示收支记录，支持长按删除
- ➕ **快速记账**：支持支出/收入切换、分类选择、日期选择、金额录入
- 📊 **月度统计**：自动计算本月结余，展示支出分类 TOP5 排行
- 📝 **数据持久化**：使用本地存储实现数据增删改查，预留 RESTful API 接口

## 🛠️ 技术栈

- **前端框架**：微信小程序原生框架（WXML + WXSS + JavaScript）
- **数据存储**：wx.setStorageSync / wx.getStorageSync（本地存储）
- **接口测试**：Postman（预留 Java/Spring Boot 后端接口规范）
- **版本控制**：Git

## 📁 项目结构

```
miniprogram-2/
├── app.js              # 全局逻辑与数据初始化
├── app.json            # 全局配置（页面路由、导航栏、TabBar）
├── app.wxss            # 全局样式
├── pages/
│   ├── index/          # 首页 - 账单列表与月度汇总
│   ├── add/            # 新增页 - 记账表单
│   └── stats/          # 统计页 - 收支分析与分类排行
└── utils/
    └── api.js          # 数据层封装（预留后端接口替换）
```


## 🚀 如何运行

1. 克隆本仓库到本地
2. 使用 **微信开发者工具** 导入项目
3. 填写你的小程序 AppID（或使用测试号）
4. 点击"编译"即可预览

## 📡 接口文档（预留）

本项目数据层已按 RESTful 规范封装，后续可无缝对接 Java/Spring Boot 后端：

| 接口 | 方法 | 说明 |
|------|------|------|
| /api/records | GET | 获取账单列表 |
| /api/records | POST | 新增账单 |
| /api/records/:id | DELETE | 删除账单 |

## 🔮 后续计划

- [ ] 使用 Java + Spring Boot 搭建后端服务
- [ ] 接入 MySQL 数据库实现数据持久化
- [ ] 增加用户登录与数据同步功能

## 👤 关于我

软件技术专业在读，热爱全栈开发，欢迎交流！
<img width="382" height="778" alt="image" src="https://github.com/user-attachments/assets/deada5e5-6875-4631-908a-ca7660f44914" />
<img width="377" height="808" alt="image" src="https://github.com/user-attachments/assets/5def1cb7-5b4d-4862-ba13-87faccf05080" />
<img width="380" height="780" alt="image" src="https://github.com/user-attachments/assets/3ae0594c-673d-428e-a9fe-efb205777931" />



