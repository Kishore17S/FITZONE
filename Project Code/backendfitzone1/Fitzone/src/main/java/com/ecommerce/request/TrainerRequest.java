package com.ecommerce.request;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TrainerRequest {
    public  String trainername;
    public String email;
    public String phonenumber;
    public int age;
    public int experience;
}
