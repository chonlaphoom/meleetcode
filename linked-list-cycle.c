#include <stdatomic.h>
#include <stdbool.h>

struct ListNode {
  int val;
  struct ListNode *next;
};

bool hasCycle(struct ListNode *head) {
  if (head == NULL)
    return false;

  struct ListNode *slow = head;
  struct ListNode *fast = head;

  while (fast != NULL && fast->next != NULL) {
    if (slow->next == NULL) {
      return false;
    }

    slow = slow->next;
    fast = fast->next->next;

    if (slow == fast) {
      return true;
    }
  }

  return false;
}
