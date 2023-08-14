package com.packet.cardatabase;

import com.packet.cardatabase.domain.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class CardatabaseApplication implements CommandLineRunner {
	/*
	CommandLineRunner 인터페이스?
	: 애플리케이션을 완전히 시작하기 전에 추가 코드를 실행할 수 있음
	*/

	private static final Logger logger = LoggerFactory.getLogger(CardatabaseApplication.class);

	private final CarRepository carRepository;
	private final OwnerReposotiry ownerReposotiry;
	private final UserRepository userRepository;

	@Autowired
	public CardatabaseApplication(CarRepository carRepository
			, OwnerReposotiry ownerReposotiry
			, UserRepository userRepository) {
		this.carRepository = carRepository;
		this.ownerReposotiry = ownerReposotiry;
		this.userRepository = userRepository;
	}


	public static void main(String[] args) {
		//주석 추가시 재시작
		SpringApplication.run(CardatabaseApplication.class, args);
		logger.info("Application Started");
	}

	@Override
	public void run(String... args) throws Exception {
		//소유자 객체를 추가하고 db 저장
		Owner owner1 = new Owner("John", "Johnson");
		Owner owner2 = new Owner("Mary", "Robinson");
		ownerReposotiry.saveAll(Arrays.asList(owner1, owner2));

		//자동차 객체를 추가하고 db 저장
		Car car1 = new Car("Ford", "Mustang", "Red", "ADF-1121", 2021, 59000, owner1);
		Car car2 = new Car("Nissan", "Leaf", "White", "SSJ-3002", 2019, 29000, owner2);
		Car car3 = new Car("Toyota", "Prius", "Silver", "KKO-0212", 2020, 39000, owner2);
		carRepository.saveAll(Arrays.asList(car1, car2, car3));

		//모든 자동차를 가져와 콘솔에 로깅
		for (Car car : carRepository.findAll()) {
			logger.info(car.getBrand() + " " + car.getModel());
		}

		//사용자 이름 : user, 암호 : user
		userRepository.save(new User("user","$2a$12$ab4xEowJfVi6.L.S1nCvvuAjbrQobvJ4p7ybxwhQfUmB1ox8VLRNC", "USER"));
		//사용자 이름 : admin, 암호 : admin
		userRepository.save(new User("admin","$2a$12$5SYVl20JV/vVIQx6vSfkfeNHpUnTo647D/7ROtAP/u1Q1I/4xTcJ2", "ADMIN"));

	}
}
