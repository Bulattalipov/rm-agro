export default function fileInputs() {
    const inputs = document.querySelectorAll('.js-input-file');

    inputs.forEach( input => {
        input.addEventListener('change', function (e) {
            const inputContainer = input.closest('.js-input-file-container');
            const inputFileDesc = inputContainer.querySelector('.js-input-file-desc');

            inputFileDesc.innerText = this.files[0].name;
        });
    });
}