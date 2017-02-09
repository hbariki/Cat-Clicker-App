var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgsrc = ko.observable('static/cat.jpg')

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() +1);
    };
}

ko.applyBindings(new ViewModel());

