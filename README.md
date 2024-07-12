For the frontend you are going to create another Github repository and test it against the code you deployed for the backend. The frontend is broken down into the following features. Each feature is a new branch. When you start a feature, create a new branch, test your code, and finally merge your code. Then the next driver will pull down the code from Github, create a new branch, and start the next feature.

Here are the features:

1. Create a new repository on Github and add all the team members.
2. Create a new Vite react project and create components folder, in the folder add three .jsx files, Registration, Login, and Home.
3. For registration .jsx file where the user enters in a form their email, first name, last name, and password. Use redux tool kit to send the data to the backend and use windows.sessionstorage to save the token. Once the user is done, redirect to the home page.
4. For login .jsx file where the user enters their email and password into a form. Save the token used redux tool kit and redirect to the home page.
5. Create a protected route for the home page. If there is no JSON web token, redirect to the login page. The home page should display a list of all the users. Each user should have two buttons by it, one for delete and one for update.
6. The delete button should delete the user. You should not be able to delete the user that is signed in. Use tags so the file will update when you delete the user.
7. Create an update page so when the user clicks on the update button, they go to a page that displays all that user’s information in a form. Then they can update that user's information. Once done, redirect to the home page.
8. Deploy the front end.
