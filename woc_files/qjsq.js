var action="qjsq.do";
var title="";
function searchRs() {
	var map = getSuperSearch();
	jQuery("#dataTable").reloadGrid(map);
	//autoTitleForGrid();
	//setTitle();
}
function reload(){
	jQuery("#dataTable").reloadGrid();
	//autoTitleForGrid();
	//setTitle();
}
function autoTitleForGrid(){
	var num=0;
	var rows = jQuery("#dataTable").getSeletAllRow();
	jQuery.each(rows,function(i,e){
		//alert(rows[i]["qjzt"]);
		if(rows[i]["qjzt"]=="0"){
			num++;
		}
	});
	setTitleHtml(num);
}
//��������ת
function dcmcLink(cellValue, rowObject) {
	var qjsqid = rowObject["qjsqid"];
	return "<a href='javascript:void(0);' onclick=\"ckxx('" + qjsqid
			+ "')\" class='name'>" + cellValue + "</a>";
}
//�����б���º�����/ɾ����������ʾ
function setTitle(){
/*	var rows = jQuery("#dataTable").getSeletAllRow();
	var i=0;
	jQuery(rows).each(function(){
		var qjzt=jQuery(this)["qjzt"];
		if(qjzt=="0"){//�ݸ�״̬
			i++;
		}
	});*///�޷���ȡ�б������� ����
	/*jQuery.post("qjsq.do?method=getSwtj",function(data) {
		var wtjs=data["wtjs"];
		setTitleHtml(wtjs);
	},'json');*/
}


//�����б�ͷhtml
function setTitleHtml(num){
/*	var ts="";
	if(num!="0"){
		ts+="��ǰ����&nbsp;<font color='red'>["+num+"]&nbsp;</font>���ݸ�״̬(δ�ύ����)�����";
	}
	
	if(frameElement.api){
		var api = frameElement.api,W = api.opener;
		W.jQuery("#title").html(ts);
	} else {
		jQuery("#title").html(ts);
	}*/
	
}
//�鿴��Ϣ
function ckxx(qjsqid) {
	var query=jQuery("#query").val();
	var url = action+"?method=showView&qjsqid=" + qjsqid;
	var title = "���������Ϣ";
	showDialog(title, 800, 500, url);
}
//Э���������ݵ���
function qjxyCk(){
    var xxdm = jQuery("#xxdm").val();
	var qjxy = jQuery.trim(jQuery("#qjxy").val());
	if(jQuery("#usertype").val() == 'stu' && qjxy != null && qjxy != '' && qjxy != 'undifined'){
        if('11848' == xxdm || "14069" == xxdm){
            var isQjsqUrl = action + "?method=isQjsq";
            jQuery.get(isQjsqUrl,function (res) {
                if(res == '0'){
                    var url = "qjxysz.do?method=qjxyCk";
                    var title = "��ٳ�ŵ��";
                    showDialog(title, 750, 500, url);
                }else{
                    showAlert("����δ���ټ�¼���������뱻�˻ؼ�¼�����ύ���������µ���٣�");
                }
            });
        }else{
            var url = "qjxysz.do?method=qjxyCk";
            var title = "��ٳ�ŵ��";
            showDialog(title, 750, 500, url);
        }
	}else{
	    //��������ߵ�ר��ѧԺ ���������˻ػ�δ�ύ��������Ĳ��������
        if('11848' == xxdm || "14069" == xxdm){
            var isQjsqUrl = action + "?method=isQjsq";
            jQuery.get(isQjsqUrl,function (res) {
               if(res == '0'){
                   var url =action+"?method=add";
                   var title = "�������";
                   showDialog(title, 800, 500, url);
               }else{
                   showAlert("����δ���ټ�¼���������뱻�˻ؼ�¼�����ύ���������µ���٣�");
               }
            });
        }else{
            var url =action+"?method=add";
            var title = "�������";
            showDialog(title, 800, 500, url);
        }

	}
	
}
//ҳ����ת
function  go_Forward(){
	add();
	iFClose();
}

