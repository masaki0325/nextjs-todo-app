import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

// JSONファイルのパスを設定
const filePath = path.join(process.cwd(), "data", "todos.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // JSONファイルを読み込む
    const fileData = fs.readFileSync(filePath, "utf-8");
    const todos = JSON.parse(fileData).todos;

    res.status(200).json({ todos });
  } else if (req.method === "POST") {
    // 新しいタスクを追加
    const { text, id } = req.body;

    if (!text || !id) {
      return res.status(400).json({ error: "Invalid data" });
    }

    // JSONファイルを読み込む
    const fileData = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileData);
    json.todos.push({ text, id });

    // ファイルに書き込む
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

    res.status(201).json({ message: "Todo added successfully" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
