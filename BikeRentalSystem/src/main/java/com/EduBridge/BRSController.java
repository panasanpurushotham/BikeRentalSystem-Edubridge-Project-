package com.EduBridge;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BRSController {
	@Autowired
	BRSService ps;
	@GetMapping("view")
	public List<BRSModel> getAllRecords(){
		return this.ps.getAllRecords();
				
	}
	@PostMapping("getRecordById1")
	public Optional<BRSModel> getRecordById(@RequestBody BRSModel id1) {
		System.out.println("id "+id1.id);	
		return ps.getRecordById(id1.id);
	}

	@PostMapping("viewI")
	public BRSModel getRecord(@RequestBody BRSModel id) {
	int id1=id.getId();
	return ps.getPlayerById(id1);
    }

	@PostMapping("insert")
	public void addRecords(@RequestBody BRSModel p){
		this.ps.saveData(p);
	}
	@PostMapping("update")
	public void modifyRecord(@RequestBody BRSModel p1) {
		this.ps.updateData(p1);
	}

	@PostMapping("delete")
	public void deleteRecord(@RequestBody BRSModel p1 ) {
		this.ps.removePlayer(p1);
	}
	@PostMapping("valid") 
	public BRSModel login(@RequestBody BRSModel lv) throws Exception { 
		return this.ps.loginuser(lv.getId(),lv.getPsw()); 
		}
	@GetMapping("getId")
	public BRSModel getLatestId() {
		List<BRSModel> ls = this.ps.retrieveId();
		System.out.println(ls.get(ls.size()-1).getId()+1);
		return ls.get(ls.size()-1);
	}

	
	}


