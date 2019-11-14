

// function bucketSort(arr, bucketCount, min, max){
//   let result = [];
//   for(let i = 0; i < bucketCount; i++){
//     let bucket`${i}`
//   }
//   let size = Math.floor((max-min)/bucketCount)+1
//   for(let i = 0; i < arr.length; i++){

//   }
// }


function bucketSort(array, bucketSize, minValue, maxValue) {
  if (array.length === 0) {
    return array;
  }


  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);
  //console.log(allBuckets);
  
  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  //console.log(allBuckets);  
  
  // Pushing values to buckets
  array.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    
    console.log(allBuckets);
  });

  // Sorting buckets
  array.length = 0;
  
  
  allBuckets.forEach(function(bucket) {
    bucket.sort();
    console.log(`allbuckets = ${allBuckets}`)
    console.log(`array = ${array}`)
  	bucket.forEach(function (element) {
  		array.push(element);
  	});
  });

  return array;
}
//let array = [4,5,2,3,8,9,1];

//console.log(bucketSort(array, 3, 1, 9));


function main(){

  let arr = [28, 47, 39, 4, 8, 99, 93, 63, 24, 83, 1, 77];
  console.log(bucketSort(arr, 15, 1, 99));

}

main();