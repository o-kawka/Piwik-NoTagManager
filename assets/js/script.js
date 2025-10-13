// DESKTOP TRIGGER MENU
jQuery.fn.openPopup = function() {
  $(this).css('display','block');
    return this; 
};

jQuery.fn.closePopup = function() {
    $(this).css('display','none');
      return this; 
  };


if ($(window).width() > 952) { 
    $('i.menu-trigger').click(function() {
        $('.header__nav-bar nav').slideToggle();
    });
} else {
    $('i.menu-trigger').click(function() {
       $('#popup-menu').openPopup();
    });
}

$('.popup-menu i, .popup-menu a').click(function() {
    $('#popup-menu').closePopup();
})