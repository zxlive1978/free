

var curstramID = "";
var curkey;

//забор статистики по камерам
function getstatcamscams(whatdo, namecams) {
    // refresh = false;
    // online = false;
    //$('#form7').empty();
    // let moto =setTimeout(function tiktak () {
    //    namecams=namecams.slice(3);
    //    console.log(namecams);

    let fundstream = false;


    //$('#form7').append('\nПоиск в потоках....');
    $.ajax({
        type: "POST",
        url: 'js/cams.php',
        data: { whatdo: whatdo, namecams: namecams },
        cache: false,
        async: false,
        success: function (data) {
            livestatcams = null;
            //console.log(data);
            livestatcams = JSON.parse(data);

            for (var keey in livestatcams) {
                // console.log(livestatcams[keey]);
                if (livestatcams[keey].name == namecams && fundstream == false) {
                    //Найден ли Поток
                    fundstream = true;
                    //ID текущего потока
                    curstramID = livestatcams[keey].streamId;
                    //Текущий key
                    curkey = keey;
                    //$('#form7').append('Найден');
                    let pgg = document.querySelector('#progress' + namecams);
                    pgg.setAttribute('aria-valuenow', '50');
                    pgg.setAttribute('style', 'width:' + '50%')
                    //$('#form7').append('\nПроверка потока...OK');
                    //if (livestatcams[keey].status=='broadcasting' ){
                    //$('#form7').append('\Готов');
                    $('#gogogo' + namecams).prop('disabled', false);
                    gogocams();
                    return 0;

                }
            }

            // }else {
            //     $('#form7').append('\Не готов...');

            //     return 0;

            //    console.log(livestatcams[keey].streamId);//id
            //    console.log(livestatcams[keey].status);//broadcasting
            //    console.log(livestatcams[keey].name);
            //    console.log(livestatcams[keey].hlsViewerCount);//0

            if (!fundstream) {
                //$('#form7').append('Не найден');
                //создаем поток
                //$('#form7').append("\nСоздаем поток "+namecams+"...");
                let pgg = document.querySelector('#progress' + namecams);
                pgg.setAttribute('aria-valuenow', '25');
                pgg.setAttribute('style', 'width:' + '25%')
                $.ajax({
                    type: "POST",
                    url: 'js/cams.php',
                    data: { whatdo: 'create', namecams: namecams },
                    cache: false,
                    async: false,
                    success: function (response) {
                        let s = JSON.parse(response);
                        //console.log(s);
                        var len = s.length;
                        for (var i = 0; i < len; i++) {

                            //skvjson = JSON.parse(skvjson);
                            let n = JSON.parse(s[i]['skvjson']);
                            n['id'] = s[i]['id'];
                            //console.log(n,n['id']);
                            if (namecams == (s[i]['id'])) {
                                
                                let rtsp = n['rtsp'];
                                //Если воспроизведение из архива
                                if (real!='on'){
                                    rtsp = rtsp.replaceAll('Channels', 'tracks')+backfuture;
                                    //console.log(rtsp);
                                    
                                }
                                $.ajax({
                                    type: "POST",
                                    url: 'js/cams.php',
                                    data: { whatdo: 'create2', namecams: namecams, rtsp: rtsp },
                                    cache: false,
                                    async: false,
                                    success: function (response) {
                                        $('#form7').append("ОК");
                                        let s = JSON.parse(response);
                                        //console.log(s);
                                        streamId = s['message'];
                                        //$('#form7').append('\nСоздание iframe...');
                                        //for(var j=0; j<10; j++){
                                        // $('#form7').append('\nПроверка потока...');
                                        let pgg = document.querySelector('#progress' + namecams);
                                        pgg.setAttribute('aria-valuenow', '50');
                                        pgg.setAttribute('style', 'width:' + '50%')
                                        let moto = setTimeout(function tiktak() {
                                            if (jumpjump == 30 || fundstream == true) {
                                                //$('#form7').append('BAD');
                                                clearTimeout(moto);
                                                gogocams();
                                                return 0;
                                            } else {
                                                $.ajax({
                                                    type: "POST",
                                                    url: 'js/cams.php',
                                                    data: { whatdo: 'check', namecams: namecams },
                                                    cache: false,
                                                    async: false,
                                                    success: function (data) {
                                                        livestatcams = null;

                                                        livestatcams = JSON.parse(data);

                                                        for (var keey in livestatcams) {
                                                            // console.log(livestatcams[keey]);
                                                            if (livestatcams[keey].name == namecams && fundstream == false && livestatcams[keey].status == 'broadcasting') {
                                                                //Найден ли Поток
                                                                fundstream = true;
                                                                //ID текущего потока
                                                                curstramID = livestatcams[keey].streamId;
                                                                //Текущий key
                                                                curkey = keey;
                                                                let pgg = document.querySelector('#progress' + namecams);
                                                                pgg.setAttribute('aria-valuenow', '75');
                                                                pgg.setAttribute('style', 'width:' + '75%')
                                                                //$('#form7').append('Найден');

                                                                //$('#form7').append('ОК');
                                                                //if (livestatcams[keey].status=='broadcasting' ){
                                                                //$('#form7').append('\Готов');
                                                                $('#gogogo' + namecams).prop('disabled', false);
                                                                $('#iframeemb' + namecams).prop('scr', curstramID);
                                                                gogocams();
                                                                return 0;

                                                            }
                                                        }
                                                    }
                                                })
                                                jumpjump = jumpjump + 1;
                                                //getstatcams('check',namecams);
                                                setTimeout(tiktak, 4000);



                                            }
                                        })




                                        //}
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
        }
    });



};


//забор статистики по камерам
function getstatcams(whatdo, namecams) {
    // refresh = false;
    // online = false;
    //$('#form7').empty();
    // let moto =setTimeout(function tiktak () {


    let fundstream = false;


    $('#form7').append('\nПоиск в потоках....');
    $.ajax({
        type: "POST",
        url: 'js/cams.php',
        data: { whatdo: whatdo, namecams: namecams },
        cache: false,
        async: false,
        success: function (data) {
            livestatcams = null;
            //console.log(data);
            livestatcams = JSON.parse(data);

            for (var keey in livestatcams) {
                // console.log(livestatcams[keey]);
                if (livestatcams[keey].name == namecams && fundstream == false) {
                    //Найден ли Поток
                    fundstream = true;
                    //ID текущего потока
                    curstramID = livestatcams[keey].streamId;
                    //Текущий key
                    curkey = keey;
                    //$('#form7').append('Найден');
                    $('#form7').append('\nПроверка потока...OK');
                    //if (livestatcams[keey].status=='broadcasting' ){
                    //$('#form7').append('\Готов');
                    $('#gogo').prop('disabled', false);

                    return 0;

                }
            }

            // }else {
            //     $('#form7').append('\Не готов...');

            //     return 0;

            //    console.log(livestatcams[keey].streamId);//id
            //    console.log(livestatcams[keey].status);//broadcasting
            //    console.log(livestatcams[keey].name);
            //    console.log(livestatcams[keey].hlsViewerCount);//0

            if (!fundstream) {
                $('#form7').append('Не найден');
                //создаем поток
                $('#form7').append("\nСоздаем поток " + namecams + "...");
                $.ajax({
                    type: "POST",
                    url: 'js/cams.php',
                    data: { whatdo: 'create', namecams: namecams },
                    cache: false,
                    async: false,
                    success: function (response) {
                        let s = JSON.parse(response);
                        //alert(s[0]['skvjson']);
                        var len = s.length;
                        for (var i = 0; i < len; i++) {

                            //skvjson = JSON.parse(skvjson);
                            let n = JSON.parse(s[i]['skvjson']);
                            //console.log(n['txt']+'_'+n['name']);
                            if (namecams == (n['txt'] + '_' + n['name'])) {

                                let rtsp = n['rtsp'];
                                $.ajax({
                                    type: "POST",
                                    url: 'js/cams.php',
                                    data: { whatdo: 'create2', namecams: namecams, rtsp: rtsp },
                                    cache: false,
                                    async: false,
                                    success: function (response) {
                                        $('#form7').append("ОК");
                                        let s = JSON.parse(response);
                                        //console.log(s['message']);
                                        streamId = s['message'];
                                        //$('#form7').append('\nСоздание iframe...');
                                        //for(var j=0; j<10; j++){
                                        $('#form7').append('\nПроверка потока...');
                                        let moto = setTimeout(function tiktak() {
                                            if (jumpjump == 10 || fundstream == true) {
                                                //$('#form7').append('BAD');
                                                clearTimeout(moto);
                                                return 0;
                                            } else {
                                                $.ajax({
                                                    type: "POST",
                                                    url: 'js/cams.php',
                                                    data: { whatdo: 'check', namecams: namecams },
                                                    cache: false,
                                                    async: false,
                                                    success: function (data) {
                                                        livestatcams = null;

                                                        livestatcams = JSON.parse(data);

                                                        for (var keey in livestatcams) {
                                                            // console.log(livestatcams[keey]);
                                                            if (livestatcams[keey].name == namecams && fundstream == false && livestatcams[keey].status == 'broadcasting') {
                                                                //Найден ли Поток
                                                                fundstream = true;
                                                                //ID текущего потока
                                                                curstramID = livestatcams[keey].streamId;
                                                                //Текущий key
                                                                curkey = keey;
                                                                //$('#form7').append('Найден');

                                                                $('#form7').append('ОК');
                                                                //if (livestatcams[keey].status=='broadcasting' ){
                                                                //$('#form7').append('\Готов');
                                                                $('#gogo').prop('disabled', false);

                                                                return 0;

                                                            }
                                                        }
                                                    }
                                                })
                                                jumpjump = jumpjump + 1;
                                                //getstatcams('check',namecams);
                                                setTimeout(tiktak, 3000);



                                            }
                                        })




                                        //}
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
        }
    });



};


//старт отображения камеры
function gogocams() {
    $('#gogogo' + namecams).prop('disabled', true);
    //var frame = document.createElement("iframe");
    var frame = document.querySelector('#iframeemb' + namecams);
    // document.getElementById("iframeemb"+namecams);
    //frame.setAttribute("id", "camsf2"+namecams);

    frame.setAttribute("scrolling", "yes");
    frame.setAttribute("frameborder", "0");
    frame.setAttribute("allowfullscreen", "true");
    frame.setAttribute("webkitAllowFullScreen", "true");
    frame.setAttribute("mozallowfullscreen", "true");

    frame.style.width = '100%';
    frame.style.height = '100%';



    frame.setAttribute("SRC", "//hydrofalll.ddns.net:5443/LiveApp/play.html?name=" + livestatcams[curkey].streamId);

    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<h1>Привет!</h1>";
    let pgg = document.querySelector('#progress' + namecams);
    pgg.setAttribute('aria-valuenow', '100');
    pgg.setAttribute('style', 'width:' + '100%')
    workstream['p' + String(Object.keys(workstream).length)] = livestatcams[curkey].streamId;
    camscreate = true;
    // for(okeey in workstream){
    //     console.log(workstream[okeey]);

    // }
    // let element = document.querySelector('#iframeemb'+namecams);
    // element.appendChild(frame);

    //$('#iframeemb'+namecams).append(frame);
}

//exit fullmode
// document.addEventListener('fullscreenchange', exitHandler);
// document.addEventListener('webkitfullscreenchange', exitHandler);
// document.addEventListener('mozfullscreenchange', exitHandler);
// document.addEventListener('MSFullscreenChange', exitHandler);

// function exitHandler() {
//     if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
//         $.ajax({
//             type: "POST",
//             url: 'js/cams.php',
//             data: {whatdo:'check', namecams: namecams},
//             cache: false,
//             async: false,
//             success: function(data){
//                 livestatcams =null;
//                 //console.log(data);
//                 livestatcams = JSON.parse(data);
//                 //удаление старых потоков
//                 for (var keey in livestatcams) {
//                 if ((Number(livestatcams[keey].hlsViewerCount)==0 )|| (Number(livestatcams[keey].hlsViewerCount)<=1 && livestatcams[keey].streamId==curstramID)){
//                 $.ajax({
//                     type: "POST",
//                     url: 'js/cams.php',
//                     data: {whatdo:'delete', namecams: livestatcams[keey].streamId},
//                     cache: false,
//                     async: false,
//                     success: function(data){

//                         // for (var keex in livestatcams) {
//                         // console.log(curstramID, livestatcams[keex].hlsViewerCount);
//                         // if (){
//                         //     console.log(curstramID, livestatcams[keex].hlsViewerCount);
//                         //     $.ajax({
//                         //         type: "POST",
//                         //         url: 'js/cams.php',
//                         //         data: {whatdo:'delete', namecams: curstramID },
//                         //         cache: false,
//                         //         async: false,
//                         //         success: function(data){
//                         //             //console.log(curkey, livestatcams[curkey].hlsViewerCount);
//                         //             $('#form7').append("\nУдален поток..."+livestatcams[keex].name);
//                         //         }
//                         //     });
//                         //     } 
//                         // }
//                         $('#form7').append("\nУдален поток..."+livestatcams[keey].name);




//                     }})}}}})

//         $('#camsf2').remove();
//         // console.log('dsds');
//     }
// }

// //go fullmode
// let elem = document.querySelector("#camsf2");

// if (!document.fullscreenElement) {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//       }
//       else if (elem.msRequestFullscreen) {
//         elem.msRequestFullscreen();
//       }
//       else if (elem.mozRequestFullScreen) {
//         elem.mozRequestFullScreen();
//       }
//       else if (elem.webkitRequestFullscreen) {
//         elem.webkitRequestFullscreen();
//       } else {
//         console.log("Fullscreen API is not supported");
//       } 
// } else {
//   if (document.exitFullscreen) {
//     document.exitFullscreen(); 
//   }}
// }

//удаление старых потоков
function deleteoldcams() {

    $.ajax({
        type: "POST",
        url: 'js/cams.php',
        data: { whatdo: 'check', namecams: namecams },
        cache: false,
        async: false,
        success: function (data) {
            livestatcams = null;
            //console.log(data);
            livestatcams = JSON.parse(data);
            //удаление старых потоков
            for (var keey in livestatcams) {
                for (var okeey in workstream) {
                    // console.log(livestatcams[keey].streamId,workstream[okeey]);
                    if ((Number(livestatcams[keey].hlsViewerCount) == 0) || (Number(livestatcams[keey].hlsViewerCount) <= 1 && livestatcams[keey].streamId == workstream[okeey])) {
                        $.ajax({
                            type: "POST",
                            url: 'js/cams.php',
                            data: { whatdo: 'delete', namecams: livestatcams[keey].streamId },
                            cache: false,
                            async: false,
                            success: function (data) {




                            }
                        })
                    }
                }
            }
        }
    })


}

//старт отображения камеры
function gocams() {
    $('#gogo').prop('disabled', true);
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
    frame.style.margin = '0 0 0 0';
    frame.style.top = '50%';
    frame.style.height = '0%';
    frame.style.align = 'middle';

    frame.setAttribute("auto_orient", "true");
    frame.setAttribute("scaling", "fit");
    frame.setAttribute("SRC", "//hydrofalll.ddns.net:5443/LiveApp/play.html?name=" + livestatcams[curkey].streamId);


    $('#tabvideo').append(frame);

    //exit fullmode
    document.addEventListener('fullscreenchange', exitHandler);
    document.addEventListener('webkitfullscreenchange', exitHandler);
    document.addEventListener('mozfullscreenchange', exitHandler);
    document.addEventListener('MSFullscreenChange', exitHandler);

    function exitHandler() {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            $.ajax({
                type: "POST",
                url: 'js/cams.php',
                data: { whatdo: 'check', namecams: namecams },
                cache: false,
                async: false,
                success: function (data) {
                    livestatcams = null;
                    //console.log(data);
                    livestatcams = JSON.parse(data);
                    //удаление старых потоков
                    for (var keey in livestatcams) {
                        if ((Number(livestatcams[keey].hlsViewerCount) == 0) || (Number(livestatcams[keey].hlsViewerCount) <= 1 && livestatcams[keey].streamId == curstramID)) {
                            $.ajax({
                                type: "POST",
                                url: 'js/cams.php',
                                data: { whatdo: 'delete', namecams: livestatcams[keey].streamId },
                                cache: false,
                                async: false,
                                success: function (data) {

                                    // for (var keex in livestatcams) {
                                    // console.log(curstramID, livestatcams[keex].hlsViewerCount);
                                    // if (){
                                    //     console.log(curstramID, livestatcams[keex].hlsViewerCount);
                                    //     $.ajax({
                                    //         type: "POST",
                                    //         url: 'js/cams.php',
                                    //         data: {whatdo:'delete', namecams: curstramID },
                                    //         cache: false,
                                    //         async: false,
                                    //         success: function(data){
                                    //             //console.log(curkey, livestatcams[curkey].hlsViewerCount);
                                    //             $('#form7').append("\nУдален поток..."+livestatcams[keex].name);
                                    //         }
                                    //     });
                                    //     } 
                                    // }
                                    $('#form7').append("\nУдален поток..." + livestatcams[keey].name);




                                }
                            })
                        }
                    }
                }
            })

            $('#camsf2').remove();
            // console.log('dsds');
        }
    }

    //go fullmode
    let elem = document.querySelector("#camsf2");

    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else {
            console.log("Fullscreen API is not supported");
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}



//забор статистики по камерам
function installcams(whatdo, table, p000) {
    refresh = false;
    online = false;
    $.ajax({
        type: "POST",
        url: 'js/cams.php',
        data: { whatdo: whatdo, table: table, p000: p000 },
        cache: false,
        async: false,
        success: function (data) {
            alert(data);


        }
    });

};

// Список камер для буровой
function getcamswell() {
    $.ajax({
        type: "POST",
        url: 'js/cams.php',
        data: { whatdo: 'createforcamsdb', namecams: skv },
        cache: false,
        async: false,
        success: function (response) {
            camswell = [];
            var s = {};
            s = JSON.parse(response);

            var okok1 = decodeURIComponent(escape(window.atob(_uz[6])));
            var okok11 = okok1.split(',');
            // for (var j=0; j<okok11.length; j++){
            // //console.log(okok11[j].trim());}
            for (var j = 0; j < okok11.length; j++) {
                //  console.log(okok11[j].trim());
                for (var i = 0; i < s.length; i++) {
                    var n = JSON.parse(s[i]['skvjson']);
                    n['id'] = s[i]['id'];
                    //var n = JSON.parse(s[i]);
                    // console.log(n['txt']);

                    if ((okok11[j].trim() == n['txt']) || (okok11[j].trim() == 'ALL')) {
                        camswell.push(n);
                    }

                }
            }
            // for (keeys in camswell){   
            //     console.log(camswell[keeys]);
            // }
        }
    });
}