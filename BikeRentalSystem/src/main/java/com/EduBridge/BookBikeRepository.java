package com.EduBridge;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookBikeRepository extends JpaRepository<BookBikeModel,Integer> {
	List<BookBikeModel> findByuserid(int userid);
}
