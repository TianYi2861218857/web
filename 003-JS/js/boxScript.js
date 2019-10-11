//脚本测试
	var csBoxTimer = 0
	var oCsBox = document.createElement('div');
	oCsBox.className = 'oCsBox';
	oWrap.appendChild(oCsBox);
	// oCsBox.style.width = 140 + 'px';
	oCsBox.style.position = 'absolute';
	oCsBox.style.left = oBird.offsetLeft + 'px';
	// console.log('left',oCsBox.style.left)
	oCsBox.style.top = 0 + 'px';
	// oCsBox.style.marginLeft = -(oBird.offsetWidth/2)+'px';
	// console.log('margin',oCsBox.style.marginLeft )
	oCsBox.style.height = oBird.offsetHeight +((space-oBird.offsetHeight)/2) +'px';
	function csBoxset(){
		var aTopLine = document.querySelectorAll('.topLine');
		var aBottomLine = document.querySelectorAll('.bottomLine');
		/*注意根据space值合理设置ocsBox的宽高(默认space值为250时w140/h100/top为-h的50%)
		  cstop值为向上跳的距离,csiSpeed值为改变的加速度;
		  设置space值时不能使下方管道高度为0;
		  当space值为250时,默认cstop值为8,csiSpeed值为8;
		*/
		var cstop = 8;
		var csiSpeed = 8;
		var t = oBird.offsetTop + iSpeed;
		oCsBox.style.top = t -((space-oBird.offsetHeight)/2)/2 +'px';
		// console.log(oCsBox.style.height)
		for(var i=0;i<aTopLine.length;i++){
			if (aTopLine[1].offsetLeft) {
				m = aTopLine[1].offsetLeft - aTopLine[0].offsetLeft;
			}
			oCsBox.style.width = m - aTopLine[i].offsetWidth + 'px';
			// console.log(oCsBox.style.width)
			if(checkBump(oBird,aTopLine[i])){
				oBird.style.backgroundColor = 'red';
			}else if (checkBump(oBird,aBottomLine[i])){	
				oBird.style.backgroundColor = 'green';
			}
			if(checkBump(oCsBox,aTopLine[i])){
				if(isDie){
					return false;
				}
				oBird.style.top = oBird.offsetTop + cstop + 'px';
				iSpeed +=csiSpeed;
				// oBird.style.backgroundColor = 'red';
				// console.log('Top style.top',oBird.style.top)
			}else if (checkBump(oCsBox,aBottomLine[i])){
				if(isDie){
					return false;
				}
				iSpeed -=csiSpeed;
				oBird.style.top = oBird.offsetTop - cstop + 'px';
				// oBird.style.backgroundColor = 'green';
				// console.log('Bottom style.top',oBird.style.top)
			}
		}
	}
	clearInterval(csBoxTimer);
	csBoxTimer = setInterval(csBoxset,24)