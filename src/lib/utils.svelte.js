export function useValidation() {
    // Export reactive state
    let validate = $state(false);

    // Method 1: For SvelteKit forms (use:enhance) like QuestionBox
    const serverSubmit = ({ cancel, formElement }) => {
        validate = true;
        if (!formElement.checkValidity()) {
            cancel();
            return;
        }
        return async ({ update }) => {
            await update();
            validate = false; // Reset after submission
        };
    };

    // Method 2: For Javascript forms (Login)
    const clientSubmit = (formElement) => {
        validate = true;
        return formElement.checkValidity(); // Returns true if valid, false if errors
    };

    return {
        get isActive() { return validate; },
        serverSubmit,
        clientSubmit
    };
}

export function setupProfileIcon(name) {
    const NAMES = name.split(" ");
    let result = "";

    let length = 0;
    NAMES.forEach((element) => {
        if (length >= 2) return result;
        result += element.charAt(0);
        length++;
    });

    return result;
}