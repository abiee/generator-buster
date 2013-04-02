generator-buster
================

Yeoman generator for BusterJS

Install
-------
You can install this generator by two ways, clonning repo and linking or install by npm. To install clonnig repo run:

    $ git clone https://github.com/abiee/generator-buster.git
    $ cd generator-buster
    $ npm link

Or to install by npm run:

    $ npm install generator-buster

Node configuration
------------------
This generator does't work correctly with node 0.10.0 due buster, but works perfectly with node 0.9.9, also you need to install buster an phantom js globally:

    $ npm install -g buster phantomjs

Bootstrap
---------
To create configuration files for buster you need to run:

    $ yo buster

Testing
-------
You can create tests by:

    $ yo buster:newtest example

This will create a example-test.js file with a basic template. Also you can refer a file with a second parameter:

    $ yo buster:newtest example models/example-model
