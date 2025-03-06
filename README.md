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

## APIエンドポイント

- GET /api/tasks - 全タスクの取得
- POST /api/tasks - 新規タスクの作成
- PUT /api/tasks/{id} - タスクの更新
- DELETE /api/tasks/{id} - タスクの削除
