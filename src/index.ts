import dotenv from 'dotenv';
import { executeAgent } from './agent.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';

dotenv.config();

try {
    const filePath = path.join(dirname(fileURLToPath(import.meta.url)), '../big-query-access.json');

if (!fs.existsSync(filePath)) {
    const fileContent = process.env.BIG_QUERY_SECRET;
    if (!fileContent) {
        throw new Error('BIG_QUERY_SECRET is not set');
    }
    const jsonContent = JSON.parse(fileContent);
    fs.writeFileSync(filePath, JSON.stringify(jsonContent));
    console.log('File does not exist');
  } else {
    console.log('File already exists');
  }


const app = express();

app.get('/message', async (req: express.Request, res: express.Response) => {
    const message = req.query.message as string;
    const result = await executeAgent(message) as { messages: Array<{ content: string }> };

    console.log({ message: result.messages[result.messages.length - 1].content });

    const cleanResult = result.messages[result.messages.length - 1].content.replace(/```json\n/, '').replace(/\n```/, '');

    const response = JSON.parse(cleanResult);

    res.json(response);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

} catch (error) {
    console.error(error);
}