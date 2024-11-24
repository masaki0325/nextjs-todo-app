// src/app/api/todos/route.ts
import { NextResponse } from "next/server";

// サンプル Todo データ
const todos = [
  { id: "1", text: "Learn React" },
  { id: "2", text: "Learn Next.js" },
  { id: "3", text: "Build a ToDo App" },
];

// GETリクエストで Todo リストを返す
export async function GET() {
  return NextResponse.json(todos); // JSON形式でレスポンスを返す
}
