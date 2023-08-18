//your JS code here. If required.
const d = new Date();
document.getElementById("demo").innerHTML = d.getMonth() + 1+"/"+d.getDate()+"/"+
	d.getYear()+", "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" PM";