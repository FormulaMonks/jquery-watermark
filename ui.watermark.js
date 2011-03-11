/*
 * jQuery Form Watermark
 *
 * Author: Damian Janowski
 * E-mail: damian.janowski@citrusbyte.com
*/

$.widget("ui.watermark", {
  _init: function() {
    if ($.ui.watermark.nativePlaceholderSupported) return this.element;

    var watermark = this;

    var form = this.element;

    this.elements = $("input:text, input:password, textarea", form);

    var ignoreDefaultValue = this.options["ignoreDefaultValue"];

    this.elements.each(function() {
      this.ignoreDefaultValue = ignoreDefaultValue;
      this.defaultValue = this.value;
    });

    this.elements.focus(this.handlerOff);
    this.elements.blur(this.handlerOn);

    this.refresh();

    $(form).submit(function() {
      watermark.elements.each(watermark.handlerOff);
      return true;
    });

    window.onbeforeunload = function() {
      watermark.elements().each(watermark.handlerOff);
    };

    return this.element;
  },

  refresh: function() {
    this.elements.each(this.handlerOn);
  },

  handlerOn: function() {
    var placeholder = this.getAttribute("placeholder");

    if (placeholder && placeholder != '' && (this.value == '' || this.value == placeholder)) {
      $(this).addClass("watermark");
      this.value = placeholder;
      if(this.type == "password") {
        this.isPassword = true;
        this.type = "text";
      }
    }

    return true;
  },

  handlerOff: function() {
    var placeholder = this.getAttribute("placeholder");

    if (this.type == 'text' || this.type == 'textarea') {
      if (this.value == placeholder && placeholder && placeholder != '') {
        this.value = this.defaultValue || '';
        $(this).removeClass("watermark");
        if(this.isPassword) {
          this.type = "password";
        }
      }
    }

    return true;
  }
});

$.extend($.ui.watermark, {
  nativePlaceholderSupported: ("placeholder" in document.createElement("input"))
});
