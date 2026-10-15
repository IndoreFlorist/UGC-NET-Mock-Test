var rawQuestions = [
    {
        q: "Time taken to switch between user and kernel models is _______ the time taken to switch between two processes.",
        opts: ["a) More than", "b) Independent of", "c) Less than", "d) Equal to"],
        ans: 2,
        exp: "<b>c) Less than</b><br>Switching from kernel to user mode is a very fast operation, OS has to just change single bit at hardware level.<br>Switching from one process to another process is time consuming process, first we have to move to kernel mode then we have to save PCB and some registers."
    },
    {
        q: "Consider the following statements about process state transitions for a system using preemptive scheduling.<br>I. A running process can move to ready state.<br>II. A ready process can move to running state.<br>III. A blocked process can move to running state.<br>IV. A blocked process can move to ready state.<br><br>Which of the above statements are TRUE?",
        opts: ["a) I, II, and III only", "b) II and III only", "c) I, II, and IV only", "d) I, II, III, and IV"],
        ans: 2,
        exp: "<b>c) I, II, and IV only</b><br>Statement I: TRUE. A process can move from running state to ready state on interrupt or when priority expires, that is, when it is pre-empted.<br>Statement II: TRUE. A ready process moves to running process when it is dispatched.<br>Statement III: FALSE. A blocked process that is in waiting state can never move directly to running state. It must go to ready queue first.<br>Statement IV: TRUE. A blocked or waiting process can move to ready state."
    },
    {
        q: "Which of the following system calls does not return control to the calling point, on termination?",
        opts: ["a) fork", "b) exec", "c) ioctl", "d) longjmp"],
        ans: 1,
        exp: "<b>b) exec</b><br>fork(): Creates a new process by duplicating the calling process. Both parent and child continue execution from the point of the call. Returns control.<br>exec(): Replaces the current process image with a new process image. Does not return control to the calling point if successful, because the current process image is replaced.<br>ioctl(): Used for device-specific input/output operations. Returns control after the operation.<br>longjmp(): Restores the program state saved by setjmp(). It does not return in the conventional sense, but it transfers control to the saved state, not replacing the process."
    },
    {
        q: "The problem of indefinite blockage of low-priority jobs in general priority scheduling algorithm can be solved using:",
        opts: ["a) Dirty bit", "b) Compaction", "c) Aging", "d) None of the above"],
        ans: 2,
        exp: "<b>c) Aging</b><br>• Priority scheduling can be either preemptive or non-preemptive.<br>• A major problem with the priority scheduling algorithm is indefinite blocking or starvation.<br>• This algorithm can leave some low priority processes waiting indefinitely.<br>• The solution to the problem of starvation is aging. Aging is a technique of gradually increasing the priority of processes that wait in the system for a long time.<br>• Example: if priorities range from 100 to 0 (high), we could increase the priority of a waiting process by 1 every 15 minutes. Due to this, even a process with 100 priority would have the highest priority."
    },
    {
        q: "Which of the following CPU scheduling algorithms is/are supported by LINUX operating system?",
        opts: ["a) Non-preemptive priority scheduling", "b) Preemptive priority scheduling and time sharing CPU scheduling", "c) Time sharing scheduling only", "d) Priority scheduling only"],
        ans: 1,
        exp: "<b>b) Preemptive priority scheduling and time sharing CPU scheduling</b><br>Preemptive priority scheduling: It maintains two arrays: active array and expired array. Schedules the processes based on their static and dynamic priorities.<br>1) It finds the highest priority queue with a runnable process and finds the first process on that queue. Calculates its time quantum and then runs it. After the time quantum, it puts that process on the expired array list and repeats the process again.<br>2) When the priority level of the active queue is empty, it looks for the next highest queue. After running all active queues, it swaps active and expired queues."
    },
    {
        q: "The following program results in the creation of?<br><br>main()<br>{<br>&nbsp;&nbsp;if(fork()>0)<br>&nbsp;&nbsp;&nbsp;&nbsp;sleep(100);<br>}",
        opts: ["a) an orphan process", "b) a zombie process", "c) a process that executes forever", "d) none of the mentioned"],
        ans: 1,
        exp: "<b>b) a zombie process</b><br>The if(fork() > 0) condition is true only for the parent, so the parent process will execute sleep(100); the child process will not sleep, and will exit immediately since there's no other statement.<br><br>What happens?<br>• The child process terminates.<br>• The parent continues sleeping for 100 seconds.<br>• During this time, the terminated child becomes a zombie (a dead process waiting to be reaped by the parent via wait()).<br>• Since the parent is sleeping and does not call wait(), the child's exit status is not collected."
    },
    {
        q: "Which of the following scheduler reduces the degree of multiprogramming?",
        opts: ["a) Long-term scheduler", "b) Short-term scheduler", "c) Mid-term scheduler", "d) None of these"],
        ans: 2,
        exp: "<b>c) Mid-term scheduler</b><br>"
    },
    {
        q: "System calls are usually invoked by using",
        opts: ["a) a software interrupt", "b) polling", "c) an indirect jump", "d) a privileged instruction"],
        ans: 0,
        exp: "<b>a) a software interrupt</b><br>"
    },
    {
        q: "A scheduling algorithm assigns priority proportional to the waiting time of a process. Every process starts with priority zero (the lowest priority). The scheduler re-evaluates the process priorities every T time units and decides the next process to schedule. Which one of the following is TRUE if the processes have no I/O operations and all arrive at time zero?",
        opts: ["a) This algorithm is equivalent to the first-come-first-serve algorithm.", "b) This algorithm is equivalent to the round-robin algorithm.", "c) This algorithm is equivalent to the shortest-job-first algorithm.", "d) This algorithm is equivalent to the shortest-remaining-time-first algorithm."],
        ans: 1,
        exp: "<b>b) This algorithm is equivalent to the round-robin algorithm.</b><br>"
    },
    {
        q: "The main function of the dispatcher (the portion of the process scheduler) is:",
        opts: ["a) swapping a process to the disk", "b) assigning ready process to the CPU", "c) suspending some of the processes when the CPU load is high", "d) None of the above"],
        ans: 1,
        exp: "<b>b) assigning ready process to the CPU</b><br>• The dispatcher is a crucial component of the process scheduler in an operating system.<br>• Its primary role is to assign a ready process to the CPU, ensuring efficient process management and CPU utilization.<br>• When a process is in the ready state, the dispatcher switches it to the running state by loading its context into the CPU.<br>• This context switch involves saving the state of the current process and loading the state of the next process."
    },
    {
        q: "Consider a set of n tasks with known runtimes r1, r2, ..... rn to be run on a uniprocessor machine. Which of the following processor scheduling algorithms will result in the maximum throughput?",
        opts: ["a) Round - robin", "b) Shortest job first", "c) FCFS", "d) Priority scheduling"],
        ans: 1,
        exp: "<b>b) Shortest job first</b><br>Shortest job first scheduling: In this job scheduling algorithm, the process having the shortest burst time or runtime will be executed first. It can be preemptive or non-preemptive. It reduces the waiting time for other processes. It results in maximum throughput.<br>Round-robin scheduling: In this, each process has a time quantum associated with it. Each process gets an equal share of time to execute. It is a preemptive scheduling algorithm.<br>FCFS: FCFS is a first come first serve scheduling algorithm. The process which comes first in the queue will be executed first. Processes are executed in the order of their arrival. It is the simplest scheduling algorithm.<br>Priority scheduling: It is a non-preemptive scheduling algorithm. Each process is assigned a priority and they are executed in the order of their priority. Process having the highest priority will be executed first and so on. Priority is decided on the basis of memory requirements, time, and resources.<br>Therefore Shortest job first scheduling (SJF) will result in the highest throughput."
    },
    {
        q: "A process execute the following code:<br>for (I = 1; I ≤ n; I ++)<br>&nbsp;&nbsp;fork ();<br><br>How many child processes are created?",
        opts: ["a) n - 1", "b) 2^n - 1", "c) 2^(n-1)", "d) 2^(n-1) -1"],
        ans: 1,
        exp: "<b>b) 2^n - 1</b><br>"
    },
    {
        q: "If a thread invokes the exec system call ____________",
        opts: ["a) only the exec executes as a separate process", "b) the program specified in the parameter to exec will replace the entire process", "c) the exec is ignored as it is invoked by a thread", "d) none of the mentioned"],
        ans: 1,
        exp: "<b>b) the program specified in the parameter to exec will replace the entire process</b><br>"
    },
    {
        q: "Consider three processes (process id 0, 1, 2 respectively) with compute time bursts 2, 4 and 8 time units. All processes arrive at time zero. Consider the longest remaining time first (LRTF) scheduling algorithm. In LRTF ties are broken by giving priority to the process with the lowest process id. The average turn around time is:",
        opts: ["a) 13 units", "b) 14 units", "c) 15 units", "d) 16 units"],
        ans: 0,
        exp: "<b>a) 13 units</b><br>Let the processes be p0, p1 and p2. These processes will be executed in following order.<br><br>p2 p1 p2 p1 p2 p0 p1 p2 p0 p1 p2<br>0 4 5 6 7 8 9 10 11 12 13 14<br><br>Turn around time of a process is total time between submission of the process and its completion.<br>Turn around time of p0 = 12 (12-0)<br>Turn around time of p1 = 13 (13-0)<br>Turn around time of p2 = 14 (14-0)<br>Average turn around time is (12+13+14)/3 = 13."
    },
    {
        q: "Consider three CPU-intensive processes, which require 10, 20 and 30 time units and arrive at times 0, 2 and 6, respectively. How many context switches are needed if the operating system implements a shortest remaining time first scheduling algorithm? Do not count the context switches at time zero and at the end.",
        opts: ["a) 1", "b) 2", "c) 3", "d) 4"],
        ans: 1,
        exp: "<b>b) 2</b><br>"
    },
    {
        q: "Which of the following process scheduling algorithm may lead to starvation",
        opts: ["a) FIFO", "b) Round Robin", "c) Shortest Job Next", "d) None of the above"],
        ans: 2,
        exp: "<b>c) Shortest Job Next</b><br>Shortest job next may lead to process starvation for processes which will require a long time to complete if short processes are continually added."
    },
    {
        q: "Which of the following is FALSE about SJF (Shortest Job First Scheduling)?<br>S1: It causes minimum average waiting time<br>S2: It can cause starvation",
        opts: ["a) Only S1", "b) Only S2", "c) Both S1 and S2", "d) Neither S1 nor S2"],
        ans: 3,
        exp: "<b>d) Neither S1 nor S2</b><br>Both SJF and Shortest Remaining time first algorithms may cause starvation. Consider a situation when long process is there in ready queue and shorter processes keep coming.<br>SJF is optimal in terms of average waiting time for a given set of processes, but problem with SJF is how to know/predict time of next job."
    },
    {
        q: "The most optimal scheduling algorithm is :",
        opts: ["a) First come first serve (FCFS)", "b) Shortest Job First (SJF)", "c) Round Robin (RR)", "d) None of the above"],
        ans: 3,
        exp: "<b>d) None of the above</b><br>For each specific problem, the efficient algorithms could be different ones. Hence, the most optimal algorithm can't be determined."
    },
    {
        q: "Consider the 3 processes, P1, P2 and P3 shown in the table.<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Process</b></td><td><b>Arrival time</b></td><td><b>Time Units Required</b></td></tr><tr><td>P1</td><td>0</td><td>5</td></tr><tr><td>P2</td><td>1</td><td>7</td></tr><tr><td>P3</td><td>3</td><td>4</td></tr></table><br>The completion order of the 3 processes under the policies FCFS and RR2 (round robin scheduling with CPU quantum of 2 time units) are",
        opts: ["A. FCFS: P1, P2, P3<br>RR2: P1, P2, P3", "B. FCFS: P1, P3, P2<br>RR2: P1, P3, P2", "C. FCFS: P1, P2, P3<br>RR2: P1, P3, P2", "D. FCFS: P1, P3, P2<br>RR2: P1, P2, P3"],
        ans: 2,
        exp: "<b>C. FCFS: P1, P2, P3<br>RR2: P1, P3, P2</b><br>"
    },
    {
        q: "Which of the following statements are true?<br>I. Shortest remaining time first scheduling may cause starvation<br>II. Preemptive scheduling may cause starvation<br>III. Round robin is better than FCFS in terms of response time",
        opts: ["a) I only", "b) I and III only", "c) II and III only", "d) I, II and III"],
        ans: 3,
        exp: "<b>d) I, II and III</b><br>"
    },
    {
        q: "Group 1 contains some CPU scheduling algorithms and Group 2 contains some applications. Match entries in Group 1 to entries in Group 2.<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Group I</b></td><td><b>Group II</b></td></tr><tr><td>(P) Gang Scheduling</td><td>(1) Guaranteed Scheduling</td></tr><tr><td>(Q) Rate Monotonic Scheduling</td><td>(2) Real-time Scheduling</td></tr><tr><td>(R) Fair Share Scheduling</td><td>(3) Thread Scheduling</td></tr></table>",
        opts: ["a) P – 3 Q – 2 R – 1", "b) P – 1 Q – 2 R – 3", "c) P – 2 Q – 3 R – 1", "d) P – 1 Q – 3 R – 2"],
        ans: 0,
        exp: "<b>a) P – 3 Q – 2 R – 1</b><br>"
    },
    {
        q: "Consider the following set of processes, with the arrival times and the CPU-burst times given in milliseconds<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Process</b></td><td><b>Arrival Time</b></td><td><b>Burst Time</b></td></tr><tr><td>P1</td><td>0</td><td>5</td></tr><tr><td>P2</td><td>1</td><td>3</td></tr><tr><td>P3</td><td>2</td><td>3</td></tr><tr><td>P4</td><td>4</td><td>1</td></tr></table><br>What is the average turnaround time for these processes with the preemptive shortest remaining processing time first (SRPT) algorithm ?",
        opts: ["a) 5.50", "b) 5.75", "c) 6.00", "d) 6.25"],
        ans: 0,
        exp: "<b>a) 5.50</b><br>The following is Gantt Chart of execution<br>P1 P2 P4 P3 P1<br>1 4 5 8 12<br><br>Turn Around Time = Completion Time - Arrival Time<br>Avg Turn Around Time = (12 + 3 + 6 + 1)/4 = 5.50"
    },
    {
        q: "Assume every process requires 3 seconds of service time in a system with single processor. If new processes are arriving at the rate of 10 processes per minute, then estimate the fraction of time CPU is busy in system?",
        opts: ["a) 20%", "b) 30%", "c) 50%", "d) 60%"],
        ans: 2,
        exp: "<b>c) 50%</b><br>10 processes -> 1 min<br>1 process -> 1/10 min = 6 sec (Arrival rate)<br>Each process -> 3 sec service time<br>3/6 * 100 = 50% of time CPU is busy."
    },
    {
        q: "Consider the following scheduling<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td>A. Gang scheduling</td><td>s. Guaranteed scheduling</td></tr><tr><td>B. Rate Monotonic scheduling</td><td>t. Thread scheduling</td></tr><tr><td>C. Fair share scheduling</td><td>u. Real time scheduling</td></tr></table><br>Matching the table in the order A, B, C gives",
        opts: ["a) t, u, s", "b) s, t, u", "c) u, s, t", "d) u, t, s"],
        ans: 0,
        exp: "<b>a) t, u, s</b><br>"
    },
    {
        q: "Which of the following statements is not true for Multi Level Feedback Queue processor scheduling algorithm?",
        opts: ["a) Queues have different priorities", "b) Each queue may have different scheduling algorithm", "c) Processes are permanently assigned to a queue", "d) This algorithm can be configured to match a specific system under design"],
        ans: 2,
        exp: "<b>c) Processes are permanently assigned to a queue</b><br>"
    }
];
