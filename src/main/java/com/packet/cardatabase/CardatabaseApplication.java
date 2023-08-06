package com.packet.cardatabase;

import com.packet.cardatabase.domain.Car;
import com.packet.cardatabase.domain.CarRepository;
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

	@Autowired
	private CarRepository carRepository;

	public static void main(String[] args) {
		//주석 추가시 재시작
		SpringApplication.run(CardatabaseApplication.class, args);
		logger.info("Application Started");
	}

	@Override
	public void run(String... args) throws Exception {
		carRepository.save(new Car("Ford", "Mustang", "Red", "ADF-1121", 2021, 59000));
		carRepository.save(new Car("Nissan", "Leaf", "White", "SSJ-3002", 2019, 29000));
		carRepository.save(new Car("Toyota", "Prius", "Silver", "KKO-0212", 2020, 39000));


		//모든 자동차를 가져와 콘솔에 로깅
		for (Car car : carRepository.findAll()) {
			logger.info(car.getBrand() + " " + car.getModel());
		}
	}
}
