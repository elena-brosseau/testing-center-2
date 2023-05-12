# Welcome to the Testing Center 📚

### 👋 Hi, my name's Elena. 

I manage a college testing center. We provide and proctor standardized tests, placement tests, and most of all, tests for students who use accommodations. We keep a busy schedule of appointments, and to help speed up our workflow I've built this single page scheduling application.

Built using JS, React, Redux, and Jest. 

Feel free to play around with the live site <a href='https://hellogonzo.github.io/testing-center-2/' target='_blank' >here</a>.

##
<img src='readme/Screen Shot 2023-05-11 at 2.33.18 PM.png' width='600px'/>

## Project Status

The app is currently fully functional on desktop (900px or wider). You can view appointments by week, add and edit appointments, view detailed student info, and edit student information.

### Coming Soon

 - Backend functionality
 - Mobile functionality
 - Email API to send automated appointment messages

<br>

##

<img src='readme/Screen Shot 2023-05-12 at 1.35.53 PM.png' width='40%' align='left'/>
<img src='readme/Screen Shot 2023-05-12 at 1.37.27 PM.png' width='40%'/>

## Installation and Setup Instructions 

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/ideas`  

## Reflection

  - What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?
      - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.  

#### Example:  

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.  

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.






