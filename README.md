<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/thuongb14/project-management-app">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Project Management App</h3>

  <p align="center">
    One app to get things done faster, more organised. <br />
    This is an app to manage your projects with ease and collaborate effectively.
    <br />
    <a href="https://github.com/thuongb14/project-management-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/thuongb14/project-management-app">View Demo</a>
    ·
    <a href="https://github.com/thuongb14/project-management-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/thuongb14/project-management-app/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#created-by">Created By</a></li>
        <li><a href="#user-stories">User Stories</a></li>
      </ul>
    </li>
    <li><a href="#tools">Tools</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#incomplete-tasks">Incomplete Tasks</a></li>
    <li><a href="#bugs--issues">Bugs & Issues</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/thuongb14/project-management-app)


Help manage all your projects, who's a part of them and what tasks haven't started, are in the pipeline and whats complete.

### Built With

* [![Javascript][Javascript]][Javascript-url]
* [![Express][Express]][Express-url]
* [![Node][NODE]][NODE-url]
* [![PostGres][PostGres]][PostGres-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Created By
* [Lizzy Truong](https://github.com/thuongb14)<br />
* [Matthew Lea](https://github.com/Lyrefox)<br />
* [Vishula Gamaetige](https://github.com/Vishula)


### User Stories
* As a user, I want to easily collaborate with others on a specific project<br />
=> Users can create projects & assign others to work with.

* As a user, I want to know what are my high-priority tasks & its due date.<br />
=> Users can choose priority type & due date. <br />
=> Tasks will appear in Date order, then High - Normal - Low priority.

* As an user, I want to manage the process of my tasks and projects<br />
=> Users can edit the status of the project from: "DOING" - "DONE"<br />
=> Users can edit the status of the task from "TO DO" - "DOING" - "DONE"

### Tools
* [Trello][Trello-URL]
* [Excalidraw][Excali-URL]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These are some prequisates and installation instructions if you clone the project to your local machine.

### Prerequisites

These are the prerequisate software needed for app the run locally.
* Node
  head to node.js and install the current LTS build
* PostGreSQL
  head to postgresql.org and download the latest version


### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:thuongb14/project-management-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create PostGresql database
    ```sh
    createdb project3_pma
    ```
5. import database tables
    ```sh
    psql project3_pma < ./database/schema.sql
    ```
6. import sample data into tables
    ```sh
    psql project3_pma < ./database/seed.sql 
    ```
7. start local server
    ```sh
    npm start
    ```
8. enter localhost:3000<br />
    http://localhost:3000
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- ROADMAP -->
## Roadmap

- [✅] Select Project Management tool - Trello
    - [✅] Create and Assign Tasks
- [✅] Create Wireframe of Project
- [✅]  User Stories
- [✅] Create Basic Files
- [✅] Setup API/Routes
- [✅] Create Navbar and landing Page
- [✅] Login and Sign Up Page
    - [✅] Guest Login Button (Potential Employers Use Only) 
- [✅] Dashboard show all projects
    - [✅] Delete Projects
    - [✅] Edit Projects
    - [✅] create projects
        - [✅] Project tasks
        - [✅] Add tasks
    - [ ] Add members to projects
    


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Incomplete Tasks -->
## Incomplete Tasks
- Adding New Members to projects

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Bugs & Issues -->
## Bugs & Issues
- Getting Project Delete button to work, had some issues parsing project id from front end to back end.
- Create project button responding with 404 after moving route to proper js file. Issue is now fixed.
- Deleting Projects that had tasks, caused server to crash. Issue is now fixed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/thuongb14/project-management-app.svg?style=for-the-badge
[contributors-url]: https://github.com/thuongb14/project-management-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/thuongb14/project-management-app.svg?style=for-the-badge
[forks-url]: https://github.com/thuongb14/project-management-app/network/members
[stars-shield]: https://img.shields.io/github/stars/thuongb14/project-management-app.svg?style=for-the-badge
[stars-url]: https://github.com/thuongb14/project-management-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/thuongb14/project-management-app.svg?style=for-the-badge
[issues-url]: https://github.com/thuongb14/project-management-app/issues
[license-shield]: https://img.shields.io/github/license/thuongb14/project-management-app.svg?style=for-the-badge
[license-url]: https://github.com/thuongb14/project-management-app/blob/master/LICENSE.txt
[product-screenshot]: images/project3_pma.png
[Javascript]: https://img.shields.io/badge/Javascript-js-brightgreen
[Javascript-url]: https://www.javascript.com/
[Express]: https://img.shields.io/badge/Express-js-brightgreen
[Express-url]: https://expressjs.com/
[PostGres]: https://img.shields.io/badge/PostGres-SQL-red
[PostGres-URL]: https://www.postgresql.org/
[NODE]: https://img.shields.io/badge/NODE-js-brightgreen
[NODE-URL]: https://nodejs.org/en/
[Trello-URL]: https://trello.com/b/P8IMg6JQ/project-app
[Excali-URL]: https://excalidraw.com/#room=e6eda6cd11c5db0c1ca1,EwLYk6gnGaxWP4aLguUy0w