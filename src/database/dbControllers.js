import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 
const usersPath = path.join(__dirname, "db.json");

export const listContacts = async () => {
    const data = await fs.readFile(usersPath);
    return JSON.parse(data);
};
