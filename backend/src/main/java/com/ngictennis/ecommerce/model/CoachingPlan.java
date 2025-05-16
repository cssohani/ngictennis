package com.ngictennis.ecommerce.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class CoachingPlan {
    @Id
    @GeneratedValue
    private String id;
    private String name;
    private double price;
    private String description;
}
