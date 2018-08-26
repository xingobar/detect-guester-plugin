# detect-guester-plugin

## The plugin will detect user guester like swipe or long press etc...

ps:required jquery

### you can git clone https://github.com/xingobar/detect-guester-plugin.git

<p>step1: include jQuery:</p>
<pre>
    <code>
        < script type="text/javascript" src="../src/jquery-3.3.1.min.js"/>
    </code>
</pre>

<p>step2: include simple-drawer.js</p>
<pre>
    <code>
        < script type="text/javascript" src="../dist/simple-drawer.min.js">
    </code>
</pre>

<p>or you can use require</p>
<pre>
    var detectGuester = require('detect_guester');
</pre>

<p>description</p>
<pre>
    <code>
        detectGuester.swipe({
           target: string , // html element, example: '#test',
           direction: string, // (top,down,left,right) detect user guester swipe direction
           callback: function(){...} // trigger callback
        });

        detectGuester.longPress({
            target: string, // html element, example: '#test'
            wait_time: integer, // trigger callback after x seconds
            callback: function(){....} // trigger callback
        });

        detectGuester.press({
            target: string, // html element, example: '#test'
            callback: function() {...} // trigger callback
        });

        detectGuester.rotate({
            target: string, // html element, example: '#test'
            callback: function() {....} // trigger callback
        });

        detectGuester.zoom({
            target: string, // html element, example: '#test'
            callback:function() {....}, // trigger callback
            direction: string // in (zoom-in) or out (zoom-out)   
        })
    </code>
</pre>