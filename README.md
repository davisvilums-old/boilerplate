Link the generator to npm:
Open folder and run
```bash
npm link
```

Install brew package manager on mac
```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install wget on mac
```bash
brew install wget
```

Update package.json dependencies
```bash
npm install -g npm-check-updates
npm-check-updates -u
npm install
```

Install the generator
```bash
1. git clone https://... blog
2. cd blog && npm install
3. cd generators/generator-boilerplate && npm link
```
Run the generator
```bash
yo boilerplate
```



# generator-boilerplate [![Build Status](https://secure.travis-ci.org/davisvilums/generator-boilerplate.png?branch=master)](https://travis-ci.org/davisvilums/generator-boilerplate)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-boilerplate from npm, run:

```bash
npm install -g generator-boilerplate
```

Finally, initiate the generator:

```bash
yo boilerplate
```

