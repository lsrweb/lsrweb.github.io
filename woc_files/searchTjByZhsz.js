//======================����¼�===========================

//���Υ��������
function clickZhszxm(obj){

    var className = obj.className;

    if(className == "selectedValue"){
        obj.className = "";
    }else{
        obj.className = "selectedValue";
    }



    //���Υ����������ѡ����
    removeYxtjByLd("zhszxmlb");

    //����Υ��������
       if($("zhszxmlb_ul")){
            //Υ���������
            creatZhszxmlbHtml("zhszxmlb");
        }


}

//���Υ��������
function clickZhszxmlb(obj){

    var className = obj.className;

    if(className == "selectedValue"){
        obj.className = "";
    }else{
        obj.className = "selectedValue";
    }
}
//======================����¼� end===========================


//���ѡ�е�Zhszxm
function getClickZhszxm(){

    //��obj
    var dm_num = document.getElementsByName("tj_zhszxm").length;
    var dm_arr = new Array();
    var dm_count = 0;

    for(var i=0;i<dm_num;i++){
        var obj = document.getElementsByName("tj_zhszxm")[i];
        if(obj.className == "selectedValue"){
            var dm_v = obj.id.split("_")[3];
            dm_arr[dm_count] = dm_v;
            dm_count++;
        }
    }

    return dm_arr;
}
//======================�������� end===========================

