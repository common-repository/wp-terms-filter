<?php 

add_action('wp_print_scripts', 'wcs_add_script_fn');
function wcs_add_script_fn(){



	if(is_admin()){	
		wp_enqueue_media();
		wp_enqueue_script('wcs_admi11n_js', plugins_url('/js/admin.js', __FILE__ ), array('jquery'  ), '1.0' ) ;
	
	  }else{

	
		
	  }
}
?>