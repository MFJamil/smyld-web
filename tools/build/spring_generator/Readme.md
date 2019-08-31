# Spring Generator

This python program generates a maven based full interactive project that includes Spring Boot in the backend and one of the web based frameworks (Angular, Vue or React) in the frontend, the generated project will include an already exchanged message with the backend that will get displayed on the frontend startup page.

---
### Usage

usage: springGenerator.py [-h] [-t {angular,vue,react}] -n NAME -g GROUP
                          [-s SERVERPORT] [-c CLIENTPORT] [-d DIR]


  * -t : to specify the type of the web based framework, default is Angular, the values that can be supplied are mentioned in the help command line above.
  * -n : the name of the generated project
  * -g : the group, usually it will be the package name that the generated project will hold.
  * -s : the server port number, this will be the entry port number that the backend system will open, running the final project after deployment will address this port number (default is 8090)
  * -c : the client port number, this is the port number that can be used in development mode, default is 4200.
  * -d : the generated project main path, default path is the current active directory that this python program is invoked at.    
  
 ---
 
 **_IMPORTANT_**: This program is only tested under linux systems so far 
