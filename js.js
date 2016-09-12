var curIndex=0;
 //时间间隔 单位毫秒
 var timeInterval=5000;
 var arr=new Array();
 arr[0]="10.jpg";
 arr[1]="11.jpg";
 arr[2]="12.jpg";
 arr[3]="13.jpg";
 arr[4]="14.jpg";
 arr[5]="15.jpg";
 arr[6]="16.jpg";
 arr[7]="17.jpg";
 arr[8]="18.jpg";
 arr[9]="19.jpg";
 setInterval(changeImg,timeInterval);
 function changeImg()
 {
   var obj=document.getElementById("showpic");
    if (curIndex==arr.length-1) 
    {
        curIndex=0;
    }
    else
    {
        curIndex+=1;
    }
    obj.src="img/"+arr[curIndex];
 }