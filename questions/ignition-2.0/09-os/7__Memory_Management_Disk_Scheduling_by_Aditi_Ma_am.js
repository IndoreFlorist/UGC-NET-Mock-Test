var rawQuestions = [
    {
        q: "Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I</b></td><td><b>List II</b></td></tr><tr><td>A. RAID Level 2</td><td>I. Block interleaved distribution parity</td></tr><tr><td>B. RAID Level 3</td><td>II. Also known as P+Q redundancy Scheme</td></tr><tr><td>C. RAID Level 5</td><td>III. Bit interleaved parity</td></tr><tr><td>D. RAID Level 6</td><td>IV. Also known as Memory style error correcting code organization</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A→IV, B→III, C→I, D→I", "2. A→III, B→IV, C→I, D→II", "3. A→I, B→III, C→IV, D→II", "4. A→II, B→IV, C→I, D→III"],
        ans: 0,
        exp: "<b>1. A→IV, B→III, C→I, D→I</b><br>RAID 0 → Striped Disk Array without Fault Tolerance (high speed, no redundancy).<br>RAID 1 → Mirroring and Duplexing (data copied on two disks for redundancy).<br>RAID 2 → Error-Correcting Coding (rarely used, uses Hamming code for error correction).<br>RAID 3 → Bit-Interleaved Parity (data striped at bit-level with dedicated parity disk).<br>RAID 4 → Dedicated Parity Drive (block-level striping with single parity disk).<br>RAID 5 → Block Interleaved Distributed Parity (parity distributed across disks, balanced performance and redundancy).<br>RAID 6 → Independent Data Disks with Double Parity (like RAID 5 but with extra fault tolerance, survives two disk failures)."
    },
    {
        q: "Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List-I</b></td><td><b>List II</b></td></tr><tr><td>A. Clustered Page Table</td><td>I. Generally considered inappropriate for 64 bit architectures.</td></tr><tr><td>B. Hierarchical Page Table</td><td>II. Has only entry for each real page (or frame) of memory.</td></tr><tr><td>C. Segmentation</td><td>III. Useful for Sparse address spaces.</td></tr><tr><td>D. Inverted Page Table</td><td>IV. Supports a user view of the system.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A→III, B→IV, C→II, D→I", "2. A→III, B→I, C→IV, D→II", "3. A→II, B→III, C→I, D→IV", "4. A→IV, B→III, C→II, D→I"],
        ans: 1,
        exp: "<b>2. A→III, B→I, C→IV, D→II</b><br><b>Clustered Page Table:</b> A variation of the hashed page table (used in large address spaces, e.g., 64-bit). Instead of storing a single entry for each virtual page, it stores a cluster (multiple contiguous virtual pages) that map to a cluster of physical frames. Keywords: used in large virtual address spaces; hashing reduces lookup time; cluster = group of pages handled together; efficient for sparse memory usage.<br><b>Hierarchical Page Table:</b> A multilevel page table structure that breaks the page table into smaller pieces to reduce memory overhead. The virtual address is divided into multiple parts (e.g., page directory, page table, offset). Keywords: multilevel structure (2-level, 3-level, 4-level); reduces page table size; virtual address split (e.g., 10 bits → directory, 10 bits → table, 12 bits → offset); more memory efficient than a single-level table.<br><b>Segmentation:</b> Memory management scheme where memory is divided into variable-sized segments (like code, data, stack). Each segment has a base address and a limit. Keywords: segment = logical unit (function, array, stack); each segment → base + limit register; supports protection &amp; sharing; suffers from external fragmentation.<br><b>Inverted Page Table:</b> Instead of keeping a page table for every process, there is a single global page table indexed by physical frames. Each entry tells which virtual page (and process) is stored in that frame. Keywords: one table for whole system; entry → (PID + virtual page → physical frame); saves memory space in large address spaces; requires hashing/search → slower lookups without TLB."
    },
    {
        q: "Which of the followings shows the correct hierarchy of a layered file system in an operating system<br>A. Logical File System<br>B. File Organization Module<br>C. Basic File System<br>D. I/O Control<br>E. Application Programs<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A→B→D→C→E", "2. D→E→C→A→B", "3. E→A→B→C→D", "4. E→C→B→A→D"],
        ans: 2,
        exp: "<b>3. E→A→B→C→D</b><br><b>File-System Structure (Layered Design)</b><br>1. I/O Control (Lowest Layer): Contains device drivers &amp; interrupt handlers. Executes low-level commands like \"read/write block 123\".<br>2. Basic File System: Issues requests to the I/O control layer. Manages buffering, caching, and scheduling of I/O. Deals with file blocks (logical block addressing).<br>3. File-Organization Module: Keeps track of file blocks (which logical block belongs to which file). Handles free-space management (unused disk blocks).<br>4. Logical File System (Top Layer): Manages metadata (directories, file attributes). Uses File Control Blocks (FCBs) to store file info. Provides protection and access control.<br>Order: application programs → logical file system → file-organization module → basic file system → I/O control → devices."
    },
    {
        q: "What is the total swap time (Swap in &amp; Swap out) in a system for a 15 MB process with a transfer rate of 30 MBps. Given that there is an average latency of 12 ms, however no head seeks involved.",
        opts: ["1. 1.024 sec", "2. 1.00 sec", "3. 0.512 sec", "4. 12 sec"],
        ans: 0,
        exp: "<b>1. 1.024 sec</b><br>Process size = 15 MB<br>Transfer rate = 30 MB/s<br>Latency = 12 ms = 0.012 s<br>Swap operation = Swap out + Swap in = 2 × 15 MB = 30 MB<br>Transfer time = Total data / Transfer rate = 30 MB / 30 MB/s = 1.0 sec<br>Each operation (swap out + swap in) has latency = 0.012 s, so total latency = 2 × 0.012 = 0.024 s<br>Total time = 1.0 + 0.024 = 1.024 sec"
    },
    {
        q: "If the virtual memory size is 32 MB and a physical memory size is 4MB with a page size of 2KB, Calculate the number of frames available in physical memory",
        opts: ["1. 1024", "2. 2048", "3. 3072", "4. 4096"],
        ans: 1,
        exp: "<b>2. 2048</b><br>Given: Physical memory size = 4 MB, Page size = 2 KB<br>Convert into same units: 4 MB = 4 × 1024 = 4096 KB<br>Number of Frames = Physical Memory Size / Page Size = 4096 / 2 = 2048"
    },
    {
        q: "Consider a disk queue with requests for I/O to blocks on cylinders 98, 183, 37, 122, 14, 124, 65, 67 in that order. If the disk head is initially at cylinder 53. Using SSTF scheduling.<br><br>Arrange the following movement of head position in order of transversal.<br><br>A. 67<br>B. 37<br>C. 65<br>D. 98<br>E. 14<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B, C, D, E", "2. C, A, E, B, D", "3. C, A, B, E, D", "4. A, C, D, B, E"],
        ans: 2,
        exp: "<b>3. C, A, B, E, D</b><br>With SSTF, the head always moves to the nearest pending request. From 53 the nearest is 65 (C), then 67 (A), then 37 (B), then 14 (E), and finally 98 (D)."
    },
    {
        q: "Indexed/grouped allocation is useful as:<br><br>(A) It supports both sequential and direct access.<br>(B) Entire block is available for data.<br>(C) It does not require lots of space for keeping pointers.<br>(D) No external fragmentation.<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A) Only", "(2) (B) and (C) Only", "(3) (B) Only", "(4) (A), (B) and (D) Only"],
        ans: 3,
        exp: "<b>(4) (A), (B) and (D) Only</b><br>(A) It supports both sequential and direct access. Indexed/grouped allocation allows both sequential (one block after another) and direct (jumping straight to a desired block) access to data.<br>(B) Entire block is available for data. In indexed allocation, the entire block is indeed available for storing data. The index block, a separate entity, contains the pointers to the data blocks.<br>(D) No external fragmentation. Indexed allocation helps prevent external fragmentation as all files have their own index block that keeps track of the blocks associated with it."
    },
    {
        q: "Consider a disk with 16384 bytes per track having a rotation time of 16 msec and average seek time of 40 msec. What is the time in msec to read a block of 1024 bytes from this disk?",
        opts: ["(A) 57 msec", "(B) 49 msec", "(C) 48 msec", "(D) 17 msec"],
        ans: 1,
        exp: "<b>(B) 49 msec</b><br>Transfer time = (1024 bytes × 16 ms) / 16384 bytes = 1 msec<br>Rotational latency = 16 msec / 2 = 8 msec<br>Total time = seek + rotational latency + transfer time = 40 + 8 + 1 = 49 msec"
    },
    {
        q: "Suppose for a process P, reference to pages in order are 1,2,4,5,2,1,2,4. Assume that main memory can accommodate 3 pages and the main memory has already 1 and 2 in the order 1 – first, 2 – second. At this moment, assume FIFO Page Replacement Algorithm is used then the number of page faults that occur to complete the execution of process P is",
        opts: ["(1) 4", "(2) 3", "(3) 5", "(4) 6"],
        ans: 2,
        exp: "<b>(3) 5</b><br>The requests are:<br>1 → 1|2 (hit)<br>2 → 1|2 (hit)<br>4 → 1|2|4, Page fault = 1<br>5 → 2|4|5, Page fault = 2<br>2 → 2|4|5 (hit)<br>1 → 4|5|1, Page fault = 3<br>2 → 5|1|2, Page fault = 4<br>4 → 1|2|4, Page fault = 5"
    },
    {
        q: "Consider a disk queue with requests for I/O to blocks on cylinders 47, 38, 121, 191, 87, 11, 92, 10. The C-LOOK scheduling algorithm is used. The head is initially at cylinder number 63, moving towards larger cylinder numbers on its servicing pass. The cylinders are numbered from 0 to 199. The total head movement (in number of cylinders) incurred while servicing these requests is______.",
        opts: ["a) 346", "b) 567", "c) 456", "d) 345"],
        ans: 0,
        exp: "<b>a) 346</b><br>The head services 87, 92, 121 and 191 moving upward, then jumps to 10 and services 11, 38, 47.<br>Total head movement = (87 – 63) + (92 - 87) + (121 - 92) + (191 - 121) + (191 – 10) + (11 – 10) + (38 - 11) + (47 - 38)<br>= 24 + 5 + 29 + 70 + 181 + 1 + 27 + 9<br>= 346 (in number of cylinders)"
    },
    {
        q: "Recall that Belady’s anomaly is that the page-fault rate may increase as the number of allocated frames increases. Now, consider the following statements:<br>S1: Random page replacement algorithm (where a page chosen at random is replaced) Suffers from Belady’s anomaly<br>S2: LRU page replacement algorithm suffers from Belady’s anomaly<br>Which of the following is CORRECT?",
        opts: ["a) S1 is true, S2 is true", "b) S1 is true, S2 is false", "c) S1 is false, S2 is true", "d) S1 is false, S2 is false"],
        ans: 1,
        exp: "<b>b) S1 is true, S2 is false</b><br>Random page replacement can suffer from Belady’s anomaly, whereas LRU is a stack algorithm and does not suffer from it."
    },
    {
        q: "Consider six memory partitions of sizes 200 KB, 400 KB, 600 KB, 500 KB, 300 KB and 250 KB, where KB refers to kilobyte. These partitions need to be allotted to four processes of sizes 357 KB, 210 KB, 468 KB and 491 KB in that order. If the best fit algorithm is used, which partitions are NOT allotted to any process?",
        opts: ["a) 200 KB and 300 KB", "b) 200 KB and 250 KB", "c) 250 KB and 300 KB", "d) 300 KB and 400 KB"],
        ans: 0,
        exp: "<b>a) 200 KB and 300 KB</b><br>Best fit: 357 KB → 400 KB, 210 KB → 250 KB, 468 KB → 500 KB, 491 KB → 600 KB.<br>Fixed partitions (only one process can reside in one partition). Hence partitions of size 200 KB and 300 KB will not be allotted to any process."
    },
    {
        q: "What is the size of the physical address space in a paging system which has a page table containing 64 entries of 11 bit each (including valid/invalid bit) and a page size of 512 bytes?",
        opts: ["a) 2<sup>11</sup>", "b) 2<sup>15</sup>", "c) 2<sup>19</sup>", "d) 2<sup>20</sup>"],
        ans: 2,
        exp: "<b>c) 2<sup>19</sup></b><br>page table entries = 64<br>page table entry size = 11 bit<br>page size = 512 bytes<br>Size of physical address = paging bits + offset bits<br>paging bits = 11 - 1 = 10 (as 1 valid bit is also included)<br>offset bits = log<sub>2</sub>(512) = 9 bits<br>size of physical address = 10 + 9 = 19 bits<br>Hence the correct answer is 2<sup>19</sup>."
    },
    {
        q: "If a processor has 32-bit virtual address, 28-bit physical address, 2 kB page size. How many bits are required for the virtual, physical page number?",
        opts: ["a) 17, 21", "b) 21, 17", "c) 16, 10", "d) None of the above"],
        ans: 1,
        exp: "<b>b) 21, 17</b><br>number of pages = P = VAS / PS<br>number of frames = F = PAS / PS<br>Bits required for the virtual page number = ⌈log<sub>2</sub> P⌉<br>Bits required for the physical page number = ⌈log<sub>2</sub> F⌉<br><b>Calculation:</b><br>P = 2<sup>32</sup> / 2<sup>11</sup> = 2<sup>21</sup>, so bits required for the virtual page number = 21<br>F = 2<sup>28</sup> / 2<sup>11</sup> = 2<sup>17</sup>, so bits required for the physical page number = 17"
    },
    {
        q: "Thrashing",
        opts: ["a) is a natural consequence of virtual memory systems", "b) can always be avoided by swapping", "c) always occurs on large computers", "d) None of these"],
        ans: 3,
        exp: "<b>d) None of these</b><br>Thrashing happens when a computer's virtual memory resources become saturated, resulting in a persistent state of paging that prevents the most application-level activity from taking place.<br>Thrashing is a phenomenon in virtual memory schemes when the processor spends most of its time swapping pages, rather than executing instructions.<br>Thrashing can not always occur on large computers."
    },
    {
        q: "Consider a system with Segmented Paging. Which of the following is NOT true about the system?",
        opts: ["a) Paging is applied on the Segmentation", "b) Segmentation is applied on Paging", "c) Number of entries in the page table of the segment = Number of pages on the segment", "d) None of the above"],
        ans: 1,
        exp: "<b>b) Segmentation is applied on Paging</b><br>Segmented Paging: In this, the main memory is divided into variable-size segments which are further divided into fixed-sized pages.<br>Hence, paging is applied to segmented memory and thus, instead of bringing the entire segments into the memory, only the pages of the segment are brought.<br>This is done to avoid the overhead of bringing large-sized segments into the main memory which will result in low efficiency of memory management.<br>Pages are smaller than the segments.<br>Each segment has a page table of its own, hence, a program has multiple page tables.<br>The logical address is represented as a segmented number, page number, and page offset. Number of entries in the page table of the segment = Number of pages on the segment."
    },
    {
        q: "In the index allocation scheme of blocks to a file, the maximum possible size of the file depends on",
        opts: ["a) the size of the blocks, and the size of the address of the blocks.", "b) the number of blocks used for the index, and the size of the blocks", "c) the size of the blocks, the number of blocks used for the index, and the size of the address of the blocks.", "d) None of the above"],
        ans: 1,
        exp: "<b>b) the number of blocks used for the index, and the size of the blocks</b><br>In the index allocation method, an index block is assigned to a file, and the index block contains a list of disk block addresses where the file's data blocks are stored.<br>The maximum possible size of the file will then be determined by the number of disk block addresses the index block can hold (i.e., the number of blocks used for index) and the size of each of those data blocks.<br>If each entry in the index block points to a unique data block, then the maximum size of the file will be the product of the number of entries in the index block and the size of an individual data block."
    }
];