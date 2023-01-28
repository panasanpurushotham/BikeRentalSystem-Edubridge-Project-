package com.EduBridge;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
public class AddbikeModel {
	@Id
	int id;
	String img;
	String brand;
	String model;
	String price;
	
public AddbikeModel() {
		
	}
public AddbikeModel(int id, String img, String brand, String model, String price) {
	super();
	this.id = id;
	this.img = img;
	this.brand = brand;
	this.model = model;
	this.price = price;
}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	

}
