document.querySelector(' .signup-form .actions ul li:last-child a').onclick = function (){
    let arrInput = document.querySelectorAll('form input, form select');
    content = '';
    for (let i =0; i <arrInput.length; i++){
        let input = arrInput[i];
        let {id,value} = input;
        let info = '';
        if (id === 'ten'){
            info = 'Tên';
        } else if (id === 'ho'){
            info = 'Họ';
        } else if (id === 'email'){
            info = 'Email';
        } else if (id === 'soDienThoai'){
            info = 'Số điện thoại';
        } else if (id === 'ngay'){
            info = 'Ngày';
        } else if (id === 'thang'){
            info = 'Tháng';
        } else if (id === 'nam'){
            info = 'Năm';
        } else if (id === 'diaChi'){
            info = 'Địa chỉ';
        } else if (id === 'thongTinDiChuyen'){
            info = 'Thông tin di chuyển';
        } else if (id === 'loaiNhiem'){
            info = 'Loại nhiễm';
        }
        content += '<br />' + info + ' : ' + value + '<br />';
    }
    document.querySelector('.donate-us').innerHTML =  content;
}

