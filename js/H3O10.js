var _0x4dc4e4=_0x29e2;(function(_0x54189c,_0x5b1d26){var _0x37083b=_0x29e2,_0x11642d=_0x54189c();while(!![]){try{var _0x58589d=parseInt(_0x37083b(0x8a))/0x1+-parseInt(_0x37083b(0x88))/0x2+parseInt(_0x37083b(0x7f))/0x3*(-parseInt(_0x37083b(0x8d))/0x4)+-parseInt(_0x37083b(0x76))/0x5+parseInt(_0x37083b(0x7b))/0x6*(-parseInt(_0x37083b(0x7c))/0x7)+-parseInt(_0x37083b(0x75))/0x8*(-parseInt(_0x37083b(0x7d))/0x9)+-parseInt(_0x37083b(0x85))/0xa*(-parseInt(_0x37083b(0x78))/0xb);if(_0x58589d===_0x5b1d26)break;else _0x11642d['push'](_0x11642d['shift']());}catch(_0x102df7){_0x11642d['push'](_0x11642d['shift']());}}}(_0x34a5,0x5fa58));class Cirkel{constructor(_0x33d66b,_0x549efa){var _0x1cab3b=_0x29e2;this['x']=_0x33d66b,this['y']=_0x549efa,this[_0x1cab3b(0x8f)]=0x3,this['diameter']=this['x']/0x5,this[_0x1cab3b(0x7a)]=_0x1cab3b(0x8b);}[_0x4dc4e4(0x91)](){var _0x59f016=_0x4dc4e4;push(),noStroke(),fill(this[_0x59f016(0x7a)]),ellipse(this['x'],this['y'],this[_0x59f016(0x87)]),pop();}[_0x4dc4e4(0x77)](){var _0xd28c29=_0x4dc4e4;this['x']<0x0&&(this['x']=canvas[_0xd28c29(0x84)]),this['x']>canvas[_0xd28c29(0x84)]&&(this['x']=0x0);}[_0x4dc4e4(0x92)](){var _0x54bc53=_0x4dc4e4;this['kleur']='mediumaquamarine',keyCode==LEFT_ARROW&&(this['x']-=this[_0x54bc53(0x8f)],this[_0x54bc53(0x7a)]=_0x54bc53(0x8e)),keyCode==RIGHT_ARROW&&(this['x']+=this['snelheid'],this[_0x54bc53(0x7a)]=_0x54bc53(0x8c)),this[_0x54bc53(0x77)]();}[_0x4dc4e4(0x86)](){var _0x5f4425=_0x4dc4e4;this[_0x5f4425(0x7a)]=_0x5f4425(0x8b),keyIsDown(LEFT_ARROW)&&(this['x']-=this[_0x5f4425(0x8f)],this[_0x5f4425(0x7a)]=_0x5f4425(0x8e)),keyIsDown(RIGHT_ARROW)&&(this['x']+=this[_0x5f4425(0x8f)],this[_0x5f4425(0x7a)]=_0x5f4425(0x8c)),this[_0x5f4425(0x77)]();}}function _0x29e2(_0x103906,_0x60940f){var _0x34a598=_0x34a5();return _0x29e2=function(_0x29e2a9,_0x5f34d1){_0x29e2a9=_0x29e2a9-0x75;var _0x6f1965=_0x34a598[_0x29e2a9];return _0x6f1965;},_0x29e2(_0x103906,_0x60940f);}var kleurenSet=['hotpink','deeppink',_0x4dc4e4(0x89),'palevioletred',_0x4dc4e4(0x80),_0x4dc4e4(0x7e),_0x4dc4e4(0x79),'steelblue'],kleurNummer=0x0;function setup(){var _0x5bcde3=_0x4dc4e4;canvas=createCanvas(0x2bc,0x190),c1=new Cirkel(canvas[_0x5bcde3(0x84)]/0x2,canvas[_0x5bcde3(0x82)]/0x4),c2=new Cirkel(canvas[_0x5bcde3(0x84)]/0x2,0x3*canvas['height']/0x4);}function draw(){var _0x916c33=_0x4dc4e4;background(kleurenSet[kleurNummer]),c1[_0x916c33(0x92)](),c1[_0x916c33(0x91)](),c2[_0x916c33(0x86)](),c2[_0x916c33(0x91)]();if(keyCode==0x20){c1[_0x916c33(0x8f)]=0x0,c2[_0x916c33(0x8f)]=0x0;if(c1['x']==c2['x']){textSize(0x28);var _0x559933=_0x916c33(0x81);text(_0x559933,0x1e,0x1e,canvas[_0x916c33(0x84)],canvas['height']);}else{textSize(0x28);var _0x58ef6f=_0x916c33(0x83)+c1['x']+'\x20c2\x20=\x20'+c2['x'];text(_0x58ef6f,0x1e,0x1e,canvas['width'],canvas['height']);}}}function _0x34a5(){var _0x24f92c=['diameter','558924mXHdpd','mediumvioletred','78829EgxtUq','mediumaquamarine','olive','4WEefCz','green','snelheid','length','teken','beweeg1','378648muYMnR','1714725nTGaIa','beweeg','176EAZKMy','skyblue','kleur','12wJhgkv','413581YtutOs','9qlkmnk','cornflowerblue','2349441SAzEMm','royalblue','Gelukt!','height','c1\x20=\x20','width','1118330rmhZsG','beweeg2'];_0x34a5=function(){return _0x24f92c;};return _0x34a5();}function keyTyped(){var _0x1d37eb=_0x4dc4e4;kleurNummer=floor(random(0x0,kleurenSet[_0x1d37eb(0x90)]));}