var rawQuestions = [
    {
        q: "What is an operating system?",
        opts: ["a) interface between the hardware and application programs", "b) collection of programs that manages hardware resources", "c) system service provider to the application programs", "d) all of the mentioned"],
        ans: 3,
        exp: "<b>d) all of the mentioned</b><br>An Operating System acts as an intermediary between user/user applications/application programs and hardware. It is a program that manages hardware resources. It provides services to application programs."
    },
    {
        q: "To access the services of the operating system, the interface is provided by the ___________.",
        opts: ["a) Library", "b) System calls", "c) Assembly instructions", "d) API"],
        ans: 1,
        exp: "<b>b) System calls</b><br>To access services of the Operating System an interface is provided by the System Calls. Generally, these are functions written in C and C++. Open, Close, Read, Write are some of most prominently used system calls."
    },
    {
        q: "Which one of the following is not true?",
        opts: ["a) kernel remains in the memory during the entire computer session", "b) kernel is made of various modules which can not be loaded in running operating system", "c) kernel is the first part of the operating system to load into memory during booting", "d) kernel is the program that constitutes the central core of the operating system"],
        ans: 1,
        exp: "<b>b) kernel is made of various modules which can not be loaded in running operating system</b><br>• Kernel is the first program that is loaded in memory when OS is loading as well as it remains in memory till OS is running.<br>• Kernel is the core part of the OS which is responsible for managing resources, allowing multiple processes to use the resources and provide services to various processes.<br>• Kernel modules can be loaded and unloaded in run-time i.e. in running OS."
    },
    {
        q: "Where is the operating system placed in the memory?",
        opts: ["a) either low or high memory (depending on the location of interrupt vector)", "b) in the low memory", "c) in the high memory", "d) none of the mentioned"],
        ans: 0,
        exp: "<b>a) either low or high memory (depending on the location of interrupt vector)</b><br>"
    },
    {
        q: "Cascading termination refers to the termination of all child processes if the parent process terminates ______",
        opts: ["a) Normally or abnormally", "b) Abnormally", "c) Normally", "d) None of the mentioned"],
        ans: 0,
        exp: "<b>a) Normally or abnormally</b><br>Cascading termination refers to the termination of all child processes if the parent process terminates Normally or Abnormally. Some systems don't allow child processes to exist if the parent process has terminated. Cascading termination is normally initiated by the operating system."
    },
    {
        q: "Hard real time operating system has ______________ jitter than a soft real time operating system.",
        opts: ["a) equal", "b) more", "c) less", "d) none of the mentioned"],
        ans: 2,
        exp: "<b>c) less</b><br>"
    },
    {
        q: "On systems where there are multiple operating system, the decision to load a particular one is done by _____________",
        opts: ["a) process control block", "b) file control block", "c) boot loader", "d) bootstrap"],
        ans: 2,
        exp: "<b>c) boot loader</b><br>"
    },
    {
        q: "The Kernel is _______ user-level threads.",
        opts: ["a) a part of", "b) the creator of", "c) unaware of", "d) aware of"],
        ans: 2,
        exp: "<b>c) unaware of</b><br>User-level threads can be created and managed more quickly. It takes longer to create and manage threads at the kernel level.<br><br>At the user level, implementation is handled by a thread library. Operating systems of this type that do not allow kernel-level threads can nonetheless use user-level threads.<br><br>It is more effective and quicker. The kernel is the core component of an operating system for a computer (OS).<br><br>All other components of the OS rely on the core to supply them with essential services. Like processes and interrupt handlers, kernel threads are kernel entities that the system scheduler manages.<br><br>Although it executes within a process, a kernel thread is accessible to all other threads running on the system. Examples: Java threads, POSIX threads, etc. The user threads can be more easily implemented than the kernel thread."
    },
    {
        q: "The _______ program initializes all aspects of the system, from CPU registers to device controllers and the contents of main memory, and then starts the operating system.",
        opts: ["a) bootstrap", "b) main", "c) bootloader", "d) rom"],
        ans: 0,
        exp: "<b>a) bootstrap</b><br>"
    },
    {
        q: "If an operating system does not allow a child process to exist when the parent process has been terminated, this phenomenon is called as-",
        opts: ["a) Threading", "b) Cascading termination", "c) Zombie termination", "d) Process killing"],
        ans: 1,
        exp: "<b>b) Cascading termination</b><br>• Threading - It is a lightweight process that the operating system can schedule and run concurrently with other threads. The operating system creates and manages threads, and they share the same memory and resources as the program that created them. This enables multiple threads to collaborate and work efficiently within a single program.<br>• Cascading Termination - It occurs in some systems, including VMS, which do not allow a child to exist if its parent has terminated. In such systems, if a process terminates either normally or abnormally, then all its children have to be terminated.<br>• Zombie Termination - It is a process that has completed execution but still has an entry in the process table. This occurs for the child processes, where the entry is still needed to allow the parent process to read its child's exit status.<br>• Process Killing - Terminating a process forcefully is called process killing."
    },
    {
        q: "In Unix, which system call creates the new process?",
        opts: ["a) create", "b) fork", "c) new", "d) none of the mentioned"],
        ans: 1,
        exp: "<b>b) fork</b><br>"
    },
    {
        q: "Which of the following do not belong to queues for processes?",
        opts: ["a) Job Queue", "b) PCB queue", "c) Device Queue", "d) Ready Queue"],
        ans: 1,
        exp: "<b>b) PCB queue</b><br>"
    },
    {
        q: "If all processes I/O bound, the ready queue will almost always be ______ and the Short term Scheduler will have a ______ to do.",
        opts: ["a) full, little", "b) full, lot", "c) empty, little", "d) empty, lot"],
        ans: 2,
        exp: "<b>c) empty, little</b><br>If all processes are I/O bound, the ready queue will almost empty and the short-term scheduler will have a little to do. I/O bound processes spend more time doing I/O than computation"
    },
    {
        q: "What is a short-term scheduler?",
        opts: ["a) It selects which process has to be brought into the ready queue", "b) It selects which process has to be executed next and allocates CPU", "c) It selects which process to remove from memory by swapping", "d) None of the mentioned"],
        ans: 1,
        exp: "<b>b) It selects which process has to be executed next and allocates CPU</b><br>A short-term scheduler selects a process which has to be executed next and allocates CPU. Short-term scheduler selects a process from the ready queue. It selects processes frequently."
    },
    {
        q: "Suppose that a process is in \"Blocked\" state waiting for some I/O service. When the service is completed, it goes to the __________",
        opts: ["a) Running state", "b) Ready state", "c) Suspended state", "d) Terminated state"],
        ans: 1,
        exp: "<b>b) Ready state</b><br>Suppose that a process is in \"Blocked\" state waiting for some I/O service. When the service is completed, it goes to the ready state. Process never goes directly to the running state from the waiting state. Only processes which are in ready state go to the running state whenever CPU allocated by operating system."
    },
    {
        q: "The context of a process in the PCB of a process does not contain __________",
        opts: ["a) the value of the CPU registers", "b) the process state", "c) memory-management information", "d) context switch time"],
        ans: 3,
        exp: "<b>d) context switch time</b><br>The context of a process in the PCB of a process does not contain context switch time. When switching CPU from one process to another, the current context of the process needs to be saved. It includes values of the CPU registers, process states, memory-management information."
    },
    {
        q: "The operating system and the other processes are protected from being modified by an already running process because",
        opts: ["a) they run at different time instants and not in parallel", "b) they are in different logical addresses", "c) they use a protection algorithm in the scheduler", "d) every address generated by the CPU is being checked against the relocation and limit parameters"],
        ans: 3,
        exp: "<b>d) every address generated by the CPU is being checked against the relocation and limit parameters</b><br>The Operating System uses two registers to implement memory protection, namely relocation register and limit register. Together, they can define the range of addresses a process can validly refer to."
    },
    {
        q: "Which of the following does not interrupt a running process?",
        opts: ["a) A device", "b) Timer", "c) Scheduler process", "d) Power failure"],
        ans: 2,
        exp: "<b>c) Scheduler process</b><br>Scheduler process does not interrupt a running process. Scheduler process selects an available process from a pool of available processes and allocates CPU to it."
    },
    {
        q: "Dispatch latency is defined as",
        opts: ["a) the speed of dispatching a process from running to the ready state", "b) the time of dispatching a process from running to ready state and keeping the CPU idle", "c) the time to stop one process and start running another one", "d) none of these"],
        ans: 2,
        exp: "<b>c) the time to stop one process and start running another one</b><br>It is defined as the amount of time needed for a system to acknowledge a request for a process to begin operation."
    },
    {
        q: "When several processes access the same data concurrently and the outcome of the execution depends on the particular order in which the access takes place is called ________",
        opts: ["a) dynamic condition", "b) race condition", "c) essential condition", "d) critical condition"],
        ans: 1,
        exp: "<b>b) race condition</b><br>When several processes access the same data concurrently and the outcome of the execution depends on the particular order in which access takes place is called race condition."
    },
    {
        q: "Suppose a system contains n processes and system uses the round-robin algorithm for CPU scheduling then which data structure is best suited ready queue of the process",
        opts: ["a) stack", "b) queue", "c) circular queue", "d) tree"],
        ans: 2,
        exp: "<b>c) circular queue</b><br>Circular queue is the best data structure for round-robin CPU scheduling algorithm.<br><br>In round-robin CPU scheduling if the timer goes off first, then the process is swapped out of the CPU and moved to the back end of the ready queue.<br><br>The ready queue is maintained as a circular queue, so when all processes have had a turn, then the scheduler gives the first process another turn, and so on."
    },
    {
        q: "There are three processes in the ready queue. When the currently running process requests for I/O how many process switches take place?",
        opts: ["a) 1", "b) 2", "c) 3", "d) 4"],
        ans: 1,
        exp: "<b>b) 2</b><br>"
    },
    {
        q: "In Linux Operating System, when _________ is invoked, it is passed a set of flags that determine how much sharing is to take place between the parent and child tasks.",
        opts: ["a) fork()", "b) clone()", "c) pthread()", "d) thread()"],
        ans: 1,
        exp: "<b>b) clone()</b><br>• clone(): This system call creates a new process, similar to fork(), but it also allows the child process to share parts of its execution context with the calling process.<br>• The execution context includes resources like memory space, file descriptor tables, etc.<br>• The degree of sharing is controlled by a set of flags passed when invoked, which defines a spectrum between traditional processes and threads."
    },
    {
        q: "In which of the following cases, a process executing in user mode requires an entry into the OS mode?",
        opts: ["a) Executing printf ( )", "b) Accessing a general purpose register", "c) Decrementing an unsigned integer value stored in a register beyond zero", "d) Adding values of two registers using ADD instruction"],
        ans: 0,
        exp: "<b>a) Executing printf ( )</b><br>"
    },
    {
        q: "User level threads are threads that are visible to the programmer and are unknown to the kernel. The operating system kernel supports and manages kernel level threads. Three different types of models relate user and kernel level threads. Which of the following statements is/are true ?<br><br><b>(a)</b><br>(i) The Many - to - one model maps many user threads to one kernel thread<br>(ii) The one - to - one model maps one user thread to one kernel thread<br>(iii) The many - to - many model maps many user threads to smaller or equal kernel threads<br><br><b>(b)</b><br>(i) Many - to - one model maps many kernel threads to one user thread<br>(ii) One - to - one model maps one kernel thread to one user thread<br>(iii) Many - to- many model maps many kernel threads to smaller or equal user threads",
        opts: ["a) (a) is true; (b) is false", "b) (a) is false; (b) is true", "c) Both (a) and (b) are true", "d) Both (a) and (b) are false"],
        ans: 0,
        exp: "<b>a) (a) is true; (b) is false</b><br>Threads are lightweight processes because they have their own stack but can access shared data. Because threads share the same address space as the process and other threads within the process, the operational cost of communication between the threads is low, which is an advantage.<br>• The many–to–one model maps many user threads to one kernel thread.<br>• The one–to–one model maps one user thread to one kernel thread.<br>• The many–to–many model maps many user threads to smaller or equal kernel threads."
    }
];
