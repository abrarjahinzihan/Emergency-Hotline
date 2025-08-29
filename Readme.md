1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans- I am writing the the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById: Finds one element by its unique ID. It’s the fastest option, but you can only use it with IDs.
getElementsByClassName: Finds every element with the class you ask for. The list it returns updates on its own — so if new elements with that class are added or removed from the page, they’ll automatically show up in the list.
querySelector: Finds the first element that matches a CSS selector (like #id, .class).
querySelectorAll: Finds all matching elements, but the result is a static list — it won’t update if the page changes.


2.How do you create and insert a new element into the DOM?

ans- 2 step
a. Create the Element: I can  use document.createElement() to build the new element in memory.
const newDiv = document.createElement('div');

b. Insert the Element: I can use a method on an existing parent element (like appendChild()) to place your new element into the actual DOM tree.
document.body.appendChild(newDiv);

3.What is Event Bubbling and how does it work?

ans- Event Bubbling is a mechanism where an event starts execution from the innermost target element and then "bubbles up" through all its ancestor elements in the hierarchy, all the way up to the document object.

When an event (like a click) happens on an element, it doesn't just trigger on that one element. It runs in three phases:
Capture Phase: The event travels from the window down through the DOM tree to the target element. 
Target Phase: The event reaches the target element 
Bubbling Phase: The event bubbles up from the target element back through its ancestors all the way to the window object. 

4.What is Event Delegation in JavaScript? Why is it useful?

ans- Event Delegation is the practice of adding a single event listener to a parent element to handle events that occur on its child elements.

it is useful because it's efficient, and simple. Instead of attaching a separate event listener to every single button or list item, we can attach just one listener to a parent element. This single parent listener can handle events from all of its children, even new ones if we add to the page later. This makes your code faster, uses less memory, and automatically works for dynamic content.

5.What is the difference between preventDefault() and stopPropagation() methods?

ans-preventDefault() stops the browser's built-in behavior for an event, like preventing a link from opening a new page or a form from refreshing. stopPropagation() stops the event from triggering on parent elements. 
