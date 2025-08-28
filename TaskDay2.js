// ASSIGNMENT 2 - FIND HIGHEST MARKS FROM AN ARRAY

let marksObj = {

  marks: [45, 67, 89, 23, 99, 72],

  getHighest: function () {
    let highest = this.marks[0]; 
    for (let i = 1; i < this.marks.length; i++) {
      if (this.marks[i] > highest) {
        highest = this.marks[i];
      }
    }
    return highest;
  }
  
};

console.log("Highest marks:", marksObj.getHighest());