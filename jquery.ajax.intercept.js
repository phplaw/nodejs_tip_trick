$.ajaxSetup({
    dataFilter: function (data, type) {
        alert(data);
        return data;
    }
});
