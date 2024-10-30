package com.example.demo.pozo;

public class Hospital {
	int id;
	String name;
	String gender;
	int age;
	String symtoms;
	Double mobile;
	
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	public String getSymtoms() {
		return symtoms;
	}
	public void setSymtoms(String symtoms) {
		this.symtoms = symtoms;
	}
	public Double getMobile() {
		return mobile;
	}
	public void setMobile(Double mobile) {
		this.mobile = mobile;
	}
	@Override
	public String toString() {
		return "Hospital [id=" + id + ", name=" + name + ", gender=" + gender + ", age=" + age + ", symtoms=" + symtoms
				+ ", mobile=" + mobile + "]";
	}

}
