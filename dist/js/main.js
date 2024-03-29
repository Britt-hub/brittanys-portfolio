const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Overlay of the menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;

    }
}


// (function ($) {
//     "use strict";


//     /*==================================================================
//     [ Focus Contact2 ]*/
//     $('.input2').each(function(){
//         $(this).on('blur', function(){
//             if($(this).val().trim() != "") {
//                 $(this).addClass('has-val');
//             }
//             else {
//                 $(this).removeClass('has-val');
//             }
//         })    
//     })
            
  
    
//     /*==================================================================
//     [ Validate ]*/
//     var name = $('.validate-input input[name="name"]');
//     var email = $('.validate-input input[name="email"]');
//     var message = $('.validate-input textarea[name="message"]');


//     $('.validate-form').on('submit',function(){
//         var check = true;

//         if($(name).val().trim() == ''){
//             showValidate(name);
//             check=false;
//         }


//         if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//             showValidate(email);
//             check=false;
//         }

//         if($(message).val().trim() == ''){
//             showValidate(message);
//             check=false;
//         }

//         return check;
//     });


//     $('.validate-form .input2').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//        });
//     });

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }
    
    

// })(jQuery);