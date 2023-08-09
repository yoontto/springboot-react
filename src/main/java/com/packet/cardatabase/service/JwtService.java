package com.packet.cardatabase.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.security.Key;
import java.util.Date;

@Component
public class JwtService {

    static final long EXPIRATIONTIME = 8640000;     //1일을 밀리초로 계산한 값
    static final String PREFIX = "Bearer";          //비밀키 생성, 시연용으로 사용
    static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    //서명된 JWT 토큰 생성
    public String getToken(String username) {
        String token = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(key)
                .compact();

        return token;
    }

    // 서버가 클라이언트에게 인증 완료의 의미로 주었던 토큰을 다시 받아와
    // 확인하고 사용자 이름을 얻음
    public String getAuthUser(HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);

        if(token != null) {
            String user = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token.replace(PREFIX, ""))
                    .getBody()
                    .getSubject();

            if (user != null) {
                return user;
            }
        }

        return null;
    }
}
