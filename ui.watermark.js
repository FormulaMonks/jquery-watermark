/*
 * jQuery Form Watermark
 *
 * Author: Damian Janowski
 * E-mail: damian.janowski@citrusbyte.com
*/

$.widget("ui.watermark", {
  _init: function() {
    var watermark = this;

    var form = this.element;

    this.elements = $("input:text, input:password, textarea", form);

    this.elements.focus(this.handlerOff);
    this.elements.blur(this.handlerOn);

    this.refresh();

    $(form).submit(function() {
      watermark.elements.each(watermark.handlerOff);
      return true;
    });
  },

  refresh: function() {
    this.elements.each(this.handlerOn);
  },

  handlerOn: function() {
    if (this.title && this.title != '' && (this.value == '' || this.value == this.title)) {
      $(this).addClass("watermark");
      this.value = this.title;
      if(this.type = "password") {
        this.isPassword = true;
        this.type = "text";
      }
    }

    return true;
  },

  handlerOff: function() {
    if (this.type == 'text' || this.type == 'textarea') {
      if (this.value == this.title && this.title && this.title != '') {
        this.value = '';
        $(this).removeClass("watermark");
        if(this.isPassword) {
          this.type = "password";
        }
      }
    }

    return true;
  }
});
