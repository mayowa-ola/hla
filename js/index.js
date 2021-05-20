const FloatLabel = (() => {
  
  // add active class and placeholder 
  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
  };
  
  // remove active class and placeholder
  const handleBlur = (e) => {
    const target = e.target;
    if(!target.value) {
      target.parentNode.classList.remove('active');
    }
    target.removeAttribute('placeholder');    
  };  
  
  // register events
  const bindEvents = (element) => {
    const floatField = element;
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);    
  };
  
  // get DOM elements
  const init = () => {
    const floatContainers = document.querySelectorAll('.float-container > .float-input');
    
    floatContainers.forEach((element) => {
      // if (element.querySelector('input').value || element.querySelector('textarea')) {
          element.classList.add('active');
      // }
      
      bindEvents(element);
    });
  };
  
  return {
    init: init
  };
})();
FloatLabel.init();


$(document).ready(function() {

  const smallDevice = window.matchMedia("(min-width: 560px)");
    smallDevice.addListener(handleDeviceFrontChange);
    smallDevice.addListener(handleDeviceBackChange);
    function handleDeviceFrontChange(e) {
      if (e.matches) {
        document.getElementById("empty-top").scrollIntoView({
          behavior: "smooth", // or "auto" or "instant"
          block: "start" // or "end"
        });
      } else {
        document.getElementById("top-front-1").scrollIntoView({
          behavior: "smooth", // or "auto" or "instant"
          block: "start" // or "end"
        });
      }
    }

    function handleDeviceBackChange(e) {
      if (e.matches) {
        document.getElementById("empty-top").scrollIntoView({
          behavior: "smooth", // or "auto" or "instant"
          block: "start" // or "end"
        });
      } else {
        document.getElementById("top-back-1").scrollIntoView({
          behavior: "smooth", // or "auto" or "instant"
          block: "start" // or "end"
        });
      }
    }

  function openModal(index) {
    $("#modal-" + index).addClass("show");
    $("#modal-bg-" + index).addClass("show");
    $('body,html').css('overflow', 'hidden');
  }
  
  function closeModal(index) {
    $("#modal-" + index).removeClass("show");
    $("#modal-bg-" + index).removeClass("show");
    $('body,html').removeAttr("style");
  }

  $(document).click(function (e) {
    if ($(e.target).is('#modal-1')) {
      $("#modal-1").removeClass("show");
      $("#modal-bg-1").removeClass("show");
      $('body,html').removeAttr("style");

    } else if ($(e.target).is('#modal-2')) {

      $("#modal-2").removeClass("show");
      $("#modal-bg-2").removeClass("show");
      $('body,html').removeAttr("style");
      
    } else if ($(e.target).is('#modal-3')) {

      $("#modal-3").removeClass("show");
      $("#modal-bg-3").removeClass("show");
      $('body,html').removeAttr("style");
    }
  });



  
  $("[id^=modal-trigger-]").click(function(e) {
    e.preventDefault();
    let index = $(this).data('value');
    openModal(index);
  });
  
  $("[id^=modal-cta-trigger-]").click(function(e) {
    e.preventDefault();
    let index = $(this).data('value');
    openModal(index);
  });

  $("[id^=contact-trigger-]").click(function(e) {
    e.preventDefault();
    closeModal(1);
    resetMainModal();
    setTimeout(function(){
      openModal(2);
    },
    1100)
    
  });
  
  $("[id^=modal-close-icon-]").click(function(e) {
    let index = $(this).data('value');
    closeModal(index);

    if ($("#modal-form-success").hasClass("active")) {
      resetMainModal();
    } else if ($("#heirModalContactSuccess").hasClass("active")) {
      resetContactModal();
    }
  });
  
  $("[id^=modal-page-heading-]").click(function(e) {
    let index = $(this).data('value');
    $("#modal-page-heading-" + index).addClass("active");
    $("[id^=modal-page-heading-]").not($("#modal-page-heading-" + index)).removeClass("active");
    $("#modal-form-page-" + index).addClass("active");
    $("[id^=modal-form-page-]").not($("#modal-form-page-" + index)).removeClass("active");
  });
  
  $("[id^=modal-next-page-]").click(function(e) {
    e.preventDefault();
    let index = $(this).data('value');
    $("#modal-front-" + index).removeClass("active");
    $("#modal-back-" + index).addClass("active");
    handleDeviceBackChange(smallDevice); 
  });
  
  $("[id^=modal-prev-page-]").click(function(e) {
    e.preventDefault();
    let index = $(this).data('value');
    $("#modal-front-" + index).addClass("active");
    $("#modal-back-" + index).removeClass("active");
    handleDeviceFrontChange(smallDevice); 
  });
  
  $("#modal-prev-page-2").click(function(e) {
    e.preventDefault();
    $("#modal-front-2").addClass("active");
    $("#modal-back-2").removeClass("active");
  });

  $("#heir-success-close").click(function() {
    $(".heir__modal").removeClass("show");
    $(".heir__modal-main").removeClass("show");
    $('body,html').removeAttr("style");
    resetMainModal();
  });


  $("#closeContactModalBtn").click(function() {
    $(".heir__modal").removeClass("show");
    $(".heir__modal-main").removeClass("show");
    $('body,html').removeAttr("style");
    resetContactModal();
  });




  function resetMainModal() {
    setTimeout(function(){
      $("#modal-container-1").removeClass("show-success");
      $("#modal-heading-container-1").css('display', '');
      $("#modal-page-heading-1").addClass("active");
      $("#modal-page-heading-2").removeClass("active");
      $("#modal-form-page-1").addClass("active");
      $("#modal-form-page-2").removeClass("active");
      $("#modal-form-success").removeClass("active");
      $("#modal-front-1").addClass("active");
      $("#modal-front-2").addClass("active");
      $("#modal-back-1").removeClass("active");
      $("#modal-back-2").removeClass("active");
      $("#heirModalFormBusiness").find(".float-container").removeClass("active");
      $("#heirModalFormPersonal").find(".float-container").removeClass("active");
    }, 1000);
  }

  function resetContactModal() {
    setTimeout(function(){
      $("#heir-contact-headings").css('display', '');
      $("#heir-contact-info").css('display', '');
      $("#heir-contact-container").css('display', '');
      $("#heirModalContactSuccess").removeClass("active");
      $("#heir-contact-form").find(".float-container").removeClass("active");
    }, 1000);
  }

});



