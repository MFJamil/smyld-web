package ${app.package};

import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:${cli.port}",maxAge = 3600)
@RestController
@RequestMapping("/api")

public class RestManager{
	
	@GetMapping
	public Message getServerMessage(){
		return new Message("This is the server message from Spring Boot");
	}
}
