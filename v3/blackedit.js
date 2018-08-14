// BlackEdit v1 BETA
var ed_style = `<style>@charset "UTF-8";.ed-editor .ed-footer,.ed-editor .ed-tools .ed-tools-1{-webkit-box-orient:horizontal;-webkit-box-direction:normal}div[data-placeholder]:not(:focus):not([data-div-placeholder-content]):before{content:attr(data-placeholder);float:left;margin-left:2px;color:#b3b3b3}.ed-editor{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;width:100%;min-width:320px;background:#fff}.ed-editor .ed-center{margin:0 auto}.ed-editor .ed-tools{width:100%;background-color:#fafafa;border:1.5px solid #c4c4c4;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px}.ed-editor .ed-tools .ed-tools-1{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.ed-editor .ed-tools button:hover:after{position:absolute;z-index:20;margin:30px auto auto -30px;padding:5px;font-size:12px;content:attr(data-key);border-radius:3px;background:#000;color:#fff;border-top:2px solid red}.ed-editor button,.ed-editor input,.ed-editor label,.ed-editor select{-webkit-box-sizing:border-box;margin:0 2px;padding:3px 8px;cursor:pointer;border:1px solid #eee}.ed-editor button,.ed-editor input,.ed-editor label{box-sizing:border-box;background-color:#fff;outline-style:none}.ed-editor select::-ms-expand{display:none}.ed-editor select{box-sizing:border-box;text-align:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;min-width:60px}.ed-editor button:hover,.ed-editor label:hover,.ed-editor select:hover{background-color:#e4e4e4}.ed-editor .ed-space{font-family:'Trebuchet MS','Lucida Sans Unicode','Lucida Grande','Lucida Sans',Arial,sans-serif;display:block;min-height:300px;max-height:700px;overflow-x:hidden;overflow-y:auto;padding:5px;border:1.5px solid #c4c4c4;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;overflow-wrap:break-word}.ed-editor .ed-space iframe{padding:10px;border:3px dotted red;cursor:-webkit-grab;cursor:grab}.ed-editor .ed-space img{max-width:100%;resize:horizontal;height:auto}.ed-editor .ed-space a:hover{cursor:pointer;border:1px solid #1e90ff}.ed-editor .ed-space:focus{-webkit-box-shadow:inset 0 0 2px #000;box-shadow:inset 0 0 2px #000}.ed-editor .ed-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:#fafafa;border:1.5px solid #c4c4c4;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px}.ed-editor .ed-footer button:hover:after{position:absolute;z-index:20;margin:-35px auto auto -30px;padding:5px;font-size:12px;content:attr(data-key);border-radius:3px;background:#000;color:#fff;border-top:2px solid #1e90ff}#ed_floatbox{display:none;position:fixed;left:0;right:0;margin-left:auto;margin-right:auto;margin-top:65px;padding:5px;z-index:4000;text-align:center;max-width:350px;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;border-radius:5px}#ed_floatbox .colorpick{margin:20px auto;border-top:1px solid #eee;padding-top:10px}#ed_floatbox .colorpick button{border-radius:50%;width:40px;height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;border:2px solid #fff}.caret-bottom::after,.temp_float{-webkit-box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}#ed_floatbox button.active::after{content:"🔒";position:absolute;margin-left:-14px;margin-top:-2px}#ed_floatbox input{width:100%;cursor:text;padding:auto 3px;font-size:20px;text-align:center;border-bottom:1px solid gray;border-top:1px solid gray;border-radius:0;background:#eee;margin-top:20px}#ed_floatbox button[data-for]{width:100%;background:#1e90ff;color:#fff;font-size:20px}#ed_floatbox #set:hover{background:#007af5}#ed_floatbox .ed_float_title{pointer-events:none;display:inline-block;text-align:center;font-size:20px;padding-bottom:2px}#ed_floatbox .ed_float_title::after{pointer-events:all;cursor:pointer;position:absolute;right:10px;content:"✕"}#ed_floatbox .ed_image_select{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:100%;height:100px;background:#eee;margin-top:15px;border:3px dotted #a9a9a9;cursor:pointer}#ed_floatbox .ed_image_select input{cursor:pointer;font-size:10px;height:85%;width:285px;margin:0;border:none;border-radius:0;background:#eee}#ed_floatbox .ed_image_select ::after{font-size:15px;font-weight:600;color:#a9a9a9;position:absolute;width:290px;bottom:65px;left:5px;content:"Choose file or drag it here."}.caret-bottom::after,.caret-top::after{position:absolute;content:" ";border-left:8px solid transparent;border-right:8px solid transparent}.hide{display:none}.show{display:initial}.hilite{background-color:#f08080}.resizable{min-width:350px;max-width:100%;min-height:192px;overflow:hidden;resize:both;display:inline-block}.temp_float{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;background:#000;padding:auto 10px;border-radius:5px;color:#000;width:200px}.temp_float p{padding:0}.caret-bottom{border-top:2px solid red}.caret-top{border-bottom:2px solid #1e90ff}.caret-bottom::after{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;top:24px;right:91px;border-bottom:8px solid transparent;border-top:8px solid #000}.caret-top::after{-webkit-box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important;top:-16px;right:92px;border-bottom:8px solid #000;border-top:8px solid transparent}</style>`

function $_(selector) {
    switch (selector[0]) {
        case '#':
            return document.getElementById(selector.slice(1));
            break;
        case '.':
            return document.getElementsByClassName(selector.slice(1));
            break;
        default:
            return document.getElementsByTagName(selector)
    }   
};

