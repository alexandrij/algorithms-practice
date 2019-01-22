var Employee = (function() {
    var name;
    var Employee = function(options) {
        options = options || {};
        name = options.name || null;
    };
    Employee.prototype.getName = function() {
        return name;
    };
    return User;
})();

var Company = (function() {
    var company; 
    var Company = function() {

    };
    return company || (company = new Company());
})();
