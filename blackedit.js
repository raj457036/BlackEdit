// BlackEdit V0.2 alpha

var HtmlContents = {
    'ed-tools' : `<div id="ed-tools">
                <div class="btn-box" id="level-1">
                    <select name="headings" id="ed-heading" class='ed-select ed-btn-white' aria-label="tooltip" aria-content='Bold Ctrl+B'>
                        <option value="h1">Heading H1</option>
                        <option value="h2">Heading H2</option>
                        <option value="h3">Heading H3</option>
                        <option value="h4">Heading H4</option>
                        <option value="h5">Heading H5</option>
                        <option value="h6">Heading H6</option>
                        <option value="p" selected>Paragraph</option>
                        <option value="small">small text</option>
                    </select>

                    <button class="ed-btn ed-btn-white" data-cmd="bold" aria-label="tooltip" aria-content='Bold' type="button"><i class="fa fa-bold"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="italic" aria-label="tooltip" aria-content='Italic' type="button"><i class="fa fa-italic"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="underline" aria-label="tooltip" aria-content='Underline' type="button"><i class="fa fa-underline"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="insertHorizontalRule" aria-label="tooltip" aria-content='Horizontal Line' type="button"><i class="far fa-window-minimize"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="createLink" aria-label="tooltip" aria-content='Link' type="button"><i class="fa fa-link"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="insertUnorderedList" aria-label="tooltip" aria-content='Bulleted List' type="button"><i class="fa fa-list-ul"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="insertOrderedList" aria-label="tooltip" aria-content='Numbered List' type="button"><i class="fa fa-list-ol"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="insertImage" aria-label="tooltip" aria-content='Insert Image' type="button"><i class="far fa-image"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="formatBlock" aria-label="tooltip" aria-content='Block quote' type="button"><i class="fa fa-quote-left"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="undo"  aria-label="tooltip" aria-content='Undo' type="button"><i class="fa fa-undo"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="redo"  aria-label="tooltip" aria-content='Redo' type="button"><i class="fa fa-redo"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="youtube"  aria-label="tooltip" aria-content='Youtube' type="button"><i class="fab fa-youtube"></i></button>
                    </div>
                </div>`,
    'ed-editor-space': `<div id="ed-space" contenteditable="true" autofocus='true'></div>`,
    'ed-floater' : `<div id="ed-float"></div>`,
    'ed-fl-links': `<div class="btn-box">
                        <input type="text" class="ed-input" id="ed-link">
                        <button class="ed-btn ed-btn-white" id='ed-link-btn' type="button"><i class="fa fa-check"></i></button>
                        <button class="ed-btn ed-btn-white" id='ed-unlink-btn' type="button"><i class="fa fa-times"></i></button>
                    </div>`,
    'ed-fl-btns': `<div class="btn-box">
                    <button class="ed-btn ed-btn-white" data-cmd="justifyLeft" aria-label="tooltip" aria-content='Align left' type="button"><i class="fa fa-align-left"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="justifyCenter" aria-label="tooltip" aria-content='Align center' type="button"><i class="fa fa-align-center"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="justifyRight" aria-label="tooltip" aria-content='Align right' type="button"><i class="fa fa-align-right"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="justifyFull" aria-label="tooltip" aria-content='Align justify' type="button"><i class="fa fa-align-justify"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="Float" data-val='left' aria-label="tooltip" aria-content='Float Left' type="button"><i class="fa fa-arrow-left"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="Float" data-val='right' aria-label="tooltip" aria-content='Float Right' type="button"><i class="fa fa-arrow-right"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="Float" data-val='unset' aria-label="tooltip" aria-content='No Float' type="button"><i class="fa fa-arrows-alt-h"></i></button>

                    <input type='color' id='HighlightColorInput' hidden value='#ffffff'>
                    <label for='HighlightColorInput' class='ed-btn ed-btn-white' aria-label="tooltip" aria-content='Highlight'>
                    <i class="fa fa-highlighter" style="padding: 5px;" id='highlightColor'></i></label>

                    <button class="ed-btn ed-btn-white" data-cmd="strikeThrough" aria-label="tooltip" aria-content='Strike through' type="button"><i class="fa fa-strikethrough"></i></button>

                    <input type='color' id='textColorInput' hidden>
                    <label for='textColorInput' class='ed-btn ed-btn-white' aria-label="tooltip" aria-content='Text Color'>
                    <i class="fa fa-font" style="padding: 5px;" id='textColor'></i></label>

                    <select name="fonts" id="ed-fonts" class='ed-select ed-btn-white' aria-label="tooltip" aria-content='Fonts'>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Arial Black">Arial Black</option>
                        <option value="Impact">Impact</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                        <option value="Trebuchet MS">Trebuchet MS</option>
                        <option value="serif">serif</option>
                        <option value="Verdana">Verdana</option>
                        <option value="monospace">Monospace</option>
                    </select>
                  </div>`
}


class Editor {
    constructor (id, out_id='ed-output',icon_pack='fa') {
        this.id = id;
        this.out_id=out_id;
        this.icon_pack = icon_pack;
        this.range = {};
        this.bbl = undefined;
        this.content = HtmlContents;
        this.linking = true; //new linking
    }

    run(code, value) { 
        if(value == 'pop') {
            value=prompt('pop');
        }
        else if (value == 'youtube') {
            value=prompt('youtube');
        } 
        document.execCommand(code, false, value||'');
    }

    saveSelection() {
        let sel = window.getSelection();
        let x = sel.getRangeAt(0);
        this.ranges = {"startContainer": x.startContainer, "startOffset":x.startOffset,"endContainer":x.endContainer, "endOffset":x.endOffset}
    }

