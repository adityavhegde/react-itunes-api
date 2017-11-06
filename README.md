# react-itunes-api
iTunes Music Search using React
This application makes used of the iTunes API to fetch data about an Artist and display it.

Installing and running the application
* Clone or download the project
* `npm install` to install the dependencies
* `npm start` to start the application

This application was created using `create-react-app` which ships with `Jest framework` for testing.
Airbnb's `Enzyme framework` has also been used. 

To run the tests
* `npm test`

## Problem Design

The search bar and the container (`ResultsBody component`) that displays results communicate with each other using events.
A query entered in the search bar fires an event. This event contains the search query which is passed to the container.
The container then updates it state and the changes are rendered.

## Input sanitization

No input sanitization has been done on the search-bar input.

As per react's documentation
> By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

