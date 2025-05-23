package com.ngictennis.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ngictennis.ecommerce.model.CoachingPlan;

@Repository
public interface CoachingPlanRepository extends JpaRepository<CoachingPlan, Long> {

}
