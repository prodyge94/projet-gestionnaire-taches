const { Builder, By, until } = require('selenium-webdriver');

(async function testCreateTask() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:3000');

    // Connexion
    await driver.findElement(By.id('email')).sendKeys('admin@test.com');
    await driver.findElement(By.id('password')).sendKeys('password');
    await driver.findElement(By.id('login-btn')).click();

    // Attendre redirection ou chargement
    await driver.wait(until.elementLocated(By.id('task-form')), 5000);

    // Création de tâche
    await driver.findElement(By.id('title')).sendKeys('Tâche E2E');
    await driver.findElement(By.id('description')).sendKeys('Créée par Selenium');
    await driver.findElement(By.id('submit-task')).click();

    // Vérification affichage tâche
    const taskElement = await driver.wait(
      until.elementLocated(By.xpath("//*[contains(text(), 'Tâche E2E')]")),
      5000
    );

    console.log('✅ Test E2E : tâche visible !');

  } catch (err) {
    console.error('❌ Test E2E échoué :', err);
  } finally {
    await driver.quit();
  }
})();
