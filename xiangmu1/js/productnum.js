$('#reduce').bind('click',function(){
			var mun=parseInt($('#prod_number').val());
			if(mun>0){
				$('#prod_number').val(mun-1)
			}
			else{
				return
			}
		})
$('#plus').bind('click',function(){
	var mun=parseInt($('#prod_number').val());
    $('#prod_number').val(mun+1)
})

//时间
function timer()  
        {  
            var ts = (new Date(2016, 5, 20, 0, 0, 0)) - (new Date());//计算剩余的毫秒数  
            var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数  
            var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数  
            var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
            var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数  
            dd = checkTime(dd);  
            hh = checkTime(hh);  
            mm = checkTime(mm);  
            ss = checkTime(ss);  
            //距结束仅剩<br><span class="bg_r">14</span><span class="bg_r">11</span><span class="col_r">:</span><span class="bg_r">39</span><span class="bg_r">09</span>
            var timerStr = '距结束仅剩<br><span class="bg_r">${t}</span><span class="bg_r">${h}</span><span class="col_r">:</span><span class="bg_r">${m}</span><span class="bg_r">${s}</span>';
            timerStr = timerStr.replace("${t}" , dd).replace("${h}" , hh).replace("${m}" , mm).replace("${s}" , ss);

            document.getElementById("timer").innerHTML = timerStr 
        }  
function checkTime(i)    
{    
   if (i < 10) {    
       i = "0" + i;    
    }    
   return i;    
} 