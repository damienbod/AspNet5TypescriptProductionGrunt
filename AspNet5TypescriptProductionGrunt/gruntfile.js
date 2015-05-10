module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-ts");

    grunt.initConfig({
        ts: {
            default : {
                src: ["app/**/*.ts"]
            }
        },
        concat: {
            venderjs: {
                src: [
                    "lib/angular/angular.min.js",
                    "lib/angular-ui-router/angular-ui-router.min.js",
                    "lib/angular-animate/angular-animate.min.js",
                    "lib/bootstrap/bootstrap.min.js",
                    "lib/angular-bootstrap/ui-bootstrap-tpls.min.js"
                ],
                dest: "wwwroot/production/vendor.min.js"
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            genesis: {
                files: {
                    'wwwroot/production/mycode.min.css': [
                       
                    ]
                }
            },
            vender: {
                files: {
                    'wwwroot/production/vender.min.css': [

                          "lib/bootstrap/bootstrap.min.css",
                          "content/font-awesome.min.css",
                          "content/ng.min.css",
                          "lib/angular-loading-bar/loading-bar.min.css"
                    ]
                }
            }
        },
        uglify: {
            genesis_min_files: {
                files: {
                    'wwwroot/production/mycode.min.js': [
                        "app/app.js"
                    ]
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        watch: {
            appFolderScripts: {
                files: ['app/**/*.js'],
                tasks: ['uglify']
            },
            appFolderCss: {
                files: ['content/**/*.css'],
                tasks: ['cssmin']
            }
        },


    });

    grunt.registerTask('development', ['ts', 'concat', 'uglify', 'cssmin', 'watch']);
    grunt.registerTask('buildserver', ['ts', 'concat', 'uglify', 'cssmin']);
};