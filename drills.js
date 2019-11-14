const LinkedList = require('./LinkedList');

/*
1.1  [1 21 26 45 28 29  2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
1.2   every number will be in its own array
1.3   21 & 1
1.4   [1, 21, 26, 45] AND [2, 9, 28, 29]

2.1 the pivot is 14 but not 17
2.2 Result after the 2nd partition event [14, 17, 13, 15, 9, 10, 3, 16, 12, 19]
2.2A Result after the 2nd partion event assuming last item in list is pivot.  
[12, 14, 17, 13,15, 19, 10 3, 16, 9, 14]

*/

function merge(left, right) {
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

        return result.head; 
} 
  
  }



function mergeSort(list) {
     if (list.next === null){
      return list; 
     } 
    
    let count = 0; 
    let countList = list 
    let leftPart = list; 
    let leftPointer = list; 
    let rightPart = null; 
    let rightPointer = null; 

    while (countList.next !== null) { 
      count++; 
      countList = countList.next; 
    } 

    let mid = Math.floor(count / 2) 
    let count2 = 0; 

    while (count2 < mid) { 
      count2++; 
      leftPointer = leftPointer.next; 
    } 

    rightPart = new LinkedList(leftPointer.next); 
    leftPointer.next = null; 

    return merge(mergeSort(leftPart), mergeSort(rightPart.head))
};



function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('7');
  SLL.insertLast('5');
  SLL.insertLast('8');
  SLL.insertLast('2');
  SLL.insertLast('3');
  SLL.insertFirst('1');
  SLL.insertLast('6');
  SLL.insertLast('9');
  SLL.insertLast('4');
  SLL.insertLast('0');

  console.log(mergeSort(SLL));

  // SLL.insertFirst('Tauhida');
  //SLL.remove('squirell');
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('test', 'Boomer');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');
  //display(SLL);
  // size(SLL);
  // isEmpty(SLL);
  // findPrevious(SLL, 'Boomer');
  // findPrevious(SLL, 'Turnip');
  //findLast(SLL);

}

main();