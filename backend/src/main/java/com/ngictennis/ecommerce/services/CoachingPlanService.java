package com.ngictennis.ecommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ngictennis.ecommerce.model.CoachingPlan;
import com.ngictennis.ecommerce.repository.CoachingPlanRepository;

@Service
public class CoachingPlanService {
    @Autowired
    public CoachingPlanRepository coachingPlanRepository;

    public List<CoachingPlan> getCoachingPlans() {
        return coachingPlanRepository.findAll();
    }

    public CoachingPlan addCoachingPlan(CoachingPlan coachingPlan) {
        return coachingPlanRepository.save(coachingPlan);
    }
}
