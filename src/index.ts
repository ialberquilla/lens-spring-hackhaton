import dotenv from 'dotenv';
import { executeAgent } from './agent.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

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


const result = await executeAgent('Hello, How token transfers of $GRASS in the last 24 hours?');
console.log(result.messages[result.messages.length - 1].content);


