//======================����¼�===========================

//���ʡ
function clickSHENG(obj){
	clickSelect(obj);		
	createQuxHtml("shi");
	removeYxtjByLd("shi");
	removeYxtjByLd("qu");
	//createQuxHtml("sheng");
}
//�����
function clickSHI(obj){
	
	clickSelect(obj);
	createQuxHtml("qu");
	removeYxtjByLd("qu");
}
function clickSelect(obj){
	var className = obj.className;
	if(className == "selectedValue"){
		obj.className = "";
	}else{
		obj.className = "selectedValue";
	}
}

//���Υ��������
function clickQU(obj){
	
	clickSelect(obj);
}
//======================����¼� end===========================


//���ѡ�е�ʡ
function getClickSheng(){

	var dm_num = document.getElementsByName("tj_sheng").length;
	var dm_arr = new Array();
	var dm_count = 0;
	
	for(var i=0;i<dm_num;i++){
		var obj = document.getElementsByName("tj_sheng")[i];
		if(obj.className == "selectedValue"){
			var dm_v = obj.id.split("_")[3];
			dm_arr[dm_count] = dm_v;
			dm_count++;
		}
	}
	return dm_arr;
}
//���ѡ�е���
function getClickShi(){

	var dm_num = document.getElementsByName("tj_shi").length;
	var dm_arr = new Array();
	var dm_count = 0;
	
	for(var i=0;i<dm_num;i++){
		var obj = document.getElementsByName("tj_shi")[i];
		if(obj.className == "selectedValue"){
			var dm_v = obj.id.split("_")[3];
			dm_arr[dm_count] = dm_v;
			dm_count++;
		}
	}
	return dm_arr;
}

//======================�������� end===========================
function createQuxHtml(ldlx){
	
	
	var sheng = getClickSheng();
	var shi = getClickShi();

	//����
 	var parameter = {
	 	"sheng":sheng.join("!!@@!!"),
	 	"shi":shi.join("!!@@!!"),
 		"ldlx":ldlx
	};
 	if(ldlx=="sheng"){
 		ldlx = "qu";
 	}
 	var ul_id = ldlx+"_ul";
	var url="seachTjManage.do?method=creatQxHtml";
	jQuery.ajaxSetup({async:false});
	
	if($(ul_id)){
		jQuery("#"+ul_id).load(url,parameter,function(){
		
			var bm_num_id = ldlx+"_num";
			var bm_more_id = ldlx+"_more";
			var num = $(bm_num_id).value;

		});
	}
	
	jQuery.ajaxSetup({async:true});	
}
