//function 1
export let students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];

export function couplStudents(students) {
    return [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]]
    ];
}