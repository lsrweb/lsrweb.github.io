//======================����¼�===========================

//�����
function clickTid(obj){
	
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//���Ӫ��ѡ����
	removeYxtjByLd("yid");
	//�������ѡ����
	removeYxtjByLd("lid");
	//�������ѡ����
	removeYxtjByLd("pid");
	
	removeYxtjByLd("bid");
	
	removeYxtjByLd("ssid");
	
	//����Ӫ����
	if($("yid_ul")){
		if(jQuery.trim(jQuery("#yid_ul").text()) != ""){
			
			//����Ӫ
			createJxjzHtml("yid");
		}
	}
	
	//����������
	if($("lid_ul")){
		if(jQuery.trim(jQuery("#lid_ul").text()) != ""){
			
			//������
			createJxjzHtml("lid");
		}
	}
	
	//����������
	if($("pid_ul")){
		if(jQuery.trim(jQuery("#pid_ul").text()) != ""){
			
			//������
			createJxjzHtml("pid");
		}
	}
	
	if($("bid_ul")){
		if(jQuery.trim(jQuery("#bid_ul").text()) != ""){
			
			//������
			createJxjzHtml("bid");
		}
	}
	
	if($("ssid_ul")){
		if(jQuery.trim(jQuery("#ssid_ul").text()) != ""){
			
			//��������
			createJxjzHtml("ssid");
		}
	}

	
	/*	//¥��
	var ld_click = getClickLd();
	//�Ƿ���¥��
	var flag = false;
	if(ld_click.length > 0 ){
		flag = true;
	}

	//������������
	if($("qsh_ul")){
		if(flag){
			$("qsh_dl").style.display = "";
			//��������
			setNewQsh();
			//�����������DIV
			removeQshDiv();
		}else{
			$("qsh_dl").style.display = "none";
		}
	}*/
	
}

//���Ӫ
function clickYid(obj){
	
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//�������ѡ����
	removeYxtjByLd("lid");
	//�������ѡ����
	removeYxtjByLd("pid");
	
	removeYxtjByLd("bid");
	
	removeYxtjByLd("ssid");
	
	//����������
	if($("lid_ul")){
		//������
		
		if(jQuery.trim(jQuery("#lid_ul").text()) != ""){
			createJxjzHtml("lid");
		}
	}
	
	//����������
	if($("pid_ul")){
		//������
		
		if(jQuery.trim(jQuery("#pid_ul").text()) != ""){
			createJxjzHtml("pid");
		}
	}
	
	if($("bid_ul")){
		//������
		if(jQuery.trim(jQuery("#bid_ul").text()) != ""){
			createJxjzHtml("bid");
		}
	}
	
	if($("ssid_ul")){
		//��������
		
		if(jQuery.trim(jQuery("#ssid_ul").text()) != ""){
			createJxjzHtml("ssid");
		}
	}

/*	//������������
	if($("qsh_ul")){
		if(flag){
			$("qsh_dl").style.display = "";
			//��������
			setNewQsh();
			//�����������DIV
			removeQshDiv();
		}else{
			$("qsh_dl").style.display = "none";
		}
	}*/

}

//�����
function clickLid(obj){
	
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//�������ѡ����
	removeYxtjByLd("pid");
	
	removeYxtjByLd("bid");
	
	removeYxtjByLd("ssid");
	
	//����������
	if($("pid_ul")){
		//������
		
		if(jQuery.trim(jQuery("#pid_ul").text()) != ""){
			createJxjzHtml("pid");
		}
	}
	
	if($("bid_ul")){
		//������
		
		if(jQuery.trim(jQuery("#bid_ul").text()) != ""){
			createJxjzHtml("bid");
		}
	}
	
	if($("ssid_ul")){
		//��������
		
		if(jQuery.trim(jQuery("#ssid_ul").text()) != ""){
			createJxjzHtml("ssid");
		}
	}

//	//������������
//	if($("qsh_ul")){
//		if($("qsh_dl")){
//			if(flag){
//				$("qsh_dl").style.display = "";
//				//��������
//				setNewQsh();
//				//�����������DIV
//				removeQshDiv();
//			}else{
//				$("qsh_dl").style.display = "none";
//			}
//		}
//	}
}

