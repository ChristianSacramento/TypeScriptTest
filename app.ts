/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="ts/kendo.all.d.ts" />
/// <reference path="typings/underscore/underscore.d.ts" />

class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

class Car extends kendo.data.ObservableObject {
    tipo = "Fiat";

    constructor(){
        super();

        super.init(this);
    }
}


class Person extends kendo.data.ObservableObject {
    name = "John Doe";

    constructor() {
        super();

        super.init(this);
    }

    getDataSource(){
        var dataSource = new kendo.data.HierarchicalDataSource({
            data: 
                [
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
    }
}

class ViewModel extends kendo.data.ObservableObject {
    person = new Person();

    constructor() {
        super();

        super.init(this);
    }   
}

$(function () {

    
    //Inizio creazione oggetto DTO da utilizzare per la DropDownList
    var objDTO = function(){
        var self = this;
        self.id = 0;
        self.name = "";
        self.listObjDTO = [];
    }
    //Fine creazione oggetto DTO da utlizzare per la DropDownList    


    
    var viewModel = new ViewModel();
    kendo.bind($('#divChristian'), viewModel);
   
    $('#treeview').kendoTreeView({
        dataSource: viewModel.person.getDataSource()
    });
    var trevi = <kendo.ui.TreeView>$('#treeview').data('kendoTreeView');

    $('#txtIns').kendoMaskedTextBox({
    });
    var maskt = <kendo.ui.MaskedTextBox>$('#txtIns').data('kendoMaskedTextBox');
    maskt.bind('change', function(sender, eventargs){
        viewModel.set('person.name', this.value());
    });
    
    $("#ddl").kendoDropDownList(
        {
            dataSource: [
                            { id: 1, name: "Apples" },
                            { id: 2, name: "Oranges" }
                        ],
            dataTextField: "name",
            dataValueField: "id"
        }
    );
    var drpd =  <kendo.ui.DropDownList>$("#ddl").data('kendoDropDownList');
    drpd.bind("select", function(sender,eventargs){
        viewModel.set('person.name', sender.dataItem.name);
        
    });

    $('#btnHere').kendoButton();
    var btnH = <kendo.ui.Button>$('#btnHere').data("kendoButton");
    btnH.bind("click", function(){
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
            {id:1,name:"one"}, 
            {id:2,name:"two"} 
        ]
    }
    kendo.bind($('#contentDdl'), vm);
    
    
   
   

});



window.onload = () => {
    // var el = document.getElementById('content');
    // var greeter = new Greeter(el);
    // greeter.start();
};


