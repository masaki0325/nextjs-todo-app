# ToDo アプリ - Supabase を利用

Supabase を利用した ToDo 管理アプリケーションです。このアプリでは、タスクの追加、編集、削除、リスト表示を行うことができます。

---

## デモ

デプロイ済みアプリケーションはこちら: [https://react-todo-bice-tau.vercel.app/](https://react-todo-bice-tau.vercel.app/)

---

## 主な機能

- タスクの追加
- タスクの編集
- タスクの削除
- 作成日の昇順でタスクを表示
- Supabase のリアルタイム機能を使用したデータの自動更新

---

## 使用技術

- **Next.js** (15.x)
- **Supabase** (データベース)
- **Tailwind CSS** (スタイリング)
- **Vercel** (ホスティング)

---

## プロジェクト構成

```
.
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── todos
│   │   │   │   └── route.ts  # Supabaseからデータを取得するAPIエンドポイント
│   │   ├── components
│   │   │   ├── AddTask.tsx   # タスク追加コンポーネント
│   │   │   ├── TodoList.tsx # タスクリスト表示コンポーネント
│   │   └── page.tsx         # メインページ
├── utils
│   ├── supabaseClient.ts     # Supabaseクライアントの初期化
│   ├── supabaseFunctions.ts  # Supabase操作用の関数群
├── public
├── styles
└── README.md
```

---

## セットアップ手順

### 1. このリポジトリをクローン

```bash
git clone https://github.com/your-repo/nextjs-todo-app.git
cd nextjs-todo-app
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. Supabase プロジェクトのセットアップ

1. [Supabase](https://supabase.com) にアクセスし、新しいプロジェクトを作成します。
2. 以下のクエリを実行して、`todo` テーブルを作成します:

```sql
CREATE TABLE todo (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);
```

3. 「Table Editor」で `Row Level Security (RLS)` を有効にします。
4. 以下のポリシーを追加して、匿名ユーザーがデータを読み書きできるようにします:

```sql
-- データの読み取りを許可
CREATE POLICY "Allow read access" ON public.todo
FOR SELECT USING (true);

-- データの挿入を許可
CREATE POLICY "Allow insert access" ON public.todo
FOR INSERT WITH CHECK (true);

-- データの更新を許可
CREATE POLICY "Allow update access" ON public.todo
FOR UPDATE USING (true);

-- データの削除を許可
CREATE POLICY "Allow delete access" ON public.todo
FOR DELETE USING (true);
```

### 4. 環境変数を設定

1. プロジェクトルートに `.env.local` ファイルを作成します。
2. 以下の内容を記載します:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 5. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開き、アプリケーションを確認します。

---

## デプロイ手順

### 1. Vercel にデプロイ

1. [Vercel](https://vercel.com/) にログインし、このリポジトリをインポートします。
2. 環境変数 (`NEXT_PUBLIC_SUPABASE_URL` と `NEXT_PUBLIC_SUPABASE_ANON_KEY`) を Vercel ダッシュボードに追加します。
3. デプロイを開始します。

---

## 改善ポイント

1. **UI/UX の向上**:
   - タスク完了機能
   - タスクの検索・フィルタリング機能
2. **テストの追加**:
   - ユニットテストやエンドツーエンドテストの導入。
3. **パフォーマンスの最適化**:
   - Supabase クエリや API レスポンスの最適化。

---

## ライセンス

MIT License
