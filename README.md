# E2Eテストサンプルアプリケーション

このプロジェクトは、PlaywrightによるE2Eテストのサンプルアプリケーションです。

## プロジェクト構成

```
E2Etest/
├── frontend/          # フロントエンド（HTML, CSS, JavaScript）
├── backend/           # バックエンド（Java Spring Boot）
└── README.md
```

## 必要な環境

- Node.js
- Java 17
- Maven

## セットアップ手順

### バックエンドの起動

1. バックエンドディレクトリに移動
```bash
cd backend
```

2. Mavenでアプリケーションを起動
```bash
mvn spring-boot:run
```

バックエンドサーバーは http://localhost:9000 で起動します。

### フロントエンドの起動

1. フロントエンドディレクトリに移動
```bash
cd frontend
```

2. 依存関係のインストール
```bash
npm install
```

3. アプリケーションの起動
```bash
npm start
```

## E2Eテストの実行

1. フロントエンドディレクトリで以下のコマンドを実行

ヘッドレスモードでテストを実行:
```bash
npm test
```

ブラウザを表示してテストを実行:
```bash
npm run test:headed
```

## テスト内容

以下の機能のE2Eテストが実装されています：

- タスクの追加
- タスクの完了状態の切り替え
- タスクの削除

## テストキャプチャ
![complete-task-1-added](https://github.com/user-attachments/assets/4a90ab52-c402-47aa-84a6-adf657681f86)
![complete-task-2-clicked](https://github.com/user-attachments/assets/2b1a9569-33dd-4cdd-9d3b-b07a13d2be00)
![complete-task-3-final](https://github.com/user-attachments/assets/c6d5b682-6c5a-4fd0-bf3f-9785f2762055)
![add-task-1-initial](https://github.com/user-attachments/assets/aaece09d-8a81-4e4f-a155-12ca23a7ce62)
![add-task-2-input](https://github.com/user-attachments/assets/3b6ad522-0255-4fe5-9e2e-72f55a50ffbc)
![add-task-3-after-add](https://github.com/user-attachments/assets/be7a5357-c732-4a6d-bc18-ef45f18db0ec)
![add-task-4-final](https://github.com/user-attachments/assets/1d0a9c6f-7700-447a-b8cb-bd8f634a20ad)
![delete-task-1-added](https://github.com/user-attachments/assets/182898b8-ba7d-49d3-b8ab-aaa77a55f93d)
![delete-task-2-after-delete](https://github.com/user-attachments/assets/28617d81-b07c-4819-94fb-b560d979df5f)
![delete-task-3-final](https://github.com/user-attachments/assets/386dbbb7-e521-471b-9ad3-251d5f6a9fdc)


## APIエンドポイント

- GET /api/tasks - 全タスクの取得
- POST /api/tasks - 新規タスクの作成
- PUT /api/tasks/{id} - タスクの更新
- DELETE /api/tasks/{id} - タスクの削除
