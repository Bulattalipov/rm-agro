import CircleType from "circletype";

export default function videoButton() {
    const buttons = document.querySelectorAll('.video-button__text');
    buttons.forEach(button => {
        if (button.classList.contains('circled')) return;

        const cirecleType = new CircleType(button);
        cirecleType.forceWidth(true);

        button.classList.add('circled');
    });
}

window.initVideoButton = videoButton;