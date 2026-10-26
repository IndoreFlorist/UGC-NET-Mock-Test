var rawQuestions = [
    {
        q: "Consider the following array declaration in 'C' language:<br>int array[] = {2, 3, 4, 5};<br>What will be the output of the following statement? printf(\"%d\", 2[array]);",
        opts: ["(A) 4", "(B) 3", "(C) 2", "(D) 5"],
        ans: 0,
        exp: "<b>(A) 4</b><br>int array[] = {2, 3, 4, 5}; is stored at indices 0, 1, 2, 3 (addresses 100, 102, 104, 106 with base address a = 100).<br>The array element at index i can be accessed by a[i], i[a], *(a+i) or *(i+a). All these representations are equal and give the i-th index value.<br>printf(\"%d\", 2[array]); therefore gives the 2nd index value, i.e. 4."
    },
    {
        q: "Which of the following expression will delete the entire array pointed to by q?",
        opts: ["(A) delete all q;", "(B) delete array q;", "(C) delete * q;", "(D) delete[ ] q;"],
        ans: 3,
        exp: "<b>(D) delete[ ] q;</b><br>In C++, when you allocate an array dynamically, you use the new[] operator. This allocates a block of memory sufficient to hold the array, and returns a pointer to the first element. Example: int* arr = new int[10]; // Allocates memory for an array of 10 integers.<br>When you are done with this dynamically allocated memory, it is important to free it to prevent memory leaks. You do this by using the delete[] operator, which you apply to the pointer: delete[] arr; // Frees the memory for the array of 10 integers."
    },
    {
        q: "Consider the following ANSI C program.<br>#include &lt;stdio.h&gt;<br>int main()<br>{<br>&nbsp;&nbsp;int arr[4][5];<br>&nbsp;&nbsp;int i, j;<br>&nbsp;&nbsp;for(i = 0; i &lt; 4; i++)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;for (j = 0; j &lt; 5; j++)<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i][j] = 10 * i + j;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;print(\"%d\", *(arr[1] + 9));<br>&nbsp;&nbsp;return 0;<br>}<br>What is the output of the above program?",
        opts: ["(A) 14", "(B) 20", "(C) 30", "(D) 24"],
        ans: 3,
        exp: "<b>(D) 24</b><br>*(arr[1] + 9) can be written as arr[1][9].<br>As C does not follow bound check and follows row major ordering:<br>arr[1][5] = arr[2][0] (arr[1][4] will be the last element of the first row and then arr[2][0] is the first element of the next row)<br>arr[1][6] = arr[2][1]<br>arr[1][7] = arr[2][2]<br>arr[1][8] = arr[2][3]<br>arr[1][9] = arr[2][4]<br>arr[2][4] = 10*i + j = 10*2 + 4 = 24"
    },
    {
        q: "The postfix equivalent of the infix expression (a + b)*(c*d - e) * f/g is :",
        opts: ["(A) ab + cd*e - fg*/*", "(B) ab cd*e - fg/**", "(C) ab cde* - fg/**", "(D) abcd e*fg - /**"],
        ans: 0,
        exp: "<b>(A) ab + cd*e - fg*/*</b><br>To convert an infix expression to its postfix equivalent, follow the order of operations and use a stack to manage the operators. The given infix expression is (a + b)*(c*d - e) * f/g.<br>• First, evaluate the expression inside the parentheses: a + b and c*d - e.<br>• The postfix notation for a + b is ab+.<br>• The postfix notation for c*d - e is cd*e-.<br>• Next, multiply the results of these two expressions: (ab+)(cd*e-).<br>• The postfix notation for this multiplication is ab+cd*e-*.<br>• Finally, multiply by f and divide by g: (ab+cd*e-)*f/g.<br>• The postfix notation for this final expression is ab+cd*e-*f*g/.<br>Therefore, the postfix equivalent of the infix expression (a + b)*(c*d - e) * f/g is ab+cd*e-*f*g/."
    },
    {
        q: "Evaluate the following postfix expression and find the correct value in the following-<br>50, 60, +, 20, 10, -, *",
        opts: ["(A) 1100", "(B) 1000", "(C) 9000", "(D) 10"],
        ans: 0,
        exp: "<b>(A) 1100</b><br>To evaluate a postfix expression, follow these steps:<br>• Read the expression from left to right.<br>• Push operands onto a stack.<br>• When an operator is encountered, pop the required number of operands from the stack, perform the operation, and push the result back onto the stack."
    },
    {
        q: "Lower-triangular sparse matrix is one :",
        opts: ["(1) in which all the non-zero elements lie only on the leading diagonal.", "(2) in which all the non-zero elements lie above leading diagonal.", "(3) in which all the non-zero elements lie below leading diagonal.", "(4) which is not defined for sparse matrix."],
        ans: 2,
        exp: "<b>(3) in which all the non-zero elements lie below leading diagonal.</b><br>• A lower-triangular matrix is a type of matrix where all the elements above the leading diagonal (the diagonal from the top-left to the bottom-right of the matrix) are zero, and the non-zero elements are found only on or below the leading diagonal.<br>• A sparse matrix is simply one in which most of the elements are zero.<br>• In the case of a lower-triangular sparse matrix, the same rules apply, but it also contains a significant number of zero elements below the diagonal, making it sparse."
    },
    {
        q: "Arrange the following prefix expressions based on their values in increasing order:<br><br>A. + − ∗ 2 / 8 4 3 2<br>B. ↑ − ∗ 3 3 ∗ 4 2 5<br>C. + − ↑ 3 2 ↑ 2 3 / 6 − 4 2<br>D. ∗ + 3 + 3 ↑ 3 + 1 1 3<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) A, B, C, D", "(2) B, A, C, D", "(3) D, C, B, A", "(4) C, D, A, B"],
        ans: 1,
        exp: "<b>(2) B, A, C, D</b><br>Start scanning from the right; whenever an operator comes, the last two operands are popped out and the operation is performed on those two operands.<br><br><b>A.</b> + − ∗ 2 / 8 4 3 2 → + − ∗ 2 (8/4) 3 2 → + − ∗ 2 2 3 2 → + − (2∗2) 3 2 → + − 4 3 2 → + (4−3) 2 → + 1 2 → (1+2) = <b>3</b><br><b>B.</b> ↑ − ∗ 3 3 ∗ 4 2 5 → ↑ − ∗ 3 3 (4∗2) 5 → ↑ − ∗ 3 3 8 5 → ↑ − (3∗3) 8 5 → ↑ − 9 8 5 → ↑ (9−8) 5 → ↑ 1 5 → (1↑5) = <b>1</b><br><b>C.</b> + − ↑ 3 2 ↑ 2 3 / 6 − 4 2 → + − ↑ 3 2 ↑ 2 3 / 6 (4−2) → + − ↑ 3 2 ↑ 2 3 / 6 2 → + − ↑ 3 2 ↑ 2 3 (6/2) → + − ↑ 3 2 ↑ 2 3 3 → + − ↑ 3 2 (2↑3) 3 → + − (3↑2) 8 3 → + − 9 8 3 → + (9−8) 3 → + 1 3 → (1+3) = <b>4</b><br><b>D.</b> ∗ + 3 + 3 ↑ 3 + 1 1 3 → ∗ + 3 + 3 ↑ 3 (1+1) 3 → ∗ + 3 + 3 ↑ 3 2 3 → ∗ + 3 + 3 (3↑2) 3 → ∗ + 3 + 3 9 3 → ∗ + 3 (3+9) 3 → ∗ + 3 12 3 → ∗ (3+12) 3 → ∗ 15 3 → (15∗3) = <b>45</b><br><br>Increasing order of values: B (1), A (3), C (4), D (45)."
    },
    {
        q: "The result evaluating the postfix expression 10 5 + 60 6 / * 8 − is",
        opts: ["(A) 284", "(B) 213", "(C) 142", "(D) 71"],
        ans: 2,
        exp: "<b>(C) 142</b><br>Postfix expression: 10 5 + 60 6 / * 8 −<br>PUSH: 10 and 5 (TOS)<br>Add: 10 + 5 = 15<br>PUSH: 15, 60, 6 (TOS)<br>Divide: 60/6 = 10<br>PUSH: 10 → stack: 15, 10<br>Multiply: 15 × 10 = 150<br>PUSH: 150 and 8<br>Subtract: 150 − 8 = 142"
    },
    {
        q: "A recursive problem like tower of hanoi can be rewritten without recursion using:",
        opts: ["(A) stack", "(B) priority queue", "(C) graph", "(D) cycles"],
        ans: 0,
        exp: "<b>(A) stack</b><br>A stack is an ordered list in which insertion and deletion are done at one end, called a top.<br>The last element inserted is the first one to be deleted. Hence, it is called the Last in First out (LIFO) or First in Last out (FILO) list."
    },
    {
        q: "Consider the following postfix expression with single digit operands:<br><br>623∗/42∗+68∗−<br><br>The top two elements of the stack after the second ∗ is evaluated, are:",
        opts: ["(1) 8,2", "(2) 8,1", "(3) 6,2", "(4) 6,3"],
        ans: 1,
        exp: "<b>(2) 8,1</b><br>Step 1: push 6 → [6]<br>Step 2: push 2 → [6, 2]<br>Step 3: push 3 → [6, 2, 3]<br>Step 4: ∗ → pop top 2 elements and save the result on the top of the stack: 2 ∗ 3 = 6 → [6, 6]<br>Step 5: / → 6 / 6 = 1 → [1]<br>Step 6: push 4 → [1, 4]<br>Step 7: push 2 → [1, 4, 2]<br>Step 8: ∗ (second ∗) → 4 ∗ 2 = 8 → [1, 8]<br>So the top two elements of the stack are 8 and 1."
    },
    {
        q: "Insertion and deletion in a queue takes place respectively at which end.<br><br>A. Front<br>B. Rear<br>C. Middle<br>D. Second element from right end<br>E. Second element from left end.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) B and A only", "(B) A and c only", "(C) C and E only", "(D) D and E only"],
        ans: 0,
        exp: "<b>(A) B and A only</b><br>In a queue data structure, the operations of insertion and deletion are defined as follows: Insertion (enqueue) occurs at the rear end of the queue. Deletion (dequeue) occurs at the front end of the queue."
    },
    {
        q: "What is the term for inserting into a full queue known as?",
        opts: ["(A) Overflow", "(B) Underflow", "(C) Null pointer exception", "(D) Program won't be compiled"],
        ans: 0,
        exp: "<b>(A) Overflow</b><br>• Overflow occurs when an attempt is made to add an element to a queue that is already full.<br>• In a queue, elements are inserted at the rear and removed from the front.<br>• A queue has a fixed size, and when it reaches this capacity, no more elements can be inserted until some are removed.<br>• Attempting to insert an element into a full queue will result in an overflow condition, which typically triggers an error or exception."
    },
    {
        q: "What will be the position of front and rear after execution of the following statements, the Queue already had the given elements in FIFO order<br><br>50→90→7→21→73→77<br>(F = Front points to 50, R = Rear points to 77)<br><br>accordingly ()<br>accordingly ()<br>accordingly ()<br>accordingly ()<br>accordingly ()<br>tail(100)<br>accordingly ()",
        opts: ["1. Front 50, Rear 77", "2. Front 100, Rear 100", "3. Front 77, Rear 100", "4. Front 73, Rear 77"],
        ans: 1,
        exp: "<b>2. Front 100, Rear 100</b><br>A queue is a FIFO (First-In-First-Out) data structure. Elements are inserted at the rear and removed from the front.<br>Initial Queue: 50-90-7-21-73-77, Front = 50, Rear = 77<br>Operations:<br>1. dequeue() → Removes 50 → Queue: [90, 7, 21, 73, 77]<br>2. dequeue() → Removes 90 → Queue: [7, 21, 73, 77]<br>3. dequeue() → Removes 7 → Queue: [21, 73, 77]<br>4. dequeue() → Removes 21 → Queue: [73, 77]<br>5. dequeue() → Removes 73 → Queue: [77]<br>6. enqueue(100) → Adds 100 → Queue: [77, 100]<br>7. dequeue() → Removes 77 → Queue: [100]<br>Final Queue: [100]<br>Front = 100, Rear = 100"
    },
    {
        q: "Which of the following uses only increment operations for adding and removing element at either end?",
        opts: ["(A) Queues", "(B) Stacks", "(C) Priority Queues", "(D) Deques"],
        ans: 3,
        exp: "<b>(D) Deques</b><br>A deque (double-ended queue) is a data structure that allows elements to be added or removed from both ends.<br>• Deques support insertion and deletion operations at both the front and the back, making them very flexible.<br>• Unlike stacks and queues which are restricted to adding or removing elements from only one end, deques can perform these operations at either end using only increment operations.<br>• This makes deques particularly useful in scenarios where elements need to be accessed, added, or removed from both ends efficiently."
    },
    {
        q: "A queue is implemented using an array such that ENQUEUE and DEQUEUE operations are performed efficiently. Which one of the following statements is CORRECT (n refers to the number of items in the queue)?",
        opts: ["(A) Both operations can be performed in O(1) time", "(B) At most one operation can be performed in O(1) time but the worst case time for the other operation will be Ω(n)", "(C) The worst-case time complexity for both operations will be Ω(n)", "(D) Worst case time complexity for both operations will be Ω (log n)"],
        ans: 0,
        exp: "<b>(A) Both operations can be performed in O(1) time</b><br>• When we consider a normal implementation of the queue using an array, for enqueue and dequeue operations we have to shift every other element.<br>• In this, every time we remove the item from the start of the queue, all of the rest of the items in the queue move down by one to fill the space made by the removal of other items.<br>• But if we consider the circular array implementation of a queue, in this case, both enqueue and dequeue can be performed in O(1) time."
    },
    {
        q: "Suppose a stack implementation supports an instruction REVERSE, which reverses the order of elements on the stack, in addition to the PUSH and POP instructions. Which one of the following statements is TRUE with respect to this modified stack?",
        opts: ["(A) A queue cannot be implemented using this stack.", "(B) A queue can be implemented where ENQUEUE takes a single instruction and DEQUEUE takes a sequence of two instructions.", "(C) A queue can be implemented where ENQUEUE takes a sequence of three instructions and DEQUEUE takes a single instruction.", "(D) A queue can be implemented where both ENQUEUE and DEQUEUE take a single instruction each."],
        ans: 2,
        exp: "<b>(C) A queue can be implemented where ENQUEUE takes a sequence of three instructions and DEQUEUE takes a single instruction.</b><br>"
    },
    {
        q: "A circular queue has been implemented using a singly linked list where each node consists of a value and a single pointer pointing to the next node. We maintain exactly two external pointers FRONT and REAR pointing to the front node and the near node of the queue, respectively. Which of the following statements is/are CORRECT for such a circular queue, so that insertion and deletion operations can be performed in O(1) time?<br><br>I. Next pointer of front node points to the rear node.<br>II. Next pointer of rear node points to the front node.",
        opts: ["(A) I only", "(B) II only", "(C) Both I and II", "(D) Neither I and II"],
        ans: 1,
        exp: "<b>(B) II only</b><br>In case of a circular queue, to make insert and delete operations in O(1) time, the rear pointer will point to the next node, i.e. the front node. After storing this pointer, rear will point to the newly created node.<br>For enqueue: struct node *ptr; ptr -&gt; next = rear -&gt; next; rear -&gt; next = ptr; rear = ptr;<br>For dequeue: ptr = front node; rear -&gt; next = front -&gt; next; ptr = front; front = rear -&gt; next; free(ptr);"
    },
    {
        q: "Which of the following data structures is generally used to implement priority queue?",
        opts: ["(A) Heap tree", "(B) Graph", "(C) Stack", "(D) Table"],
        ans: 0,
        exp: "<b>(A) Heap tree</b><br>Priority queue can be implemented using an array, a linked list, a heap data structure. Among these data structures, heap data structure provides an efficient implementation of priority queues. In a normal queue, the queue is implemented based on FIFO but in a priority queue nodes are removed based on the priority."
    },
    {
        q: "Which type of linked list stores the address of the header node in the next field of the last node ?",
        opts: ["(A) Singly linked list", "(B) Circular linked list", "(C) Doubly linked list", "(D) Circular header linked list"],
        ans: 1,
        exp: "<b>(B) Circular linked list</b><br>"
    },
    {
        q: "If we want to find last node of a singly linked list then the correct coding is",
        opts: ["(A) if (temp-link ! = NULL) temp = temp-link", "(B) if (temp-data = Num) temp = temp-link", "(C) While (temp-link ! = NULL) temp = temp-link", "(D) While (temp-link! = data) temp = temp-link"],
        ans: 2,
        exp: "<b>(C) While (temp-link ! = NULL) temp = temp-link</b><br>• In a singly linked list, each node contains a reference (or pointer) to the next node in the sequence.<br>• This means that every node (except the last one) has a successor node in a singly linked list.<br>• The last node in a singly linked list typically points to null, indicating the end of the list.<br>• Because of this structure, singly linked lists are efficient for traversal and insertion at the beginning of the list."
    },
    {
        q: "Consider the following C program<br><br>struct listnode {<br>&nbsp;&nbsp;int data;<br>&nbsp;&nbsp;struct listnode *next;<br>};<br><br>void fun(struct listnode *head) {<br>&nbsp;&nbsp;if (head == NULL || head-&gt;next == NULL)<br>&nbsp;&nbsp;&nbsp;&nbsp;return;<br><br>&nbsp;&nbsp;struct listnode *tmp = head-&gt;next;<br>&nbsp;&nbsp;head-&gt;next = temp-&gt;next;<br>&nbsp;&nbsp;free(tmp);<br>&nbsp;&nbsp;fun(head-&gt;next);<br>}<br><br>What is the functionality of the above function?",
        opts: ["(A) It reverses the linked list", "(B) It deletes the linked list", "(C) Alternate nodes will be deleted", "(D) It reverses the linked list and deletes alternate nodes"],
        ans: 2,
        exp: "<b>(C) Alternate nodes will be deleted</b><br>"
    },
    {
        q: "What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order?",
        opts: ["(A) Θ(n)", "(B) Θ(n log n)", "(C) Θ(n^2)", "(D) Θ(1)"],
        ans: 2,
        exp: "<b>(C) Θ(n^2)</b><br>Assume the worst case comparison: elements are sorted in ascending order and the linked list is singly linked.<br>Insert 1st element: it is always sorted, hence no comparison.<br>Insert 2nd element: 1 comparison is needed.<br>Insert 3rd element: 2 comparisons are needed.<br>...<br>Insert nth element: (n − 1) comparisons are needed.<br>For comparison: T(n) = 1 + 2 + ... + (n − 1) = n(n−1)/2 = Θ(n²)"
    },
    {
        q: "A queue is implemented using a non-circular singly linked list. The queue has a head pointer and a tail pointer, as shown in the figure. Let n denote the number of nodes in the queue. Let enqueue be implemented by inserting a new node at the head, and dequeue be implemented by deletion of a node from the tail.<br><br>(Figure: head → node → node → ...... → node ← tail, the last node's next pointer is NULL)<br><br>Which one of the following is the time complexity of the most time-efficient implementation of enqueue and dequeue, respectively, for this data structure?",
        opts: ["1. θ(1), θ(1)", "2. θ(1), θ(n)", "3. θ(n), θ(1)", "4. θ(n), θ(n)"],
        ans: 1,
        exp: "<b>2. θ(1), θ(n)</b><br>"
    },
    {
        q: "In a circularly linked list organization, insertion of a record involves the modification of",
        opts: ["(A) No pointer", "(B) 1 pointer", "(C) 2 pointers", "(D) 3 pointers"],
        ans: 2,
        exp: "<b>(C) 2 pointers</b><br>"
    },
    {
        q: "Consider an implementation of unsorted single linked list. Suppose it has its representation with a head and a tail pointer (i.e. pointers to the first and last nodes of the linked list). Given the representation, which of the following operation cannot be implemented in O(1) time ?",
        opts: ["(A) Insertion at the front of the linked list.", "(B) Insertion at the end of the linked list.", "(C) Deletion of the front node of the linked list.", "(D) Deletion of the last node of the linked list."],
        ans: 3,
        exp: "<b>(D) Deletion of the last node of the linked list.</b><br>Since head and tail pointers are given:<br>1) A node can be inserted at the front and its address stored in the head pointer, with its next containing the next node address.<br>2) As the tail pointer is present, the new node address is stored in tail and in the last-but-one node of the linked list.<br>3) The front node can be deleted easily by pointing head to the next node.<br>All this can be done in O(1).<br>But deletion of the last node takes O(n): even though we have a tail pointer which points to the last node, we need to get the last-but-one node and change its next to null. To do this we need to move from the head pointer, as it is a singly linked list and we can't move back from the tail pointer.<br>So it takes O(n) time."
    }
];