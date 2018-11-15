Documentation:

For this test, had used React JS as framework and Visual Studio Code as IDE.
Purpose for using React JS:

  It is more efficient and used for building user interfaces specifically for single page applications. In React, instead of using regular JavaScript for templating, it uses JSX.
  
Initially, created a project using React JS in VS Code by using following command.

In the project directory, you can run:

### `npx create-react-app Task`
### `cd Task`
### `npm start`

The above commands will install all the required libraries including webpack 
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Now created a folder in src named ‘components’ and inside that folder created a file named ‘movie-list.js’. Imported react from react module which is present in node modules.

Design Decisions:
Previously, had experience with using ‘Axios’ for fetching and visualizing the data from API. In this test, had used ‘fetch’ importing from ‘node-fetch’ to get the data because to gain knowledge regarding ‘fetch’.
‘Mapper’ function is used to map the data.
‘React router’ is used to define a route for unique elements present in the API (image, title, rating, production year and url to view on IMDB) .

Instructions to compile and run:
### `npm install`
### `npm start`