    applySelection(ret = false) {
        let sel = window.getSelection();
        sel.removeAllRanges();
        let r = document.createRange();
        r.setStart(this.ranges.startContainer, this.ranges.startOffset);
        r.setEnd(this.ranges.endContainer, this.ranges.endOffset);
        sel.addRange(r);
        if (ret) return r;
    }

    applyFormat(blockName, style='') {
        this.saveSelection();
        let r = this.applySelection(true);
        let n = document.createElement(blockName);
        n.style.cssText = style;
        r.surroundContents(n);
    }

    applyStyle(style, id=undefined) {
        this.saveSelection();
        let r = this.applySelection(true);
        if (id != undefined) {r.startContainer.lastChild.id=id;}
        r.startContainer.lastChild.style.cssText = style;
    }

    floaterBlock(sel, modifier=false, ele=undefined, val='https://') {
        if(modifier) {
            switch(ele) {
                case 1:
                    $('#ed-float').html(this.content['ed-fl-links']);
                    $('#ed-link').val(val);
                break;
                default:
                    $('#ed-float').html(this.content['ed-fl-btns']);
            }
        }

        let s = sel.getRangeAt(0).getBoundingClientRect();
        console.log(sel);
        this.saveSelection();
        this.bbl.style.top = s.top+s.height+5+ 'px';
        this.bbl.style.left = (s.left-5)+'px';
        this.bbl.style.display = 'inline-block';
    }

    // output

    output() {
        return $('#ed-space').html();
    }

    init(self = this) {
        document.styleWithCSS = true;

        $(document).ready(function(){
            $('#'+self.id).append(self.content['ed-tools']);
            $('#'+self.id).append(self.content['ed-editor-space']);
            $('#'+self.id).append(self.content['ed-floater']);
            $('#ed-space').focus();
        

            $('#'+self.id).on('click','button',function(){
                if($(this).attr('data-cmd') == 'formatBlock') {
                    self.run($(this).attr('data-cmd'), '<blockquote>');
                }
                else if($(this).attr('data-cmd') == 'createLink') {
                    let sel = window.getSelection();
                    if(self.linking) self.floaterBlock(sel,true,1);

                    $('#ed-link-btn').click(function(){
                        self.applySelection();
                        self.run('createLink',$('#ed-link').val());
                        $('#ed-space').trigger('mousedown');
                        self.floaterBlock(sel,true,0);
                    })
                    $('#ed-unlink-btn').click(function(){
                        self.applySelection();
                        self.run('unlink');
                        $('#ed-space').trigger('mousedown');
                        self.floaterBlock(sel,true,0);
                    })
                }
                else if ($(this).attr('data-cmd') == 'insertImage') {
                    self.run('insertImage', prompt('Enter image Url'));
                }
                else if($(this).attr('data-cmd') == 'youtube') {
                    let link = prompt('Enter Youtube link');
                    link = link.split('=')[1];968602
                    let val = `<div class='ed-youtube' dragable='true'><iframe style='width:100%; height:100%;' src="https://www.youtube.com/embed/${link}" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe></div>`
                    self.run('insertHtml', val);
                }
                else if($(this).attr('data-cmd') == 'Float') {
                    self.applyStyle(`float:${$(this).attr('data-val')}; margin:5px;`);
                }
                else { 
                    self.run($(this).attr('data-cmd'));
                }

                if (document.queryCommandState($(this).attr('data-cmd'))) {
                    $(this).addClass('active');
                    $('#ed-space').focus();
                }
                else {
                    $(this).removeClass('active');
                    $('#ed-space').focus();
                }
                console.log($(this).attr('data-cmd'));
            });

            $('select#ed-heading').click(function(){
                self.run('removeFormat');
                if (['h1','h2','h3','h4','h5','h6'].indexOf($(this).val()) != -1) {
                    self.run('heading', $(this).val());
                }
                else if ($(this).val() == 'p') {
                    self.run('formatBlock', '<p>');
                }
                else if($(this).val() == 'small') {
                    self.run('formatBlock', '<p>');
                    self.applyFormat('small');
                }
            });

            $('#'+self.id).on('click','select#ed-fonts',function(){
                self.run('fontName', $(this).val());
            });

            $('#'+self.id).on('click change', '#HighlightColorInput',function(){
                $('label[for="HighlightColorInput"]').css('background',$(this).val()).attr('aria-content', `Highlight_${$(this).val()}`);
                self.run('backColor', $(this).val());
            });

            $('#'+self.id).on('click change', '#textColorInput',function(){
                $('#textColor').css('color',$(this).val());
                self.run('foreColor', $(this).val());
            });

            document.getElementById('ed-space').addEventListener('mouseup', function(){
                self.bbl = document.getElementById('ed-float');
                let sel = window.getSelection();
                if(!sel.isCollapsed){
                    
                    if(sel.getRangeAt(0).cloneContents().children[0] && sel.getRangeAt(0).cloneContents().children[0].tagName=='A')
                    {
                        self.floaterBlock(sel, true, 1, sel.getRangeAt(0).cloneContents().children[0].href);
                        self.linking = false;
                        $('button[data-cmd="createLink"').click();
                        self.linking=true;
                    }
                    else {
                        self.floaterBlock(sel, true, 0);
                    }

                }
                
            })

            document.getElementById('ed-space').addEventListener('mousedown', function() {
                self.bbl = document.getElementById('ed-float');
                self.bbl.style.display = 'none';
                document.getElementById(self.out_id).contentEditable = false;
            })

            $('#'+self.out_id).on('mousedown',function(){
                $(this).attr('contentEditable', 'true');
            });
            $('#'+self.out_id).on('keypress keyup paste keydown',function(){
                $('#ed-space').html($(this).text());
            })
            $('#'+self.id).on('mousedown mouseup keypress', function () {
                $('#'+self.out_id).text(ed.output());
            })

        });
    }
}