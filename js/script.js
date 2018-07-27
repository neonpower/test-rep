function myFirstApp(name, age) {

    alert('Привет, вас зовут ' + name + ' и это ваша первая программа!');

    function showSkills() {
        let skills = ['html', 'css', 'js', 'photoshop'];

        for (let i = 0; i < skills.length; i++) {
            document.querySelector('#mySkills').innerHTML += skills[i] + '<br>';
        }
    }

    function checkAge() {
        if (age > 18) {
            alert('У вас отличные шансы стать Front-End разработчиков');
        } else {
            alert('У вас также отличные шансы стать Front-End разработчиков');
        }
    }

    function calcPow(num) {
        console.log(num * num);
    }

    showSkills();
    checkAge();
    calcPow(4);

}

myFirstApp('Феодул', '52');