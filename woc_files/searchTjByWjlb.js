//======================����¼�===========================

//���Υ��������
function clickGyjllbdldm(obj){
			
	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
	
	//���Υ����������ѡ����
	removeYxtjByLd("gyjllbdm");
	
	//����Υ��������
	if($("gyjllbdm_ul")){
		//Υ���������
		creatWjHtml("gyjllbdm");
	}
	
}

//���Υ��������
function clickGyjllbdm(obj){

	var className = obj.className;
	
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
}
//======================����¼� end===========================


//���ѡ�е�gyjllbdldm
function getClickGyjllbdldm(){

	//��obj
	var dm_num = document.getElementsByName("tj_gyjllbdldm").length;
	var dm_arr = new Array();
	var dm_count = 0;

	for(var i=0;i<dm_num;i++){
		var obj = document.getElementsByName("tj_gyjllbdldm")[i];
		if(obj.className == "selectedValue"){
			var dm_v = obj.id.split("_")[3];
			dm_arr[dm_count] = dm_v;
			dm_count++;
		}
	}
	
	return dm_arr;
}
//======================�������� end===========================

