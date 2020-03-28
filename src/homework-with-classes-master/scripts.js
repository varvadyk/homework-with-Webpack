export class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksArray = [5, 4, 4, 5];
        this.dismiss = false;
    }

    getInfo() {
        return this.university + " " + this.course + " " + this.fullName;
    }

    get marks() {
        if (this.dismiss) {
            return null;
        } else {
            return this.marksArray;
        }
    }
    set marks(value) {
        if (this.dismiss) {
            return null;
        } else {
            this.marksArray.push(value);
        }
    }

    getAverageMark() {
        if (this.dismiss) {
            return null;
        } else {
            const average = this.marksArray.reduce((sum, element) => {
                return (sum += element);
            }, 0);
            return (average / this.marksArray.length).toFixed(1);
        }
    }
    dismissStudent() {
        this.dismiss = true;
    }
    recoverStudent() {
        this.dismiss = false;
    }
}
export let object = new Student("KHU Distance Learning", 4, "Diana Varvadiuk");