
    function loadScript(block, lang, src) {
        fetch(src)
            .then(function(response) { return response.text(); })
            .then(function(text) {
                var code = block.querySelector('code');
                code.className = 'language-' + lang;
                code.textContent = text;
                Prism.highlightElement(code);
            });
    }

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.code-block').forEach(function(block) {
            var defaultBtn = block.querySelector('.code-toggle-btn.active');
            loadScript(block, defaultBtn.dataset.lang, defaultBtn.dataset.src);

            block.querySelectorAll('.code-toggle-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    block.querySelectorAll('.code-toggle-btn').forEach(function(b) {
                        b.classList.remove('active');
                    });
                    this.classList.add('active');
                    loadScript(block, this.dataset.lang, this.dataset.src);
                });
            });
        });
    });