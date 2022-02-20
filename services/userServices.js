function UserServices() {
    this.layDS = function () {
        return axios({
            method: 'get',
            url: 'https://6131854f7287b70017e64152.mockapi.io/Users',
        });
    }

    this.them = function (ND) {
        return axios({
            method: 'post',
            url: 'https://6131854f7287b70017e64152.mockapi.io/Users',
            data: ND
        });
    }

    this.layND = function (id) {
        return axios({
            method: 'get',
            url: `https://6131854f7287b70017e64152.mockapi.io/Users/${id}`,
        });
    }

    this.capNhatND = function (ND,id) {
        return axios({
            method: 'put',
            url: `https://6131854f7287b70017e64152.mockapi.io/Users/${id}`,
            data: ND
        });
    }

    this.xoaND = function (id) {
        return axios({
            method: 'delete',
            url: `https://6131854f7287b70017e64152.mockapi.io/Users/${id}`,
        });
    }
}