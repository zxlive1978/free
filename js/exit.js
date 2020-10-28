//Выход
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
            location.href="index.html";

            }
        });
    
};
  
//Проверка сессий
function check_session(whatdo, table, p000){
  
    $.ajax({
        type: "POST",
        url: 'js/exit.php',
        data: {whatdo:whatdo, table: table, p000: p000},
        cache: false,
        async: false,
        success: function(data){
        alert(data);
        if (Number(data)!=1) {alert('нет связи')} else{
        }    
        
        setTimeout(function(){check_session('check','active','check');}, 3000);    
        // }
       

        },
        error: function(){
            location.href="index.html";}

    });

};