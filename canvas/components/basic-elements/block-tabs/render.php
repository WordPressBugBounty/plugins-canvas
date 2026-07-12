<?php
/**
 * Tabs block template
 *
 * @var     $attributes - block attributes
 * @var     $content - inner blocks
 * @var     $options - layout options
 *
 * @package Canvas
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$tabs_data = is_array( $attributes['tabsData'] ) ? $attributes['tabsData'] : array();

// tabActive may point past the last tab if the tabs count was reduced.
$tab_active = min( (int) $attributes['tabActive'], count( $tabs_data ) - 1 );

if ( $tabs_data && count( $tabs_data ) ) {
	$attributes['className'] .= ' cnvs-block-tabs-' . count( $tabs_data );
}

if ( 'vertical' === $attributes['tabsPosition'] ) {
	$attributes['className'] .= ' cnvs-block-tabs-' . $attributes['tabsPosition'];
}

?>

<div class="<?php echo esc_attr( $attributes['className'] ); ?>" <?php echo ( isset( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '' ); ?>>
	<div class="cnvs-block-tabs-buttons">
		<?php
		foreach ( $tabs_data as $i => $tab_title ) {
			$tab_class = 'cnvs-block-tabs-button';

			if ( $i === $tab_active ) {
				$tab_class .= ' cnvs-block-tabs-button-active';
			}

			?>
			<div class="<?php echo esc_attr( $tab_class ); ?>">
				<a href="#"><?php echo wp_kses_post( $tab_title ); ?></a>
			</div>
			<?php
		}
		?>
	</div>
	<div class="cnvs-block-tabs-content">
		<?php call_user_func( 'printf', '%s', $content ); ?>
	</div>
</div>
