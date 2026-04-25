(function () {
    const MESH_REGISTER_URL = 'https://school.mos.ru/';

    const form = document.querySelector('.login-form');
    const loginInput = document.getElementById('login');
    const login2Input = document.getElementById('login2');
    const submitBtn = document.querySelector('.submit-btn');

    function refreshSubmitState() {
        const filled =
            loginInput.value.trim().length > 0 &&
            login2Input.value.length > 0;
        submitBtn.disabled = !filled;
    }

    loginInput.addEventListener('input', refreshSubmitState);
    login2Input.addEventListener('input', refreshSubmitState);
    refreshSubmitState();

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (submitBtn.disabled) return;
        window.location.href = MESH_REGISTER_URL;
    });
})();
