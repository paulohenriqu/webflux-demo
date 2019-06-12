package com.example.blocking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@RestController
public class Controller {

    private static final String SERVICE_URL = "http://localhost:8080/";
    @Autowired
    RestTemplate restTemplate;

    @GetMapping("/{delayMillis}")
    public String get(@PathVariable String delayMillis) {

        try {
            ResponseEntity<String> response = restTemplate.exchange(SERVICE_URL + delayMillis, HttpMethod.GET, null,
                    String.class);
            return "Blocking: " + response.getBody();
        } catch (Exception e) {
            return "Blocking error: " + e.getMessage();
        }

    }

}