# Welcome to BlackEdit! V4 Cryo [Try it](https://raj457036.github.io/BlackEdit/v4/)
## BlackEdit Editor: A Free and Powerful-WYSWYG-Editor without any special library 
## Vanilla js used 

###Updates in v1 beta
1. No use of jquery or any other library (for ajax call to upload image use you have 2 options vanilla XHR or jquery ajax method)
2. Use of iframe
3. lots of data containers for adding/removing value of default colors or style or fonts and much more 
4. already optimized for smaller devices and low power devices
5. No style file needed just the js file and font awasome 5 cdn link
6. new minified version*
7. responsive design inbuilt
8. simple design with less functionality
9. Fully customizable and free


**Documentation isn't complete yet.**

The **BlackEdit** is an open source, free to use and powerful **WYSIWYG** editor with all the modern features builtIn.


# How To Use
steps to use editor:
1. add link to fontawasome 5 
2. add [editor-class.js](https://github.com/raj457036/BlackEdit/blob/master/v4/editor-class.js) file to your page where you want to use editor
3. create an instance of editor 
    ```javascript
    var editor_id = 'ed_id'; // replace the 'ed_id' with the id of the element where you want to put the editor
    var output_id = 'out_id'; // replace the 'out_id' with the id of the element where you want to put the output html
    
    var ed = new BlackEdit(editor_id,output_id); // create instance of editor with provided editor_id and output_id(optional)
    ed.init(auto_output=true); // passing the auto_output is for contineous update of output in every keystroke.
    ```
4. Editor is ready to use. enjoy!
**BlackEdit** uses **fontAwasome 5** for its icon utilities and **Vanilla js** and **ES6** for all its functionality

# How to Modify editor functionality
## Doc will be updated soon... stay tuned

You can use this editor anywhere you want without any restriction. just if you want then give me a small credit.
thank you any suggestion is welcome.
