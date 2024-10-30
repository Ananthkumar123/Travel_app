package com.example.demo.Myrepo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.stereotype.Repository;

import com.example.demo.pozo.Hospital;

@Repository
public class hospitalrepo {

	public void host(Hospital h) throws SQLException, ClassNotFoundException
	{
		String url ="jdbc:mysql://localhost:3306/crud"; //
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		String a = "insert into crud.hospital values(?,?,?,?,?,?)";
		Connection con = DriverManager.getConnection(url,"root","root");
		
		PreparedStatement ps =con.prepareStatement(a); 
		
		ps.setInt(1, h.getId());
		ps.setString(2,h.getName());
		ps.setString(3,h.getGender());
		ps.setInt(4,h.getAge());
		ps.setString(5,h.getSymtoms());
		ps.setDouble(6, h.getMobile());
		
		ps.executeUpdate();
		System.out.println(h);
		con.close();
		System.out.println( "added succes");
		
	}
}
