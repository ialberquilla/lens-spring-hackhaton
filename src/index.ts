import dotenv from 'dotenv';
import { executeAgent } from './agent';

dotenv.config();

const result = await executeAgent('Hello, how are you?');
console.log(result);