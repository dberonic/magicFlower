import { MagicFloverData } from '../util/MagicFloverData.js';
import { dropDownData } from '../util/dropDownData.js';
import { FlowerBouquet } from '../model/FlowerBouquet.js';

export class FlowerMaricController {

    /**
     * Constructor of FlowerMgicControler for customize.html
     * @param {FlowerMaricView} view 
     * @param {FlowerBouquet} model 
     */
    constructor(view, model) {
        this.view = view;
        this.model = model;

        // gets data from associative arrays
        this.MagicFloverData = MagicFloverData;
        this.dropDownData = dropDownData;

        // creates first level of dropdown select
        for (let bouquet in dropDownData) {
            this.view.setDropdownOptions(this.view.paperSelect, bouquet);
        }

        // Reset button resets dropdown select on click
        this.view.resetButton.onclick = function() {
            // remove previous
            view.paperSelect.selectedIndex = 0;

            view.paperSelect.dispatchEvent(new Event('change'));
            // view.ribonSelect.value = "Select ribon color";
            // view.flowerSelect.value = "Select flower color";
            view.setButton('hidden');
            view.setImage("saver"); // set default image
        }

        // submit button creates a FlowerBouquet object and stores all data into local storage
        // goes to form.html
        this.view.submitButton.onclick = function() {

            this.selectedBouquet = new FlowerBouquet(view.paperSelect.value, view.ribonSelect.value, view.flowerSelect.value, view.picture.src);

            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                localStorage.setItem("paperColor", view.paperSelect.value);
                localStorage.setItem("ribonColor", view.ribonSelect.value);
                localStorage.setItem("flowerColor", view.flowerSelect.value);
                localStorage.setItem("imageSkech", view.picture.src);
            } else {
                // Sorry! No Web Storage support..
                console.log("no browser support");
            }
            window.location.href = 'form.html';
        }

        /**
         * Sets dropdown after paper color is selected
         */
        this.view.paperSelect.onchange = function() {

            // sets new options to the dropdown
            for (var ribon in dropDownData[this.value]) {
                view.setDropdownOptions(view.ribonSelect, ribon);
            }

            // setts appropriate image
            view.setImage(MagicFloverData[this.value]["Image"]);
            view.setButton('hidden'); // hiddes submit button
        };

        /**
         * Sets dropdown after ribon color is selected
         */
        this.view.ribonSelect.onchange = function() {
            if (this.selectedIndex < 1) {
                view.flowerSelect.length = 1;
                return; // done   
            }
            view.flowerSelect.length = 0;

            // sets new options to the dropdown
            for (let flower in dropDownData[this.previousSibling.value][this.value]) {
                view.setDropdownOptions(view.flowerSelect, flower);

            }
            // setts appropriate image
            view.setImage(MagicFloverData[this.previousSibling.value][this.value]["Image"]);
            view.setButton('hidden'); // hiddes submit button
        }

        /**
         * Sets image after folwer color has been selected
         */
        this.view.flowerSelect.onchange = function() {
            view.setImage(MagicFloverData[this.previousSibling.previousSibling.value][this.previousSibling.value][this.value]);
            view.setButton(''); // submit button appears
        }
    }

}