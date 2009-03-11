jQuery Form Watermark
=====================

So you have a text box and you want a default text on it acting as a call to action. When the user focuses on the text box, the default text should go away (and its styling could change, too). What you need is jQuery and this little snippet.

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
