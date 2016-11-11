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
var DTO = function () {
    var self = this;
    self.id = 0;
    self.text = "";
    self.ListAccountNumber = [];
};
$(function () {
    //Inizio creazione oggetto DTO da utilizzare per la DropDownList
    var objDTO = function () {
        var self = this;
        self.id = 0;
        self.name = "";
        self.listObjDTO = [];
    };
    //Fine creazione oggetto DTO da utlizzare per la DropDownList    
    var viewModel = new ViewModel();
    kendo.bind($('#divChristian'), viewModel);
    //$('#treeview').kendoTreeView({
    //    dataSource: viewModel.person.getDataSource()
    //});
    //var trevi = <kendo.ui.TreeView>$('#treeview').data('kendoTreeView');
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
                dto.ListAccountNumber.push(elem);
                $('#treeview').kendoTreeView({
                    dataSource: kendo.observableHierarchy(elem),
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
function mapper(value, key) {
    var aaaaaaa = "";
    var dto = new DTO();
    dto.id = key;
    dto.text = value.AccountNumber;
    return dto;
}
function caricaDati() {
    alert('CaricoDati');
}
window.onload = function () {
    // var el = document.getElementById('content');
    // var greeter = new Greeter(el);
    // greeter.start();
};
//# sourceMappingURL=app.js.map