package com.packet.cardatabase.domain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Owner {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ownerId;
    private String firstname, lastname;

    //일대다 관계 정의
    //mappedBy : car클래스의 owner 필드가 이 관계의 기본키임을 지정
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
    private List<Car> cars;

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }

    /* 다대다 관계 정의 */
    /* @ManyToMany(cascade = CascadeType.PERSIST)  //현재 엔티티가 영속화되면 연관 엔티티도 영속화되어 저장
    @JoinTable(name = "car_owner"                           //name : 테이블 이름 지정
            , joinColumns = {@JoinColumn(name="ownerid")}   //joinColumns : 현재 엔티티와 조인 테이블간의 매핑 지정
            , inverseJoinColumns = {@JoinColumn(name = "`id`")}) //inverseJoinColumns : 관계된 엔티티와 조인 테이블간의 매핑 지정
    private Set<Car> cars = new HashSet<Car>();

    public Set<Car> getCars() {
        return cars;
    }

    public void setCars(Set<Car> cars) {
        this.cars = cars;
    }*/

    public Owner() {}

    public Owner(String firstname, String lastname) {
        super();
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(long ownerId) {
        this.ownerId = ownerId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
