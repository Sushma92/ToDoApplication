package com.sushma.java.todoapplication;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sushma.java.todoapplication.Task;


public interface TaskRepository extends JpaRepository<Task,Long> {
	public List<Task> getTasksByHolderName(String holderName);
}