function on(events, selector, callback) {
    let event_list=events.split(' ');
    switch (selector[0]) {
        case '#':
            for(let i=0; i<event_list.length; i++) {
                $_(selector).addEventListener(event_list[i],callback);
            }                                                                      
            break;
        case '.':
            for(let i=0; i<$_(selector).length; i++) {
                for(let j=0; j<event_list.length; j++) {
                    $_(selector)[i].addEventListener(event_list[j],callback);
                }
            }
            break;
        default:
            for(let i=0; i<$_(selector).length; i++) {
                for(let j=0; j<event_list.length; j++) {
                    $_(selector)[i].addEventListener(event_list[j],callback);
                }
            }
    }
    return selector;  
};


var default_settings = {
    'smaller_device':false,
    'performance_mode':false, //higher the performance less the functionality
}

var enter_nos = 0;
class CommandAssets {
    constructor(settings,editorId) {
        this.settings = settings;
        this.editorId = editorId;
        this.commands = {
            'default':[ 'bold','italic','underline','strikeThrough','insertHorizontalRule',
                        'createLink','insertOrderedList','insertUnorderedList','insertImage',
                        'blockquote','justifyLeft','justifyCenter','justifyRight','justifyFull',
                        'backColor','foreColor','indent','outdent',
                        'subscript','superscript','formatBlock','removeFormat','fontName'],
            'non-default':['youtube','code'],
        }
        this.font_styles = {
            'Heading h1':'<h1>',
            'Heading h2':'<h2>',
            'Heading h3':'<h3>',
            'Heading h4':'<h4>',
            'Heading h5':'<h5>',
            'Heading h6':'<h6>',
            'paragraph':'<p>',
            'Pre formatted': '<pre>',
            'Table': '<table>'
        };
        this.top_tools = {
            'cmds':['bold','italic','underline','strikeThrough','insertHorizontalRule',
                    'createLink','insertOrderedList','insertUnorderedList','insertImage',
                    'indent','youtube','removeFormat'],
            'values': [false,false,false,false,false,true,false,false,true,false,true,false],
            'icons': ['fas fa-bold','fas fa-italic','fas fa-underline','fas fa-strikethrough','far fa-window-minimize',
                        'fas fa-link','fas fa-list-ol','fas fa-list-ul','fas fa-image',
                        'fas fa-quote-left','fab fa-youtube','fas fa-eraser'],
            'keys':['Bold(Ctrl+B)','Italic(Ctrl+I)','Underline(Ctrl+U)','Strike(Alt+Shift+5)','Page Break(Ctrl+Enter)','Insert Link(Ctrl+K)','Numbered List(Ctrl+Shift+7)','Bulleted List(Ctrl+Shift+8)','Insert Image(Ctrl+Shift+K)','insert Quote(Ctrl+Q)','Youtube Video(Ctrl+Shift+Y)','Clear Formatting(Ctrl+\\)'],
        };
        this.foot_tools = {
            'cmds':['code','justifyLeft','justifyCenter','justifyRight','justifyFull',
                    'backColor','foreColor','indent','outdent',
                    'subscript','superscript'],
            'values': [false,false,false,false,false,true,true,false,false,false,false],
            'icons': ['fas fa-code','fas fa-align-left','fas fa-align-center','fas fa-align-right','fas fa-align-justify',
                      'fas fa-fill-drip','fas fa-font','fas fa-indent','fas fa-outdent',
                      'fas fa-subscript','fas fa-superscript'],
                      'keys':['Insert Code(Ctrl+Shift+0)','Align Left(Ctrl+Shift+L)','Align Center(Ctrl+Shift+E)','Align Right(Ctrl+Shift+R)','Align Justify(Ctrl+Shift+J)',
                      'Highlight','Text Color','Indent','Outdent','Ctrl+.','Ctrl+,',],
        };
        this.font = {
            'Arial':"Arial, Helvetica, sans-serif",
            'Courier':"'Courier New', Courier, monospace",
            'Cursive':'cursive',
            'Times':"'Times New Roman', Times, serif",
            'Lucida':"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        };
        this.font_color = {
            "black":"000000",
            "red":"FF0000", 
            "orange":"FF8000", 
            "yellow":"FFFF00", 
            "limegreen":"80FF00", 
            "green":"00FF00", 
            "cyangreen":"00FF80", 
            "cyan":"00FFFF", 
            "lightblue":"0080FF", 
            "blue":"0000FF", 
            "violet":"8000FF", 
            "megenta":"FF00FF", 
            "flora":"FF0080",
        };
        this.back_color = {
            "white":"FFFFFF",
            "blue":"ADD8E6",
            "coral":"F08080", 
            "cyne":"E0FFFF", 
            "green":"90EE90", 
            "pink":"FFB6C1", 
            "salmon":"FFA07A", 
            "seagreen":"20B2AA", 
            "skyblue":"87CEFA", 
            "yellow":"FFFFE0",
        };
        this.image_container = [];
        this.current_sets = {
            font_style:"paragraph",
            font_family:"Arial",
            font_size: 16,
            font_color: "black",
            font_highlight: 'blue',
            last_youtube: '',
            img_selected: undefined,
        };
        this._range = undefined;
        this.forUndo = [];
        this.forRedo = [];
    };
 
     Undo() {
        let last = this.forUndo.pop();
        last = last != undefined ? last : '';
        if(this.forRedo[this.forRedo.length-1] != last || this.forRedo.length == 0) {
            this.forRedo.push(last);
        }
        $_("#ed_space_"+this.editorId).innerHTML = last;
    }

    Redo() {
        let last = this.forRedo.pop();
        last = last != undefined ? last : '';
        if(this.forUndo[this.forUndo.length-1] != last || this.forUndo.length == 0) {
            this.forUndo.push(last);
        }
        $_("#ed_space_"+this.editorId).innerHTML = last;
    }
    // Add all the features to the provided element
    // {ele:ele,style:'styles', class:'classes', id:'id', attrs:{key:val}, content:''}
    addFeatures() { 
        for(let args=0; args<arguments.length; args++) { 
            if ('ele' in arguments[args]) {
                for(let key in arguments[args]) {
                    switch (key) {
                        case 'style':
                            arguments[args].ele.style.cssText = arguments[args].style;
                            break;
                        case 'class':
                            arguments[args].ele.className = arguments[args].class;
                            break;
                        case 'id':
                            arguments[args].ele.id = arguments[args].id;
                            break;
                        case 'attrs':
                            for(let at in arguments[args].attrs) {
                                arguments[args].ele.setAttribute(at,arguments[args].attrs[at]);
                            }
                            break;
                        case 'content':
                            let c = document.createTextNode(arguments[args].content);
                            arguments[args].ele.appendChild(c);
                    }
                }
            }
            else {
                throw new Error('you need an element for apply properties.')
            }
        }
        
    };

    // Add desired fonts for your editor
    addFonts(obj) {
        for(let key in obj) {
            this.font[key] = obj[key];
        }
    };
    // Remove desired fonts for your editor
    removeFonts() {
        for(let i=0; i<arguments.length;i++) {
            delete this.font[arguments[i]];
        }
    };

    //  add color to pallet 
    addColorTo(type,name,colorHex) {
        switch (type) {
            case "fontColor":
                this.font_color["ed-"+name]=colorHex.replace('#','');
                break;
            case "backColor":
                this.font_highlight["ed-"+name]=colorHex.replace('#','');
                break;
        }
    };

    // remove color from pallet
    removeColorFrom(type, name) {
        switch (type) {
            case "fontColor":
                delete this.font_color[name];
                break;
            case "backColor":
                delete this.font_highlight[name];
                break;
        } 
    };

    // Create Event
    // TODO: create event, on element, 
    createEvent(eventName, selector, callback) {
        let ev = new Event(eventName);
        let retobj = {
            event:ev,
            ele: on(eventName, selector, (e)=>{callback(e);}),
            trigger:(callback)=>{
                $_(selector).dispatchEvent(ev);
                if (callback != undefined) {
                    callback();
                }
            },
        }

        return retobj;

        // // Dispatch the event.
        // elem.dispatchEvent(event);
    };

    // remove Class(s)
    removeClass(selector,klass) {
        let sel = selector.split(' ');
        switch (selector[0]) {
            case '#':
                for(let j=0; j<klass.length; j++) {
                    $_(selector).classList.remove(klass[i]);
                }                                                                      
                break;
            case '.':
                for(let i=0; i<$_(selector).length; i++) {
                    for(let j=0; j<klass.length; j++) {
                        $_(selector)[i].classList.remove(klass[i]);
                    }
                }
                break;
            default:
                for(let i=0; i<$_(selector).length; i++) {
                    for(let j=0; j<klass.length; j++) {
                        $_(selector)[i].classList.remove(klass[i]);
                    }
                }
        }
        return $_(selector);
    };

    // Add class
    addClass(selector, klass) {
        let sel = selector.split(' ');
        switch (selector[0]) {
            case '#':
                for(let j=0; j<klass.length; j++) {
                    $_(selector).classList.add(klass[i]);
                }                                                                      
                break;
            case '.':
                for(let i=0; i<$_(selector).length; i++) {
                    for(let j=0; j<klass.length; j++) {
                        $_(selector)[i].classList.add(klass[i]);
                    }
                }
                break;
            default:
                for(let i=0; i<$_(selector).length; i++) {
                    for(let j=0; j<klass.length; j++) {
                        $_(selector)[i].classList.add(klass[i]);
                    }
                }
        }
        return $_(selector);
    };
 
    eol() {
        let ele = $_('#ed_space_'+this.id);
        var range,selection;
        if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
        {
            range = document.createRange();
            range.selectNodeContents(ele);
            range.collapse(false);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            range.detach();
        }
        else if(document.selection)//IE 8 and lower
        { 
            range = document.body.createTextRange();
            range.moveToElementText(ele);
            range.collapse(false);
            range.select();
            range.detach();
        }
    }  

    addElement(sel, eleName='', style='',  attrs={}, classes='', id='') {
        if (sel==undefined) {
            console.log('failed to get selection');
            return 0;
        }

        let div = document.createElement('div');
        let ele = document.createElement(eleName);
        this.addFeatures(
            {ele:ele,class:classes, style:style,attrs:attrs,id:id},
        )

        div.appendChild(ele);
        this.applyRange(div);
        return div;
    }

    saveRange() {
        let temp = window.getSelection();
        if ($_('#ed_space_'+this.editorId).contains(temp.anchorNode)) {
            var r = {
                "last_sel":temp,
                "collapsed": temp.getRangeAt(0).collapsed,
                "startContainer": temp.getRangeAt(0).startContainer,
                "startOffset": temp.getRangeAt(0).startOffset,
                "endContainer": temp.getRangeAt(0).endContainer,
                "endOffset": temp.getRangeAt(0).endOffset,
            }
            this._range = r;
        } 
    };

    getRange() {
        return this._range;
    };
    
    applyRange(insertNode, ret) {
        let sel = window.getSelection();
        let range = document.createRange();
        range.setStart(this.getRange().startContainer, this.getRange().startOffset);
        range.setEnd(this.getRange().endContainer, this.getRange().endOffset);
        if(insertNode) {
            range.insertNode(insertNode);
            sel.removeAllRanges();
        }
        if(ret) {
            sel.removeAllRanges();
            sel.addRange(range);
            return range;
        }
        sel.addRange(range);
        range.detach();
    }

// universal style applyer to the selected portion of document...
    applyStyle(style, classes='',block='span') {
        let sel = window.getSelection(), span;
        let range = document.createRange();
        range.setStart(this.getRange().startContainer, this.getRange().startOffset);
        range.setEnd(this.getRange().endContainer, this.getRange().endOffset);
        span = document.createElement(block);
        span.style.cssText = style;
        span.className = classes;
        document.execCommand('removeFormat');
        range.surroundContents(span);
        sel.removeAllRanges();

        sel.addRange(range);
        range.detach();
    }

    // command runner
    Run(cmdCode, value=undefined){
        if(this.commands.default.indexOf(cmdCode) >= 0){
            let sel = window.getSelection();
            let r = this.applyRange(null,true)

            document.execCommand(cmdCode,false,value?value:'');
            r.detach();
            
            switch (cmdCode) {
                case 'indent':
                    for(let e of $_('blockquote')) {
                        e.style.cssText = 'border-left:2px solid black; padding-left:5px;font-style:italic; font-size:32px; margin-left:20px;';
                    }
                    break;
                case 'insertImage':
                    for(let e of $_('img')) {
                        e.style.cssText = 'border-radius:5px; margin:5px;';
                    }
            }
        }
        else {
            switch(cmdCode) {
                case 'youtube':
                    let e = this.addElement(this.getRange().last_sel, 'iframe','',{'src':'https://www.youtube.com/embed/'+this.current_sets.last_youtube.slice(this.current_sets.last_youtube.slice(0,-11).length,),'frameborder':'0', 'allow':'encrypted-media','allowfullscreen':'true','width':'100%',"height":'100%',},)
                    e.classList.add('resizable');
                    break;
                case 'fontSize':
                    this.applyStyle(`font-size:${value}px`,'','font')
                    break;
                case 'code':
                    this.applyStyle('background-color:#eee;margin:10px; padding:30px;font-size:\'15px;\'','preatyprint','pre');
                    break;
            }
        }
    };

    selectvalueChager(type, value) {
        switch(type) {
            case 0:
                $_('#font-style-select'+this.id).value = value;
                break;
            case 1:
                $_('#font-select'+this.id).value = value;
                break;
            case 2:
            $_('#font-size-select'+this.id).value = value;
                break;
        }
    }

    output() {
        return $_('#ed_space_'+this.editorId).innerHTML;
    }

    moveCursor(container,offset) {
        var el = $_('#ed_space_'+this.editorId);
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(container, offset);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range); 
        range.detach();
    }
};

