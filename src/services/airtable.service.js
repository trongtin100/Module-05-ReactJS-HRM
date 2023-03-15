export const retrieveData = async (formula = {}, tableName, tableConfig) => {
    try {
      const res = await tableConfig.read(formula, { tableName });
      return res;
    } catch (e) {
      console.log(e);
    }
};
  
export const createData = async (tableConfig, data, tableName) => {
    try {
      const res = await tableConfig.create(data, tableName);
      return res;
    } catch (e) {
      console.log(e);
    }
};
  
export const updateData = async (id, tableConfig, data, tableName) => {
    try {
      const res = await tableConfig.update(id, data, tableName);
      console.log("res airtable service", res);
  
      return res;
    } catch (e) {
      console.log(e);
    }
};
  