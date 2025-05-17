import { BigQuery } from '@google-cloud/bigquery';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const sendQuery = async (query: string, params?: object) => {
    const filePath = path.join(dirname(fileURLToPath(import.meta.url)), '../big-query-access.json');
  
    const bigquery = new BigQuery({ keyFilename: filePath });
    const options = {
      query: query,
      params
    };
    
    const [job] = await bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();
    return rows;
  };
  