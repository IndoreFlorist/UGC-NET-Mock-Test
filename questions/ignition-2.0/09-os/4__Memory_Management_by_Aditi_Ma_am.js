var rawQuestions = [
    {
        q: "Consider the following statements:<br>Statement 1: Using a larger block size in a fixed partition scheme may increase internal fragmentation.<br>Statement 2: Variable partition and segmentation suffer from external fragmentation.<br><br>Which of the following is true?",
        opts: ["a) Only statement 1", "b) Only statement 2", "c) Both statement 1 and statement 2", "d) None of the above"],
        ans: 2,
        exp: "<b>c) Both statement 1 and statement 2</b><br>Internal Fragmentation: When memory is divided into fixed-sized chunks, internal fragmentation occurs. Internal fragmentation occurs when the memory allotted to the process is slightly bigger than the memory needed. The difference between allocated and demanded memory is known as the allocated and demanded memory difference.<br><br>External fragmentation: External fragmentation occurs when a dynamic memory allocation mechanism allocates some memory while leaving a small quantity of useless memory. When there is excessive external fragmentation, the overall amount of memory accessible is significantly reduced. As a result, there is enough memory space to finish a request, but it is not continuous. As a result, it is referred to as exterior fragmentation."
    },
    {
        q: "Which of the following statements is false?",
        opts: ["a) Overlays reduce time requirements.", "b) Overlays reduce memory requirements.", "c) Overlays increase time requirements.", "d) Overlays will not use the complete program simultaneously whenever a process is running."],
        ans: 2,
        exp: "<b>c) Overlays increase time requirements.</b><br>Overlaying means \"the process of transferring a block of program code or other data into internal memory, replacing what is already stored\". The idea behind overlays is that when a process is running, it won't use the entire program at once just a portion of it.<br>Advantage of Overlays:<br>• Overlays reduce time requirements.<br>• Overlays increase memory requirements.<br>Disadvantage of Overlays:<br>• The overlap map must be specified by the programmer.<br>• Programmers must know memory requirements."
    },
    {
        q: "Assume a program with the following memory requirements using overlays:<br><br>A (9 KB) is the root. A has two children: B (8 KB) and C (4 KB).<br>B has two children: D (2 KB) and E (5 KB).<br>C has two children: F (7 KB) and G (6 KB).<br><br>Which of the following paths will let the overlay in OS to load and run this program?",
        opts: ["1. A→C→ G", "2. A→B→ D", "3. A → C → F", "4. A→B→ E"],
        ans: 3,
        exp: "<b>4. A→B→ E</b><br>Total memory requirement:<br>For A → B → D = 9 + 8 + 2 = 19 KB<br>For A → B → E = 9 + 8 + 5 = 22 KB<br>For A → C → F = 9 + 4 + 7 = 20 KB<br>For A → C → G = 9 + 4 + 6 = 19 KB<br>As we can see, the largest program part size is 22 KB. Hence, we need a 22 KB partition to run the given program and it will take the path A → B → E."
    },
    {
        q: "Overlays solves the problem occurring in Fixed Partitioning. Which of the following is that problem?",
        opts: ["a) Internal Fragmentation", "b) External Fragmentation", "c) Limitation of the maximum size of the partition", "d) Supports only a fixed number of processes"],
        ans: 2,
        exp: "<b>c) Limitation of the maximum size of the partition</b><br>Limitation of the maximum size of the partition: The size of the process has to be limited by the maximum size of the partition, hence, if the process size is bigger than the largest partition in the memory, then this will cause a problem. This is solved by the overlays where only that portion of the process is brought to memory which is necessary at the current time.<br>Supports only a fixed number of processes: Only a fixed number of processes are allowed to be executed at a time, that is, only a limited number of processes can be active at a time."
    },
    {
        q: "Consider allocation of memory to a new process. Assume that none of the existing holes in the memory will exactly fit the process's memory requirement. Hence, a new hole of smaller size will be created if allocation is made in any of the existing holes.<br>Which one of the following statements is TRUE?",
        opts: ["a) The hole created by first fit is always larger than the hole created by next fit.", "b) The hole created by worst fit is always larger than the hole created by first fit.", "c) The hole created by best fit is never larger than the hole created by first fit.", "d) The hole created by next fit is never larger than the hole created by best fit."],
        ans: 2,
        exp: "<b>c) The hole created by best fit is never larger than the hole created by first fit.</b><br>Option 1 and Option 4: FALSE. The hole created by first fit may or may not be larger than the hole created by next fit.<br>Option 2: FALSE. The hole created by worst fit is always larger than or equal to the hole created by first fit.<br>Option 3: TRUE. The hole created by best fit could never be larger than the hole created by first fit. Although it may be equal."
    },
    {
        q: "Consider six memory partitions of sizes 200 KB, 400 KB, 600 KB, 500 KB, 300 KB and 250 KB, where KB refers to kilobyte. These partitions need to be allotted to four processes of sizes 357 KB, 210 KB, 468 KB and 491 KB in that order. If the best fit algorithm is used, which partitions are NOT allotted to any process?",
        opts: ["a) 200 KB and 300 KB", "b) 200 KB and 250 KB", "c) 250 KB and 300 KB", "d) 300 KB and 400 KB"],
        ans: 0,
        exp: "<b>a) 200 KB and 300 KB</b><br>Fixed partitions (only one process can reside in one partition):<br>200 KB: empty<br>400 KB: 357 KB<br>600 KB: 491 KB<br>500 KB: 468 KB<br>300 KB: empty<br>250 KB: 210 KB<br>Hence partitions of size 200 KB and 300 KB will not be allotted to any process."
    },
    {
        q: "In contiguous allocation :",
        opts: ["a) each file must occupy a set of contiguous blocks on the disk", "b) each file is a linked list of disk blocks", "c) all the pointers to scattered blocks are placed together in one location", "d) None of these"],
        ans: 0,
        exp: "<b>a) each file must occupy a set of contiguous blocks on the disk</b><br>• Contiguous memory allocation is a method in which a single contiguous section of memory is allocated to a process or file.<br>• All the available memory space resides in the same place together. Each file must occupy a set of contiguous blocks on the disk. That is why it's named Contiguous Memory allocation."
    },
    {
        q: "Consider the following memory schema having dynamic partitioning with holes of sizes: 7 KB, 11 KB, 21 KB, 17 KB, 7 KB, 6 KB, 13 KB and 35 KB (in this order, separated by allocated blocks).<br><br>The number of successive 5 KB requirements that can be satisfied using the first fit algorithm is _______",
        opts: ["a) 19", "b) 20", "c) 21", "d) 22"],
        ans: 2,
        exp: "<b>c) 21</b><br>First Fit: This algorithm searches for the hole that is large enough to accommodate the process and stops at the first found hole.<br>• 7 KB can accommodate 1 requirement.<br>• 11 KB can accommodate 2 requirements.<br>• 21 KB can accommodate 4 requirements.<br>• 17 KB can accommodate 3 requirements.<br>• 7 KB can accommodate 1 requirement.<br>• 6 KB can accommodate 1 requirement.<br>• 13 KB can accommodate 2 requirements.<br>• 35 KB can accommodate 7 requirements.<br>Total requirements = 1 + 2 + 4 + 3 + 1 + 1 + 2 + 7 = 21"
    },
    {
        q: "Consider the following statements:<br>S1: A small page size causes large page tables.<br>S2: Internal fragmentation is increased with small pages.<br>S3: I/O transfers are more efficient with large pages.<br><br>Which of the following is true?",
        opts: ["a) S1 and S2 are true", "b) S1 is true and S2 is false", "c) S2 and S3 are true", "d) S1 is true S3 is false"],
        ans: 1,
        exp: "<b>b) S1 is true and S2 is false</b><br>S1: A small page size causes large page tables. This statement is correct. Smaller page size means more pages required per process. It means large page tables are needed.<br>S2: internal fragmentation is increased with small pages. This statement is incorrect. Internal fragmentation means when process size is smaller than the available space. When pages are small, then available space becomes less and there will be less chances of internal fragmentation.<br>S3: I/O transfers are more efficient with large pages. An I/O system is required to take an application I/O request and send it to the physical device. Transferring of I/O requests are more efficient with large pages. So, given statement is correct."
    },
    {
        q: "Page information in memory is also called as Page Table. The essential contents in each entry of a page table is/are.",
        opts: ["a) Page Access information", "b) Virtual Page number", "c) Page Frame number", "d) Both virtual page number and Page Frame Number"],
        ans: 2,
        exp: "<b>c) Page Frame number</b><br>In paging, physical memory is divided into fixed-size blocks called page frames and logical memory is divided into fixed-size blocks called pages which are of the same size as that of frames.<br>When a process is to be executed, its pages can be loaded into any unallocated frames from the disk.<br>In paging, mapping of logical addresses to physical addresses is performed at the page level.<br>When CPU generates a logical address, it is divided into two parts: page number and offset. Page size is always in the power of 2. Address translation is performed using the page table (mapping table). It stores the frame number allocated to each page and the page number is used as an index to the page table."
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
        exp: "<b>b) 21, 17</b><br>number of pages = P = VAS / PS<br>number of frames = F = PAS / PS<br>Bits required for the virtual page number = ⌈log<sub>2</sub> P⌉<br>Bits required for the physical page number = ⌈log<sub>2</sub> F⌉<br>Calculation:<br>P = 2<sup>32</sup> / 2<sup>11</sup> = 2<sup>21</sup><br>Bits required for the virtual page number = ⌈log<sub>2</sub> 2<sup>21</sup>⌉ = 21<br>F = 2<sup>28</sup> / 2<sup>11</sup> = 2<sup>17</sup><br>Bits required for the physical page number = ⌈log<sub>2</sub> 2<sup>17</sup>⌉ = 17"
    },
    {
        q: "Consider a system with 1K pages and 512 frames and each page is of size 2KB. How many bits are required to represent the virtual address space memory",
        opts: ["a) 20 bits.", "b) 21 bits.", "c) 11 bits.", "d) 16 bits."],
        ans: 1,
        exp: "<b>b) 21 bits.</b><br>Page Size: 2 KB (2<sup>11</sup> bytes)<br>Number of Pages: 1K pages (2<sup>10</sup> pages).<br>Total Addressable Memory:<br>Total addressable memory = Number of pages × Page size<br>= 2<sup>10</sup> pages × 2<sup>11</sup> bytes/page<br>Total addressable memory = 2<sup>21</sup> bytes<br>So, we need 21 bits to represent the virtual address space."
    },
    {
        q: "Consider a system with a total physical memory of 8 GB and total virtual memory of 16 GB. If the system is using 6 GB of physical memory and 10 GB of virtual memory, how much memory is being swapped out?",
        opts: ["a) 2 GB", "b) 4 GB", "c) 6 GB", "d) None of the above"],
        ans: 0,
        exp: "<b>a) 2 GB</b><br>"
    },
    {
        q: "The memory management scheme that allows the processes to be stored non-contiguously in memory :",
        opts: ["a) Spooling", "b) Swapping", "c) Paging", "d) Relocation"],
        ans: 2,
        exp: "<b>c) Paging</b><br>"
    },
    {
        q: "Thrashing",
        opts: ["a) is a natural consequence of virtual memory systems", "b) can always be avoided by swapping", "c) always occurs on large computers", "d) None of these"],
        ans: 3,
        exp: "<b>d) None of these</b><br>• Thrashing happens when a computer's virtual memory resources become saturated, resulting in a persistent state of paging that prevents the most application-level activity from taking place.<br>• Thrashing is a phenomenon in virtual memory schemes when the processor spends most of its time swapping pages, rather than executing instructions.<br>• Thrashing can not always occur on large computers."
    },
    {
        q: "The working set model is used in memory management to implement the concept of:",
        opts: ["a) Thrashing", "b) Segmentation", "c) Principle of locality", "d) Paging"],
        ans: 2,
        exp: "<b>c) Principle of locality</b><br>The working set model: The memory that is being accessed frequently by an application. Same thing is done by principle of locality."
    },
    {
        q: "Which of the following memory allocation scheme suffers from External fragmentation?",
        opts: ["a) Segmentation", "b) Pure demand paging", "c) Swapping", "d) Paging"],
        ans: 0,
        exp: "<b>a) Segmentation</b><br>When a process is given more memory than it needs, internal fragmentation occurs, and only a few areas are left unused. External fragmentation happens when memory blocks exist, but they are not contiguous and can't fill the next memory request. External fragmentation is not a problem with linked and indexed allocation, however, external fragmentation was a concern with contiguous allocation."
    },
    {
        q: "Consider a system with Segmented Paging. Which of the following is NOT true about the system?",
        opts: ["a) Paging is applied on the Segmentation", "b) Segmentation is applied on Paging", "c) Number of entries in the page table of the segment = Number of pages on the segment", "d) None of the above"],
        ans: 1,
        exp: "<b>b) Segmentation is applied on Paging</b><br>• Segmented Paging: In this, the main memory is divided into variable-size segments which are further divided into fixed-sized pages.<br>• Hence, paging is applied to segmented memory and thus, instead of bringing the entire segments into the memory, only the pages of the segment are brought.<br>• This is done to avoid the overhead of bringing large-sized segments into the main memory which will result in low efficiency of memory management.<br>• Pages are smaller than the segments.<br>• Each segment has a page table of its own, hence, a program has multiple page tables.<br>• The logical address is represented as a segmented number, page number, and page offset. Number of entries in the page table of the segment = Number of pages on the segment"
    },
    {
        q: "In the index allocation scheme of blocks to a file, the maximum possible size of the file depends on",
        opts: ["a) the size of the blocks, and the size of the address of the blocks.", "b) the number of blocks used for the index, and the size of the blocks", "c) the size of the blocks, the number of blocks used for the index, and the size of the address of the blocks.", "d) None of the above"],
        ans: 1,
        exp: "<b>b) the number of blocks used for the index, and the size of the blocks</b><br>• In the index allocation method, an index block is assigned to a file, and the index block contains a list of disk block addresses where the file's data blocks are stored.<br>• The maximum possible size of the file will then be determined by the number of disk block addresses the index block can hold (i.e., the number of blocks used for index) and the size of each of those data blocks.<br>• If each entry in the index block points to a unique data block, then the maximum size of the file will be the product of the number of entries in the index block and the size of an individual data block."
    },
    {
        q: "Which of the following is dense index<br>This question was previously asked in",
        opts: ["a) Primary index", "b) Clusters index", "c) Secondary index", "d) Primary non key index"],
        ans: 2,
        exp: "<b>c) Secondary index</b><br>"
    },
    {
        q: "If the file containing the records is sequentially ordered, a ___________ is an index whose search key also defines the sequential order of the file.",
        opts: ["a) Clustering data", "b) Clustering index", "c) Clustering index", "d) Clustering number"],
        ans: 1,
        exp: "<b>b) Clustering index</b><br>If the file containing the records is sequentially ordered, a Clustering index is an index whose search key also defines the sequential order of the file. Clustering indices are also called as primary indices but they do not denote an index on the primary key. Such indices can be built on any search key."
    },
    {
        q: "If an index entry appears for only some of the search key values in the file, it is called as ________",
        opts: ["a) Dense key", "b) Dense index", "c) Sparse key", "d) Sparse index"],
        ans: 3,
        exp: "<b>d) Sparse index</b><br>In a sparse index, an index entry appears for only some of the search key values. Sparse indices can be used only if the relation is stored in the sorted order of the search key i.e. if the index is a clustering index."
    },
    {
        q: "A search key containing more than one attribute is called a _________ search key",
        opts: ["a) Multiple", "b) Multilevel", "c) Composite", "d) Primary"],
        ans: 2,
        exp: "<b>c) Composite</b><br>A search key containing more than one attribute is called as a composite search key. The structure of the index is the same as that of any other index, the only difference being that it is not a single search attribute but a list of attributes."
    },
    {
        q: "Consider the following statements regarding the usage of virtual memory.<br>1. To free user programs from the need to carry out storage allocation and to permit efficient sharing of the available memory space among different users.<br>2. To make program independent of the configuration and capacity of the physical memory for their execution.<br>3. To achieve higher CPU performance.<br>4. To achieve the very low access time and cost per bit that is possible with a memory hierarchy.<br><br>Which of the above are correct?",
        opts: ["a) 1, 2 and 3", "b) 2, 3 and 4", "c) 1, 3 and 4", "d) 1, 2 and 4"],
        ans: 3,
        exp: "<b>d) 1, 2 and 4</b><br>• Physical memory cannot store large programs. So virtual memory is used that provides a larger amount of space to the process.<br>• Some of the portions are stored in the disk storage.<br>• It allows us to extend the use of physical memory by using hard disk space.<br>• It allows us to have memory protection because each virtual address is translated into physical memory.<br>• When the process requires a particular page, it demands the required page.<br>• The page in the storage device is accessed. But storage device is much slower than RAM's, so it affects the performance, i.e. the performance is reduced."
    }
];