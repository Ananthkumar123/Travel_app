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
import com.example.demo.pozo.travel;

@Repository
public class travelrepository {

	public String details (travel t) throws ClassNotFoundException, SQLException
	{
		String url ="jdbc:mysql://localhost:3306/crud"; //
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		String a = "insert into crud.travel values(?,?,?,?,?,?,?,?)";
		Connection con = DriverManager.getConnection(url,"root","root");
		
		PreparedStatement ps =con.prepareStatement(a); 
		
		ps.setInt(1,t.getId());
		ps.setString(2,t.getName());
		ps.setString(3,t.getLastname());
		ps.setInt(4,t.getAge());
		ps.setString(5,t.getGender());
		ps.setString(6,t.getDate());
		ps.setDouble(7,t.getMobile());
		ps.setString(8,t.getEmail());
		
		ps.executeUpdate();
		
		System.out.println(t);
		
		con.close();
		return "insertion success";
		
		
	}
	public String updateInfo(travel tu,int id) throws SQLException, ClassNotFoundException
	{
    String url ="jdbc:mysql://localhost:3306/crud"; //
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		String a = "update travel set name=?,lastname=?,age=?,gender=?,date=?,mobile=?,email=? where id=?;";
		
		Connection con = DriverManager.getConnection(url,"root","root");
		
		PreparedStatement ps =con.prepareStatement(a); 
		
	
		ps.setString(1,tu.getName());
		ps.setString(2,tu.getLastname());
		ps.setInt(3,tu.getAge());
		ps.setString(4,tu.getGender());
		ps.setString(5,tu.getDate());
		ps.setDouble(6,tu.getMobile());
		ps.setString(7,tu.getEmail());
		ps.setInt(8,id);
		
		ps.executeUpdate();
		
		return "update succesful";
	}
	
	public String delete(int n) throws ClassNotFoundException, SQLException
	{
		String url ="jdbc:mysql://localhost:3306/crud";
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		String d ="delete from crud.travel where id=?";
		Connection con = DriverManager.getConnection(url,"root","root");

        PreparedStatement ps =con.prepareStatement(d); 
		
		ps.setInt(1,n);
		 		
		ps.executeUpdate();
		
		return "deleted sucessfully";
		
	}
	
public List<travel> getDetails() throws ClassNotFoundException, SQLException{
		
		ArrayList<travel> al = new ArrayList<>();
		
		String url ="jdbc:mysql://localhost:3306/crud"; //
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		String a = "SELECT * FROM travel;";
		Connection con = DriverManager.getConnection(url,"root","root");
		
		PreparedStatement ps =con.prepareStatement(a); 
		
		ResultSet rs = ps.executeQuery();
		
		while(rs.next()) {
			
			travel tu = new travel();
			
			tu.setId(rs.getInt(1));
			tu.setName(rs.getString(2));
			tu.setLastname(rs.getNString(3));
			tu.setAge( rs.getInt(4));
			tu.setGender(rs.getString(5));
			tu.setDate(rs.getString(6));
			tu.setMobile(rs.getDouble(7));
			tu.setEmail(rs.getString(8));
			al.add(tu);
			
		}
		
		return al;
  } 
}
