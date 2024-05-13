package com.ecommerce.backend.services;

import com.ecommerce.backend.entity.Category;
import com.ecommerce.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CategoryService {

	    @Autowired
	    private CategoryRepository categoryRepository;

	    public List<Category> getAllCategories() {
	        return categoryRepository.findAll();
	    }

	    public Optional<Category> getCategoryById(Long id) {
	        return categoryRepository.findById(id);
	    }

	    public Category createCategory(Category category) {
	        return categoryRepository.save(category);
	    }

	    public Optional<Category> updateCategory(Long id, Category updatedCategory) {
	        Optional<Category> optionalCategory = categoryRepository.findById(id);
	        if (optionalCategory.isPresent()) {
	            updatedCategory.setId(id);
	            return Optional.of(categoryRepository.save(updatedCategory));
	        } else {
	            return Optional.empty();
	        }
	    }

	    public String deleteCategory(Long id) {
	        Optional<Category> optionalCategory = categoryRepository.findById(id);
	        if (optionalCategory.isPresent()) {
	            categoryRepository.deleteById(id);
	            return "Category with ID " + id + " has been deleted successfully.";
	        } else {
	            return "Category with ID " + id + " is not present in the database.";
	        }
	    }
}
