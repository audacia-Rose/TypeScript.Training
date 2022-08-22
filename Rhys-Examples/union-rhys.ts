// let dateOfBirth: any = new Date(2022, 12, 12);
// let dateOfBirth: any = "12/12/2022";

let dateOfBirth: Date | String;
dateOfBirth = new String("12/12/2022");

if (dateOfBirth instanceof String) {
    const dateOfBirthValues: number[] = dateOfBirth.split('/').map((stringValue: string) => { return +stringValue;}); // [12, 12, 2022]
    dateOfBirth = new Date(dateOfBirthValues[2], dateOfBirthValues[1], dateOfBirthValues[0]);
}

console.log(dateOfBirth);

