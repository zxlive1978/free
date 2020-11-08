//забор статистики по камерам
function getstatcams(whatdo, namecams){
        refresh = false;
        online = false;
        
        $('#form7').append('Поиск в существующих потоках....');
        $.ajax({
            type: "POST",
            url: 'js/cams.php',
            data: {whatdo:whatdo, namecams: namecams},
            cache: false,
            async: false,
            success: function(data){
                livestatcams =null;
                //console.log(data);
                livestatcams = JSON.parse(data);
                for (var keey in livestatcams) {
                    if (livestatcams[keey].name==namecams ){//&& livestatcams[keey].status=='broadcasting'){
                        $('#form7').append('Найден');
                        $('#form7').append('\nСоздание iframe...');
                        var frame = document.createElement("iframe");
                        frame.setAttribute("id", "camsf2");
                        frame.setAttribute("width", '100%');
                    
                        frame.setAttribute("scrolling", "yes");
                        frame.setAttribute("frameborder", "0");
                        frame.setAttribute("allowfullscreen", "true");
                        frame.setAttribute("webkitAllowFullScreen", "true");
                        frame.setAttribute("mozallowfullscreen", "true");
                        frame.style.position = 'relative';
                        frame.style.width = '0%';
                        frame.style.height = '0%';
                        frame.style.align = 'center';
                    
                        frame.setAttribute("auto_orient", "true");
                        frame.setAttribute("scaling", "fit");
                        frame.setAttribute("SRC", "//hydrofalll.ddns.net:5443/LiveApp/play.html?name="+livestatcams[keey].streamId);
                        $('#form7').append('ОК');
                    
                        $('#tabvideo').append(frame);
                    
                        //exit fullmode
                        document.addEventListener('fullscreenchange', exitHandler);
                        document.addEventListener('webkitfullscreenchange', exitHandler);
                        document.addEventListener('mozfullscreenchange', exitHandler);
                        document.addEventListener('MSFullscreenChange', exitHandler);
                    
                        function exitHandler() {
                            if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
                                
                                $('#camsf2').remove();
                                // console.log('dsds');
                            }
                        }  
                        //go fullmode
                        let elem = document.querySelector("#camsf2");
                    
                        if (!document.fullscreenElement) {
                            //$('#camsf2').remove();
                        elem.requestFullscreen().catch(err => {
                            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                        });
                        } else {
                        document.exitFullscreen();
                        }
                        return 0;
                    } else {
                      
                        
                    }
                //    console.log(livestatcams[keey].streamId);//id
                //    console.log(livestatcams[keey].status);//broadcasting
                //    console.log(livestatcams[keey].name);
                //    console.log(livestatcams[keey].hlsViewerCount);//0
                }
                $('#form7').append('Не найден');
                //создаем поток
                $('#form7').append("\nСоздаем поток...");
                $.ajax({
                    type: "POST",
                    url: 'js/cams.php',
                    data: {whatdo:'create', namecams: namecams},
                    cache: false,
                    async: false,
                    success: function(response){
                        let s =JSON.parse(response);
                        //alert(s[0]['skvjson']);
                        var len = s.length;
                        for(var i=0; i<len; i++){
                            
                            //skvjson = JSON.parse(skvjson);
                            let n = JSON.parse(s[i]['skvjson']);   
                            //console.log(n['txt']+'_'+n['name']);
                            if (namecams==(n['txt']+'_'+n['name'])){
                                
                                let rtsp= n['rtsp'];
                                $.ajax({
                                    type: "POST",
                                    url: 'js/cams.php',
                                    data: {whatdo:'create2', namecams: namecams, rtsp:rtsp},
                                    cache: false,
                                    async: false,
                                    success: function(response){
                                        
                                        let s =JSON.parse(response);
                                        //console.log(s['message']);
                                        streamId=s['message'];
                                        //$('#form7').append('\nСоздание iframe...');
                                        setTimeout(() => {  
                                            $('#form7').append("\nПроверка статуса потока...");
                                            getstatcams('check',namecams); }, 8000);
                                    }
                                });


                            }
                            // for (var j=0; j<_uz.length; j++){
                            //     let _uzdec =decodeURIComponent(escape(window.atob(_uz[5])))
                            //     //console.log(_uzdec);
                            //     wells[String(p000)] =  skvjson;
                            // }

                        }
                        // alert(data);

                    }

                    });

                // ..$('#form7').append('ОК');
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
