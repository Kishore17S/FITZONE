package com.ecommerce.response;

import com.ecommerce.request.TrainerRequest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TrainerResponse {
    public  String trainername;
    public String email;
    public String phonenumber;
    public int age;
    public int experience;
}