//����
function add() {
		var url =action+"?method=add";
		var title = "�������";
		showDialog(title, 800, 500, url);
		//reload();
		
}
//������ʽ��֤
function postfixCheck(){
	var wjm=jQuery("#formfile").val();
	if(wjm==""||wjm==null){
		return true;
	}
	var wjms=wjm.split(".");
	var hz=",bmp,jpg,jpeg,gif,png,pdf,doc,BMP,JPG,JPEG,GIF,PNG,PDF,DOC";
	if(hz.indexOf(wjms[wjms.length-1])<0){
		return false;
	}
	return true;
}

function checkDate(kssj){
	var  kssjDate=Date.parse(kssj.substring(0,10).replace(/\-/g,"/"));
	var nowDate =getNowFormatDate();
    if (Date.parse(nowDate) <= kssjDate) {//ʱ����Ա�  
           return false;  
    }   
    return true;
}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "/";
//    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
//            + " " + date.getHours() + seperator2 + date.getMinutes();
    return currentdate;
}
function save(url,checkId){
	if(!postfixCheck()){
		return showAlert("���ϴ�֧�ֵĸ�����ʽ��");
	}
	var xxdm=jQuery("#xxdm").val();
	if("12866"==xxdm||"13029"==xxdm){
		checkId+="-jzdh";
	}
	if("70002"==xxdm){
		checkId+="-xnxw";
	}
	if("13323"==xxdm){//����ְҵѧԺ
		if(jQuery("#lxsj").val()==null || jQuery("#lxsj").val()==""){
			showAlert('��Уʱ�䲻��Ϊ�գ�');return false;
		}
	}
	if("11998"==xxdm){
		if (checkDate(jQuery("#kssj").val())) {
			return showAlert('��ʼʱ�䲻��С�ڵ���ʱ�䣡');
		}
	}
	if("12872"==xxdm){
		var  myselect=document.getElementById("qjlxid");
		var index=myselect.selectedIndex ;
		var store = myselect.options[index].text;		
		if(store==("����")){		
			if (jQuery(".MultiFile-label").length == 0){
				showAlert("�뽫��<font color='red'>*</font>����Ŀ��д����");
				return false;
			}
		}
	}

	if("11548"==xxdm){
		checkId+="-jhrxm-jhrlxfs";
	}

	if("12727"==xxdm||"12688"==xxdm){//��ٽڴ��ֶ�
		var b = false;
		var qjjcstr="";
		var qjjc = document.getElementsByName("mdd");
		for(var i=0;i<qjjc.length;i++){
		    if(qjjc[i].checked){
		       b=true;
		       qjjcstr+=qjjc[i].value+",";
		    }
		}
		var qjts =jQuery("#qjts").val();
		if(qjts<1){
			if(b==false){
				return showAlert("��ѡ����ٽڴ�!");
			}
		}
		url+="&mdd="+ encodeURI(encodeURI(qjjcstr.substring(0,qjjcstr.length-1)));
	}
	if(!check(checkId)){
		return showAlert("�뽫��<font color='red'>*</font>����Ŀ��д������");
	}
	if(!checkother()){
		return false;
	}
	var qjts=jQuery("#qjts").val();
	var qjlxid = jQuery("#qjlxid").val();
	lock();
	
	var zysxpz = jQuery("#zysxpz").val();
	if(zysxpz!=null && zysxpz!="" && zysxpz!="null"){
		showAlert(zysxpz);
	}

	if("13344" == xxdm){
		showAlert("��������ε���˵�������<br>�����α���ͬ����������̡�",{},{"clkFun":function(){
				saveMethod(qjts,qjlxid,url);
		}});
	}else{
		saveMethod(qjts,qjlxid,url);
	}
}

