# Jopwell Github Repository Search

Github repository search UI with form, search results display, and pagination links

Mobile        |  Laptop 
:-------------------------:|:-------------------------:
<img src="/src/assets/github-search-mobile.png" alt="mobile-search-form">     |  <img src="/src/assets/github-search-form.png" alt="search-form">
   
 <img src="/src/assets/github-search-results-pagination.png" alt="search-results" align="right" width="50%">

***

## Project Notes  

### Challenges/Key Decisions  

* __Implementing validation on blur__

   -While we wanted to be able to validate user input in our form and clearly indicate what was wrong with a helpful inline message, we found it to be bad UX to begin validating and showing errors as soon as the user started typing.  This would essentially show an error message as soon as the User clicked on the input. We solved this issue by creating a "touched" object in state with keys corresponding to inputs in order to keep track of whether an input had been touched by the user yet. 

   -Attaching this to the _onBlur_ event allowed us to trigger validation as soon as user clicked or tabbed away after clicking or focusing on input with the keyboard for the very first time. We also made our validation functions flexible so if we were to add more validations and/or inputs in the future, these functions will stay, in essence, the same and require minimal tweaking in order to apply them to other inputs  

* __Using a Slider Range component as input for Stars parameter__

  -We are aware of the **Stars** input is described in the requirements as a text box with validation for correct syntax to submit as a search query param inside the url of the GET request to Github.  We found this implementation to be incredibly bad UX however, and a field that would be plagued with user errors if left as a textbox.  Github describes the expected input as being either _one_ number (to search repos with **exactly** that number of stars) or _two_ numbers separated by a *colon* to search a range, which meant we needed the user to enter the correct syntax or this input (and the form) would not work. 

  -While we can definitely show error messages to guide the user into inputting the right syntax, we decided that making this input "User-proof" would be better overall for the future maintenance of this element.  Based on this logic, we decided instead to use a range slider to clearly visually indicate to the user the nature of this parameter and how it would be used to search.  This presentation, coupled with built-in default values for this input, virtually guarantees that the user will not be able to enter incorrect values for this input.  We believe the likelihood of a user searching for a repo based on the _precise_ number of stars is also very low, so while it might be a little less obvious how to enter just ONE number for this parameter, we were ok with the trade-off. Additionally, the input still accomodates this use case if the user brings upper and lower bound indicators together to converge on one desired number.  

  -We have also implemented text box validation on the **Text** box to demonstrate our ability to validate user input and make this a required field so we can have some very needed user input (besides stars) to search with.

* __Disabling SEARCH button until form was valid__

  -This was part of our overall general approach to minimize user input error whenever possible.  We have visually indicated when the form is valid and ready to be submitted by way of a pseudo-element that shows a hover effect on the SEARCH button when it is valid and no effect when it is not.

* __Extracting JSX into separate components__

  -Whenever possible we broke out our elements into smaller components and used stateless functional components for displaying data in order to better manage our application. Our use of stateless functional (OR decorative) components makes testing our UI a lot easier and minimizes developer errors, which is always a win.  We initially separated components into container and presentational components to keep track of state and house the logic needed for a given top-level component all in one place, passing down any needed functions or state as props. This worked well until our state grew so large that it was better to keep track of it all in one place.
  
* __Implementing Redux__

  -Redux helped immensely in keeping track of our application's state since it started to become quite cumbersome by the end.  As we continued to break out components into further sub-components and had to pass down props through multiple levels, it became clear that Redux was a necessary step. We had already separated stateless functional components from stateful container components, so the big tradeoff here was increasing complexity (and the time to implement it)for the chance to centralize and more effectively manage state.  It takes significantly more time to build the Redux architecture out, but once you do scaling becomes a lot easier. 
  
  It was also a lot easier to share actions between containers.  We needed to let the SearchResults container that we had received our content to display so it could do its job of displaying it. In our original architecture this would have been very time-consuming as we would have had to pass a function down through our form components to where we were making our API call in order to update state in our top-level App component, which would then have to pass the results down as props through the levels of the SearchResults components in order to display.  With Redux however, we were able to emit an action from the form which the Search reducer was subscribed to and it would automatically update the results array in state, triggering a rerendering of the SearchResults component to display the results and side-stepping having to pass down props through two main sub-component hierarchies.  I would call that a BIG win.

### Possible Improvements/Optimizations

* __Loading indicator__

  -We implemented the logic for a loading indicator but did not have time to perfect it. Redux architecture also made this pretty easy to implement from state.  As it stands, User Experience is minimally impacted by its absence however as the lag between API call and response is very small. 

* __Query param routing__

  -Since we are using a single-page application, User Experience is minimally impacted by its absence, but would be enhanced by implementing this via React Router in order to be able to move backwards and forwards through the User's search history via the `back` and `forward` buttons on the browser. We would use Redux combined with React Router v.4 in order to implement this so we can keep track of state, including history, all in one place and make it easier to scale the app.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Node 8.9.4
NPM 5.8.0
```

### Installing

To run a copy of this project locally on your machine, follow these steps: 

1. Install NodeJS and NPM on your local mac using Homebrew (follow [these directions](https://docs.brew.sh/Installation) to install [homebrew](https://docs.brew.sh/Installation) if you do not already have it)

```
$ brew install node
```
   OR on linux
```
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

2. Verify NodeJS and NPM are properly installed

```
$ node -v
v8.9.4
$ npm -v
5.8.0
```
 
3. Download the React project source code from GitHub at  https://github.com/izzydoesit/interviewkit

```
$ git clone https://github.com/izzydoesit/interviewkit
```
 
4. Install all required npm packages by running npm install from the command line in the project root folder (where the package.json is located).

```
$ cd interviewkit
$ npm install
```
 
5. Start the application by running npm start from the command line in the project root folder, this will start the webpack dev server which serves the example from port 3000 on your local machine.

```
$ npm start
```
 
6. Browse to the url http://localhost:3000 on any web browser to test the application


7. Enter any search term and click 'SEARCH' to retrieve matching repos from Github

## Deployment

Follow the steps in this [blog post](https://blog.heroku.com/deploying-react-with-zero-configuration) to deploy live to Heroku

***

## Built With

* [Create React App](https://github.com/facebookincubator/create-react-app).
* [Bootstrap](https://bootstrap.org/) - CSS Styling library
* [Rc-slider](https://www.npmjs.com/package/rc-slider) - Slider UI library

## Authors

* **Israel D. Matos** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hrishi Mittal
* Jason Watmore
* Dan Abramov
