import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { ChatGoogle } from "@langchain/google-webauth";
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { SYSTEM_PROMPT } from './prompt.js';
import dotenv from 'dotenv';
import {
    executeQueryTool,
    protocolTablesAvailableTool,
    protocolTablesSchemaTool,
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
        protocolTablesAvailableTool(),
        protocolTablesSchemaTool(),
        chainTablesAvailableTool(),
        chainTablesSchemaTool()
    ],
});


export const executeAgent = async (message: string) => {
    const formattedSystemPromptString = await SYSTEM_PROMPT.format({});
    const systemMessage = new SystemMessage(formattedSystemPromptString);

    console.log('Attempting agent invoke with recursion limit: 50');
    const result = await agent.invoke(
        { messages: [systemMessage, new HumanMessage(message)] },
        { configurable: {}, recursionLimit: 50 }
    );
    return result;
};