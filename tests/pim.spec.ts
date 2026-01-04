import { test } from '@playwright/test';

import { loginScenario } from '../utils/login.utils';

import { PIMpage } from '../pages/pim.page';

test.describe('PMI page', async() => {

    test('Add Employee', async({page}) => {

        const pimpage = new PIMpage(page);

        await loginScenario(page);

        await pimpage.selectPIM();
        await pimpage.validatePIMPage();
        await pimpage.clickOnAnEmployee('Add Employee');
        await pimpage.validateAddEmployeeText();
        await pimpage.addImage();
        await pimpage.addFirstName('Test');
        await pimpage.addLastName('Test');
        await pimpage.clickOnSaveButton();

    })

})