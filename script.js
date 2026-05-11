const textElement = document.getElementById('typewriter');
const phrases = [
    "твой результат 90+", 
    "поступление в вуз мечты", 
    "к уверенности на экзамене",
    "поддержку экспертов"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

  
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}


document.addEventListener('DOMContentLoaded', type);


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

reveal();



let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    

    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');


    currentIndex += direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }


    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;


    dots[currentIndex].classList.add('active');
}


function currentSlide(index) {
    const diff = index - currentIndex;
    changeSlide(diff);
}


setInterval(() => {
    changeSlide(1);
}, 5000);





function openServiceModal(packageName) {
    console.log("Кнопка нажата! Пакет:", packageName);
    
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const hiddenInput = document.getElementById('selected-package');

    if (modal && modalTitle) {
        modalTitle.innerText = "Заявка на " + packageName;
        if(hiddenInput) hiddenInput.value = packageName;
        
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    } else {
        console.error("Ошибка: Не найдено модальное окно с id='service-modal'");
    }
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

window.onclick = function(event) {
    const modal = document.getElementById('service-modal');
    if (event.target === modal) {
        closeServiceModal();
    }
}



function openServiceModal(packageName) {
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const hiddenInput = document.getElementById('selected-package');

    if (modal && modalTitle) {
        modalTitle.innerText = "Заявка: " + packageName;
        if (hiddenInput) hiddenInput.value = packageName;


        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}


window.addEventListener('click', (event) => {
    const modal = document.getElementById('service-modal');
    if (event.target === modal) {
        closeServiceModal();
    }
});




function openModal() {
    const modal = document.getElementById('main-modal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}


function closeMainModal() {
    const modal = document.getElementById('main-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}


window.addEventListener('click', (e) => {
    const modal = document.getElementById('main-modal');
    if (e.target === modal) {
        closeMainModal();
    }
});


document.getElementById('enroll-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    closeMainModal();
});



function openServiceModal(packageName = "Общая заявка") {
    const modal = document.getElementById('service-modal');
    const packageInput = document.getElementById('selected-package');
    const modalTitle = document.getElementById('modal-title');

    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
        
        if (packageInput) packageInput.value = packageName;
        if (modalTitle) modalTitle.innerText = packageName;
    } else {
        console.error("Ошибка: Окно с id='service-modal' не найдено!");
    }
}


function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tg-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const status = document.getElementById('form-status');
            const btn = this.querySelector('.contact-btn');

            // Визуальный эффект отправки
            btn.disabled = true;
            btn.innerText = "Отправляем...";

            // Имитируем задержку сети
            setTimeout(() => {
                if (status) {
                    status.innerText = "Спасибо! Мы свяжемся с вами в ближайшее время.";
                    status.style.color = "#27ae60";
                }
                
                this.reset(); // Очищаем поля
                btn.disabled = false;
                btn.innerText = "Начать подготовку";

                // Закрываем окно через 3 секунды после успеха
                setTimeout(closeServiceModal, 3000);
            }, 1000);
        });
    }

    // Закрытие окна при клике на темную область вокруг него
    const modalOverlay = document.getElementById('service-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeServiceModal();
            }
        });
    }
});


// Открытие модального окна
function openServiceModal(title = "Запись на урок") {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.getElementById('modal-title').innerText = title;
        document.getElementById('selected-package').value = title;
        document.body.style.overflow = 'hidden'; // Запрет скролла
    }
}

// Закрытие окна
function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Скролл обратно
    }
}

// Закрытие по клику вне окна
window.onclick = function(e) {
    const modal = document.getElementById('service-modal');
    if (e.target === modal) closeServiceModal();
}

// Логика формы
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tg-form');
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            const status = document.getElementById('form-status');
            
            // Имитируем отправку
            status.innerHTML = "⌛ Отправляем...";
            
            setTimeout(() => {
                status.innerHTML = "✅ Успешно! Мы перезвоним.";
                status.style.color = "#27ae60";
                
                setTimeout(() => {
                    form.reset();
                    status.innerHTML = "";
                    closeServiceModal();
                }, 2000);
            }, 1000);
        };
    }
});


// Внутри обработки формы (form.onsubmit)
setTimeout(() => {
    status.innerHTML = "🚀 Готово! Мы летим к вам.";
    status.style.color = "#27ae60";
    
    // Плавное закрытие через 2 секунды
    setTimeout(() => {
        closeServiceModal();
        form.reset();
        status.innerHTML = "";
    }, 2000);
}, 1000);