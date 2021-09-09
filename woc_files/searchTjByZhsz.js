//======================点击事件===========================

//点击违纪类别大类
function clickZhszxm(obj){

    var className = obj.className;

    if(className == "selectedValue"){
        obj.className = "";
    }else{
        obj.className = "selectedValue";
    }



    //清空违纪类别代码已选条件
    removeYxtjByLd("zhszxmlb");

    //存在违纪类别代码
       if($("zhszxmlb_ul")){
            //违纪类别联动
            creatZhszxmlbHtml("zhszxmlb");
        }


}

//点击违纪类别代码
function clickZhszxmlb(obj){

    var className = obj.className;

    if(className == "selectedValue"){
        obj.className = "";
    }else{
        obj.className = "selectedValue";
    }
}
//======================点击事件 end===========================


//获得选中的Zhszxm
function getClickZhszxm(){

    //团obj
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
//======================联动操作 end===========================

