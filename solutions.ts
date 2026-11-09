const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier === 0) {
    return 0;
  } else if (multiplier) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};


type Value = string | number | boolean;
const processInput = (input: Value) => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  else if (typeof input === "number") {
    return input * 10;
  }
   else {
    if ( input === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};


const formatCoordinate = ([latitude, longitude, locationName] : readonly [number, number, string]) =>{
return `Location: ${locationName} ${latitude}, ${longitude})`;
}


const concatenateArrays = <T>(...arrays : T[][]) : T[] => {
    const singleCombinedArr : T[] = [];
    arrays.forEach((arr) =>{
        singleCombinedArr.push(...arr);
    })
    return singleCombinedArr;
}


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  const newCourseArr: Course[] = [];

  courses.forEach((course) => {
    if (course.isPublished === true && course.students >= minStudents) {
     newCourseArr.push(course);
    }
  })
  return newCourseArr;
};


const pluckValues = <T, K extends keyof T>(items: T[], key: K) : T[K][]=>{
  const output: T[K][] = [];

  items.forEach((item) => {
    output.push(item[key]);
  });
  return output;
}


class Employee {
    constructor(protected name: string, private baseSalary: number){}

    getDetails() : string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
  constructor(name: string, baseSalary: number, private department: string) {
    super(name, baseSalary);
    this.department = department;
}
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } 
    else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};