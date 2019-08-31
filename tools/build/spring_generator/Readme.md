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
 
 ```diff 
 - IMPORTANT 
 ``` 
 _This program is only tested under linux systems so far_ 
 
 ---
 ### Examples
 
 Issuing the following command will create a project called 'CustomApp' with a group/package 'com.smyld.app', setting the port number to  8091 and the angular front end development port to 4500
 
 ```bash
 springGenerator.py -t angular -n CustomApp -g com.smyld.app -s 8091 -c 4500
 ```
 
 You need to run a normal maven build command from within the generated folder to build the backend and frontend projects.
 
 Upon opening the projects with your favorite editor, you can see the line below :
 ```typescript
 this.http.get<Message>("/api").subscribe(servMessage => this.serverMessage = servMessage.text);
 ```
 inside the app.component.ts file. The frontend is sending a message request from the backend, on the backend project, you will find where this message is processed, see the line below:
 
 ```java
 	@GetMapping
	public Message getServerMessage(){
		return new Message("This is the server message from Spring Boot");
	}
```

The same applies for the other two frameworks (i.e. React and Vue), however the APIs used will be different.
_It is important to note that the generated frontends are all written in Typescript!_
 
---

## Contributors notice
Feel free to extend the generator. The maven functionality allow you to template the created folders, the created file name as well as the created file contents. Take a look at the already available templates to have an idea on how it is created.


