$.widget("custom.menu", {
	options : {
		style : "horizontal", //or vertical
		data : null,
		animate : false,
		subMenuWidth : "200px"
	},
	_create : function() {
		var elem = this.element;
		this._bindMenu(elem);
		//this._test(elem);
	},
	_bindMenu : function(elem) {
		var menuBtn = $("li.rootMenuItem, li.subMenuItem", elem);
		var self = this;

		menuBtn.hover(self._onMenuBtnOver, self._onMenuBtnOut)
	},
	_onMenuBtnOver : function() {
		var menuBtn = $(this);
		var w = menuBtn.width();
		var position = menuBtn.position();
		menuBtn.children(".horizontal .subMenuItem .slideOutSubMenu").css({
			"left" : w,
			"top" : position.top
		});
		menuBtn.children('.slideOutSubMenu').stop(true, true).slideToggle('fast');
	},
	_onMenuBtnOut : function(menuBtn) {
		var menuBtn = $(this);
		menuBtn.children('.slideOutSubMenu').stop().slideToggle('fast');
	},
	_destroy : function() {
		this.element = null;
	}
});
