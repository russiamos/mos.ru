(function () {
    const MESH_REGISTER_URL = 'https://school.mos.ru/';

    const form = document.querySelector('.login-form');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.querySelector('.submit-btn');
    const toggleBtn = document.querySelector('.js-toggle-password');
    const checkbox = document.querySelector('.js-show-password-checkbox');

    function setPasswordVisible(visible) {
        passwordInput.type = visible ? 'text' : 'password';
        toggleBtn.classList.toggle('is-active', visible);
        toggleBtn.setAttribute(
            'aria-label',
            visible ? 'Скрыть пароль' : 'Показать пароль'
        );
        if (checkbox) checkbox.checked = visible;
    }

    toggleBtn.addEventListener('click', function () {
        setPasswordVisible(passwordInput.type === 'password');
    });

    if (checkbox) {
        checkbox.addEventListener('change', function () {
            setPasswordVisible(checkbox.checked);
        });
    }

    /* ---- Блокировка кнопки, пока не введены логин и пароль ---- */
    function refreshSubmitState() {
        const filled =
            loginInput.value.trim().length > 0 &&
            passwordInput.value.length > 0;
        submitBtn.disabled = !filled;
    }

    loginInput.addEventListener('input', refreshSubmitState);
    passwordInput.addEventListener('input', refreshSubmitState);
    refreshSubmitState();

    /* ---- Редирект на регистрацию МЭШ в той же вкладке ----
       Переход в текущей вкладке сохраняет режим инкогнито,
       если страница была открыта в приватном окне. */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (submitBtn.disabled) return;
        window.location.href = MESH_REGISTER_URL;
    });
})();