function saveMethod(qjts,qjlxid,url){
	jQuery.post("qjsq.do?method=checkTs", {
		qjts:qjts,qjlxid:qjlxid,ssxydm:jQuery("#ssxydm").val()
	}, function(data) {
		if(data["success"]=="true"){
			jQuery("#form").ajaxSubmit({
				url:url,
				type:"post",
				dataType:"json",
				success:function(data){
					if(data["message"]=="����ɹ���"){
						showAlert(data["message"],{},{"clkFun":function(){
								if (parent.window){
									refershParent();
								}
							}});
					}else if(data["success"]=="true"){
						showAlert("�ύ�ɹ�!",{},{"clkFun":function(){
								if (parent.window){
									refershParent();
								}
							}});
					}
					else{
						showAlert(data["message"]);
					}
					setTitle();
				},
				contentType:"application/x-www-form-urlencoded;charset=utf-8"
			});
		}else{
			showAlert("����������������Ӧ��ٹ���!");
		}
		unlock();
	}, 'json');
}


function checkother(){
	if(chkNumInput("qjts")){
		showAlert("�����������Ϊ����!");
		return false;
	}
	var xxdm = jQuery("#xxdm").val();
	if(xxdm == "10351"){
		var qjjs = jQuery("#qjjs").val();
		if(jQuery.trim(qjjs) == ""){
			showAlert("��ٽ�������Ϊ��!");
			return false;
		}
	}
	
	return true;
}
/**
 * ��֤�Ƿ���ڿ���
 * @param ids Ҫ��֤�Ŀؼ�id "-"�ָ�
 * @return
 */
