import { FlowerMaricView } from './view/FlowerMaricView.js';
import { FlowerMaricController } from './controller/FlowerMaricController.js';
import { FlowerBouquet } from './model/FlowerBouquet.js';


/**
 * Onload function for customize.html
 */
window.onload = function() {

    // creates model
    let model = new FlowerBouquet();

    // creates the view object
    let view = new FlowerMaricView();
    let controller = new FlowerMaricController(view, model);
};