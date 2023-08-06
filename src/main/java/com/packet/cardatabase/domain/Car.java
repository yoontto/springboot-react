package com.packet.cardatabase.domain;

import javax.persistence.*;

@Entity
public class Car {

    //다대일 관계 정의 : LAZY(지연검색)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private Owner owner;

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    // 엔티티 클래스는 고유 ID를 가져야 함. 현재는 자동으로 생성하도록 AUTO 걸어줌
    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String brand, model, color, registerNumber;

    //error point :: year는 sql에서 예약어이기 때문에 꼭 이름 설정 해줘야함
    @Column(name = "`YEAR`")
    private int year;
    private int price;

    //데이터베이스의 컬럼명은 expaination이고 코드에서 사용하는 이름은 description이다.
    //@Column(name = "explanation", nullable = false, length = 512)
    //private String description;

    public Car() {}

    //자동으로 id 생성하므로 생성자에 id 필드 필요없음
    public Car(String brand, String model, String color, String registerNumber, int year, int price) {
        super();
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.registerNumber = registerNumber;
        this.year = year;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getRegisterNumber() {
        return registerNumber;
    }

    public void setRegisterNumber(String registerNumber) {
        this.registerNumber = registerNumber;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

}
