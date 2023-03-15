import { AIRTABLE_BASE_ID, AIRTABLE_API_KEY } from "../constants";

const AirtablePlus = require("airtable-plus");

export const tableConfig = (tableName) => {
  let config = new AirtablePlus({
    baseID: AIRTABLE_BASE_ID,
    apiKey: AIRTABLE_API_KEY,
    tableName: tableName,
  });
  return config;
};
