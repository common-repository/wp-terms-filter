<?php 
add_action('admin_footer', 'wcs_admin_footer');
function wcs_admin_footer(){
	global $post;
	$args = array(
	
	);
	$all_taxonomies = get_taxonomies(   );
	

	if( count($all_taxonomies ) > 0 )
	foreach( $all_taxonomies  as $single_tax ){

		$this_tax = get_taxonomy(  $single_tax  ) ;
		if( $this_tax->hierarchical ){
			$out_tax[] =  $single_tax;
		}		 
	}
	
	echo '<input type="hidden" id="tax2filter"  value="'.htmlentities( json_encode(  $out_tax ) ).'" />';
	
}

?>