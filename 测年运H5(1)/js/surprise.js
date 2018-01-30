    /*生成canvas图形*/

	// 获取按钮id
	var btnSave = document.getElementById("btnSave");
	// 获取内容id
	var more = document.getElementById("more");
	// 进行canvas生成
	btnSave.onclick = function () {
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
		btnSave.style.display = 'none';
	}

	/*
	 * 说明
	 * 不支持跨域图片
	 * 不能在浏览器插件中使用
	 * 部分浏览器上不支持SVG图片
	 * 不支持Flash
	 */
	var Download = document.getElementById("Download");
	Download.onclick = function () {
		var oCanvas = document.getElementById("thecanvas");

		/*自动保存为png*/
		// 获取图片资源
		var img_data1 = Canvas2Image.saveAsPNG(oCanvas, true).getAttribute('src');
		saveFile(img_data1, 'richer.png');


		/*下面的为原生的保存，不带格式名*/
		// 这将会提示用户保存PNG图片
		// Canvas2Image.saveAsPNG(oCanvas);
	}
	// 保存文件函数
	var saveFile = function (data, filename) {
		var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
		save_link.href = data;
		save_link.download = filename;

		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		save_link.dispatchEvent(event);
	};
