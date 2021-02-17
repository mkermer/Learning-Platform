const verificationUsername = async () => {
    try {
        const studentRes = await axios.get(config.baseUrl + '/student')
        const students = studentRes.data;

        var foundStudent = students.find(student => {
            return student.studentName === username
        })

        return foundStudent.studentName


    } catch (err) {
        console.log(err)
    }

}


if (await verificationUsername() === username) {
    console.log('it works');
    AlertWarning('existing Username')
}