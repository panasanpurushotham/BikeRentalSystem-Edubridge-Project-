package com.EduBridge;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class BRSService {
	@Autowired
	BRSRepository br;	
public BRSService() {	
}
public List getAllRecords() {
	return br.findAll();
}
public List retrieveId() {
	return br.findAll();
}
public Optional<BRSModel> getRecordById(int id) {
	Optional<BRSModel> pm = br.findById(id);
	return pm;	
}

public BRSModel getPlayerById(int id) {
	
	Optional<BRSModel> pm=br.findById(id);//inbuild DOA layer
	if(pm.isPresent()) {
		
		return pm.get() ;
            
	}else 
	return null;
}
public void saveData(BRSModel p) {
	br.save(p);
}
public void updateData(BRSModel p1) {
	br.save(p1);
}
public void removePlayer(BRSModel p) {
	int id=p.getId();
	BRSModel q=br.getById(id);
	br.delete(q);
}
public BRSModel loginuser(int id, String psw) throws Exception { 
//	int id1 = Integer.valueOf(id); 
	BRSModel l1 = br.getById(id); 
	System.out.println(l1.getPsw()); 
	if(l1.getPsw().equals(psw)) { 
		return l1; 
		} else { 
			throw new Exception("Invalid Credentials"); 
			} 
	}

}
