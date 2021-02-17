export class FlowerMaricView {

    /**
     * Constructor for FlowerMaricView
     */
    constructor() {

        // Get picture and select element
        this.picture = document.getElementById("picture");
        this.selects = document.getElementById("select");

        this.selects.setAttribute("class", "p-5");

        // create select elements
        this.paperSelect = this.setSelect("paper");
        this.ribonSelect = this.setSelect("ribon");
        this.flowerSelect = this.setSelect("flower");

        // get buttons
        this.backButton = document.getElementById("backButton");
        this.resetButton = document.getElementById("resetButton");
        this.submitButton = document.getElementById("submitButton");

        // backButton
        backButton.onclick = function() {
            window.location.href = 'index.html';
        }
    }

    /**
     * Creates a new select element
     * Assigns id and class
     * Appends new element to select
     * @param {String} type element id
     */
    setSelect(type) {
        let elementSelect = document.createElement('select');
        elementSelect.setAttribute("id", type);
        elementSelect.setAttribute("class", "custom-select custom-select-sm mb-3");
        this.selects.appendChild(elementSelect);

        return elementSelect;
    }

    /**
     * Add select options to the dropdown
     * @param {HTMLSelectElement} filed 
     * @param {String} type 
     */
    setDropdownOptions(filed, type) {
        filed.options.add(new Option(type, type));
    }

    /**
     * Makes submit button appear or dissapear
     * after all choices are made
     * @param {String} visible css class that makes button visible or not
     */
    setButton(visible) {
        this.submitButton.setAttribute('class', `btn btn-outline-success float-right ${visible}`);
    }

    /**
     * Sets image deppending on the choice
     * @param {String} image image name
     */
    setImage(image) {
        this.picture.src = `media/selectOptions/${image}.png`;
    }

}