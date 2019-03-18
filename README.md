Stop Drag Chrome Extension
====

What?
----

This is an Google Chrome extension that stops the user dragging links with the mouse.

Why?
----

My mother suffers from essential tremor, meaning her hands shakes a lot while using the mouse. Observing her, disabling dragging of links in the browser looks helpful. This is especially true of sites that use `<a href="#" >` instead of `<button>` tags.

How
----

This extension is based on Glitch's template, see https://glitch.com/

All the extension code lives inside of the /extension folder.

We use Glitch's file watch behavior to monitor for changes and then rebuild the output crx file, which we host at public/extension.crx


Dev Build instructions
-----

In Chrome, go to Extensions, enable developer, and then upload the directory 'extension'.


Production Build instructions
-----

Currently, this is not in the app store, so you should build by hand.

In Chrome, go to Extensions, enable developer, and then choose to package the extension.

Drag & Drop the created .crx file into the browser, and it'll ask if you want to install.


Setup instructions
-------------------

You'll need to generate a PEM file and place it at .data/key.pem

Open up the console, then run this code:
`
  openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout .data/key.pem -out .data/cert.pem
`
Fill out the prompts, then you'll be OK.
You can also bring in your own external .pem file.


Resources:
----------
https://robots.thoughtbot.com/how-to-make-a-chrome-extension
https://developer.chrome.com/extensions/hosting
https://developer.chrome.com/extensions/packaging
https://chrome.google.com/webstore/developer/dashboard
