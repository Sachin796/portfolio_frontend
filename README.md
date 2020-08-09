### Portfolio Website Frontend

http://portfoliowebsitereacthosting.s3-website-us-east-1.amazonaws.com/

## Overview

- The portfolio website(frontend) includes all the information regarding my background,skills,contact details etc.

- The Website is completely responsive using bootstrap.

## Basic Functionalities

- Provides basic information.

- Ability for a user to send Email with their contact details and their queries.

- Google Captcha to verify whether the user is a robot or not.

- Downloadable Resume.

## Technical Functionalities

- The website is configured with a CI tool called CircleCI for testing and verifying the code before pushing to master.

- The website consists basic testing of frontend components using Jest and Javascript compiler called Babel for configuring jest and its enviornment.

- The website consists of ability to create docker image of the project and run it as containers.

- The FrontEnd part is deployed on AWS S3 bucket where the output is stored in a statically hosted S3 bucket obtained using AWS CodePipeline.

## Tech Used

- ### Development

   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/css.svg" width="150" height="100">
   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/html-5.svg" width="150" height="100">
   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/java-script.svg" width="150" height="100">
   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/bootstrap.svg" width="150" height="100">
   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/react.svg" width="150" height="100">

- ### Testing

   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/jest.png" width="200" height="150">
   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/babel.png" width="200" height="150">

- ### Deployment and CD

   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/s3.jpg" width="250" height="200">
   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/codepipeline.png" width="250" height="200">

- ### CI and Miscellaneous

   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/recaptcha.png" width="150" height="150">
   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/docker.svg" width="150" height="150">
   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/sendgrid.png" width="150" height="150">
   <img src="https://github.com/Sachin796/portfolio_frontend/blob/master/public/images/circleci.svg" width="150" height="150">

## Getting Started

1. Clone the repository and run command npm install

2. Setup a enviornment variables as follows

   - REACT_APP_LINK (Link to hosted backend to communicate)
   - REACT_APP_INTROIMG (Link to profile Image on S3)
   - REACT_APP_PROJECTIMG1 (Link to project Image 2 on S3)
   - REACT_APP_PROJECTIMG2 (Link to project Image 1 on S3)
   - REACT_APP_SITE_KEY (Site key for recaptcha)

3. Setup account in [AWS](https://aws.amazon.com/s3/) and enable S3 Storage services, obtain Access and Secret Access keys. Also create an S3 bucket

4. Start the application using npm run start:dev

5. Test the application by running the command npm test

See the [portfolio backend](https://github.com/Sachin796/portfolio_backend)
