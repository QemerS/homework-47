$(document).ready(function() {
    // let button = document.getElementById("confirmButton");

    // button.addEventListener("click", function(e) {
    //     e.preventDefault();

    //     // Swal.fire({
    //     //     title: '<strong>HTML <u>example</u></strong>',
    //     //     icon: 'info',
    //     //     html: 'You can use <b>bold text</b>, ' +
    //     //         '<a href="//sweetalert2.github.io">links</a> ' +
    //     //         'and other HTML tags',
    //     //     showCloseButton: true,
    //     //     showCancelButton: true,
    //     //     focusConfirm: false,
    //     //     confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    //     //     confirmButtonAriaLabel: 'Thumbs up, great!',
    //     //     cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    //     //     cancelButtonAriaLabel: 'Thumbs down'
    //     // })

    //     Swal.fire({
    //         title: 'Do you want to save the changes?',
    //         showDenyButton: true,
    //         showCancelButton: true,
    //         confirmButtonText: 'Save',
    //         denyButtonText: `Don't save`,
    //     }).then((result) => {
    //         /* Read more about isConfirmed, isDenied below */
    //         if (result.isConfirmed) {
    //             Swal.fire('Saved!', '', 'success')
    //         } else if (result.isDenied) {
    //             Swal.fire('Changes are not saved', '', 'info')
    //         }
    //     })

    //     // const swalWithBootstrapButtons = Swal.mixin({
    //     //     customClass: {
    //     //         confirmButton: 'btn btn-success',
    //     //         cancelButton: 'btn btn-danger'
    //     //     },
    //     //     buttonsStyling: false
    //     // })

    //     // swalWithBootstrapButtons.fire({
    //     //     title: 'Are you sure?',
    //     //     text: "You won't be able to revert this!",
    //     //     icon: 'warning',
    //     //     showCancelButton: true,
    //     //     confirmButtonText: 'Yes, delete it!',
    //     //     cancelButtonText: 'No, cancel!',
    //     //     reverseButtons: true
    //     // }).then((result) => {
    //     //     if (result.isConfirmed) {
    //     //         swalWithBootstrapButtons.fire(
    //     //             'Deleted!',
    //     //             'Your file has been deleted.',
    //     //             'success'
    //     //         )
    //     //     } else if (
    //     //         /* Read more about handling dismissals below */
    //     //         result.dismiss === Swal.DismissReason.cancel
    //     //     ) {
    //     //         swalWithBootstrapButtons.fire(
    //     //             'Cancelled',
    //     //             'Your imaginary file is safe :)',
    //     //             'error'
    //     //         )
    //     //     }
    //     // })
    // });

    $(".owl-carousel").owlCarousel({
        items: 5,
        margin: 15,
        // loop: true,
        // center: true
        // autoplay: true,
        // autoplayTimeout: 1000,
        // autoplayHoverPause: true,
        // startPosition: 2,
        nav: true,
        rewind: false,
        dotsEach: true,
        dots: false
    });
});