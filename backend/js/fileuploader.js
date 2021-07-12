
// ��� ������ ��������� ����� XMLHttpRequest.sendAsBinary(),
// ���� �� �� ��������� (��������, ��� �������� Google Chrome). 

if (!XMLHttpRequest.prototype.sendAsBinary) {

    XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
        function byteValue(x) {
            return x.charCodeAt(0) & 0xff;
            }
        var ords = Array.prototype.map.call(datastr, byteValue);
        var ui8a = new Uint8Array(ords);
        this.send(ui8a.buffer);
        }
    }

/**
 * ����� FileUploader.
 * @param ioptions ������������� ������ ����� �������� 
 */
function FileUploader(ioptions) {

	// �������, � ������� ����� ��������� ����
    this.position=0;

	// ������ ������������ �����
    this.filesize=0;

	// ������ Blob ��� File (FileList[i])
    this.file = null;

	// ������������� ������ �����
    this.options=ioptions;

	// ���� �� ���������� ����� uploadscript, �� ���������� null. ������
	// ����������, ���� ��� ����� �� ����������.
    if (this.options['uploadscript']==undefined) return null;

	/*
	* ��������, ������������ �� ������� ����������� ������� 
	* @return true, ���� ������� ������������ ��� ����������� �������
	*/
    this.CheckBrowser=function() {
        if (window.File && window.FileReader && window.FileList && window.Blob) return true; else return false;
        }


	/*
	* �������� ����� ����� �� ������
	* @param from �������, � ������� ����� ��������� ����
	*/
    this.UploadPortion=function(from) {

		// ������ FileReader, � ���� ����� ��������� ����� ������������ �����
        var reader = new FileReader();

		// ������� ������
        var that=this;

		// ������� � ������� ����� ��������� ����
        var loadfrom=from;

		// ������ Blob, ��� ���������� ���������� �����
        var blob=null;

		// ������� ��� ������� setTimeout. � ������� ���� ������� ����������� ��������� ������� �������� 
		// �� �������� (��� �� ������ ���������)
        var xhrHttpTimeout=null;

		/*
		* ������� ������������� ����� ������ ����� ����� � FileReader
		* @param evt �������
		*/
        reader.onloadend = function(evt) {
            if (evt.target.readyState == FileReader.DONE) {

				// �������� ������ XMLHttpRequest, ��������� ����� ������� ��� POST
				// � ����������� ��������� HTTP �������.
                var xhr = new XMLHttpRequest();
                xhr.open('POST', that.options['uploadscript'], true);
                xhr.setRequestHeader("Content-Type", "application/x-binary; charset=x-user-defined");

				// ������������� �������� (����� ����� �� ������� ������� ��� � ��� ���������)
                xhr.setRequestHeader("Upload-Id", that.options['uploadid']);
				// ������� ������ � �����
                xhr.setRequestHeader("Portion-From", from);
				// ������ ������
                xhr.setRequestHeader("Portion-Size", that.options['portion']);

				// ��������� �������
                that.xhrHttpTimeout=setTimeout(function() {
                    xhr.abort();
                    },that.options['timeout']);

				/*
				* ������� XMLHttpRequest.onProcess. ��������� ProgressBar.
				* @param evt �������
				*/
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {

						// ��������� ���������� ����������� � ��������� (� �������� �� 0.1)
                        var percentComplete = Math.round((loadfrom+evt.loaded) * 1000 / that.filesize);percentComplete/=10;
			
						// ��������� ������ ����� ������� ProgressBar
                        var width=Math.round((loadfrom+evt.loaded) * 300 / that.filesize);

						// ������� �������� ��������� ProgressBar'�, ������� � ���� �����
                        var div1=document.getElementById('cnuploader_progressbar');
                        var div2=document.getElementById('cnuploader_progresscomplete');

                        div1.style.display='block';
                        div2.style.display='block';
                        div2.style.width=width+'px';
                        if (percentComplete<30) {
                            div2.textContent='';
                            div1.textContent=percentComplete+'%';
                            }
                        else {
                            div2.textContent=percentComplete+'%';
                            div1.textContent='';
                            }
                        }
                    
                    }, false);



				/*
				* ������� XMLHttpRequest.onLoad. ��������� �������� ������.
				* @param evt �������
				*/
                xhr.addEventListener("load", function(evt) {

					// ������� �������
                    clearTimeout(that.xhrHttpTimeout);

					// ���� ������ �� ������ HTTP ������ 200, �� ������� ���� � ���������� �������.
                    if (evt.target.status!=200) {
                        alert(evt.target.responseText);
                        return;
                        }

					// ������� � ������� ������� ������ ������.
                    that.position+=that.options['portion'];

					// �������� ��������� ������, ���� ���� ��� �� ��������.
                    if (that.filesize>that.position) {
                        that.UploadPortion(that.position);
                        }
                    else {
						// ���� ��� ������ ���������, ������� �� ���� �������. XMLHttpRequest, ����� GET, 
						// PHP ������ ���-��.
                        var gxhr = new XMLHttpRequest();
                        gxhr.open('GET', that.options['uploadscript']+'?action=done', true);

						// ��������� ������������� �������.
                        gxhr.setRequestHeader("Upload-Id", that.options['uploadid']);

						/*
						* ������� XMLHttpRequest.onLoad. ��������� �������� ��������� �� ��������� �������� ����� :).
						* @param evt �������
						*/
                        gxhr.addEventListener("load", function(evt) {

							// ���� ������ �� ������ HTTP ������ 200, �� ������� ���� � ���������� �������.
                            if (evt.target.status!=200) {
                                alert(evt.target.responseText.toString());
                                return;
                                }
							// ���� ��� ���������, �� �������� ������������ ������. ��� ����� ���� ���������
							// �� �������� �������� ��� ��������� ��� ����� � �������������� ������.
                            else window.parent.location=that.options['redirect_success'];
                            }, false);

						// �������� HTTP GET ������
                        gxhr.sendAsBinary('');
                        }
                    }, false);

				/*
				* ������� XMLHttpRequest.onError. ������ ��� ��������
				* @param evt �������
				*/
                xhr.addEventListener("error", function(evt) {

					// ������� �������
                    clearTimeout(that.xhrHttpTimeout);

					// ������� ������� �� ������ �� ����� �������, ������ ������ ������� ��� ����������� �����.
					// XMLHttpRequest, ����� GET,  PHP ������ ���-��.
                    var gxhr = new XMLHttpRequest();

                    gxhr.open('GET', that.options['uploadscript']+'?action=abort', true);

					// ��������� ������������� �������.
                    gxhr.setRequestHeader("Upload-Id", that.options['uploadid']);

					/*
					* ������� XMLHttpRequest.onLoad. ��������� �������� ��������� �� ������ �������� :).
					* @param evt �������
					*/
                    gxhr.addEventListener("load", function(evt) {

						// ���� ������ �� ������ HTTP ������ 200, �� ������� ���� � ���������� �������.
                        if (evt.target.status!=200) {
                            alert(evt.target.responseText);
                            return;
                            }
                        }, false);

					// �������� HTTP GET ������
                    gxhr.sendAsBinary('');

					// ��������� ��������� �� ������
                    if (that.options['message_error']==undefined) alert("There was an error attempting to upload the file."); else alert(that.options['message_error']);
                    }, false);

				/*
				* ������� XMLHttpRequest.onAbort. ���� �� �����-�� ������� �������� ��������, �������� �������.
				* @param evt �������
				*/
                xhr.addEventListener("abort", function(evt) {
                    clearTimeout(that.xhrHttpTimeout);
                    that.UploadPortion(that.position);
                    }, false);

				// �������� ������ ������� POST
                xhr.sendAsBinary(evt.target.result);
                }
            };

        that.blob=null;

		// ������� ������ � ������ Blob. ��� ������� ��� ���� ��������� ����������� Blob.[.*]slice().
        if (this.file.slice) that.blob=this.file.slice(from,from+that.options['portion']);
        else {
            if (this.file.webkitSlice) that.blob=this.file.webkitSlice(from,from+that.options['portion']);
            else {
                if (this.file.mozSlice) that.blob=this.file.mozSlice(from,from+that.options['portion']);
                }
            }

		// ������� Blob (����� �����) � FileReader
        reader.readAsBinaryString(that.blob);
        }


	/*
	* �������� ����� �� ������
	* return �����. ���� �� 0, �� ��������� ������
	*/
    this.Upload=function() {

		// ������ �����, ����� ������������ �� �������� ���� ������
        var e=document.getElementById(this.options['form']);
        if (e) e.style.display='none';

        if (!this.file) return -1;
        else {

			// ���� ������ ����� ������ ������� ������� ����������� ����� �������
            if (this.filesize>this.options['portion']) this.UploadPortion(0,this.options['portion']);

			// ����� �������� ���� �������
            else this.UploadPortion(0,this.filesize);
            }
        }



    if (this.CheckBrowser()) {

		// ��������� �������� �� ���������
        if (this.options['portion']==undefined) this.options['portion']=1048576;
        if (this.options['timeout']==undefined) this.options['timeout']=15000;

        var that = this;

		// ������� ��������� ������� ������ �����
        document.getElementById(this.options['formfiles']).addEventListener('change', function (evt) {

            var files=evt.target.files;

			// ������� ������ ������ ����
            for (var i = 0, f; f = files[i]; i++) {
                that.filesize=f.size;
                that.file = f;
                break;
                }
            }, false);

		// ������� ��������� ������� onSubmit �����
        document.getElementById(this.options['form']).addEventListener('submit', function (evt) {
            that.Upload();
            (arguments[0].preventDefault)? arguments[0].preventDefault(): arguments[0].returnValue = false;
            }, false);
        }


    }