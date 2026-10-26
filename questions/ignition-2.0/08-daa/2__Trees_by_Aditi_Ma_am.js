var rawQuestions = [
    {
        q: "Total number of nodes at the nth level of a full binary tree can be given as __________.",
        opts: ["(A) 2n + 1", "(B) 2n<sup>2</sup>", "(C) 2<sup>n</sup>", "(D) 2n−1"],
        ans: 2,
        exp: "<b>(C) 2<sup>n</sup></b><br>In a full binary tree, each level contains nodes that follow the pattern:<br>Level 0: 2<sup>0</sup> = 1 node<br>Level 1: 2<sup>1</sup> = 2 nodes<br>Level 2: 2<sup>2</sup> = 4 nodes ...<br>Level n: 2<sup>n</sup> nodes<br>So, the number of nodes at the nth level is given by 2<sup>n</sup>."
    },
    {
        q: "Arrange the following steps of the Inorder Traversal of Binary Tree in the correct order.<br><br>A. Visit the Left subtree<br>B. Visit the Root node<br>C. Visit the Right subtree<br>D. Start traversing by visiting the nodes in rooted tree<br>E. Repeat the above three steps.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) A, B, C, D, E", "(B) E, A, B, C, D", "(C) D, A, B, C, E", "(D) D, A, E, B, C"],
        ans: 2,
        exp: "<b>(C) D, A, B, C, E</b><br>Inorder traversal of a binary tree is a type of depth-first traversal where nodes are visited in the following order:<br>Step 1: Start traversing by visiting the nodes in the rooted tree.<br>Step 2: Visit the Left subtree.<br>Step 3: Visit the Root node.<br>Step 4: Visit the Right subtree.<br>Step 5: Repeat the above three steps for each subtree."
    },
    {
        q: "Considering the following binary tree, what will be the inorder traversal?<br><br>(Figure: A is the root with left child B and right child C. C has left child D and right child E. E has right child F. F has left child G and right child H.)",
        opts: ["(A) B A D C E G F H", "(B) G H F E D C B A", "(C) B A C D E G F H", "(D) G H F D E B C A"],
        ans: 0,
        exp: "<b>(A) B A D C E G F H</b><br>• Inorder traversal is used to get nodes of a binary search tree (BST) in non-decreasing order.<br>• This traversal method is used in many tree-related algorithms and problems.<br>• It is also useful in scenarios where the order of node processing matters, such as expression trees for arithmetic operations."
    },
    {
        q: "The pre-order traversal of a binary search tree is 15, 10, 12, 11, 20, 18, 16, 19. Which one of the following is the post order traversal of the tree?",
        opts: ["(A) 10, 11, 12, 15, 16, 18, 19, 20", "(B) 11, 12, 10, 16, 19, 18, 20, 15", "(C) 20, 19, 18, 16, 15, 12, 11, 10", "(D) 19, 16, 18, 20, 11, 120, 10, 15"],
        ans: 1,
        exp: "<b>(B) 11, 12, 10, 16, 19, 18, 20, 15</b><br>In case of Binary Search Trees (BST), inorder traversal always sorts the tree nodes into ascending order.<br>Inorder traversal is 10, 11, 12, 15, 16, 18, 19, 20. Pre-order traversal is 15, 10, 12, 11, 20, 18, 16, 19.<br>In preorder traversal, the first node would be the tree root; values less than the root would be part of the left subtree and values greater than the root would form the right subtree.<br>Post order traversal of the resultant BST: 11, 12, 10, 16, 19, 18, 20, 15"
    },
    {
        q: "The following numbers are inserted into an empty binary search tree in the given order: 10, 1, 3, 5, 15, 12, 16. What is the height of the binary search tree?",
        opts: ["(A) 3", "(B) 4", "(C) 5", "(D) 6"],
        ans: 0,
        exp: "<b>(A) 3</b><br>"
    },
    {
        q: "The height of a tree is the length of the longest root-to-leaf path in it. The maximum and minimum number of nodes in a binary tree of height 5 are",
        opts: ["(A) 63 and 6, respectively", "(B) 64 and 5, respectively", "(C) 32 and 6, respectively", "(D) 31 and 5, respectively"],
        ans: 0,
        exp: "<b>(A) 63 and 6, respectively</b><br>If n<sub>max</sub> is the maximum number of nodes and H is the height of a binary search tree, then n<sub>max</sub> = 2<sup>H+1</sup> − 1. Put H = 5: n<sub>max</sub> = 2<sup>6</sup> − 1 = 63.<br>If n<sub>min</sub> is the minimum number of nodes and H is the height of a binary search tree, then n<sub>min</sub> = H + 1. Put H = 5: n<sub>min</sub> = 5 + 1 = 6."
    },
    {
        q: "The height of a binary search tree for the words banana, peach, apple, pear, coconut, mango and papaya using alphabetical order is:",
        opts: ["(1) 2", "(2) 3", "(3) 4", "(4) 5"],
        ans: 2,
        exp: "<b>(3) 4</b><br>Insert the words one by one:<br>1. Insert \"banana\": root (height 0).<br>2. Insert \"peach\": right child of banana (height 1).<br>3. Insert \"apple\": left child of banana.<br>4. Insert \"pear\": right child of peach (height 2).<br>5. Insert \"coconut\": left child of peach (height 2).<br>6. Insert \"mango\": right child of coconut (height 3).<br>7. Insert \"papaya\": right child of mango (height 4).<br>The longest path is banana → peach → coconut → mango → papaya, so the height is 4."
    },
    {
        q: "Which of the following is/are correct in-order traversal sequence(s) of binary search tree(s)?<br>I. 3, 5, 7, 8, 15, 19, 25<br>II. 5, 8, 9, 12, 10, 15, 25<br>III. 2, 7, 10, 8, 14, 16, 20<br>IV. 4, 6, 7, 9 18, 20, 25",
        opts: ["(A) I and IV only", "(B) II and III only", "(C) II and IV only", "(D) II only"],
        ans: 0,
        exp: "<b>(A) I and IV only</b><br>I: It doesn't violate the binary search tree property and hence it is the correct order of traversal.<br>II: 15 is left of 12 which violates the binary search tree property.<br>III: 14 is left of 10 which violates the binary search property.<br>IV: It doesn't violate the binary search tree property and hence it is the correct order of traversal."
    },
    {
        q: "Let T be a binary search tree with 15 nodes. The minimum and maximum possible heights of T are:<br>Note: The height of a tree with a single node is 0.",
        opts: ["(A) 4 and 15 respectively", "(B) 3 and 14 respectively", "(C) 4 and 14 respectively", "(D) 3 and 15 respectively"],
        ans: 1,
        exp: "<b>(B) 3 and 14 respectively</b><br>Minimum height of the tree is when all the levels of the BST are completely filled. Maximum height of the binary search tree (BST) is the worst case when nodes are in a skewed manner.<br>• Minimum height of the BST with n nodes is ⌈log<sub>2</sub>(n + 1)⌉ − 1<br>• Maximum height of the BST with n nodes is n − 1.<br>Maximum height of the BST with 15 nodes = 15 − 1 = 14."
    },
    {
        q: "A binary search tree in which every non-leaf node has non-empty left and right subtrees is called a strictly binary tree. Such a tree with 19 leaves:",
        opts: ["(A) cannot have more than 37 nodes", "(B) has exactly 37 nodes", "(C) has exactly 35 nodes", "(D) cannot have more than 35 nodes"],
        ans: 1,
        exp: "<b>(B) has exactly 37 nodes</b><br>L = I (n − 1) + 1<br>where L = number of leaf nodes, I = number of internal nodes, n = n-ary tree.<br>L = 19, n = 2 (as the given tree is a strictly binary tree): 19 = I (2 − 1) + 1, so I = 18.<br>Number of internal nodes = 18, number of leaf nodes = 19.<br>Total number of nodes = 18 + 19 = 37."
    },
    {
        q: "What is balance factor of an AVL tree?",
        opts: ["1. |h(TL) + h(TR)| ≤ 1", "2. |h(TR)| ≤ 1", "3. |h(TL)| ≤ 1", "4. |h(TL) - h(TR)| ≤ 1"],
        ans: 3,
        exp: "<b>4. |h(TL) - h(TR)| ≤ 1</b><br>Adelson-Velskii and Landis (AVL) tree is a height-balanced binary search tree. In an AVL tree, the balance factor of every node is either −1, 0, or +1. The balance factor of a node is the difference between the heights of the left and right subtrees of that node."
    },
    {
        q: "Consider a completely skewed (left/right) binary search tree with n elements. What is the worst case time complexity of searching an element in this tree?",
        opts: ["(A) O(n)", "(B) O(1)", "(C) O(log n)", "(D) O(nlogn)"],
        ans: 0,
        exp: "<b>(A) O(n)</b><br>▪ A binary search tree (BST) is a binary tree where each node has a value greater than all the values in its left subtree and less than all the values in its right subtree.<br>▪ In a balanced BST, the time complexity for searching is O(log n) due to the tree's height being log(n).<br>▪ However, in a completely skewed (left or right) BST, the tree essentially behaves like a linked list.<br>▪ This means each node only has one child, and the tree's height becomes n (number of nodes).<br>▪ Therefore, the worst-case time complexity of searching an element in a completely skewed BST is O(n) because you may need to traverse all the nodes."
    },
    {
        q: "Which of the following rotations is called a double rotation in AVL Tree?",
        opts: ["(A) RL and RR", "(B) LR and RL", "(C) LL and RR", "(D) More than one of the above"],
        ans: 1,
        exp: "<b>(B) LR and RL</b><br>In an AVL Tree, a double rotation is used when a node becomes unbalanced and a single rotation is not sufficient to restore balance.<br>Single Rotations:<br>• LL (Left-Left): Single right rotation.<br>• RR (Right-Right): Single left rotation.<br>Double Rotations:<br>• LR (Left-Right): First left rotate the left child, then right rotate the node.<br>• RL (Right-Left): First right rotate the right child, then left rotate the node.<br>So, LR and RL are the double rotations used in AVL trees."
    },
    {
        q: "How many distinct binary search trees can be created out of 4 distinct keys?",
        opts: ["(A) 8", "(B) 24", "(C) 14", "(D) None of the above"],
        ans: 2,
        exp: "<b>(C) 14</b><br>The number of distinct binary search trees (BSTs) that can be formed with 'n' distinct keys is given by the nth Catalan number.<br>The nth Catalan number is calculated using the formula: C(n) = (2n)! / ((n+1)! n!)<br>For n = 4, C(4) = (2*4)! / ((4+1)! 4!) = 8! / (5! 4!) = 40320 / (120 * 24) = 40320 / 2880 = 14.<br>Hence, the number of distinct binary search trees that can be created out of 4 distinct keys is 14."
    },
    {
        q: "The number of rotations required to insert a sequence of elements 9, 6, 5, 8, 7, 10 into an empty AVL tree is?",
        opts: ["(A) 3", "(B) 1", "(C) 2", "(D) None of the above"],
        ans: 0,
        exp: "<b>(A) 3</b><br>After inserting 9, 6, 5: 1 rotation (the tree becomes 6 with children 5 and 9).<br>Insert 8: no rotation.<br>Insert 7: 1 more rotation (subtree at 9 is rebalanced, 8 with children 7 and 9), giving 2 rotations so far.<br>Insert 10: 1 more rotation at the root, giving 3 rotations in total.<br>Hence a total of 3 rotations are required."
    },
    {
        q: "Consider the following AVL tree.<br><br>(Figure: 38 is the root. 38 has left child 14 and right child 56. 14 has children 8 and 23; 23 has left child 18. 56 has children 45 and 82; 82 has left child 70.)<br><br>What will be the resultant AVL tree after insertion of node with value 20?",
        opts: ["1. 38 (left: 14 (left: 8, right: 18 (right: 20 (right: 23))), right: 56 (left: 45, right: 82 (left: 70)))", "2. 38 (left: 14 (left: 8, right: 23 (left: 18 (right: 20))), right: 56 (left: 45, right: 82 (left: 70)))", "3. 38 (left: 14 (left: 8, right: 23 (left: 20 (left: 18))), right: 56 (left: 45, right: 82 (left: 70)))", "4. 38 (left: 14 (left: 8, right: 20 (left: 18, right: 23)), right: 56 (left: 45, right: 82 (left: 70)))"],
        ans: 3,
        exp: "<b>4. 38 (left: 14 (left: 8, right: 20 (left: 18, right: 23)), right: 56 (left: 45, right: 82 (left: 70)))</b><br>"
    },
    {
        q: "Consider the following two statements.<br><br>1. A binary tree T is full if each node is either a leaf or possesses exactly two child nodes.<br>2. A binary tree T with n levels is complete if all levels except possibly the last are completely full, and the last level has all its nodes to the left side.<br><br>Which statement is/are TRUE",
        opts: ["(A) Only 1", "(B) Only 2", "(C) 1 and 2", "(D) Neither 1 nor 2"],
        ans: 2,
        exp: "<b>(C) 1 and 2</b><br>"
    },
    {
        q: "What is the worst case time complexity of inserting n² elements into an AVL-tree with n elements initially?",
        opts: ["1. Θ(n<sup>4</sup>)", "2. Θ(n²)", "3. Θ(n²log n)", "4. Θ(n³)"],
        ans: 2,
        exp: "<b>3. Θ(n²log n)</b><br>The given AVL tree already has n nodes. Now each successive insertion would involve two operations: Θ(log n) to find the appropriate place to insert and another Θ(log n) to do any rotation if required.<br>So in the worst case, each successive insertion requires 2 log n operations, i.e. Θ(log n). Therefore, n² insertions would require Θ(n² log n)."
    },
    {
        q: "What is the maximum height of any AVL tree with 7 nodes? Assume that height of tree with single node is 0.",
        opts: ["(A) 2", "(B) 3", "(C) 4", "(D) 5"],
        ans: 1,
        exp: "<b>(B) 3</b><br>N(H) = N(H−1) + N(H−2) + 1, where H is the height and N(H) is the minimum number of nodes in the AVL tree.<br>Base conditions: N(0) = 1, N(1) = 2<br>N(2) = N(1) + N(0) + 1 = 2 + 1 + 1 = 4<br>N(3) = N(2) + N(1) + 1 = 4 + 2 + 1 = 7<br>The maximum height of any AVL tree with 7 nodes is 3."
    },
    {
        q: "Suppose a binary search tree with 1000 distinct elements is also a complete binary tree. The tree is stored using the array representation of binary heap trees. Assuming that the array indices start with 0, the 3rd largest element of the tree is stored at index",
        opts: ["(A) 608", "(B) 509", "(C) 408", "(D) 609"],
        ans: 1,
        exp: "<b>(B) 509</b><br>At 10th level, number of nodes = 2<sup>10−1</sup> = 512.<br>At height 9, the index number of the first node = 2<sup>9</sup> − 1 = 511. Since the total number of nodes is 1000, we need to check the upper level, because the rightmost number in the binary search tree is maximum.<br>At 9th level, number of nodes = 2<sup>9−1</sup> = 256. At height 8, index number of first node = 2<sup>8</sup> − 1 = 255.<br>The index number of the last node in 9th level = 255 × 2 = 510 (the largest number).<br>Its left child, at index 509, holds the third largest value (the second largest is the parent of the largest).<br>So the third largest value is stored at index 509."
    },
    {
        q: "Choose the correct expression from the following for maximum children of a B-tree having order m.",
        opts: ["(A) m/2", "(B) m –1", "(C) m", "(D) m+1"],
        ans: 2,
        exp: "<b>(C) m</b><br>• Maximum children of a B-tree having order m can be defined as the maximum number of child nodes a single node in the B-tree can have.<br>• In a B-tree of order m, each node can have at most m children.<br>• This property of B-trees ensures that the tree remains balanced, facilitating efficient insertion, deletion, and search operations."
    },
    {
        q: "Which of the following is/are NOT CORRECT statement?<br>(A) The first record in each block of the data file is known as actor record.<br>(B) Dense index has index entries for every search key value in the data file.<br>(C) Searching is harder in the B+ tree than B- tree as the all external nodes linked to each other.<br>(D) In extendible hashing the size of directory is just an array of 2d-1, where d is global depth.<br>Choose the correct answer from the options given below:",
        opts: ["(A) (A), (B) and (C) Only", "(B) (A), (C) and (D) Only", "(C) (A), (B) and (D) Only", "(D) (A), (B), (C) and (D) Only"],
        ans: 1,
        exp: "<b>(B) (A), (C) and (D) Only</b><br>(A) The first record in each block of the data file is not known as an actor record; this is an incorrect usage of terminology in the context of databases.<br>(C) Searching in a B+ tree is not harder than in a B- tree. In fact, B+ trees are often preferred over B- trees for database indexing because they allow efficient traversal through all keys (all keys are stored in the leaves in a sorted manner and leaves are linked for easy traversal).<br>(D) In extendible hashing, the size of the directory is not an array of 2d-1. It is actually an array of 2<sup>d</sup>, where 'd' stands for the global depth."
    },
    {
        q: "In a B-Tree, each node represents a disk block. Suppose one block holds 8192 bytes. Each key uses 32 bytes. In a B-tree of order M there are M – 1 keys. Since each branch is on another disk block. We assume a branch is of 4 bytes. The total memory requirement for a non-leaf node is",
        opts: ["(A) 32 M - 32", "(B) 36 M - 32", "(C) 36 M - 36", "(D) 32 M - 36"],
        ans: 1,
        exp: "<b>(B) 36 M - 32</b><br>Block size = 8192 bytes = 2<sup>13</sup> bytes; Key size = 32 bytes; Block pointer = 4 bytes; Order of the B-tree = M; Number of keys = M − 1.<br>Formula: In a B-Tree, the size of a non-leaf node = M × (Block pointer) + (M − 1) × (key + Record pointer)<br>Calculation: Assuming Record pointer = 0 (since nothing is mentioned about it):<br>Total size = M(4) + (M − 1)(32) = 36 M − 32"
    },
    {
        q: "Consider a B+ tree in which the search key is 12 bytes long, block size is 1024 bytes, record pointer is 10 bytes long and block pointer is 8 bytes long. The maximum number of keys that can be accommodated in each non-leaf node of the tree is ____________.",
        opts: ["(A) 50", "(B) 51", "(C) 52", "(D) 53"],
        ans: 0,
        exp: "<b>(A) 50</b><br>Order of an internal node (non-leaf node) of the tree is the maximum number of children it can have.<br>Data for B+ Tree: Disk block size = D = 1024 bytes, Block pointer = B = 8 bytes, Key field = K = 12 bytes, Record or data pointer = R = 10 bytes, Order = p.<br>Formula: p × B + (p − 1) × K ≤ D<br>Calculation: p × 8 + (p − 1)(12) ≤ 1024 → 8p + 12p − 12 ≤ 1024 → 20p ≤ 1036 → p ≤ 51.8 → p = 51.<br>Number of keys = p − 1 = 51 − 1 = 50."
    },
    {
        q: "B+ Trees are considered BALANCED because",
        opts: ["(A) the lengths of the paths from the root to all leaf nodes are all equal.", "(B) the lengths of the paths from the root to all leaf nodes differ from each other by at most 1.", "(C) the number of children of any two non-leaf sibling nodes differ by at most 1.", "(D) the number of records in any two leaf nodes differ by at most 1."],
        ans: 0,
        exp: "<b>(A) the lengths of the paths from the root to all leaf nodes are all equal.</b><br>"
    },
    {
        q: "__________ is a Self Balancing binary search tree, where the path from the root to the furthest leaf is no more than twice as long as the path from the root to nearest leaf.",
        opts: ["(1) Expression tree", "(2) Game tree", "(3) Red-Black tree", "(4) Threaded tree"],
        ans: 2,
        exp: "<b>(3) Red-Black tree</b><br><b>Red-Black Tree:</b><br>• A Red-Black tree is a type of self-balancing binary search tree. It maintains balance by ensuring that the longest path from the root to a leaf is no more than twice as long as the shortest path from the root to any leaf.<br>• This balancing property ensures that the tree remains approximately balanced, allowing operations such as insertion, deletion, and lookup to be performed in O(log n) time.<br><b>Expression Tree:</b> A binary tree used to represent expressions, not necessarily balanced.<br><b>Game Tree:</b> A tree representation of the possible moves in a game, not a self-balancing binary search tree.<br><b>Threaded Tree:</b> A binary tree in which null pointers are made to point to the in-order predecessor or successor, not specifically self-balancing."
    }
];