function check(ids){
	var id=ids.split("-");
	for(var i=0;i<id.length;i++){
		var lddm=jQuery("#"+id[i]).val();
		if(lddm==null||""==lddm){
			return false;
		}
	}
	return true;
}
//�޸�
function update() {
	var rows = jQuery("#dataTable").getSeletRow();
	if (rows.length != 1) {
		showAlertDivLayer("��ѡ��һ����Ҫ�޸ĵļ�¼��");
	} else {
		if(rows[0]['shzt']!='0'&&rows[0]['shzt']!='3'){
			showAlertDivLayer("ֻ���޸�δ�ύ�����˻صļ�¼��");
			return false;
		}
		var xh=rows[0]["xh"];
		jQuery.post("qjsq.do?method=isCanAdd", {
		}, function(data) {
			if(data["success"]=="true"){
				var url = action+'?method=update&xh='+xh+'&qjsqid=' + rows[0]["qjsqid"];
				var title = "�޸��������";
				showDialog(title, 800, 500, url);
				reload();
			}else{
				showAlert("�Ѿ����ڴ��������!");
			}
		}, 'json');
	}
}
//ɾ��
function del() {
	var ids = jQuery("#dataTable").getSeletIds();
	if (ids.length == 0) {
		showAlertDivLayer("��ѡ����Ҫɾ���ļ�¼��");
	} else {
		var rows = jQuery("#dataTable").getSeletRow();
		showConfirmDivLayer("��ȷ��Ҫɾ��ѡ��ļ�¼��", {
			"okFun" : function() {
				jQuery.post(action+"?method=del", {
					values : ids.toString()
				}, function(data) {
					var mes="�ɹ�ɾ��"+data["num"]+"����";
					mes+="</br>";
					if(data["nodel"]!="-1"){
						mes+="<font color='red'>"+data["nodel"]+"</font>";
						mes+="</br>�������Ѿ��ύ����ɾ����";
					}
					showAlertDivLayer(mes);
					reload();
					//showAlertDivLayer(mes);
				}, 'json');
			}
		});
	}
}
//�����ύ
function pltj() {
    var xxdm = jQuery("#xxdm").val();
	var ids = jQuery("#dataTable").getSeletIds();
	if (ids.length != 1) {
		showAlertDivLayer("��ѡ��һ����Ҫ�ύ�ļ�¼��");
	} else {
		var rows = jQuery("#dataTable").getSeletRow();
		var shzt = rows[0]["shzt"];
		showConfirmDivLayer("��ȷ��Ҫ�ύѡ��ļ�¼��", {
			"okFun" : function() {
				if(shzt!="3"){
                    //��������ߵ�ר��ѧԺ ���������˻ػ�δ�ύ��������Ĳ��������
                    if('11848' == xxdm || "14069" == xxdm){
                        var isQjsqUrl = action + "?method=isQjsq";
                        jQuery.get(isQjsqUrl,function (res) {
                            if(res == '0'){
                                // ��֤�Ƿ���ύ
                                jQuery.post(action+"?method=checkTs", {
                                    qjts:rows[0]["qjts"],qjlxid:rows[0]["qjlxid"],ssxydm:rows[0]["xydm"]
                                }, function(data) {
                                    if(data["success"]=="true"){
                                        jQuery.post(action+"?method=pltj", {
                                            values : ids.toString(),
                                            lcid : rows[0]['splcid'],
                                            xh : rows[0]['xh'],
                                            ssxydm : rows[0]['xydm']
                                        }, function(data) {
                                            showAlertDivLayer(data["message"]);
                                            jQuery("#dataTable").reloadGrid();
                                        }, 'json');
                                    }else{
                                        showAlertDivLayer("����������������Ӧ��ٹ���!");
                                    }
                                }, 'json');
                            }else{
                                showAlert("����δ���ټ�¼���������뱻�˻ؼ�¼�����ύ���������µ���٣�");
                            }
                        });
                    }else{
                        // ��֤�Ƿ���ύ
                        jQuery.post(action+"?method=checkTs", {
                            qjts:rows[0]["qjts"],qjlxid:rows[0]["qjlxid"],ssxydm:rows[0]["xydm"]
                        }, function(data) {
                            if(data["success"]=="true"){
                                jQuery.post(action+"?method=pltj", {
                                    values : ids.toString(),
                                    lcid : rows[0]['splcid'],
                                    xh : rows[0]['xh'],
                                    ssxydm : rows[0]['xydm']
                                }, function(data) {
                                    showAlertDivLayer(data["message"]);
                                    jQuery("#dataTable").reloadGrid();
                                }, 'json');
                            }else{
                                showAlertDivLayer("����������������Ӧ��ٹ���!");
                            }
                        }, 'json');
                    }

					
				}else{
                    if('11848' == xxdm || "14069" == xxdm){
                        var isQjsqUrl = action + "?method=isQjsq";
                        jQuery.get(isQjsqUrl,function (res) {
                            if(res == '0'){
                                jQuery.post(action+"?method=pltj", {
                                    values : ids.toString(),
                                    lcid : rows[0]['splcid'],
                                    xh : rows[0]['xh']
                                }, function(data) {
                                    showAlert(data["message"]);
                                    jQuery("#dataTable").reloadGrid();
                                }, 'json');
                            }else{
                                showAlert("����δ���ټ�¼���������뱻�˻ؼ�¼�����ύ���������µ���٣�");
                            }
                        });
                    }else{
                        jQuery.post(action+"?method=pltj", {
                            values : ids.toString(),
                            lcid : rows[0]['splcid'],
                            xh : rows[0]['xh']
                        }, function(data) {
                            showAlert(data["message"]);
                            jQuery("#dataTable").reloadGrid();
                        }, 'json');
                    }
				}
			}
		});
	}
}
////�ύ�ݸ�
//function tj() {
//	var rows = jQuery("#dataTable").getSeletRow();
//	if (rows.length != 1) {
//		showAlert("��ѡ��һ����Ҫ�ύ�ļ�¼��");
//	} else {
//		var qjzt=rows[0]["qjzt"];
//		
//		if(qjzt=="1"){
//			showAlertDivLayer("�Ѿ��ύ�������ظ��ύ��");
//			return false;
//		}
//		showConfirmDivLayer("��ȷ��Ҫ�ύѡ��ļ�¼��", {
//			"okFun" : function() {
//			jQuery.post("qjsq.do?method=tj&type=tj"+'&qjsqid=' + rows[0]["qjsqid"], {
//			}, function(data) {
//			   	 if(data["success"]=="true"){
//			   		showAlertDivLayer("�ύ�ɹ�!",{},{"clkFun":function(){
//						 reload();
//						}});
//				 }else{
//					 showAlertDivLayer("�ύʧ��!");
//				 }
//			   	setTitle();
//			}, 'json');
//		}
//		});
//	}
//}
function rcxwshLcinfo(){
	var ids = jQuery("#dataTable").getSeletIds();
	var rows = jQuery("#dataTable").getSeletRow();
	if (ids.length != 1){
		showAlertDivLayer("��ѡ��һ�����̸��ټ�¼��");
	} else {	
		var shlc=rows[0]["splcid"];
		var shztmc=rows[0]["shztmc"];
		if(shlc=="�������"||shztmc=="�������"){
			showAlertDivLayer("������������ˣ������������Ϣ��");
			return false;
		}
		var shzt=rows[0]["shzt"];
		if(shzt=="0"){
			showAlertDivLayer("��������δ�ύ�������������Ϣ��");
			return false;
		}
		showDialog("����������̸���",600,400,'comm_spl.do?method=lcgz&sqid='+rows[0]['qjsqid']+"&splc="+rows[0]['splcid']);
	}
}
	
