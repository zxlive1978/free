//забор статистики по камерам
function getstatcams(whatdo, table, p000){
        refresh = false;
        online = false;
        $.ajax({
            type: "POST",
            url: 'js/cams.php',
            data: {whatdo:whatdo, table: table, p000: p000},
            cache: false,
            async: false,
            success: function(data){
                alert(data);


            }
        });
    
};
  
