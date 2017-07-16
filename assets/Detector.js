/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

Detector = {

	canvas : !! window.CanvasRenderingContext2D,
	webgl : ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	workers : !! window.Worker,
	fileapi : window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage : function () {

		var domElement = document.createElement( 'div' );

		domElement.style.fontFamily = 'monospace';
		domElement.style.fontSize = '18px';
		domElement.style.textAlign = 'center';
		domElement.style.background = '#eee';
		domElement.style.color = '#000';
		domElement.style.padding = '1em';
		domElement.style.width = '475px';
		domElement.style.margin = '5em auto 0';
        var version=window.navigator.userAgent.match(/MSIE\s\d+/);
        var vNumber=version[0].split(" ")[1];
        if(vNumber<=10){
            $("#admission").empty();
            domElement.innerHTML = window.WebGLRenderingContext ? [
                '很抱歉，您的显卡不支持 <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>'
            ].join( '\n' ) : [
                '很抱歉，您的浏览器版本太老了，可能会发生未知错误！<br/>',
                '请尝试使用：',
                '<a href="http://www.google.cn/chrome">Chrome</a>, ',
                '<a href="http://www.firefox.com.cn/">Firefox</a> or',
                '<a href="http://ie.sogou.com/">搜狗浏览器</a>'
            ].join( '\n' );
        }
		if ( ! this.webgl ) {
            $("#admission").empty();
			domElement.innerHTML = window.WebGLRenderingContext ? [
				'很抱歉，您的显卡不支持 <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>'
			].join( '\n' ) : [
				'很抱歉，您的浏览器版本太老了，可能会发生未知错误！<br/>',
				'请尝试使用：',
				'<a href="http://www.google.cn/chrome">Chrome</a>, ',
				'<a href="http://www.firefox.com.cn/">Firefox</a> or',
				'<a href="http://ie.sogou.com/">搜狗浏览器</a>'
			].join( '\n' );

		}

		return domElement;

	},

	addGetWebGLMessage : function ( parameters ) {

		var parent, id, domElement;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		domElement = Detector.getWebGLErrorMessage();
		domElement.id = id;

		parent.appendChild( domElement );

	}

};