class Editor extends CommandAssets {
    constructor(editor_id, output_id='', settings=default_settings, upload_link=undefined ,) {
        super(settings,editor_id);
        this.id = editor_id;
        this.upload_link = upload_link;
        this.o_id = output_id;
        this._current_range = {};
        this._components = {
            ed_floatbox: document.createElement('div'),
            ed_tools : document.createElement('div'),
            ed_tools_1 : document.createElement('div'),
            ed_center1 : document.createElement('div'),
            ed_center2 : document.createElement('div'),
            ed_space : document.createElement('div'),
            ed_footer : document.createElement('div'),
            ed_bubble : document.createElement('div'),
            style_select : document.createElement('select'),
            font_select : document.createElement('select'),
            fontsize_select : document.createElement('select'),
            buttons_top : [],
            buttons_foot: [],
        };
        
    }

    setBubble(rect) {
        let topEle = $_('#ed_space_'+this.id).getBoundingClientRect();
        let cord = {y:0,x:0}
        if (rect.y-topEle.y >=20) {
            let bbl_body = `<div class="temp_float caret-bottom" id='ed-bubble_content_${this.id}' style="padding-left:10px;">hello WOrld</div>`;
            let ele = $_('#ed_bubble_'+this.id);
            ele.innerHTML = bbl_body;
            ele.style.position = 'absolute';
            ele.style.top = rect.y-35+'px';
            ele.style.left = rect.x+rect.width/2 - parseFloat(window.getComputedStyle(ele,null).getPropertyValue('width'))/2+'px';
        }
        else {
            let bbl_body = `<div class="temp_float caret-top" id='ed-bubble_content_${this.id}' style="padding-left:10px;">hellohello WOrldhello WOrldhello WOrld<br> WOrld</div>`;
            let ele = $_('#ed_bubble_'+this.id);
            ele.innerHTML = bbl_body;
            ele.style.position = 'absolute';
            ele.style.top = rect.y+rect.height+10+'px';
            ele.style.left = rect.x+rect.width/2 - parseFloat(window.getComputedStyle(ele,null).getPropertyValue('width'))/2+'px';
        }
    }

