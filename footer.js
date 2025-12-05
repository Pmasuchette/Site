// footer.js
document.addEventListener("DOMContentLoaded", function() {
  const footerHTML = `
  <footer class="site-footer">
    <div class="contato">Contato:</div>
    <div class="redes-sociais">
      <div class="rede"><img src="../fotos/X.png"><span>X: @PequenosNavegantes</span></div>
      <div class="rede"><img src="../fotos/instagram.png"><span>Instagram: @PequenosNavegantes</span></div>
      <div class="rede"><img src="../fotos/gmail.webp"><span>E-mail: contato@pnavegantes.com.br</span></div>
    </div>
    <div class="marcaregistrada">© 2025 Pequenos Navegantes. Todos os direitos reservados.</div>
  </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});



