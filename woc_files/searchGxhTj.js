//������ѡ�е�����(���Ի�)
function creatGxhClickedTj(tjdm,tjmc,dm,mc,obj){

	$("yxtj_gxh_div").style.display = "";
	
	var className = obj.className;
	var id = dm + "_" + tjdm + "_yxtj_dd";

	var dlHtml = $("yxtj_gxh_dl").innerHTML;

	if(className == "selectedValue"){//�����ѯ
		dlHtml+= "<dd id=\""+id+"\">";
		dlHtml+= "<a href=\"#\" onclick=\"removeGxhYxtj('"+tjdm+"','"+dm+"');return false;\" name=\"a_name_"+tjdm+"\" id=\"a_id_"+dm+"\">";
		dlHtml+= "<h5>"+tjmc+"</h5>";
		dlHtml+= mc;
		dlHtml+= "<span class=\"close-icon\" title=\"ȡ��\"></span></a></dd>";
		$("yxtj_gxh_dl").innerHTML = dlHtml;
	}else{
		$("yxtj_gxh_dl").innerHTML = dlHtml;
		$(id).outerHTML = "";
	}
	
	//�ж��Ƿ�Ҫ������ѡ����DIV
	hiddenYxtjDiv();
}

//������ѡ�е�����
function creatClickedTjByGxhSearch(){

	var input_num = $("searchGxhTjDiv").getElementsByTagName('input').length;

	if(input_num != 0){
		
		for(var i=0;i<input_num;i++){
			var obj = $("searchGxhTjDiv").getElementsByTagName('input')[i];
			var tjdm = obj.title;
			var dm = obj.value;
			
			if(tjdm != ""){
				//�ؼ�ID
				var a_id = "tj_" + tjdm+"_" + dm;
				var xs_id = tjdm+"_mc_xs_" + dm;
				var yc_id = tjdm+"_mc_yc_" + dm;
				
				if($(a_id)){
					$(a_id).onclick();
				}else if($(xs_id)){
					$(xs_id).onclick();
				}else if($(yc_id)){
					$(yc_id).onclick();
				}
			}
		}
	}
	
	if($("is_default")){
		$("is_default").value = "no";
	}
}

//�߼���ѯ������𣬸������
function showGxhTbody(obj,className1,className2,html1,html2){

	if(obj.className==className1){//����
		obj.className=className2;
		obj.innerHTML=html2;
		$("gjcx_gxh_div").style.display = "none";
	}else{//����
		obj.className=className1;
		obj.innerHTML=html1;
		$("gjcx_gxh_div").style.display = "";
	}
}

//�Ƴ���ѡ����
function removeGxhYxtj(tjdm,dm){

	var dd_id = dm + "_" + tjdm + "_yxtj_dd";
	var a_id = "tj_" + tjdm+"_" + dm;
	var xs_id = tjdm+"_mc_xs_" + dm;
	var yc_id = tjdm+"_mc_yc_" + dm;

	if($(dd_id)){
		$(dd_id).outerHTML = "";
	}
	
	if($(a_id)){
		$(a_id).className="";
	}

	if($(xs_id)){
		$(xs_id).className="";
	}
	
	if($(yc_id)){
		$(yc_id).className="";
	}
	
	//�ж��Ƿ�Ҫ������ѡ����DIV
	hiddenGxhYxtjDiv();
}

//������ѡ����DIV
function hiddenGxhYxtjDiv(){

	var dd_num = $("yxtj_gxh_div").getElementsByTagName('dd').length;
	
	if(dd_num == 0){
		$("yxtj_gxh_div").style.display = "none";
	}
}