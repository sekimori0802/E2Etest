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
![add-task-1-initial](https://github.com/user-attachments/assets/0a9a5e3a-4cd1-4abf-b8bf-47e543de7fe6)
![add-task-2-input](https://github.com/user-attachments/assets/07c14da2-42e1-4f76-b449-0ff88f4c8c09)
![add-task-3-after-add](https://github.com/user-attachments/assets/804b1bc0-5e80-44e5-957a-d6bebbe2b9b4)
![delete-task-3-final](https://github.com/user-attachments/assets/a3379d60-9b14-4738-aa0d-57c9ec39c85f)
![delete-task-2-after-delete](https://github.com/user-attachments/assets/d250f7ca-d2b0-47ad-9b77-b0f4b9a4b650)
![delete-task-1-added](https://github.com/user-attachments/assets/3e29f5a9-6ca3-47c2-9088-24028ef248ea)
![complete-task-3-final](https://github.com/user-attachments/assets/dbe5f6cb-5fe2-49f5-a1ea-eb6bc9c7d219)

## APIエンドポイント

- GET /api/tasks - 全タスクの取得
- POST /api/tasks - 新規タスクの作成
- PUT /api/tasks/{id} - タスクの更新
- DELETE /api/tasks/{id} - タスクの削除
