// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// technique: use stack to reverse the linked list, then convert to string, then convert to BigInt, then add, then convert back to string, then convert back to linked list
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const l1stack: number[] = [];
  const l2stack: number[] = [];

  var currentNode = l1;
  var currentNode2 = l2;

  while (currentNode) {
    l1stack.push(currentNode.val);
    currentNode = currentNode.next;
  }

  while (currentNode2) {
    l2stack.push(currentNode2.val);
    currentNode2 = currentNode2.next;
  }

  const reverseL1 = l1stack.reverse().join("");
  const reverseL2 = l2stack.reverse().join("");
  const sum = BigInt(reverseL1) + BigInt(reverseL2);
  if (sum === 0n) {
    return new ListNode(0);
  }
  const strSum = sum.toString();
  let resultStack: null | ListNode = null;
  let currentNode3: null | ListNode = null;
  for (let i = strSum.length - 1; i >= 0; i--) {
    if (!currentNode3) {
      currentNode3 = new ListNode(Number(strSum[i]));
      resultStack = currentNode3;
      continue;
    }
    currentNode3.next = new ListNode(Number(strSum[i]));
    currentNode3 = currentNode3.next;
  }
  console.log(JSON.stringify(resultStack));
  return resultStack;
}
