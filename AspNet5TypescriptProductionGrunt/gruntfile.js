/// <reference path="lib/jquery/jquery.js" />
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-cache-control");

    grunt.initConfig({
        hash: '<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>',          
        ts: {
            default : {
                src: ["app/**/*.ts"]
            }
        },
        concat: {
            vendorjs: {
                src: [
                    "lib/jquery/jquery.js",
                    "lib/angular/angular.min.js",
                    "lib/angular-ui-router/angular-ui-router.min.js",
                    "lib/angular-animate/angular-animate.min.js",
                    "lib/bootstrap/bootstrap.min.js",
                    "lib/angular-bootstrap/ui-bootstrap-tpls.min.js"
                ],
                dest: "wwwroot/lib/vendor.min.js"
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            mycode: {
                files: {
                    'wwwroot/lib/mycode.min.css': [
                       "content/main.css"
                    ]
                }
            },
            vendor: {
                files: {
                    'wwwroot/lib/vendor.min.css': [

                          "lib/bootstrap/bootstrap.min.css",
                    ]
                }
            }
        },
        uglify: {
            my_min_files: {
                files: {
                    'wwwroot/lib/mycode.min.js': [
                        "app/app.js",
                        "app/services/FastestAnimalService.js",
                        "app/controllers/DetailsController.js",
                        "app/controllers/OverviewController.js"

                    ]
                }
            }
        },
        cache_control: {
            your_target: {
                source: ['wwwroot/index.html'],
                options: {
                    version: "<%= hash %>",
                    links: true,
                    scripts: true,
                    replace: true
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: "lib",
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

    grunt.registerTask('development', ['ts', 'concat', 'uglify', 'cssmin', 'cache_control', 'watch']);
    grunt.registerTask('buildserver', ['ts', 'concat', 'uglify', 'cssmin', 'cache_control']);
};