jQuery Form Watermark
=====================

Add a watermark to your form elements – the jQuery way

Description
-----------

So you have a text box and you want a default text on it acting as a call to action. When the user focuses on the text box, the default text should go away (and its styling could change, too). What you need is jQuery and this little snippet.

Usage
-----

The only thing you need to add to you form is a `title` attribute:

    <form id="search">
      <input type="text" title="Type to search" />
    </form>

Now in you Javascript file:

    $(document).ready(function() {
      $("#search").watermark();
    });

And if you want to make it look prettier:

    input.watermark { color: #888; }

Or, clone the repo and try the example.

Installation
------------

You can grab the file directly from http://github.com/citrusbyte/jquery-watermark, or

    $ git clone git://github.com/citrusbyte/jquery-watermark.git

...and pick it from there. Make sure it's required after jquery and jquery-ui.

License
-------

Copyright (c) 2009 Damian Janowski for Citrusbyte

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
