(function(){Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("{{t \"messages.newUser.subject\" user=user settings=settings}}\n");Handlebars.templates["newUserSubject"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "newUserSubject"});};

})();
