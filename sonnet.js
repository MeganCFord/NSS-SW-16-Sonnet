

// Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById("sonnet");
sonnetInner = sonnet.innerHTML;
//you can put document.getElementById("sonnet").innerHTML but you still need to have a variable for the entire ID in order to send it back to the document. otherwise you're just assigning a string to another string and it doesn't change anything.
//
console.log("sonnet text", sonnetInner);

// Find and output the starting position of the word "orphans"
console.log("first instance of orphans", sonnetInner.indexOf("orphans"));

// Output the number of characters in the sonnet
console.log("sonnet length", sonnetInner.length);

// Replace the first occurance of the string "winter" with "yuletide"
var sonnetNew = sonnetInner.replace("winter", "Yuletide");
console.log("New Sonnet", sonnetNew );

// Replace all occurances of the string "the" with "a large"
sonnetNew = sonnetNew.replace(/the /gi, "a large ");
console.log("Large Replacement", sonnetNew );
//the 'gi' selects either upper or lower case. you can also use [Tt]he to select either. not sure how to make the a capitalized when the T is, though.

// Set the content of the sonnet div with the new string */
sonnet.innerHTML = sonnetNew;

//note: you can't make the selector sonnet always be the inner, because in order to replace it you have to start with the whole HTML- the ELEMENT- including the tags, not the text string. the innerHTML method creates a string. then you reselect the inner part, and then replace it. 