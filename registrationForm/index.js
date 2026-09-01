const name = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const branch = document.getElementById("branch");
const section = document.getElementById("section");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const students = document.getElementById("students");
function clickHandler() {
    let user = {
        name: name.value,
        email: email.value,
        course: course.value,
        branch: branch.value,
        section: section.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    console.log(user);
    if (user.password === user.confirmPassword) {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        h1.innerText = user.name;

        const h2 = document.createElement("h2");
        h2.innerText = user.email;

        const h3 = document.createElement("h3");
        h3.innerText = `${user.course} ${user.branch}- ${user.section}`;

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);

        students.appendChild(div);
    }
}


