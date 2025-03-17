package com.ecommerce.controller;

import com.ecommerce.entity.Gymuser;
import com.ecommerce.entity.HelpandSupport;
import com.ecommerce.service.HelpandSupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/helpandsupport")
public class HelpandSupportController {
    @Autowired
    private HelpandSupportService hss1;

    @GetMapping("/helpandsupportgetall")
    public ResponseEntity<List<HelpandSupport>> getAllHelpandSupportDetails() {
        List<HelpandSupport> HelpandSupports = hss1.getAllHelpandSupportDetails();
        return ResponseEntity.ok(HelpandSupports);
    }

    @PostMapping("/helpandsupportpost")
    public ResponseEntity<String> postHelpandSupportDetails(@RequestBody HelpandSupport hs1) {
        hss1.postHelpandSupportDetails(hs1);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/helpandsupportdelete/{id}")
    public ResponseEntity<String> deleteHelpandSupportDetails(@PathVariable ("id") int id) {
        try {
            hss1.deleteHelpandSupportDetails(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/helpandsupportput/{id}")
    public HelpandSupport updateHelpandSupportDetails(@RequestBody HelpandSupport hs1)
    {
        return hss1.updateHelpandSupportDetails(hs1);
    }
}
