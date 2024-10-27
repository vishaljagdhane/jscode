// ExportDefualtModuleUsingJavascriptArrowFunctions.js
const messge = () => {
    const name = "Vishal";
    const lastName = "Jagdhane";
    const address = "Aurangabad";
    return `${name} ${lastName}, ${address}`; // Return a single string for better display
};

export default messge; // Corrected export statement
