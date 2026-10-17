var rawQuestions = [
    {
        q: "Which of the following is correct about Real time operating system.<br><br>A. It permits creation of multiple processes within an application.<br>B. It does not permit priorities to be assigned to processes.<br>C. It permits a programmer to define interrupts and interrupt processing routines.<br>D. It does not uses priority driver or deadline oriented scheduling.<br>E. It provides fault tolerance and graceful degradation capabilities.<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B & D Only", "2. B, C & D Only", "3. A, C & E Only", "4. B, D & E Only"],
        ans: 2,
        exp: "<b>3. A, C & E Only</b><br>Real-Time Operating System (RTOS): deterministic response time, priority-based scheduling, deadline-oriented execution, fast interrupt handling, multitasking support, high reliability and stability, fault tolerance &amp; graceful degradation, minimal latency, efficient resource management."
    },
    {
        q: "Match the LIST-I with LIST-II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>LIST-I</b></td><td><b>LIST-II</b></td></tr><tr><td>A. System Call</td><td>I. A process requests a function that is located in a different computer system</td></tr><tr><td>B. Preemption</td><td>II. A request that a program makes to the operating system.</td></tr><tr><td>C. Real time application</td><td>III. The forced deallocation of the CPU from a process.</td></tr><tr><td>D. Remote procedure call</td><td>IV. A program that responds to activities in an external within a maximum time determined by the external system.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-I, B-II, C-III, D-IV", "2. A-II, B-III, C-IV, D-I", "3. A-IV, B-III, C-II, D-I", "4. A-II, B-III, C-I, D-IV"],
        ans: 1,
        exp: "<b>2. A-II, B-III, C-IV, D-I</b><br>A System Call is a mechanism through which a user program requests services from the operating system kernel. It acts as an interface between a user process and the OS."
    },
    {
        q: "Match the LIST-I with LIST-II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>LIST-I</b></td><td><b>LIST-II</b></td></tr><tr><td>A. Short term scheduler</td><td>I. Determine which process are added to the system for execution level place them in ready queue.</td></tr><tr><td>B. Medium term scheduler</td><td>II. Select which process should be executed next and allocate CPU time.</td></tr><tr><td>C. Long term scheduler</td><td>III. Manage the degree of multi programming by swapping processes between main memory and disk storage</td></tr><tr><td>D. I/O Scheduler</td><td>IV. Order the input/output requests from processes waiting for I/O operations.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-I, B-IV, C-II, D-III", "2. A-III, B-II, C-I, D-IV", "3. A-II, B-III, C-I, D-IV", "4. A-I, B-II, C-III, D-IV"],
        ans: 2,
        exp: "<b>3. A-II, B-III, C-I, D-IV</b><br>Long-Term Scheduler (Job Scheduler): selects processes from the job pool and moves them to the ready queue in main memory; controls the degree of multiprogramming; executes less frequently.<br>Short-Term Scheduler (CPU Scheduler): selects a process from the ready queue and allocates the CPU to it; executes very frequently.<br>Medium-Term Scheduler (Swapper): temporarily removes processes from memory, suspends and resumes processes, and controls the swapping operation."
    },
    {
        q: "Which of the following statements are TRUE about Process Control Block (PCB) ?<br><br>(A) The PCB contains information about the process state, such as whether it is running, waiting or terminated<br>(B) The PCB includes the program code and data segments of the process<br>(C) The PCB stores the process's memory management information, such as page tables and segment tables<br>(D) The PCB is used to track process scheduling information and CPU registers for process execution<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (A), (B) and (C) Only", "(2) (B), (C) and (D) Only", "(3) (A), (C) and (D) Only", "(4) (A) and (B) Only"],
        ans: 2,
        exp: "<b>(3) (A), (C) and (D) Only</b><br>A Process Control Block (PCB) is a data structure maintained by the operating system that stores all information related to a process. Typical contents: Process ID (PID), Process State, Program Counter, CPU Registers, Memory Management Information, I/O Status Information, CPU Scheduling Information and Accounting Information. It does not include the program code and data segments."
    },
    {
        q: "Which of the following control problem does not exist, when processes unaware of each other during interaction ?",
        opts: ["(1) Mutual exclusion", "(2) Data coherence", "(3) Starvation", "(4) Deadlock"],
        ans: 1,
        exp: "<b>(2) Data coherence</b><br>Data coherence in an operating system (OS) ensures that the values of shared variables are consistent across different memory locations.<br>• Definition: Data coherence, also known as cache coherence, is when the values of shared variables are consistent across different memory locations.<br>• Importance: Data coherence is important for maintaining the performance and scalability of shared memory systems.<br>• How it works: Coherence protocols manage the communication and consistency of cached copies of shared variables among processors.<br>• Examples of protocols: write-invalidate, write-update, and write-back."
    },
    {
        q: "Consider a set of n tasks with known runtimes r1,r2,.....rn to be run on a uniprocessor machine. which of the following processor scheduling algorithms will result in the maximum throughput?",
        opts: ["a) Round - robin", "b) Shortest job first", "c) FCFS", "d) Priority scheduling"],
        ans: 1,
        exp: "<b>b) Shortest job first</b><br>SJF is a CPU scheduling algorithm in which the process having the shortest burst time is executed first. It selects the process with minimum CPU burst time, minimizes average waiting time and improves throughput."
    },
    {
        q: "Consider the following set of processes assumed to have arrived at time 0 in order P<sub>1</sub> P<sub>2</sub> P<sub>3</sub> P<sub>4</sub> and P<sub>5</sub> with the length of CPU burst given in Milliseconds.<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Process</b></td><td><b>Burst Time</b></td><td><b>Priority</b></td></tr><tr><td>P<sub>1</sub></td><td>10</td><td>3</td></tr><tr><td>P<sub>2</sub></td><td>1</td><td>1</td></tr><tr><td>P<sub>3</sub></td><td>2</td><td>4</td></tr><tr><td>P<sub>4</sub></td><td>1</td><td>5</td></tr><tr><td>P<sub>5</sub></td><td>5</td><td>2</td></tr></table><br>What is the average waiting time (in milliseconds) using priority scheduling.",
        opts: ["1. 8", "2. 8.2", "3. 8.3", "4. 8.4."],
        ans: 1,
        exp: "<b>2. 8.2</b><br>Priority scheduling allocates the CPU to the process with the highest priority first (lowest number = highest priority). Execution order: P2 → P5 → P1 → P3 → P4.<br>Waiting times: P2 = 0, P5 = 1, P1 = 6, P3 = 16, P4 = 18.<br>Average waiting time = (0 + 1 + 6 + 16 + 18) / 5 = 41 / 5 = 8.2 ms"
    },
    {
        q: "Which of the following statements is not true for Multi Level Feedback Queue processor scheduling algorithm?",
        opts: ["a) Queues have different priorities", "b) Each queue may have different scheduling algorithm", "c) Processes are permanently assigned to a queue", "d) This algorithm can be configured to match a specific system under design"],
        ans: 2,
        exp: "<b>c) Processes are permanently assigned to a queue</b><br>Multilevel Feedback Queue Scheduling allows processes to move between queues. It uses priority levels and time quantum to adjust process priority. In Multilevel Queue Scheduling, processes are permanently assigned to a queue; in MLFQ they are not."
    },
    {
        q: "Identify the correct statement(s) from the followings with respect to Spinlock Semaphores<br>A. The name refers to busy waiting semaphores.<br>B. They are not useful when the locks are to be held for a short duration of time.<br>C. It may require multiple context switches when a process waits on a lock.<br>D. They are often employed on Uniprocessor systems.<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A Only", "2. D Only", "3. B, D Only", "4. A, C and D Only"],
        ans: 0,
        exp: "<b>1. A Only</b><br>A Spinlock is a synchronization mechanism in which a process/thread continuously checks a lock and keeps waiting in a loop (spinning) until the lock becomes available. It is called busy waiting because the CPU remains active while waiting. Features: avoids context switching overhead, suitable for short waiting time, mostly used in multiprocessor systems. Disadvantages: wastes CPU cycles during waiting, not efficient for long waiting time, poor choice for single-processor systems."
    },
    {
        q: "Once the process is allocated CPU and executing which of the following events could not occur?<br>A. The process could issue an I/O request and then be placed in the Ready Queue<br>B. The process could create new subprocesses &amp; wait for the termination of the subprocesses<br>C. The time slice of the process expires and it may join the waiting queue<br>D. The process is forcibly removed from the CPU and is put in the Waiting queue due to arrival of an interrupt<br>Choose the correct answer from the options given below:",
        opts: ["1. B Only", "2. D Only", "3. A and C Only", "4. A, C and D Only"],
        ans: 3,
        exp: "<b>4. A, C and D Only</b><br>A: On an I/O request, the process goes to the Waiting/Blocked queue, not Ready → cannot occur.<br>B: A running process can fork subprocesses and then wait for them → can occur.<br>C: On time-slice expiry, it goes to the Ready queue, not Waiting → cannot occur.<br>D: An interrupt may preempt it, after which it should go to Ready, not Waiting → cannot occur."
    },
    {
        q: "Which one of the following CPU scheduling algorithms cannot be preemptive?",
        opts: ["a) Shortest Remaining Time First (SRTF) Scheduling", "b) First Come First Serve (FCFS) Scheduling", "c) Round Robin Scheduling", "d) Priority Scheduling"],
        ans: 1,
        exp: "<b>b) First Come First Serve (FCFS) Scheduling</b><br>FCFS is a non-preemptive scheduling algorithm: processes are executed in arrival order. SRTF and Round Robin are preemptive, while Priority scheduling can be preemptive or non-preemptive."
    },
    {
        q: "Consider a CPU that has to execute two types of processes. The first type, Actuators (A), requires a CPU burst of 6 seconds. The second type, Controllers (C), requires a CPU burst of 8 seconds. A new process of type A arrives at time t = 10, 20, 30, 40 and 50 (in seconds). Similarly, a new process of type C arrives at time t = 11, 22, 33, 44 and 55 (in seconds). The CPU scheduling policy is First Come First Serve (FCFS). The first process of type A starts running at t = 10 seconds. The average waiting time (in seconds) for the 10 processes is_______. (rounded off to one decimal place)",
        opts: ["a) 7", "b) 8.5", "c) 9.5", "d) 10"],
        ans: 2,
        exp: "<b>c) 9.5</b><br>Waiting Time (WT) = Start Time - Arrival Time.<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Process</b></td><td><b>Arrival Time</b></td><td><b>Start Time</b></td><td><b>End Time</b></td><td><b>Waiting Time</b></td></tr><tr><td>A1</td><td>10</td><td>10</td><td>16</td><td>10 - 10 = 0</td></tr><tr><td>C1</td><td>11</td><td>16</td><td>24</td><td>16 - 11 = 5</td></tr><tr><td>A2</td><td>20</td><td>24</td><td>30</td><td>24 - 20 = 4</td></tr><tr><td>C2</td><td>22</td><td>30</td><td>38</td><td>30 - 22 = 8</td></tr><tr><td>A3</td><td>30</td><td>38</td><td>44</td><td>38 - 30 = 8</td></tr><tr><td>C3</td><td>33</td><td>44</td><td>52</td><td>44 - 33 = 11</td></tr><tr><td>A4</td><td>40</td><td>52</td><td>58</td><td>52 - 40 = 12</td></tr><tr><td>C4</td><td>44</td><td>58</td><td>66</td><td>58 - 44 = 14</td></tr><tr><td>A5</td><td>50</td><td>66</td><td>72</td><td>66 - 50 = 16</td></tr><tr><td>C5</td><td>55</td><td>72</td><td>80</td><td>72 - 55 = 17</td></tr></table>Sum of WT = 0 + 5 + 4 + 8 + 8 + 11 + 12 + 14 + 16 + 17 = 95 seconds<br>Average Waiting Time = 95 / 10 = 9.5 seconds"
    },
    {
        q: "Consider the following program snippet. Assume that the program compiles and runs successfully. Further, assume that the fork() system call is always successful in creating a process.<br><br>int main () {<br>&nbsp;&nbsp;int i;<br>&nbsp;&nbsp;for (i = 0; i &lt; 3; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (fork() == 0) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;printf(\"Hello!\");<br>&nbsp;&nbsp;return 0;<br>}<br><br>The total number of times that the printf statement gets executed is",
        opts: ["a) 4", "b) 5", "c) 6", "d) 8"],
        ans: 0,
        exp: "<b>a) 4</b><br>The key here is how the if-else logic inside the loop interacts with the fork() return values:<br>• fork() == 0 (Child): Executes continue, meaning it goes to the next iteration of the loop.<br>• fork() &gt; 0 (Parent): Executes break, meaning it exits the loop immediately and goes to the printf.<br><br>Step-by-Step Trace<br>1. Start: We begin with 1 Parent Process (P0) at i = 0.<br>2. Iteration i = 0: P0 forks.<br>&nbsp;&nbsp;◦ Parent (P0): Receives a positive PID, hits break, exits loop → Prints \"Hello!\" (1).<br>&nbsp;&nbsp;◦ Child (C1): Receives 0, hits continue, goes to i = 1.<br>3. Iteration i = 1: C1 forks.<br>&nbsp;&nbsp;◦ Parent (C1): Receives a positive PID, hits break, exits loop → Prints \"Hello!\" (2).<br>&nbsp;&nbsp;◦ Child (C2): Receives 0, hits continue, goes to i = 2.<br>4. Iteration i = 2: C2 forks.<br>&nbsp;&nbsp;◦ Parent (C2): Receives a positive PID, hits break, exits loop → Prints \"Hello!\" (3).<br>&nbsp;&nbsp;◦ Child (C3): Receives 0, hits continue, loop ends (since i &lt; 3 is now false) → Prints \"Hello!\" (4)."
    },
    {
        q: "With respect to deadlocks in an operating system, which of the following statements are FALSE?<br>A. Banker's algorithm is used to prevent deadlocks<br>B. Deadlock formation can be prevented by ensuring that the hold and wait condition is not allowed<br>C. An assignment edge in a resource allocation graph is marked from a process to a resource<br>D. A safe state guarantees that all processes can finish without formation of a deadlock",
        opts: ["a) A and B", "b) A and C", "c) B and D", "d) B and C"],
        ans: 1,
        exp: "<b>b) A and C</b><br>A is false: Banker's Algorithm is a deadlock avoidance algorithm (not prevention); it allocates resources only if the system remains in a safe state.<br>B is true: Deadlock prevention works by preventing one of the four necessary conditions, e.g. removing hold-and-wait.<br>C is false: In a Resource Allocation Graph, a Request Edge goes from Process → Resource, while an Assignment Edge goes from Resource → Process.<br>D is true: A safe state has a safe sequence, so no deadlock occurs."
    },
    {
        q: "Consider a process P running on a CPU. Which one or more of the following events will always trigger a context switch by the OS that results in process P moving to a non-running state (e.g., ready, blocked)?<br>A. P makes a blocking system call to read a block of data from the disk<br>B. P tries to access a page that is in the swap space, triggering a page fault<br>C. An interrupt is raised by the disk to deliver data requested by some other process<br>D. A timer interrupt is raised by the hardware",
        opts: ["a) A and B", "b) A and D", "c) A and C", "d) All of the above"],
        ans: 0,
        exp: "<b>a) A and B</b><br>A: True. If a process itself makes a block() call, then it will be blocked until the I/O operation completes.<br>B: True. If a page is not in the physical memory, then the OS invokes the Page Fault Handler, and the process remains blocked until the page is read (i.e., the disk I/O is complete). There are two types of page faults:<br>• Minor Page Fault: Occurs when a page is already in physical memory but was brought in earlier by another process, and the current process is not aware of it. This typically happens when pages are shared.<br>• Major Page Fault: Occurs when the OS needs to access the disk to retrieve the page into physical memory.<br>Since this question refers to retrieving a page from the disk, it is considered a Major Page Fault. Therefore, the current process will be blocked until this I/O operation is completed.<br><br>C: False. Such a request will be served by DMA (Direct Memory Access), and the CPU does not need to get involved. Hence, the current program will continue using the CPU.<br>D: False. Timer interrupts may be ignored in many cases and do not necessarily lead to a context switch.<br>• Case 1: Consider non-preemptive scheduling like FCFS. In that case, we either disable the timer interrupt or ignore it.<br>• Case 2: Consider a scheduling algorithm such as RR with Priority. Suppose we want to run process P<sub>1</sub> (high-priority) for a quantum of 50 ms and P<sub>2</sub> (low-priority) for a quantum of 10 ms. Then, the timer interrupt interval should be: Timer Interval = gcd(10, 50) = 10 ms. Now, whenever P<sub>1</sub> is running and a timer interrupt occurs, it will be ignored four times and a context switch will occur on the fifth occurrence. Therefore, it is clear that it is not necessary to perform a context switch on every timer interrupt."
    },
    {
        q: "Which of the following statements about threads is/are TRUE?",
        opts: ["a) Threads can only be implemented in kernel space", "b) Each thread has its own file descriptor table for open files", "c) All the threads belonging to a process share a common stack", "d) Threads belonging to a process are by default not protected from each other"],
        ans: 3,
        exp: "<b>d) Threads belonging to a process are by default not protected from each other</b><br>Threads can be User-Level Threads (managed by a user-level thread library, kernel is unaware of them) or Kernel-Level Threads (managed by the operating system kernel), so statement (a) is false."
    },
    {
        q: "Which one or more of the following options guarantee that a computer system will transition from user mode to kernel mode?<br>A. Function Call<br>B. malloc Call<br>C. Page Fault<br>D. System Call",
        opts: ["a) A and B", "b) B and C", "c) C and D", "d) A and D"],
        ans: 2,
        exp: "<b>c) C and D</b><br>A System Call is a mechanism through which a user program requests services from the operating system kernel. It acts as an interface between a user process and the OS and performs privileged operations."
    },
    {
        q: "Which of the following statements is/are TRUE with respect to deadlocks?<br>A. Circular wait is a necessary condition for the formation of deadlock.<br>B. In a system where each resource has more than one instance, a cycle in its wait-for graph indicates the presence of a deadlock.<br>C. If the current allocation of resources to processes leads the system to unsafe state, then deadlock will necessarily occur.<br>D. In the resource-allocation graph of a system, if every edge is an assignment edge, then the system is not in deadlock state.",
        opts: ["a) A and B", "b) B and C", "c) A and D", "d) B and D"],
        ans: 2,
        exp: "<b>c) A and D</b><br>Necessary conditions of deadlock (Coffman conditions): Mutual Exclusion, Hold and Wait, No Preemption and Circular Wait. All four must occur simultaneously.<br>Unsafe state ≠ Deadlock: an unsafe state only indicates the possibility of deadlock, so C is false.<br>In a Resource Allocation Graph, a Request Edge goes from Process → Resource and an Assignment Edge goes from Resource → Process; with only assignment edges there is no waiting, so no deadlock. A cycle in a wait-for graph indicates deadlock only for single-instance resources, so B is false."
    }
];