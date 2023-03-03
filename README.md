# React-Portfolio

## Modern Development with React

???

This project is to create a command-line application that dynamically generates a professional README.md file from a user's input. Check out this [README](https://github.com/SoradaW/Professional-README-Generator/blob/main/demoREADME.md) as an example.
 
## Application's functionality

* The porfolio built using following technologies:
  * `React.js`
  * Navigation using `React Router`
  * Style with `React-Bootstrap`

* Portfolio contain the following information:
  * Name
  * Links to my:
    * GitHub profile
    * LinkedIn page
    * Email address
    * Phone number (optional)
    * CV (in PDF format)
    * List of projects that contain following information:
      * Project title
      * Link to the deployed version
      * Link to the GitHUb repository
      * GIF or screenshot of the deployed application

## Component Content

* App:
  * Will be top-level component and render all necessary child components

* Header:
  * Will be rendered across every page component of the site and contain a Navbar

* Home page:
  * This should be a welcome landing page that contains:
    * My Name
    * A headshot of me (or an avatar)
    * My brand statement
    * Indication that this is my portfolio site

* Projects page:
  * Render six instances of the Project component dynamically
  * Should store the project details data in a JSON file and import it into my project

* Project:
  * Should be a reusable component that ingests JSON data as props and renders a single instance for each project
  * Should utilize Router props to properly render the right project based on user selection
  * Should render the following info:
    * Project title
    * Link to the deployed version
    * Link to the GitHub repository
    * GIF or screenshot of the deployed application

* Contact page:
  * Will include contact information:
    * Email address
    * Link to a PDF version of my CV
    * Link to my GitHub profile
    * Link to my LinkedIn page
    * Will have a contact form for handling events

## Review

* A walkthrough video demonstrating the functionality of the application

![Demo](/images/Demo-README-Generator.gif)

* A sample README.md file for a project repository generated using the application click [here](https://github.com/SoradaW/Professional-README-Generator/blob/main/demoREADME.md)

* Any questions please contact sorada.wright@gmail.com

## License

This project under the terms of MIT License

---

© 2023 | Sorada Wright | All Rights Reserved.
