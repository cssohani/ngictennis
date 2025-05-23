package com.ngictennis.ecommerce.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ngictennis.ecommerce.model.CoachingPlan;
import com.ngictennis.ecommerce.services.CoachingPlanService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/coaching-plans")
public class CoachingPlanController {

    @Autowired
    public CoachingPlanService coachingPlanService;

    @CrossOrigin
    @GetMapping
    public List<CoachingPlan> getCoachingPlans() {
        return coachingPlanService.getCoachingPlans();
    }

    @PostMapping
    public CoachingPlan addCoachingPlan(@RequestBody CoachingPlan coachingPlan) {

        return coachingPlanService.addCoachingPlan(coachingPlan);
    }

}
