# Welcome to BlackEdit! v0.2 alpha
## BlackEdit Editor: A Free and Powerful-WYSWYG-Editor

The **BlackEdit** is an open source, free to use and powerful **WYSIWYG** editor with all the modern features builtIn.


# Files

**BlackEdit** uses **fontAwasome 5** for its icon utilities and **Jquery** for inner working.

## How to use it on your website
>initiate Editor
>BlackEdit uses font fontAwasome 5 so you need to put its cdn on top for icons
>also jquery for its inner functionality . **Example template below :**

    <!doctype html>
    <html  lang="en">
    <head>
    
    <!-- Required meta tags --> 
    <meta  charset="utf-8">
    <meta  name="viewport"  content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link  rel="stylesheet"  href="./style.css">
    <!--the style sheet is need for editor styling-->
    <link  rel="stylesheet"  href=https://use.fontawesome.com/releases/v5.1.0/css/all.css">
    <!--fontawasome 5 cdn link-->
    <link  href="https://fonts.googleapis.com/css?family=Nunito"  rel="stylesheet">
    <title>BlackEdit &odot; TryIt</title>
    </head>
    

> The above head tag is minimal requirement for BlackEdit to work. We included a `stylesheet` which is needed for editor design and consistency throughout the page.

>Now the we just need to include some scripts in `BodyTag`

    <div  id="editor"  class="shadow w-100 rounded border d-block"></div>
    <!--Editor block-->
    <div  id="ed-output"  class="w-100 h-100 d-block border rounded shadow p-2"></div>
	<!--Editor output block-->
    
    <script  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    
    <!-- Black edit editor js file-->
    
	<script  src="./blackedit.js"></script>
	<!--Editor initiator -->
	<!-- ed is the editor object with an argument of editor div id-->
    <script>
    var  ed = new  Editor('editor');
    ed.init();
    </script>
    
    </body>
	</html>


**To start the editor steps are:**

 1. Include the BlackEdit stylesheet, FontAwasome 5 cdn link
    `<link  rel="stylesheet"  href="./style.css">`

    `<link  rel="stylesheet"  href=https://use.fontawesome.com/releases/v5.1.0/css/all.css">`

 2. make a div with **id** ="editor"
     `<div  id="editor"  class="shadow w-100 rounded border d-block"></div>`
     
 3. include the jquery and BlackEdit.js file
	 `<script  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>`
    `<!-- Black edit editor js file-->`
	`<script  src="./blackedit.js"></script>`
 4. Initiate the editor by below code by passing the **id** to Editor constructor
    `<script>`
    `var ed = new  Editor('editor');`
    `ed.init();`
    `</script>`
 5. congratulations! You are all set

> The Output function is
> `ed.output()`
> this will return the html content markup text of the the editor content 

You can use this editor anywhere you want without any restriction. just if you want then give me a small credit.
thank you any suggestion is welcome.
