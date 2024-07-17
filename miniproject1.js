function CalculateGPA(arr) {
    // arr = [A, B, C];
    // index 0, 1, 2
    var total = 0;

    // Iterate through each grade in the array
    for (var i = 0; i < arr.length; i++) 
        // check grade and add to total
    if (arr [i] ==="A") {
        total += 4.0;
    } else if (arr[i] ==="B") {
        total += 3.0;
    } else if (arr[i] ==="C") {
            total += 2.0;
    } else if (arr[i] ==="D") {
        total += 1.0;
    } else if (arr[i] ==="E") {
            total += 0.0;
    }
    // Calculate average GPA
    var average = total / arr.length;
    var GPA; // Declare GPA value

    //Convert average to appropriate GPA
    if (average >= 3.5) {
        GPA = "A";
    } else if (average >= 2.5) {
        GPA = "B";
    } else if (average >= 1.5) {
        GPA = "C";
    } else if (average >= 0.5) {
            GPA = "D";
    } else {
        GPA = "F";
    }
    console.log("Your GPA is", GPA);
    return GPA;
}