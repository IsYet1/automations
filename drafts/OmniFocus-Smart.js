var arr = draft.content.split("\n");

var baseURL = "omnifocus:///add";
var addLink = CallbackURL.create();
addLink.baseURL = baseURL;


for (i = 0; i < arr.length; i++) {
	// The task name
	if (i == 0) {
		addLink.addParameter("name", arr[i]);
	}
	// The due date
	else if (arr[i].slice(0,3) == "at " || arr[i].slice(0,3) == "At ") {
		addLink.addParameter("due", arr[i].slice(3,100));
	} else if (arr[i].slice(0,2) == "@ ") {
		addLink.addParameter("due", arr[i].slice(2,100));
	}
	// The tags (used to be contexts)
	else if (arr[i].slice(0,8) == "context " || arr[i].slice(0,8) == "Context ") {
		addLink.addParameter("context", arr[i].slice(8,50));
	} else if (arr[i].slice(0,4) == "con " || arr[i].slice(0,4) == "Con ") {
		addLink.addParameter("context", arr[i].slice(4,50));
	} else if (arr[i].slice(0,4) == "tag " || arr[i].slice(0,4) == "Tag ") {
		addLink.addParameter("context", arr[i].slice(4,50));
	} else if (arr[i].slice(0,5) == "tags " || arr[i].slice(0,4) == "Tags ") {
		addLink.addParameter("context", arr[i].slice(4,50));
	}
	// The project
	else if (arr[i].slice(0,8) == "project " || arr[i].slice(0,8) == "Project ") {
		addLink.addParameter("project", arr[i].slice(8,50));
	} else if (arr[i].slice(0,5) == "proj " || arr[i].slice(0,5) == "Proj ") {
		addLink.addParameter("project", arr[i].slice(4,50));
	}
	// The flag
	else if (arr[i] == "flag" || arr[i] == "Flag") {
		addLink.addParameter("flag", "true");
	}
	// The note
	else if (arr[i].slice(0,5) == "note " || arr[i].slice(0,5) == "Note ") {
		addLink.addParameter("note", arr[i].slice(5,128));
	} else if (arr[i].slice(0,2) == "- ") {
		addLink.addParameter("note", arr[i].slice(2,128));
	}
	// Anything else
	else {
		addLink.addParameter("note", arr[i]);
	}
};

// alert(addLink);


// open and wait for result
var success = addLink.open();

