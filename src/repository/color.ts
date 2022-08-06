import client from "../db.ts";

interface Params {
  // deno-lint-ignore no-explicit-any
  id?: any;
}

export async function search(params: Params = {}) {
  const isSpecific = Object.keys(params).length !== 0;
  if (!isSpecific) {
    return await client.execute(`SELECT * FROM color`);
  } else {
    return await client.execute(`SELECT * FROM color WHERE id = ?`, [params.id]);
  }
}

// Insert a new Row
interface InsertParams {
  name: string;
  hex: string;
}

export async function insert({ name, hex }: InsertParams) {
  return await client.execute(`INSERT INTO color(name, hex) values(?, ?)`, [
    name,
    hex,
  ]);
}

// Update a Row
interface UpdateParams {
  name: string;
  hex: string;
  id: string;
}
export async function update(name: string, hex: string, id: string) {
  return await client.execute(
    `UPDATE color SET name = ?, hex = ? WHERE id = ?`,
    [name, hex, id]
  );
}

// Delete a Row
export async function remove(id: string) {
  return await client.execute(`DELETE FROM color WHERE id = ?`, [id]);
}
