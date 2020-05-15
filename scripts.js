document.body.onload = ADD_APP;

function ADD_APP() {
    //create a button
    const newButton = document.createElement("button");
    newButton.id = "newButton";
    //text content for button
    let buttonContent = document.createTextNode("New List");
    //add text node to button
    newButton.appendChild(buttonContent);
    //append list creation button to "app"
    document.getElementById("app").appendChild(newButton);
    
    //on click, run function: createNewList(), creates a new list.
    document.getElementById("newButton").addEventListener("click", createNewList); 
    

    function createNewList() {
        //create New List Div
        const newList = document.createElement("div");
        newList.id = "my-new-list";
        
        ////add elements to New List Div: H1, Text Input Area, Add Button and 2 UL's
        
        //create the Heading1: List Title
        let listTitle = document.createElement("H1");
        let headingNode = document.createTextNode("My New List");
        listTitle.appendChild(headingNode);
        newList.appendChild(listTitle);
    
        //create container for Input and Add
        let interactContainer = document.createElement("div");
        interactContainer.id = "interact-container";
        //add Interaction Container to My New List
        newList.appendChild(interactContainer);
    
        //create the Input Text Area
        let listItemInput = document.createElement("input");
        listItemInput.id = "list-item-input";
        listItemInput.type = "text";
        //add Input to Container
        interactContainer.appendChild(listItemInput);
    
        //create the Add Button
        let listItemAddButton = document.createElement("button");
        listItemAddButton.id = "list-item-add-button";
        let listItemButtonContent = document.createTextNode("Add Item");
        //add TextNode to Button
        listItemAddButton.appendChild(listItemButtonContent);
        //add Button to Container
        interactContainer.appendChild(listItemAddButton);

        //create UL for list items:
        let newCustomList = document.createElement("ul");
        newCustomList.id = "new-custom-list";
        interactContainer.appendChild(newCustomList);

        //dynamically add New List to DOM
        document.getElementById("app").appendChild(newList);
        
        function addListItems() {
            //Connect Add Button to Input Area:
            //create list item
            
            let listItem = document.createElement("li");
            let textNode = document.createTextNode(listItemInput.value);
            listItem.appendChild(textNode);
            document.getElementById("new-custom-list").appendChild(listItem);
       }   
       document.getElementById("list-item-add-button").addEventListener("click", addListItems); 
    }    
}


