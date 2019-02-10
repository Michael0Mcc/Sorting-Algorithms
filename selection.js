function selectionSort(list) {
  let minValue, minIndex;

  console.time('⏰');
  for (let i = 0; i < list.length; i++) {
    minValue = list[i];
    minIndex = i;
    for (let j = i; j < list.length; j++) {
      if(list[j] < minValue) {
        minValue = list[j];
        minIndex = j;
      }
    }
    if(minValue < list[i]) {
      swap(list, i, minIndex);
    }
  }
  console.timeEnd('⏰');
  return list;
}