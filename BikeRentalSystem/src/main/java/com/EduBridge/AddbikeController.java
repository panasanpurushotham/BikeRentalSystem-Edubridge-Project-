package com.EduBridge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AddbikeController {

	@Autowired
	AddbikeService ps;
	@GetMapping("view2")
	public List<AddbikeModel> getAllRecords(){
		return this.ps.getAllRecords();
				
	}

	@PostMapping("view2I")
	public AddbikeModel getRecord(@RequestBody AddbikeModel id) {
	int id1=id.getId();
	return ps.getPlayerById(id1);
    }

	@PostMapping("insert2")
	public void addRecords(@RequestBody AddbikeModel p){
		this.ps.saveData(p);
	}
	@PostMapping("update2")
	public void modifyRecord(@RequestBody AddbikeModel p1) {
		this.ps.updateData(p1);
	}

	@PostMapping("delete2")
	public void deleteRecord(@RequestBody AddbikeModel p1 ) {
		this.ps.removePlayer(p1);
	}
}
