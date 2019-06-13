# Weather add done with React

## Requirements

Create a simple React + Redux app that allows a user to enter a location to see the weather forecast for that location.

Your app should have an input which allows the user to enter a town/city (e.g London).

Upon the user submitting the input, your app will connect to a weather API (e.ghttps://www.openweathermap.org/api ), retrieve the forecast for that city and store it in the Redux store.

The user will be shown the following information from the data for each of the next 5 days:

[Day]

e.g Monday

[min temp]

e.g 23°C/73°F

[max temp]

e.g 23°C/73°F

[conditions]

i.e clear sky or light snow

[wind]

e.g 27kmh/17mph WNW

The user should then be able to select a day interactively to drill-down and see a more detailed forecast for that day (e.g. 3-hourly data).

In addition we would like you to showcase your front end presentation skills for this service.

Technologies
React

Redux

ES6

Webpack

Other info
You may set up your project with create-react-app or any other boilerplate/starter kit.

Deliverables
The provided solution should contain a README.md with instructions on how to test, build and run the project. Also in the README, please provide any assumptions you have made.

Please make this available on the web - either via Github, Bitbucket or a downloadable zip from an online drive due to email security restrictions.

## Installation

Install the node dependencies

### `npm install`

Copy the .env.example to .env

Edit the file to replace `WEATHER_APPID=<KEY_HERE>` with your own openweathermap key

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Assumptions

Because the 5days temp/temp_min/temp_max/weather are not available in the free version of the API, I try to calculate them.

temp_min: I find for the day, the record with the lowest temp
temp_max: I find for the day, the record with the highest temp
temp: I average the total temparatures of the day
weather: I find the worth weather of the day using the code
