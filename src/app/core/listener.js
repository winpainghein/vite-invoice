import { createFormHandler, manageInventoryBtnHandler, newProductFormHandler, printBtnHandler, rowGroupHandler } from "./handlers.js";
import { createForm, inventorySheetCloseBtn, manageInventoryBtn, newProductForm, printBtn, rowGroup } from "./selectors.js";

const listener = () => {
    createForm.addEventListener("submit",createFormHandler);
    rowGroup.addEventListener("click",rowGroupHandler);
    manageInventoryBtn.addEventListener("click",manageInventoryBtnHandler);
    inventorySheetCloseBtn.addEventListener("click",manageInventoryBtnHandler);
    newProductForm.addEventListener("submit",newProductFormHandler);
    printBtn.addEventListener("click",printBtnHandler);
};

export default listener;
