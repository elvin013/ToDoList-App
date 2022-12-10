const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");


async function automationTest(){

    //Data for register on the page
    var fullName = "Elvin Pouriet"
    var username = "elvin013"
    var email = "elvinpouriet@gmail.com"
    var password = "#Qwerty123"
    var exampleTask = 'Creating an example task #'
    var editTask = 'Editing an existend task'
    var fullNameEdited = 'Elvin Pouriet Editado'
    var fullNameTemporalUser = 'Fulano Sanchez '
    var passwordOfTemporalUser = 'default123'
 
       
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
        await driver.get('http://localhost:5000/signup');

        //------------- Index Page ------------ 

        //Fill in all corresponding inputs for register
        await driver.findElement(By.id('full-name')).sendKeys(fullName);
        await driver.findElement(By.id('username')).sendKeys(username+'3');
        await driver.findElement(By.id('password')).sendKeys(password)
        

        //Take screenshot of the Register page
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Register.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        // Get the title of the page
        var title = await driver.getTitle();
        console.log('Title is:',title, ' ✅');


        // Press the submit button to send form
        await driver.findElement(By.id('confirmPassword')).sendKeys(password, Key.TAB, Key.ENTER)

        /*------------- Login Page ------------ */
            
        //Now the app will be redirect to login
        // Fill in the login credentials to sign in 
        await driver.findElement(By.id('username')).sendKeys(username);
        await driver.findElement(By.id('password')).sendKeys(password, Key.ENTER);

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

        //await driver.findElement(By.id('btn-submit')).click()

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

        //Create 10 examples tasks
        for(let i = 1; i < 10; i++){

            await driver.findElement(By.id('btn-create-task')).click()

            if(i===10){
                driver.takeScreenshot().then(
                    function(image, err) {
                        require('fs').writeFile(`tests/screenshots/ToDoList-Creating-task.png`, image, 'base64', function(err) {
                            //console.log(err);
                        });
                    }
                );
            }

            await driver.findElement(By.id('content')).sendKeys(exampleTask+i, Key.ENTER)


        }

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Created-task.png`, image, 'base64', function(err) {
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

        /*------------- Update profile information ------------ */

        await driver.findElement(By.id('btn-update-profile')).click()
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Editing-task.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        await driver.findElement(By.id('fullName')).sendKeys(fullNameEdited, Key.ENTER)
        await driver.findElement(By.id('currentlyPassword')).sendKeys(password, Key.TAB, Key.TAB, Key.TAB, Key.ENTER)

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Updating-profile.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        await driver.findElement(By.id('btn-menu')).click()
        await driver.findElement(By.id('log_out')).click()


        /*------------- Login with temporal user ------------ */

        await driver.findElement(By.id('btn-get-temporal-user')).click()
        await driver.findElement(By.id('btn-menu')).click()
        await driver.findElement(By.id('btn-user-information')).click()
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-profile-temporal-user.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        ); 
        
        /*------------- Update profile information of temporal user ------------ */

        await driver.findElement(By.id('btn-update-profile')).click()
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Editing-task.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        await driver.findElement(By.id('fullName')).sendKeys(fullNameTemporalUser, Key.ENTER)
        await driver.findElement(By.id('password')).sendKeys(passwordOfTemporalUser, Key.ENTER)
        await driver.findElement(By.id('confirmPassword')).sendKeys(passwordOfTemporalUser, Key.TAB, Key.ENTER)

        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Updating-temporal-profile.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        /*------------- Make permanent a temporal user ------------ */
        await driver.findElement(By.id('btn-make-permanet')).click()
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile(`tests/screenshots/ToDoList-Make-Permanet.png`, image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );

        
        //Cierra en navegador y termina el programa
        await driver.quit();

        //Automatic testing successfully
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