window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var formPersonal = document.getElementById("heirModalFormPersonal");
  
  function successPersonal() {
    formPersonal.reset();
    // button.style = "display: none ";
    $("#modal-heading-container-1").hide();
    $("#modal-container-1").addClass("show-success");
    $("#modal-form-page-1").removeClass("active");
    $("#modal-form-page-2").removeClass("active");
    $("#modal-form-success").addClass("active");
    document.getElementById("modal-form-success").scrollIntoView({
      behavior: "smooth", // or "auto" or "instant"
      block: "start" // or "end"
    });
    // statusPersonal.innerHTML = "Thanks!";
  }

  function errorPersonal() {
    // statusPersonal.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  formPersonal.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(formPersonal);
    ajax(formPersonal.method, formPersonal.action, data, successPersonal, errorPersonal);
  });


    // get the form elements defined in your form HTML above
    
  var formBusiness = document.getElementById("heirModalFormBusiness");

  // Success and Error functions for after the form is submitted
  
  function successBusiness() {
    formBusiness.reset();
    // button.style = "display: none ";
    $("#modal-heading-container-1").hide();
    $("#modal-container-1").addClass("show-success");
    $("#modal-form-page-1").removeClass("active");
    $("#modal-form-page-2").removeClass("active");
    $("#modal-form-success").addClass("active");
    document.getElementById("modal-form-success").scrollIntoView({
      behavior: "smooth", // or "auto" or "instant"
      block: "start" // or "end"
    });
    // statusBusiness.innerHTML = "Thanks!";
  }

  function errorBusiness() {
    // statusBusiness.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  formBusiness.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(formBusiness);
    ajax(formBusiness.method, formBusiness.action, data, successBusiness, errorBusiness);
  });



  // get the form elements defined in your form HTML above
    
  var formContact = document.getElementById("heir-contact-form");
  // var buttonContact = document.getElementById("btn-contact-submit");
  // var statusContact = document.getElementById("my-form-status-personal");

  // Success and Error functions for after the form is submitted
  
  function successContact() {
    formContact.reset();
      $("#heir-contact-headings").hide();
      $("#heir-contact-info").hide();
      $("#heir-contact-container").hide();
      $("#heirModalContactSuccess").addClass("active");
      document.getElementById("heirModalContactSuccess").scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
      });
      // statusContact.innerHTML = "Thanks!";
  }

  function errorContact() {
    // statusContact.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  formContact.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(formContact);
    ajax(formContact.method, formContact.action, data, successContact, errorContact);
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }


});

 