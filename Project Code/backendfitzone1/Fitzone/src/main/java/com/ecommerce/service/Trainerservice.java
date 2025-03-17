package com.ecommerce.service;

import com.ecommerce.entity.Trainerlist;
import com.ecommerce.repository.Trainerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class Trainerservice {
    @Autowired
    Trainerrepo tr1;

    public List<Trainerlist> getAlltrainerDetails()
    {
        return tr1.findAll();
    }

    public String posttrainerDetails(Trainerlist tm1)
    {
        tr1.save(tm1);
        return "Trainer Details are saved";
    }
    public String deletetrainerDetails(@PathVariable("id") int id)
    {
        tr1.deleteById(id);
        return "Id : "+id+" is deleted";
    }

    public Trainerlist updatetrainerDetails(Trainerlist tm1,int id)
    {
//        System.out.println("Changes updated");
//        return tr1.save(tm1);
        Optional<Trainerlist> T=tr1.findById(id);
        T.get().setTrainername(tm1.getTrainername());
        T.get().setEmail(tm1.getEmail());
        T.get().setAge(tm1.getAge());
        T.get().setPhonenumber(tm1.getPhonenumber());
        T.get().setExperience(tm1.getExperience());
        tr1.save(T.get());
        return T.get();
    }

    public Optional<Trainerlist> getTrainerById(int id) {
        return tr1.findById(id);
    }
}