//�����
function clickPid(obj){
	
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	removeYxtjByLd("bid");
	
	removeYxtjByLd("ssid");
	
	if($("bid_ul")){
		//������
		
		if(jQuery.trim(jQuery("#bid_ul").text()) != ""){
			createJxjzHtml("bid");
		}
	}
	
	if($("ssid_ul")){
		//��������
		
		if(jQuery.trim(jQuery("#ssid_ul").text()) != ""){
			createJxjzHtml("ssid");
		}
	}
	
}


function clickBid(obj){

	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	removeYxtjByLd("ssid");
	
	if($("ssid_ul")){
		//��������
		if(jQuery.trim(jQuery("#ssid_ul").text()) != ""){
			createJxjzHtml("ssid");
		}
	}
	
}

function clickSsid(obj){

	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
}

//======================����¼� end===========================

//======================��������===========================

//�����µ�԰��
function setNewYq(){
	
	$("yqdm_ul").innerHTML = "";
	
	//У��
	var xq_click = getClickTj("xqdm");
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"yqdm_ul\">";

	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;

	//����У��ȡ��԰��
	searchUtil.getGyglInfo("yq",xq_click,null,null,null,gyglyQx,userName,userDep,function(data){
		if(data !=null && data.length >0){
		
			for(var i=0;i<data.length;i++){
				divHtml += "<li>";
				divHtml += "<a href=\"#\" class=\"\"";
				divHtml += " onclick=\"clickYq(this);";
				divHtml += "creatClickedTj('yqdm','԰��','"+data[i].yqdm+"','"+data[i].yqmc+"',this);return false;\"";
				divHtml += " id=\"tj_yqdm_"+data[i].yqdm+"\" name=\"tj_yqdm\">";
				divHtml += data[i].yqmc;
				divHtml += "</a></li>";
			}
		}
	});

	divHtml += "</ul>";

	$("yqdm_ul").outerHTML = divHtml;

	dwr.engine.setAsync(true);

}

//�����µ�¥��
function setNewLd(){
	
	$("lddm_ul").innerHTML = "";
	
	//У��
	var xq_click = getClickTj("xqdm");
	//԰��
	var yq_click = getClickTj("yqdm");
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"lddm_ul\">";

	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;

	//����У��,԰��,ȡ��¥����Ϣ
	searchUtil.getGyglInfo("ld",xq_click,yq_click,null,null,gyglyQx,userName,userDep,function(data){
		if(data !=null && data.length >0){

			for(var i=0;i<data.length;i++){
			
				if(i<8){
					divHtml += "<li>";
					divHtml += "<a href=\"#\" class=\"\"";
					divHtml += " onclick=\"clickLd(this);";
					divHtml += "creatClickedTj('lddm','¥��','"+data[i].lddm+"','"+data[i].ldmc+"',this);return false;\"";
					divHtml += " id=\"lddm_mc_xs_"+data[i].lddm+"\" name=\"a_lddm_mc\">";
					divHtml += data[i].ldmc;
					divHtml += "</a></li>";
				}else{
					divHtml += "<li>";
					divHtml += "<a href=\"#\" class=\"\" style=\"display: none;\"";
					divHtml += " onclick=\"clickLd(this);";
					divHtml += "creatClickedTj('lddm','¥��','"+data[i].lddm+"','"+data[i].ldmc+"',this);return false;\"";
					divHtml += " id=\"lddm_mc_yc_"+data[i].lddm+"\" name=\"a_lddm_mc\">";
					divHtml += data[i].ldmc;
					divHtml += "</a></li>";
				}
			}
			
			if(data.length < 8){
				if($("ld_more")){
					$("ld_more").style.display = "none";
				}
			}else{
				$("ld_more").style.display = "";
				$("ld_more").innerHTML = "����";
				$("ld_more").className = "more_down";
			}
		}
	});

	divHtml += "</ul>";

	$("lddm_ul").outerHTML = divHtml;	

	dwr.engine.setAsync(true);

}

