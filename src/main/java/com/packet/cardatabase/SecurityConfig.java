package com.packet.cardatabase;

import com.packet.cardatabase.service.UserDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailServiceImpl userDetailService;
    private final AuthenticationFilter authenticationFilter;
    private final AuthEntryPoint exceptionHandler;

    @Autowired
    public SecurityConfig(UserDetailServiceImpl service1
                        , AuthenticationFilter service2
                        , AuthEntryPoint service3) {
        this.userDetailService = service1;
        this.authenticationFilter = service2;
        this.exceptionHandler = service3;
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailService).passwordEncoder(new BCryptPasswordEncoder());
    }


    @Bean
    public AuthenticationManager getAuthenticationManager() throws Exception{
        return authenticationManager();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        //모든 사용자가 모든 엔드포인트 접근할 수 있도록 설정
        http.csrf().disable().cors().and()
                        .authorizeRequests().anyRequest().permitAll();

        /*
            보안 잠시 내림 (10장 208p)
        //세션 생성하지 않음 -> csrf 토큰도 생성하지 않음
        //cors 설정 추가
        http.csrf().disable().cors().and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                // /login 엔드포인트에 대한 POST 요청은 보호되지 않음
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                //  다른 모든 요청은 보호됨
                .anyRequest().authenticated().and()
                //exception 처리
                .exceptionHandling().authenticationEntryPoint(exceptionHandler).and()
                //AuthenticationFilter 구성을 추가
                .addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);
        */
                
    }

    //클래스에 전역 CORS 필터 추가
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        
        config.setAllowedOrigins(Arrays.asList("*"));
        config.setAllowedMethods(Arrays.asList("*"));
        config.setAllowedHeaders(Arrays.asList("*"));
        config.setAllowCredentials(false);
        config.applyPermitDefaultValues();

        source.registerCorsConfiguration("/**", config);
        return source;
    }

    /*
    // 인메모리 사용자 활성화 코드
    // 시연용으로만 사용하고, 실제 운영에서는 사용하면 안된다.

    @Bean
    @Override
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
                .username("user")
                .password("password")
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(user);
    }
    */
}
