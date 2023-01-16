# File Manager
### MY rating - 286.0 points 
Feedback on the points of the Terms of Reference:

#### Items not completed / not counted:

- [ ] Get EOL (default system End-Of-Line) 

- [ ] Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) 

- [ ] Get home directory 

- [ ] Get current system user name (Do not confuse with the username that is set when the application starts) 

- [ ] Get CPU architecture for which Node.js binary has compiled 
#### Partially completed items:

- [x] List all files and folders in current directory 

*Review: The output of the program is slightly incorrect. 
There is a commented code (in handlers/utils.js), I don’t know how to deal with the formation of an object with promises and async/await, it worked well in the console, but I can’t get the values, maybe you can tell me, dear checkers? I would be grateful!*

#### Completed items:
- [x] Application accepts username and prints proper message 

- [x] Application exits if user pressed `ctrl+c` or sent `.exit` command and proper message is printed 

- [x] Attempts to perform an operation on a non-existent file or work on a non-existent path result in the operation fail 

- [x] Operation fail doesn't crash application 

- [x] Go upper from current directory 

- [x] Go to dedicated folder from current directory 

- [x] Read file and print it's content in console 

- [x] Create empty file 

- [x] Rename file 

- [x] Copy file 

- [x] Move file 

- [x] Delete file 

- [x] Calculate hash for file 

- [x] Compress file (using Brotli algorithm) 

- [x] Decompress file (using Brotli algorithm) 

- [x] All operations marked as to be implemented using certain streams should be performed using Streams API 

- [x] No synchronous `Node.js` API with asynchronous analogues is used (e.g. not used `readFileSync` instead of `readFile`) 

- [x] Codebase is written in ESM modules instead of CommonJS 

- [x] Codebase is separated (at least 7 modules) 

