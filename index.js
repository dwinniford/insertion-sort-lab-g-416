function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0
    for (let index = 0; index < array.length; index++) {
        if(array[index] < min) {
            min = array[index]
            minIndex = index
        }
    }
    return array.splice(minIndex, 1)[0]
}

function insertionSort(array){
    let sortedArray = []
    while (array.length > 0) {
        sortedArray.push(findMinAndRemove(array))
    }
    return sortedArray
}
