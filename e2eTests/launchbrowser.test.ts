import {chromium} from 'playwright';

describe('first test', ()=>{

test('launch google', async ()=>{

const browser = await chromium.launch({
    headless: false
});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.google.com');
browser.close();


})

test('launch bing', async ()=>{

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.bing.com');
    browser.close();
    
    
    })

})