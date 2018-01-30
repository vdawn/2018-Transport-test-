/*生成canvas图形*/

// 获取按钮id
var btnSave = document.getElementById("btnSave");
// 获取内容id
var more = document.getElementById("more");
var tag = true;
btnSave.onclick = function () {
	aClick();
	setTimeout("bClick()",1000);
	setTimeout("alert('已保存')",2000);	
}

function aClick() {
	html2canvas(more, {
		onrendered: function (canvas) {
			//添加属性
			canvas.setAttribute('id', 'thecanvas');
			//读取属性值
			// var value= canvas.getAttribute('id');
			document.getElementById('images').innerHTML = '';
			document.getElementById('images').appendChild(canvas);
		}
	});
}
function bClick() {
	var oCanvas = document.getElementById("thecanvas");

		/*自动保存为png*/
		// 获取图片资源
		var img_data1 = Canvas2Image.saveAsPNG(oCanvas, true).getAttribute('src');
		saveFile(img_data1, 'richer.png');
	}



var saveFile = function (data, filename) {
	var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
	save_link.href = data;
	save_link.download = filename;

	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	save_link.dispatchEvent(event);
};