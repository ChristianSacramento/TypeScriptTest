/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="ts/kendo.all.d.ts" />
/// <reference path="typings/underscore/underscore.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        _super.call(this);
        this.tipo = "Fiat";
        _super.prototype.init.call(this, this);
    }
    return Car;
}(kendo.data.ObservableObject));
var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        _super.call(this);
        this.name = "John Doe";
        _super.prototype.init.call(this, this);
    }
    Person.prototype.getDataSource = function () {
        var dataSource = new kendo.data.HierarchicalDataSource({
            data: [
                {
                    id: 1,
                    text: "pippo",
                    sprite: "folder",
                    items: [
                        {
                            id: 3,
                            text: "Christian",
                            items: [
                                {
                                    id: 5,
                                    text: "Sacramento"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    text: "paperino",
                    items: [
                        {
                            id: 4,
                            text: "paperopoli"
                        }
                    ]
                }
            ]
        });
        return dataSource;
    };
    Person.prototype.getGridDataSource = function () {
        var listForGrid = null;
        $.ajax({
            url: '/Service1.svc/GetData',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            success: function (data, textStatus, jQxhr) {
                listForGrid = JSON.parse(data.d);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
        var gridDataSource = new kendo.data.DataSource({
            data: listForGrid
        });
        return gridDataSource;
    };
    return Person;
}(kendo.data.ObservableObject));
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        this.person = new Person();
        _super.prototype.init.call(this, this);
    }
    return ViewModel;
}(kendo.data.ObservableObject));
var dataSourcetreeview = [];
var cont = 0;
var DTO = function () {
    var self = this;
    self.id = 0;
    self.text = "";
    self.items = [];
};
$(function () {
    var viewModel = new ViewModel();
    kendo.bind($('#divChristian'), viewModel);
    //$('#treeview').kendoTreeView({
    //    dataSource: viewModel.person.getDataSource()
    //});
    //var trevi = <kendo.ui.TreeView>$('#treeview').data('kendoTreeView');
    var element = new kendo.observableHierarchy({
        schema: {
            model: {
                id: "IdElemento",
                children: "IDParent"
            }
        }
    });
    $('#txtIns').kendoMaskedTextBox({});
    var maskt = $('#txtIns').data('kendoMaskedTextBox');
    maskt.bind('change', function (sender, eventargs) {
        viewModel.set('person.name', this.value());
    });
    $("#ddl").kendoDropDownList({
        dataSource: [
            { id: 1, name: "Apples" },
            { id: 2, name: "Oranges" }
        ],
        dataTextField: "name",
        dataValueField: "id"
    });
    var drpd = $("#ddl").data('kendoDropDownList');
    drpd.bind("select", function (sender, eventargs) {
        viewModel.set('person.name', sender.dataItem.name);
    });
    var vm = {
        foo: [
            { id: 1, name: "one" },
            { id: 2, name: "two" }
        ]
    };
    kendo.bind($('#contentDdl'), vm);
    $('#grid').kendoGrid({
        columns: [
            {
                field: 'AccountNumber',
                title: 'AccountNumber'
            }
        ]
    });
    $('#grid').data('kendoGrid').setDataSource(viewModel.person.getGridDataSource());
    var dto = new DTO();
    $('#btnHere').kendoButton();
    var btnH = $('#btnHere').data("kendoButton");
    btnH.bind("click", function () {
        $.ajax({
            url: '/Service1.svc/GetData',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            success: function (data, textStatus, jQxhr) {
                var list = JSON.parse(data.d);
                var elem = _.map(list, mapper);
                for (var i = 0; i <= elem.length - 1; i++) {
                    if (elem[i].IDParent === "0") {
                        dataSourcetreeview.push(elem[i]);
                    }
                }
                for (var x = 0; x <= elem.length - 1; x++) {
                    for (var j = 0; j <= dataSourcetreeview.length - 1; j++) {
                        if (dataSourcetreeview[j].id === elem[x].IDParent) {
                            dataSourcetreeview[j].items.push(elem[x]);
                        }
                    }
                }
                for (var z = 0; z <= elem.length - 1; z++) {
                    for (var f = 0; f <= dataSourcetreeview.length - 1; f++) {
                        for (var r = 0; r <= dataSourcetreeview[f].items.length - 1; r++) {
                            if (dataSourcetreeview[f].items[r].id === elem[z].IDParent) {
                                dataSourcetreeview[f].items[r].items.push(elem[z]);
                            }
                        }
                    }
                }
                for (var w = 0; w <= dataSourcetreeview.length - 1; w++) {
                    if (dataSourcetreeview[w].items != null) {
                        for (var t = 0; t <= dataSourcetreeview.length - 1; t++) {
                            if (dataSourcetreeview[w].items[t].items != null) {
                                for (var k = 0; k <= dataSourcetreeview[w].items[t].items.length - 1; k++) {
                                }
                            }
                        }
                    }
                }
                //dto.ListAccountNumber.push(elem);
                $('#treeview').kendoTreeView({
                    dataSource: kendo.observableHierarchy(dataSourcetreeview),
                    loadOnDemand: true
                }).data("kendoTreeView");
            },
            error: function (jqXhr, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    });
    // $('#treeview').kendoTreeView({
    //    dataSource:  caricaDati()
    // });
    //var trevi = <kendo.ui.TreeView>$('#treeview').data('kendoTreeView');
});
//dataSourcetreeview
function mapper(value, key) {
    //if (value.IDParent === "0") {
    var dto = new DTO();
    dto.id = value.IdElemento.toString();
    dto.text = value.Testo;
    dto.IDParent = value.IDParent;
    dto.items = [];
    return dto;
    //dataSourcetreeview.push(dto);
    //}
    //element
    // for 0 first level
    //for(var i = 0; i<= dataSourcetreeview.length -1; i++){
    //    if(dataSourcetreeview[i].items.length >= 1){
    //        for(var a = 0; a <= dataSourcetreeview[i].items.length -1; a++){
    //            dataSourcetreeview[i].items[a];
    //        }
    //    }
    //    if (dataSourcetreeview[i].id === value.IDParent) {
    //        var dto = new DTO();
    //        dto.id = value.IdElemento.toString();
    //        dto.text = value.Testo;
    //        dataSourcetreeview[i].items.push(dto);
    //    }
    //}
    //var bbbb = "";
    //return dto;
}
function caricaDati() {
    alert('CaricoDati');
}
window.onload = function () {
    // var el = document.getElementById('content');
    // var greeter = new Greeter(el);
    // greeter.start();
};
