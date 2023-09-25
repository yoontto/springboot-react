package com.packet.cardatabase;

import org.assertj.core.api.Assertions;
import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class JasyptConfigTest {

    @Autowired JasyptConfig jasyptConfig;

    @Test
    void encryptTest() {
        StringEncryptor encryptor = jasyptConfig.stringEncryptor();
        String enc = encryptor.encrypt("");

        System.out.println(enc);
    }
}
