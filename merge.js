//https://www.geeksforgeeks.org/merge-sort-linked-lists-javascript/

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
        result.head = new Node(tempNode) 
        resultPointer = result.head 
    } 
    else { 
        resultPointer.next = new Node(tempNode) 
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

  SLL.insert(7);
  SLL.insert(5);
  SLL.insert(8);
  SLL.insert(2);
  SLL.insert(3);
  SLL.insert(1);
  SLL.insert(6);
  SLL.insert(9);
  SLL.insert(4);
  SLL.insert(0);

  SLL.head = mergeSort(SLL.head);
  console.log(JSON.stringify(SLL.head));

}


main();