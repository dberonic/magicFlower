export class FormView {

    /**
     * FormView controler
     * Sets view for the form.html and validates the input from the form
     */
    constructor() {

        // gets fields for information from selection process
        this.selectedPaperField = document.getElementById("selectedPaper");
        this.selectedRibonField = document.getElementById("selectedRibon");
        this.selectedFlowersField = document.getElementById("selectedFlowers");
        this.selectedImage = document.getElementById("selectedImage");

        // sets values from the select process
        this.selectedPaperField.innerHTML += localStorage.getItem("paperColor");
        this.selectedRibonField.innerHTML += localStorage.getItem("ribonColor");
        this.selectedFlowersField.innerHTML += localStorage.getItem("flowerColor");
        this.selectedImage.innerHTML = `<img src="${localStorage.getItem("imageSkech")}" alt="Selected Image" class="img-thumbnail shadow p-3 bg-white rounded">`;

        // gets form fields 
        let nameField = document.getElementById("name");
        let emailField = document.getElementById("inputEmail");
        let addressField = document.getElementById("inputAddress");
        let phoneField = document.getElementById("inputPhoneNumber");
        let creditCard = document.getElementById("inputCreditCard");

        this.submitButton = document.getElementById("submitButton");

        let errorBox = document.getElementById("error-box");

        // paters used for validation
        const emailInputPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const creditCardPatern = /^(?:3[47][0-9]{13})$/;

        // get buttons from the modal
        let sendButton = document.getElementById("send");
        let closeModal = document.getElementById("closeModal");
        let okButton = document.getElementById("okButton");

        // on send display the confirmation message sets the view
        sendButton.onclick = function() {
            let successMessage = document.getElementById("successMessage");
            successMessage.innerHTML = `  <div class="alert alert-success" role="alert">
            Your order was succesfuly send!
        </div>`;
            this.setAttribute("class", "hidden"); // removes sendbutton
            closeModal.setAttribute("class", "hidden"); // removes close button
            okButton.setAttribute("class", "btn btn-outline-success float-right ");
            // ok button appears
        }

        // appears in the model returns the user to index
        okButton.onclick = function() {
            window.location.href = 'index.html';
        }

        // does the form validation
        this.submitButton.onclick = function() {
            // console.log(name.innerHTML);

            if (isEmpty(nameField)) {
                console.log("Invalid name");
            } else if (isEmpty(emailField)) {
                console.log("Invalid email");
            } else if (isEmpty(addressField)) {
                console.log("Invalid Address");
            } else if (isEmpty(phoneField)) {
                console.log("Invalid Phone");
            } else if (isEmpty(creditCard)) {
                console.log("Invalid CreditCard");
            } else {
                console.log("all good");

                // enable model
                //  data-toggle="modal" data-target="#exampleModalCenter"
                this.setAttribute("data-toggle", "modal");
                this.setAttribute("data-target", "#exampleModalCenter");

                // sets local storage
                localStorage.setItem("name", nameField.value);
                localStorage.setItem("email", emailField.value);
                localStorage.setItem("address", addressField.value);
                localStorage.setItem("phone", phoneField.value);
                localStorage.setItem("creditCard", creditCard.value);

                // displays form input into the modal
                let name = document.getElementById("nameModel");
                name.innerHTML += `${localStorage.getItem("name")}`;

                let email = document.getElementById("emailModel");
                email.innerHTML += `${localStorage.getItem("email")}`;

                let address = document.getElementById("addressModel");
                address.innerHTML += `${localStorage.getItem("address")}`;

                let phone = document.getElementById("phoneModel");
                phone.innerHTML += `${localStorage.getItem("phone")}`;

                let card = document.getElementById("cardModel");
                card.innerHTML += `${localStorage.getItem("creditCard")}`;

            }
        }

        /**
         * Checks if input field is empty 
         * If it is displays the message
         * @param {HTMLDom} field 
         */
        let isEmpty = function(field) {
            if (field.value === "") {
                field.setAttribute("class", "invalid-input form-control");
                let msg = `${field.name} field is requierd`;
                errorBox.innerHTML = `
                <div class="alert alert-danger" role="alert">
                ${msg}
                </div>
                `;
                return true;
            } else {
                field.setAttribute("class", "form-control");
                errorBox.innerHTML = ``;
                return false;
            }
        }

        /**
         * Calls validation on credit card field and checks if it is empty
         */
        creditCard.onchange = function() {

            if (isEmpty(this)) {
                return;
            }
            isValid(this, creditCardPatern);
        }

        /**
         * Calls validation on email field and checks if it is empty
         */
        emailField.onchange = function() {

            // console.log(this.value);
            if (isEmpty(this)) {
                return;
            }
            isValid(this, emailInputPattern);
        }


        /**
         * Searches for the patern inside the field 
         * @param {HTMLDom} validateMe validated field
         * @param {String} pattern patrn that should be in the field 
         */
        let isValid = function(validateMe, pattern) {
            if (validateMe.value.search(pattern) >= 0) {
                errorBox.innerHTML = ``;
                validateMe.setAttribute("class", "form-control");
            } else {
                validateMe.setAttribute("class", "invalid-input form-control");
                let msg = `Wrong format for ${validateMe.name} `;
                errorBox.innerHTML = `
                <div class="alert alert-danger" role="alert">
                ${msg}
                </div>
                `;
            }
        }
    }
}