//��ӡ�����
function printQjsqb(url){
	var qjsqid="";
	var rows = jQuery("#dataTable").getSeletRow();
	if (rows.length <1) {
		showAlertDivLayer("������ѡ��һ����¼��");
	} else {
		for(var i=0;i<rows.length;i++){
			if(i==rows.length-1){
				qjsqid +=rows[i]["qjsqid"];
			}else{
				qjsqid +=rows[i]["qjsqid"]+",";
			}
		}
		if("10511"==jQuery("#xxdm").val()){
			var url = "qjsq.do?method=printQjsqbOfHs&qjsqid="+qjsqid;
		}
		else{
			var url = url + "&qjsqid=" +qjsqid;
		}
		window.open(url);
	}
}

function cancle(){
	var ids = jQuery("#dataTable").getSeletIds();
	if (ids.length == 0) {
		showAlertDivLayer("��ѡ����Ҫ�����ļ�¼��");
	} else if (ids.length >1 ) {
		showAlertDivLayer("��ѡ��һ����Ҫ�����ļ�¼��");
	} else {
		var rows = jQuery("#dataTable").getSeletRow();
		
		for(var i=0;i<ids.length;i++){
			if(rows[i]['shzt']!='5'){
				showAlertDivLayer("ֻ������еļ�¼���ܱ�������");
				return false;
			}
		}
		
		showConfirmDivLayer("��ȷ��Ҫ����ѡ��ļ�¼��", {
			"okFun" : function() {
			
				jQuery.post(action+"?method=cancle", {
					values : ids.toString(),
					lcid : rows[0]['splcid']
				}, function(data) {
					
					showAlertDivLayer(data["message"]);
					reload();
				}, 'json');
				
			}
		});
	}
	
}

function selectQjkc(){
	var xh = jQuery("#xh").val();
	if (jQuery.trim(xh) != ""){
		showDialog("ѡ����ٿγ�",800,550,"qjsq.do?method=selectQjkc&xh="+xh);
	} else {
		showAlertDivLayer("����ѡ��ѧ����");
	}
}

