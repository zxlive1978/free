//забор статистики по камерам
function getstatcams(){
        refresh = false;
        online = false;
        $('#form7').empty();
        $('#form7').append('Проверка существующих потоков....');
        $.ajax({
            type: "POST",
            url: 'js/cams.php',
            data: {},
            cache: false,
            async: false,
            success: function(data){
                livestatcams =null;
                livestatcams = JSON.parse(data);
                for (var keey in livestatcams) {
                   console.log(livestatcams[keey].streamId);//id
                   console.log(livestatcams[keey].status);//broadcasting
                   console.log(livestatcams[keey].name);
                   console.log(livestatcams[keey].hlsViewerCount);//0
                }
                $('#form7').append('ОК');
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
