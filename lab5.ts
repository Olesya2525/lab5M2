function getCurrentDate() {
    console.log(Date.now());
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("Загрузилось");

    function getCurrentDate() {
        console.log(Date.now());
    }

    setTimeout(() => {
        clearInterval(intervalDescriptor);
        getCurrentDate();

        const intFunction = extFunction("мяу");
        intFunction("2507");
    }, 10000);

    let sec = 1;
    let intervalDescriptor = setInterval(() => {
        console.log("Время: " + sec );
        setTimeout(() => {
            sec++;
        }, 1);
    }, 999);

    function extFunction(x: string) {
        console.log("Внешняя фунция вводим строку: " + x);
        return (y: string) => console.log("Возврат результата в виде функции с замыканием на внешнюю функцию: " + (x + y));
    }
});