function addQjkc(){
	var rows = jQuery("#dataTable").getSeletRow();
	if (rows.length == 0) {
		showAlertDivLayer("������ѡ��һ�ſγ̣�");
		return false;
	}
	var api = frameElement.api;
	var parentTbody = jQuery(api.get('parentDialog').document).find("#qjkc");
	jQuery("tr",parentTbody).remove();
	var kcbhs="";
	for ( var i = 0; i < rows.length; i++) {
		if(i!=0){
			kcbhs+=";"+rows[i]['kcbh'];
		}
		else{
			kcbhs+=rows[i]['kcbh'];
		}
		var tr = jQuery("<tr></tr>");
		var kcmcTd = jQuery("<td></td>");
		var rklsxmTd = jQuery("<td></td>");
		var rklslxfsTd = jQuery("<td></td>");
		var kcbh = jQuery("<input type='hidden' name='kcbh' id='kcbh"+i+"' value='"+rows[i]['kcbh']+"'/>");
		var kcmc = rows[i]['kcmc'];
		var rklsxm = rows[i]['rklsxm'];
		var rklslxfs = rows[i]['rklslxfs'];
		kcmcTd.append(kcmc);
		kcmcTd.append(kcbh);
		rklsxmTd.append(rklsxm);
		rklslxfsTd.append(rklslxfs);
		tr.append(kcmcTd).append(rklsxmTd).append(rklslxfsTd);
		parentTbody.append(tr);
	}
	parentTbody.append(jQuery("<input type='hidden' name='kcbhs' id='kcbhs' value='"+kcbhs+"'/>"));
	api.close();
	
}

	
//�㽭������Ի��ű���ȡʱ��������
	function dateDiffWithHours(sDate1, sDate2){ 
		  sDate1 = sDate1.replaceAll("-","/");
		  sDate2 = sDate2.replaceAll("-","/");
		  var aDate, oDate1, oDate2,iDays;
		  oDate1= new Date(sDate1.split(' ')[0]);
		  oDate2= new Date(sDate2.split(' ')[0]);
		  aDate = parseInt((oDate2 - oDate1) / 1000 / 60 / 60 /24);
		  iDays = accAdd(getCommonDate(sDate1,sDate2),(aDate-1)<=0?0:(aDate-1));
		  return iDays;
		}
	
