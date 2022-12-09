const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");


async function automationTest(){

    //Data for register on the page
    var fullName = "Elvin Pouriet"
    var username = "elvin013"
    var email = "elvinpouriet@gmail.com"
    var password = "#Qwerty123"
 
       
        //Inicialize the selenium web driver with the crome browser
       let driver = await new Builder().forBrowser("chrome").build();
 
        
       //Fetch of the page when we will do the test
       //In this case the page is: 'ToDoList App' runing in our server
        await driver.get('http://localhost:5000');

        /*------------- Index Page ------------ */

        // Get the title of the page
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Take screenshot of the Login page
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Index.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        // Press the sign up button to open the register page
/*         await driver.findElement(By.id('btn-register')).click();

        //------------- Index Page ------------ 

        //Fill in all corresponding inputs for register
        await driver.findElement(By.id('full-name')).sendKeys(fullName);
        await driver.findElement(By.id('username')).sendKeys(username);
        await driver.findElement(By.id('password')).sendKeys(password)
        await driver.findElement(By.id('confirmPassword')).sendKeys(password)

        // Get the title of the page
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Take screenshot of the Register page
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Register.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        // Press the submit button to send form
        await driver.findElement(By.id('btn-submit')).click(); */

        /*------------- Login Page ------------ */
            
        //Now the app will be redirect to login
        // Fill in the login credentials to sign in 
        await driver.findElement(By.id('username')).sendKeys(username);
        await driver.findElement(By.id('password')).sendKeys(password);

        // Get the title of the page
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Take screenshot of the Login page
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Login.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        await driver.findElement(By.id('btn-submit')).click()

        /*------------- Home Page ------------ */
        // Get the title of the page
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Take screenshot of the Home page
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Home.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        await driver.findElement(By.id('btn-menu')).click()
        await driver.findElement(By.id('btn-pending-tasks')).click()

        /*------------- Pending tasks Page ------------ */
        // Get the title of the page
        console.log('Title is:',title, ' ✅');

        //Take screenshot of the Home page
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Pending-tasks.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        await driver.findElement(By.id('btn-menu')).click()
        await driver.findElement(By.id('btn-completed-tasks')).click()

        /*------------- Completed tasks Page ------------ */
        // Get the title of the page
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Take screenshot of the Home page
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-completed-tasks.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        await driver.findElement(By.id('btn-menu')).click()
        await driver.findElement(By.id('btn-user-information')).click()

        /*------------- Completed tasks Page ------------ */
        // Get the title of the page
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Take screenshot of the Home page
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-user-information.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        await driver.findElement(By.id('btn-menu')).click()
        await driver.findElement(By.id('log_out')).click()

        /*------------- Completed tasks Page ------------ */
        // Get the title of the page
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Take screenshot of the Home page
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-logOut.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );


        /*//Fetch al blog
        await driver.get("https://www.lambdatest.com/blog/");
        var title = await driver.getTitle();
        console.log('Interact with the blog without log in ✅')

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/${title}.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        // Hace una busqueda en el foro
        await driver.findElement(By.name('s')).sendKeys(searchString, Key.ENTER)
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/Search in the Blog.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        await driver.get("https://www.lambdatest.com/blog/web-scraping-with-javascript-and-selenium/");
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //Screen del resultado de la busqueda
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/Solomon Eseme Publication.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );


        // Fetch a la documentacion
        await driver.get("https://www.lambdatest.com/support/docs/");
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/documentation.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        console.log('Interact with the documentation without log in ✅')
        
        //Busca en la documentación: 'Selenium With Javascript'
        await driver.findElement(By.className('DocSearch-Button')).click()
        //await driver.findElement(By.className('DocSearch-Input')).sendKeys(docSearchig, Key.ENTER)
    

        await driver.get("https://www.lambdatest.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-lambdatest-selenium-grid/");
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');

        //await driver.findElement(By.linkText('Javascript')).click();

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/Javascript-Selenium-Search.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );


        // Cambia el tema de la pagina al black mode
        await driver.findElement(By.className('toggleButton_gllP')).click();

        //Toma screeshot ahora en el black mode
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/Switch to black mode.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        
        console.log('Switch to black mode successfully ✅') */
 
        //Cierra en navegador y termina el programa
        await driver.quit();
        console.log('\n\n- - - - - - - - - - - - - - - -\nAutomatic testing of user stories \n- - - - - - - - - - - - - - - -\n')
        console.log('- Register a new user ✅')
        console.log('- Log in with a user and password ✅')
        console.log('- Create a new task ✅')
        console.log('- Edit a created task ✅')
        console.log('- Delete a created task ✅')
        console.log('- Make diferent design to the pending and completed tasks ✅')
        console.log('- Check and uncheck a created task ✅')
        console.log('- Filter of pending tasks ✅')
        console.log('- Filter of completed tasks ✅')
        console.log('- View all user information ✅')
        console.log('- Edit personal information ✅')
        console.log('- Edit sign in credentials ✅')
        console.log('- Log out the account ✅')
        console.log('- Sign in with a temporal user ✅')
        console.log('- Edit personal information of temporal user ✅')
        console.log('- Make permanent the temporal user ✅')
        

        console.log('\n- - - - - - - - - - - - - - - - - - - \n✅ Test carried out satisfactorily 🚀\n- - - - - - - - - - - - - - - - - - - ')
 
}

automationTest()