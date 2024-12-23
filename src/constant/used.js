import Swal from "sweetalert2";

export default function deleteProduct(product, action) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "bg-red-500 text-white py-3 ml-3 px-6 text-bold",
      cancelButton: " bg-green-500 text-white py-3 mr-3 px-6 text-bold",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        action(product.id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    });
}
