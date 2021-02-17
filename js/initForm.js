import { FormView } from './view/FormView.js';
import { FlowerBouquet } from './model/FlowerBouquet.js';
import { FormController } from './controller/FormController.js';

/**
 * Onload function for form.html
 */
window.onload = function() {

    // creates FlowerBouquetModel - not really used
    let model = new FlowerBouquet();

    let viewForm = new FormView();
    let formController = new FormController(viewForm, model);
};