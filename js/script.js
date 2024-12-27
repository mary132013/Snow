function delayLoad() {
    // Запускаем создание снежинок через каждые 500 мс
    setInterval(createSnowflakes, 500); // Создавать снежинки каждые 500 мс
}

function createSnowflakes() {
    const snowflakeCount = 5; // Количество снежинок за один раз
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.position = 'absolute';
    snowflake.style.top = '0';
    snowflake.style.left = Math.random() * window.innerWidth + 'px'; // Позиция по горизонтали
    snowflake.style.opacity = Math.random(); // Прозрачность
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Размер снежинки
    snowflake.textContent = '❄️'; // Добавляем символ снежинки

    document.body.appendChild(snowflake);

    // Анимация падения снежинки
    fallSnowflake(snowflake);
}

function fallSnowflake(snowflake) {
    const fallDuration = Math.random() * 3 + 2; // Длительность падения
    snowflake.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(' + window.innerHeight + 'px)' }
    ], {
        duration: fallDuration * 1000,
        easing: 'linear',
        fill: 'forwards'
    });

    // Удаляем снежинку после завершения анимации
    setTimeout(() => {
        snowflake.remove();
    }, fallDuration * 1000);
}

// Запускаем функцию обратного отсчета при загрузке страницы
window.onload = delayLoad;
