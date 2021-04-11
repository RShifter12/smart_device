'use strict';
var phoneInput = document.querySelector('#tel');
var navButton = document.querySelector('.nav__content-button');
var phoneNumber = document.querySelector('#tel').value;
var MIN_TITLE_LENGTH = 16;
var nameInputModal = document.querySelector('#modal__name');
var nameInput = document.querySelector('#name');
var areaInput = document.querySelector('#comment');
var acc = document.querySelectorAll('.accordion');

var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('active');
    var panel = event.currentTarget.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + '300px';
    }
  });
}

phoneInput.addEventListener('input', function () {
  var regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  if (!regex.test(phoneNumber)) {
    phoneInput.setCustomValidity('Неправильный формат');
  } else {
    phoneInput.setCustomValidity('');
  }
});

var modal = document.querySelector('.modal');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

var openPopup = function () {
  modal.classList.remove('modal--hidden');
  nameInputModal.focus();
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  modal.classList.add('modal--hidden');
  document.removeEventListener('keydown', onPopupEscPress);

};

navButton.addEventListener('click', function () {
  openPopup();

});

navButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});
var modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', function () {
  closePopup();
});

modalClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

phoneInput.addEventListener('input', function () {
  var valueLength = phoneInput.value.length;
  var regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  if (valueLength < MIN_TITLE_LENGTH) {
    phoneInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (!regex.test(phoneNumber)) {
    phoneInput.setCustomValidity('Неправильный формат');
  } else {
    phoneInput.setCustomValidity('');
  }
  phoneInput.reportValidity();
});

phoneInput.onclick = function () {
  phoneInput.value = '+7';
};

var old = 0;

phoneInput.onkeydown = function () {
  var curLen = phoneInput.value.length;

  if (curLen < old) {
    old--;
    return;
  }

  if (curLen === 2) {
    phoneInput.value = phoneInput.value + '(';
  }

  if (curLen === 6) {
    phoneInput.value = phoneInput.value + ')';
  }

  if (curLen === 10) {
    phoneInput.value = phoneInput.value + '-';
  }

  if (curLen === 13) {
    phoneInput.value = phoneInput.value + '-';
  }


  old++;
};

nameInput.value = localStorage.getItem('name');
nameInput.oninput = function () {
  localStorage.setItem('name', nameInput.value);
};

phoneInput.value = localStorage.getItem('phone');
phoneInput.oninput = function () {
  localStorage.setItem('phone', phoneInput.value);
};

areaInput.value = localStorage.getItem('text');
areaInput.oninput = function () {
  localStorage.setItem('text', areaInput.value);
};
