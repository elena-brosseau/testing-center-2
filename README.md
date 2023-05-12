# Welcome to the Testing Center 📚

### 👋 Hi, my name's Elena. 

I manage a college testing center. We provide and proctor standardized tests, placement tests, and most of all, tests for students who use accommodations. We keep a busy schedule of appointments, and to help speed up our workflow I've built this single page scheduling application.

Built using JS, React, React Router, Redux, and Jest. 

Feel free to play around with the live site <a href='https://elena-brosseau.github.io/testing-center-2/' target='_blank' >here</a>.

##
<img src='readme/Screen Shot 2023-05-11 at 2.33.18 PM.png' width='600px'/>

## Project Status

The app is currently fully functional on desktop (900px or wider). You can view appointments by week, add and edit appointments, view detailed student info, and edit student information.

### Coming Soon

 - Backend functionality
 - Mobile functionality
 - Email API to send automated appointment messages

<br>

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

This was an idea I'd had for a long time, since I've spent a lot of time at my current job looking for ways to improve efficiency and lighten the workload. When I started taking Codecademy's unit on React and Redux, I figured this would be a good way to practice. I worked on the project throughout my time learning React, implementing new skills as I progressed.

I started this process by using the `create-react-app` boilerplate, then adding React Router, Redux, and the React Testing Library. I also used UUID v4 to generate unique keys. As I continue to learn back end technologies, my goal is to evolve this project into a practical program that can be implemented at my workplace.

One of the main challenges I ran into was trying to pass complex objects through state. I originally intended to use date objects and class instances to create the appointment objects, but had to find a way to achieve the same outcome using simple objects to avoid Redux errors. Breaking down everything into components according to the React mindset presented a learning curve, but it ultimately resulted in a much more versatile project.






