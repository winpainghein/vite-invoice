import { createProduct, productRender } from "./product.js";
import { addRecordQuantity, createRecord, deleteRecord, subRecordQuantity, updateRecord, updateRecordTotal } from "./record.js";
import { createForm, inventorySheet, newProductForm, productGroup, recordTotal, rowGroup } from "./selectors.js";
import { products } from "./variables.js";

export const createFormHandler = (e) => {
    e.preventDefault();
    // console.log(productSelect.value); 
    // console.log(inputQuantity.valueAsNumber); 


    // get data
    const formData = new FormData(createForm);
    const currentProductId = parseInt(formData.get("productSelect"));
    const currentProduct = products.find(el => el.id === currentProductId );
    const currentQuanity = parseInt(formData.get("inputQuantity"));
    // console.log(currentProduct);

    const isExistedRow = rowGroup.querySelector(`[row-product-id = '${currentProductId}']`);
    // console.log(isExistedRow);

    if(isExistedRow){
        
        // const currentQuantityElement = isExistedRow.querySelector(".row-quantity");
        // const currentPrice = isExistedRow.querySelector(".row-product-price");
        // const currentCost = isExistedRow.querySelector(".row-cost");
        // currentQuantityElement.innerText = parseInt(currentQuantityElement.innerText) + currentQuanity;
        // currentCost.innerText = currentPrice.innerText * currentQuantityElement.innerText;
        updateRecord(isExistedRow.getAttribute("row-product-id"),currentQuanity);
    }else{
        rowGroup.append(createRecord(currentProduct,currentQuanity));
    };
    // append
    

    // calc total
    // updateRecordTotal();
    createForm.reset();

}

export const rowGroupHandler = (event) => {
    // console.log(event.target); 
    if(event.target.classList.contains("row-del-btn")){
        // console.log("U delete row")
        deleteRecord(event);
    }else if(event.target.classList.contains("row-q-add")){
        // addRecordQuantity(event);
        updateRecord(event.target.closest(".row").getAttribute("row-product-id"),1);
    }else if(event.target.classList.contains("row-q-sub")){
        // subRecordQuantity(event);
        updateRecord(event.target.closest(".row").getAttribute("row-product-id"),-1);
    };
};

export const manageInventoryBtnHandler = () => {
    inventorySheet.classList.toggle("-translate-x-full");
};

export const newProductFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(newProductForm);
    console.log(productGroup.querySelectorAll(".product").length);
    const newProduct = {id : Date.now() , name : formData.get("inputProduct") , price : formData.get("inputPrice") } ;
    // console.log(newProduct);

    products.push(newProduct);
    productRender(products);


    newProductForm.reset();
};

export const printBtnHandler = () => {
   window.print();
}