# Emergency Service

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
- getElementById → selects one element by its id.  
- getElementsByClassName → selects multiple elements with the same class.  
- querySelector → selects the first element that matches a CSS selector.  
- querySelectorAll → selects all elements that match a CSS selector.  


## 2. How do you create and insert a new element into the DOM?
- Use `document.createElement("tag")` to create a new element.  
- Add text or attributes using `innerText`, `setAttribute`, or `classList`.  
- Insert it into the page using `appendChild`, `prepend`, or `insertBefore`.  



## 3. What is Event Bubbling and how does it work?
- Event bubbling means the event starts at the target element and moves up to its parents.   

## 4. What is Event Delegation in JavaScript? Why is it useful?
- Event delegation means adding one event listener on a parent to handle events for its child elements.  


## 5. Difference between preventDefault() and stopPropagation()
- preventDefault() = stops the default browser action 
- stopPropagation() = stops the event from bubbling up to parent elements.  
