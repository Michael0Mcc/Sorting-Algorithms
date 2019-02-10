let arr = new Array(10);

let loop1 = 0;
let loop2 = 0;

function windowResized() {
  if (arr.length < 100) {
    resizeCanvas(windowWidth, floor(windowWidth/arr.length) * 5);
  } else {
    createCanvas(400, 400);
  }
}

function setup() {
  if (arr.length < 100) {
    createCanvas(windowWidth, floor(windowWidth/arr.length) * 5);
  } else {
    createCanvas(400, 400);
  }
  randomizeArray(arr);
  // insertionSort(arr);
  // bubbleSort(arr);
  // selectionSort(arr);
}

function draw() {
  background(51);
  display(arr);
  // insertionSort(arr);
  // bubbleSort(arr);
  // selectionSort(arr);
}

function display(list) {
  if (list.length < 100) {
    for (let i = 0; i < list.length; i++) {
      fill(floor(255/list[i]));
      rect(i* width/list.length, height, width/list.length, (list[i] / (list.length +1)) * -height);
    }
  }
}

function randomizeArray(list) {
  console.time('⏰');
  let nums = [];
  for (let i = 0; i < list.length; i++) {
    nums[i] = i+1;
  }
  for (let i = 0; i < list.length; i++) {
    list[i] = random(nums);
    for (let j = 0; j < nums.length; j++) {
      if(list[i] === nums[j]) {
        nums.splice(j, 1);
      }
    }
  }
  console.timeEnd('⏰');
  return list;
}

function swap(list, a, b) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
