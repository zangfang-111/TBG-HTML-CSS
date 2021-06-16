module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Project paths
		app: {
			src : 'src',
      dist : 'assets',
      vendor: 'bower_components',
      siteurl : {
        dev: 'https://seventhscoutsandbox.com/tbg/',
        prod : 'https://seventhscoutsandbox.com/tbg/'
      },
      maxwidth: 1440,
      maxheight: 750
		},

		imagemin: {
      build: {
        files: [
          {
            expand: true,
            cwd: '<%= app.src %>/images/',
            src: ['**/*.{jpg,gif,ico}'],
            dest: '<%= app.dist %>/images/'
          }
        ]
      }
    },

    pngquant: {
      dist: {
        options: {
          quality: 100
        },
        files: [{
          expand: true,
          cwd: '<%= app.src %>/images',
          src: '**/*.png',
          dest: '<%= app.dist %>/images'
        }]
      }
    },

    imageoptim: {
      myTask: {
        src: ['<%= app.dist %>/images']
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.src %>/images',
          src: '**/*.svg',
          dest: '<%= app.dist %>/images'
        }]
      }
    },

    less: {
			build: {
			  options: {
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-clean-css'))
          ],
          compress: true
        },
				files: { '<%= app.dist %>/styles/main.css' : '<%= app.src %>/styles/main.less' }
			}
		},

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        sourceMap: false
      },
      base: {
        files: {
          '<%= app.dist %>/styles/main.min.css':
          [
            '<%= app.vendor %>/owl-carousel2/dist/assets/owl.carousel.min.css',
            '<%= app.vendor %>/owl-carousel2/dist/assets/owl.theme.default.min.css',
            '<%= app.vendor %>/font-awesome/css/font-awesome.css',
            //'<%= app.vendor %>/animate.css',
            //'<%= app.vendor %>/ladda/dist/ladda-themeless.min.css',
            //'<%= app.vendor %>/ui-to-top/css/ui.totop.css',
            '<%= app.dist %>/styles/main.css'
          ]
        }
      }
    },

    /*cacheBust: {
      taskName: {
          options: {
              assets: '<%= app.dist %>/styles/main.min.css'
          },
          src: '../wp-content/themes/tbg/header.php'
      }
    },*/

    copy: {
      fonts: {
        files: [
          {
            expand: true,
            cwd: '<%= app.src %>/libs', src: ['**'], dest: '<%= app.dist %>/libs/'
          },
          {
            expand: true,
            cwd: '<%= app.vendor %>/font-awesome/fonts', src: ['**'], dest: '<%= app.dist %>/fonts/'
          },
          {
            expand: true,
            cwd: '<%= app.src %>/fonts', src: ['**'], dest: '<%= app.dist %>/fonts/'
          }
        ]
      },
      html: {
        files: [
          {
            expand: true,
            cwd: '<%= app.src %>/html/', src: ['*'], dest: '<%= app.dist %>'
          }
        ]
      }
    },

    concat: {
      options: {
        separator: ';',
        stripBanners: true
      },
      dist: {
        src: [
        '<%= app.vendor %>/jquery/dist/jquery.min.js',
        '<%= app.vendor %>/isMobile/isMobile.min.js',
        '<%= app.vendor %>/owl-carousel2/dist/owl.carousel.min.js',
        '<%= app.vendor %>/bootstrap/dist/js/bootstrap.js',
        '<%= app.vendor %>/masonry-docs/masonry.pkgd.js',
        '<%= app.vendor %>/responsive-images/dist/responsiveimages.js',
        '<%= app.vendor %>/jquery.easing/jquery.easing.min.js',
        '<%= app.vendor %>/imagesloaded/imagesloaded.pkgd.min.js',
        '<%= app.vendor %>/equalize/js/equalize.min.js',
        '<%= app.src %>/scripts/global/**/*.js',
        '<%= app.src %>/scripts/listeners/**/*.js',
        '<%= app.src %>/scripts/carousels.js',
        '<%= app.src %>/scripts/home.js',
        '<%= app.src %>/scripts/firm.js',
        '<%= app.src %>/scripts/nav.js',
        '<%= app.src %>/scripts/matter.js',
        '<%= app.src %>/scripts/phone_matter.js',
        '<%= app.src %>/scripts/app.js'
        ],
        dest: '<%= app.dist %>/scripts/scripts.js'
      }
    },

    uglify: {
      options: {
        mangle: false,
        beautify: false,
        compress: {
          drop_console: false
        }
      },
      scripts: {
        files: {
          '<%= app.dist %>/scripts/scripts.min.js':'<%= app.dist %>/scripts/scripts.js'
        }
      }
    },

    realFavicon: {
  		favicons: {
  			src: '<%= app.src %>/images/favicons/favicon-430x430-original.png',
  			dest: '<%= app.dist %>/images/favicons',
  			options: {
  				iconsPath: '/',
  				html: [ '<%= app.dist %>/images/favicons/*.html' ],
  				design: {
  					ios: {
  						pictureAspect: 'backgroundAndMargin',
  						backgroundColor: '#ffffff',
  						margin: '0%',
  						assets: {
  							ios6AndPriorIcons: false,
  							ios7AndLaterIcons: true,
  							precomposedIcons: true,
  							declareOnlyDefaultIcon: true
  						}
  					},
  					desktopBrowser: {},
  					windows: {
  						pictureAspect: 'noChange',
  						backgroundColor: '#ffffff',
  						onConflict: 'override',
  						assets: {
  							windows80Ie10Tile: false,
  							windows10Ie11EdgeTiles: {
  								small: true,
  								medium: true,
  								big: true,
  								rectangle: true
  							}
  						}
  					},
  					androidChrome: {
  						pictureAspect: 'noChange',
  						themeColor: '#ffffff',
  						manifest: {
  							display: 'standalone',
  							orientation: 'notSet',
  							onConflict: 'override',
  							declared: true
  						},
  						assets: {
  							legacyIcon: false,
  							lowResolutionIcons: false
  						}
  					},
  					safariPinnedTab: {
  						pictureAspect: 'silhouette',
  						themeColor: '#c61d23'
  					}
  				},
  				settings: {
  					compression: 2,
  					scalingAlgorithm: 'Mitchell',
  					errorOnImageTooSmall: false
  				}
  			}
  		}
  	},
	  watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['<%= app.src %>/html/*.html'],
        tasks: ['copy:html']
      },
      styles: {
        files: ['<%= app.src %>/styles/**/*'],
        tasks: ['styles']
      },
      scripts: {
        files: ['<%= app.src %>/scripts/**/*'],
        tasks: ['scripts']
      },
      images: {
        files: ['<%= app.src %>/images/**/*'],
        tasks: ['images']
      }
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'assets',
          livereload: true,
          open: true
        }
      }
    }
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // For Dev
	grunt.registerTask('styles', [
		'less',
		'cssmin',
		//'cacheBust'
	]);

  grunt.registerTask('scripts', [
		'concat',
		'uglify'
	]);

	grunt.registerTask('images', [
		'realFavicon',
		'imagemin',
		'pngquant',
		//'imageoptim',
		'svgmin'
	]);

	// For Distributions
	grunt.registerTask('dist', [
		'less',
		'cssmin',
		//'cacheBust',
		'concat',
    'uglify',
		'imagemin',
    'pngquant',
    //'imageoptim',
    'svgmin',
    'copy'
	]);

	// Set the default Grunt Task
	grunt.registerTask('default', ['dist', 'connect', 'watch']);
};
