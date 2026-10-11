#include <stdbool.h>
#include <stdlib.h>

struct ListNode {
  int val;
  struct ListNode *next;
};
bool isPalindrome(struct ListNode *head) {
  if (head == NULL || head->next == NULL) {
    return true;
  }

  struct ListNode *slow = head, *fast = head;
  struct ListNode *prev = NULL;

  // Reverse first half while finding the middle
  while (fast != NULL && fast->next != NULL) {
    fast = fast->next->next;

    struct ListNode *next = slow->next;
    slow->next = prev;
    prev = slow;
    slow = next;
  }

  // If odd length, skip the middle node
  if (fast != NULL) {
    slow = slow->next;
  }

  // Compare reversed first half with second half
  while (prev != NULL && slow != NULL) {
    if (prev->val != slow->val) {
      return false;
    }
    prev = prev->next;
    slow = slow->next;
  }

  return true;
}
