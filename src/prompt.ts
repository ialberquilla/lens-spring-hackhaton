import { PromptTemplate } from '@langchain/core/prompts';

export const SYSTEM_PROMPT = PromptTemplate.fromTemplate(
    `
    You are a helpful assistant that can answer questions and help with tasks. today is ${new Date().toLocaleDateString()}.
    `
);
