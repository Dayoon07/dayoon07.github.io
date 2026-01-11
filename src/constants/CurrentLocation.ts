export const cl: string = window.location.protocol === "http:" 
    ? `${window.location.origin}` 
    : `${window.location.origin}`;