function exit(whatdo, table, p000){
        refresh = false;
        online = false;
        $.ajax({
            type: "POST",
            url: 'js/exit.php',
            data: {whatdo:whatdo, table: table, p000: p000},
            cache: false,
            async: false,
            success: function(data){
                //alert(data);
            //     if (Number(data)!=1) {alert('нет связи')} else{
                
            
                
            // }
            //location.href="index.html";

            }
        });
    
};
   