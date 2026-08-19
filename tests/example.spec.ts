import { test, expect } from '@playwright/test';

test('Pagina inicial', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/iot-dashboard');
});

test('Como utilizar Locator', async ({ page }) => {

  await page.goto('http://localhost:4200/pages/iot-dashboard')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()

  // by tag name
  await page.locator('input')
  await page.locator('button')
  await page.locator('nb-card-body')

  // by ID
  await page.locator('#inputEmail1')
  await page.locator('#exampleInputPassword1')

  // by Class value 
  await page.locator('.status-basic')
  await page.locator('.status-basic')

  // by attribute
  await page.locator('[placeholder="Email"]')
  await page.locator('[type="email"]')

  // by Class value (full) class tbm é um atributo
  await page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

  // by combine differents locators - Add one by one without any blank space
  await page.locator('input[placeholder="Email"]')
  await page.locator('input#exampleInputPassword1')

  // by XPath
  //Embora o XPath seja suportado, seu uso não é recomendado.
  //Em vez disso, priorize localizadores visíveis ao usuário para maior confiabilidade.

  // by particial text
  await page.locator(':text("Basic")')

  // by exact text match
  await page.locator(':text-is("Basic form")')

})

test('User facing locators', async ({ page }) => {

  await page.goto('http://localhost:4200/pages/iot-dashboard')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()


  // Best pratice is try to always use this way to locate elements

  // input field - 
  await page.getByRole('textbox', { name: 'Email' })


  // button
  await page.getByRole('button', { name: 'Submit' })



  // by label - this label is placed above the locator that you wanna save
  await page.getByLabel('Email')

  // Placeholder
  await page.getByPlaceholder('First Name')


  // by title - is an attribute
  await page.getByTitle('Datepicker')


  // by TestId - this is an attribute config with focus to the script automation. Into the dev conde: data-testid="aut"
})

test('utilizando expect', async ({ page }) => {

  await page.goto('http://localhost:4200/pages/iot-dashboard')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()

  const locator = page.locator('nb-card', { hasText: 'Using the Grid' }).locator('nb-card-header')

  await expect(locator).toHaveText('Using the Grid')

})