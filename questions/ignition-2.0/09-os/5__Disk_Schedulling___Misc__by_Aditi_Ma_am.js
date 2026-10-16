var rawQuestions = [
    {
        q: "If main memory access time is 400 μs, TLB access time is 50 μs, considering TLB hit as 90%, what will be the overall access time?",
        opts: ["a) 800 μs", "b) 490 μs", "c) 485 μs", "d) 450 μs"],
        ans: 1,
        exp: "<b>b) 490 μs</b><br>TLB hit ratio = p = 90% = 0.9<br>TLB access time = t = 50 μs<br>Memory access time = m = 400 μs<br>Effective memory access time = EMAT<br><u>Formula:</u> EMAT = p × (t + m) + (1 – p) × (t + m + m)<br><u>Calculation:</u> EMAT = 0.9 × (50 + 400) + (1 – 0.9) × (50 + 400 + 400)<br>EMAT = 490 μs<br>∴ the overall access time is 490 μs"
    },
    {
        q: "A CPU generates 32-bit virtual addresses. The page size is 8 KB. The processor has a translation look-aside buffer (TLB) which can hold a total of 128 page table entries and is 4-way set associative. The minimum size of the TLB tag is:",
        opts: ["a) 11 bits", "b) 13 bits", "c) 14 bits", "d) 20 bits"],
        ans: 2,
        exp: "<b>c) 14 bits</b><br>Size of a page = 8KB = 2<sup>13</sup>.<br>Total number of bits needed to address a page frame = 32 – 13 = 19<br>Since TLB is 4 way set associative, number of sets in cache = 2<sup>7</sup>/4 = 2<sup>5</sup>.<br>So 5 bits are needed to address a set, and 14 (19 – 5) bits are needed for tag."
    },
    {
        q: "Which of the following Page Replacement Algorithm suffers from the Belady’s anomaly ?",
        opts: ["a) LRU", "b) Optimal page Replacement", "c) FIFO", "d) Both LRU and FIFO"],
        ans: 2,
        exp: "<b>c) FIFO</b><br>• FIFO (First-In-First-Out) is a page replacement algorithm that suffers from Belady's anomaly.<br>• Belady's anomaly refers to the counterintuitive situation where increasing the number of page frames results in an increase in the number of page faults.<br>• In the FIFO algorithm, pages are replaced in the order they arrive, which can lead to suboptimal page replacement decisions.<br>• Belady's anomaly is not observed in other algorithms like LRU (Least Recently Used) and Optimal Page Replacement."
    },
    {
        q: "Consider a system with three frames in memory and following memory references in the working set<br><b>2 1 2 3 5 4 1 3 4 2 1</b><br>How many page fault will be there if we use second chance page replacement algorithm ?",
        opts: ["a) 7", "b) 8", "c) 9", "d) 10"],
        ans: 0,
        exp: "<b>a) 7</b><br>"
    },
    {
        q: "In which one of the following page replacement algorithms, it is possible for the page fault rate to increase even when the number of allocated frames increases?",
        opts: ["a) LRU (Least Recently Used)", "b) OPT (Optimal Page Replacement)", "c) MRU (Most Recently Used)", "d) FIFO (First In First Out)"],
        ans: 3,
        exp: "<b>d) FIFO (First In First Out)</b><br>"
    },
    {
        q: "The sequence of steps for a page replacement algorithm will be :<br><br>A. find a frame that is not currently being used<br>B. change the page table<br>C. use freed frame<br>D. no frame is free<br>E. free a frame<br><br>Choose the correct answer from the options given below :",
        opts: ["a) D, A, E, B, C", "b) E, B, A, C, D", "c) B, E, A, D, C", "d) D, E, B, A, C"],
        ans: 0,
        exp: "<b>a) D, A, E, B, C</b><br>D. No frame is free: Check if there are no free frames available.<br>A. Find a frame that is not currently being used: If no free frame is available, identify a frame that can be replaced (one that is not currently in use).<br>E. Free a frame: If a frame is found that is not currently being used, free this frame by writing its contents to disk if necessary.<br>B. Change the page table: Update the page table to reflect the fact that the new page will be loaded into the freed frame.<br>C. Use freed frame: Finally, use the freed frame to load the new page."
    },
    {
        q: "Consider the following statements:<br><br>S1: LRU page replacement algorithm suffers from the belady's anomaly<br>S2: Shortest remaining time first scheduling may cause starvations<br>S3: Stack is shared by all threads in a process",
        opts: ["a) S1, S2 and S3 are true", "b) S1, S3 false and S2 is true", "c) S1, S2 are false and S3 is true", "d) S1, S2 and S3 are false"],
        ans: 1,
        exp: "<b>b) S1, S3 false and S2 is true</b><br>S1: LRU (Least Recently Used) page replacement algorithm suffers from belady's anomaly. False - The LRU page replacement algorithm does not suffer from Belady's anomaly. Belady's anomaly is the phenomenon where increasing the number of page frames results in an increase in the number of page faults. This anomaly is typically associated with the FIFO (First-in, First-out) page replacement algorithm, not with LRU.<br>S2: Shortest remaining time first scheduling may cause starvations. True - The Shortest Remaining Time First (SRTF) scheduling algorithm can indeed cause starvation. This happens when short processes keep coming. This can indefinitely postpone the execution of longer processes, leading to their starvation.<br>S3: Stack is shared by all threads in a process. False - In a multithreaded process, each thread has its own separate stack space. This is necessary to keep track of the execution state for each individual thread. Other parts of the process such as the heap, global variables, and code segment are shared among all threads."
    },
    {
        q: "Recall that Belady’s anomaly is that the page-fault rate may increase as the number of allocated frames increases. Now, consider the following statements:<br>S1: Random page replacement algorithm (where a page chosen at random is replaced) Suffers from Belady’s anomaly<br>S2: LRU page replacement algorithm suffers from Belady’s anomaly<br>Which of the following is CORRECT?",
        opts: ["a) S1 is true, S2 is true", "b) S1 is true, S2 is false", "c) S1 is false, S2 is true", "d) S1 is false, S2 is false"],
        ans: 1,
        exp: "<b>b) S1 is true, S2 is false</b><br>"
    },
    {
        q: "A system uses FIFO policy for page replacement. It has 4 page frames with no pages loaded to begin with. The system first accesses 100 distinct pages in some order and then accesses the same 100 pages but now in the reverse order. How many page faults will occur?",
        opts: ["a) 196", "b) 192", "c) 197", "d) 195"],
        ans: 0,
        exp: "<b>a) 196</b><br>Given that page frame size = 4<br>As there are 100 distinct pages which are first accessed → 100 page faults<br>when it accesses the same 100 pages but now in the reverse order → (100-4) Because page frame size is four.<br>Therefore, Total number of page faults = 100 + (100-4) = 196"
    },
    {
        q: "A system uses FIFO policy for page replacement. It has 4 page frames with no pages loaded to begin with. The system first accesses 50 distinct pages in some order and then accesses the same 50 pages in reverse order. How many page faults will occur?",
        opts: ["a) 96", "b) 100", "c) 97", "d) 92"],
        ans: 0,
        exp: "<b>a) 96</b><br>Page frames = 4<br>Pages: 1, 2, 3, 4 .... 45, 46, 47, 48, 49, 50, 50(H), 49(H), 48(H), 47(H), 46, 45, .....4, 3, 2, 1<br>First 50-page accesses will cause page fault but in reverse order page number 50, 49, 48, and 47 will not cause a page fault.<br>Hence total page faults are 50 + 46."
    },
    {
        q: "Consider a main memory with five page frames and the following sequence of page references: 3, 8, 2, 3, 9, 1, 6, 3, 8, 9, 3, 6, 2, 1, 3. Which one of the following is true with respect to page replacement policies First In First Out (FIFO) and Least Recently Used (LRU)?",
        opts: ["a) Both incur the same number of page faults", "b) FIFO incurs 2 more page faults than LRU", "c) LRU incurs 2 more page faults than FIFO", "d) FIFO incurs 1 more page faults than LRU"],
        ans: 0,
        exp: "<b>a) Both incur the same number of page faults</b><br>LRU: 9 page faults.<br>FIFO: 9 page faults."
    },
    {
        q: "A computer has twenty physical page frames which contain pages numbered 101 through 120. Now a program accesses the pages numbered 1, 2, …, 100 in that order, and repeats the access sequence THRICE. Which one of the following page replacement policies experiences the same number of page faults as the optimal page replacement policy for this program?",
        opts: ["a) Least-recently-used", "b) First-in-first-out", "c) Last-in-first-out", "d) Most-recently-used"],
        ans: 3,
        exp: "<b>d) Most-recently-used</b><br>Optimal: 1 to 100 all are page faults (100); 20 to 99 all are page faults (80); 19 to 98 all are page faults (80); 18 to 97 all are page faults (80). Total = 340.<br>FIFO: All are page faults so total 400 page faults.<br>LRU: Same as FIFO so total 400 page faults.<br>Last in first out (LIFO): In first sequence all 100 are page faults; in second, third and fourth sequences all 20 to 100 are page faults (81 each). Total 343 page faults.<br>Most recently used (MRU): 1 to 100 all are page faults (100); 20 to 99 (80); 19 to 98 (80); 18 to 97 (80). MRU has total 340 page faults, same as Optimal."
    },
    {
        q: "The rotational latency required in reading a block of data from a disk to memory along with seek time and transfer time is",
        opts: ["a) the total time required for the platter to rotate the right sector under the head", "b) the total time required for read and write head to move in the correct position over the appropriate track", "c) the total time required for the platter to complete its full rotation", "d) None of the above"],
        ans: 2,
        exp: "<b>c) the total time required for the platter to complete its full rotation</b><br>• Rotational latency refers to the delay waiting for the rotation of the disk to bring the required disk sector under the read-write head.<br>• It is a part of the total time to read/write data to/from the disk, which includes seek time, rotational latency, and transfer time.<br>• The rotational latency is approximately equal to half the time of a full rotation of the disk platter."
    },
    {
        q: "If the disk head is located initially at 32, find the number of disk moves required with FCFS if the disk queue of I/O blocks requests are 98, 37, 14, 124, 65, 100.",
        opts: ["a) 354", "b) 239", "c) 322", "d) 200"],
        ans: 0,
        exp: "<b>a) 354</b><br><u>Calculation:</u><br>Total Head movements = (98 - 32) + (98 - 37) + (37 - 14) + (124 - 14) + (124 - 65) + (100 - 65)<br>Total Head movements to serve all requests = 66 + 61 + 23 + 110 + 59 + 35 = 354"
    },
    {
        q: "Match List I with List - II.<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List - I (operating system concepts)</b></td><td><b>List - II (characteristics)</b></td></tr><tr><td>A. Paging</td><td>I. Evicts least recently used process</td></tr><tr><td>B. LRU (Least Recently Used)</td><td>II. Extends physical memory</td></tr><tr><td>C. C-SCAN</td><td>III. Logical to physical mapping</td></tr><tr><td>D. Virtual Memory</td><td>IV. Circular disk access</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["a) (A) - (III), (B) - (IV), (C) - (I), (D) - (II)", "b) (A) - (III), (B) - (I), (C) - (IV), (D) - (II)", "c) (A) - (I), (B) - (III), (C) - (IV), (D) - (II)", "d) (A) - (I), (B) - (IV), (C) - (III), (D) - (II)"],
        ans: 1,
        exp: "<b>b) (A) - (III), (B) - (I), (C) - (IV), (D) - (II)</b><br>"
    },
    {
        q: "There are 200 tracks on a disk platter and the pending requests have come in the order - 36, 69, 167, 76, 42, 51, 126, 12, and 199, Assume the arm is located at the 100th track and moving towards track 200. If the sequence of disc access is 126, 167, 199, 12, 36, 42, 51, 69, and 76 then which disc access scheduling policy is used?",
        opts: ["a) Elevator Shorter", "b) Seek time First", "c) C-SCAN", "d) First Come First Served"],
        ans: 2,
        exp: "<b>c) C-SCAN</b><br>"
    },
    {
        q: "One disk queue with requests for I/O to blocks on cylinders. The Request are in the following manner: 98 183 37 122 14 124 65 67 Considering SSTF (shortest seek time first) scheduling, the total number of head movements is, if the disk head of initially at 53 is:",
        opts: ["a) 236", "b) 246", "c) 220", "d) 240"],
        ans: 0,
        exp: "<b>a) 236</b><br>Order of service: 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183<br>Total number of head movements = (67-53) + (67-14) + (183-14) = 236"
    },
    {
        q: "Match the following.<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I</b></td><td><b>List II</b></td></tr><tr><td>I. Stack Algorithm</td><td>P. Deadlock</td></tr><tr><td>II. Elevator Algorithm</td><td>Q. Disk Scheduling</td></tr><tr><td>III. Priority Scheduling Algorithm</td><td>R. Page Replacement</td></tr><tr><td>IV. Havender’s Algorithm</td><td>S. CPU Scheduling</td></tr></table>",
        opts: ["a) I – R, II – Q, III – S, IV – P", "b) I – Q, II – R, III – S, IV – P", "c) I – R, II – Q, III – P, IV – S", "d) I – Q, II – R, III – P, IV – S"],
        ans: 0,
        exp: "<b>a) I – R, II – Q, III – S, IV – P</b><br>"
    },
    {
        q: "In _______ disk scheduling algorithm, the disk head moves from one end to other end of the disk, serving the requests along the way. When the head reaches the other end, it immediately returns to the beginning of the disk without serving any requests on the return trip.",
        opts: ["a) LOOK", "b) SCAN", "c) C - LOOK", "d) C - SCAN"],
        ans: 3,
        exp: "<b>d) C - SCAN</b><br>"
    },
    {
        q: "Consider a disk queue with requests for I/O to blocks on cylinders 47, 38, 121, 191, 87, 11, 92, 10. The C-LOOK scheduling algorithm is used. The head is initially at cylinder number 63, moving towards larger cylinder numbers on its servicing pass. The cylinders are numbered from 0 to 199. The total head movement (in number of cylinders) incurred while servicing these requests is______.",
        opts: ["a) 346", "b) 567", "c) 456", "d) 345"],
        ans: 0,
        exp: "<b>a) 346</b><br>The total head movement incurred while servicing these requests:<br>= (87 – 63) + (92 - 87) + (121 - 92) + (191 - 121) + (191 – 10) + (11 – 10) + (38 - 11) + (47 - 38)<br>= 24 + 5 + 29 + 70 + 181 + 1 + 27 + 9<br>= 346 (in number of cylinders)"
    },
    {
        q: "Consider a disk with 16384 bytes per track having a rotation time of 16 msec and average seek time of 40 msec. What is the time in msec to read a block of 1024 bytes from this disk?",
        opts: ["(A) 57 msec", "(B) 49 msec", "(C) 48 msec", "(D) 17 msec"],
        ans: 1,
        exp: "<b>(B) 49 msec</b><br>Transfer time = ((1024 bytes * 16 ms) / (16384 bytes)) = 1 msec<br>Rotational latency = 16 msec / 2 = 8 msec<br>Total time = seek + rotational latency + transfer time<br>= 40 + 8 + 1 = 49 msec"
    },
    {
        q: "Suppose for a process P, reference to pages in order are 1,2,4,5,2,1,2,4. Assume that main memory can accommodate 3 pages and the main memory has already 1 and 2 in the order 1 – first, 2 – second. At this moment, assume FIFO Page Replacement Algorithm is used then the number of page faults that occur to complete the execution of process P is",
        opts: ["(1) 4", "(2) 3", "(3) 5", "(4) 6"],
        ans: 2,
        exp: "<b>(3) 5</b><br>The requests are:<br>1 → 1|2<br>2 → 1|2<br>4 → 1|2|4, Page fault = 1<br>5 → 2|4|5, Page fault = 2<br>2 → 2|4|5, Page fault = 2<br>1 → 4|5|1, Page fault = 3<br>2 → 5|1|2, Page fault = 4<br>4 → 1|2|4, Page fault = 5"
    },
    {
        q: "In ............ allocation method for disk block allocation in a file system, insertion and deletion of blocks in a file is easy.",
        opts: ["(A) Index", "(B) Linked", "(C) Contiguous", "(D) Bit Map"],
        ans: 1,
        exp: "<b>(B) Linked</b><br>In linked allocation method for disk block allocation in a file system, insertion and deletion of blocks in a file is easy."
    },
    {
        q: "Suppose that the time to do a null remote procedure call (RPC) (i.e, 0 data bytes) is 1.0 msec, with an additional 1.5 msec for every 1K of data. How long does it take to read 32 K from the file server as 32 1K RPCs?",
        opts: ["(A) 49 msec", "(B) 80 msec", "(C) 48 msec", "(D) 100 msec"],
        ans: 1,
        exp: "<b>(B) 80 msec</b><br>A single 32K RPC takes 1.5*32 + 1.0 = 49.0 msec<br>32 1K RPCs take 1.5*32 + 1.0*32 = 80.0 msec"
    },
    {
        q: "In a file allocation system, the following allocation schemes are used:<br><br>A. Contiguous<br>B. Indexed<br>C. Linked allocation<br><br>Which of the allocation scheme(s) given above will not suffer from external fragmentation? Choose the correct answer from the options given below:",
        opts: ["a) A and B only", "b) A only", "c) B and C only", "d) C only"],
        ans: 2,
        exp: "<b>c) B and C only</b><br>In contiguous allocation there is always possibility of external fragmentation. Both indexed and linked allocation are free from external fragmentation."
    },
    {
        q: "Match List I with List II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td colspan=\"2\"><b>LIST I</b></td><td colspan=\"2\"><b>LIST II</b></td></tr><tr><td>A.</td><td>RAID level 2</td><td>I.</td><td>Bit interleaved parity</td></tr><tr><td>B.</td><td>RAID level 4</td><td>II.</td><td>Block interleaved distributed parity</td></tr><tr><td>C.</td><td>RAID level 5</td><td>III.</td><td>Error correcting parity</td></tr><tr><td>D.</td><td>RAID level 3</td><td>IV.</td><td>Block interleaved parity</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["a) A - IV, B - III, C - I, D - II", "b) A - III, B - IV, C - II, D - I", "c) A - III, B - I, C - II, D - IV", "d) A - I, B - III, C - IV, D - I"],
        ans: 1,
        exp: "<b>b) A - III, B - IV, C - II, D - I</b><br>▪ RAID level 2 (III - Error correcting parity): RAID 2 uses an error-correcting code known as Hamming code, which is a set of parity bits for error detection and correction. Each bit of data is written to a separate disk drive in the array, and corresponding parity bits are written to additional drives, which allows the error correction to occur.<br>▪ RAID level 4 (IV - Block interleaved parity): In RAID 4, data is split into blocks and written across multiple drives in an array (i.e., block-level striping). But unlike other RAID levels, RAID 4 has a dedicated disk for storing parity information. This configuration allows for high read data transaction rates because the data blocks and the parity are stored on different drives.<br>▪ RAID level 5 (II - Block interleaved distributed parity): The parity information, which is used for data redundancy, is not written to a single, dedicated drive as in RAID 4. Instead, it is interspersed across all the drives in the array. This leads to a system where read and write operations can occur simultaneously on multiple drives, improving overall performance compared to RAID 4.<br>▪ RAID level 3 (I - Bit interleaved parity): RAID 3 is similar to RAID 2 but it uses a simpler parity calculation. Data is split at the bit level and written across the drives in the array (i.e., bit-level striping) with parity being stored on a dedicated drive."
    },
    {
        q: "Indexed/grouped allocation is useful as:<br><br>(A) It supports both sequential and direct access.<br>(B) Entire block is available for data.<br>(C) It does not require lots of space for keeping pointers.<br>(D) No external fragmentation.<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A) Only", "(2) (B) and (C) Only", "(3) (B) Only", "(4) (A), (B) and (D) Only"],
        ans: 3,
        exp: "<b>(4) (A), (B) and (D) Only</b><br>(A) It supports both sequential and direct access. Indexed/grouped allocation allows both sequential (one block after another) and direct (jumping straight to a desired block) access to data.<br>(B) Entire block is available for data. In indexed allocation, the entire block is indeed available for storing data. The index block, a separate entity, contains the pointers to the data blocks.<br>(D) No external fragmentation. Indexed allocation helps prevent external fragmentation as all files have their own index block that keeps track of the blocks associated with it."
    }
];
