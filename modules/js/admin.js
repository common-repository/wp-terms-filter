jQuery(document).ready(function($){
	
	var entityMap = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;',
	  '/': '&#x2F;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	function escapeHtml (string) {
	  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
		return entityMap[s];
	  });
	}
	
	$all_tax = escapeHtml( $("#tax2filter").val() );
	
	$all_tax_arr = $.parseJSON( decodeURIComponent(  $("#tax2filter").val() ) );

	console.log( $all_tax_arr );
	
	$.each($all_tax_arr, function( index, value ){
		$('#'+value+'-all').prepend('<div class="term_filter_cont"><input class="term_filter_inp" type="text" value="" placeholder="Please, type name of category" /></div>');
		$('#'+value+'-pop').prepend('<div class="term_filter_cont"><input class="term_filter_inp" type="text" value="" placeholder="Please, type name of category" /></div>');
		
	})
	
	

	
	$('.term_filter_inp').keyup(function(){

		var this_value = $(this).val();
		var next_ul = $(this).parents('.tabs-panel');

		$('ul li', next_ul).show();
		$('ul li', next_ul).each(function(){
			
			//var mask = '/'+this_value+'/g';
			var cur_value = $(this).text();
			cur_value = cur_value.toLowerCase();
			this_value = this_value.toLowerCase();
			//var count = (cur_value.match( mask ) || []).length;
			var res = (cur_value.match(this_value) || []).length;
			if( res  == 1 ) {
				console.log( cur_value );	
				console.log( res );	
			}else{
				$(this).hide();
			}
			
		})
	})
});