package com.example.demo.Mycont;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Myrepo.hospitalrepo;
import com.example.demo.pozo.Hospital;

@RestController
public class hospital_control {
  
	@Autowired
	hospitalrepo repo;
	
	@PostMapping("/hossave")
	public void add(@RequestBody Hospital hptldata) throws ClassNotFoundException, SQLException
	{
		System.out.println(hptldata);
		repo.host(hptldata);
		
	}
}
