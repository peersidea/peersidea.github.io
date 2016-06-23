function displayTab(tabId, currentTab) {
	// get all content section
	var contents = document.getElementsByClassName("content");

	// get all menu items
	var tabs = document.getElementsByClassName("tab");

	// set all menu items background to grey
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].style["background-color"] = "grey";
	}

	// hide all content sections
	for (var i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}

	// display only the content section that you clicked
	var tab = document.getElementById(tabId);
	tab.style.display = "block";
	currentTab.style["background-color"] = "green";
}

// showing workshop tab by default 
displayTab("workshop", document.getElementById("wtab"));