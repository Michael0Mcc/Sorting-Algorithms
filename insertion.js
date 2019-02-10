function insertionSort(list) {
  let key;

  // loop1++;
  // if (loop1 < list.length) {
  //   key = list[loop1];
  //   loop2 = loop1 -1;
  //   while(loop2 >= 0 && key < list[loop2]) {
  //     swap(list, loop2, loop2 +1);
  //     loop2--;
  //   }
  // } else {
  //   console.log(list);
  //   noLoop();
  // }

  console.time('⏰');
  for (i = 1; i < list.length; i++) {
    key = list[i];
    let j = i -1;
    while (j >= 0 && key < list[j]) {
      temp = list[j];
      list[j] = list[j  +1];
      list[j+1] = temp;
      j--;
    }
  }
  console.timeEnd('⏰');
  return list;
}