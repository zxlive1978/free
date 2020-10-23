function exit(whatdo, table, us){
        refresh = false;
        online = false;
        $.ajax({
            type: "POST",
            url: 'js/exit.php',
            data: {whatdo:whatdo, table: table, p000: p000},
            cache: false,
            async: false,
            success: function(data){
                if (Number(data)!=1) {alert('нет связи')} else{
                
            
                location.href="index.html";
            }

            }
        });
    
};
   