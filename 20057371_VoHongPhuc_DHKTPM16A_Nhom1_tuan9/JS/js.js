$(document).ready(function(){
    var i =1;
    function KiemTraMa(){
        var mauKT =/^[1-9]{1}[0-9]{9}$/;
        if($("#txtMaSV").val()==""){
            $("#tbMa").html("Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#txtMaSV").val())){
            $("#tbMa").html("Theo mẫu /^[1-9]{1}[0-9]{9}$/");
            return false;
        }
        else{
            $("#tbMa").html("*");
            return true;
        }
        
    }
    $("#txtMaSV").blur(KiemTraMa);

    function KiemTraEmail(){
        var mauKT =/^[A-Za-z0-9]{3,9}\@.{3,15}$/;
        if($("#txtEmail").val()==""){
            $("#tbEmail").html("Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#txtEmail").val())){
            $("#tbEmail").html("Theo mẫu xxx@iuh.edu.com");
            return false;
        }
        else{
            $("#tbEmail").html("*");
            return true;
        }
        
    }

    $("#txtEmail").blur(KiemTraEmail);
    $("#btnSubDK").click(function(){   
        if(KiemTraMa()==true&&KiemTraEmail()==true){
            var chk =$("#chkboi:checked").val();
            var sl = $("#slCity option:selected").text();
            
            var radGT = $("#rad:checked").val();
    
            var maSV =$("#txtMaSV").val();
            var htSV =$("#txtHT").val();
            var emailSV = $("#txtEmail").val();
    
            dong ="<tr>";
            dong +="<td>" +(i++)+"</td>";
            dong +="<td>" +maSV+"</td>";
            dong +="<td>" +htSV+"</td>";
            dong +="<td>" +radGT+"</td>";
            dong +="<td>" +chk+"</td>";
            dong +="<td>" + emailSV+"</td>";
            dong +="<td>" +sl+"</td>";
            $("#danhSach").append(dong);
            $("#myModal").modal("hide");
            return true;
        }  
        
    })
})