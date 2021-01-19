
var baseURL = 'dayone2://post';
var addLink = CallbackURL.create();
addLink.baseURL = baseURL;

addLink.addParameter('entry', draft.content);
addLink.addParameter('journal', 'Tech');

var success = addLink.open();

var setJournal = (content) => {
    var contentlines = content.split("\n");
    // if (/camera/.test(contentlines[0]))

}
