import initialRender from "./core/initialRender.js";
import listener from "./core/listener.js";
import obsever from "./core/obsever.js";


class Invoice{
    init(){
        console.log("Invoice App Start");
        initialRender();
        listener();
        obsever();
        
    };
};

export default Invoice;