package com.ecommerce.service;

import com.ecommerce.entity.Gymuser;
import com.ecommerce.entity.HelpandSupport;
import com.ecommerce.repository.HelpandSupportrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class HelpandSupportService {
    @Autowired
    HelpandSupportrepo hsr1;

    public List<HelpandSupport> getAllHelpandSupportDetails()
    {
        return hsr1.findAll();
    }

    public String postHelpandSupportDetails(HelpandSupport hs1)
    {
        hsr1.save(hs1);
        return "User Details are saved";
    }
    public String deleteHelpandSupportDetails(@PathVariable("id") int id)
    {
        hsr1.deleteById(id);
        return "Id : "+id+" is deleted";
    }

    public HelpandSupport updateHelpandSupportDetails(@RequestBody HelpandSupport hs1)
    {
        System.out.println("Changes updated");
        return hsr1.save(hs1);
    }
}
