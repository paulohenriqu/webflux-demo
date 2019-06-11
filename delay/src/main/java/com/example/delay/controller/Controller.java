package com.example.delay.controller;

import java.time.Duration;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

@RestController
public class Controller {
    
	@GetMapping("/{delayMillis}")
	public Mono<String> get(@PathVariable int delayMillis) {
	  return Mono.just("OK")
		  .delayElement(Duration.ofMillis(delayMillis));
	}

 }