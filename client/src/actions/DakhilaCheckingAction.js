import customFetch from "../FrontHelper/CustomAxios.js";

// https://dakhila.ldtax.gov.bd/dakhila-print/cWtaU0JvdnV4VUZJemlXRkMySmtnZz09

export const DakhilaCheckingAction = async (getInputValue) => {
  try {
    const response = await customFetch.post('/puppeteer/checkDakhila', { scan: getInputValue });
    console.log('Row Count:', response.data);
  } catch (error) {
    console.error('Error in DakhilaCheckingAction:', error);
  }
};