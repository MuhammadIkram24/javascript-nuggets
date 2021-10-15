//************************ Recursion
const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        {
          name: "Kyle",
          children: [],
        },
        {
          name: "Sophia",
          children: [
            {
              name: "Anna",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

function printChildrenRecursive(tree) {
  if (tree.children.length === 0) {
    return;
  }
  tree.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

printChildrenRecursive(tree);

//*********************** Same function using for loop and recursive function

//for loop
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("End");
}
countDown(4);

//recursive function
function countDownRecursive(n) {
  if (n <= 0) {
    console.log("End");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}
countDown(4);
