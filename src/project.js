window.__require=function t(o,i,c){function e(r,n){if(!i[r]){if(!o[r]){var a=r.split("/");if(a=a[a.length-1],!o[a]){var h="function"==typeof __require&&__require;if(!n&&h)return h(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+r+"'")}r=a}var l=i[r]={exports:{}};o[r][0].call(l.exports,function(t){return e(o[r][1][t]||t)},l,l.exports,t,o,i,c)}return i[r].exports}for(var s="function"==typeof __require&&__require,r=0;r<c.length;r++)e(c[r]);return e}({Control:[function(t,o,i){"use strict";cc._RF.push(o,"a1dae+y/vtPtKkvz80JG/NP","Control"),cc.Class({extends:cc.Component,properties:{blockPrefab:cc.Prefab,camera:cc.Camera,background:cc.Node,canvas:cc.Node,scrollView:cc.Node,cameraNode:cc.Node,button:cc.Button,slider:cc.Slider,play:cc.SpriteFrame,suspend:cc.SpriteFrame,blockWidth:40,blockHeight:40,minScale:.1,maxScale:10,Rows:100,Cols:100,blockInitCount:100,switchOn:0,spaceBetweenBlock:.15,intervalMax:1},onLoad:function(){console.log("Control.js init"),this.button.node.on("click",function(t){var o=t.getComponent(cc.Sprite);0==this.switchOn?(this.switchOn=1,console.log("Switch On"),o.spriteFrame=this.suspend):(this.switchOn=0,console.log("Switch Off"),o.spriteFrame=this.play)},this);var t=cc.instantiate(this.blockPrefab);this.blockWidth=t.width,this.blockHeight=t.height,t.destroy(),this.map=new Array;for(var o=0;o<this.Rows;o++){this.map[o]=new Array;for(var i=0;i<this.Cols;i++){this.map[o][i]=new Array;for(var c=0;c<2;c++)this.map[o][i][c]=0}}this.blockPool=new cc.NodePool;for(var e=0;e<this.blockInitCount;++e){var s=cc.instantiate(this.blockPrefab);this.blockPool.put(s)}function r(){if(1==this.switchOn){for(var t=new Array(0,1,-1),o=0;o<this.Rows;o++)for(var i=0;i<this.Cols;i++){for(var c=0,e=0;e<3;e++)for(var s=0;s<3;s++)if(0!=t[e]||0!=t[s]){var r=o+t[e],n=i+t[s];r<this.Rows&&r>=0&&n<this.Cols&&n>=0&&1==Math.abs(this.map[r][n][0])&&(c+=1)}1==this.map[o][i][0]&&(c<2||c>3)&&(this.map[o][i][0]=-1),0==this.map[o][i][0]&&3==c&&(this.map[o][i][0]=2)}for(o=0;o<this.Rows;o++)for(i=0;i<this.Cols;i++)2==this.map[o][i][0]?(this.map[o][i][0]=0,this.createBlock(this.background,o,i)):-1==this.map[o][i][0]&&(this.map[o][i][0]=1,this.createBlock(this.background,o,i))}}this.createBlock(this.background,49,50),this.createBlock(this.background,49,49),this.createBlock(this.background,50,49),this.createBlock(this.background,50,48),this.createBlock(this.background,51,49),this.createBlock(this.background,51,50),this.createBlock(this.background,50,51),this.createBlock(this.background,38,62),this.createBlock(this.background,39,61),this.createBlock(this.background,40,61),this.createBlock(this.background,39,60),this.createBlock(this.background,38,60);var n=this;this.interval=1,this.slider.node.on("slide",function(t){n.interval=(1-t.progress)*this.intervalMax,n.unschedule(r),n.schedule(r,n.interval)},this),this.schedule(r,this.interval),this.isMoving=!1,this.background.on(cc.Node.EventType.TOUCH_END,function(t){var o=t.getTouches();if(console.log("touch end"),1==o.length){var i=o[0].getLocation(),c=t.getStartLocation();if(i.x==c.x&&i.y==c.y){console.log("chick");var e=this.background.convertToNodeSpaceAR(i),s=Math.floor(e.x/this.blockWidth)+this.Rows/2,r=Math.floor(e.y/this.blockHeight)+this.Cols/2;console.log("Chick "+s+" "+r+i),this.createBlock(this.background,s,r)}}},this)},start:function(){},createBlock:function(t,o,i){var c=null;if(0==this.map[o][i][0])(c=this.blockPool.size()>0?this.blockPool.get():cc.instantiate(this.blockPrefab)).parent=t,this.map[o][i][0]=1,this.map[o][i][1]=c.uuid,c.x=o*c.width-this.background.width/2+(o+1)*this.spaceBetweenBlock,c.y=i*c.height-this.background.height/2+(i+1)*this.spaceBetweenBlock,console.log("create Block X:"+o+" Y:"+i);else{var e=this.map[o][i][1];this.map[o][i][0]=0,c=t.getChildByUuid(e),this.map[o][i][1]=0,this.blockPool.put(c),console.log("remove X:"+o+" Y:"+i)}}}),cc._RF.pop()},{}],firstControl:[function(t,o,i){"use strict";cc._RF.push(o,"f3fb9k4dvNGrauZV6PDl5ke","firstControl"),cc.Class({extends:cc.Component,properties:{startGameButton:cc.Button,audio:{default:null,type:cc.AudioClip}},onLoad:function(){var t=cc.audioEngine.play(this.audio,!0,1);console.log("Music current:"+t),this.startGameButton.node.on("click",function(t){cc.director.loadScene("secondScene")},this)},start:function(){}}),cc._RF.pop()},{}]},{},["Control","firstControl"]);