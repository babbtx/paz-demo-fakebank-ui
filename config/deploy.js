/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here
    'revision-data': {
      type: 'git-commit'
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 's3') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
    ENV['s3-index'] = {
      accessKeyId: process.env['S3_KEY'],
      secretAccessKey: process.env['S3_SECRET'],
      bucket: process.env['S3_BUCKET'],
      region: "us-east-1",
      allowOverwrite: true
    };
    ENV['s3'] = {
      accessKeyId: process.env['S3_KEY'],
      secretAccessKey: process.env['S3_SECRET'],
      bucket: process.env['S3_BUCKET'],
      region: "us-east-1",
      filePattern: '**/*.{html,js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,wasm,json}'
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
