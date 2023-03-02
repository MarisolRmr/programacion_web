<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bd_km' );

/** Database username */
define( 'DB_USER', 'admin' );

/** Database password */
define( 'DB_PASSWORD', '5ebb21b55f45f60957ca16ce30b01e3f48a14f329c6375e9' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Cp{[Tcw_0Bu5F5>#0w?OR;dCAh~1-Aaxz;w?x?*~Y%f]]TFPI^:83+iZ_U 9L(Ns' );
define( 'SECURE_AUTH_KEY',  'v/c~[/p$_%s!?)V#feW[Dq24]7iKD&w_3 Zl.{$[KA^Pl/.4^v4A?~k17`vgr,Ux' );
define( 'LOGGED_IN_KEY',    'gMl6j!fVGQl`@ucB))+hl/+{(aV(KW,~P(b`vUt#}lAr=$rNV^s|y#!LBQg87RoN' );
define( 'NONCE_KEY',        'u+xYh68xGb~AOIM!^O&w=Q?s9X[JCt71~r7tjMC+mI6ysx3*thxzc,fI8WD,C|9N' );
define( 'AUTH_SALT',        ' ]Z/%?WrpmEAi_[GJ< fH22^6cx~:@*)<e`Y^yghmx||2Kn1=sPb(^Fn5Z9p;hYp' );
define( 'SECURE_AUTH_SALT', '4TcW6#vq(WepE-DUdGlp*uwXgSW~!Rd/4N6I!Tfs2a{N+<EURh9?H7Mx0W3|sXaA' );
define( 'LOGGED_IN_SALT',   'Z])Th^z[8<Mkq)i6ky[j|0a-0LJacvGT#^ar)WkHO9ol:uJ[e$basqx?mZ{I2-`#' );
define( 'NONCE_SALT',       '6qOn.`+|R@vAT@m$tGeH]:6z^We7P+6Z1?tq9!DW]#k+_Kam^dw(5aV$-Ntu6~Fi' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
