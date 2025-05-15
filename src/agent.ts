import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { ChatGoogle } from "@langchain/google-webauth";
import { HumanMessage } from '@langchain/core/messages';
import { SYSTEM_PROMPT } from './prompt';
import dotenv from 'dotenv';
import {
    executeQueryTool,
    chainProtocolTablesAvailableTool,
    chainProtocolTablesSchemaTool,
    chainTablesAvailableTool,
    chainTablesSchemaTool
} from './tools.js';

dotenv.config();

const llm = new ChatGoogle({
    apiKey: process.env.GOOGLE_AI_API_KEY,
    modelName: process.env.MODEL_NAME,
    maxReasoningTokens: 0,
    apiVersion: 'v1beta',
    platformType: 'gai',
});

const agent = createReactAgent({
    llm,
    tools: [
        executeQueryTool(),
        chainProtocolTablesAvailableTool(),
        chainProtocolTablesSchemaTool(),
        chainTablesAvailableTool(),
        chainTablesSchemaTool()
    ],
    messageModifier: SYSTEM_PROMPT,
});


export const executeAgent = async (message: string) => {
    const result = await agent.invoke({
        messages: [new HumanMessage(message)],
    });
    return result;
};