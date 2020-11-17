# websec-ctf-for-n00bs
This project is a Web Application that presents to Non-Engineers (n00bs) a Capture the Flag (CTF) game to facilitate the learning of basic Web Application Security concepts. Users will be guided through a series of Challenges (with significant hand-holding) where by activities will be presented on topics such as Cross-Site Scripting (XSS), SQL Injection, and other related topics. Users will read descriptions of common web vulnerabilities and be given the chance to practice in exploiting them. If the user successfully triggers the exploit, that particular "Flag" will be captured. Users can feel good about capturing flags and learning something -- Developers can feel good about spreading awareness about Web Security.

## Overview
* This app is a fork of https://github.com/rishavs/vanillajs-spa
* This web application is a Single-Page App (SPA) in structure
* All code is native HTML5/CSS3/ES6/python3
* No external frameworks, sources or buildtools are required
* The app can function if served as a static asset (like from a CDN), or when connected to an API (for features such as participant tracking / leaderboard stats)
* Web vulnerabilities are all "simulated" -- So nothing is actually being exploited. If an actual vulnerability is found (DOM-based or otherwise); that person wins the Internet =)
* Only Modern browsers which fully implement ES6 are supported.

## Requires (web content)
* Your choice of web server and a modern browser

## Requires (API)
* python3
* flask
* flask_cors

## Installation
* For development and testing environments, simply ```git clone``` this project, and execute ```run.py``` - The web application will be listening on tcp/8001 by default
* For production environments, see api/README.md and consider fronting the application with a web server such as nginx
* If an API is not wanted or required, simply serving this root directory with you choice of web server will present the user with an "offline" experience.

## Development Notes
* ES6 is used extensively - If older browser support is required, consider https://github.com/babel/babel
* Adding more Flags will require some refactoring in app.js despite the Flags being designed with modularity and extensibility in mind
* All HTML/JS/CSS is written taking CSP into consideration (That is to say, no inline scripts, styles are to be used)

## License
* MIT License; see license.txt for details.