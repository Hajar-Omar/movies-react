# FUN ZONE App

This is a ReactJS App for personal usage... that fetches movie data from an API and displays it in a grid. The user can filter the movies by type and search for movies by title. The app also includes pagination.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Integrating with [sampleapis APIs](https://sampleapis.com/api-list/movies)

![Movies List](https://raw.githubusercontent.com/Hajar-Omar/movies-react/main/public/images/me.png)

## Getting Started

To get started, clone the repository and install the dependencies:

```
git clone https://github.com/Hajar-Omar/movies-react
cd movies
npm install
```

Once the dependencies are installed, you can start the development server:

```
npm start
```

The app will be available at http://localhost:3000.

<!-- ## Code Overview

The app consists of the following components:

* `MovieList`: This is the main component of the app. It fetches the movie data from the API and displays it in a grid. The user can filter the movies by type and search for movies by title. The app also includes pagination.
* `Movie`: This component displays a single movie.
* `Pagination`: This component displays the pagination controls. -->

## Pages
### `Dashboard`:

The `Dashboard` component is the main component of the app. It fetches data for two main components:
1- `BitcoinChart` Bitcoin Prices, explaining it with Bar Chart using [react-chartjs-2](https://react-chartjs-2.js.org/)
2- `BankChart` Account Debits for fake bank, explaining it with Bar Chart using [react-chartjs-2](https://react-chartjs-2.js.org/)

![Dashboard](https://i.ibb.co/FXBDmHf/dash.png)


### `Profile`:

The `Prefrences` component which you can set your own preferences and save it using [Redux](https://redux.js.org/) for State Management & localstorage as well for further browser cache.
 
Preferences such as:
1- favorite coffee from a carousel
2- your country and some intresting facts about it
3- personal data such as first name , last name, profile photo, bio, gender, email, favorite color
4- notes or todos list using dynamic form

![Profile](https://i.ibb.co/Xz0n5SL/profile.png)
![Profile](https://i.ibb.co/GH8Y1p3/prof4.png)
![Profile](https://i.ibb.co/25zgQ22/prof2.png)
![Profile](https://i.ibb.co/kSgKbJz/prof3.png)


### `MovieList`:

The `MovieList` component which fetches the movie data from the API and displays it in a grid with pagination. The user can filter the movies by type and search for movies by title, you can check every movies details as well and add mark it as your favourite

![MovieList](https://i.ibb.co/4NxSFYx/mov.png)
![MovieList](https://i.ibb.co/bQQV9nC/mov2.png)
![MovieList](https://i.ibb.co/pQ7y51s/mov3.png)


### `Jokes`:

The `Jokes` component which fetches some funny jokes data from the API and displays it in expandable cards

![Jokes](https://i.ibb.co/HhpMW7P/la.png)


## `Coding`:

The `Coding` component which fetches some Coding tutorials data from the API and displays it in cards

![Coding](https://i.ibb.co/m8KzBgb/co.png)


## `Games`:

The `Games` component which fetches some Games data with 3 different types (xbox, switch, play station) depending on query paramters from the API and displays it in cards and using [react-infinite-scroller](https://www.npmjs.com/package/react-infinite-scroller) for nice virtual scrolling

![Games](https://i.ibb.co/5kpXb0j/game.png)



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