    removeBubble() {
        $_('#ed_bubble_'+this.id).innerHTML='';
    }
    
    setStructure() {

        let fb = $_('#'+this.id).appendChild(this._components.ed_floatbox);
        let t = $_('#'+this.id).appendChild(this._components.ed_tools); 
        let s = $_('#'+this.id).appendChild(this._components.ed_space);
        
        let bubble = $_('body')[0].appendChild(this._components.ed_bubble);
        let t1 = t.appendChild(this._components.ed_tools_1);
        let ed_c1 = t1.appendChild(this._components.ed_center1);
        // style select
        let ss = ed_c1.appendChild(this._components.style_select);
        
        // top buttons created
        for(let i=0; i<this.top_tools.cmds.length; i++) {
            this._components.buttons_top.push(document.createElement('button'));
        }
        // foot button created
        for(let i=0; i<this.foot_tools.cmds.length; i++) {
            this._components.buttons_foot.push(document.createElement('button'));
        }

        this.addFeatures(
            {ele:fb, id:'ed_floatbox'},
            {ele:t, class:'ed-tools'},
            {ele:s, class:'ed-space', id:'ed_space_'+this.id, attrs:{'contenteditable':true,'data-placeholder':'Begin Typing ...'}},
            {ele:t1, class:'ed-tools-1'},
            {ele:ed_c1, class:'ed-center'},
            
            {ele:ss, id:'font-style-select'+this.id},
            {ele:bubble, id:'ed_bubble_'+this.id, class:'bubble'},
        )
        // value for style select
        for(let key in this.font_styles) {
            let o = ss.appendChild(document.createElement('option'));
            o.value = key;
            if(key == this.current_sets.font_style) {o.setAttribute('selected','')}
            o.innerHTML = key;
        }

        // value of top tools button
        for(let i=0; i<this.top_tools.cmds.length; i++) {
            let b = ed_c1.appendChild(this._components.buttons_top[i]);
            let fa = document.createElement('i');
            this.addFeatures(
                {ele: fa, class: this.top_tools.icons[i]},
                {ele: b, class:'ed_btn_'+this.id, attrs: {'data-cmd':this.top_tools.cmds[i], 'data-vt':this.top_tools.values[i],'data-key':this.top_tools.keys[i], "type":'button'}},
            )
            b.appendChild(fa);
        }

        if(window.innerWidth >= this.settings.device_min_width) {
            let f = $_('#'+this.id).appendChild(this._components.ed_footer);
            let ed_c2 = f.appendChild(this._components.ed_center2);
            this.addFeatures({ele:f, class:'ed-footer'},{ele:ed_c2, class:'ed-center'},)
            // values for foot tools button
            for(let i=0; i<this.foot_tools.cmds.length; i++) {
                let b = ed_c2.appendChild(this._components.buttons_foot[i]);
                let fa = document.createElement('i');
                this.addFeatures(
                    {ele: fa, class: this.foot_tools.icons[i]},
                    {ele: b, class:'ed_btn_'+this.id, attrs: {'data-cmd':this.foot_tools.cmds[i], 'data-vt':this.foot_tools.values[i],'data-key':this.foot_tools.keys[i], "type":'button'}},
                )
                b.appendChild(fa);
            }
            // font select
            let fs = ed_c2.appendChild(this._components.font_select);
            // font size select
            let fss = ed_c2.appendChild(this._components.fontsize_select);

            this.addFeatures(
                {ele:fs, id:'font-select'+this.id},
                {ele:fss, id:'font-size-select'+this.id},);

            // value for font select
            for(let key in this.font) {
                let o = fs.appendChild(document.createElement('option'));
                o.value = key;
                if(key == this.current_sets.font_family) {o.setAttribute('selected','')}
                o.innerHTML = key;
            }

            // value for size select
            for(let size=10; size<100; size+=2) {
                let o = fss.appendChild(document.createElement('option'));
                o.value = size;
                if(size == this.current_sets.font_size) {o.setAttribute('selected','')}
                o.innerHTML = size+'px';
            }
        }
    };

