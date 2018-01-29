window.onload=function(){
	//banner
	let bannerbox=document.querySelector('.bannerr');
	let banner=document.querySelectorAll('.bannerr a.tu');
	let dian=document.querySelectorAll('.bannerr .dian .bullet');
	let rightbtn=document.querySelector('.bannerr .right');
	let leftbtn=document.querySelector('.bannerr .left');

	let n=0;
	function move(){
		n++;
		if(n>=banner.length){n=0;}
		banner.forEach(function(value,index){
			value.classList.remove('active');
			dian[index].classList.remove('selected');
		})
		banner[n].classList.add('active');
		dian[n].classList.add('selected');
	}
	let t=setInterval(move,2000);
	bannerbox.onmousemove=function(){
		clearInterval(t);
	}
	bannerbox.onmouseout=function(){
		t=setInterval(move,2000);
	}
	rightbtn.onclick=function(){
		move();
	}
	leftbtn.onclick=function(){
		n--;
		if(n<0){n=banner.length-1;}
		banner.forEach(function(value,index){
			value.classList.remove('active');
			dian[index].classList.remove('selected');
		})
		banner[n].classList.add('active');
		dian[n].classList.add('selected');
	}
	dian.forEach(function(val,index){
		val.onclick=function(){
			
			dian.forEach(function(v,i){
				console.log(1);
				v.classList.remove('active');
				banner[i].classList.remove('selected');
			})
			this.classList.add('active');
			banner[index].classList.add('selected');
			n=index;
		}
	})
}