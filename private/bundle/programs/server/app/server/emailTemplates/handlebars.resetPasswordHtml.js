(function(){Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("{{{t \"messages.resetPassword.html\" user=user url=url settings=settings}}}\n");Handlebars.templates["resetPasswordHtml"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "resetPasswordHtml"});};

})();
