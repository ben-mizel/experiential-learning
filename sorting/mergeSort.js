function mergeSort(arr) {
    if (arr.length < 2) return arr;
    // split the array into two subarrays
    const mid = Math.floor(arr.length / 2);
    const leftSubArr = arr.slice(0, mid);
    const rightSubArr = arr.slice(mid, arr.length);
    // sort each subarray
    const sortedLeftSubArr = mergeSort(leftSubArr);
    const sortedRightSubArr = mergeSort(rightSubArr);
    // merge the sorted subarrays
    return merge(sortedLeftSubArr, sortedRightSubArr);
}

function merge(arr1, arr2) { // merge two sorted arrays into a single sorted array
    const results = [];
    let firstIdx = 0;
    let secondIdx = 0;
    while (firstIdx < arr1.length && secondIdx < arr2.length) {
        if (arr1[firstIdx] <= arr2[secondIdx]) {
            results.push(arr1[firstIdx]);
            firstIdx++;
        } else {
            results.push(arr2[secondIdx]);
            secondIdx++;
        }
    }
    while (firstIdx < arr1.length) {
        results.push(arr1[firstIdx]);
        firstIdx++;
    }
    while (secondIdx < arr2.length) {
        results.push(arr2[secondIdx]);
        secondIdx++;
    }
    return results;
}



console.log(mergeSort([14, 36, 5, 8, 50, 27, 2]));
// O (n log n)