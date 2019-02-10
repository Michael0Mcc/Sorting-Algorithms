function bubbleSort(list) {
  // if(list[loop2] > list[loop2 +1]) {
  //   swap(list, loop2, loop2 +1);
  // }

  // if (loop1 < list.length -1) {
  //   loop2++;
  //   if(loop2 >= list.length -loop1 -1) {
  //     loop2 = 0;
  //     loop1++;
  //   }
  // } else {
  //   console.log(list);
  //   noLoop();
  // }

  console.time('⏰');
  for (let i = 0; i < list.length -1; i++) {
    for (let j = 0; j < list.length -i -1; j++) {
      if (list[j] > list[j +1]) {
        swap(list, j, j +1);
      }
    }   
  }
  console.timeEnd('⏰');
  return list;
}