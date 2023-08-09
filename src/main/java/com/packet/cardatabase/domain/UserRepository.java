package com.packet.cardatabase.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

//@RepositoryRestResource 는 자동화되는 RESTful API를 커스터마이징하기 위해 사용되는 어노테이션
//자동으로 crud기능에 추가되는 것 막기
@RepositoryRestResource(exported = false)
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
