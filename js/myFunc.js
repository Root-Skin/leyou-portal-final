function  timeChange(num) {
        let sec = 1000;
        let oneMinute = sec * 60;
        let oneHour = oneMinute * 60;
        let hours = Math.floor(num / oneHour);
        let minutes = Math.floor((num % oneHour) / oneMinute);
        let seconds = Math.floor((num % oneMinute) / sec);

        let result = hours + ':' + minutes + ':' + seconds;
        return result;


}
