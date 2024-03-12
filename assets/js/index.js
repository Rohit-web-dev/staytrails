const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
    },
  },
  {
    breakpoint: 770,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

$("#slick-slider-1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  // prevArrow: $('.prev-2'),
  // nextArrow: $('.next-2'),
  // responsive: responsive
});

$("#slick-slider-2").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // dots: true,
  // prevArrow: $('.prev-2'),
  // nextArrow: $('.next-2'),
  responsive: responsive,
});

// -- details page --

$("#slick-slider-3").slick({
    centerMode: true,
    centerPadding: '60px',
    // autoplay: true,
    // autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: responsive,
  // slidesToShow: 7,
  // slidesToScroll: 1,
  // // autoplay: true,
  // // autoplaySpeed: 1000,
  // // dots: true,
  // prevArrow: $('.prev-2'),
  // nextArrow: $('.next-2'),
  // responsive: responsive,
});

setTimeout(() => {
  $(".single-item").css("opacity", 1);
}, 100);

// -- password hide and show --
function myFuncShow2(el_id) {
  var p = $("#pass").attr("type");
  $("#pass").attr(
    "type",
    $("#pass").attr("type") === "password" ? "text" : "password"
  );
}
function myFuncShow3(el_id) {
  var p = $("#pass2").attr("type");
  $("#pass2").attr(
    "type",
    $("#pass2").attr("type") === "password" ? "text" : "password"
  );
}
function myFuncShow4(el_id) {
  var p = $("#pass3").attr("type");
  $("#pass3").attr(
    "type",
    $("#pass3").attr("type") === "password" ? "text" : "password"
  );
}

// -- login form validation --
$(document).ready(function () {
  jQuery.validator.addMethod(
    "validate_email",
    function (value, element) {
      if (
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    "Please enter a valid email address."
  );
  $("#frm").validate({
    rules: {
      email: {
        required: true,
        validate_email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
      phone: {
        required: true,
        minlength: 10,
      },
      otp: {
        required: true,
        minlength: 4,
      },
    },
    messages: {
      email: {
        required: " Email is mandatory",
      },
      password: {
        required: "password is mandatory",
        minlength: "Enter minimum 6 characters",
      },
      phone: {
        required: "Phone number is mandatory",
        minlength: "Enter minimum 10 digit",
      },
      otp: {
        required: "OTP is mandatory",
        minlength: "Enter minimum 4 characters",
      },
    },
  });

  // -- forgot password -- 
  $("#fgpass").validate({
    rules: {
      email: {
        required: true,
        validate_email: true,
      },
    },
    messages: {
      email: {
        required: " Email is mandatory",
      },
    },
  });

  // -- forgot password -- 
  $("#withPhone").validate({
    rules: {
      regmobile: {
        required: true,
        minlength: 10,
      },
      mobileotp: {
        required: true,
        minlength: 4,
      },
    },
    messages: {
      regmobile: {
        required: " Mobile number is mandatory",
        minlength: "Enter minimum 10 digit",
      },
      mobileotp: {
        required: " OTP is mandatory",
        minlength: "Enter minimum 4 digit",
      },
    },
  });

  // -- registration form validation --
  $("#reg_form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 3,
      },
      num: {
        required: true,
        minlength: 10,
      },
      psd: {
        required: true,
        minlength: 6,
      },
      cpsd: {
        required: true,
        minlength: 6,
        equalTo: "#pass2",
      },
    },
    messages: {
      fname: {
        required: "Name is mandatory",
        minlength: "Enter minimum 3 characters",
      },
      num: {
        required: "Number is mandatory",
        minlength: "Enter minimum 10 characters",
      },
      psd: {
        required: "Password is mandatory",
        minlength: "Enter minimum 6 characters",
      },
      cpsd: {
        required: "Confirm password is mandatory",
        minlength: "Enter minimum 6 characters",
      },
    },
  });
});
