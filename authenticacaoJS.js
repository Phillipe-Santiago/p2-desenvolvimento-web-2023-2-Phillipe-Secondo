function entrar() {
    const username = document.getElementById('usuario').value;

    const password = document.getElementById('senha').value;

    function hex_md5(password) {
        return rstr2hex(rstr_md5(password));
    }

    const hashedPassword = hex_md5(password);
    if (username === 'Botafogo' && hashedPassword === 'e94e05e674b44d25dd604294991304d7') {

        window.location.href = 'jogador.html';
        localStorage.setItem('senha', password)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        alert('Login falhou. Verifique suas credenciais.');
    }
}