(function () {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.js-toggle-password');
    const checkbox = document.querySelector('.js-show-password-checkbox');

    function setVisible(visible) {
        passwordInput.type = visible ? 'text' : 'password';
        toggleBtn.classList.toggle('is-active', visible);
        toggleBtn.setAttribute(
            'aria-label',
            visible ? 'Скрыть пароль' : 'Показать пароль'
        );
        if (checkbox) checkbox.checked = visible;
    }

    toggleBtn.addEventListener('click', function () {
        setVisible(passwordInput.type === 'password');
    });

    if (checkbox) {
        checkbox.addEventListener('change', function () {
            setVisible(checkbox.checked);
        });
    }
})();
