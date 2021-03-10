'use strict';
var phoneInput = document.querySelector('#tel');
var pageHeader = document.querySelector('.nav');
var headerToggle = document.querySelector('.nav__toggle');
pageHeader.classList.remove('nav--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('nav--closed')) {
    pageHeader.classList.remove('nav--closed');
    pageHeader.classList.add('nav--opened');
  } else {
    pageHeader.classList.add('nav--closed');
    pageHeader.classList.remove('nav--opened');
  }
});

phoneInput.addEventListener('input', function () {
  var phoneNumber = document.querySelector('#tel').value;
  var regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  if (!regex.test(phoneNumber)) {
    phoneInput.setCustomValidity('Неправильный формат');
  } else {
    phoneInput.setCustomValidity('');
  }
});