//�㽭������Ի��ű���ȡ���ڲ������
	function dateDiffNotWithHours(sDate1, sDate2){ 
		  sDate1 = sDate1.replaceAll("-","/");
		  sDate2 = sDate2.replaceAll("-","/");
		  var aDate, oDate1, oDate2,iDays;
		  oDate1= new Date(sDate1.split(' ')[0]);
		  oDate2= new Date(sDate2.split(' ')[0]);
		  aDate = parseInt((oDate2 - oDate1) / 1000 / 60 / 60 /24);
		  return aDate;
		}

	/*�㽭������Ի���ȡ��β������ʱ����*/
	function getCommonDate(sDate1,sDate2){
	 	sarys = sDate1.split(' ');
	 	sarys1 = sarys[1].split(':');
	 	if(sarys1[0]>17){
	 		sarys1[0]=17;
	 		sarys1[1]=00;
	 	}
	 	if(sarys1[0]< 8){//9
	 		sarys1[0] = 8;//9
	 		sarys1[1] = 00;
	 	}
	 	cDate1 = sarys[0]+" 17:00";
	 	darys = sDate2.split(' ');
	 	darys1 = darys[1].split(':');
	 	if(darys1[0]>17){
	 		darys1[0]=17;
	 		darys1[1]=00;
	 	}
	 	if(darys1[0]< 8){//9
	 		darys1[0] = 8;//9
	 		darys1[1] = 00;
	 	}
	 	dDate1 = darys[0]+" 08:00";
	 	var Date1 = new Date(sarys[0]+" "+sarys1[0]+":"+sarys1[1]);
	 	var Date2 = new Date(cDate1);
	 	var Date3 = new Date(darys[0]+" "+darys1[0]+":"+darys1[1]);
	 	var Date4 = new Date(dDate1);
	 	if(sarys[0] == darys[0]){  
		 	return  parseFloat((Date3 - Date1) / 1000 / 60 / 60 /9).toFixed(1);
	 	}else{
		 	var iDays1 = parseFloat((Date2 - Date1) / 1000 / 60 / 60 /9).toFixed(1);
		 	var iDays2 = parseFloat((Date3 - Date4) / 1000 / 60 / 60 /9).toFixed(1);
		 	return accAdd(iDays1,iDays2);
	 	}
	 }
	/*�㽭������Ի��������ӷ�����*/
	function accAdd(arg1, arg2) {
		  var r1, r2, m;
		  try {
		      r1 = arg1.toString().split(".")[1].length
		  } catch (e) {
		      r1 = 0
		  }
		  try {
		      r2 = arg2.toString().split(".")[1].length
		  } catch (e) {
		      r2 = 0
		  }
		  m = Math.pow(10, Math.max(r1, r2))
		  return (arg1 * m + arg2 * m) / m
		}
		//��Number��������һ��add�����������������ӷ��㡣 
		Number.prototype.add = function (arg) {
		  return accAdd(arg, this);
		}

	//����ʡ����ҽҩ�ߵ�ְҵѧԺ
	function dateDiffFixed2(sDate1, sDate2){
        var  startDate=Date.parse(sDate1.replace(/\-/g,"/"));
        var  endDate=Date.parse(sDate2.replace(/\-/g,"/"));

        var oDate1, oDate2, iDays;
		oDate1 = new Date(startDate);
		oDate2 = new Date(endDate);
		iDays = parseFloat((oDate2 - oDate1) / 1000 / 60 / 60 /24).toFixed(2); //�����ĺ�����ת��Ϊ����
		return iDays;
	}

	function dateDiff(sDate1, sDate2){ 
	  var aDate, oDate1, oDate2, iDays;
	   // aDate = sDate1.split("-");
	  //  oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]); //ת��Ϊ12-18-2002��ʽ
	  oDate1= new Date(sDate1.substring(0,10).replaceAll("-","/"));
	   // aDate = sDate2.split("-");
	   // oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);
	  oDate2= new Date(sDate2.substring(0,10).replaceAll("-","/"));
	  iDays = parseInt((oDate1 - oDate2) / 1000 / 60 / 60 /24); //�����ĺ�����ת��Ϊ����
	  return iDays;
	}
			
	function getNextDate(curDate,n){
		        //var uom = new Date(new Date(curDate)-0+n*86400000);
		        var uom = new Date(Date.parse(curDate.replace(/-/g,   "/")));
		        uom.setDate(uom.getDate() + n);
		        uom = uom.getFullYear() + "-" +  (uom.getMonth()+1) + "-" + uom.getDate();
		        return uom;
		}

/**
 * �㽭����ְҵѧԺ�������Ի����������
 * @return
 */
function printXsqjspb(){
	/*ѡ��ļ�¼*/
	var rows = jQuery("#dataTable").getSeletRow();
	/*��ѡ��¼*/
	var ids = jQuery("#dataTable").getSeletIds();
	/*ѡ���¼�����������ȣ�*/
	var len = ids.length;
	if(0 == len ){/*ѡ��0����ʾ*/
		showAlertDivLayer("��ѡ����Ҫ���صļ�¼��");
		return false;
	}else if(1 == len){/*ѡ��һ����¼*/
		var url = "qjsq.do?method=getXsqjspbOne&xh="+rows[0]["xh"]+"&qjsqid="+rows[0]["qjsqid"];
		/*Ҳ����д��
		  var url = "qjsq.do?method=getXsqjspb";
		  url += "&xh=" + rows[0]["xh"] + "&qjsqid=" + rows[0]["qjsqid"];*/
		window.open(url);
	}else{
		var url = "qjsq.do?method=getXsqjspbZip&value="+ids;
		/*Ҳ����д��
		  var url = "qjsq.do?method=getXsqjspbZip";
		  url += "&url=" + ids;*/
		window.open(url);
	}
}