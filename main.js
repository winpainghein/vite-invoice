import Invoice from "./src/app/Invoice.js";
import "./input.css";
// import Swal from "sweetalert2";



const invoice = new Invoice;
invoice.init();

// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
// //   confirmButtonColor: "#3085d6",
// //   cancelButtonColor: "#d33",
//   confirmButtonText: "Confirm"
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });
//   }
// });