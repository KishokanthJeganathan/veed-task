# Important info

Deployed app with the extra langaguage filter - https://veed-task.vercel.app/

This task took a little close to 4 hours and I stopped working after this mark as instructed. Due to these time restrictions, I have a bit of leftover tasks that I must highlight

1. Due to the time limitations, I could not finish writing unit tests for the custom hooks and intergration tests for the Index and Favourites page. All other components do have unit tests. I did however write a Cypress test that covers the user flow. This CY test is however missing a test case for testing the app when a user clicks the "clear filters" button
2. I feel that the typings could be more streamlined or better organised but the current setup should suffice for the task at hand
3. I opted not to go for state management tools as the app is rather small with few component layers.
4. App is not the most aesthetic as I opted to focus on the functionality first.
5. Sentry was not intergrated but I have added error handling to the app at the top level which in a PROD app would send the data to sentry
6. I did not add pagination of results due to time contraints
