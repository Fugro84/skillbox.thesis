$(function(){
  let callMe = $('.js-call-me'),
      moreInfo = $('.js-more-info'),
      checkPrice = $('.js-price'),
      orderProject = $('.js-order-project'),
      popupContCall = $('.popup-container-call'),
      popupContEmail = $('.popup-container-email'),
      submitEl = $('.js-submit');

  callMe.click(function(){
    popupContCall.show();
  });

  moreInfo.click(function(){
    popupContEmail.show();
  });

  checkPrice.click(function(){
    popupContEmail.show();
  });

  orderProject.click(function(){
    popupContEmail.show();
  });

  popupContCall.click(function(event){
    if (event.target == this) {
      $(this).hide();
    }
  })

  popupContEmail.click(function(event){
    if (event.target == this) {
      $(this).hide();
    }
  })

  submitEl.click(function(event){
    popupContCall.hide();
  })

});

$(function(){
  // Мобильная навигация
  let navButton = $('.burger'),
      navMobMenu = $('.header__nav-burger');

  navButton.click(function(){
      navMobMenu.toggleClass('toggle_menu');
  });

});
