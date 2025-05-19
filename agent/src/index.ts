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

    let response;
    try {
        const firstBrace = cleanResult.indexOf('{');
        const lastBrace = cleanResult.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
            const jsonString = cleanResult.substring(firstBrace, lastBrace + 1);
            response = JSON.parse(jsonString);
        } else {
            console.error("Could not find valid JSON in the agent's response:", cleanResult);
            throw new Error("Agent response did not contain a parseable JSON object.");
        }
    } catch (e) {
        console.error("Failed to parse JSON from agent response:", cleanResult, e);
        res.status(500).json({ error: "Failed to parse agent response", details: cleanResult });
        return;
    }

    res.json(response);
});

const server = app.listen(3005, () => {
    console.log('Server is running on port 3005');
});

server.on('close', () => {
    console.log('HTTP server closed');
});

} catch (error) {
    console.error("Error during application startup:", error);
    process.exit(1);
}