//�����µĲ���
function setNewCs(){
	
	$("cs_ul").innerHTML = "";
	
	//У��
	var xq_click = getClickTj("xqdm");
	//԰��
	var yq_click = getClickTj("yqdm");
	//¥��
	var ld_click = getClickLd();
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"cs_ul\">";

	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;

	//����У��,԰����¥����ȡ�ò���
	searchUtil.getGyglInfo("cs",xq_click,yq_click,ld_click,null,gyglyQx,userName,userDep,function(data){
		if(data !=null && data.length >0){
			for(var i=0;i<data.length;i++){
				divHtml += "<li>";
				divHtml += "<a href=\"#\" class=\"\"";
				divHtml += " onclick=\"clickCs(this);";
				divHtml += "creatClickedTj('cs','����','"+data[i].cs+"','"+data[i].cs+"',this);return false;\"";
				divHtml += " id=\"tj_cs_"+data[i].cs+"\" name=\"tj_cs\">";
				divHtml += data[i].cs;
				divHtml += "</a></li>";
			}
		}
	});

	divHtml += "</ul>";

	$("cs_ul").outerHTML = divHtml;	

	dwr.engine.setAsync(true);

}

//�����µ�����
function setNewQsh(){

	//У��
	var xq_click = getClickTj("xqdm");
	//԰��
	var yq_click = getClickTj("yqdm");
	//¥��
	var ld_click = getClickLd();
	//����
	var cs_click = getClickTj("cs");
	
	$("qsh_ul").innerHTML = "";
	
	var noTj = false;

	//�ж��Ƿ����������������ѡ��
	if(xq_click.length == 0 && yq_click.length == 0 && ld_click.length == 0 && cs_click.length == 0){
		noTj = true;
	}
	
	dwr.engine.setAsync(false);
	
	var divHtml = "<ul id=\"qsh_ul\">";

	var gyglyQx = $("gyglyQx").value;
	var userName = $("userName").value;
	var userDep = $("userDep").value;
	
	//����У��,԰����¥��������ȡ������
	searchUtil.getGyglInfo("qsh",xq_click,yq_click,ld_click,cs_click,gyglyQx,userName,userDep,function(data){
	
		if(data !=null && data.length >0){
		
			var qsh_count = 0;
			var qsh_py_num = 0;

			//ѭ��ƴ��
			for(var i=0;i<PY_BIG.length;i++){
			
				var	flag = true;
				over_flag = false;
				var qt_flag = true;
				var qt_num = 0;
				
				//�༶�����б�
				for(var j=0;j<data.length;j++){
					
					if(PY_BIG[i] == data[j].qshpy){
					
						var qi_id = "qsh_qt_qsh_"+PY_BIG[i];

						qsh_py_num++;
						
							if(qsh_count < 12){
								
								if(flag){
								
									divHtml += "<li>";
									
									divHtml += "<h5 id=\"qsh_py_xs_";
									divHtml += qsh_py_num
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;								
									flag = false;
								}
							
								if(qt_flag){
									divHtml += " <a href=\"#\" class=\"\" name=\"a_qsh_mc\" ";
									divHtml += " id=\"qsh_mc_xs_";
									divHtml += data[j].qshdm
									divHtml += "\"";
									divHtml += "onclick=\"clickQsh(this);";
									divHtml += "creatClickedTj('qsh','����','"+data[j].qshdm+"','"+data[j].qshmc+"',this);return false;\">";
									divHtml += data[j].qshmc;
									divHtml += "</a>";
																				
									qt_num++;
									
									//����
									if(qt_num == 3){
										
										qsh_count++;
										qsh_count++;
										
										divHtml += "<a href=\"#\" class=\"moreValue_click\" onclick=\"clickQshQt(\'"
										divHtml += data[j].qshpy
										divHtml += "\')\"";
										divHtml += "id=\"";
										divHtml += qi_id;
										divHtml += "\">����</a>";

										qt_num = 0;
										
										qt_flag = false;
															
									}
								}														
							}else{
								if(flag){
								
									divHtml += "<li>";
									
									divHtml += "<h5 style=\"display:none\" id=\"qsh_py_yc_";
									divHtml += qsh_py_num
									divHtml += "\">";
									divHtml += "<img src=\""+stylePath+"images/num_"+PY_BIG[i]+".gif\" /></h5>";
									//divHtml += PY_BIG[i];
									divHtml += "</h5>";
									
									over_flag = true;										
									flag = false;
								}
							
								if(qt_flag){
								
									divHtml += " <a href=\"#\" class=\"\" name=\"a_qsh_mc\" style=\"display:none;\"";
									divHtml += " id=\"qsh_mc_yc_";
									divHtml += data[j].qshdm
									divHtml += "\"";
									divHtml += "onclick=\"clickQsh(this);";
									divHtml += "creatClickedTj('qsh','����','"+data[j].qshdm+"','"+data[j].qshmc+"',this);return false;\">";
									divHtml += data[j].qshmc;
									divHtml += "</a>";			
										
									divHtml += "<input type=\"hidden\" name=\"qsh_hidv_yc\" id=\"qsh_hidv_yc_";
									divHtml += data[j].qshdm;
									divHtml += "\" value=\"";
									divHtml += data[j].qshdm;
									divHtml += "\"/>";
								
									qt_num++;
									
									//����
									if(qt_num == 3){
										
										qsh_count++;
										qsh_count++;
										
										divHtml += "<a href=\"#\" style=\"display:none;\" class=\"moreValue_click\" onclick=\"clickQshQt(\'"
										divHtml += data[j].qshpy
										divHtml += "\')\"";
										divHtml += "id=\"";
										divHtml += qi_id;
										divHtml += "\">����</a>";														
										
										divHtml += "<input type=\"hidden\" name=\"qsh_hidv_qt\" id=\"qsh_hidv_qt_";
										divHtml += data[j].qshdm;
										divHtml += "\" value=\"qsh_";
										divHtml += data[j].qshpy;
										divHtml += "\"/>";
										
										qt_num = 0;
										
										qt_flag = false;
															
									}
								}
							}
						
						if(qt_flag){
							qsh_count++;
						}
						
					}

				}	
				
				if(over_flag){
					divHtml+="</li>";
					over_flag = false;
				}		
			}

			if(qsh_count <= 12){
				if($("qsh_more")){
					$("qsh_more").style.display = "none";
				}
			}else{
				$("qsh_more").style.display = "";
				$("qsh_more").innerHTML = "����";
				$("qsh_more").className = "more_down";
			}
			
			divHtml += "<input type=\"hidden\" id=\"qsh_py_num\" value=\""+qsh_py_num+"\"/>";
		}
	});
			
	divHtml += "</ul>";
	$("qsh_ul").outerHTML = divHtml;	
	
	dwr.engine.setAsync(true);
	
}

