import * as dbControllers from "../database/dbControllers.js";

export const getAll = async (req, res) => {
  try {
    const result = await dbControllers.listContacts();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};
