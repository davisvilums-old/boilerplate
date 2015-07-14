'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the posh ' + chalk.red('Boilerplate') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'greet',
      message: 'Would you like to enable this option?',
      default: 'Yo! Wasup?'
    }];

    this.prompt(prompts, function (props) {
      // this.props = props;
      this.greet = props.greet;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      // console.log('FAAA', this.greet, props.greet);

      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('app/index.html'),
        { greet: 'zsdf asdf asdf asdf ' }
        // { greet: 'this.props.greet' }
      );
      console.log(this.greet);
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
