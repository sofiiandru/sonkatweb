document.addEventListener('DOMContentLoaded', () => {
    // Елементи модального вікна для ВІДЕО
    const videoModal = document.getElementById('videoModal');
    const closeVideoButton = videoModal.querySelector('.close-button');
    const filmVideoPlayer = document.getElementById('filmVideoPlayer');
    const body = document.body;
    

    // Елементи модального вікна для ІСТОРІЙ
    const storyModal = document.getElementById('storyModal');
    const storyGallery = document.getElementById('storyGallery');
    const closeStoryButton = storyModal.querySelector('.close-button');
    const storyModalCloseButton = storyModal.querySelector('.modal-close-button');
    const storyTitle = document.getElementById('storyTitle');
    const storyGenre = document.getElementById('storyGenre');
    const storyCharacters = document.getElementById('storyCharacters');
    const storyAuthors = document.getElementById('storyAuthors');
    const storyFullText = document.getElementById('storyFullText');
    
    // Кнопки "Дивитись фільм"
    const viewFilmButtons = document.querySelectorAll('.view-film-btn');
    // Кнопки "Читати історію"
    const readStoryButtons = document.querySelectorAll('.read-story-btn');

    const testCatalogContainer = document.getElementById('test-carousel'); // Контейнер каруселі тестів (змінено на ID)
    const testQuizArea = document.getElementById('test-quiz-area'); // Контейнер для uQuiz тесту
    let backToTestsBtn = document.querySelector('.back-to-tests-btn');
    if (!backToTestsBtn) {
        // Запасний варіант, якщо кнопки немає в HTML (але вона має бути статично)
        backToTestsBtn = document.createElement('button');
        backToTestsBtn.textContent = 'Назад до тестів';
        backToTestsBtn.className = 'back-to-tests-btn';
        backToTestsBtn.style.marginTop = '20px';
        backToTestsBtn.style.display = 'none'; 
        if (testQuizArea) {
            testQuizArea.parentNode.insertBefore(backToTestsBtn, testQuizArea.nextSibling);
        }
    }

    // Дані для всіх тестів
    const testsData = {
        "bunnies-girls-test": {
            "title": "Хто ви з дівчаток Банніц?",
            "description": "Дізнайтеся, яка дівчинка-банниця вам найбільше відповідає!",
            "uquizId": "tO2CLP"
        },
        "voenka-test": {
            "title": "Наскільки ти \"воєнка\"?",
            "description": "Цей тест допоможе визначити ваш рівень \"воєнки\".",
            "uquizId": "trYShS"
        },
        "sonkat-dream-test": {
            "title": "Ви як мрія СОНКАТА?",
            "description": "Чи відповідаєте ви ідеалам та баченням СОНКАТА?",
            "uquizId": "XZVRyH"
        },
        "ideal-pair-test": {
            "title": "Ваша ідеальна пара (знайомі СОНКАТА)",
            "description": "Знайдіть свою ідеальну пару серед персонажів та знайомих СОНКАТА.",
            "uquizId": "TMH0N2"
        },
        "cat-personality-test": {
            "title": "Ви як кішечка?",
            "description": "Яка кішечка найкраще описує вашу особистість?",
            "uquizId": "mTQOSK"
        },
        "literature-genre-test": {
            "title": "Який ви жанр літератури?",
            "description": "Дізнайтесь, який літературний жанр відображає вашу сутність.",
            "uquizId": "7ygzNX"
        },
        "sleep-place-test": {
            "title": "Ви як місце для сну?",
            "description": "Яке місце для відпочинку найкраще описує ваш характер?",
            "uquizId": "upxn8W"
        },
        "constellation-test": {
            "title": "Яке ви наше сузір'я?",
            "description": "Знайдіть своє унікальне сузір'я у світі СОНКАТА.",
            "uquizId": "hl3mED"
        },
        "popular-character-test": {
            "title": "Ви як популярний персонаж?",
            "description": "На кого з відомих персонажів ви схожі?",
            "uquizId": "p1Lq4Q"
        },
        "wtg-personality-test": {
            "title": "Ваш тип особистості по ВТГ?",
            "description": "Визначте свій тип особистості за системою ВТГ.",
            "uquizId": "zTcJJz"
        },
        "deadly-sin-test": {
            "title": "Який ви з 6 смертних гріхів?",
            "description": "Дізнайтеся, який з головних гріхів вам найбільше притаманний.",
            "uquizId": "930AVW"
        }
    };


    // =========================================================================
    // ДАНІ ІСТОРІЙ (без змін)
    // =========================================================================
    const storiesData = {
        "story_about_name": {
            "title": "Брудний сніг",
            "genre": "Жоска напруга",
            "characters": ["Женя (@q24xp)", "Кіра (@kitty_form)"],
            "authors": ["СОНКАТ"],
            "fullText": "<p>Жорсткий фанфік про Кіру та Женю Ткаченко <p>Розділ 1. Брудний сніг</p><p> — Ти жартуєш?— Кіра притискає Женю до холодної цегляної стіни, її пальці вгризаються в чужу куртку. Очі палають люттю, але десь у глибині темних зіниць — страх.</p><p> — Скажи, що це жарт. Женя мовчить. У її карих очах віддзеркалюється вуличний ліхтар. Вона не намагається вирватися, не чинить опору.</p><p> — Це не жарт, — відповідає тихо. </p><p>— Я йду. Внутрішньо Кіра вибухає. Вона хоче вдарити кулаком по стіні, плюнути на тротуар, закричати так, щоб розсипалися вікна. Але вона не робить нічого з цього. Просто кладе руку на щоку Жені і змушує її дивитися прямо в очі.</p><p> — Ти не можеш так просто взяти і зникнути.</p><p> — Можу. Вона робить крок назад. Кіра відчуває, як щось гаряче ріже груди зсередини.</p><p> — І через що? Через нього? Женя заплющує очі. </p><p>— Це не він. Це я.</p><p>Десь позаду гальмує авто. По дорозі летять снігові брудні бризки. Кіра навіть не помічає, як її пальці стискаються в кулаки.</p><p>— Скажи це мені в очі, — її голос майже хриплий. Женя піднімає погляд. </p><p>— Я більше не можу бути твоєю тінню. Різкий біль. Немов у груди встромили ніж. І Кіра робить те, що робити не можна. Те, що вона обіцяла собі ніколи не робити. Вона нахиляється і впивається в Женині губи. Це не поцілунок, це атака. Кіра кусає, Женя здригається, але не відштовхує її. А потім — звук удару. Женя б’є її кулаком у плече, змушуючи відступити. </p><p>— Це неправильно, — шепоче вона. Кіра витирає губи тильною стороною долоні, відчуваючи металевий присмак крові. </p><p>— Ти ж цього теж хочеш, — каже вона. Женя не відповідає. Просто йде. Кіра залишається одна посеред нічного міста, і сніг продовжує падати, змішуючись із дорожнім брудом. Але вона не відпустить її. Женя її. І Кіра забере своє, навіть якщо доведеться зруйнувати все навколо.</em></p>",
            "images": [
                "assets/images/story1-1.png",
                "assets/images/story1-6.png",
                "assets/images/story1-2.png",
                "assets/images/story1-3.png",
                "assets/images/story1-5.png",
                "assets/images/story1-4.png"
            ]
        },
        "legend_of_othername": {
            "title": "Скляні серця",
            "genre": "Кримінал і драма",
            "characters": ["Женя (@dontevensmile)", "Маша(@hartnowo)", "Єгор(@OwarinominamotO)"],
            "authors": ["СОНКАТ"],
            "fullText": "Розділ 1. Останній дзвінок <p>Маша стояла над операційним столом, стискючи скальпель у тремтячих пальцях. Її руки, які звикли рятувати життя, сьогодні не слухалися. У голові лунав його голос.... Єгора... </p><p>— Машо, я знайшов щось велике. Якщо зі мною щось трапиться… — Його слова урвалися тріском перерваного зв’язку. Наступного дня його тіло знайшли у занедбаному провулку. Поліція назвала це нещасним випадком. Але вона знала: це була брехня.</p><p>Розділ 2. Женя Білашко</p><p>— Машо, тобі потрібно рухатися далі. — Женя поклав руку їй на плече. Він був її найближчим другом, підтримував у всьому, ще з університету. Але зараз його очі здавалися чужими.</p><p>— Женю, він говорив про щось важливе. Він боявся… — її голос зірвався.</p><p>— Це небезпечно. Ти ж розумієш? Просто залиш це в минулому.</p><p>Але як залишити в минулому людину, яку кохала більше за все? </p><p>Розділ 3. Записник</p> <p>Маша знайшла його у старому плащі Єгора. Маленький чорний блокнот, захований у внутрішній кишені. «Я знаю, що один з близьких мене зрадив. Він попереджав, але я не послухав. Тепер у мене є докази…»Маша перечитувала рядки знову і знову. Один з близьких?</p> <p>Женя.</p> <p>Розділ 4. Сповідь</p><p>Вона зустрілася з ним у їхньому улюбленому кафе. Женя одразу зрозумів, що щось не так.</p><p>— Я знаю правду, Женю, — її голос була крижаною. Він відвів очі.</p><p>— Я намагався врятувати його, Машо. Але коли зрозумів, що все зайшло занадто далеко, було пізно.</p><p>— Ти знав. Ти мовчав.</p><p>— Якби я сказав, тебе б теж убили!</p><p>— Я кохав тебе, Машо. Завжди.</p><p>Вона стиснула кулаки.</p><p>— А ти зрадив мене.</p><p>Розділ 5. Вибір</p><p>У неї було два варіанти: здати його поліції або змусити його виправити це.Вона обрала друге.</p><p>— Ти допоможеш мені, — прошепотіла вона.Женя знав: у нього немає вибору.Чи зможе вона коли-небудь пробачити його?",
            "images": [
                "assets/images/story2-1.png",
                "assets/images/story2-6.png",
                "assets/images/story2-5.png",
                "assets/images/story2-2.png",
                "assets/images/story2-3.png",
                "assets/images/story2-4.png"
            ]
        }
    };


    // =========================================================================
    // Функції для ВІДЕО-модалки (без змін)
    // =========================================================================
    function openVideoModal(filename) {
        filmVideoPlayer.innerHTML = '';
        const mp4Source = document.createElement('source');
        mp4Source.src = `assets/films/${filename}.mp4`;
        mp4Source.type = 'video/mp4';
        filmVideoPlayer.appendChild(mp4Source);

        const webmSource = document.createElement('source');
        webmSource.src = `assets/films/${filename}.webm`;
        webmSource.type = 'video/webm';
        filmVideoPlayer.appendChild(webmSource);

        filmVideoPlayer.load();
        filmVideoPlayer.play();

        videoModal.style.display = 'flex';
        body.classList.add('modal-open');
    }

    function closeVideoModal() {
        filmVideoPlayer.pause();
        filmVideoPlayer.currentTime = 0;
        filmVideoPlayer.innerHTML = '';
        videoModal.style.display = 'none';
        body.classList.remove('modal-open');
    }

    // Обробники подій для ВІДЕО-модалки
    viewFilmButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const filename = event.target.dataset.videoFilename;
            if (filename) {
                openVideoModal(filename);
            }
        });
    });

    closeVideoButton.addEventListener('click', closeVideoModal);

    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            closeVideoModal();
        }
    });


    // =========================================================================
    // Функції для ІСТОРІЙ-модалки (без змін)
    // =========================================================================
    function openStoryModal(storyId) {
        const storyData = storiesData[storyId];

        if (!storyData) {
            console.error('Історію з ID:', storyId, 'не знайдено в storiesData.');
            alert('Вибачте, історія не знайдена.');
            return;
        }

        try {
            storyTitle.textContent = storyData.title;
            storyGenre.textContent = `Жанр: ${storyData.genre}`;
            storyCharacters.textContent = `Персонажі: ${storyData.characters ? storyData.characters.join(', ') : 'Не вказано'}`;
            storyAuthors.textContent = `Автори: ${storyData.authors ? storyData.authors.join(', ') : 'Не вказано'}`;
            storyFullText.innerHTML = storyData.fullText;

            storyGallery.innerHTML = ''; // Очищаємо галерею
            if (storyData.images && storyData.images.length > 0) {
                storyData.images.forEach(imageSrc => {
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = storyData.title + ' зображення';
                    storyGallery.appendChild(img);
                });
                storyGallery.style.display = 'grid'; // Показуємо галерею
            } else {
                storyGallery.style.display = 'none'; // Ховаємо галерею
            }

            storyModal.style.display = 'flex';
            body.classList.add('modal-open');
        } catch (error) {
            console.error('Не вдалося відобразити історію:', error);
            alert(`Вибачте, не вдалося відобразити історію. Перевірте консоль для деталей. ${error.message}`);
        }
    }

    function closeStoryModal() {
        storyModal.style.display = 'none';
        storyTitle.textContent = '';
        storyGenre.textContent = '';
        storyCharacters.textContent = '';
        storyAuthors.textContent = '';
        storyFullText.innerHTML = '';
        storyGallery.innerHTML = ''; // Очищаємо галерею при закритті
        storyGallery.style.display = 'none'; // Ховаємо галерею
        body.classList.remove('modal-open');
    }

    // Обробники подій для ІСТОРІЙ-модалки
    readStoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const storyId = event.target.dataset.storyId;
            if (storyId) {
                openStoryModal(storyId);
            }
        });
    });

    closeStoryButton.addEventListener('click', closeStoryModal);
    storyModalCloseButton.addEventListener('click', closeStoryModal); // Виправлено: була помилка, використовувався closeStoryButton
    

    window.addEventListener('click', (event) => {
        if (event.target === storyModal) {
            closeStoryModal();
        }
    });

    // =========================================================================
    // Загальний обробник для закриття модалок по Esc (оновлено для тестів)
    // =========================================================================
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (videoModal.style.display === 'flex') {
                closeVideoModal();
            }
            if (storyModal.style.display === 'flex') {
                closeStoryModal();
            }
            if (testQuizArea.style.display === 'flex') {
                hideUQuizTest(); // Закриваємо тест, якщо він відкритий
            }
        }
    });


    // =========================================================================
    // Логіка для Тестів (ОНОВЛЕНО: Тепер з Splide.js та надійним перезавантаженням uQuiz)
    // =========================================================================

    let splideInstance; 

    if (testCatalogContainer) { 
        splideInstance = new Splide('#test-carousel', {
            autoHeight: true,
            type: 'loop', 
            perPage: 3,   
            gap: '1rem',  
            autoplay: false, 
            pagination: false, 
            drag: 'free', 
            snap: true,
            arrows: true, 
            breakpoints: {
                1200: { 
                    perPage: 3,
                    gap: '1rem',
                },
                1024: { 
                    perPage: 2, 
                    gap: '0.8rem',
                },
                768: { 
                    perPage: 1, 
                    gap: '0.5rem',
                    arrows: false, 
                },
                480: { 
                    perPage: 1,
                    gap: '0.5rem',
                    arrows: false,
                }
            }
        });
        splideInstance.mount();
        console.log('Splide carousel mounted.');
    } else {
        console.warn('#test-carousel element not found. Splide not initialized.');
    }

    // Функція для застосування стилів до iframe (допоміжна)
    function applyUquizIframeStyles() {
        // Ми чекаємо, поки uQuiz завантажить свій iframe. 
        // Він динамічно створює iframe з id="uquiz_embed_iframe" всередині div з id="uquiz_embed"
        setTimeout(() => {
            const iframe = document.getElementById('uquiz_embed_iframe'); 
            if (iframe) {
                console.log('uQuiz iframe found by ID. Applying custom styles.');
                // ВИДАЛИТИ/ЗАКОМЕНТУВАТИ ЦІ РЯДКИ, ЯКІ ФІКСУЮТЬ ВИСОТУ В JS
                // iframe.style.height = '850px'; 
                // iframe.style.minHeight = '850px'; 
                iframe.setAttribute('scrolling', 'yes'); // Це все ще може бути корисно
                iframe.style.overflow = 'auto'; // Вмикаємо внутрішній скролінг для iframe
                iframe.style.width = '100%';
                iframe.style.display = 'block'; 
                iframe.style.border = 'none'; 
            } else {
                console.warn('uQuiz iframe with ID "uquiz_embed_iframe" NOT found. Trying fallback for #uquiz_embed.');
                const fallbackEmbedDiv = document.getElementById('uquiz_embed');
                if (fallbackEmbedDiv) {
                    // ТУТ ТЕЖ МОЖНА ПРИБРАТИ ЖОРСТКЕ ЗАДАННЯ ВИСОТИ
                    // fallbackEmbedDiv.style.minHeight = '850px'; 
                    // fallbackEmbedDiv.style.height = 'auto'; 
                    fallbackEmbedDiv.style.overflow = 'auto';
                    fallbackEmbedDiv.style.width = '100%';
                    fallbackEmbedDiv.style.display = 'block';
                }
            }
        }, 1000); 
    }

    // Функція для завантаження uQuiz тесту
    function loadUQuizTest(quizId) {
        console.log(`Loading uQuiz test via direct iframe for ID: ${quizId}`);

        testQuizArea.innerHTML = ''; // очищаємо
        const iframe = document.createElement('iframe');
        iframe.src = `https://uquiz.com/quiz/${quizId}`;
        iframe.style.width = '100%';
        iframe.style.maxWidth = '800px';
        iframe.style.height = '850px';
        iframe.style.border = 'none';
        iframe.setAttribute('scrolling', 'yes');

        testQuizArea.appendChild(iframe);
        testQuizArea.style.display = 'block';
        testQuizArea.style.justifyContent = 'bottom';
        testQuizArea.style.alignItems = 'bottom';
        testQuizArea.style.height = '900px';
        testQuizArea.style.minHeight = '0';

        if (testCatalogContainer) {
            testCatalogContainer.style.display = 'none';
        }
        backToTestsBtn.style.display = 'block';
        // Повністю очищаємо область тесту перед завантаженням нового
        console.log('Cleared testQuizArea completely.');


        // Перевіряємо та видаляємо старі скрипти uQuiz embed з DOM
        const existingUquizScripts = document.querySelectorAll('script[src="https://uquiz.com/embed.js"]');
        existingUquizScripts.forEach(script => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        });
        console.log('Removed all previous uQuiz embed scripts.');

        // 3. Створюємо абсолютно новий div для uQuiz embed кожен раз
        // Uquiz embed.js сам знайде цей div і вбудує iframe всередину нього
        const newUquizEmbedDiv = document.createElement('div');
        newUquizEmbedDiv.id = 'uquiz_embed';
        newUquizEmbedDiv.setAttribute('data-quiz-id', quizId);
        newUquizEmbedDiv.setAttribute('data-width', '100%'); 
        
        testQuizArea.appendChild(newUquizEmbedDiv);
        console.log('Created and appended new #uquiz_embed div.');

        // 4. Динамічно створюємо та додаємо НОВИЙ скрипт uQuiz
        const script = document.createElement('script');
        script.src = "https://uquiz.com/embed.js";
        script.async = true; 
        script.onload = () => {
            console.log(`uQuiz embed script loaded successfully for quiz ID: ${quizId}`);
            applyUquizIframeStyles(); // Застосовуємо стилі після завантаження
        };
        script.onerror = () => {
            console.error(`Failed to load uQuiz embed script for quiz ID: ${quizId}`);
            testQuizArea.innerHTML = '<p style="color: red; text-align: center;">Вибачте, не вдалося завантажити тест. Спробуйте пізніше або перевірте підключення до Інтернету.</p>';
        };
        document.body.appendChild(script); 
        console.log('Added new uQuiz embed script to body.');

        // Показуємо область тесту та приховуємо карусель


        if (testCatalogContainer) { 
            testCatalogContainer.style.display = 'none'; 
        }
        backToTestsBtn.style.display = 'block'; 
        console.log('Test area displayed, carousel hidden, back button shown.');
    }

    // Функція для приховування тесту та показу каруселі
    function hideUQuizTest() {
        console.log('Hiding uQuiz test and showing carousel.');
        testQuizArea.innerHTML = ''; 
        testQuizArea.style.display = 'none'; 
        
        const existingUquizScripts = document.querySelectorAll('script[src="https://uquiz.com/embed.js"]');
        existingUquizScripts.forEach(script => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        });
        console.log('Removed all uQuiz embed scripts on hide.');

        if (testCatalogContainer) { 
            testCatalogContainer.style.display = 'block'; 
            if (splideInstance) { 
                splideInstance.refresh(); 
                console.log('Splide refreshed.');
            }
        }
        backToTestsBtn.style.display = 'none'; 
    }
    function applyUquizIframeStyles() {

        const iframe = document.getElementById('uquiz_embed_iframe'); 
        if (iframe) {
            console.log('uQuiz iframe found by ID. Applying custom styles.');
            iframe.style.height = '200px'; // <-- Це проблема!
            iframe.style.minHeight = '200px'; // <-- Це проблема!
            iframe.style.maxHeight = '900px'; // <-- Це проблема!
            iframe.setAttribute('scrolling', 'yes'); 
                iframe.style.overflow = 'auto'; 
                iframe.style.width = '100%';
                iframe.style.display = 'block'; 
                iframe.style.border = 'none'; 
            } else {
                const fallbackEmbedDiv = document.getElementById('uquiz_embed');
                if (fallbackEmbedDiv) {
                    fallbackEmbedDiv.style.minHeight = '850px'; // <-- Це проблема!
                    fallbackEmbedDiv.style.height = 'auto'; 
                    fallbackEmbedDiv.style.overflow = 'auto';
                    fallbackEmbedDiv.style.width = '100%';
                    fallbackEmbedDiv.style.display = 'block';
                }
            }
        }

    // =========================================================================
    // ОНОВЛЕНИЙ ОБРОБНИК ПОДІЙ ДЛЯ КНОПОК "ПРОЙТИ ТЕСТ" (ДЕЛЕГУВАННЯ)
    // =========================================================================
    if (testCatalogContainer) { // Перевірка на існування елемента перед додаванням обробника
        testCatalogContainer.addEventListener('click', (event) => {
            const targetButton = event.target.closest('.start-test-btn');
            if (targetButton) {
                const testId = targetButton.dataset.testId;
                const testData = testsData[testId];
                console.log(`Clicked on test button with testId: ${testId}`);

                if (testData && testData.uquizId) {
                    loadUQuizTest(testData.uquizId);
                    // Прокрутка до області тесту, можливо з невеликим відступом
                    testQuizArea.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                } else {
                    console.error(`uQuiz ID not found for test ID: ${testId}`);
                    alert('Вибачте, тест недоступний.');
                }
            }
        });
        console.log('Event listener for .start-test-btn attached to #test-carousel.');
    } else {
        console.warn('Could not attach event listener: #test-carousel not found.');
    }


    // Обробник подій для кнопки "Назад до тестів"
    if (backToTestsBtn) {
        backToTestsBtn.addEventListener('click', hideUQuizTest);
        console.log('Event listener for back-to-tests-btn attached.');
    }

    // Виправлення: У попередньому коді була помилка: closeStoryButton був присвоєний двічі
    // storyModalCloseButton.addEventListener('click', closeStoryButton); // Було: closeStoryButton - це функція
    // Правильно:
    if (storyModalCloseButton) {
        storyModalCloseButton.addEventListener('click', closeStoryModal);
    }
}); // Кінець DOMContentLoaded