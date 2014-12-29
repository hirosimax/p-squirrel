// wait for page to be loaded to run 
jQuery(document).ready(function() {
	
	// select all p tags and loop through them
    jQuery('p').each(function() {

        // check if the p element contains only blank space using the trim method
        // then remove it
        var pHTML = jQuery(this).html();
        if( jQuery.trim( pHTML ) == '' || pHTML == '&nbsp;') {
            jQuery(this).hide();
        }

        /* but what if this paragraph has children? */
        var children = jQuery(this).children();

 		// if this paragraph has children
 		if (children) {
 		
 			//loop through each child
 			var counter = 0;
 			
 			
 			for (i = 0; i < children.length; i++) {
 				
 				// Get child HTML
 				var child = children[i];
 				var childHTML = jQuery(child).html();

 				//is this child empty?
 				if (jQuery.trim( childHTML ) == '' || childHTML == '&nbsp;') {
 					// yes, add 1 to the counter
 					counter++;
 				}
 			
	 			// are all the children empty?
	 			// check if counter is equal to children.length
	 			if ( counter == children.length) {
	 				jQuery(this).hide();
	 			}
 				

 			} 	
 		}


    });

	// Failsafes
	jQuery('p').has('area').show();
	jQuery('p').has('base').show();
	jQuery('p').has('br').show();
	jQuery('p').has('button').show();
	jQuery('p').has('canvas').show();
	jQuery('p').has('col').show();
	jQuery('p').has('command').show();
	jQuery('p').has('embed').show();
	jQuery('p').has('form').show();
	jQuery('p').has('hr').show();
	jQuery('p').has('iframe').show();
	jQuery('p').has('img').show();
	jQuery('p').has('input').show();
	jQuery('p').has('keygen').show();
	jQuery('p').has('link').show();
	jQuery('p').has('meta').show();
	jQuery('p').has('object').show();
	jQuery('p').has('param').show();
	jQuery('p').has('select').show();
	jQuery('p').has('source').show();
	jQuery('p').has('textarea').show();
	jQuery('p').has('track').show();
	jQuery('p').has('video').show();
	jQuery('p').has('wbr').show();

});