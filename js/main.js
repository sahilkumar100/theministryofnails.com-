var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.fixed-top .container').addClass('shadow-sm').css('max-width', '100%');
    //     } else {
    //         $('.fixed-top .container').removeClass('shadow-sm').css('max-width', '85%');
    //     }
    // });


    // Donation
    $('.progress').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Event carousel
    $(".event-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);



const reviewsData = [
    {
        id: 1,
        name: "Neha Agarwal",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjW0kCTPDqtW_qAFzzPZVlvx-Yx3q_sUMwFAoIpvolycN8ZzReE=w75-h75-p-rp-mo-br100", 
        text: "Had a great experience..Friendly staff and affordable prices. Got the nail extension and nail art done and I am happy with the service..",
    },
    {
        id: 2,
        name: "vatsala j",
       
        img: "https://lh3.googleusercontent.com/a-/ALV-UjX2fNLLcF6vUZ7hhC8hGrnf-TJbLm2I3DbvsSozKkMvxN37WXVr=w75-h75-p-rp-mo-br100", 
        text: "The very first nail Salon in Purnea..Finally the wait is over.Reasonable prices, super friendly staff, they take their time and my nails look great! Can’t take eyes off my nails.  Got lot of compliments. Thanks a lot…This is worth trying . Time to pamper your naiIs Girls.",
    },
    {
        id: 3,
        name: "nazreenhara",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjVn8Rk0bc3D81aSACzO5dcmMbH_9skSYArRbSU0IzU8Nm4WH47N=w75-h75-p-rp-mo-br100",
        text: "I loved getting my nails done here. Not only were the staff friendly - they had very good suggestions on colors & how to care for the nails. My time spent there was very relaxing and the prices are also very reasonable for the quality of service. Definitely will be going back there to get my nails done again when I'm in town :)"
    },
    
    {
        id: 4,
        name: "Pragya Jaiswal",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjX2f943wKhc0JpvJp6rZwvbj7mbARy6v3nzwXk512Jurrao6tqg=w75-h75-p-rp-mo-br100", 
        text: "Very nice service with well trained staff & polite owner, who know their job very nicely. A must try if you are looking to get your nails done in purnea. Highly recommended. Grt work guyz👍🏻😊 …",
    },
    {
        id: 5,
        name: "Karandasi Mallick",
     
        img: "https://lh3.googleusercontent.com/a-/ALV-UjUyfpITH2OIk3z7PUBe3KXse5xQdwE4iBtT5MRaPVn-KaY3urk=w75-h75-p-rp-mo-br100", 
        text: "My experience is very nice... Good service & well behaved.. hopefully will do in future... Thank you",
    }
];


const imgElement = document.getElementById("person-img");
const authorElement = document.getElementById("review-author");
const jobElement = document.getElementById("review-job");
const infoElement = document.getElementById("review-info");

const prevBtnElement = document.querySelector(".prev-review-btn");
const nextBtnElement = document.querySelector(".next-review-btn");
const randomBtnElement = document.querySelector(".random-review-btn");

let currentReview = 0;

window.addEventListener("DOMContentLoaded", function () {
    showReview(currentReview);
});

function showReview(review) {
    const currentReviewData = reviewsData[review];
    imgElement.src = currentReviewData.img;
    authorElement.textContent = currentReviewData.name;
    jobElement.textContent = currentReviewData.job;
    infoElement.textContent = currentReviewData.text;
}

nextBtnElement.addEventListener("click", function () {
    currentReview++;
    if (currentReview > reviewsData.length - 1) {
        currentReview = 0;
    }
    showReview(currentReview);
});

prevBtnElement.addEventListener("click", function () {
    currentReview--;
    if (currentReview < 0) {
        currentReview = reviewsData.length - 1;
    }
    showReview(currentReview);
});

randomBtnElement.addEventListener("click", function () {
    currentReview = Math.floor(Math.random() * reviewsData.length);
    showReview(currentReview);
});