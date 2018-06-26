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
                        <option value="p">Paragraph</option>
                        <option value="small">small text</option>
                        <option value="monospace">monospaced</option>
                    </select>

                    <button class="ed-btn ed-btn-white" data-cmd="bold" aria-label="tooltip" aria-content='Bold (Ctrl+B)'><i class="fa fa-bold"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="italic" aria-label="tooltip" aria-content='Italic (Ctrl+I)'><i class="fa fa-italic"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="underline" aria-label="tooltip" aria-content='Underline (Ctrl+Alt+U)'><i class="fa fa-underline"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="insertHorizontalRule" aria-label="tooltip" aria-content='Horizontal Line (Ctrl+Alt+H)'><i class="far fa-window-minimize"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="createLink" aria-label="tooltip" aria-content='Link (Ctrl+K)'><i class="fa fa-link"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="insertUnorderedList" aria-label="tooltip" aria-content='Bulleted List (Ctrl+Shift+U)'><i class="fa fa-list-ul"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="insertOrderedList" aria-label="tooltip" aria-content='Numbered List (Ctrl+Shift+O)'><i class="fa fa-list-ol"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="insertImage" aria-label="tooltip" aria-content='Insert Image (Ctrl+Shift+L)'><i class="far fa-image"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="formatBlock" aria-label="tooltip" aria-content='Block quote (Ctrl+Q)'><i class="fa fa-quote-left"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="undo"  aria-label="tooltip" aria-content='Undo (Ctrl+Z)'><i class="fa fa-undo"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="redo"  aria-label="tooltip" aria-content='Redo (Ctrl+Y)'><i class="fa fa-redo"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="createLink"  aria-label="tooltip" aria-content='Youtube (Ctrl+Shift+1)'><i class="fab fa-youtube"></i></button>
                    <button class="ed-btn ed-btn-white" onclick="ed.applySelection()"  aria-label="tooltip" aria-content='Youtube (Ctrl+Shift+1)'><i class="fab fa-youtube"></i></button>

                </div>
            </div>`,
    'ed-editor-space': `<div id="ed-space" contenteditable="true" autofocus='true'></div>`,
    'ed-floater' : `<div id="ed-float"></div>`,
    'ed-fl-links': `<div class="btn-box">
                        <input type="text" class="ed-input" id="ed-link" autofocus>
                        <button class="ed-btn ed-btn-white"><i class="fa fa-check"></i></button>
                        <button class="ed-btn ed-btn-white"><i class="fa fa-times"></i></button>
                    </div>`,
    'ed-fl-btns': `<div class="btn-box">
                    <button class="ed-btn ed-btn-white" data-cmd="justifyLeft" aria-label="tooltip" aria-content='Align left'><i class="fa fa-align-left"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="justifyCenter" aria-label="tooltip" aria-content='Align center'><i class="fa fa-align-center"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="justifyRight" aria-label="tooltip" aria-content='Align right'><i class="fa fa-align-right"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="justifyFull" aria-label="tooltip" aria-content='Align justify'><i class="fa fa-align-justify"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="hiliteColor" aria-label="tooltip" aria-content='Highlight'><i class="fa fa-highlighter"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="strikeThrough" aria-label="tooltip" aria-content='Strike through'><i class="fa fa-strikethrough"></i></button>
                    <button class="ed-btn ed-btn-white" data-cmd="insertOrderedList" aria-label="tooltip" aria-content='Text Color'><i class="fa fa-font"></i></button>
                    <select name="fonts" id="ed-heading" class='ed-select ed-btn-white' aria-label="tooltip" aria-content='Fonts'>
                        <option value="f1">Heading H1</option>
                        <option value="f2">Heading H2</option>
                        <option value="f3">Heading H3</option>
                        <option value="f4">Heading H4</option>
                        <option value="f5">Heading H5</option>
                        <option value="f6">Heading H6</option>
                        <option value="f7">Paragraph </option>
                        <option value="f8">small text</option>
                        <option value="f9">monospaced</option>
                    </select>
                  </div>`
}


class Editor {
    constructor (id, icon_pack='fa') {
        this.id = id;
        this.icon_pack = icon_pack;
        this.range = {};
        this.bbl = undefined;
        this.content = HtmlContents;
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

    applyFormat(blockName) {
        this.saveSelection();
        let r = this.applySelection(true);
        let n = document.createElement(blockName);
        r.surroundContents(n);
    }

    init(self = this) {
        document.styleWithCSS = true;

        $(document).ready(function(){
            $('#editor').append(self.content['ed-tools']);
            $('#editor').append(self.content['ed-editor-space']);
            $('#editor').append(self.content['ed-floater']);
            $('#ed-float').append(self.content['ed-fl-btns']);
            $('#ed-space').focus();
        

            $('button').click(function(e){
                self.run($(this).attr('data-cmd'));
                if (document.queryCommandState($(this).attr('data-cmd'))) {
                    $(this).addClass('active');
                    $('#ed-space').focus();
                }
                else {
                    $(this).removeClass('active');
                    $('#ed-space').focus();
                }

                if($(this).attr('data-cmd') == 'formatBlock') {
                    self.run($(this).attr('data-cmd'), '<blockquote>');
                }
            })

            $('select').click(function(){
                if (['h1','h2','h3','h4','h5','h6'].indexOf($(this).val()) != -1) {
                    self.run('heading', $(this).val());
                }
                else if ($(this).val() == 'p') {
                    self.run('removeFormat');
                    self.run('formatBlock', '<p>');
                }
                else if($(this).val() == 'small') {
                    self.run('removeFormat');
                    self.run('formatBlock', '<p>');
                    self.applyFormat('small');
                }
            })

            document.getElementById('ed-space').addEventListener('mouseup', function(e){
                self.bbl = document.getElementById('ed-float');
                let sel = window.getSelection();
                if(!sel.isCollapsed){
                    let s = sel.getRangeAt(0).getBoundingClientRect();
                    self.saveSelection();
                    self.bbl.style.top = s.top+s.height+5+ 'px';
                    self.bbl.style.left = (s.left-5)+'px';
                    self.bbl.style.display = 'block';
                }
            })

            document.getElementById('ed-space').addEventListener('mousedown', function() {
                self.bbl = document.getElementById('ed-float');
                self.bbl.style.display = 'none';
            })

        });
    }
}