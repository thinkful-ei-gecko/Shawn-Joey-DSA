
//implementation of a generic node class
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
//The linked list has a head to indicate the beginning of the list
//The head always contains the 1st node.
class LinkedList {
  constructor() {
    this.head = null;

  }
  // Create a new node item
  // Point the head to that new node
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  //Create a new node item
  //Check to see if the list is empty, if it is, then insert the new item as the only item in the list
  //Start at the beginning of the list and move through the list until you reach the end of the list
  //Set the end node's next pointer to the new node
  //The new node's next pointer is null (indicating that the new node now is the last node on the list)
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  //Traverse the list, comparing the value stored in each node with the value you are searching. 
  //When the item is found, return the node. 
  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  // The 1st item in a list indicates the start of the list, which is indicated by head. 
  // If you delete the 1st item in a list, you need to change the head to indicate the new 1st item on the list. 
  // Otherwise, you find the node before the node you are removing and update its next pointer to skip over the removed node.
  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  insertBefore(item, key) {
    //if empty
    if (this.head === null) {
      console.log('Key is not found');
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while((currNode !== null) && (key !== currNode.value)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Key is not found');
      return;
    }
    previousNode.next = new _Node(item, currNode);
    
  }
  insertAfter(item, key){
    if (this.head === null) {
      console.log('Key is not found');
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    
    while((currNode !== null) && (key !== currNode.value)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Key is not found');
      return;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, pos){
    if (this.head === null) {
      console.log('Key is not found');
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
      
    for(let currPos = 1; currPos < pos; ++currPos){
      previousNode = currNode;
      currNode = currNode.next;
    }

    //this.insertBefore(item, currNode);
    //previousNode.next = new _Node(item, previousNode.next);
    previousNode.next = new _Node(item, currNode);
  }
}

function display(list) {
  console.log(JSON.stringify(list));
}

function size(list) {
  let nodeCounter = 1;
  if(list.head === null) {
    return console.log('Empty list');
  }
  let currentNode = list.head;
  while(currentNode.next !== null) {
    currentNode = currentNode.next;
    nodeCounter++;
  }
  return console.log(nodeCounter);
}
function isEmpty(list) {
  if(list.head === null) {
    return console.log('Empty list');
  }
  return console.log('List is not empty');
}

function findPrevious(list, item) {
  if(list.head === null) {
    return console.log('Empty list');
  }
  let currNode = list.head;
  let previousNode = list.head;
  while((currNode !== null) && (item !== currNode.value)) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    console.log('Key is not found');
    return;
  }
  return console.log(previousNode.value);
}

function findLast(list) {
  if(list.head === null) {
    return console.log('Empty list');
  }
  let previousNode = list.head;
  let currNode = list.head;
  while(currNode !== null) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  return console.log(previousNode.value);
}


function reverse(lst){
  let current =  lst.head; 
  let reversed = null;

  console.log(JSON.stringify(lst, null, 2));

  while (current !== null){
    let saveNode = current.next;
    current.next = reversed;
    reversed = current;
    current = saveNode;
  }

  lst.head = reversed;

  console.log(JSON.stringify(lst, null, 2));
  return lst;
}



function thridFromLast(lst){
  if(lst.head === null) {
    return console.log('Empty list');
  }
  let beforeBefore;
  let beforePrevious;
  let previousNode = lst.head;
  let currNode = lst.head;
  while(currNode !== null) {
    beforeBefore = beforePrevious;
    beforePrevious = previousNode;
    previousNode = currNode;
    currNode = currNode.next;

  }
  return console.log(beforeBefore.value);
}

function Node(data) { 
  this.node = data; 
  this.next = null; 
} 

// To initialize a linkedlist 
function LinkedList(list) { 
this.head = list || null
} 

// Function to insert The new Node into the linkedList 
LinkedList.prototype.insert = function(data) { 

    // Check if the linked list is empty 
    // so insert first node and lead head 
    // points to generic node 
    if (this.head === null) 
        this.head = new Node(data); 

    else { 

        // If linked list is not empty, insert the node 
        // at the end of the linked list 
        let list = this.head; 
        while (list.next) { 
            list = list.next; 
        } 

        // Now here list pointer points to last 
        // node let’s insert out new node in it 
        list.next = new Node(data) 
    } 
} 


//module.exports = LinkedList;

function merge(left, right) {
  console.log('merge() called')
  let result = new LinkedList() 

  let pointerLeft = left;
  let pointerRight = right;
  let resultPointer = result.head;

  while(pointerLeft && pointerRight){
    let tempNode = null;

    if (pointerLeft.node > pointerRight.node) { 
      tempNode = pointerRight.node 
      pointerRight = pointerRight.next; 
    } 
    else { 
        tempNode = pointerLeft.node 
        pointerLeft = pointerLeft.next; 
    } 

    if (result.head == null) { 
        result.head = new _Node(tempNode) 
        resultPointer = result.head 
    } 
    else { 
        resultPointer.next = new _Node(tempNode) 
        resultPointer = resultPointer.next 
    } 

    resultPointer.next = pointerLeft; 
    while (resultPointer.next) 
        resultPointer = resultPointer.next 

        resultPointer.next = pointerRight 
        
        console.log(`merge() returns ${result.head}`)
        return result.head; 
} 
  
  }



function mergeSort(linkedlist) {
  console.log('mergeSort() called')
  //console.log(`(1st IF) list.next = ${JSON.stringify(linkedlist.next)}`)
     if (linkedlist.next === null){
      console.log(`list.next = ${JSON.stringify(linkedlist.next)}`)
      return linkedlist; 
     } 
    
    let count = 0; 
    let countList = linkedlist; 
    let leftPart = linkedlist; 
    let leftPointer = linkedlist; 
    let rightPart = null; 
    let rightPointer = null; 

    //console.log(countList);

    while (countList.next) { 
      console.log(`(1st While) count = ${count}`)
      console.log(`(1st While) countList.next = ${JSON.stringify(countList.next)}`)
      count++; 
      countList = countList.next; 
    } 

    let mid = Math.floor(count / 2) 
    let count2 = 0; 

    while (count2 < mid) { 
      console.log(`(2nd While) count2 = ${count}`)
      console.log(`(2nd While) mid = ${mid}`)
      count2++; 
      leftPointer = leftPointer.next; 
    } 

    rightPart = new LinkedList(leftPointer.next); 
    leftPointer.next = null; 

    return merge(mergeSort(leftPart), mergeSort(rightPart.head))
};

function main(){
  let SLL = new LinkedList();
  SLL.insertFirst(7);
  SLL.insertLast(5);
  SLL.insertLast(8);
  SLL.insertLast(2);
  SLL.insertLast(3);
  SLL.insertFirst(1);
  SLL.insertLast(6);
  SLL.insertLast(9);
  SLL.insertLast(4);
  SLL.insertLast(0);

  SLL.head = mergeSort(SLL.head);
  console.log(SLL.head);

}


main();