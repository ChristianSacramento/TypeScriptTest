/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="ts/kendo.all.d.ts" />

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
    var viewModel = new ViewModel();
    kendo.bind($('#divChristian'), viewModel);
    // kendo.bind(document.body, viewModel);
    // viewModel.set("person.name", "Jane Doe");
   
    $('#treeview').kendoTreeView({
        dragAndDrop: true,
        checkboxes: {
            name: "checkedItems[]"
        },
        select: function(e){
            console.log("Selecting", e.node);
            var nameSelected =  $(e.node).find('span.k-state-focused').text();
            viewModel.set('person.name', nameSelected);
        },  
        dataSource: viewModel.person.getDataSource()
    });



});



window.onload = () => {
    // var el = document.getElementById('content');
    // var greeter = new Greeter(el);
    // greeter.start();
};


