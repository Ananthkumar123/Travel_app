package com.example.demo.pozo;

public class travel {

	private int id;
	private String name;
	private String lastname;
	private int age;
	private String gender;
	private String date;
	private double mobile;
	private String email;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public double getMobile() {
		return mobile;
	}
	public void setMobile(double mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "travel [id=" + id + ", name=" + name + ", lastname=" + lastname + ", age=" + age + ", gender=" + gender
				+ ", date=" + date + ", mobile=" + mobile + ", email=" + email + "]";
	}
	
	public travel(int id, String name, String lastname, int age, String gender, String date, double mobile,
			String email) {
		super();
		this.id = id;
		this.name = name;
		this.lastname = lastname;
		this.age = age;
		this.gender = gender;
		this.date = date;
		this.mobile = mobile;
		this.email = email;
	}
	public travel() {
		super();
		// TODO Auto-generated constructor stub
	}
	 
	
}
