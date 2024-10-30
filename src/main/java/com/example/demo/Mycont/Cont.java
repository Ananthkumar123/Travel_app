package com.example.demo.Mycont;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Myrepo.repo;
import com.example.demo.pozo.Laptop;

@RestController
@CrossOrigin
public class Cont {
	
	
	@Autowired
	  private repo r;
	 
	 @PostMapping("/save")
	  public String save(@RequestBody Laptop laptop) throws ClassNotFoundException, SQLException
	  {
		
		 System.out.println(laptop);
		
		 return r.postDetails(laptop);
	  }
	 
	 @GetMapping("/info")
	 public List<Laptop> info() throws ClassNotFoundException, SQLException{
		 
		 return r.getDetails();
	 }

	
}


