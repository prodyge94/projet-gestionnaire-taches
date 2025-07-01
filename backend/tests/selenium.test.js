const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
options.addArguments('--no-sandbox');
options.addArguments('--disable-dev-shm-usage');
options.addArguments('--headless');
options.addArguments('--disable-gpu');
options.addArguments('--disable-web-security');
options.addArguments('--disable-features=VizDisplayCompositor');
options.addArguments('--remote-debugging-port=9222');
options.addArguments('--user-data-dir=/tmp/chrome-user-data');

(async function testCreateTask() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    console.log('🚀 Ouverture de la page de login...');
    await driver.get('http://localhost:3000/login');

    // Connexion
    await driver.wait(until.elementLocated(By.id('email')), 5000);
    await driver.findElement(By.id('email')).sendKeys('admin@test.com');
    await driver.findElement(By.id('password')).sendKeys('password');
    const loginButton = await driver.findElement(
      By.xpath("//button[contains(text(), 'Se connecter')]")
    );
    await loginButton.click();

    console.log('✅ Connexion envoyée, attente dashboard...');

    // Attente du bouton "Nouvelle Tâche"
    await driver.wait(
      until.elementLocated(By.xpath("//button[contains(text(),'Nouvelle Tâche')]")),
      5000
    );
    await driver.findElement(By.xpath("//button[contains(text(),'Nouvelle Tâche')]")).click();

    // 💡 Attente de l'affichage du formulaire de tâche (par class, pas id)
    await driver.wait(
      until.elementLocated(By.css('.task-form')),
      5000
    );

    // Remplissage du formulaire
    await driver.findElement(By.id('title')).sendKeys('Tâche E2E');
    await driver.findElement(By.id('description')).sendKeys('Créée par Selenium');

    // Clic sur le bouton "Créer"
    const submitButton = await driver.findElement(
      By.xpath("//button[contains(text(), 'Créer')]")
    );
    await submitButton.click();

    // Vérification affichage
    await driver.wait(
      until.elementLocated(By.xpath("//*[contains(text(), 'Tâche E2E')]")),
      5000
    );

    console.log('✅ Test E2E réussi : tâche visible');
  } catch (err) {
    console.error('❌ Test E2E échoué :', err.message);
    process.exit(1);
  } finally {
    await driver.quit();
  }
})();