//======================�������� end===========================

//======================�������� end===========================
//���ѡ�е���
function getClickTid(){

	//��obj
	var tid_num = document.getElementsByName("tj_tid").length;
	var tid_arr = new Array();
	var tid_count = 0;

	for(var i=0;i<tid_num;i++){
		var obj = document.getElementsByName("tj_tid")[i];
		if(obj.className == "selectedValue"){
			var tid_v = obj.id.split("_")[3];
			tid_arr[tid_count] = tid_v;
			tid_count++;
		}
	}
	
	return tid_arr;
}

//���ѡ�е�Ӫ
function getClickYid(){

	//Ӫobj
	var yid_num = document.getElementsByName("tj_yid").length;
	var yid_arr = new Array();
	var yid_count = 0;

	for(var i=0;i<yid_num;i++){
		var obj = document.getElementsByName("tj_yid")[i];
		if(obj.className == "selectedValue"){
			var yid_v = obj.id.split("_")[3];
			yid_arr[yid_count] = yid_v;
			yid_count++;
		}
	}
	
	return yid_arr;
}

//���ѡ�е���
function getClickLid(){

	//��obj
	
	var lid_num = document.getElementsByName("tj_lid").length;
	var lid_arr = new Array();
	var lid_count = 0;

	for(var i=0;i<lid_num;i++){
		var obj = document.getElementsByName("tj_lid")[i];
		if(obj.className == "selectedValue"){
			var lid_v = obj.id.split("_")[3];
			lid_arr[lid_count] = lid_v;
			lid_count++;
		}
	}
	
	return lid_arr;
}

