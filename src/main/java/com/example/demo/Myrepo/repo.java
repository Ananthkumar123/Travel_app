package com.example.demo.Myrepo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.pozo.Laptop;

@Repository
public class repo {

	public String postDetails(Laptop x) throws SQLException, ClassNotFoundException
	{
	
	String url ="jdbc:mysql://localhost:3306/crud"; //
	
	Class.forName("com.mysql.cj.jdbc.Driver");
	
	String a = "insert into crud.mobiles values(?,?,?,?)";
	Connection con = DriverManager.getConnection(url,"root","root");
	
	PreparedStatement ps =con.prepareStatement(a); 
	
	ps.setInt(1, x.getId());
	ps.setString(2,x.getName());
	ps.setString(3,x.getBrand());
	ps.setInt(4, x.getPrice());
	
	ps.executeUpdate();
	System.out.println(x);
	con.close();
	return "added succes";
	}
	
	public List<Laptop> getDetails() throws ClassNotFoundException, SQLException
	{
		
		ArrayList<Laptop> al = new ArrayList<>();
		
		String url ="jdbc:mysql://localhost:3306/crud"; //
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		String a = "SELECT * FROM crud.mobiles;";
		Connection con = DriverManager.getConnection(url,"root","root");
		
		PreparedStatement ps =con.prepareStatement(a); 
		
		ResultSet rs = ps.executeQuery();
		
		while(rs.next()) {
			
			Laptop l = new Laptop();
			l.setId(rs.getInt(1));
			l.setName(rs.getString(2));
			l.setBrand(rs.getString(3));
			l.setPrice(rs.getInt(4));
			al.add(l);
			
		}
		
		return al;
	}
	
}


