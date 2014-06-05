module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				stripBanners: true,
				separator: ';',
				banner: '/*! \n<%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
				separator: '\n/* ---------------------------- */\n'
			},
			basic: {
				src: [
					'lib/AXConfig.js',
					'lib/AXUtil.js',
					'lib/AXCore.js'
				],
				dest: 'lib/AXJ.js'
			},
			extras: {
				src: [
					'lib/AXJ.js',
					'lib/AXDOMRange.js',
					'lib/AXDrag.js',
					'lib/AXEditor.js',
					'lib/AXExcelConvert.js',
					'lib/AXSplit.js',
					'lib/AXGrid.js',
					'lib/AXHtmlElement.js',
					'lib/AXInput.js',
					'lib/AXMobileMenu.js',
					'lib/AXModal.js',
					'lib/AXModelControl.js',
					'lib/AXModelControlGrid.js',
					'lib/AXMultiSelector.js',
					'lib/AXProgress.js',
					//'lib/AXScheduleCalendar.js',
					'lib/AXSearch.js',
					'lib/AXSelect.js',
					//'lib/AXSlidePPT.js',
					'lib/AXSlideViewer.js',
					'lib/AXTab.js',
					//'lib/AXTimeTable.js',
					'lib/AXTopDownMenu.js',
					'lib/AXTree.js',
					'lib/AXUpload5.js',
					'lib/AXUserSelect.js',
					'lib/AXValidator.js',
					'lib/AXWaterfall.js'
				],
				dest: 'dist/<%= pkg.name %>.all.js'
			}
		},
		uglify: {
			options: {
				mangle: false,
				preserveComments: false
			},
			my_target: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.all.js']
				}
			}
		},
		cssmin: {
			add_banner: {
				options: {
					banner: '/*! \n<%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
				},
				files: {
					'ui/arongi/AXJ.min.css':
						[
							'ui/arongi/*.css',
							'!ui/arongi/dx-*.css',
							'!ui/arongi/tx-*.css',
							'!ui/arongi/mx-*.css',
							'!ui/arongi/font-*.css',
							'!ui/arongi/*.min.css',
							'!ui/arongi/page.css',
							'!ui/arongi/preset.css'
						],
					'ui/bulldog/AXJ.min.css':
						[
							'ui/bulldog/*.css',
							'!ui/bulldog/dx-*.css',
							'!ui/bulldog/tx-*.css',
							'!ui/bulldog/mx-*.css',
							'!ui/bulldog/font-*.css',
							'!ui/bulldog/*.min.css',
							'!ui/bulldog/page.css',
							'!ui/bulldog/preset.css'
						],
					'ui/cocker/AXJ.min.css':
						[
							'ui/cocker/*.css',
							'!ui/cocker/dx-*.css',
							'!ui/cocker/tx-*.css',
							'!ui/cocker/mx-*.css',
							'!ui/cocker/font-*.css',
							'!ui/cocker/*.min.css',
							'!ui/cocker/page.css',
							'!ui/cocker/preset.css'
						],
					'ui/flybasket/AXJ.min.css':
						[
							'ui/flybasket/*.css',
							'!ui/flybasket/dx-*.css',
							'!ui/flybasket/tx-*.css',
							'!ui/flybasket/mx-*.css',
							'!ui/flybasket/font-*.css',
							'!ui/flybasket/*.min.css',
							'!ui/flybasket/page.css',
							'!ui/flybasket/preset.css'
						],
					'ui/kakao/AXJ.min.css':
						[
							'ui/kakao/*.css',
							'!ui/kakao/dx-*.css',
							'!ui/kakao/tx-*.css',
							'!ui/kakao/mx-*.css',
							'!ui/kakao/font-*.css',
							'!ui/kakao/*.min.css',
							'!ui/kakao/page.css',
							'!ui/kakao/preset.css'
						]
				}
			}
		}
	});
	//grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('js-concat', ['concat']);
	grunt.registerTask('js', ['concat','uglify']);
	grunt.registerTask('css', ['cssmin']);
};