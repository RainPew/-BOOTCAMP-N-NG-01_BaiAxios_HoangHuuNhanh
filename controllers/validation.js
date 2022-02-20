function Validation(){
    this.checkEmpty = function (input, spanID, message) {
        var spanELE = document.getElementById(spanID);
        var inputELE = document.getElementById(input);
        if (inputELE.value.trim() == "") {
            inputELE.classList.remove("is-valid");
            inputELE.classList.add("is-invalid");
            spanELE.innerHTML = message;
            return false;
        } else {
            inputELE.classList.add("is-valid");
            inputELE.classList.remove("is-invalid");
            spanELE.innerHTML = "";
            return true;
        }
    }

    this.checkTaiKhoan = function (input, spanID, message, listData) {
        var spanELE = document.getElementById(spanID);
        var inputELE = document.getElementById(input);
        var isExit = listData.some(function(item, index){
            return item.taiKhoan === inputELE.value;
        });

        if (isExit) {
            inputELE.classList.remove("is-valid");
            inputELE.classList.add("is-invalid");
            spanELE.innerHTML = message;
            return false;
        } else {
            inputELE.classList.add("is-valid");
            inputELE.classList.remove("is-invalid");
            spanELE.innerHTML = "";
            return true;
        }
    }

    this.checkTen = function(input, spanID, message){
        var spanELE = document.getElementById(spanID);
        var inputELE = document.getElementById(input);
        var pattern = /^[a-zA-Z_ÀÁ ÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
        if (pattern.test(inputELE.value.trim())) {
            inputELE.classList.add("is-valid");
            inputELE.classList.remove("is-invalid");
            spanELE.innerHTML = "";
            return true;
            
        } else {
            inputELE.classList.remove("is-valid");
            inputELE.classList.add("is-invalid");
            spanELE.innerHTML = message;
            return false;
        }
    }

    this.checkPass = function(input, spanID, message){
        var spanELE = document.getElementById(spanID);
        var inputELE = document.getElementById(input);
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/
        if (pattern.test(inputELE.value.trim())) {
            inputELE.classList.add("is-valid");
            inputELE.classList.remove("is-invalid");
            spanELE.innerHTML = "";
            return true;
            
        } else {
            inputELE.classList.remove("is-valid");
            inputELE.classList.add("is-invalid");
            spanELE.innerHTML = message;
            return false;
        }
    }

    this.checkEmail = function(input, spanID, message){
        var spanELE = document.getElementById(spanID);
        var inputELE = document.getElementById(input);
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (pattern.test(inputELE.value.trim())) {
            inputELE.classList.add("is-valid");
            inputELE.classList.remove("is-invalid");
            spanELE.innerHTML = "";
            return true;
            
        } else {
            inputELE.classList.remove("is-valid");
            inputELE.classList.add("is-invalid");
            spanELE.innerHTML = message;
            return false;
        }
    }

    this.checkSelect = function(selID, spanID, message){
        var selectELE = document.getElementById(selID);
        var spanELE = document.getElementById(spanID);
        if (selectELE.selectedIndex == 0) {
            selectELE.classList.remove("is-valid");
            selectELE.classList.add("is-invalid");
            spanELE.innerHTML = message;
            return false;
            
        } else {
            selectELE.classList.add("is-valid");
            selectELE.classList.remove("is-invalid");
            spanELE.innerHTML = "";
            return true;
        }
    }

    this.checkNumbers = function(input, numFrom, numTo,spanID, message){
        var inputELE = document.getElementById(input);
        var spanELE = document.getElementById(spanID);
        if (inputELE.value.length < numFrom || inputELE.value.length > numTo) {
            inputELE.classList.remove("is-valid");
            inputELE.classList.add("is-invalid");
            spanELE.innerHTML = message;
            return false;
            
        } else {
            inputELE.classList.add("is-valid");
            inputELE.classList.remove("is-invalid");
            spanELE.innerHTML = "";
            return true;
        }
    }

}