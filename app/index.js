var generators = require('yeoman-generator')
var mkdirp = require('mkdirp')

module.exports = generators.Base.extend({

  prompting: function() {
    return this.prompt([{
      type: 'input',
      name: 'gradleGroup',
      message: 'Group name for Gradle',
      default: 'com.widgets'
    }, {
      type: 'input',
      name: 'gradleId',
      message: 'ID for Gradle',
      default: 'widgets-api'
    }, {
      type: 'input',
      name: 'gradleVersion',
      message: 'Version for Gradle',
      default: '1.0-SNAPSHOT'
    }, {
      type: 'input',
      name: 'basePackage',
      message: 'Base package',
      default: 'com.widgets'
    }]).then(function(answers){
      answers.basePackageDir = 'src/main/kotlin/' + answers.basePackage.replace(/\./g, '/')
      this.answers = answers
    }.bind(this))
  },
  createBasePackage: function() {
    var done = this.async()
    mkdirp(this.destinationPath(this.answers.basePackageDir), function(err){
      done(err)
    })
  },
  copyFiles: function() {

    var copyTplFiles = [
      {src: 'build.gradle', dst: 'build.gradle'},
      {src: 'src/main/kotlin/com/widgets/controllers', dst: this.answers.basePackageDir + '/controllers'},
      {src: 'src/main/kotlin/com/widgets/models/db', dst: this.answers.basePackageDir + '/models/db'},
      {src: 'src/main/kotlin/com/widgets/models/dto', dst: this.answers.basePackageDir + '/models/dto'},
      {src: 'src/main/kotlin/com/widgets/services/impl', dst: this.answers.basePackageDir + '/services/impl'},
      {src: 'src/main/kotlin/com/widgets/services', dst: this.answers.basePackageDir + '/services'},
      {src: 'src/main/kotlin/com/widgets', dst: this.answers.basePackageDir},
      {src: 'src/main/resources/application.conf', dst: 'src/main/resources/application.conf'},
      {src: 'settings.gradle', dst: 'settings.gradle'}
    ]

    var copyFiles = [
      {src: 'gradlew', dst: 'gradlew'},
      {src:'gradlew.bat', dst: 'gradlew.bat'},
      {src: 'gradle', dst: 'gradle'},
      {src: 'src/main/resources/db/migration/V1__create_widget_table.sql', dst: 'src/main/resources/db/migration/V1__create_widget_table.sql'},
      {src: 'gitignore', dst: '.gitignore'}
    ]

    copyTplFiles.forEach(function(file){
      this.fs.copyTpl(
        this.templatePath(file.src),
        this.destinationPath(file.dst),
        this.answers
      )
    }, this)

    copyFiles.forEach(function(file) {
      this.fs.copy(
        this.templatePath(file.src),
        this.destinationPath(file.dst)
      )
    }, this)



    // this.fs.copy(
    //   this.templatePath('gradle'),
    //   this.destinationPath('gradle')
    // )
    //
    // this.fs.copyTpl(
    //   this.templatePath('controllers'),
    //   this.destinationPath(this.answers.basePackageDir + '/controllers'),
    //   this.answers
    // )
    //
    // this.fs.copyTpl
    //

    //
    // this.fs.copyTpl(
    //   this.templatePath(this.answers.basePackage)
    // )

  }
});
