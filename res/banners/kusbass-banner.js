(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kusbass_banner_atlas_1", frames: [[0,0,512,512],[0,514,512,512]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3248,919);


(lib.kusbass06 = function() {
	this.initialize(ss["kusbass_banner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.kusbass08 = function() {
	this.initialize(ss["kusbass_banner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-811.85,-229.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-811.8,-229.7,1624,459.5);


(lib.kuzbas_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB132").s().p("AEbBdQgIgDgEgEQgGgGABgGQAAgEACgCQADgDAEgBQADgBAEACQAEABABAEIABAEQABABAEABIAQABIAQgBIAPgBQAEgBACgBQABgCgBgEIgGgMQgFgHgEgDQgEgDgHgDIgLgEQgSgHgNgUQgHgIgCgIQgDgKAEgIQADgFAHgGQAOgMAKgEQAIgEAMgBIAUgCIANABQAIACACAGQABADgCADQgBAEgEABQgDABgDAAIgGgBIgQAAQgKABgKADQgKAEgHAHQgHAGAAAGQABADAEAHIAJAKQAGAGAGAEIANAFIANAFQAGAEAFAGIAIAMQAGAKABAHQADAKgFAHQgFAHgMADIgJABIgLABIgXABQgMAAgKgDgACYBUQgDgDAAgHIAAgdQABgPACgNQAFgeAQgWQAMgQAPgHQAJgDAJgBQAKAAAIAEQANAGAGAQIADAPIACAOIABANIAAAIIABAIIAAARIAAAQIgBAUIgDAIIgEADIgFABIgFgBQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgCgDAAgDIAAgHIABgGIABgZIgEgBIgHgCIgQgCIgrAAQgBAQABAWIgBAHQAAAEgDACQgDADgFAAQgFgBgCgDgADRgoQgKAEgIALQgMARgFAXIAlAAIAOAAIAPADIgCgbIgDgSQgBgHgCgDQgEgEgHgBIgCAAQgFAAgFACgABLBKIghgEIgHgCIgFgDQgCgDAAgEIACgIQAHgTACgbIAAgvIgBgFIgDgDQgCgDAAgDQABgDACgDQAEgEAMAAIASABQAKABAHACIAQAIIAGAEIAFAFQACAEAAAHQgBAIgEAEIgDAEIgDADIgEAJQgDAFgDACQAKAAAKAEQAJAFAFAIQAFAJgBAJQgBAKgGAIQgFAGgJAHQgIAFgHACQgGABgIAAIgIAAgAA0AzQASAEASAAIADgBIAFgCIAKgHIADgDQABgDABgFIAAgFQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgDIgFgCIgFgBIgkAAQgCAQgFARgAA+guIgBACIgBADQABAWgBATIAEAAIAGgEIAHgHIAFgFIABgEIACgEIAEgFIAEgEIABgCIgCgCIgKgGIgEgCIgEgBIgLgCIgBACgAgDBDIgFgCQgIgBgOAAQgvAAghgDIgMgCIgFgDQgCgDAAgCQAAgGALgGQBFgkAxgtIhQgKIgZgCIgLgBIgFgCIgDgEQgBgEACgDQADgDAEgBQAFgCAKABIBoAMQAKABAEACQAEADADAFQACAEgBAFQgBADgEAEIgGAHQgtAng2AfIBLADIALABQAGACACAEQADAEgDAEQgDAFgFABIgBAAIgDAAgAlmBAQgEAAgDgCQgDgEACgHIACgFIACgFIABgGIAAgHQAAgKAFgPIAHgYQADgLAAgTIAAgfQABgHACgDQADgDAGAAQAFAAADAEQACAEAAAIIgBAhIgBANQAjgQAmgXIAHgEIAGgFIAEgFQACgDACgBQAEgCAEABQAEABACADQACADAAAEIgDAHQgFAGgLAHQgPAKgTAKIgiASIgNAGIAMAIIANAHIAPAEQAJACAEAEQAGAEAFAJQADAIgCAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFACIgFAAIgFgCIgDgGIgDgGQgCgDgGgCIgJgDQgMgDgKgGIgJgGIgJgFIgBAAIgDAGQgEAMgBAHIAAAPQgBAJgCAGQgDAHgFADQgDABgDAAIgBAAgAi9AwQgIgBgGgDQgIgGgDgMQgCgHAAgOIABgdQAAgRgCgNIgBgGQAAgDABgDQACgDAGgBQAFgBADADQADADACAHQACAMAAARIAAAdIAAATQAAAFACACQACACADABIAFAAQAEgBAFgEQAGgFACgEQADgFACgGIABgKIAAgVIAAgUIABgLQACgEAEgCQAEgDAFACQAFABABAEQABADgBAGQgBAIABAWQAAASgCAKQgCAJgEAGQgCAFgFAFQgLALgMAEQgGABgFAAIgDAAg");
	this.shape.setTransform(-0.0197,-0.0031);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-9.6,73.6,19.2);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.kusbass08();
	this.instance.setTransform(-140.3,-333.75,1,1,22.2021);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.7,-333.7,667.5,667.5);


(lib.kzb_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.kuzbas_bg("synched",0);
	this.instance.setTransform(800.3,-25.65);

	this.instance_1 = new lib.kuzbas_bg("synched",0);
	this.instance_1.setTransform(694.65,-25.65);

	this.instance_2 = new lib.kuzbas_bg("synched",0);
	this.instance_2.setTransform(582.35,-25.65);

	this.instance_3 = new lib.kuzbas_bg("synched",0);
	this.instance_3.setTransform(479.25,-25.65);

	this.instance_4 = new lib.kuzbas_bg("synched",0);
	this.instance_4.setTransform(800.3,-74.6);

	this.instance_5 = new lib.kuzbas_bg("synched",0);
	this.instance_5.setTransform(694.65,-74.6);

	this.instance_6 = new lib.kuzbas_bg("synched",0);
	this.instance_6.setTransform(582.35,-74.6);

	this.instance_7 = new lib.kuzbas_bg("synched",0);
	this.instance_7.setTransform(479.25,-74.6);

	this.instance_8 = new lib.kuzbas_bg("synched",0);
	this.instance_8.setTransform(800.3,-124.75);

	this.instance_9 = new lib.kuzbas_bg("synched",0);
	this.instance_9.setTransform(694.65,-124.75);

	this.instance_10 = new lib.kuzbas_bg("synched",0);
	this.instance_10.setTransform(582.35,-124.75);

	this.instance_11 = new lib.kuzbas_bg("synched",0);
	this.instance_11.setTransform(479.25,-124.75);

	this.instance_12 = new lib.kuzbas_bg("synched",0);
	this.instance_12.setTransform(800.3,-170.85);

	this.instance_13 = new lib.kuzbas_bg("synched",0);
	this.instance_13.setTransform(694.65,-170.85);

	this.instance_14 = new lib.kuzbas_bg("synched",0);
	this.instance_14.setTransform(582.35,-170.85);

	this.instance_15 = new lib.kuzbas_bg("synched",0);
	this.instance_15.setTransform(479.25,-170.85);

	this.instance_16 = new lib.kuzbas_bg("synched",0);
	this.instance_16.setTransform(800.3,-212.85);

	this.instance_17 = new lib.kuzbas_bg("synched",0);
	this.instance_17.setTransform(694.65,-212.85);

	this.instance_18 = new lib.kuzbas_bg("synched",0);
	this.instance_18.setTransform(582.35,-212.85);

	this.instance_19 = new lib.kuzbas_bg("synched",0);
	this.instance_19.setTransform(479.25,-212.85);

	this.instance_20 = new lib.kuzbas_bg("synched",0);
	this.instance_20.setTransform(800.3,-259.45);

	this.instance_21 = new lib.kuzbas_bg("synched",0);
	this.instance_21.setTransform(694.65,-259.45);

	this.instance_22 = new lib.kuzbas_bg("synched",0);
	this.instance_22.setTransform(582.35,-259.45);

	this.instance_23 = new lib.kuzbas_bg("synched",0);
	this.instance_23.setTransform(479.25,-259.45);

	this.instance_24 = new lib.kuzbas_bg("synched",0);
	this.instance_24.setTransform(800.3,-307.05);

	this.instance_25 = new lib.kuzbas_bg("synched",0);
	this.instance_25.setTransform(694.65,-307.05);

	this.instance_26 = new lib.kuzbas_bg("synched",0);
	this.instance_26.setTransform(582.35,-307.05);

	this.instance_27 = new lib.kuzbas_bg("synched",0);
	this.instance_27.setTransform(479.25,-307.05);

	this.instance_28 = new lib.kuzbas_bg("synched",0);
	this.instance_28.setTransform(800.3,-346.95);

	this.instance_29 = new lib.kuzbas_bg("synched",0);
	this.instance_29.setTransform(694.65,-346.95);

	this.instance_30 = new lib.kuzbas_bg("synched",0);
	this.instance_30.setTransform(582.35,-346.95);

	this.instance_31 = new lib.kuzbas_bg("synched",0);
	this.instance_31.setTransform(479.25,-346.95);

	this.instance_32 = new lib.kuzbas_bg("synched",0);
	this.instance_32.setTransform(368.3,-25.65);

	this.instance_33 = new lib.kuzbas_bg("synched",0);
	this.instance_33.setTransform(262.65,-25.65);

	this.instance_34 = new lib.kuzbas_bg("synched",0);
	this.instance_34.setTransform(150.35,-25.65);

	this.instance_35 = new lib.kuzbas_bg("synched",0);
	this.instance_35.setTransform(47.25,-25.65);

	this.instance_36 = new lib.kuzbas_bg("synched",0);
	this.instance_36.setTransform(368.3,-74.6);

	this.instance_37 = new lib.kuzbas_bg("synched",0);
	this.instance_37.setTransform(262.65,-74.6);

	this.instance_38 = new lib.kuzbas_bg("synched",0);
	this.instance_38.setTransform(150.35,-74.6);

	this.instance_39 = new lib.kuzbas_bg("synched",0);
	this.instance_39.setTransform(47.25,-74.6);

	this.instance_40 = new lib.kuzbas_bg("synched",0);
	this.instance_40.setTransform(368.3,-124.75);

	this.instance_41 = new lib.kuzbas_bg("synched",0);
	this.instance_41.setTransform(262.65,-124.75);

	this.instance_42 = new lib.kuzbas_bg("synched",0);
	this.instance_42.setTransform(150.35,-124.75);

	this.instance_43 = new lib.kuzbas_bg("synched",0);
	this.instance_43.setTransform(47.25,-124.75);

	this.instance_44 = new lib.kuzbas_bg("synched",0);
	this.instance_44.setTransform(368.3,-170.85);

	this.instance_45 = new lib.kuzbas_bg("synched",0);
	this.instance_45.setTransform(262.65,-170.85);

	this.instance_46 = new lib.kuzbas_bg("synched",0);
	this.instance_46.setTransform(150.35,-170.85);

	this.instance_47 = new lib.kuzbas_bg("synched",0);
	this.instance_47.setTransform(47.25,-170.85);

	this.instance_48 = new lib.kuzbas_bg("synched",0);
	this.instance_48.setTransform(368.3,-212.85);

	this.instance_49 = new lib.kuzbas_bg("synched",0);
	this.instance_49.setTransform(262.65,-212.85);

	this.instance_50 = new lib.kuzbas_bg("synched",0);
	this.instance_50.setTransform(150.35,-212.85);

	this.instance_51 = new lib.kuzbas_bg("synched",0);
	this.instance_51.setTransform(47.25,-212.85);

	this.instance_52 = new lib.kuzbas_bg("synched",0);
	this.instance_52.setTransform(368.3,-259.45);

	this.instance_53 = new lib.kuzbas_bg("synched",0);
	this.instance_53.setTransform(262.65,-259.45);

	this.instance_54 = new lib.kuzbas_bg("synched",0);
	this.instance_54.setTransform(150.35,-259.45);

	this.instance_55 = new lib.kuzbas_bg("synched",0);
	this.instance_55.setTransform(47.25,-259.45);

	this.instance_56 = new lib.kuzbas_bg("synched",0);
	this.instance_56.setTransform(368.3,-307.05);

	this.instance_57 = new lib.kuzbas_bg("synched",0);
	this.instance_57.setTransform(262.65,-307.05);

	this.instance_58 = new lib.kuzbas_bg("synched",0);
	this.instance_58.setTransform(150.35,-307.05);

	this.instance_59 = new lib.kuzbas_bg("synched",0);
	this.instance_59.setTransform(47.25,-307.05);

	this.instance_60 = new lib.kuzbas_bg("synched",0);
	this.instance_60.setTransform(368.3,-346.95);

	this.instance_61 = new lib.kuzbas_bg("synched",0);
	this.instance_61.setTransform(262.65,-346.95);

	this.instance_62 = new lib.kuzbas_bg("synched",0);
	this.instance_62.setTransform(150.35,-346.95);

	this.instance_63 = new lib.kuzbas_bg("synched",0);
	this.instance_63.setTransform(47.25,-346.95);

	this.instance_64 = new lib.kuzbas_bg("synched",0);
	this.instance_64.setTransform(800.3,347);

	this.instance_65 = new lib.kuzbas_bg("synched",0);
	this.instance_65.setTransform(694.65,347);

	this.instance_66 = new lib.kuzbas_bg("synched",0);
	this.instance_66.setTransform(582.35,347);

	this.instance_67 = new lib.kuzbas_bg("synched",0);
	this.instance_67.setTransform(479.25,347);

	this.instance_68 = new lib.kuzbas_bg("synched",0);
	this.instance_68.setTransform(800.3,298.05);

	this.instance_69 = new lib.kuzbas_bg("synched",0);
	this.instance_69.setTransform(694.65,298.05);

	this.instance_70 = new lib.kuzbas_bg("synched",0);
	this.instance_70.setTransform(582.35,298.05);

	this.instance_71 = new lib.kuzbas_bg("synched",0);
	this.instance_71.setTransform(479.25,298.05);

	this.instance_72 = new lib.kuzbas_bg("synched",0);
	this.instance_72.setTransform(800.3,247.9);

	this.instance_73 = new lib.kuzbas_bg("synched",0);
	this.instance_73.setTransform(694.65,247.9);

	this.instance_74 = new lib.kuzbas_bg("synched",0);
	this.instance_74.setTransform(582.35,247.9);

	this.instance_75 = new lib.kuzbas_bg("synched",0);
	this.instance_75.setTransform(479.25,247.9);

	this.instance_76 = new lib.kuzbas_bg("synched",0);
	this.instance_76.setTransform(800.3,201.8);

	this.instance_77 = new lib.kuzbas_bg("synched",0);
	this.instance_77.setTransform(694.65,201.8);

	this.instance_78 = new lib.kuzbas_bg("synched",0);
	this.instance_78.setTransform(582.35,201.8);

	this.instance_79 = new lib.kuzbas_bg("synched",0);
	this.instance_79.setTransform(479.25,201.8);

	this.instance_80 = new lib.kuzbas_bg("synched",0);
	this.instance_80.setTransform(800.3,159.8);

	this.instance_81 = new lib.kuzbas_bg("synched",0);
	this.instance_81.setTransform(694.65,159.8);

	this.instance_82 = new lib.kuzbas_bg("synched",0);
	this.instance_82.setTransform(582.35,159.8);

	this.instance_83 = new lib.kuzbas_bg("synched",0);
	this.instance_83.setTransform(479.25,159.8);

	this.instance_84 = new lib.kuzbas_bg("synched",0);
	this.instance_84.setTransform(800.3,113.2);

	this.instance_85 = new lib.kuzbas_bg("synched",0);
	this.instance_85.setTransform(694.65,113.2);

	this.instance_86 = new lib.kuzbas_bg("synched",0);
	this.instance_86.setTransform(582.35,113.2);

	this.instance_87 = new lib.kuzbas_bg("synched",0);
	this.instance_87.setTransform(479.25,113.2);

	this.instance_88 = new lib.kuzbas_bg("synched",0);
	this.instance_88.setTransform(800.3,65.6);

	this.instance_89 = new lib.kuzbas_bg("synched",0);
	this.instance_89.setTransform(694.65,65.6);

	this.instance_90 = new lib.kuzbas_bg("synched",0);
	this.instance_90.setTransform(582.35,65.6);

	this.instance_91 = new lib.kuzbas_bg("synched",0);
	this.instance_91.setTransform(479.25,65.6);

	this.instance_92 = new lib.kuzbas_bg("synched",0);
	this.instance_92.setTransform(800.3,25.7);

	this.instance_93 = new lib.kuzbas_bg("synched",0);
	this.instance_93.setTransform(694.65,25.7);

	this.instance_94 = new lib.kuzbas_bg("synched",0);
	this.instance_94.setTransform(582.35,25.7);

	this.instance_95 = new lib.kuzbas_bg("synched",0);
	this.instance_95.setTransform(479.25,25.7);

	this.instance_96 = new lib.kuzbas_bg("synched",0);
	this.instance_96.setTransform(368.3,347);

	this.instance_97 = new lib.kuzbas_bg("synched",0);
	this.instance_97.setTransform(262.65,347);

	this.instance_98 = new lib.kuzbas_bg("synched",0);
	this.instance_98.setTransform(150.35,347);

	this.instance_99 = new lib.kuzbas_bg("synched",0);
	this.instance_99.setTransform(47.25,347);

	this.instance_100 = new lib.kuzbas_bg("synched",0);
	this.instance_100.setTransform(368.3,298.05);

	this.instance_101 = new lib.kuzbas_bg("synched",0);
	this.instance_101.setTransform(262.65,298.05);

	this.instance_102 = new lib.kuzbas_bg("synched",0);
	this.instance_102.setTransform(150.35,298.05);

	this.instance_103 = new lib.kuzbas_bg("synched",0);
	this.instance_103.setTransform(47.25,298.05);

	this.instance_104 = new lib.kuzbas_bg("synched",0);
	this.instance_104.setTransform(368.3,247.9);

	this.instance_105 = new lib.kuzbas_bg("synched",0);
	this.instance_105.setTransform(262.65,247.9);

	this.instance_106 = new lib.kuzbas_bg("synched",0);
	this.instance_106.setTransform(150.35,247.9);

	this.instance_107 = new lib.kuzbas_bg("synched",0);
	this.instance_107.setTransform(47.25,247.9);

	this.instance_108 = new lib.kuzbas_bg("synched",0);
	this.instance_108.setTransform(368.3,201.8);

	this.instance_109 = new lib.kuzbas_bg("synched",0);
	this.instance_109.setTransform(262.65,201.8);

	this.instance_110 = new lib.kuzbas_bg("synched",0);
	this.instance_110.setTransform(150.35,201.8);

	this.instance_111 = new lib.kuzbas_bg("synched",0);
	this.instance_111.setTransform(47.25,201.8);

	this.instance_112 = new lib.kuzbas_bg("synched",0);
	this.instance_112.setTransform(368.3,159.8);

	this.instance_113 = new lib.kuzbas_bg("synched",0);
	this.instance_113.setTransform(262.65,159.8);

	this.instance_114 = new lib.kuzbas_bg("synched",0);
	this.instance_114.setTransform(150.35,159.8);

	this.instance_115 = new lib.kuzbas_bg("synched",0);
	this.instance_115.setTransform(47.25,159.8);

	this.instance_116 = new lib.kuzbas_bg("synched",0);
	this.instance_116.setTransform(368.3,113.2);

	this.instance_117 = new lib.kuzbas_bg("synched",0);
	this.instance_117.setTransform(262.65,113.2);

	this.instance_118 = new lib.kuzbas_bg("synched",0);
	this.instance_118.setTransform(150.35,113.2);

	this.instance_119 = new lib.kuzbas_bg("synched",0);
	this.instance_119.setTransform(47.25,113.2);

	this.instance_120 = new lib.kuzbas_bg("synched",0);
	this.instance_120.setTransform(368.3,65.6);

	this.instance_121 = new lib.kuzbas_bg("synched",0);
	this.instance_121.setTransform(262.65,65.6);

	this.instance_122 = new lib.kuzbas_bg("synched",0);
	this.instance_122.setTransform(150.35,65.6);

	this.instance_123 = new lib.kuzbas_bg("synched",0);
	this.instance_123.setTransform(47.25,65.6);

	this.instance_124 = new lib.kuzbas_bg("synched",0);
	this.instance_124.setTransform(368.3,25.7);

	this.instance_125 = new lib.kuzbas_bg("synched",0);
	this.instance_125.setTransform(262.65,25.7);

	this.instance_126 = new lib.kuzbas_bg("synched",0);
	this.instance_126.setTransform(150.35,25.7);

	this.instance_127 = new lib.kuzbas_bg("synched",0);
	this.instance_127.setTransform(47.25,25.7);

	this.instance_128 = new lib.kuzbas_bg("synched",0);
	this.instance_128.setTransform(-47.25,-25.65);

	this.instance_129 = new lib.kuzbas_bg("synched",0);
	this.instance_129.setTransform(-152.9,-25.65);

	this.instance_130 = new lib.kuzbas_bg("synched",0);
	this.instance_130.setTransform(-265.2,-25.65);

	this.instance_131 = new lib.kuzbas_bg("synched",0);
	this.instance_131.setTransform(-368.3,-25.65);

	this.instance_132 = new lib.kuzbas_bg("synched",0);
	this.instance_132.setTransform(-47.25,-74.6);

	this.instance_133 = new lib.kuzbas_bg("synched",0);
	this.instance_133.setTransform(-152.9,-74.6);

	this.instance_134 = new lib.kuzbas_bg("synched",0);
	this.instance_134.setTransform(-265.2,-74.6);

	this.instance_135 = new lib.kuzbas_bg("synched",0);
	this.instance_135.setTransform(-368.3,-74.6);

	this.instance_136 = new lib.kuzbas_bg("synched",0);
	this.instance_136.setTransform(-47.25,-124.75);

	this.instance_137 = new lib.kuzbas_bg("synched",0);
	this.instance_137.setTransform(-152.9,-124.75);

	this.instance_138 = new lib.kuzbas_bg("synched",0);
	this.instance_138.setTransform(-265.2,-124.75);

	this.instance_139 = new lib.kuzbas_bg("synched",0);
	this.instance_139.setTransform(-368.3,-124.75);

	this.instance_140 = new lib.kuzbas_bg("synched",0);
	this.instance_140.setTransform(-47.25,-170.85);

	this.instance_141 = new lib.kuzbas_bg("synched",0);
	this.instance_141.setTransform(-152.9,-170.85);

	this.instance_142 = new lib.kuzbas_bg("synched",0);
	this.instance_142.setTransform(-265.2,-170.85);

	this.instance_143 = new lib.kuzbas_bg("synched",0);
	this.instance_143.setTransform(-368.3,-170.85);

	this.instance_144 = new lib.kuzbas_bg("synched",0);
	this.instance_144.setTransform(-47.25,-212.85);

	this.instance_145 = new lib.kuzbas_bg("synched",0);
	this.instance_145.setTransform(-152.9,-212.85);

	this.instance_146 = new lib.kuzbas_bg("synched",0);
	this.instance_146.setTransform(-265.2,-212.85);

	this.instance_147 = new lib.kuzbas_bg("synched",0);
	this.instance_147.setTransform(-368.3,-212.85);

	this.instance_148 = new lib.kuzbas_bg("synched",0);
	this.instance_148.setTransform(-47.25,-259.45);

	this.instance_149 = new lib.kuzbas_bg("synched",0);
	this.instance_149.setTransform(-152.9,-259.45);

	this.instance_150 = new lib.kuzbas_bg("synched",0);
	this.instance_150.setTransform(-265.2,-259.45);

	this.instance_151 = new lib.kuzbas_bg("synched",0);
	this.instance_151.setTransform(-368.3,-259.45);

	this.instance_152 = new lib.kuzbas_bg("synched",0);
	this.instance_152.setTransform(-47.25,-307.05);

	this.instance_153 = new lib.kuzbas_bg("synched",0);
	this.instance_153.setTransform(-152.9,-307.05);

	this.instance_154 = new lib.kuzbas_bg("synched",0);
	this.instance_154.setTransform(-265.2,-307.05);

	this.instance_155 = new lib.kuzbas_bg("synched",0);
	this.instance_155.setTransform(-368.3,-307.05);

	this.instance_156 = new lib.kuzbas_bg("synched",0);
	this.instance_156.setTransform(-47.25,-346.95);

	this.instance_157 = new lib.kuzbas_bg("synched",0);
	this.instance_157.setTransform(-152.9,-346.95);

	this.instance_158 = new lib.kuzbas_bg("synched",0);
	this.instance_158.setTransform(-265.2,-346.95);

	this.instance_159 = new lib.kuzbas_bg("synched",0);
	this.instance_159.setTransform(-368.3,-346.95);

	this.instance_160 = new lib.kuzbas_bg("synched",0);
	this.instance_160.setTransform(-479.25,-25.65);

	this.instance_161 = new lib.kuzbas_bg("synched",0);
	this.instance_161.setTransform(-584.9,-25.65);

	this.instance_162 = new lib.kuzbas_bg("synched",0);
	this.instance_162.setTransform(-697.2,-25.65);

	this.instance_163 = new lib.kuzbas_bg("synched",0);
	this.instance_163.setTransform(-800.3,-25.65);

	this.instance_164 = new lib.kuzbas_bg("synched",0);
	this.instance_164.setTransform(-479.25,-74.6);

	this.instance_165 = new lib.kuzbas_bg("synched",0);
	this.instance_165.setTransform(-584.9,-74.6);

	this.instance_166 = new lib.kuzbas_bg("synched",0);
	this.instance_166.setTransform(-697.2,-74.6);

	this.instance_167 = new lib.kuzbas_bg("synched",0);
	this.instance_167.setTransform(-800.3,-74.6);

	this.instance_168 = new lib.kuzbas_bg("synched",0);
	this.instance_168.setTransform(-479.25,-124.75);

	this.instance_169 = new lib.kuzbas_bg("synched",0);
	this.instance_169.setTransform(-584.9,-124.75);

	this.instance_170 = new lib.kuzbas_bg("synched",0);
	this.instance_170.setTransform(-697.2,-124.75);

	this.instance_171 = new lib.kuzbas_bg("synched",0);
	this.instance_171.setTransform(-800.3,-124.75);

	this.instance_172 = new lib.kuzbas_bg("synched",0);
	this.instance_172.setTransform(-479.25,-170.85);

	this.instance_173 = new lib.kuzbas_bg("synched",0);
	this.instance_173.setTransform(-584.9,-170.85);

	this.instance_174 = new lib.kuzbas_bg("synched",0);
	this.instance_174.setTransform(-697.2,-170.85);

	this.instance_175 = new lib.kuzbas_bg("synched",0);
	this.instance_175.setTransform(-800.3,-170.85);

	this.instance_176 = new lib.kuzbas_bg("synched",0);
	this.instance_176.setTransform(-479.25,-212.85);

	this.instance_177 = new lib.kuzbas_bg("synched",0);
	this.instance_177.setTransform(-584.9,-212.85);

	this.instance_178 = new lib.kuzbas_bg("synched",0);
	this.instance_178.setTransform(-697.2,-212.85);

	this.instance_179 = new lib.kuzbas_bg("synched",0);
	this.instance_179.setTransform(-800.3,-212.85);

	this.instance_180 = new lib.kuzbas_bg("synched",0);
	this.instance_180.setTransform(-479.25,-259.45);

	this.instance_181 = new lib.kuzbas_bg("synched",0);
	this.instance_181.setTransform(-584.9,-259.45);

	this.instance_182 = new lib.kuzbas_bg("synched",0);
	this.instance_182.setTransform(-697.2,-259.45);

	this.instance_183 = new lib.kuzbas_bg("synched",0);
	this.instance_183.setTransform(-800.3,-259.45);

	this.instance_184 = new lib.kuzbas_bg("synched",0);
	this.instance_184.setTransform(-479.25,-307.05);

	this.instance_185 = new lib.kuzbas_bg("synched",0);
	this.instance_185.setTransform(-584.9,-307.05);

	this.instance_186 = new lib.kuzbas_bg("synched",0);
	this.instance_186.setTransform(-697.2,-307.05);

	this.instance_187 = new lib.kuzbas_bg("synched",0);
	this.instance_187.setTransform(-800.3,-307.05);

	this.instance_188 = new lib.kuzbas_bg("synched",0);
	this.instance_188.setTransform(-479.25,-346.95);

	this.instance_189 = new lib.kuzbas_bg("synched",0);
	this.instance_189.setTransform(-584.9,-346.95);

	this.instance_190 = new lib.kuzbas_bg("synched",0);
	this.instance_190.setTransform(-697.2,-346.95);

	this.instance_191 = new lib.kuzbas_bg("synched",0);
	this.instance_191.setTransform(-800.3,-346.95);

	this.instance_192 = new lib.kuzbas_bg("synched",0);
	this.instance_192.setTransform(-47.25,347);

	this.instance_193 = new lib.kuzbas_bg("synched",0);
	this.instance_193.setTransform(-152.9,347);

	this.instance_194 = new lib.kuzbas_bg("synched",0);
	this.instance_194.setTransform(-265.2,347);

	this.instance_195 = new lib.kuzbas_bg("synched",0);
	this.instance_195.setTransform(-368.3,347);

	this.instance_196 = new lib.kuzbas_bg("synched",0);
	this.instance_196.setTransform(-47.25,298.05);

	this.instance_197 = new lib.kuzbas_bg("synched",0);
	this.instance_197.setTransform(-152.9,298.05);

	this.instance_198 = new lib.kuzbas_bg("synched",0);
	this.instance_198.setTransform(-265.2,298.05);

	this.instance_199 = new lib.kuzbas_bg("synched",0);
	this.instance_199.setTransform(-368.3,298.05);

	this.instance_200 = new lib.kuzbas_bg("synched",0);
	this.instance_200.setTransform(-47.25,247.9);

	this.instance_201 = new lib.kuzbas_bg("synched",0);
	this.instance_201.setTransform(-152.9,247.9);

	this.instance_202 = new lib.kuzbas_bg("synched",0);
	this.instance_202.setTransform(-265.2,247.9);

	this.instance_203 = new lib.kuzbas_bg("synched",0);
	this.instance_203.setTransform(-368.3,247.9);

	this.instance_204 = new lib.kuzbas_bg("synched",0);
	this.instance_204.setTransform(-47.25,201.8);

	this.instance_205 = new lib.kuzbas_bg("synched",0);
	this.instance_205.setTransform(-152.9,201.8);

	this.instance_206 = new lib.kuzbas_bg("synched",0);
	this.instance_206.setTransform(-265.2,201.8);

	this.instance_207 = new lib.kuzbas_bg("synched",0);
	this.instance_207.setTransform(-368.3,201.8);

	this.instance_208 = new lib.kuzbas_bg("synched",0);
	this.instance_208.setTransform(-47.25,159.8);

	this.instance_209 = new lib.kuzbas_bg("synched",0);
	this.instance_209.setTransform(-152.9,159.8);

	this.instance_210 = new lib.kuzbas_bg("synched",0);
	this.instance_210.setTransform(-265.2,159.8);

	this.instance_211 = new lib.kuzbas_bg("synched",0);
	this.instance_211.setTransform(-368.3,159.8);

	this.instance_212 = new lib.kuzbas_bg("synched",0);
	this.instance_212.setTransform(-47.25,113.2);

	this.instance_213 = new lib.kuzbas_bg("synched",0);
	this.instance_213.setTransform(-152.9,113.2);

	this.instance_214 = new lib.kuzbas_bg("synched",0);
	this.instance_214.setTransform(-265.2,113.2);

	this.instance_215 = new lib.kuzbas_bg("synched",0);
	this.instance_215.setTransform(-368.3,113.2);

	this.instance_216 = new lib.kuzbas_bg("synched",0);
	this.instance_216.setTransform(-47.25,65.6);

	this.instance_217 = new lib.kuzbas_bg("synched",0);
	this.instance_217.setTransform(-152.9,65.6);

	this.instance_218 = new lib.kuzbas_bg("synched",0);
	this.instance_218.setTransform(-265.2,65.6);

	this.instance_219 = new lib.kuzbas_bg("synched",0);
	this.instance_219.setTransform(-368.3,65.6);

	this.instance_220 = new lib.kuzbas_bg("synched",0);
	this.instance_220.setTransform(-47.25,25.7);

	this.instance_221 = new lib.kuzbas_bg("synched",0);
	this.instance_221.setTransform(-152.9,25.7);

	this.instance_222 = new lib.kuzbas_bg("synched",0);
	this.instance_222.setTransform(-265.2,25.7);

	this.instance_223 = new lib.kuzbas_bg("synched",0);
	this.instance_223.setTransform(-368.3,25.7);

	this.instance_224 = new lib.kuzbas_bg("synched",0);
	this.instance_224.setTransform(-479.25,347);

	this.instance_225 = new lib.kuzbas_bg("synched",0);
	this.instance_225.setTransform(-584.9,347);

	this.instance_226 = new lib.kuzbas_bg("synched",0);
	this.instance_226.setTransform(-697.2,347);

	this.instance_227 = new lib.kuzbas_bg("synched",0);
	this.instance_227.setTransform(-800.3,347);

	this.instance_228 = new lib.kuzbas_bg("synched",0);
	this.instance_228.setTransform(-479.25,298.05);

	this.instance_229 = new lib.kuzbas_bg("synched",0);
	this.instance_229.setTransform(-584.9,298.05);

	this.instance_230 = new lib.kuzbas_bg("synched",0);
	this.instance_230.setTransform(-697.2,298.05);

	this.instance_231 = new lib.kuzbas_bg("synched",0);
	this.instance_231.setTransform(-800.3,298.05);

	this.instance_232 = new lib.kuzbas_bg("synched",0);
	this.instance_232.setTransform(-479.25,247.9);

	this.instance_233 = new lib.kuzbas_bg("synched",0);
	this.instance_233.setTransform(-584.9,247.9);

	this.instance_234 = new lib.kuzbas_bg("synched",0);
	this.instance_234.setTransform(-697.2,247.9);

	this.instance_235 = new lib.kuzbas_bg("synched",0);
	this.instance_235.setTransform(-800.3,247.9);

	this.instance_236 = new lib.kuzbas_bg("synched",0);
	this.instance_236.setTransform(-479.25,201.8);

	this.instance_237 = new lib.kuzbas_bg("synched",0);
	this.instance_237.setTransform(-584.9,201.8);

	this.instance_238 = new lib.kuzbas_bg("synched",0);
	this.instance_238.setTransform(-697.2,201.8);

	this.instance_239 = new lib.kuzbas_bg("synched",0);
	this.instance_239.setTransform(-800.3,201.8);

	this.instance_240 = new lib.kuzbas_bg("synched",0);
	this.instance_240.setTransform(-479.25,159.8);

	this.instance_241 = new lib.kuzbas_bg("synched",0);
	this.instance_241.setTransform(-584.9,159.8);

	this.instance_242 = new lib.kuzbas_bg("synched",0);
	this.instance_242.setTransform(-697.2,159.8);

	this.instance_243 = new lib.kuzbas_bg("synched",0);
	this.instance_243.setTransform(-800.3,159.8);

	this.instance_244 = new lib.kuzbas_bg("synched",0);
	this.instance_244.setTransform(-479.25,113.2);

	this.instance_245 = new lib.kuzbas_bg("synched",0);
	this.instance_245.setTransform(-584.9,113.2);

	this.instance_246 = new lib.kuzbas_bg("synched",0);
	this.instance_246.setTransform(-697.2,113.2);

	this.instance_247 = new lib.kuzbas_bg("synched",0);
	this.instance_247.setTransform(-800.3,113.2);

	this.instance_248 = new lib.kuzbas_bg("synched",0);
	this.instance_248.setTransform(-479.25,65.6);

	this.instance_249 = new lib.kuzbas_bg("synched",0);
	this.instance_249.setTransform(-584.9,65.6);

	this.instance_250 = new lib.kuzbas_bg("synched",0);
	this.instance_250.setTransform(-697.2,65.6);

	this.instance_251 = new lib.kuzbas_bg("synched",0);
	this.instance_251.setTransform(-800.3,65.6);

	this.instance_252 = new lib.kuzbas_bg("synched",0);
	this.instance_252.setTransform(-479.25,25.7);

	this.instance_253 = new lib.kuzbas_bg("synched",0);
	this.instance_253.setTransform(-584.9,25.7);

	this.instance_254 = new lib.kuzbas_bg("synched",0);
	this.instance_254.setTransform(-697.2,25.7);

	this.instance_255 = new lib.kuzbas_bg("synched",0);
	this.instance_255.setTransform(-800.3,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-837.1,-356.5,1674.2,713.1);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:0.1,scaleX:1.3185,scaleY:0.8377,skewX:21.0938,skewY:8.4585,x:-20.55,y:23.6},29).to({regX:0,regY:0,scaleX:0.8359,scaleY:1.2065,skewX:8.9909,skewY:-4.4766,x:0,y:0},30).to({scaleX:1,scaleY:1,skewX:0,skewY:0},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-497.9,-388.5,955.0999999999999,777.1);


// stage content:
(lib.kusbassbanner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.instance = new lib.title("synched",0);
	this.instance.setTransform(785.8,220.75,0.634,0.634,-2.4704,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Слой_2
	this.instance_1 = new lib.Символ2("synched",0);
	this.instance_1.setTransform(100.15,368.95,0.5923,0.5923,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81).to({startPosition:81},0).wait(9));

	// Слой_6
	this.instance_2 = new lib.Символ2("synched",0);
	this.instance_2.setTransform(1477.05,153.55,1.3081,1.3111,-169.7846,0,0,-20.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// Слой_4
	this.instance_3 = new lib.kzb_bg("synched",0);
	this.instance_3.setTransform(618.1,170.2,1.2822,1.2822,12.4528);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:1038.45,y:329.75},40).to({x:618.1,y:170.2},49).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(292.5,-266.8,1891.3000000000002,1273.5);
// library properties:
lib.properties = {
	id: 'FA18FF6738C8AF4FA1F74D62F76DE2D3',
	width: 1640,
	height: 480,
	fps: 30,
	color: "#FFCC33",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/kusbass_banner_atlas_1.png", id:"kusbass_banner_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FA18FF6738C8AF4FA1F74D62F76DE2D3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;