'use strict';
var phoneInput = document.querySelector('#tel');
var phoneInputModal = document.querySelector('#modal__tel');
var navButton = document.querySelector('.nav__content-button');
var nameInputModal = document.querySelector('#modal__name');
var nameInput = document.querySelector('#name');
var areaInput = document.querySelector('#comment');
var acc = document.querySelectorAll('.accordion');
var modal = document.querySelector('.modal');
var i;

for (i = 0; i < acc.length; i++) {
  acc[1].classList.toggle('active');
  var panel1 = document.querySelectorAll('.panel');
  panel1[1].style.maxHeight = panel1[1].style.maxHeight + '300px';
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('active');
    var panel = event.currentTarget.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.style.maxHeight + '300px';
      collapseOthers(event.currentTarget);
    }
  });
}

function collapseOthers(clickedAccor) {
  var accs = document.getElementsByClassName('accordion');
  for (i = 0; i < accs.length; i++) {
    if (accs[i] !== clickedAccor) {
      accs[i].nextElementSibling.style.maxHeight = null;
    }
  }
}

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
  var freezeScroll = document.querySelector('html');
  freezeScroll.style.overflow = 'hidden';


});

navButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});
var modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', function () {
  closePopup();
  var freezeScroll = document.querySelector('html');
  freezeScroll.style.overflow = 'visible';
});

modalClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

phoneInput.addEventListener('focus', function () {
  phoneInput.value = '+7';

});

phoneInputModal.addEventListener('focus', function () {
  phoneInputModal.value = '+7';

});

phoneInput.addEventListener('input', function () {
  var phoneNumber = document.querySelector('#tel').value;
  var regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  if (!regex.test(phoneNumber)) {
    phoneInput.setCustomValidity('Неправильный формат');
  } else {
    phoneInput.setCustomValidity('');
  }
});

phoneInputModal.addEventListener('input', function () {
  var phoneNumber = document.querySelector('#modal__tel').value;
  var regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  if (!regex.test(phoneNumber)) {
    phoneInputModal.setCustomValidity('Неправильный формат');
  } else {
    phoneInputModal.setCustomValidity('');
  }
});

phoneInput.addEventListener('keydown', function () {
  var old = 0;
  var curLen = phoneInput.value.length;
  if (curLen < old) {
    old--;
    return;
  } else if (curLen === 2) {
    phoneInput.value = phoneInput.value + '(';
  } else if (curLen === 6) {
    phoneInput.value = phoneInput.value + ')';
  } else if (curLen === 10) {
    phoneInput.value = phoneInput.value + '-';
  } else if (curLen === 13) {
    phoneInput.value = phoneInput.value + '-';
  }
  old++;
});

phoneInputModal.addEventListener('keydown', function () {
  var old = 0;
  var curLen = phoneInputModal.value.length;
  if (curLen < old) {
    old--;
    return;
  } else if (curLen === 2) {
    phoneInputModal.value = phoneInputModal.value + '(';
  } else if (curLen === 6) {
    phoneInputModal.value = phoneInputModal.value + ')';
  } else if (curLen === 10) {
    phoneInputModal.value = phoneInputModal.value + '-';
  } else if (curLen === 13) {
    phoneInputModal.value = phoneInputModal.value + '-';
  }
  old++;
});

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
