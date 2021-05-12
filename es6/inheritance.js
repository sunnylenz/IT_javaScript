import Teacher, { promote } from "./teacher";

// writing codes in multiple files is termed modularity, each of the multiple file is called a module

// Default -> import ... from '';
// Named -> import {...} from '';


const teacher = new Teacher("Mosh", 'BSc');
teacher.teach()