    // floater blocks
    setFloater(title, action) {
    // outer eles
        let ed_float_title = document.createElement('div');
        let ed_float_selectors = document.createElement('div');
        let ed_float_input = document.createElement('div');
        let ed_float_action = document.createElement('div');

    // inner eles
        let ed_float_input_value = document.createElement('input');

        // set floater title
        ed_float_title.className='ed_float_title';
        let ed_float_title_text = document.createTextNode(title);
        ed_float_title.appendChild(ed_float_title_text);

        // set floater selectors
        if (action == 'font-color') {
            for(let key in this.font_color) {
                let ele = document.createElement('button');
                this.addFeatures({
                    ele:ele,style:`background:#${this.font_color[key]}`,
                    id:action+this.font_color[key],
                    attrs: {"data-val":key},
                });
                ele.appendChild(document.createTextNode("\xa0\xa0"));
                ed_float_selectors.appendChild(ele);
                if (key == this.current_sets.font_color) {ele.className='active'};
                ele.addEventListener('click',(ev)=>{
                    this.removeClass(".active",['active']);
                    this.current_sets.font_color = ev.target.dataset.val;
                    ev.target.classList.add('active');
                })
            }
            ed_float_selectors.className='colorpick';
            // input field
            ed_float_input.appendChild(ed_float_input_value);
            this.addFeatures({
                ele:ed_float_input_value, 
                id:'input_'+action, 
                attrs:{'type':'text','placeholder':'Color hex #ffffff','maxlength':'7'},
            });

            let btn = ed_float_action.appendChild(document.createElement('button'));
            btn.appendChild(document.createTextNode('Set'));
            this.addFeatures({ele:btn, id:'set'+action+this.id, class:'hide', attrs:{'type':'button',"data-for":action}});
        }
        else if (action == 'back-color') {
            for(let key in this.back_color) {
                let ele = document.createElement('button');
                this.addFeatures({
                    ele:ele,style:`background:#${this.back_color[key]}`,
                    id:action+this.back_color[key],
                    attrs: {"data-val":key},
                });
                ele.appendChild(document.createTextNode("\xa0\xa0"));
                ed_float_selectors.appendChild(ele);
                if (key == this.current_sets.font_highlight) {ele.className='active'};
                ele.addEventListener('click',(ev)=>{
                    this.removeClass(".active",['active']);
                    this.current_sets.font_highlight = ev.target.dataset.val;
                    ev.target.classList.add('active');
                })
            }
            ed_float_selectors.className='colorpick';
            // input field
            ed_float_input.appendChild(ed_float_input_value);
            this.addFeatures({
                ele:ed_float_input_value,
                id:'input_'+action, 
                attrs:{'type':'text','placeholder':'Color hex #ffffff','maxlength':'7'}
            });

            let btn = ed_float_action.appendChild(document.createElement('button'));
            btn.appendChild(document.createTextNode('Set'));
            this.addFeatures({ele:btn,id:'set'+action+this.id, class:'hide',attrs:{'type':'button',"data-for":action}});
            
        }
        else if (action == 'image') {
            if (this.upload_link) {
                ed_float_selectors.className='ed_image_select';
                let img_form = document.createElement('form');
                this.addFeatures({ele:img_form, id:'img_form'+this.id, attrs:{'method':'post','enctype':"multipart/form-data",'action':this.upload_link}});
                ed_float_selectors.appendChild(img_form);

                let img_btn = document.createElement('input');
                img_form.appendChild(img_btn);
                this.addFeatures({ele:img_btn,id:'ed_float_img_btn'+this.id,class:'ed_img_input',attrs:{'type':'file',"accept":'.gif,.jpg,.jpeg,.png'},},)
            }
            let img_previews = document.createElement('div');
            this.addFeatures({ele:img_previews,class:'ed_img_preview',id:'img_preview'+this.id});
            for(let key of this.image_container) {
                let img_block = document.createElement('img');
                this.addFeatures({ele:img_block,attrs:{'src':key},});
                img_previews.appendChild(img_block);
            }

            ed_float_selectors.appendChild(img_previews);
            // input field
            ed_float_input.appendChild(ed_float_input_value);
            this.addFeatures({
                ele:ed_float_input_value, 
                id:'input_'+action, 
                attrs:{'type':'url','placeholder':'Image Url'},
            });

            let btn = ed_float_action.appendChild(document.createElement('button'));
            btn.appendChild(document.createTextNode('Set'));
            this.addFeatures({ele:btn, id:'set'+action+this.id, class:'hide', attrs:{'type':'button',"data-for":action,},});
        }
        else if (action == 'link') {
            // input field
            ed_float_input.appendChild(ed_float_input_value);
            this.addFeatures({
                ele:ed_float_input_value, 
                id:'input_'+action, 
                attrs:{'type':'url','placeholder':'Url'},
            });

            let btn = ed_float_action.appendChild(document.createElement('button'));
            btn.appendChild(document.createTextNode('Set'));
            this.addFeatures({ele:btn, id:'set'+action+this.id, class:'hide', attrs:{'type':'button',"data-for":action,},});
        }
        else if (action == 'youtube') {
            let img_previews = document.createElement('div');
            this.addFeatures({ele:img_previews,class:'ed_img_preview',id:'img_preview'+this.id});

            ed_float_selectors.appendChild(img_previews);
            // input field
            ed_float_input.appendChild(ed_float_input_value);
            this.addFeatures({
                ele:ed_float_input_value, 
                id:'input_'+action, 
                attrs:{'type':'url','placeholder':'Youtube Video Url'},
            });

            let btn = ed_float_action.appendChild(document.createElement('button'));
            btn.appendChild(document.createTextNode('Set'));
            this.addFeatures({ele:btn, id:'set'+action+this.id, class:'hide', attrs:{'type':'button',"data-for":action,},});
        }
        
        ed_float_action.className = 'ed_float_action';

        this._components.ed_floatbox.appendChild(ed_float_title);
        this._components.ed_floatbox.appendChild(ed_float_selectors);
        this._components.ed_floatbox.appendChild(ed_float_input);
        this._components.ed_floatbox.appendChild(ed_float_action);
        this._components.ed_floatbox.id = "ed_floatbox";

        // previewer and hiders
        on('keyup keydown paste cut change','#input_'+action,(ev)=>{
            let limits = ['image'];
            if (ev.target.value.length >= 3 ){
                ev.target.style.color = ev.target.value;
                $_('#set'+action+this.id).classList.remove('hide'); 
                if (this.upload_link) {$_('.ed_image_select')[0].classList.add('hide');};
                if (ev.target.id == 'input_image') {
                    let img_blk = document.createElement('img');
                    img_blk.src = ev.target.value;
                    img_blk.style.cssText='width:100%;display:inline-block;border-radius:5px;';
                    $_('#img_preview'+this.id).innerHTML='';
                    $_('#img_preview'+this.id).appendChild(img_blk);
                }
                else if (ev.target.id == 'input_youtube') {
                    let iframe_blk = document.createElement('iframe');   
                    this.addFeatures({
                        ele:iframe_blk,
                        attrs:{
                            'src':'https://www.youtube.com/embed/'+this.current_sets.last_youtube.slice(this.current_sets.last_youtube.slice(0,-11).length,),
                            'frameborder':'0', 'encrypted-media':'true',
                        },
                        style:'width:100%;display:inline-block;border-radius:5px;',
                    });
                    $_('#img_preview'+this.id).innerHTML='';
                    $_('#img_preview'+this.id).appendChild(iframe_blk);
                }
            }
            else {
                $_('#set'+action+this.id).classList.add('hide');
                if (this.upload_link) {$_('.ed_image_select')[0].classList.remove('hide');};
            }  
        });

        // setters
        on('click', '#set'+action+this.id, (ev)=>{
            switch (ev.target.dataset.for) {
                case 'font-color':
                    this.current_sets.font_color = $_('#input_'+action).value;  
                    this.Run('foreColor', this.current_sets.font_color);
                    break;
                case 'back-color':
                    this.current_sets.font_highlight = $_('#input_'+action).value;
                    this.Run('backColor', this.current_sets.font_highlight);
                    break; 
                case 'youtube':
                    this.current_sets.last_youtube = $_('#input_'+action).value;
                    this.Run('youtube');
                    break;
                case 'image':
                    console.log('click');
                    this.Run('insertImage', $_('#input_'+action).value);
                    break;
                case 'link':
                    this.Run('createLink', $_('#input_'+action).value);
                    break;
            }
            ev.target.offsetParent.style.cssText = "display:none";
        })
        
        if ($_('#ed_float_img_btn'+this.id) && this.upload_link) {
            on('change', '#ed_float_img_btn'+this.id, (ev)=>{
                this.c = this.createEvent('blobfish','#ed_float_img_btn'+this.id,(ev)=>{
                    console.log('change');
                });
            })
        }
    };

