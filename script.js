$(document).ready(function () {
  $("#lokasi").mouseup(function () {
    $(location).attr("href", "location.html");
  });
});

$(document).ready(function () {
  $("#wisata").mouseup(function () {
    $(location).attr("href", "tour.html");
  });
});

function pesan() {
  Swal.fire({
    icon: "success",
    title: "Pesan Telah Terkirim",
    showConfirmButton: false,
    timer: 1500,
  });

  document.getElementById("from_name").value = "";
  document.getElementById("message").value = "";
  document.getElementById("email_id").value = "";
}

var resize = function () {
  var screenWidth = parseInt($("body").width());

  if (screenWidth > 670) {
    $("div[name='hero']").removeClass("text-center");
    $("h1[name='top-header']").addClass("pb-5");
    $("h2[name='top-header']").addClass("pt-5");
  } else {
    $("h1[name='top-header']").removeClass("pb-5");
    $("h2[name='top-header']").removeClass("pt-5");
    $("div[name='hero']").addClass("text-center");
  }
};

$(window).resize(function () {
  resize();
});

$(document).ready(function () {
  resize();
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // these IDs from the previous steps
  emailjs.sendForm("service_tx07oae", "template_5zftvfk", this).then(
    function () {
      pesan();
      console.log("SUCCESS!");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
});
