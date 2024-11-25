import { supabase } from "./supabase";

export const getAllTodos = async () => {
  const { data, error } = await supabase
    .from("todo")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) throw error;
  return data;
};

export const addTodo = async (title: string) => {
  const { data, error } = await supabase.from("todo").insert({ text: title });
  if (error) throw error;
  return data;
};

export const editTodo = async (id: string, title: string) => {
  const { data, error } = await supabase
    .from("todo")
    .update({ text: title })
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteTodo = async (id: string) => {
  const { data, error } = await supabase.from("todo").delete().eq("id", id);
  if (error) throw error;
  return data;
};
