## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
- **getElementById()** is used to select a single element by its unique id. It always returns one element.
- **getElementsByClassName()** is used to selects multiple elements that share the same class name. It returns an **HTMLCollection**.
- **querySelector()** selects the first element that matches a CSS selector, while  **querySelectorAll()** selects all matching elements and returns a NodeList. The advantage of querySelector methods is that they allow more flexible CSS style selectors (like **tag**, **class** and **id**).
## 2. How to Create and Insert a New Element into the DOM?
To create a new element, I use `document.createElement()`.  
Then I add content to it and insert it into the DOM using methods like `appendChild()` or `append()`.

### Example:

```javascript
let newDiv = document.createElement("div");
newDiv.innerText = "Hello World";
document.body.appendChild(newDiv);
```
## 3. What is Event Bubbling? And how does it work?
Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements. For example, if I click a button inside a div, first the button’s event runs, then the div’s event runs, and this continues up to the document.
## 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where I attach an event listener to a parent element instead of adding event listeners to multiple child elements.
- It reduces repetitive code.
- It works for dynamically added elements.
## 5. What is the difference between preventDefault() and stopPropagation() methods?
- **preventDefault()** is used to stop the default behavior of an element (e.g., stopping a form submission or preventing a link from opening).
- **stopPropagation()** is used to stop the event from bubbling up to parent elements.