# GetWeather

GetWeather is a website that shows the weather for certain cities. It allows the user to search for the weather in certain cities by querying the city name. The user has to enter the name of the city and hit go to get weather data of the particular city. 

## Synopsis 

The website uses gets weather data from the openweathermap.org API. After the user hits the go button, it fetches the weather data of the city from openweathermap.org. 

Tech Stack: NodeJS, Express 

API: https://openweathermap.org/current#list 

## Screenshots 


<img width="1440" alt="Screenshot 2022-05-20 at 1 21 15 PM" src="https://user-images.githubusercontent.com/70855191/169481359-b56e1438-bc58-460a-ad86-1552bb2bf4e7.png">

<img width="1440" alt="Screenshot 2022-05-20 at 1 21 23 PM" src="https://user-images.githubusercontent.com/70855191/169481461-59bec512-8eb5-41af-9799-9993868b7112.png">

<img width="1440" alt="Screenshot 2022-05-20 at 1 20 33 PM" src="https://user-images.githubusercontent.com/70855191/169481563-d46ac95e-23b5-4661-bbd9-23f92a1a2cef.png">
<img width="1440" alt="Screenshot 2022-05-20 at 1 20 47 PM" src="https://user-images.githubusercontent.com/70855191/169481593-6224199c-a27e-4f41-85c3-69fb3b65c39d.png">

The user has to type in the city name and hit the go button to get the weather data of the city. 

## Motivation 

While learning backend web development I wanted to create a real world project using the knowledge I acquired about backend web development and APIs which motivated me to work on this project. 

## Getting Started

For development, you would need Node.js installed in your enviornment. 

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
    
After installing node: 

To get the Node server running locally: 

* Clone this repo
* On the command line, navigate to the root directory of your package. cd /path/to/package.
* Initialise the npm by running the following command 

  ```
  npm init 
  ```
  
* After initialising npm, you would need to install express using npm. To install express using npm use the following command 

  ```
  npm install express
  ```
* After installing express, you can start the express server using the following command 

  ```
  node app.js
  ```
  
* After starting the server, you should get a message - "Server in running on port 3000" 

<img width="867" alt="Screenshot 2022-05-20 at 1 21 55 PM" src="https://user-images.githubusercontent.com/70855191/169484992-880e7000-0095-443f-b128-49cc862edf68.png">


## Dependencies 
* [expressjs]{https://github.com/expressjs/express}:  The server for handling and routing HTTP requests

## Application Structure 

* app.js - The entry point to our application. This file defines our express server. 


# Key Learnings

* Learnt about Node.js
* How to install Node.js on Mac
* Using the native node modules 
* npm package manager and installing external node modules
* express and creating first server with express 
* API - Application Programming Interface 
* API endpoints, paths and parameters
* API authentication
* JSON
* Making GET requests with Node HTTPS modules
* Parsing JSON
* Using express to render a website with live API data 
* Using body parser to parse POST requests with the server 

# Contact 

Santosh Shivam - [Twitter](https://twitter.com/santshvm?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) | [LinkedIn](https://in.linkedin.com/in/santosh-shivam)

# Acknowledgements

[Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp)

