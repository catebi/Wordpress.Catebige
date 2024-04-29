<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Kava
 */

get_header();

	$done = false;

	if ( function_exists( 'jet_theme_core' ) ) {
		$done = jet_theme_core()->locations->do_location( 'kava_child_404' );
	}

	if ( ! $done ) {
		do_action( 'kava-theme/site/site-content-before', '404' ); ?>

		<div <?php kava_content_class() ?>>
			<div class="row">

				<?php do_action( 'kava-theme/site/primary-before', '404' ); ?>

				<div id="primary" class="col-xs-12">

					<?php do_action( 'kava-theme/site/main-before', '404' ); ?>

					<main id="main" class="site-main">

						<section class="error-404 not-found">
							<div class="page-content">
								<div id="custom-404" class="container"></div>
							</div><!-- .page-content -->
						</section><!-- .error-404 -->

					</main><!-- #main -->

					<?php do_action( 'kava-theme/site/main-after', '404' ); ?>

				</div><!-- #primary -->

				<?php do_action( 'kava-theme/site/primary-after', '404' ); ?>

			</div>
		</div>

		<?php do_action( 'kava-theme/site/site-content-after', '404' );
	}

get_footer();
