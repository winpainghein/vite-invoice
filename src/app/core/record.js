import Swal from "sweetalert2";
import { recordTotal, rowGroup, rowTemplate } from "./selectors.js";

export const createRecord = ({id,name,price},quantity) => {
    const rowCost = quantity * price
    const record = rowTemplate.content.cloneNode(true);
    // record.querySelector(".row-no").innerText = 1;
    record.querySelector(".row").setAttribute("row-product-id",id)
    record.querySelector(".row-product-name").innerText = name;
    record.querySelector(".row-product-price").innerText = price;
    record.querySelector(".row-quantity").innerText = quantity;
    record.querySelector(".row-cost").innerText = rowCost;
    return record;
};

export const updateRecordTotal = () => {
    const allRowCost = document.querySelectorAll(".row-cost");
    let total = 0;
    allRowCost.forEach(({innerText}) => (total += parseFloat(innerText)));
    recordTotal.innerText = [...allRowCost].reduce((pv,{innerText})=> pv+parseFloat(innerText),0);
};

export const deleteRecord =( event) => {
    
    const row = event.target.closest(".row");
    // if(confirm("Do you want to delete?")){
    //     row.remove();
    //     // updateRecordTotal();
    // }
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
        confirmButtonText: "Confirm"
      }).then((result) => {
        if (result.isConfirmed) {
            row.remove();
          Swal.fire({
            title: "Deleted Successfully!",
            text: "Your Record has been deleted.",
            icon: "success"
          });
        }
      });
};

export const updateRecord = (productId,q) => {
    const row = document.querySelector(`[row-product-id='${productId}']`);
    const currentQuantity = row.querySelector(".row-quantity");
    const currentPrice = row.querySelector(".row-product-price");
    const currentCost = row.querySelector(".row-cost");


    if(q > 0 || currentQuantity.innerText > 1 ){
        currentQuantity.innerText = parseInt(currentQuantity.innerText) + q;
        currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;
        // updateRecordTotal();
    }
};


export const addRecordQuantity = (event) => {
    const row = event.target.closest(".row");
    const currentQuantity = row.querySelector(".row-quantity");
    const currentPrice = row.querySelector(".row-product-price");
    const currentCost = row.querySelector(".row-cost");

    currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;
    currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;
    // updateRecordTotal();
};

export const subRecordQuantity = (event) => {
    const row = event.target.closest(".row");
    const currentQuantity = row.querySelector(".row-quantity");
    const currentPrice = row.querySelector(".row-product-price");
    const currentCost = row.querySelector(".row-cost");

    if(currentQuantity.innerText>1){
        currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
        currentCost.innerText = currentPrice.innerText * currentQuantity.innerText;
        // updateRecordTotal();
    }else{
        deleteRecord(event);
    }

};

export const recordObsever = () => {
    const run = () => {
        // updateRecordTotal();
    };
    const obseverOption = {
        childList: true,
        subtree: true,
    };

    const obsever = new MutationObserver(run);
    obsever.observe(rowGroup,obseverOption)
}