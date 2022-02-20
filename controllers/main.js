var userServices = new UserServices();
var validation = new Validation();


function layDSND() {
    userServices.layDS()
        .then(function (response) {
            localStorage.setItem("DSND", JSON.stringify(response.data));
            hienThiTable(response.data)
        })
        .catch(function (error) {
            console.log(error)
        });
}
layDSND();

function hienThiTable(mangND) {
    var content = "";
    mangND.map(function (item, index) {
        content += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.taiKhoan}</td>
            <td>${item.matKhau}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.ngonNgu}</td>
            <td>${item.loaiND}</td>
            <td>
                <button class="btn btn-danger" onclick="xoa('${item.id}')">Xoá</button>
                <button class="btn btn-info" onclick="xemChiTiet('${item.id}')" data-toggle="modal" data-target="#myModal">Sửa</button>
            </td>
        </tr>
        `;
    });
    document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}


function themND() {
    var taiKhoan = document.getElementById("TaiKhoan").value;
        var ten = document.getElementById("HoTen").value;
        var pass = document.getElementById("MatKhau").value;
        var email = document.getElementById("Email").value;
        var hinh = document.getElementById("HinhAnh").value;
        var loai = document.getElementById("loaiNguoiDung").value;
        var lang = document.getElementById("loaiNgonNgu").value;
        var moTa = document.getElementById("MoTa").value;

    // VALIDATION
    var isValid = true;
    var data = JSON.parse(localStorage.getItem("DSND"));

    //Check tài khoản
    isValid &= validation.checkEmpty("TaiKhoan", "tbTaiKhoan", "Tài khoản không để trống") && validation.checkTaiKhoan("TaiKhoan", "tbTaiKhoan", "Tài khoản đã tồn tại!", data);
    //Check họ tên
    isValid &= validation.checkEmpty("HoTen", "tbHoTen", "Họ tên không để trống!") && validation.checkTen("HoTen", "tbHoTen", "Họ tên không chứa ký tự số và ký tự đặc biệt", data);
    //Check pass
    isValid &= validation.checkEmpty("MatKhau", "tbMatKhau", "Mật khẩu không để trống") && validation.checkPass("MatKhau", "tbMatKhau", "Mật khẩu dài từ 6-8 kí tự, gồm: chữ hoa, chữ thường và kí tự đặc biệt");
    //Check email
    isValid &= validation.checkEmpty("Email", "tbEmail", "Email không để trống!") && validation.checkEmail("Email", "tbEmail", "Email không hợp lệ!");
    //Check hình ảnh
    isValid &= validation.checkEmpty("HinhAnh", "tbHinhAnh", "Hình ảnh không để trống!");
    //Check loại người dùng
    isValid &= validation.checkSelect("loaiNguoiDung", "tbloaiNguoiDung", "Chưa chọn loại người dùng");
    //Check ngôn ngữ
    isValid &= validation.checkSelect("loaiNgonNgu", "tbloaiNgonNgu", "Chưa chọn ngôn ngữ");
    //Check mô tả
    isValid &= validation.checkEmpty("MoTa", "tbMoTa", "Mô tả không để trống!") && validation.checkNumbers("MoTa", 1, 60, "tbMoTa", "Mô tả không quá 60 ký tự");

    if(isValid){
        var ND = new Users(taiKhoan, ten, pass, email, loai, lang, moTa, hinh);

        userServices.them(ND)
            .then(function (response) {
                layDSND();
                document.querySelector("#myModal .close").click();
            })
            .catch(function (error) {
                console.log(error)
            });
    } 
}
document.getElementById("btnThemNguoiDung").addEventListener("click", function () {
    document.querySelector(".modal-footer").innerHTML = `
        <button class="btn btn-success" onclick="themND()">Thêm</button>
    `;
});


function xemChiTiet(id) {
    userServices.layND(id)
        .then(function (response) {
            document.getElementById("TaiKhoan").disabled = true;

            document.getElementById("TaiKhoan").value = response.data.taiKhoan;
            document.getElementById("HoTen").value = response.data.hoTen;
            document.getElementById("MatKhau").value = response.data.matKhau;
            document.getElementById("Email").value = response.data.email;
            document.getElementById("HinhAnh").value = response.data.hinhAnh;
            document.getElementById("loaiNguoiDung").value = response.data.loaiND;
            document.getElementById("loaiNgonNgu").value = response.data.ngonNgu;
            document.getElementById("MoTa").value = response.data.moTa;

            document.querySelector(".modal-footer").innerHTML = `
                <button class="btn btn-success" onclick="capNhat('${response.data.id}')">Cập Nhật</button>
            `;
        })
        .catch(function (error) {
            console.log(error)
        });
}

function capNhat(id){

        var taiKhoan = document.getElementById("TaiKhoan").value;
        var ten = document.getElementById("HoTen").value;
        var pass = document.getElementById("MatKhau").value;
        var email = document.getElementById("Email").value;
        var hinh = document.getElementById("HinhAnh").value;
        var loai = document.getElementById("loaiNguoiDung").value;
        var lang = document.getElementById("loaiNgonNgu").value;
        var moTa = document.getElementById("MoTa").value;

        var ND = new Users(taiKhoan, ten, pass, email, loai, lang, moTa, hinh);

        userServices.capNhatND(ND,id)
            .then(function (response) {
                layDSND();
                document.querySelector("#myModal .close").click();
            })
            .catch(function (error) {
                console.log(error)
            });
}

function xoa(id){
    userServices.xoaND(id)
        .then(function (response) {
            layDSND();
        })
        .catch(function (error) {
            console.log(error)
        });
}
