var rawQuestions = [
    {
        q: "Semaphores are used to solve the problem of:",
        opts: ["a) mutual exclusion", "b) process synchronization", "c) Deadlock detection and recovery", "d) both (1) and (2)"],
        ans: 3,
        exp: "<b>d) both (1) and (2)</b><br>a) Semaphores are a synchronization mechanism used to control access to a common resource in a concurrent system such as a multitasking operating system.<br>b) They are primarily used to solve the problems of mutual exclusion and process synchronization.<br>c) Mutual exclusion ensures that only one process can access the critical section of code at a time, preventing race conditions.<br>d) Process synchronization ensures that processes or threads are properly synchronized to avoid issues like deadlocks and ensure correct sequence of execution."
    },
    {
        q: "With a single resource, deadlock occurs",
        opts: ["a) if there are more than two processes competing for that resource", "b) if there are only two processes competing for that resource", "c) if there is a single process competing for that resource", "d) None of these"],
        ans: 3,
        exp: "<b>d) None of these</b><br>When there is only one resource, the conditions of hold and wait and circular wait gets eliminated. With the assumption that no process can use a resource for an infinite amount of time, whenever a process will finish its execution, another process can get the resource. So a deadlock can't occur. Hence correct answer is option 4, that is, none of these."
    },
    {
        q: "Which of the following statements are TRUE about mutual exclusion in concurrent programming?<br><br>(A) Mutual exclusion ensures that only one process can be in a critical section at any given time.<br>(B) Mutual exclusion are designed to prevent conflicts and ensure that only one process can access shared resources at a time.<br>(C) Mutual exclusion can use various algorithms to ensure that processes do not enter the critical section simultaneously.<br>(D) Mutual exclusion allows multiple processes to access the critical section simultaneously to improve performance.<br><br>Choose the correct answer from the options given below:",
        opts: ["a) (A), (B), (C) Only", "b) (B), (C), (D) Only", "c) (B), (D), (A) Only", "d) (A), (C), (D) Only"],
        ans: 0,
        exp: "<b>a) (A), (B), (C) Only</b><br>(A) This statement is CORRECT. Mutual exclusion is a fundamental concept in concurrent programming aimed at preventing multiple processes from accessing a critical section simultaneously.<br>(B) This statement is CORRECT. The primary goal of mutual exclusion is to avoid conflicts by ensuring exclusive access to shared resources.<br>(C) This statement is CORRECT. Algorithms such as Peterson's algorithm, the Bakery algorithm, and various lock mechanisms are used to implement mutual exclusion.<br>(D) This statement is NOT CORRECT. The purpose of mutual exclusion is to prevent multiple processes from accessing the critical section simultaneously, which is contrary to what this statement suggests."
    },
    {
        q: "An operating system contains 4 user processes each requiring 5 units of resource R. The minimum number of required units of R such that no deadlock will ever occur is",
        opts: ["a) 20", "b) 4", "c) 17", "d) 15"],
        ans: 2,
        exp: "<b>c) 17</b><br>Minimum number of identical resources to avoid deadlock if n is number of process and r is the resource needed per process is n × (r - 1) + 1 = 4 × (5 - 1) + 1 = 17"
    },
    {
        q: "The hardware implementation which provides mutual exclusion is",
        opts: ["a) Semaphores", "b) Test and set instruction", "c) Both options", "d) None of the options"],
        ans: 1,
        exp: "<b>b) Test and set instruction</b><br>TestAndSet is a hardware solution to the synchronization problem. In TestAndSet, we have a shared lock variable which can take either of the two values, 0 or 1. → 0 for Unlock → 1 for Lock Before entering into the critical section, a process enquires about the lock.<br>→ If it is locked, it keeps on waiting till it becomes free<br>→ if it is not locked, it takes the lock and executes the critical section.<br><br>Conclusion: In TestAndSet, Mutual exclusion and progress are preserved Bounded waiting cannot be preserved.<br><br>Semaphores are the software implementation of the same. It needs kernel level support to ensure that P and V operations remain atomic, but hardware support isn't essential. Both P & V operations must be indivisible and this is a mandatory condition."
    },
    {
        q: "Which of the following interprocess communication model is used to exchange messages among co-operative processes?",
        opts: ["a) Shared memory model", "b) Message passing model", "c) Shared memory and message passing model", "d) Queues"],
        ans: 2,
        exp: "<b>c) Shared memory and message passing model</b><br>Inter process communication (IPC) is a mechanism which allows processes to communicate with each other and synchronize their actions.<br><br>By maintaining this type of communication, processes are said to co-operate with each other. Processes can communicate with each other using these two ways:<br>- Shared Memory<br>- Message passing"
    },
    {
        q: "Given a set of four, two resources with two units, each. The following resources allocation graph exits at a point in time: The graph indicates:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;text-align:center;\"><tr><td rowspan=\"2\"></td><td colspan=\"2\"><b>Allocation resources</b></td><td colspan=\"2\"><b>Request resources</b></td></tr><tr><td>R1</td><td>R2</td><td>R1</td><td>R2</td></tr><tr><td><b>P1</b></td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td><b>P2</b></td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td><b>P3</b></td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td><b>P4</b></td><td>0</td><td>1</td><td>0</td><td>0</td></tr></table>",
        opts: ["a) Cycle and deadlock", "b) No cycle but deadlock", "c) Neither cycle nor deadlock", "d) Cycle but no deadlock"],
        ans: 3,
        exp: "<b>d) Cycle but no deadlock</b><br>Cycle P1 → R1 → P3 → R2 → P1<br>Here, available resources are = {0, 0} So, with this, we can satisfy the need for P2 or P4.<br>Suppose the need for P2 is satisfied, then P2 will release its resources.<br>Now avail become = 1 0<br>The need for P4 or P1 can be satisfied.<br>Suppose P4 release the resources. New avail = 1, 1<br>It can satisfy the need of both P1 and P3.<br>So, P1 need is satisfied, its resources are released.<br>New avail = 1 2 P3 needs will also be satisfied with this.<br>So, there is no deadlock in this even with a cycle in the resource-allocation graph."
    },
    {
        q: "To overcome difficulties in Readers-Writers problem, which of the following statement/s is/are true?<br><br>1) Writers are given exclusive access to shared objects<br>2) Readers are given exclusive access to shared objects<br>3) Both readers and writers are given exclusive access to shared objects.<br><br>Choose the correct answer from the code given below:",
        opts: ["a) 1 only", "b) Both 2 and 3", "c) 2 only", "d) 3 only"],
        ans: 0,
        exp: "<b>a) 1 only</b><br>In Readers-Writers problem, more than one Reader is allowed to read simultaneously but if a Writer is writing then no other writer or any reader can have simultaneous access to that shared object. So, Writers are given exclusive access to shared objects."
    },
    {
        q: "Monitor is an Interprocess Communication (IPC) technique which can be described as",
        opts: ["(A) It is higher level synchronization primitive and is a collection of procedures, variables, and data structures grouped together in a special package.", "(B) It is a non-negative integer which apart from initialization can be acted upon by wait and signal operations.", "(C) It uses two primitives, send and receive which are system calls rather than language constructs.", "(D) It consists of the IPC primitives implemented as system calls to block the process when they are not allowed to enter critical region to save CPU time."],
        ans: 0,
        exp: "<b>(A) It is higher level synchronization primitive and is a collection of procedures, variables, and data structures grouped together in a special package.</b><br>monitor is a thread-safe class, object, or module that uses wrapped mutual exclusion in order to safely allow access to a method or variable by more than one thread. The defining characteristic of a monitor is that its methods are executed with mutual exclusion: At each point in time, at most one thread may be executing any of its methods. Using a condition variable(s), it can also provide the ability for threads to wait on a certain condition (thus using the above definition of a \"monitor\"). For the rest of this article, this sense of \"monitor\" will be referred to as a \"thread-safe object/class/module\"."
    },
    {
        q: "At a particular time of computation the value of a counting semaphore is 7. Then 20 P operations and 15 V operation were completed on this semaphore. The resulting value of the semaphore is",
        opts: ["a) 42", "b) 2", "c) 7", "d) 12"],
        ans: 1,
        exp: "<b>b) 2</b><br>Initial counting semaphore = I = 7<br>Wait operation = 20 P<br>Signal operation = 15 V<br>Final counting semaphore = F<br><br>F = I + 15V + 20P<br>F = 7 + 15(+1) + 20(-1)<br>F = 2"
    },
    {
        q: "Which of the following is not true with respect to deadlock prevention and deadlock avoidance schemes?",
        opts: ["a) In deadlock prevention, the request for resources is always granted if resulting state is safe", "b) In deadlock avoidance, the request for resources is always granted, if the resulting state is safe", "c) Deadlock avoidance requires knowledge of resource requirements a priori", "d) Deadlock prevention is more restrictive than deadlock avoidance"],
        ans: 0,
        exp: "<b>a) In deadlock prevention, the request for resources is always granted if resulting state is safe</b><br>• Banker's Algorithm is resource allocation and deadlock avoidance algorithm which test all the request made by processes for resources, it checks for the safe state, if after granting request system remains in the safe state it allows the request and if there is no safe state it doesn't allow the request made by the process.<br>• Deadlock avoidance requires knowledge of resource requirements a priori"
    },
    {
        q: "Choose statements in context of monitor based synchronization scheme that use condition type variable x:<br><br>I: Only wait () and signal () operations can be involved on X.<br>II: If process p invokes X, wait() operation; then P is suspended until another process invokes X, signal().<br>III: The X, signal() operation resumes exactly one suspended process and if no process is suspended, the it has no effect.",
        opts: ["a) I and II", "b) II and III", "c) I and III", "d) I, II and III"],
        ans: 3,
        exp: "<b>d) I, II and III</b><br>• The monitor is one of the ways to achieve Process synchronization.<br>• The monitor is supported by programming languages to achieve mutual exclusion between processes.<br>• The operation x.wait(); means that the process invoking this operation is suspended until another process invokes x.signal();. The x.signal operation resumes exactly one suspended process. If no process is suspended, then the signal operation has no effect."
    },
    {
        q: "Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td colspan=\"2\"><b>LIST I</b></td><td colspan=\"2\"><b>LIST II</b></td></tr><tr><td>A.</td><td>IPC</td><td>I.</td><td>Resource Allocation</td></tr><tr><td>B.</td><td>Demand Paging</td><td>II.</td><td>Computational speedup</td></tr><tr><td>C.</td><td>Banker's Algorithm</td><td>III.</td><td>Task Control Block</td></tr><tr><td>D.</td><td>PCB</td><td>IV.</td><td>Virtual Memory</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-II, B-I, C-IV, D-III", "2. A-II, B-IV, C-I, D-III", "3. A-I, B-II, C-III, D-IV", "4. A-II, B-III, C-I, D-IV"],
        ans: 1,
        exp: "<b>2. A-II, B-IV, C-I, D-III</b><br>"
    },
    {
        q: "A problem encountered in multitasking when a process is perpetually denied necessary resources is called ____________",
        opts: ["a) deadlock", "b) starvation", "c) inversion", "d) aging"],
        ans: 1,
        exp: "<b>b) starvation</b><br>Starvation occurs when a process is continuously unable to access a necessary resource because other processes with higher priorities keep using it, essentially preventing the lower-priority process from making any progress."
    },
    {
        q: "Suppose P, Q and R are co-operating processes satisfying Mutual Exclusion condition. Then if the process Q is executing in its critical section then",
        opts: ["a) 'P' executes in critical section", "b) 'R' executes in critical section", "c) Neither 'P' nor 'R' executes in their critical section", "d) Both 'P' and 'R' executes in critical section"],
        ans: 2,
        exp: "<b>c) Neither 'P' nor 'R' executes in their critical section</b><br>• A mutual exclusion (mutex) is a program object that prevents simultaneous access to a shared resource.<br>• A critical section is a code segment that accesses shared variables and has to be executed as an atomic action.<br>• The critical section problem refers to the problem of how to ensure that at most one process is executing its critical section at a given time<br>• Since process 'Q' is in the critical section then other processes P and R cannot be in the critical section. Therefore neither 'P' nor 'R' executes in their critical section."
    },
    {
        q: "The following program consists of 3 concurrent processes and 3 binary semaphores. The semaphores are initialized as S0=1, S1=0, S2=0.<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Process P0</b></td><td><b>Process P1</b></td><td><b>Process P2</b></td></tr><tr><td>While (true) {<br>Wait (S0);<br>Print '0'<br>Release (S1);<br>Release (S2);<br>}</td><td><br><br>Wait (S1);<br>Release (S0);</td><td><br><br>Wait (S2);<br>Release (S0);</td></tr></table><br>How many times will process P0 print '0'?",
        opts: ["a) At least twice", "b) Exactly twice", "c) Exactly thrice", "d) Exactly once"],
        ans: 0,
        exp: "<b>a) At least twice</b><br>The semaphores are initialized as S0=1, S1=0, S2=0.<br>Because S0 =1 then P0 enter into the critical section and other processes will wait until either S1=1 or S2 =1<br><br><b>The minimum number of times 0 printed:</b><br>• S0 =1 then P0 enter into the critical section<br>• print '0'<br>• then release S1 and S2 means S1 =1 and s2 =1<br>• now either P1 or P2 can enter into the critical section<br>• if P1 enter into the critical section<br>• release S0<br>• then P2 enter into the critical section<br>• release S0<br>• P1 enter into the critical section<br>• print '0'<br>The minimum number of time 0 printed is twice when executing in this order (p0 -> p1 -> p2 -> p0)<br><br><b>The Maximum number of times 0 printed:</b><br>• S0 =1 then P0 enter into the critical section<br>• print '0'<br>• Then release S1 and S2 means S1 =1 and s2 =1<br>• Now either P1 or P2 can enter into the critical section<br>• If P1 enter into the critical section<br>• Release S0 means S0 =1<br>• S0 =1 then P0 enter into the critical section<br>• print '0'<br>• Then P2 enter into the critical section<br>• Release S0 means S0 =1<br>• S0 =1 then P0 enter into the critical section<br>• print '0'<br>Maximum no. of time 0 printed is thrice when execute in this order (p0 -> p1 -> p0 -> p2 -> p0)<br><br>So, At least twice will process P0 print '0'"
    },
    {
        q: "The number of resources requested by a process ____________",
        opts: ["a) must always be less than the total number of resources available in the system", "b) must always be equal to the total number of resources available in the system", "c) must not exceed the total number of resources available in the system", "d) must exceed the total number of resources available in the system"],
        ans: 2,
        exp: "<b>c) must not exceed the total number of resources available in the system</b><br>"
    },
    {
        q: "Consider the methods used by processes P1 and P2 for accessing their critical sections whenever needed, as given below. The initial values of shared boolean variables S1 and S2 are randomly assigned.<br><br><b>Method Used by P1</b><br>while (S1 == S2) ;<br>Critical Section<br>S1 = S2;<br><br><b>Method Used by P2</b><br>while (S1 != S2) ;<br>Critical Section<br>S2 = not (S1);<br><br>Which one of the following statements describes the properties achieved?",
        opts: ["a) Mutual exclusion but not progress", "b) Progress but not mutual exclusion", "c) Neither mutual exclusion nor progress", "d) Both mutual exclusion and progress"],
        ans: 0,
        exp: "<b>a) Mutual exclusion but not progress</b><br>• The given mechanism is based on strict alternation, which guarantees always mutual exclusion and never progress.<br>• In this mutual exclusion is satisfied because at any point of time either S1=S2 or S1 != S2, but not both.<br>• But here progress is not satisfied because suppose S1=1 and S2=0 and P1 is not interested to enter into the critical section but P2 wants to enter into the critical section, and P2 will not be able to enter, because until P1 will not enter the critical section, S1 will not become equal to S2.<br>• So if one process is not interested in entering the critical section, it will not allow the other process to enter the critical section which is interested. So progress is not satisfied."
    },
    {
        q: "Consider two processors P1 and P2 executing the same instruction set. Assume that under identical conditions, for the same input, a program running on P2 takes 25% less time but incurs 20% more CPI (clock cycles per instruction) as compared to the program running on P1. If the clock frequency of P1 is 1GHz, then the clock frequency of P2 (in GHz) is _________.",
        opts: ["a) 1.6", "b) 3.2", "c) 1.2", "d) 0.8"],
        ans: 0,
        exp: "<b>a) 1.6</b><br>For P1 clock period = 1ns<br><br>Let clock period for P2 be t.<br><br>Now consider following equation based on specification<br>7.5 ns = 12*t ns<br><br>We get t and inverse of t will be 1.6GHz"
    },
    {
        q: "Suppose there are four processes in execution with 12 instances of a Resource R in a system.<br>The maximum need of each process and current allocation are given below:<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;text-align:center;\"><tr><td><b>Process</b></td><td><b>Max. Need</b></td><td><b>Current Allocation</b></td></tr><tr><td>P1</td><td>8</td><td>3</td></tr><tr><td>P2</td><td>9</td><td>4</td></tr><tr><td>P3</td><td>5</td><td>2</td></tr><tr><td>P4</td><td>3</td><td>1</td></tr></table><br>With reference to current allocation, is system safe? If so, what is the safe sequence?",
        opts: ["(A) No", "(B) Yes, P1 P2 P3 P4", "(C) Yes, P4 P3 P1 P2", "(D) Yes, P2 P1 P3 P4"],
        ans: 2,
        exp: "<b>(C) Yes, P4 P3 P1 P2</b><br>P1 holds 3 resources<br>P2 holds 4 resources<br>P3 holds 2 resources<br>P4 holds 1 resource<br><br>Total 3+4+2+1 = 10 resources are allocated and 12-10=2 resources are free<br><br>P1 requires maximum 8 resources; It needs 8-3 =5 more tapes<br>P2 requires maximum 9 resources; It needs 9-4 =5 more tapes<br>P3 requires maximum 5 resources; It needs5-2 =3 more tapes<br>P4 requires maximum 3 resources; It needs 3-1 = 2 more tapes<br><br>We can allocate 2 free resources to P4.<br>P4 will complete execution and release all its resources. Now total 3 resoucres are free.<br>We can allocate 3 free resources to P3.<br>P3 will complete execution and release all its resources. Now total 5 resoucres are free.<br>We can allocate 5 free resources to P1.<br>P1 will complete execution and release all its resources. Now total 8 resoucres are free.<br>We can allocate 5 free resources to P2.<br>P2 will complete execution and release all its resources.<br>System is in safe state.<br><br>The sequence is P4P3P1P2"
    },
    {
        q: "In the working-set strategy, which of the following is done by the operating system to prevent thrashing?<br>I. It initiates another process if there are enough extra frames.<br>II. It selects a process to suspend if the sum of the sizes of the working-sets exceeds the total number of available frames.",
        opts: ["a) I only", "b) II only", "c) Neither I nor II", "d) Both I and II"],
        ans: 3,
        exp: "<b>d) Both I and II</b><br>According to concept of thrashing,<br>I is true because to prevent thrashing we must provide processes with as many frames as they really need \"right now\".If there are enough extra frames, another process can be initiated.<br><br>II is true because The total demand, D, is the sum of the sizes of the working sets for all processes. If D exceeds the total number of available frames, then at least one process is thrashing, because there are not enough frames available to satisfy its minimum working set. If D is significantly less than the currently available frames, then additional processes can be launched."
    },
    {
        q: "An operating system implements a policy that requires a process to release all resources before making a request for another resource. Select the TRUE statement from the following:",
        opts: ["a) Both starvation and deadlock can occur", "b) Starvation can occur but deadlock cannot occur", "c) Starvation cannot occur but deadlock can occur", "d) Neither starvation nor deadlock can occur"],
        ans: 1,
        exp: "<b>b) Starvation can occur but deadlock cannot occur</b><br>"
    },
    {
        q: "There are three processes P1, P2 and P3 sharing a semaphore for synchronising a variable. Initial value of semaphore is one. Assume that negative value of semaphore tells us how many processes are waiting in queue. Processes access the semaphore in following order:<br><br>(a) P2 needs to access<br>(b) P1 needs to access<br>(c) P3 needs to access<br>(d) P2 exits critical section<br>(e) Pi exits critical section<br><br>The final value of semaphore will be:",
        opts: ["(1) 0", "(2) 1", "(3) -1", "(4) -2"],
        ans: 0,
        exp: "<b>(1) 0</b><br>initial value of semaphores S=1<br><br>P2 needs to access decreases it to 0 (no one is waiting)<br>P1 needs to access decreases it to -1 (one process is waiting)<br>P3 needs to access decreases it to -2 ( 2 process r waiting)<br>P2 exits critical section increases it to -1 ( one process is waiting)<br>Pi exits critical section increases it to 0 ( no process is waiting)"
    },
    {
        q: "Which of the following actions is/are typically not performed by the operating system when switching context from process A to process B?",
        opts: ["a) Saving current register values and restoring saved register values for process B.", "b) Changing address translation tables.", "c) Swapping out the memory image of process A to the disk.", "d) Invalidating the translation look-aside buffer."],
        ans: 2,
        exp: "<b>c) Swapping out the memory image of process A to the disk.</b><br>During context switch processes are not swapped out from memory to disk but processes are generally swapped out from memory to disk when they are suspended. Also, during context switch OS invalidates TLB so that the TLB coincides with the currently executing processes."
    },
    {
        q: "A system has four processes and five allocatable resources. The current allocation and maximum needs are as follows:<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;text-align:center;\"><tr><td></td><td><b>Allocated</b></td><td><b>Maximum</b></td><td><b>Available</b></td></tr><tr><td>Process A</td><td>1 0 2 1 1</td><td>1 1 2 1 3</td><td>0 0 x 1 1</td></tr><tr><td>Process B</td><td>2 0 1 1 0</td><td>2 2 2 1 0</td><td></td></tr><tr><td>Process C</td><td>1 1 0 1 0</td><td>2 1 3 1 0</td><td></td></tr><tr><td>Process D</td><td>1 1 1 1 0</td><td>1 1 2 2 1</td><td></td></tr></table><br>The smallest value of x for which the above system in safe state is .............",
        opts: ["(A) 1", "(B) 3", "(C) 2", "(D) Not safe for any value of x."],
        ans: 3,
        exp: "<b>(D) Not safe for any value of x.</b><br>Need matrix (Maximum − Allocated):<br>Process A: 0 1 0 0 2<br>Process B: 0 2 1 0 0<br>Process C: 1 0 3 0 0<br>Process D: 0 0 1 1 1<br>For x = 1 process D will execute and free 1 1 2 2 1 instances. Now none of the other process will execute.<br>let x = 2 then process D will execute and free 1 1 3 2 1 instances. Now process C will execute and free 2 2 3 3 1 instances. With these free instances process B will execute, but process A will not execute because 5 resources needs 2 instances which will never be satisfied. That's why system is not in safe state."
    }
];
