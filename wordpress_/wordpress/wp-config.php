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
define( 'DB_NAME', 'bdwp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         '0|YRePeGsq=V}/!(qeK4~<8K#,7x^pK?_}-6A3tO0p$-sns&n-&4<|l*Vx9_%%2$' );
define( 'SECURE_AUTH_KEY',  '80jzwZ 9!xy}^m+w,R,6WyI8&SapE6B{jt@/OgUh-$?lHM%]r|p Ev+zQkG:O?CW' );
define( 'LOGGED_IN_KEY',    '+OH;6e@M,]IA(n{d|x4~Cqe),Uy9q=gD7CYWOIeD{8bmp.W_VhEN7,2Fjytq=O{/' );
define( 'NONCE_KEY',        '#H{=TIrX2Ui D6_TkTyBp0QF=KRGw?p9coZZOvT1-i5PKWS3hAeemoxO!7KrH&o<' );
define( 'AUTH_SALT',        'f.X>V4(1+0WdI9QK3T]wc,ttYxy!,~brQXN`<][`_z9aGq3-3ddP9,HL:HIM<?h|' );
define( 'SECURE_AUTH_SALT', '@dih:B{0b5oUk10w+NT~<*V:lScExO/vOo3_|q|+Boo/&TR/NE3iHha5`lcuKa2|' );
define( 'LOGGED_IN_SALT',   'D~wP&Tqy{l>lD-|3p#V1wZi eSIg<?ki9<>.:@7=si]wv$Tt O?4of&}6rKI|&Cf' );
define( 'NONCE_SALT',       '2FT{m;YG$v}_8HDXEu9$*vroj}6Tuo49,74xz``aY=(9hVPKnG585z{WRH6v?F.e' );

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