    set_Events(self=this) {
        on('mouseup mousedown', '.ed-space', (ev)=>{
            this.saveRange();
            switch(ev.target.tagName) {
                case 'IMG':
                    this.current_sets.img_selected = ev.target;
                    this.setBubble(ev.target.getBoundingClientRect());
                case 'A':
                    this.setBubble(ev.target.getBoundingClientRect());
                case 'IFRAME':
                    this.setBubble(ev.target.getBoundingClientRect());
            }
        });
        if(!this.settings.performance_mode) {document.addEventListener("selectionchange", ()=>{this.saveRange()});}
        
        on('click', '.ed_btn_'+this.id, (ev)=>{
            if (this.settings.performance_mode || window.innerWidth <= this.settings.device_min_width) {
                if (ev.target.dataset.vt == 'true') {
                    switch (ev.target.dataset.cmd) {
                        case 'foreColor':
                            this.current_sets.font_color = prompt('Enter color value eg:red for Red Color or any color code');
                            this.Run(ev.target.dataset.cmd, this.current_sets.font_color);
                            break;
                        case 'backColor':
                            this.current_sets.font_highlight = prompt('Enter color value eg:red for Red Color or any color code');
                            this.Run(ev.target.dataset.cmd, this.current_sets.font_highlight);
                            break;
                        case 'insertImage':
                            this.setFloater('Insert Image', 'image');
                            $_('#ed_floatbox').style.cssText='display:inline-block';
                            break;
                        case 'createLink':
                            this.Run(ev.target.dataset.cmd, prompt('Enter the url here'));
                            break;
                        case 'youtube':
                            this.current_sets.last_youtube = prompt('Enter youtube video url');
                            this.Run(ev.target.dataset.cmd);
                            break;
                    }
                }
                else {
                    self.Run(ev.target.dataset.cmd);
                }
            }
            else {
                if (ev.target.dataset.vt == 'true') {
                    this._components.ed_floatbox.innerHTML = "";
                    switch (ev.target.dataset.cmd) {
                        case 'foreColor':
                            this.setFloater('Font Color', 'font-color');
                            $_('#ed_floatbox').style.cssText='display:inline-block';
                            break;
                        case 'backColor':
                            this.setFloater('Highlight Color', 'back-color');
                            $_('#ed_floatbox').style.cssText='display:inline-block';
                            break;
                        case 'insertImage':
                            this.setFloater('Insert Image', 'image');
                            $_('#ed_floatbox').style.cssText='display:inline-block';
                            break;
                        case 'createLink':
                            this.setFloater('Create Link', 'link');
                            $_('#ed_floatbox').style.cssText='display:inline-block';
                            break;
                        case 'youtube':
                            this.setFloater('Add Youtube Video', 'youtube');
                            $_('#ed_floatbox').style.cssText='display:inline-block';
                            break;
                    }
                    on('click', '.ed_float_title',()=>{
                        $_('#ed_floatbox').style.cssText='display:none';
                        switch (ev.target.dataset.cmd) {
                            case 'foreColor':
                                this.Run(ev.target.dataset.cmd, "#"+this.font_color[this.current_sets.font_color]);
                                break;
                            case 'backColor':
                                this.Run(ev.target.dataset.cmd, "#"+this.back_color[this.current_sets.font_highlight]);
                                break;
                        }
                    })
                }
                else {
                    self.Run(ev.target.dataset.cmd);
                }
            }
            if(this.forUndo[this.forUndo.length-1] != this.output() && this.forUndo[this.forUndo.length-1] != undefined) {
                this.forUndo.push(this.output());
            }
            $_('#ed_space_'+this.id).focus();
        });
        on('change select', 'select', (ev)=>{
            switch(ev.target.id) {
                case 'font-style-select'+this.id:
                    this.current_sets.font_style = ev.target.value;
                    this.Run('formatBlock',this.font_styles[this.current_sets.font_style])
                    break;
                case 'font-select'+this.id:
                    this.current_sets.font_family = ev.target.value;
                    this.Run('fontName',this.font[this.current_sets.font_family]);
                    break;
                case 'font-size-select'+this.id:
                    this.current_sets.font_size = ev.target.value;
                    this.Run('fontSize',this.current_sets.font_size);
                    break;
            }
            console.log(ev.target)
        });
        on('keydown keyup','#ed_space_'+this.id,function(ev){
            var keysave = undefined;
            this.dataset.placeholder = '';
            self.saveRange();
            if (ev.key=='Enter') { 
                setTimeout(function(){enter_nos=0;}, 1000);
                enter_nos += 1;
                if(enter_nos==3) {
                    ev.target.innerHTML+='<div></div>';
                    self.eol();
                    enter_nos=0;
                }
                self.forUndo.push(this.innerHTML);
                if(self.forUndo[self.forUndo.length-1] != self.output() || self.forUndo.length == 0) {
                    self.forUndo.push(self.output());
                }
            }

            if (!self.settings.performance_mode) {
                let pos = self.getRange().startContainer.parentElement.nodeName;
                switch(pos) {
                    case 'H1':
                        self.selectvalueChager(0, 'Heading h1');
                        break;
                    case 'H2':
                        self.selectvalueChager(0, 'Heading h2');
                        break;
                    case 'H3':
                        self.selectvalueChager(0, 'Heading h3');
                        break;
                    case 'H4':
                        self.selectvalueChager(0, 'Heading h4');
                        break;
                    case 'H5':
                        self.selectvalueChager(0, 'Heading h5');
                        break;
                    case 'H6':
                        self.selectvalueChager(0, 'Heading h6');
                        break;
                    case 'DIV':
                    case 'P':
                        self.selectvalueChager(0, 'paragraph');
                        break;
                    case 'PRE':
                        self.selectvalueChager(0, 'Pre formatted');
                        break;
                }
            }
            if (self.o_id) {
                $_('#'+self.o_id).innerText = self.output();
            }
        });
        
        // Key bindings
        on ('keypress','#ed_space_'+self.id,function(ev){
            let evtobj = window.event? event : ev;
            if (evtobj.ctrlKey && !evtobj.altKey && !evtobj.shiftKey) {
                if (['b','i','u','k','q','.',','].indexOf(evtobj.key) >= 0) {evtobj.preventDefault();}
                switch(evtobj.key) {
                    case 'b':
                        self.Run('bold');
                        break;
                    case 'i':
                        self.Run('italic');
                        break;
                    case 'u':
                        self.Run('underline');
                        break;
                    case 'k':
                        let btn = document.getElementsByClassName('ed-tools-1')[0].getElementsByTagName('button')[5];
                        btn.click();
                        break;
                    case 'Enter':
                        $_('#ed_space_'+self.id).appendChild(document.createElement('div').appendChild(document.createElement('br')),self.getRange().endContainer.parentNode);  
                        self.moveCursor(self.getRange().endContainer.parentNode.nextSibling,0);
                        self.saveRange();
                        break;
                    case 'q':
                        self.Run('indent');
                        break;
                    case '.':
                        self.Run('subscript');
                        break;
                    case ',':
                        self.Run('superscript');
                        break;
                    case 'z':
                        self.Undo();
                        break;
                    case 'y':
                        self.Redo();
                        break;
                        
                }
                console.log('Ctrl+'+evtobj.key);
            }
            else if (evtobj.ctrlKey && evtobj.shiftKey) {
                if (['Enter'].indexOf(evtobj.key) >= 0) {evtobj.preventDefault();}
                switch(evtobj.key) {
                    case 'Enter':
                        $_('#ed_space_'+self.id).insertBefore(document.createElement('div').appendChild(document.createElement('br')),self.getRange().endContainer.parentNode);  
                        self.moveCursor(self.getRange().startContainer.parentNode.previousSibling,0);
                        self.saveRange();
                        break;
                    
                }
                console.log(evtobj.key)
            }
            else if (evtobj.altKey && evtobj.shiftKey) {
                if (['%'].indexOf(evtobj.keyCode) >= 0) {evtobj.preventDefault();}
                switch(evtobj.key) {
                    case '%':
                        self.Run('strikeThrough');
                        break;
                }

                console.log('Alt+Shift'+evtobj.key);
            }
            else if (evtobj.ctrlKey && evtobj.shiftKey) {
                if (['l','e','r','j',].indexOf(evtobj.key) >= 0) {evtobj.preventDefault();}
                switch(evtobj.key) {
                    case 'l':
                        self.Run('justifyLeft');
                        break;
                    case 'e':
                        self.Run('justifyCenter');
                        break;
                    case 'r':
                        self.Run('justifyRight');
                        break;
                    case 'j':
                        self.Run('justifyFull');
                        break;
                }
            }
        });

        on('scroll click','#ed_space_'+this.id,function(ev){   
            if(['IMG','A','IFRAME'].indexOf(ev.target.nodeName) == -1) {
                self.removeBubble();
            }
        })
    };

    init() {
        // $_('head')[0].innerHTML+=ed_style;
        this.Run('styleWithCSS');
        this.Run('insertBrOnReturn');
        this.setStructure();
        this.set_Events();
        setTimeout(() => {
            if(this.forUndo[this.forUndo.length-1] != this.output() && this.forUndo.length == 0) {
                this.forUndo.push(this.output());
            }
        }, 3000);
        
    }; 
};
