function El(selector) {
	return new myElement(selector);
}

var myElement = function(selector) {
	var element = document.querySelector(selector);
	this.element = element;
	return this
}

myElement.prototype.removeClass = function(className) {
	this.element.className = this.element.className.replace(className, "");
	return this;
};

myElement.prototype.addClass = function(className) {
	this.element.className += " " + className;
	return this;
};

myElement.prototype.replaceClass = function(classToReplace, replaceWith) {
	this.element.className = this.element.className.replace(classToReplace, replaceWith);
	return this;
};

myElement.prototype.toggleClass = function(className) {
	var el = this.element;
	var elementClasses = el.className;
	var alreadyHasClass = elementClasses.indexOf(className) >=0;
	if(alreadyHasClass) {
		this.removeClass(className);
	} else {
		this.addClass(className);
	}
	return this;
};