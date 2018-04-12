(function Q(n){
    n||((a=(D=document).createElement('canvas')).width=a.height=s=(devicePixelRatio||1)*16);
    function E(s){return s.replace(/A/g,String.fromCharCode(60)).replace(/Z/g,String.fromCharCode(62))}
    with(c=a.getContext('2d')){
	font=s*0.8+'px monospace';
	textAlign='left';
	textBaseline='top';
	fillStyle='#000';
	fillRect(0,0,s,s);
	fillStyle='#fff';
	fillText(E('PROLOGUE(')+Q+E(')(0)EPILOGUE'),-n/2,0)
    }
    D.getElementById('l').href=a.toDataURL();
    D.onkeydown=function(e){Q(n+((e.which+2)%3-1)*8)};
})(0)
