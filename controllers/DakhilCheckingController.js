import puppeteer from 'puppeteer';

export const checkDakhilaController = async (req, res) => {
    const { scan } = req.body;

    // Validate the scan input
    if (!scan || (typeof scan !== 'string' && !Array.isArray(scan))) {
        console.error('Invalid scan input:', scan);
        return res.status(400).json({ msg: 'Invalid scan input. Expected a valid URL or an array of URLs.' });
    }

    // Handle both string and array inputs
    const scannedUrl = Array.isArray(scan) ? scan[0] : scan;
    console.log('Scanned URL:', scannedUrl);

    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(scannedUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        const tableCount = await page.evaluate(() => {
            const rows = document.querySelectorAll('.row');
            const getDifferentDataFunc=(totalRowClass,targetRow,targetTable,targetTbody,targetTr,targetTd,forYear)=>{
                if(forYear){
                    if (rows.length < totalRowClass) return null;
                    const thirdRow = rows[targetRow];
                    const pTags=thirdRow.querySelectorAll('p');
                    const dakhilaYr=pTags[0].innerText.trim().match(/(\d{4})-(\d{4})/)[2]
                    let extractedData = [dakhilaYr];
                    return extractedData;
                }else{
                    if (rows.length < totalRowClass) return null;
                    const thirdRow = rows[targetRow];
                    const tables=thirdRow.querySelectorAll('table');
                    if (tables.length < targetTable) return null; // If there are less than 3 tables, return 0
                    const firstTable=tables[targetTable];
                    const tbodies=firstTable.querySelectorAll('tbody');
                    const firstTbody=tbodies[targetTbody]
                    const trs=firstTbody.querySelectorAll('tr');
                    let extractedData = [];
                    
                    for (let i = 0; i < trs.length; i++) { // Loop through each row
                        const tds = trs[i].querySelectorAll('td');
                        if (tds.length > targetTd) { // Ensure the target <td> exists
                            extractedData.push(tds[targetTd].innerText.trim());
                        }
                    }

                    return extractedData;
                }
            }
            const landOffice=[]
            landOffice.push(getDifferentDataFunc(3,0,1,0,0,1,false))
            const mouzaName=[]
            mouzaName.push(getDifferentDataFunc(3,0,2,0,0,1,false))
            const khatiyanNo=[]
            khatiyanNo.push(getDifferentDataFunc(3,0,4,0,0,1,false))
            const allParties=[]
            allParties.push(getDifferentDataFunc(3,0,5,0,0,1,false))
            allParties.push(getDifferentDataFunc(3,0,6,0,0,1,false))
            allPartiesShare=[]
            allPartiesShare.push(getDifferentDataFunc(3,0,5,0,0,2,false))
            allPartiesShare.push(getDifferentDataFunc(3,0,6,0,0,2,false))
            const allDags=[]
            allDags.push(getDifferentDataFunc(3,2,0,0,0,1,false))
            allDags.push(getDifferentDataFunc(3,2,1,0,0,1,false))
            const allShreni=[]
            allShreni.push(getDifferentDataFunc(3,2,0,0,0,2,false))
            allShreni.push(getDifferentDataFunc(3,2,1,0,0,2,false))
            const dakhilaYear=[]
            dakhilaYear.push(getDifferentDataFunc(3,3,1,0,0,2,true))

            const allCollectedData=[]
            allCollectedData.push(landOffice)
            allCollectedData.push(mouzaName)
            allCollectedData.push(khatiyanNo)
            allCollectedData.push(allParties)
            allCollectedData.push(allPartiesShare)
            allCollectedData.push(allDags)
            allCollectedData.push(allShreni)
            allCollectedData.push(dakhilaYear)
            return allCollectedData;
        });
        await browser.close();

        // Send the response back to the client
        res.status(200).json({ tableCount });
    } catch (error) {
        console.error('Error with Puppeteer:', error);
        res.status(500).json({ msg: 'Failed to process the URL', error: error.message });
    }
};