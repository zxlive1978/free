//забор статистики по камерам
function getstatcams(){
        refresh = false;
        online = false;
        $.ajax({
            type: "POST",
            url: 'js/cams.php',
            data: {},
            cache: false,
            async: false,
            success: function(data){
                livestatcams = JSON.parse(data);
                streamId
                alert(livestatcams.);


            }
        });
    
};
 
//забор статистики по камерам
function installcams(whatdo, table, p000){
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
