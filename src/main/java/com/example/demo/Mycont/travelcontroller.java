package com.example.demo.Mycont;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Myrepo.travelrepository;
import com.example.demo.pozo.travel;
@RequestMapping("/travel")
@CrossOrigin 
@RestController
public class travelcontroller {
	
	@Autowired
  travelrepository repo;
  
	//inserting values to table
  @PostMapping("/")
  public String insert(@RequestBody travel Travel) throws ClassNotFoundException, SQLException
  {
	  System.out.println(Travel);
	return repo.details(Travel);
	  
  }
	@GetMapping("/")	
	public List<travel> geet() throws ClassNotFoundException, SQLException
	{
		return repo.getDetails();
		
	}
	 
	
	//update column
	@CrossOrigin 
	@PutMapping("/p/{id}")
	public String update(@RequestBody travel tu,@PathVariable int id) throws ClassNotFoundException, SQLException
	{
		return repo.updateInfo(tu,id);
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable int id) throws ClassNotFoundException, SQLException
	{
		return repo.delete(id) +"deleted sucessfully";
		
	}
	
	
		
}
