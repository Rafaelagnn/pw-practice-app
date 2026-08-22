import { test, expect } from '@playwright/test';

test.describe('Textarea and Button', () => {

    test.beforeEach(async ({ page }) => {
        // Ir ao site
        await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard')

        // Elementos / Campos / Componentes
        const formsMenu = page.getByTitle('Forms')
        const formLayouts = page.getByTitle('Form Layouts')

        // Interacoes
        await formsMenu.click()
        await formLayouts.click()

        // Validacoes / Assertions
        await expect(page).toHaveURL('https://playground.bondaracademy.com/pages/iot-dashboard')
    })

    test('Form without labels', async ({ page }) => {
        // Elementos / Campos / Componentes
        const campoRecipients = page.getByPlaceholder('Recipients')
        const campoSubject = page.getByPlaceholder('Subject')
        const campoMessage = page.getByPlaceholder('Message')
        const buttonSend = page.getByRole('button', {name: "Send"})


        // Interacoes
        await campoRecipients.fill('Rafaela Goncalves')
        await campoSubject.fill('teste 1')
        await campoMessage.fill('Informações preenchidas')
        await buttonSend.click()

        // Validacoes / Assertions
        await expect(campoRecipients).toHaveValue('Rafaela Goncalves')
        await expect(campoSubject).toHaveValue('teste 1')
        await expect(campoMessage).toHaveValue('Informações preenchidas')
        

    })

    test('Block form', async ({ page }) => {
        // Elementos / Campos / Componentes
        const campoFirstName = page.getByPlaceholder("First Name")
        const campoLastName = page.getByPlaceholder('Last Name')
        const emailBlockForm = page.locator('#inputEmail')
        const campoWebSite = page.locator('#inputWebsite')
        const submitBlockForm = page.locator('[class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]')

        // Interacoes
        await campoFirstName.fill('Rafaela')
        await campoLastName.fill('Gonçalves')
        await emailBlockForm.fill('test@QA.com')
        await campoWebSite.fill('Testando')
        await submitBlockForm.click()


        // Validacoes / Assertions
        await expect(campoFirstName).toHaveValue('Rafaela')
        await expect(campoLastName).toHaveValue('Gonçalves')
        await expect(emailBlockForm).toHaveValue('test@QA.com')
        await expect(campoWebSite).toHaveValue('Testando')
    })

    test('Inline form', async ({ page }) => {

        // Elementos / Campos / Componentes
        //Utilizando elemento Pai e filho
        const inlineForm = page.locator('nb-card', {hasText: 'Inline form'})
        const nameInlineForm = inlineForm.getByPlaceholder('Jane Doe')
        const submitInlineForm = inlineForm.getByRole('button', {name: 'Submit'})

        //Utilizando o nth procurando pelo browser - Nao faz parte de boas praticas. Usar apenas quando nao conseguir criar um locator unico
        const emailInlineForm = page.getByPlaceholder('Email').nth(0)


        // Interacoes
        await emailInlineForm.fill('teste@QA.com')
        await nameInlineForm.fill('Rafaela')
        await submitInlineForm.click()


        // Validacoes / Assertions
        await expect(emailInlineForm).toHaveValue('teste@QA.com')
        await expect(nameInlineForm).toHaveValue('Rafaela')


    })

})