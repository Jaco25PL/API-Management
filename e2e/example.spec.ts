import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:4000/'
const IMAGE_API = "https://cataas.com/cat"

test('App shows the fact and the cat image', async ({ page }) => {

  await page.goto(LOCALHOST_URL);

  const title = await page.getByRole('heading')
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const headingContent = await title.textContent()
  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(headingContent).toBe('Techical Test')
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(IMAGE_API)).toBeTruthy()
})

