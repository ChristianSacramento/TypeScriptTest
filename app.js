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
    $('#treeview').kendoTreeView({
        dataSource: viewModel.person.getDataSource()
    });
    var trevi = $('#treeview').data('kendoTreeView');
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
    $('#btnHere').kendoButton();
    var btnH = $('#btnHere').data("kendoButton");
    btnH.bind("click", function () {
        $.ajax({
            type: "POST",
            url: "http://localhost:8733/Design_Time_Addresses/WcfServiceLibrary1/Service1/GetData",
            dataType: "json",
            success: function (response) {
                alert('OK');
            }
        });
    });
    // $('#treeview').kendoTreeView({
    //     dragAndDrop: true,
    //     checkboxes: {
    //         name: "checkedItems[]"
    //     },
    //     select: function(e){
    //         console.log("Selecting", e.node);
    //         var nameSelected =  $(e.node).find('span.k-state-focused').text();
    //         viewModel.set('person.name', nameSelected);
    //     },  
    //     dataSource: viewModel.person.getDataSource()
    // });
    var vm = {
        foo: [
            { id: 1, name: "one" },
            { id: 2, name: "two" }
        ]
    };
    kendo.bind($('#contentDdl'), vm);
});
window.onload = function () {
    // var el = document.getElementById('content');
    // var greeter = new Greeter(el);
    // greeter.start();
};
//# sourceMappingURL=app.js.map