//���ѡ�е���
function getClickPid(){

	//��obj
	var pid_num = document.getElementsByName("tj_pid").length;
	var pid_arr = new Array();
	var pid_count = 0;

	for(var i=0;i<pid_num;i++){
		var obj = document.getElementsByName("tj_pid")[i];
		if(obj.className == "selectedValue"){
			var pid_v = obj.id.split("_")[3];
			pid_arr[pid_count] = pid_v;
			pid_count++;
		}
	}
	
	return pid_arr;
}

//���ѡ�еİ�
function getClickBid(){

	//��obj
	var bid_num = document.getElementsByName("tj_bid").length;
	var bid_arr = new Array();
	var bid_count = 0;

	for(var i=0;i<bid_num;i++){
		var obj = document.getElementsByName("tj_bid")[i];
		if(obj.className == "selectedValue"){
			var bid_v = obj.id.split("_")[3];
			bid_arr[bid_count] = bid_v;
			bid_count++;
		}
	}
	
	return bid_arr;
}

//���ѡ�е�����
function getClickSsid(){

	//��obj
	var ssid_num = document.getElementsByName("tj_ssid").length;
	var ssid_arr = new Array();
	var ssid_count = 0;

	for(var i=0;i<ssid_num;i++){
		var obj = document.getElementsByName("tj_ssid")[i];
		if(obj.className == "selectedValue"){
			var ssid_v = obj.id.split("_")[3];
			ssid_arr[ssid_count] = ssid_v;
			ssid_count++;
		}
	}
	
	return ssid_arr;
}


//======================�������� end===========================

//======================��������html=begin==========================
//������ѵ����
function createJxjzHtml(ldlx){
	
	var ul_id = ldlx+"_ul";
	//��id
	var tid_click = getClickTid();
	//Ӫid
	var yid_click = getClickYid();
	//��id
	var lid_click = getClickLid();
	//��id
	var pid_click = getClickPid();
	//��id
	var bid_click = getClickBid();
	//����id
	var ssid_click = getClickSsid();
	//��ʽpath
	var v4Path = stylePath;
	//��ѵid
	var jxid = $("jxid").value;
	

	//����
 	var parameter = {
	 	"tid":tid_click.join("!!@@!!"),
	 	"yid":yid_click.join("!!@@!!"),
 		"lid":lid_click.join("!!@@!!"),
 		"pid":pid_click.join("!!@@!!"),
 		"bid":bid_click.join("!!@@!!"),
 		"ssid":ssid_click.join("!!@@!!"),
 		"ldlx":ldlx,
 		"stylePath":v4Path,
 		"jxid":jxid
	};

	var url="seachTjManage.do?method=creatJxjzHtml";

	jQuery.ajaxSetup({async:false});
	
	if($(ul_id)){
		jQuery("#"+ul_id).load(url,parameter,function(){
		
			var bm_num_id = ldlx+"_num";
			var bm_more_id = ldlx+"_more";
			var num = $(bm_num_id).value;

			if(num < 8){
				if($(bm_more_id)){
					$(bm_more_id).style.display = "none";
				}
			}else{
				$(bm_more_id).style.display = "";
				$(bm_more_id).innerHTML = "����";
				$(bm_more_id).className = "more_down";
			}
		});
	}
	
	jQuery.ajaxSetup({async:true});	
}
//======================��������html=end==========================
