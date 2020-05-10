# websec-ctf-for-n00bs
This project is a Web Application that presents to Non-Engineers (n00bs) a Capture the Flag (CTF) game to facilitate the learning of basic Web Application Seurity concepts. Users will be guided through a series of Chanllenges (with significant hand-holding) where by activities will be presented on topics such as Cross-Site Scripting (XSS), SQL Injection, and other realted topics. Users will read descriptions of common web vulnerabilities and be given the chance to practice in exploiting them. If the user succesfully triggers the exploit, that particular "Flag" will be captured. Users can feel good about capturing flags and learning something -- Developers can feel good about spreading awareness about Web Security.

## Overview
* This app is a fork of https://github.com/rishavs/vanillajs-spa
* This web application is a Single-Page App (SPA) in structure
* All code is native HTML5/CSS3/ES6
* No external frameworks, sources or buildtools are required
* The app can function if served as a static asset (like from a CDN), or when connected to an API (for features such as participant tracking / leaderboard stats)
* Web vulnerabilities are all "simulated" -- So nothing is actually being exploited. To determine if a flag has been captured, the web app looks for (regexp) string matches for the test in question, or the participant answers with the correct multiple choice response. If an actual vulnerability is found (DOM-based or otherwise); that person wins the Internet =)

## Installation
* As this is a static, client-based web app, all that's required are the files and a web server for which to access them.
* $ git clone ${this_project_url}; cd websec-ctf-for-n00bs
* Then serve the directory - Easiest is with Python:
* python3 -m http.server 8001
* Then access with a web browser at http://localhost:8001/

## Development
* Use whatever text editor / IDE / Build tool chain you want. Just keep your build tool / IDE artifact files outta my project before commiting ( Update .gitignore )
* This application is written heavily with ES6. That means lots of const/let, arrow functions, async/await promises, modules and the like. I suggest you read up on it: <https://webapplog.com/es6/>
* app.js is a Main Application. It should not be edited really except for line 5 to toggle DEVMODE on or off
* If you are just developing the CTF, your main (and perhaps, only) focus will be the .js files in /view/pages/ctf/

## License
* MIT License; see license.txt for details.
