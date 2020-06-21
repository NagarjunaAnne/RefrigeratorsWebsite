(function($){
	//function for default css properties
    $.fn.highlightMenu = function(options) {
        var defaults = $.extend({
            'bgColor'       : '#427e8c',
            'color'         : '#ffffff',
            'hoverBgColor'  : '#fdcd0f',
            'hoverColor'    : 'black',
            'linkWidth'     : '125px',
			'fontStyle'     :  'italic',
			'fontStyleOut'   :  'normal', 
        }, options);
		
		//loop over each to set the css properties
        return this.each(function() {
            var items = $("li a");
            var o = defaults;
			//set the css properties 
            items.css('font-family', 'Georgia, Times New Roman, serif')
                 .css('font-weight', 'bold')
                 .css('text-decoration', 'none')
                 .css('background-color', o.bgColor)
                 .css('color', o.color)
                 .css('width', o.linkWidth);
			
			//change the css properties on mouseover
            items.mouseover(function() {
                $(this).css('background-color', o.hoverBgColor)
                       .css('color', o.hoverColor)
					   .css('font-style',o.fontStyle);
            });
			//change the css properties on mouseout
            items.mouseout(function() {
                $(this).css('background-color', o.bgColor)
                       .css('color', o.color)
					   .css('font-style',o.fontStyleOut);
            });
        });
    }
})(jQuery); 
