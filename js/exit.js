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
        //         if (Number(data)!=1) {alert('нет связи')} else{
                
            
                
        //     }
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
        // alert(data);
        if (Number(data)!='1') {location.href="index.html";} else{
        }    
        // //Удаление старых видео потоков        
        // $.ajax({
        //     type: "POST",
        //     url: 'js/cams.php',
        //     data: {whatdo:'check', namecams: namecams},
        //     cache: false,
        //     async: false,
        //     success: function(data){
        //         livestatcams =null;
        //         //console.log(data);
        //         livestatcams = JSON.parse(data);
        //         //удаление старых потоков
        //         for (var keey in livestatcams) {
        //         if (Number(livestatcams[keey].hlsViewerCount)==0){
        //         $.ajax({
        //             type: "POST",
        //             url: 'js/cams.php',
        //             data: {whatdo:'delete', namecams: livestatcams[keey].streamId},
        //             cache: false,
        //             async: false,
        //             success: function(data){
        
                    
        //             }})}}}})

        setTimeout(function(){check_session('check','active',_ut);}, 5000);    
        // }
       

        },
        error: function(){
            location.href="index.html";}

    });

};


