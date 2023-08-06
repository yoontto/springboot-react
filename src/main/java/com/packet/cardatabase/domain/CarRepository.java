package com.packet.cardatabase.domain;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/*CrudRepository 상속해서 CRUD 기능 구현하기
 PagingAndSortingRepository는 기존의 CrudRepository를 상속받은 인터페이스로
 findAll에 정렬 기능/페이지 매김 옵션이 추가된 메소드를 제공한다.

 CrudRepository<엔티티클래스명, id필드형식타입>
 */
public interface CarRepository extends CrudRepository<Car, Long> {

    /* 단순 select문 */
    //색상으로 자동차를 검색
    List<Car> findByColor(String color);

    //연도로 자동차를 검색
    List<Car> findByYear(String year);


    /* 다중조건 select문 */
    //브랜드와 모델로 자동차를 검색
    List<Car> findByBrandAndModel(String brand, String model);

    //브랜드나 색상으로 자동차를 검색
    List<Car> findByBrandOrColor(String brand, String color);

    /* 정렬 :: order by */
    //브랜드로 자동차를 검색하고 년도 오름차순으로 정렬
    List<Car> findByBrandOrderByYearAsc(String brand);


    /* @Query 어노테이션 사용 */
    //sql문으로 쿼리를 만듦
    @Query("select c from Car c where c.brand like %?1")
    //@Query("select c from Car c where c.brand = ?1")
    List<Car> findByBrand(String brand);
}
