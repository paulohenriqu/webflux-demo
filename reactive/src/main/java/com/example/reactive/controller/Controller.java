package com.example.reactive.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

@RestController
public class Controller {

    private static final String SERVICE_URL = "http://localhost:8080";
    private final WebClient webClient;

    public Controller(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(SERVICE_URL).build();
    }

    @GetMapping("/{delayMillis}")
    public Mono<String> get(@PathVariable String delayMillis) {
        return webClient.get().uri("/" + delayMillis).retrieve()        
        .bodyToMono(String.class).map(s -> "Reactive:" + s)
        .onErrorResume(e -> Mono.empty());
    }

}