# detect-guester-plugin


# simple-drawerlayout
ps:required jquery

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
        })
    </code>
</pre>