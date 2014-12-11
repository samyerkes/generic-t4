#T4 Generic Bootstrap Technical Documentation
*	Version: 0.1.0
*	Author: [Sam Yerkes](mailto:syerkes@vcu.edu), VCU Webmaster
*	Git repo: [https://github.com/samyerkes/generic-t4](https://github.com/samyerkes/generic-t4)
*	Changelog: [https://github.com/samyerkes/generic-t4/blob/master/changelog.md](https://github.com/samyerkes/generic-t4/blob/master/changelog.md)
*	Live demo: [http://www.t4dev.vcu.edu/genericbootstrap/](http://www.t4dev.vcu.edu/genericbootstrap/)

##Assumptions
It is assumed you have [node.js](http://nodejs.org/), [bower](http://bower.io/), [grunt](http://www.gruntjs.org/), and [vagrant](https://www.vagrantup.com/) running in a global setting on your machine.

##To get started
*	Run `git clone https://github.com/samyerkes/generic-t4.git` to clone the repo into the directory of choice
*	Run `npm install` to install all node dependencies
*	Run `bower install` to download all bower packages. This will also put a `bower_components` directory in the root
*	Run `vagrant up` to start up the web server, the first time you run this your server should be provisioned by `Setup/setup.sh`
*	Run `grunt build` to build out the directories for `app`, `dist`, and `t4`. The last command this task will run is `grunt watch`.

After these steps are taken you should be able to see your homepage (what's in the `/dist`) at [182.168.55.56](http://182.168.55.56). You can change the IP address to a dev address by `sudo nano /etc/hosts` and adding

    182.168.55.56   generic.vcu.dev

At this point any changes made to files in `/app` will automatically be processed into the `/dist` and `/t4` directories and show up on [generic.vcu.dev](http://generic.vcu.dev).