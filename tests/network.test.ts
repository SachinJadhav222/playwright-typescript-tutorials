import { test, expect, Browser, chromium, Page } from "@playwright/test";

async function interceptRequest() {
  const browser: Browser = await chromium.launch();
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  // Intercept requests
  // await page.route("**/*", (route: Request) => {
  //   const requestUrl = route.request().url();
  //   console.log(`Intercepted request: ${requestUrl}`);

  //   // Modify the request, for example, add a custom header
  //   route.request().headers()["Custom-Header"] = "InterceptedValue";

  //   // Continue with the intercepted request
  //   route.continue();
  // });
  page.on('request',request=>{
    console.log('>>', request.method(), request.url(),request.postData())
  })
  page.on('response',response=>{
    console.log('>>', response.body, response.status())
  })

  // Navigate to a URL
  await page.goto("https://example.com");

  // Close the browser
  await browser.close();
}

interceptRequest();
