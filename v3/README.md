# Welcome to BlackEdit! V3 Beta 
## BlackEdit Editor: A Free and Powerful-WYSWYG-Editor without any special library 
## Vanilla js used 

###Updates in v3 beta
1. No use of jquery or any other library
2. dynamic element creation and removal
3. lots of data containers for adding/removing value of default colors or style or fonts and much more 
4. New settings mode for optimizations of performance on mobile devices and other small devices with slow js engine
5. No style file needed just the js file and font awasome 5 cdn link
6. new minified version
7. responsive design inbuilt
8. Fully customizable and free


**Documentation is complete yet.**

The **BlackEdit** is an open source, free to use and powerful **WYSIWYG** editor with all the modern features builtIn.


# How To Use
steps to use editor:
1. add link to fontawasome 5 
2. add [blackedit.js](https://github.com/raj457036/BlackEdit/blob/master/v3/blackedit.js) file to your page where you want to use editor
3. create an instance of editor 
    ```javascript
    var editor_id = 'ed_id'; // replace the 'ed_id' with the id of the element where you want to put the editor
    var output_id = 'out_id'; // replace the 'out_id' with the id of the element where you want to put the output html
    
    var ed = new Editor(editor_id,output_id); // create instance of editor with provided editor_id and output_id(optional)

    //you can also pass the setting to tweek the performance (optional)
    var settings = {
        'smaller_device':false,
        'performance_mode':false, //higher the performance less the functionality
        'device_min_width': 0,
    };
    ed.settings = settings; //(optional)

    ed.init();
    ```
4. Editor is ready to use. enjoy!

**BlackEdit** uses **fontAwasome 5** for its icon utilities and **Vanilla js** for all its functionality

# How to Modify editor functionality
## Doc will be updated soon... stay tuned

You can use this editor anywhere you want without any restriction. just if you want then give me a small credit.
thank you any suggestion is welcome.
