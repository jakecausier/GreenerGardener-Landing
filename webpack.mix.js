let mix = require('laravel-mix');
mix.sass('style.scss', 'style.css').options({ processCssUrls: false });