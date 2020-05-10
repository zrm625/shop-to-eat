package com.zrm.database.controller;

import com.zrm.database.exception.ResourceNotFoundException;
import com.zrm.database.model.Food;
import com.zrm.database.repository.FoodRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import javax.validation.Valid;
import java.util.Optional;

@RestController
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    @GetMapping("/foods")
    public Page<Food> getFoods(Pageable pageable) {
        return foodRepository.findAll(pageable);
    }

    @GetMapping("/foods/{foodId}")
    public Optional<Food> getFoodsById(@PathVariable Long foodId) {
        return foodRepository.findById(foodId);
    }

    @PostMapping("/foods")
    public Food addFood(@Valid @NonNull @RequestBody Food food) {
        return foodRepository.save(food);
    }

    @DeleteMapping("/foods/{foodId}")
    public ResponseEntity<?> deleteAnswer(@PathVariable Long foodId) {
        if (!foodRepository.existsById(foodId)) {
            throw new ResourceNotFoundException("Food not found with id " + foodId);
        }
        foodRepository.deleteById(foodId);
        return ResponseEntity.ok().build();
    }

    // TODO: PUT
}